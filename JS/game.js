class Events {
    constructor(element) {
        this.element = element;
    }

    on(eventName, func) {
        this.element.addEventListener(eventName, func);
    }

    off(eventName, func) {
        this.element.removeEventListener(eventName, func);
    }

    dispatch(eventName) {
        this.element.dispatchEvent(new CustomEvent(eventName));
    }
}

class Submarine extends Events {
    move(y) {
        this.element.style.setProperty('--position', `${y}px`);
    }

    getRect() {
        return this.element.getBoundingClientRect();
    }
}

class GameElement extends Events {
    start(screen, startPositionTop, startPositionLeft, targetPositionLeft, speed) {
        this.element.style.setProperty('--position-top', startPositionTop + 'px');
        this.element.style.setProperty('--position-left', startPositionLeft + 'px');
        this.element.style.setProperty('--speed', speed + 's');

        screen.appendChild(this.element);
        setTimeout(() => {
            this.element.style.setProperty('--position-left', targetPositionLeft + 'px');
        }, 50);

        this.animationInterval = setTimeout(() => {
            this.dispatch('animationFinished');
            this.stop();

            this.animationInterval = undefined;
        }, speed * 1000);
    }

    stop() {
        if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        if (this.animationInterval) {
            clearTimeout(this.animationInterval);
        }
    }

    getRect() {
        return this.element.getBoundingClientRect();
    }
}

class Missile extends GameElement {
    static create() {
        const element = document.createElement('div');
        element.className = 'game--missile game--element';

        return new Missile(element);
    }
}


class Food extends GameElement {
    static create() {
        const element = document.createElement('div');
        element.className = 'game--food game--element';
        return new Food(element);
    }
}

class GameScreen extends Events {
    constructor(element, submarine) {
        super(element);

        this.missiles = new Set();

        this.element = element;
        this.submarine = submarine;

        const rect = element.getClientRects()[0];
        this.rect = new DOMRect(
            rect.x + 20,
            rect.y + 20,
            rect.width - 40,
            rect.height - 80
        );
    }

    start() {
        document.body.addEventListener('mousemove', (event) => {
            if (event.clientY < this.rect.top) {
                this.submarine.move(0);
            } else if (event.clientY > this.rect.bottom) {
                this.submarine.move(this.rect.height);
            } else {
                this.submarine.move(event.clientY - this.rect.top);
            }
        });

        this.interval = setInterval(() => {
            this.onInterval();
        }, 3000);

        this.collisionDetectionInterval = setInterval(() => {
            this.missiles.forEach((missile) => {
                if (isRectIntersecting(this.submarine.getRect(), missile.getRect())) {
                    this.stop();
                }
            })
        }, 40);
    }

    stop() {
        alert('Game Over');

        this.missiles.forEach(missile => {
            missile.stop();
        });

        clearInterval(this.interval);
        clearInterval(this.collisionDetectionInterval);
    }

    onInterval() {
        const missile = Missile.create();
        missile.start(this.element, Math.random() * this.rect.height, this.rect.width, -40, 6);
        this.missiles.add(missile);

        missile.on('animationFinished', () => {
            missile.stop();
            this.missiles.delete(missile);
        });
    }
}

function isRectIntersecting(rect1, rect2) {
    return rect1.top + rect1.height > rect2.top
        && rect1.left + rect1.width > rect2.left
        && rect1.bottom - rect1.height < rect2.bottom
        && rect1.right - rect1.width < rect2.right;
}

const submarine = new Submarine(document.querySelector('.game--submarine'));
const game = new GameScreen(document.querySelector('.game--screen'), submarine);

game.start();

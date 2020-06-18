// // const textHolder = document.querySelector('.functionality__description');
// // const btn = document.querySelector('.button__readmore');

// // function displayBlock() {
// //   textHolder.("functionality__description");
// // }

// // btn.addEventListener('click', toggleText);
// // toggleText();


// const theButton = document.getElementsByClassName('button__test');

// function hideTheButton() {
//     this.style.display = 'none';
// }

// function addEvent(target, type, handler) {
//     if (target.addEventListener) {
//         target.addEventListener(type, handler, false);
//     } else if (target.attachEvent) {
//         target.attachEvent('on' + type, function() {
//             return handler.call(target, window.event);
//         });
//     } else {
//         target['on' + type] = handler;
//     }
// }

// addEvent(theButton, 'click', hideTheButton);

$(document).ready(function() {
   $('.button__displaytext').click(function() {
     $(this).siblings(".functionality__description").toggle();
   });
 });
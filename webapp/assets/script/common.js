'use strict';

// $(function () {
window.addEventListener('DOMContentLoaded', function () {
  $('#openModal').click(function () {
    $('#modalArea').fadeIn();
  });
  $('#closeModal , #modalBg').click(function () {
    $('#modalArea').fadeOut();
  });
});

// var button = document.getElementById("modal_record");
// document.getElementById('modal_record').addEventListener('click', () => {
//   button.className = "click";
//   button.innerHTML = "<p></p>ローディング中";
//   setTimeout(function(){ button.className = button.className.replace("click", ""); button = "<p></p>ローディングボタン"; }, 3000);
// });


// const button = document.getElementById("modal_record");
// button.addEventListener('click', () =>{
//   $('button').click(function () {
//     $('.loader').fadeIn(3000);
//   }
// }

// $(function () {
  // window.addEventListener('', function () {
  //   $('modal_record').click(function () {
  //     $('open_record').fadeIn();
  //   });
  //   $('#closeModal , #modalBg').click(function () {
  //     $('openrecord').fadeOut();
  //   });
  // });


const button = document.getElementById('modal_record');
button.addEventListener('click' , () => {
  $('#modalArea').fadeOut();
  $('#start_record').fadeIn();
  $('#start_record').delay(3000).fadeOut();
  $('#end_record').delay(3000);
  $('#end_record').fadeIn(3000);
  $('#end_record').delay(4000).fadeOut();
})

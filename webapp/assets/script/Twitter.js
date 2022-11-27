'use strict';

let tweetbutton=document.getElementById("tweetbutton");

function tweet() {
  let s = document.getElementById("twitter").value;
  let url = document.location.href;


  if (s.length > 140) {
    //文字数制限
    alert("テキストが140字を超えています");
  } else {
    //投稿画面を開く
    url = "https://twitter.com/intent/tweet?text=" + s;
    window.open(url, "_blank", "width=600,height=300");
  }
}

if (tweetbutton.checked) {
  tweet();
}

function record() {
  if (tweetbutton.checked) {
    tweet();
  }
}
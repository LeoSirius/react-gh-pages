var box1 = document.getElementById('box1');
var title1 = document.getElementById('title1');
var icon1 = document.getElementById('icon1');
var description1 = document.getElementById('description1');
var viewMore1 = document.getElementById('view-more1');

handleEnter = function(e) {
  console.log('enter');
  console.log(title1)
  title1.style.transform = 'translateY(-10px)';
  icon1.style.transform = 'translateY(10px)';
  description1.style.transform = 'translateY(10px)';
  viewMore1.style.transform = 'translateY(60px)';
}

handleOut = function(e) {
  var e = event.toElement || event.relatedTarget;
  if (e.parentNode == box1 || e == box1) {
     return;
  }

  title1.style.transform = 'translateY(0px)';
  icon1.style.transform = 'translateY(0px)';
  description1.style.transform = 'translateY(0px)';
  viewMore1.style.transform = 'translateY(0px)';
}

box1.addEventListener('mouseenter', handleEnter);
box1.addEventListener('mouseout', handleOut);

var box2 = document.getElementById('box2');
var title2 = document.getElementById('title2');
var icon2 = document.getElementById('icon2');
var description2 = document.getElementById('description2');
var viewMore2 = document.getElementById('view-more2');

handleEnter = function(e) {
  console.log('enter');
  console.log(title2)
  title2.style.transform = 'translateY(-10px)';
  icon2.style.transform = 'translateY(10px)';
  description2.style.transform = 'translateY(10px)';
  viewMore2.style.transform = 'translateY(60px)';
}

handleOut = function(e) {
  var e = event.toElement || event.relatedTarget;
  if (e.parentNode == box2 || e == box2) {
     return;
  }

  title2.style.transform = 'translateY(0px)';
  icon2.style.transform = 'translateY(0px)';
  description2.style.transform = 'translateY(0px)';
  viewMore2.style.transform = 'translateY(0px)';
}

box2.addEventListener('mouseenter', handleEnter);
box2.addEventListener('mouseout', handleOut);

var box3 = document.getElementById('box3');
var title3 = document.getElementById('title3');
var icon3 = document.getElementById('icon3');
var description3 = document.getElementById('description3');
var viewMore3 = document.getElementById('view-more3');

handleEnter = function(e) {
  console.log('enter');
  console.log(title3)
  title3.style.transform = 'translateY(-10px)';
  icon3.style.transform = 'translateY(10px)';
  description3.style.transform = 'translateY(10px)';
  viewMore3.style.transform = 'translateY(60px)';
}

handleOut = function(e) {
  var e = event.toElement || event.relatedTarget;
  if (e.parentNode == box3 || e == box3) {
     return;
  }

  title3.style.transform = 'translateY(0px)';
  icon3.style.transform = 'translateY(0px)';
  description3.style.transform = 'translateY(0px)';
  viewMore3.style.transform = 'translateY(0px)';
}

box3.addEventListener('mouseenter', handleEnter);
box3.addEventListener('mouseout', handleOut);

// clickBox1 = function(e) {
//   window.href
// }

// box1.addEventListener('click', clickBox1);
// box2.addEventListener('click', clickBox2);
// box3.addEventListener('click', clickBox3);
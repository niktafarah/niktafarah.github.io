// JavaScript code
window.addEventListener('scroll', function() {
    var hiddenDiv = document.getElementById('section1');
    var contentPosition = document.getElementById('headerintro').getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;
  
    if (contentPosition <= windowHeight) {
      section1.style.opacity = '1';
    } else {
      section1.style.opacity = '0';
    }
  });
  
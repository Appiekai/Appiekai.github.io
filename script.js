window.onload = function() {
  document.getElementById("topLeft").focus(); //focus fixing div moving
  document.getElementById("main-click").click();
}

function main() {
  document.getElementById("main-click").click();
}

function about() {
  document.getElementById("about-click").click();
}

function shareOnTwitter() {
    var url = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href);
    window.open(url, "_blank", "width=600,height=400");
  }

function shareOnFacebook() {
    var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
    window.open(url, "_blank", "width=600,height=400");
  }

// About-Image

var dd = 4;
var cnt = 0;

function left() {

  var rr = document.getElementById('about-image');
  var imageDir = 'Element/About-Content/'; 

  var images = [
    "Content-1.jpg",
    "Content-2.jpg",
    "Content-3.jpg",
    "Content-4.jpg",
  ];

  cnt++;

  var len = images.length;
  if (cnt < dd) {
    rr.src = imageDir + images[cnt];
  }
  else if (cnt == len) {
    rr.src = imageDir + images[0];
    cnt = 0;
  }
}

function right() {

  var rr = document.getElementById('about-image');
  var imageDir = 'Element/About-Content/'; 

  var images = [
    "Content-1.jpg",
    "Content-2.jpg",
    "Content-3.jpg",
    "Content-4.jpg",
  ];

  cnt--;

  var len = images.length;
  if (cnt < dd) {
    rr.src = imageDir + images[cnt];
  }
  else if (cnt == len) {
    rr.src = imageDir + images[0];
    cnt = 0
  }

  if (cnt < 0) {
    rr.src = imageDir + images[3];
    cnt = 3
  }
}

function highlightText(element) {
  var current = document.querySelector(".sidetext-highlight");
  if (current) {
    current.classList.remove("sidetext-highlight");
  }
  element.classList.add("sidetext-highlight");
}

var sectionEntered = {};

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  var sections = document.querySelectorAll('#main-content, #about-content, #roadmap-content, #team-content');

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var offsetTop = section.offsetTop;

    if (scrollTop >= offsetTop && scrollTop < offsetTop + section.offsetHeight && !sectionEntered[section.id]) {
      console.log('You are in section ' + section.id);

      var sectionLink = document.querySelector('a[href="#' + section.id + '"]');
      if (sectionLink && typeof sectionLink.onclick === 'function') {
        sectionLink.onclick();
      } else if (sectionLink) {
        // remove the click() method and apply the function directly
        sectionLink.click();
      }

      sectionEntered[section.id] = true;
    } else if (scrollTop < offsetTop || scrollTop >= offsetTop + section.offsetHeight) {
      sectionEntered[section.id] = false;
    }
  }
});
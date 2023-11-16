var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
};

var menuItems = document.querySelectorAll('#nav li a');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    var isParentMenu = this.nextElementSibling;
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
  header.classList.add('pull-right');








// var header = document.getElementById('header');
// var mobileMenu = document.getElementById('mobile-menu');
// var nav = document.querySelector('nav')

// mobileMenu.onclick = function () { 
//   header.classList.toggle('hide')
//   nav.classList.toggle('expand')
// }
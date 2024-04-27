/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
// import $ from 'jquery';
// import 'what-input';
// import "core-js/stable";
// import "regenerator-runtime/runtime";
console.log("Test message");
document.addEventListener('DOMContentLoaded', function () {
  var menuItemsWithSubmenu = document.querySelectorAll('.menu-item:has(ul) > a'); // Selects only menu items that have a submenu

  menuItemsWithSubmenu.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
      var submenu = this.nextElementSibling;

      if (submenu && submenu.tagName.toLowerCase() === 'ul') {
        event.preventDefault(); // Prevent the default anchor behavior

        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=app.js.map
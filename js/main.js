/* ********************************* */
/* NOTE : J'ai utilisé Jquery et ES5 */
/* ********************************* */

function __expandMainHeight(WindowHeight, HeaderHeight, MainHeight) {
  const DifferenceHeight = HeaderHeight + MainHeight;
  $('.main').height(MainHeight + (WindowHeight - DifferenceHeight));
}

function __reduceListHeight(WindowHeight, HeaderHeight, MainHeight) {
  const item = $('.product-info-item');
  const itemList = $('.product-info-list .product-info-item');
  const listLength = item.length;
  var indexInvert = listLength - 1;

  $(itemList).each(function() {
    indexInvert--;
    if (indexInvert >= 0) {
      itemList[indexInvert].remove();
    }
    
    loadNewHeight();
  });
}

function initCss() {
  $('html').css("height", "100%");
  $('body').css({width: "100%", height: "100%", display: "inline-block"});
  $('.title').css({width: "100%", display: "inline-block"});
}

function loadNewHeight() {
  const WindowHeight = $(window).height();
  const HeaderHeight = $('.header').outerHeight();
  const MainHeight = $('.main').height();
  const CalculatedWindowHeight = HeaderHeight + MainHeight;

  if (WindowHeight > CalculatedWindowHeight) {
    console.log("---> IF");
    __expandMainHeight(WindowHeight, HeaderHeight, MainHeight);
  }
  else if (WindowHeight < CalculatedWindowHeight) {
    console.log("ELSE IF");
    __reduceListHeight(WindowHeight, HeaderHeight, MainHeight);
  }
}

$(document).ready(function() {
  initCss();
  loadNewHeight();
});
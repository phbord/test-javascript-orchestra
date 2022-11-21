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

function __removeList() {
  $('.product-info-list').remove();
}

function initCss() {
  $('html').css("height", "100%");
  $('body').css({width: "100%", height: "100%", display: "inline-block"});
  $('.title').css({width: "100%", display: "inline-block"});
}

function loadNewHeight() {
  const WindowHeight = $(window).height();
  const HeaderHeight = $('.header').outerHeight(true);
  const MainHeight = $('.main').height();
  const CalculatedWindowHeight = HeaderHeight + MainHeight;
  const TitleHeight = $('.title').outerHeight(true);
  const AmountHeight = $('.product-info-price').outerHeight(true);
  const DifferenceHeight = WindowHeight - (TitleHeight + AmountHeight);

  if (WindowHeight < MainHeight) {
    // CAS mode paysage
    __removeList();
    $('.main').height(DifferenceHeight);
  }
  else if (WindowHeight > CalculatedWindowHeight) {
    __expandMainHeight(WindowHeight, HeaderHeight, MainHeight);
  }
  else if (WindowHeight < CalculatedWindowHeight) {
    __reduceListHeight(WindowHeight, HeaderHeight, MainHeight);
  }
}

$(document).ready(function() {
  initCss();
  loadNewHeight();
});
function initCss() {
  $('html').css("height", "100%");
  $('body').css({width: "100%", height: "100%", display: "inline-block"});
  $('.title').css({width: "100%", display: "inline-block"});
}

function expandMainBlockHeight(WindowHeight, MainHeight, DifferenceHeight) {
  $('.main').height(MainHeight + (WindowHeight - DifferenceHeight));
  console.log(`>>> MainHeight:${$('.main').height()}`);
}

function loadPageHeight() {
  initCss();

  const WindowHeight = $(window).height();
  const HeaderHeight = $('.header').outerHeight();
  const MainHeight = $('.main').height();
  const DifferenceHeight = HeaderHeight + MainHeight;

  if (WindowHeight > DifferenceHeight) {
    expandMainBlockHeight(WindowHeight,  MainHeight, DifferenceHeight);
  }
  else if (WindowHeight < DifferenceHeight) {
    console.log("ELSE");
  }
}

$( document ).ready(function() {
  loadPageHeight();
});
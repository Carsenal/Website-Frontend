function initScroll(){
  window.onscroll = onScroll;
  onScroll();
}
function onScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if(scrolled > 100) scrolled = 100;
  scrolled = (0.82 * scrolled) + 10;
  document.getElementById("scrollBar").style.height = scrolled + "px";
}

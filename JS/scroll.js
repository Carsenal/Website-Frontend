function initScroll(){
  window.onscroll = onScroll;
  document.getElementById("screenContainer").onscroll = onScroll;
  onScroll();
}
function onScroll() {
  var container = document.getElementById("screenContainer");
  var winScroll = container.scrollTop;
  var height = container.scrollHeight - container.offsetHeight;
  var scrolled = (winScroll / height) * 100;
  if(scrolled > 100) scrolled = 100;
  scrolled = (0.82 * scrolled) + 10;
  document.getElementById("scrollBar").style.height = scrolled + "px";
}

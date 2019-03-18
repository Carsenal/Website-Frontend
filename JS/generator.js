// Generator.js
// By: Carson Riker
// Generates header information as well as footer for each document

function generateHeader(){
  var head = document.getElementsByTagName("head")[0];
  var charset = document.createElement("meta");
  charset.setAttribute("charset", "utf-8");
  head.appendChild(charset);
  var icon = document.createElement("link");
  icon.setAttribute("rel", "shortcut icon");
  icon.setAttribute("href", "/Images/icon.ico");
  head.appendChild(icon);
  var title = document.createElement("title");
  title.innerHTML = "Carson Riker";
  head.appendChild(title);
  var description = document.createElement("meta");
  description.setAttribute("name", "description");
  description.setAttribute("content", "Carson's personal Website");
  head.appendChild(description);
  var author = document.createElement("meta");
  author.setAttribute("name", "author");
  author.setAttribute("content", "Carson Riker");
  head.appendChild(author);
  var style = document.createElement("link");
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("href", "/CSS/universal.css");
  head.appendChild(style);
}

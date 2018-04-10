var currentIndex = 0;
var totalCount = 2;
var myImage2 = document.getElementById('myImage2');

setInterval(function() {
  currentIndex++;
  if (currentIndex > totalCount)
    currentIndex = 0;

  if (currentIndex == 0)
    myImage2.style.backgroundColor = "red";
  if (currentIndex == 1)
    myImage2.style.backgroundColor = "blue";
  if (currentIndex == 2)
    myImage2.style.backgroundColor = "green";
    
}, 2000);
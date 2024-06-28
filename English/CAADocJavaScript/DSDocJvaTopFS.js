/*
*  Resets the position of the element as on browser resizes.
*/
function resetPosition() {

  var browserWidth = document.body.clientWidth;
  var dslogo = document.getElementById('dsLogo');
  var uatext = document.getElementById('UAText');
  //var searchForm = document.getElementById('searchForm');
  var compass = document.getElementById('3dCompass');
  var printIcon = document.getElementById('printPage');
  //var bookmark = document.getElementById('fav_bookmark');
  dslogo.style.left = "0px";
  dslogo.style.top = "0px";
  uatext.style.left = "156px";
  uatext.style.top = "19px";
  if (browserWidth >= 435) {	
    var flexibleLength = browserWidth - 435;
    //searchForm.style.left = 380 + flexibleLength + "px";
    //printIcon.style.left = 654 + flexibleLength + "px";
    printIcon.style.left = 342 + flexibleLength + "px";
    //bookmark.style.left= 700 + flexibleLength + "px";
    compass.style.left = 387 + flexibleLength + "px";
  } else {
    //searchForm.style.left = 380 + "px";
    //printIcon.style.left = 654 + "px";
    printIcon.style.left = 342 + "px";
    //bookmark.style.left= 700 + "px";
    compass.style.left = 387 + "px";
  }
}
/*
*  Set the position of the element depending on browser size.
*/
function setPosition() {

  var browserWidth = document.body.clientWidth;
  var dslogo = document.getElementById('dsLogo');
  var uatext = document.getElementById('UAText');
  //var searchForm = document.getElementById('searchForm');
  var compass = document.getElementById('3dCompass');
  var printIcon = document.getElementById('printPage');
  //var bookmark = document.getElementById('fav_bookmark');
  dslogo.style.left = "0px";
  dslogo.style.top = "0px";
  uatext.style.left = "156px";
  uatext.style.top = "19px";
  if (browserWidth >= 435) {	
    var flexibleLength = browserWidth - 435;
    //searchForm.style.left = 320 + flexibleLength + "px";
    //printIcon.style.left = 594 + flexibleLength + "px";
    printIcon.style.left = 342 + flexibleLength + "px";
    //bookmark.style.left= 640 + flexibleLength + "px";
    compass.style.left = 387 + flexibleLength + "px";
  } else {
    //searchForm.style.left = 320 + "px";
    //printIcon.style.left = 594 + "px";
    printIcon.style.left = 342 + "px";
    //bookmark.style.left= 640 + "px";
    compass.style.left = 387 + "px";
  }
}
/*
 * Stores the browser window width to compute the search form  when resizing.
 */
var browserWidthPrev;

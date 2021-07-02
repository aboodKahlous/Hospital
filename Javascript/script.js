$(document).ready(function() {
  $('.sideMenuToggler').on('click', function() {
    $('.wrapper').toggleClass('active');
  });

  var adjustSidebar = function() {
    $('.sidebar').slimScroll({
      height: document.documentElement.clientHeight - $('.navbar').outerHeight()
    });
  };

  adjustSidebar();
  $(window).resize(function() {
    adjustSidebar();
  });
});



function fuck (j){
  var count = j;
  document.getElementById("5ra").innerHTML="";
  for(var i=1 ; i <= count;i++){

    var node = document.createElement("INPUT");

    node.type='time';

    node.name='time_[]';

    node.classList.add("form-group");    // Append the text to <li>

    node.classList.add("form-control")

    document.getElementById("5ra").appendChild(node);
}}
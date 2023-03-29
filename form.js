// get the modal
var modal = document.getElementById("myModal");

// get the button that opens the alert

var btn=document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var myform = document.getElementById("contactForm");


btn.onclick=function(event){
  event.preventDefault();
  modal.style.display = "block";
  myform.reset();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  
}
  
// When the user clicks anywhere outside of the modal, close it
// window.onclick=function(event) {                    
//   if(event.target.id != "myModal") {
//     modal.style.display = "none";
//  }
// }





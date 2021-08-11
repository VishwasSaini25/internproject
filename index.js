var slider = document.getElementById("myRange");
var squantity = document.getElementById("squantity");
var output = document.getElementById("demo");

output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}
output.innerHTML = squantity.value;
squantity.oninput = function() {
  output.innerHTML = this.value;
}
const src1 ="https://m.media-amazon.com/images/I/7138e-x0QeL._SX679_.jpg";
const src2 ="https://m.media-amazon.com/images/I/71DSo1te5sL._SX425_.jpg"; 
const src3 ="https://m.media-amazon.com/images/I/71lHkw7BVAL._SX425_.jpg"
document.getElementById("car1").onclick= function(){
    document.getElementById("fullimage").setAttribute("src",src1); 
    document.getElementById("car2").classList.remove("active");
    document.getElementById("car3").classList.remove("active");
    document.getElementById("car1").classList.add("active");


}
document.getElementById("car2").onclick= function(){
    document.getElementById("fullimage").setAttribute("src",src2);
    document.getElementById("car1").classList.remove("active");
    document.getElementById("car3").classList.remove("active");
    document.getElementById("car2").classList.add("active");
}
document.getElementById("car3").onclick= function(){
    document.getElementById("fullimage").setAttribute("src",src3);
    document.getElementById("car1").classList.remove("active");
    document.getElementById("car2").classList.remove("active");
    document.getElementById("car3").classList.add("active");
}




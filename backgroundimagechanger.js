var images=["images/p1.jpg","images/p2.jpg","images/p4.jpg","images/p5.jpg","images/p6.jpg","images/p7.jpg","images/p8.jpg","images/p9.jpg"];

var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
btn1.addEventListener('click',function(e){
    var random1=Math.floor(Math.random()*8);
    var body=document.querySelector('body');
    body.style.backgroundImage="url(' "+images[random1]+ " ')";
});
btn2.addEventListener('click',function(e){
    var random2=Math.floor(Math.random()*8);
    var body=document.querySelector('body');
    body.style.backgroundImage="url(' "+images[random2]+ " ')";
    
});
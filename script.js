window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});

function sendWhatsApp(){

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const service =
document.getElementById("service").value;

const message =
document.getElementById("message").value;

const text =
`Hello P Square Vinqora,

Name: ${name}

Phone: ${phone}

Service: ${service}

Message:
${message}`;

window.open(
`https://wa.me/919488645732?text=${encodeURIComponent(text)}`,
"_blank"
);

}

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight-100){

el.classList.add("active");

}

});

});











const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

let updateCount = () => {

let target = +counter.getAttribute("data-target");
let count = +counter.innerText;

let speed = 50;

if(count < target){
counter.innerText = count + 1;
setTimeout(updateCount, speed);
}

}

updateCount();

});

const glow = document.querySelector(".cursor-glow");

if(glow){
    document.addEventListener("mousemove",(e)=>{
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}

const aurora = document.querySelector(".aurora");

if(aurora){
    document.addEventListener("mousemove",(e)=>{
        aurora.style.left = e.clientX + "px";
        aurora.style.top = e.clientY + "px";
    });
}


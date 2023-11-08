// let I=document.querySelectorAll(".img-container");

let imageSrc = [];
for(let i =0;i<document.querySelectorAll(".gallery img").length;i++)
document.querySelectorAll(".gallery img")[i].addEventListener("mouseover", function () {
    document.querySelector(".modal").classList.add("open");
    document.querySelector(".modal > img").setAttribute("src", "img/full/"+(i+1)+".jpg");
}
);
//removing image when we click anywere on the page
document.querySelector(".modal").addEventListener("mouseover", function (){
    document.querySelector(".modal").classList.remove("open")
})




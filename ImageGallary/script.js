const galleryData = [

{
title:"Mountain",
category:"nature",
image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
},

{
title:"Forest",
category:"nature",
image:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
},

{
title:"Waterfall",
category:"nature",
image:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800"
},

{
title:"City Skyline",
category:"city",
image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800"
},

{
title:"Downtown",
category:"city",
image:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800"
},

{
title:"Night City",
category:"city",
image:"https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800"
},

{
title:"Dog",
category:"animals",
image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800"
},

{
title:"Cat",
category:"animals",
image:"https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=800"
},

{
title:"Horse",
category:"animals",
image:"https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800"
},

{
title:"Pizza",
category:"food",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
},

{
title:"Burger",
category:"food",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
},

{
title:"Dessert",
category:"food",
image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800"
},

{
title:"Beach",
category:"travel",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
},

{
title:"India Gate",
category:"travel",
image:"https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800"
},

{
title:"Island",
category:"travel",
image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800"
}

];

const gallery = document.getElementById("gallery");
const search = document.getElementById("search");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const caption = document.getElementById("caption");

let currentImages = [];
let currentIndex = 0;

function renderGallery(data){

currentImages = data;

gallery.innerHTML = "";

data.forEach((item,index)=>{

gallery.innerHTML += `
<div class="card">

<img src="${item.image}" data-index="${index}">

<div class="overlay">

<h3>${item.title}</h3>

<i class="fa-regular fa-heart fav"></i>

</div>

</div>
`;

});

attachEvents();
}

renderGallery(galleryData);

function attachEvents(){

document
.querySelectorAll(".card img")
.forEach(img=>{

img.addEventListener("click",()=>{

currentIndex =
parseInt(img.dataset.index);

openLightbox();

});

});

document
.querySelectorAll(".fav")
.forEach(icon=>{

icon.addEventListener("click",(e)=>{

e.stopPropagation();

icon.classList.toggle("active");

if(icon.classList.contains("active")){

icon.classList.replace(
"fa-regular",
"fa-solid"
);

}else{

icon.classList.replace(
"fa-solid",
"fa-regular"
);

}

});

});

}

function openLightbox(){

lightbox.style.display="flex";

updateLightbox();
}

function updateLightbox(){

lightboxImg.src =
currentImages[currentIndex].image;

caption.innerText =
currentImages[currentIndex].title;
}

document
.querySelector(".next")
.addEventListener("click",()=>{

currentIndex++;

if(currentIndex>=currentImages.length){
currentIndex=0;
}

updateLightbox();

});

document
.querySelector(".prev")
.addEventListener("click",()=>{

currentIndex--;

if(currentIndex<0){
currentIndex=
currentImages.length-1;
}

updateLightbox();

});

document
.querySelector(".close")
.addEventListener("click",()=>{

lightbox.style.display="none";

});

document
.querySelectorAll(".filter")
.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelector(".filter.active")
.classList.remove("active");

btn.classList.add("active");

const category =
btn.dataset.filter;

if(category==="all"){

renderGallery(galleryData);

}else{

const filtered =
galleryData.filter(item=>
item.category===category
);

renderGallery(filtered);

}

});

});

search.addEventListener("keyup",()=>{

const value =
search.value.toLowerCase();

const filtered =
galleryData.filter(item=>
item.title.toLowerCase()
.includes(value)
);

renderGallery(filtered);

});

document.addEventListener(
"keydown",
(e)=>{

if(lightbox.style.display!=="flex")
return;

if(e.key==="ArrowRight"){

document
.querySelector(".next")
.click();

}

if(e.key==="ArrowLeft"){

document
.querySelector(".prev")
.click();

}

if(e.key==="Escape"){

lightbox.style.display="none";

}

});

document
.getElementById("themeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("light");

});
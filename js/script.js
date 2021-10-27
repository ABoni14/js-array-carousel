// ARRAY CONSEGNATI
const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];
// //ARRAY CONSEGNATI

// DICHIARO LE VARIABILI
("item-small");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgBig = document.querySelector(".ab-col10");
const imgSmall = document.querySelector(".ab-col2");

// CONTATORE PER CICLARE LE FOTO
let contatore = 0;


// CICLO ARRAY DESCRIZIONE FOTO
for(let i = 0; i < items.length; i++){
  const imageCont = document.createElement("div");
  const littleRightImage = document.createElement("div");

  imageCont.className = "item";
  littleRightImage.className = "item-small";

  if(i === contatore){
    imageCont.classList.add("active");
    littleRightImage.classList.add("active-img");
  }

  imageCont.innerHTML = `<img class="w-100" src=${items[i]} alt="immagine grande">

  
  <div class="description">
  <h4>${title[i]}</h4>
  ${text[i]}</div>
  `;
  littleRightImage.innerHTML = `<img src=${items[i]} alt="immagine piccola">`;

  imgBig.append(imageCont);
  imgSmall.append(littleRightImage);
  
};


const imageCont = document.getElementsByClassName("item");
const littleRightImage = document.getElementsByClassName("item-small");
let index = 0;

prev.addEventListener("click", function(){
  imageCont[index].classList.remove("active");
  littleRightImage[index].classList.remove("active-img");
  index--;

  if(index < 0) index = imageCont.length -1;
  imageCont[index].classList += " active";

  littleRightImage[index].classList += " active-img";

});

next.addEventListener("click", function(){
  imageCont[index].classList.remove("active");
  littleRightImage[index].classList.remove("active-img");
  index++;

  if(index > imageCont.length -1) index = 0;
  imageCont[index].classList += " active";

  littleRightImage[index].classList += " active-img";
});
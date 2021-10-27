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
const item = document.getElementsByClassName("item");
const itemSmall = document.getElementsByClassName("item-small");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// CONTATORE PER CICLARE LE FOTO
let contatore = 0;

// FUNZIONI BOTTONE
prev.addEventListener("click",function(){
  console.log(item[contatore]);
  item[contatore].classList.remove("active");
  itemSmall[contatore].classList.remove("active-img");
  console.log(item[contatore]);
  contatore--;
  if(contatore < 0) contatore = item.length -1;
  console.log(contatore);
  item[contatore].classList.add("active");
  itemSmall[contatore].classList.add("active-img")
});

next.addEventListener("click", function(){
  console.log(item[contatore]);
  item[contatore].classList.remove("active");
  itemSmall[contatore].classList.remove("active-img");
  console.log(item[contatore]);
  contatore++;
  if(contatore > item.length -1) contatore = 0;
  console.log(contatore);
  item[contatore].classList.add("active");
  itemSmall[contatore].classList.add("active-img")
});

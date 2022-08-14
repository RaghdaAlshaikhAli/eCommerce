// setInterval(setClock, 1000)

// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')

// function setClock() {
//   const currentDate = new Date()
//   const secondsRatio = currentDate.getSeconds() / 60
//   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
//   setRotation(secondHand, secondsRatio)
//   setRotation(minuteHand, minutesRatio)
//   setRotation(hourHand, hoursRatio)
// }

// function setRotation(element, rotationRatio) {
//   element.style.setProperty('--rotation', rotationRatio * 360)
// }

// setClock()


let user_info = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.querySelector("#logout");

let username = localStorage.getItem("username");
if(username){
  links.remove();
  user_info.style.display = "flex";
  userDom.innerHTML = username;
}

logoutBtn.addEventListener('click' , function(){
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500)
});


// لو عندي عدد منتجات كتير عشان ما احمل على الموقع
let allProducts = document.querySelector(".products")
let product = [{
    id:1,
    title:"oppo",
    color:"black",
    imgURL:"image/10.jpg"
},
{
    id:2,
    title:"oppo",
    color:"black",
    imgURL:"image/10.jpg"
},
{
    id:3,
    title:"oppo",
    color:"black",
    imgURL:"image/10.jpg"
},
{
    id:4,
    title:"oppo",
    color:"black",
    imgURL:"image/10.jpg"
}
]
function drawItems(){
    let y= product.map((item)=>{
        return `
        <div class="product_item">
            <img class="product_item_img" src="${item.imgURL}" alt="">
            <div class="product_item_desc">
                <h2>${item.title}</h2>
                <p>the new mobile form oppo company</p>
                <span>${item.color}</span>
            </div>
            <div class="product_item_action">
                <button class="add_to_cart" onClick="addToCart(${item.id})">Add to cart</button>
                <i class="fav far fa_heart"></i>
            </div>
        </div>
        `
    })
    allProducts.innerHTML=y;
}
drawItems()

function check(){
    if(localStorage.getItem=("username")){
        window.location = "cartsproducts.html"
    } else{
        window.location="login.html"
    }
}

let cartsproductDiv=document.querySelector(".carts_products div");
function addToCart(id){
    let choosenItem = product.find((item)=> item.id===id); // يعني بدي تلاقيها
    cartsproductDiv.innerHTML +=`<p>${choosenItem.title}</p>`
}

// ////////////////////////////////////
let shopping_cartIcon = document.querySelector(".shopping_cart")
let cartsproducts=document.querySelector(".carts_products")
shopping_cartIcon.addEventListener("click",oppencart)

function oppencart(){
   if(cartsproductDiv.innerHTML !=""){
       if(cartsproducts.style.display=="block"){
           cartsproducts.style.display="none"
       }else{
        cartsproducts.style.display="block"
       }
   }
}
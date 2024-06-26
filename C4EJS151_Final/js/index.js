const top_header = document.querySelector("header");
window.addEventListener("scroll", function () {
    x = window.pageYOffset;
    console.log(x)
    if (x > 0) {
        top_header.classList.add("sticky")
    } else {
        top_header.classList.remove("sticky")
    }
})

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem = document.querySelectorAll(".dot")
let index = 0;
let imgNumber = imgPosition.length
imgPosition.forEach(function (image, index) {
    image.style.left = index * 100 + "%"
    dotItem[index].addEventListener("click", function () {
        sider(index)
    })
})
function imgSilde() {
    index++;
    if (index >= imgNumber) { index = 0 }
    sider(index)
}
function sider(index) {
    imgContainer.style.left = "-" + index * 100 + "%"
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSilde, 6000);
//Cartegory
const itemSliderBar = document.querySelectorAll(".cartegory-left-li");
itemSliderBar.forEach(function (menu, index) {
    menu.addEventListener("click", function () {
        menu.classList.toggle("block")
    })
})
//Product
let amountElement = document.getElementById('amount');
let amount = amountElement.value;
let render = (amounnt) => {
    amountElement.value = amounnt
}
let handlePlus = () => {
    amount++
    render(amount);

}
let handleMinus = () => {
    if (amount > 1)
        amount--
    render(amount);
}
amountElement.addEventListener('input', () => {
    amount = amountElement.value;
    amount = parseInt(amount);
    amount = (isNaN(amount) || amount == 0) ? 1 : amount;
    render(amount);

})
const intro = document.querySelector(".intro");
const products = document.querySelector(".products");
const preserve = document.querySelector(".preserve");
if (intro) {
    intro.addEventListener("click", function () {

        document.querySelector(".product-content-right-bottom-content-product").style.display = "none";
        document.querySelector(".product-content-right-bottom-content-preserve").style.display = "none";
        document.querySelector(".product-content-right-bottom-content-intro").style.display = "block";
    })
}
if (products) {
    products.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-content-intro").style.display = "none";
        document.querySelector(".product-content-right-bottom-content-preserve").style.display = "none";
        document.querySelector(".product-content-right-bottom-content-product").style.display = "block";
    })
}
if (preserve) {
    preserve.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-content-intro").style.display = "none";
        document.querySelector(".product-content-right-bottom-content-product").style.display = "none";
        document.querySelector(".product-content-right-bottom-content-preserve").style.display = "block";
    })
}
const downBtn = document.querySelector(".product-content-right-bottom-top");
if (downBtn) {
    downBtn.addEventListener("click", () => {
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB");
    })
}

const bigImg = document.querySelector(".product-content-left-big-img img");
const smallImg = document.querySelectorAll(".product-content-left-small-img img");
smallImg.forEach(function (imgItem, x) {
    imgItem.addEventListener("click", function () {
        bigImg.src = imgItem.src
    })
})
function location_cart() {
    location.assign("cart.html")
}
function location_delivery() {
    location.assign("delivery.html")
}
function location_payment() {
    location.assign("payment.html")
}
const tabs = document.querySelectorAll(".product-content-right-bottom-content-title-item");
tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => { tab.classList.remove('activeC') })
        tab.classList.add('activeC');
        var line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
    })
})

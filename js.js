const searchIcon1 = document.querySelector("#search-icon1");
const searchIcon2 = document.querySelector("#search-icon-1");
const searchInput1 = document.querySelector("#search-input1");

searchIcon1.addEventListener("click" , function(){
    searchInput1.style.display = "flex";
    searchIcon2.style.display = "flex";
    searchIcon1.style.display = "none";
})

searchIcon2.addEventListener("click" , function(){
    searchInput1.style.display = "none";
    searchIcon2.style.display = "none";
    searchIcon1.style.display = "flex";
})

const searchIcon3 = document.querySelector("#search-icon2");
const searchIcon4 = document.querySelector("#search-icon-2");
const searchInput2 = document.querySelector("#search-input2");

searchIcon3.addEventListener("click",function() {
    searchInput2.style.display = "flex";
    searchIcon3.style.display = "none";
    searchIcon4.style.display = "flex";
    searchIcon4.style.translate = "20% 25%"
    searchInput2.style.translate = "0 -20%"
})
searchIcon4.addEventListener("click" ,function(){
    searchInput2.style.display = "none";
    searchIcon3.style.display = "flex";
    searchIcon4.style.display = "none";
} )

const bar = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-xmark");
const headerBar = document.querySelector(".header-bar");

bar.addEventListener("click", function(){
    setTimeout(()=>{
        cross.style.display = "block";
        bar.style.display = "none";
    }, 150);
    headerBar.style.right = "0%";
})

cross.addEventListener("click", function(){
    setTimeout(()=>{
        cross.style.display = "none";
        bar.style.display = "flex";
    }, 150);
    headerBar.style.right = "-100%";
})
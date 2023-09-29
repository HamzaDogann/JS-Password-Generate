const passwordBox = document.getElementById("password");
const copyButton = document.getElementById("copy-btn");

const length = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;


function createPassword(){
    copyButton.textContent="content_copy";
    let password ="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];


    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value=password;
}

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value)
   
    if(passwordBox.value.length > 1){
        copyButton.textContent="check";
    }
        

}


// Informations about my links.
// script codes

const mainButton = document.getElementById("main-button");
const infoButtons = document.getElementById("info-buttons");


let infoVisible = false;

mainButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Ana butona tıklandığında belgeye tıklamayı engelle
    infoVisible = !infoVisible; // Ana butona her tıklamada görünürlüğü değiştir
    if (infoVisible) {
        infoButtons.style.display = "block"; // Bilgi linklerini göster
        infoButtons.style.right="-130px";
    } else {
        infoButtons.style.display = "none"; // Bilgi linklerini gizle
    }
});

// Ana buton dışında bir yere tıklanırsa linkleri gizle
document.addEventListener("click", () => {
    if (infoVisible) {
        infoButtons.style.display = "none";
        infoVisible = false;
    }
});




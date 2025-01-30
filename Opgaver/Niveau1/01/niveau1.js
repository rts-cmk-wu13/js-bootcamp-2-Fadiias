const button = document.getElementById("my-button"); 

const color1 = "rgb(192, 192, 192)"; 
const color2 = "rgb(0, 255, 0)";



button.style.backgroundColor = color1;
button.addEventListener("click", () => {
     if (button.style.backgroundColor === color1) { 
        button.style.backgroundColor = color2; 
    }
 else { 
    button.style.backgroundColor = color1; 
} 
});

/* /////////////////////// */




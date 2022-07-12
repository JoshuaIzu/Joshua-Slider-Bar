const range = document.getElementById('slider');
const slider = document.querySelector('.slider');
const hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
document.addEventListener("DOMContentLoaded", function hexrandom() {
    let hexcolor = '#';
    for(let i = 0; i < 6; i++){
        hexcolor += hex[getRandomNumber()];
    }
   slider.addEventListener('input', function() {
       slider.style.background = `linear-gradient(to right, ${hexcolor} ${this.value}%, #e0e0e0 ${this.value}%)`
       range.textContent = this.value;
       if(this.value == 0) {hexrandom};
       if(this.value == 30) {hexrandom()};
       if(this.value == 50) {hexrandom()};
       if(this.value ==70) {hexrandom()};
   });
   console.log(hexcolor)
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
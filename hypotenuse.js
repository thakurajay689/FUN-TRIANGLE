const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputE1= document.querySelector("#output");


function calculateSumofSquares(a,b){
    const sumofsquare=a*a+b*b;
    // console.log(sumofsquare);
    return sumofsquare; 
}




function calculatehypotenuse(){
    const sumofsquare = calculateSumofSquares(Number(sides[0].value),Number(sides[1].value));
    const lengthOfhypototenus=Math.sqrt(sumofsquare);
    outputE1.innerText ="The length of hypotenus is "+ lengthOfhypototenus;
}

hypotenuseBtn.addEventListener("click", calculatehypotenuse);


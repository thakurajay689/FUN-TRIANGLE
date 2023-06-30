const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");

function calculatesumAngles(angle1, angle2, angle3) {
  var sumofAngle = angle1 + angle2 + angle3;
//   console.log(sumofAngles);
  return sumofAngle;
}

function isTriangle() {
  const sumofAngles = calculatesumAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
if(sumofAngles===180){
    outputE1.innerText="Yah, The angles form a triangle";
}else{
    outputE1.innerText="Oh oh! The angle dont't form a triangle";
}
}

isTriangleBtn.addEventListener("click", isTriangle);

const leftSelector = document.getElementById('square-1');
const topSelector = document.getElementById('square-2');
const rightSelector = document.getElementById('square-3');
const bottomSelector = document.getElementById('square-4');

let x = 0;
let y = 0;
let adjustingRadius = false;

leftSelector.addEventListener('mousedown', e => {
  y = e.offsetY;
  adjustingRadius = true;
});

leftSelector.addEventListener('mousemove', e => {
  if (adjustingRadius === true) {
    changeRadius(y, e.offsetY);
    y = 0;
  }
});

window.addEventListener('mouseup', e => {
  if (adjustingRadius === true) {
    changeRadius(y, e.offsetY);
    y = 0;
    adjustingRadius = false;
  }
});


function changeRadius(y, yOffSet) {
  leftSelector.style.bottom = `-${yOffSet}px`;
  console.log(y, yOffSet);
}
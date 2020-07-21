const leftSelector = document.getElementById('square-1');
const topSelector = document.getElementById('square-2');
const rightSelector = document.getElementById('square-3');
const bottomSelector = document.getElementById('square-4');
const border = document.getElementById('border');
const inputText = document.getElementById('border-input');

let borderRadius = ['100%', '0%', '100%', '0%', '/', '0%', '100%', '0%', '100%'];


leftSelector.onmousedown = function (event) {
  const sidePixelLength = 494 - 123;
  let percentMoved = 0;
  let borderRadiusString = null;
  // centers the leftSelector at pageY coordinates
  function moveAt(pageY) { //(pageX, pageY) {
    // leftSelector.style.left = pageX - leftSelector.offsetWidth / 2 + 'px';
    if (pageY >= 123 && pageY <= 494) {
      leftSelector.style.top = pageY - 130 + 'px'; //pageY - leftSelector.offsetHeight / 2 + 'px';
      percentMoved = ((pageY - 123) / sidePixelLength).toFixed(2);

      if (percentMoved !== '0.00' || percentMoved !== '1.00') {
        borderRadius[5] = `${percentMoved.substring(2)}%`;
        borderRadius[8] = `${(100 - Number(percentMoved.substring(2)))}%`;
        borderRadiusString = String(borderRadius
          .join(',')
          .replace(/,/g, ' ')
          .split());
        border.style.borderRadius = borderRadiusString;
        inputText.value = borderRadiusString;
      }
    }
    // At pageY === 493 & 494 it glitches back to 0 100 0 100  ATTENTION!!!
    else if (pageY > 400) {
      border.style.borderRadius = '100% 0% 100% 0% / 100% 100% 0% 0%';
      inputText.value = '100% 0% 100% 0% / 100% 100% 0% 0%';
    }
    // console.log(borderRadiusString);
    console.log(pageY);
  }

  // move our absolutely positioned leftSelector under the pointer
  moveAt(event.pageY); //(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageY); //(event.pageX, event.pageY);
  }

  // (2) move the leftSelector on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the leftSelector, remove unneeded handlers
  window.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    window.onmouseup = null;
  };
};

leftSelector.ondragstart = function () {
  return false;
};
// Event listener vars
const topSelector = document.getElementById('square-1');
const rightSelector = document.getElementById('square-2');
const bottomSelector = document.getElementById('square-3');
const leftSelector = document.getElementById('square-4');
const border = document.getElementById('border');
const inputText = document.getElementById('border-input');
// Side lengths in pixels
const sidePixelLength = 494 - 123;
// Set initial border radius in array
let borderRadius = ['0%', '100%', '0%', '100%', '/', '100%', '0%', '100%', '0%'];

// Function for the left selector
leftSelector.onmousedown = function (event) {
  const sidePixelLength = 494 - 123;
  let percentMoved = 0;
  let borderRadiusString = null;
  // Set position of left selector and set border radius information
  function moveAt(pageY) { //(pageX, pageY) {
    // leftSelector.style.left = pageX - leftSelector.offsetWidth / 2 + 'px';
    if (pageY <= 494 && pageY >= 123) {
      leftSelector.style.top = pageY - 175 + 'px'; //pageY - leftSelector.offsetHeight / 2 + 'px';
      percentMoved = ((pageY - 123) / sidePixelLength).toFixed(2);

      if (percentMoved !== '0.00' && percentMoved !== '1.00') {
        borderRadius[5] = `${percentMoved.substring(2)}%`;
        borderRadius[8] = `${(100 - Number(percentMoved.substring(2)))}%`;
        borderRadiusString = String(borderRadius
          .join(',')
          .replace(/,/g, ' ')
          .split());
        border.style.borderRadius = borderRadiusString;
        inputText.value = borderRadiusString;
      } else if (percentMoved === '0.00') {
        borderRadius[5] = '0%';
        borderRadius[8] = '100%';
        borderRadiusString = String(borderRadius
          .join(',')
          .replace(/,/g, ' ')
          .split());
        border.style.borderRadius = borderRadiusString;
        inputText.value = borderRadiusString;
      } else if (percentMoved === '1.00') {
        borderRadius[5] = '100%';
        borderRadius[8] = '0%';
        borderRadiusString = String(borderRadius
          .join(',')
          .replace(/,/g, ' ')
          .split());
        border.style.borderRadius = borderRadiusString;
        inputText.value = borderRadiusString;
      }
    } else if (pageY < 123) {
      borderRadius[5] = '0%';
      borderRadius[8] = '100%';
      borderRadiusString = String(borderRadius
        .join(',')
        .replace(/,/g, ' ')
        .split());
      border.style.borderRadius = borderRadiusString;
      inputText.value = borderRadiusString;
    } else if (pageY > 494) {
      borderRadius[5] = '100%';
      borderRadius[8] = '0%';
      borderRadiusString = String(borderRadius
        .join(',')
        .replace(/,/g, ' ')
        .split());
      border.style.borderRadius = borderRadiusString;
      inputText.value = borderRadiusString;
    }
  }

  // Move the left selector
  moveAt(event.pageY); //(event.pageX, event.pageY);

  function onMouseMove(event) {
    event = event || window.event;
    pauseEvent(event);
    moveAt(event.pageY); //(event.pageX, event.pageY);
  }

  // Move the leftSelector on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // Drop the leftSelector, remove unneeded handlers
  window.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    window.onmouseup = null;
  };
};

// Function for right selector
rightSelector.onmousedown = function (event) {
  const sidePixelLength = 494 - 123;
  let percentMoved = 0;
  let borderRadiusString = null;
  // Set position of right selector and set border radius information
  function moveAt(pageY) { //(pageX, pageY) {
    // rightSelector.style.right = pageX - rightSelector.offsetWidth / 2 + 'px';
    if (pageY >= 123 && pageY <= 494) {
      rightSelector.style.top = pageY - 145 + 'px'; //pageY - rightSelector.offsetHeight / 2 + 'px';
      percentMoved = ((pageY - 123) / sidePixelLength).toFixed(2);

      if (percentMoved !== '0.00' && percentMoved !== '1.00') {
        borderRadius[6] = `${percentMoved.substring(2)}%`;
        borderRadius[7] = `${(100 - Number(percentMoved.substring(2)))}%`;
        borderRadiusString = String(borderRadius
          .join(',')
          .replace(/,/g, ' ')
          .split());
        border.style.borderRadius = borderRadiusString;
        inputText.value = borderRadiusString;
      } else if (percentMoved === '0.00') {
        borderRadius[6] = '0%';
        borderRadius[7] = '100%';
        borderRadiusString = String(borderRadius
          .join(',')
          .replace(/,/g, ' ')
          .split());
        border.style.borderRadius = borderRadiusString;
        inputText.value = borderRadiusString;
      } else if (percentMoved === '1.00') {
        borderRadius[6] = '100%';
        borderRadius[7] = '0%';
        borderRadiusString = String(borderRadius
          .join(',')
          .replace(/,/g, ' ')
          .split());
        border.style.borderRadius = borderRadiusString;
        inputText.value = borderRadiusString;
      }
    } else if (pageY < 123) {
      borderRadius[6] = '0%';
      borderRadius[7] = '100%';
      borderRadiusString = String(borderRadius
        .join(',')
        .replace(/,/g, ' ')
        .split());
      border.style.borderRadius = borderRadiusString;
      inputText.value = borderRadiusString;
    } else if (pageY > 494) {
      borderRadius[6] = '100%';
      borderRadius[7] = '0%';
      borderRadiusString = String(borderRadius
        .join(',')
        .replace(/,/g, ' ')
        .split());
      border.style.borderRadius = borderRadiusString;
      inputText.value = borderRadiusString;
    }
  }

  // Move the right selector
  moveAt(event.pageY); //(event.pageX, event.pageY);

  function onMouseMove(event) {
    event = event || window.event;
    pauseEvent(event);
    moveAt(event.pageY); //(event.pageX, event.pageY);
  }

  // Move the rightSelector on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // Drop the rightSelector, remove unneeded handlers
  window.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    window.onmouseup = null;
  };
};





// ISSUE WITH TOP SELECTOR WHEN SCREEN IS ZOOMED OUT/IN

// Function for top selector
topSelector.onmousedown = function (event) {
  const sidePixelLength = 649 - 276;
  let percentMoved = 0;
  let borderRadiusString = null;
  // Set position of top selector and set border radius information
  function moveAt(pageX) { //(pageX, pageX) {
    console.log(pageX);
    // topSelector.style.top = pageX - topSelector.offsetWidth / 2 + 'px';
    if (pageX >= 183 && pageX <= 555) {
      topSelector.style.left = pageX - 191 + 'px'; //pageX - topSelector.offsetHeight / 2 + 'px';
      percentMoved = ((pageX - 183) / sidePixelLength).toFixed(2);

      if (percentMoved !== '0.00' && percentMoved !== '1.00') {
        borderRadius[0] = `${percentMoved.substring(2)}%`;
        borderRadius[1] = `${(100 - Number(percentMoved.substring(2)))}%`;
        borderRadiusString = String(borderRadius
          .join(',')
          .replace(/,/g, ' ')
          .split());
        border.style.borderRadius = borderRadiusString;
        inputText.value = borderRadiusString;
      } else if (percentMoved === '0.00') {
        borderRadius[0] = '0%';
        borderRadius[1] = '100%';
        borderRadiusString = String(borderRadius
          .join(',')
          .replace(/,/g, ' ')
          .split());
        border.style.borderRadius = borderRadiusString;
        inputText.value = borderRadiusString;
      } else if (percentMoved === '1.00') {
        borderRadius[0] = '100%';
        borderRadius[1] = '0%';
        borderRadiusString = String(borderRadius
          .join(',')
          .replace(/,/g, ' ')
          .split());
        border.style.borderRadius = borderRadiusString;
        inputText.value = borderRadiusString;
      }
    } else if (pageX < 183) {
      borderRadius[0] = '0%';
      borderRadius[1] = '100%';
      borderRadiusString = String(borderRadius
        .join(',')
        .replace(/,/g, ' ')
        .split());
      border.style.borderRadius = borderRadiusString;
      inputText.value = borderRadiusString;
    } else if (pageX > 555) {
      borderRadius[0] = '100%';
      borderRadius[1] = '0%';
      borderRadiusString = String(borderRadius
        .join(',')
        .replace(/,/g, ' ')
        .split());
      border.style.borderRadius = borderRadiusString;
      inputText.value = borderRadiusString;
    }
  }

  // Move the top selector
  moveAt(event.pageX); //(event.pageX, event.pageX);

  function onMouseMove(event) {
    event = event || window.event;
    pauseEvent(event);
    moveAt(event.pageX); //(event.pageX, event.pageX);
  }

  // Move the topSelector on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // Drop the topSelector, remove unneeded handlers
  window.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    window.onmouseup = null;
  };
};


// Prevent window issues from click and dragging events
function pauseEvent(event) {
  if (event.stopPropagation) event.stopPropagation();
  if (event.preventDefault) event.preventDefault();
  event.cancelBubble = true;
  event.returnValue = false;
  return false;
}
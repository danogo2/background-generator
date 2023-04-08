// ======== DOM caching =======
const colOne = document.getElementById('col1'),
  colTwo = document.getElementById('col2'),
  pal1 = document.getElementById('palette1'),
  pal2 = document.getElementById('palette2'),
  settingsBox = document.querySelector('.settings'),
  infoBox = document.querySelector('h2'),
  heading = document.querySelector('h1'),
  bodyBox = document.querySelector('body');

// ======= Functions (i.a. event handlers) ========
// set background and colors for all components
function setColors() {
  let dObj = setDirection();
  paintBackground(dObj);
  paintPalettes();
}

// set color for background and display information about current background
function paintBackground(dObj) {
  let bgCol = `${dObj.type}-gradient(${dObj.direction}${colOne.value}, ${colTwo.value})`;
  bodyBox.style.backgroundImage = bgCol;
  paintHeading(bgCol);
  infoBox.textContent = `background-image: ${bgCol}`;
}

// set color and text shadow for heading
function paintHeading(bgImage) {
  heading.style.backgroundImage = bgImage;
  // heading.style.textShadow = `.5rem 1rem 2rem ${colHShadow.value}`;
}

// set color for icons same as for corresponding inputs
function paintPalettes() {
  pal1.style.color = colOne.value;
  pal2.style.color = colTwo.value;
}

// set direction for gradient
function setDirection() {
  // grab checked input
  let bgDirection = document.querySelector(
    '.settings__direction-box input[type="radio"]:checked'
  );
  // creating an object which contains information about gradient type and direction for linear gradient
  let dObj = {
    type: 'linear',
    direction: bgDirection.value,
  };
  // if last input is checked (it has no value)
  if (!bgDirection.value) {
    // change gradient type to radial
    dObj.type = 'radial';
  }
  return dObj;
}

setColors();

// ========= Event listeners ==========
settingsBox.addEventListener('input', setColors);

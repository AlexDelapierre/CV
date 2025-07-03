/*
function checkViewport() {
  const mobileBlock = document.getElementById('mobile-block');
  const desktopBlock = document.getElementById('desktop-block');
  
  if (window.innerWidth <= 768) {
    mobileBlock.style.display = 'block';
    desktopBlock.style.display = 'none';
  } else {
    mobileBlock.style.display = 'none';
    desktopBlock.style.display = 'block';
  }
}

// Vérifie au chargement
window.addEventListener('load', checkViewport);

// Vérifie à chaque redimensionnement
window.addEventListener('resize', checkViewport);
*/

function checkViewport() {
  const mobileBlocks = document.querySelectorAll('.mobile-block');
  const desktopBlocks = document.querySelectorAll('.desktop-block');

  if (window.innerWidth <= 768) {
    mobileBlocks.forEach(el => el.style.display = 'block');
    desktopBlocks.forEach(el => el.style.display = 'none');
  } else {
    mobileBlocks.forEach(el => el.style.display = 'none');
    desktopBlocks.forEach(el => el.style.display = 'block');
  }
}

window.addEventListener('load', checkViewport);
window.addEventListener('resize', checkViewport);


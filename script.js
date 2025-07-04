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
  const othersExperiences = document.getElementById('others-experiences');

  if (window.innerWidth <= 768) {
    mobileBlocks.forEach(el => el.style.display = 'block');
    desktopBlocks.forEach(el => el.style.display = 'none');
  } else {
    mobileBlocks.forEach(el => el.style.display = 'none');
    desktopBlocks.forEach(el => el.style.display = 'block');
  }
}

// Vérifie au chargement
window.addEventListener('load', checkViewport);
// Vérifie à chaque redimensionnement
window.addEventListener('resize', checkViewport);

/*
// Supprime #others-experiences juste avant l'impression
window.addEventListener('beforeprint', () => {
  const othersExperiences = document.getElementById('others-experiences');
  if (othersExperiences) {
    othersExperiences.remove(); // Supprime définitivement l'élément du DOM
  }
});
*/

// Cacher le bloc avant impression
window.addEventListener('beforeprint', () => {
  const othersExperiences = document.getElementById('others-experiences');
  if (othersExperiences) {
    othersExperiences.style.display = 'none';
  }
});

// Réafficher le bloc après impression (ou si l'utilisateur annule)
window.addEventListener('afterprint', () => {
  const othersExperiences = document.getElementById('others-experiences');
  if (othersExperiences) {
    othersExperiences.style.display = '';
  }
});

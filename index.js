var iconMenu = document.getElementById('icon-container-menu');
var profileBG = document.getElementById('profile-bg');
var profileContent = document.getElementById('profile-content');


handleClickMenu = function(e) {
  iconMenu.classList.toggle('change');
  profileBG.classList.toggle('change');
  profileContent.classList.toggle('change');

  if (profileContent.classList.contains('change')) {
    // show profile
    profileContent.style.transitionDelay = '0.5s';
    profileContent.style.opacity = '1';

  } else {
    // hide profile
    profileContent.style.transitionDelay = '0s';
    profileContent.style.opacity = '0';
  }
}

iconMenu.addEventListener('click', handleClickMenu);

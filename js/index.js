'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const nowZomosNobios = () => {
    alert('💞 lo sabía chingada madre💞');
    alert('😱Lugar, fecha y hora para ir por ti😱');
    location.href = 'https://i.pinimg.com/originals/ea/49/86/ea498642444be01ef1088bd918b3c5f9.jpg';
  };

  const evitarKCRompanMyBobo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

const partner = prompt('🥰 pon carita feliz 🥰');
  heroTitle.innerHTML += partner + ' ❤';

  heroButtonSi.addEventListener('click', nowZomosNobios);
  heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);

'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const nowZomosNobios = () => {
    alert('💞 lo sabía chingada madre💞');
    alert('😱Lugar, fecha y hora para ir por ti😱');
    location.href = 'https://www.youtube.com/shorts/A8_AuLDBmKc';
  };

  const evitarKCRompanMyBobo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('🥰 Requisitos cumplidos?: Detalles:- tiene que estudiar algo [9 semestre y eran 8 ajajaj] - cero de fiestas o trago [mi unico vicio es messi] - que le guste el deporte [viva el fulbo]  - que le guste los videojuegos [más que vivir]  - que podamos jugar videojuegos [a pesar de lo manco] - que le guste lo tranqui [siempre] - que me regale legos o carritos hotweels [hay colección] - que trabaje [trabajando duro o durando en el trabajo] - que no me ignore [difícil ignorarte siendo tan genial] - que le guste el café como a mi [claro que shi] - y que sea un apoyo mutuo 🥰 [siempre] '); 
  heroTitle.innerHTML += partner + ' ❤';

  heroButtonSi.addEventListener('click', nowZomosNobios);
  heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);

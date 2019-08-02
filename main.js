'use strict';

const main = () => {
  const burger = document.querySelector('.burger-icon');
  const nav = document.querySelector('.nav');
  const subnavs = document.querySelectorAll('.subnav');

  burger.addEventListener('click', event => {
    nav.classList.toggle('collapse-vert');
  });

  subnavs.forEach(subnav  => {
    subnav.addEventListener('click', () => {
      subnav.classList.toggle('collapse-hor');
    })
  });
};
window.addEventListener('load', main);

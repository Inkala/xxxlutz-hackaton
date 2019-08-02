'use strict';

const main = () => {
  const burger = document.querySelector('.burger-icon');
  const nav = document.querySelector('.nav');
  const subnavs = document.querySelectorAll('.subnav');

  burger.addEventListener('click', event => {
    nav.classList.toggle('collapse-vert');
    console.log(event);
  });

  subnavs.forEach(subnav  => {
    subnav.addEventListener('click', () => {
      console.log(subnav.children)
    })
  });
};
window.addEventListener('load', main);

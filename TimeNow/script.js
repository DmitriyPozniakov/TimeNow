'use strict';

const hamburger = document.querySelector('.closed');
const menu = document.querySelector('.menu');
const close = document.querySelector('.svg-close');
const logo = document.querySelector('.logo-header');
const header = document.querySelector('header');
const checkbox = document.querySelector('input[type=checkbox]');
const month = document.querySelector('.monthly');
const year = document.querySelector('.yearly');

hamburger.addEventListener('click', () => {
    menu.style.display = 'block';
    logo.style.display = 'none';
    header.style.padding = '0';
});

close.addEventListener('click', () => {
    menu.style.display = 'none';
    logo.style.display = 'block';
    header.style.padding = '12px 24px';
});

month.style.fontWeight = '600';
checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        month.style.fontWeight = 'normal';
        year.style.fontWeight = '600';
      } else {
        month.style.fontWeight = '600';
        year.style.fontWeight = 'normal';
      }
});

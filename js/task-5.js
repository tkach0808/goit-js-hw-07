'use strict';

const inputName = document.getElementById('name-input');
const spanName = document.getElementById('name-output');

inputName.addEventListener('input', function(text) {
  if (text.target.value.length > 0) {
    spanName.textContent = text.target.value;
  } else {
    spanName.textContent = 'незнакомец';
  }
});

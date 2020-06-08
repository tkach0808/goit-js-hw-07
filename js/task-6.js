'use strict';

const validation = document.getElementById('validation-input');

validation.addEventListener('input', function(simbol) {
  if (simbol.target.value.length === 6) {
    validation.classList.add('valid');
    validation.classList.remove('invalid');
  } else if (simbol.target.value.length === 0) {
    validation.classList.remove('valid');
    validation.classList.remove('invalid');
  } else {
    validation.classList.remove('valid');
    validation.classList.add('invalid');
  }
});

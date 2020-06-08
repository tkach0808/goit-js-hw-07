'use strict';

let counterValue = Number(document.getElementById('value').textContent);
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener('click', function() {
  counterValue -= 1;
  document.getElementById('value').innerHTML = counterValue;
});
increment.addEventListener('click', function() {
  counterValue += 1;
  document.getElementById('value').innerHTML = counterValue;
});

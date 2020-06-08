'use strict';

/* eslint-disable */
const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes');

render.addEventListener('click', function() {
  createBoxes(document.getElementById('controls').firstElementChild.value);
});
destroy.addEventListener('click', function() {
  destroyBoxes();
});

function createBoxes(amount) {
  let i = boxes.childElementCount;
  for (i; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256,
    )})`;
    boxes.appendChild(div);
  }
}

function destroyBoxes() {
  while (boxes.hasChildNodes()) {
    boxes.removeChild(boxes.lastChild);
  }
}

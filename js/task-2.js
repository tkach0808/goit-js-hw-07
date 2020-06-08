'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const products = document.getElementById('ingredients');

ingredients.forEach(function(item) {
  const elementItem = document.createElement('li');
  const elmentText = document.createTextNode(item);
  elementItem.appendChild(elmentText);
  products.appendChild(elementItem);
});

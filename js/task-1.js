'use strict';

const elements = document.getElementById('categories').children.length;

const liTitle = document.querySelectorAll('.item');

console.log(elements);
liTitle.forEach(function(item) {
  console.log(
    `Категория: ${item.firstElementChild.textContent}
Количество элементов:${item.firstElementChild.nextElementSibling.children.length}`,
  );
});

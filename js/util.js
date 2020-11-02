// util.js
'use strict';

(function () {
  const Keycode = {
    ESC: 27,
    ENTER: 13,
    MAIN_MOUSE_BUTTON: 0
  };

  const isEscEvent = function (evt, action) {
    if (evt.keyCode === Keycode.ESC) {
      action();
    }
  };

  const isEnterEvent = function (evt, action) {
    if (evt.keyCode === Keycode.ENTER) {
      action();
    }
  };

  const isMainMouseButtonEvent = function (evt, action) {
    if (evt.button === Keycode.MAIN_MOUSE_BUTTON) {
      action();
    }
  };

  const getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
  };

  const getRandomElement = function (elements) {
    return elements[window.util.getRandomIntInclusive(0, elements.length - 1)];
  };

  const getMaxElement = function (elements) {
    const maxElement = elements[0];

    for (let i = 1; i < elements.length; i++) {
      maxElement = Math.max(maxElement, elements[i]);
    }

    return maxElement;
  };

  // 1. Получить в функции список элементов которые хотим отрисовать
  const renderChildren = function (parentNode, elements, renderChild, clear = window.remove.removeChildren) {
    clear(parentNode);
    // 2. Создать фрагмент
    const fragment = document.createDocumentFragment();
    // 3. Перебрать элементы
    elements.forEach(function (element) {
      // 4. Создать DOM ноду, для каждого элемента
      const childNode = renderChild(element);
      // 5. Добавить ноду во фрагмент
      fragment.appendChild(childNode);
    });
    // 6. После цикла, добавить фрагмент в родительскую ноду
    parentNode.appendChild(fragment);
  };

  // Воруем метод forEach у массива с помощью call
  const forEach = function (elements, cb) {
    return Array.prototype.forEach.call(elements, cb);
  };


  window.util = {
    isEscEvent,
    isEnterEvent,
    isMainMouseButtonEvent,
    getRandomIntInclusive,
    getRandomElement,
    getMaxElement,
    renderChildren,
    forEach
  };

})();
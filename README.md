## **AB (another-brick)**

This repository is quite useless by itself (even if some convenient tools are provided: see below) but scripts using it might interest you:

- **[AB-mediaQuery](https://github.com/lordfpx/AB-mediaQuery)**: small and usefull script to mange media queries in JavaScript
- **[AB-interchange](https://github.com/lordfpx/AB-interchange)**: responsive background-image and lazy loading for both img and background-image (also add responsive images on IE 11 and IE 10)!
- **[AB-formValidation](https://github.com/lordfpx/AB-formValidation)**: Tiny and yet powerfull form and field validation based on native Form API

[![Maintainability](https://api.codeclimate.com/v1/badges/5e584107506e5d5e84c3/maintainability)](https://codeclimate.com/github/lordfpx/AB/maintainability)


## **Usage**

Public methods you can used on your scripts:

- **CustomEvent()** constructor polyfill for IE ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent))
- **AB.extend**: Extend multiple objects (deeply if setting 1st argument to true)
  ```js
  var obj1 = {toto: "bla", test: {data1: "A", data2: "B"}};
  var obj2 = {blabla: "lorem"};
  var obj3 = {test: {data1: "X"}};

  var newObject = AB.extend(true, obj1, obj2, obj3);

  // newObject = {blabla: "lorem", test: {data1: "X", data2: "B"}, toto: "bla"}
  ```
- **AB.isJson**: To check if a string can be a JSON
  ```js
  AB.isJson('{"toto": true}');
  // return true

  AB.isJson('{"toto: true');
  // return false
  ```
- **Throttle events** for "resize", "scroll", "mousemove" and "touchmove"

  Prefix the event name with "ab-":
  ```js
  window.addEventListener('ab-scroll', function() {
    ...
  });
  ```



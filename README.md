## AB (another-brick)

[AB on Github](https://github.com/lordfpx/AB)

This repository is quite useless by itself.

It's a small collection of methods used by AB components. It's pretty small: about <strong>600 bytes</strong> (uglified and GZipped). Have look at my small, dependencie free and vanilla JavaScript components:

- [AB-mediaQuery](https://github.com/lordfpx/AB-mediaQuery)
- [AB-interchange](https://github.com/lordfpx/AB-interchange)
- [AB-formValidation](https://github.com/lordfpx/AB-formValidation)

[![Maintainability](https://api.codeclimate.com/v1/badges/5e584107506e5d5e84c3/maintainability)](https://codeclimate.com/github/lordfpx/AB/maintainability)

## Install

Install with npm:
```bash
npm install --save another-brick
````

Install with yarn:
```bash
yarn add another-brick
```


## Usage

Public methods you can used on your pages:

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

<h1 align="center">AB (another-brick)</h1>

<p align="center">
This repository is quite useless by itself.
</p>
<p align="center">
It's a small collection of methods used by AB components. It's pretty small: about **600 bytes** (uglified and GZipped). Have look at my small, dependencie free and vanilla JavaScript components:
</p>

- [AB-mediaQuery](https://github.com/lordfpx/AB-mediaQuery)
- [AB-interchange](https://github.com/lordfpx/AB-interchange)
- [AB-formValidation](https://github.com/lordfpx/AB-formValidation)


<h2 align="center">Install</h2>

Install with npm:
```
npm install --save another-brick
````

Install with yarn:
```
yarn add another-brick
```


<h2 align="center">Usage</h2>

Public methods you can use on your pages:

- **CustomEvent()** constructor polyfill for IE (https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)

- **AB.extend**: extend (optionnaly deeply) multiple objects:
  ```js
  var obj1 = {toto: "bla", test: {data1: "A", data2: "B"}};
  var obj2 = {blabla: "lorem"};
  var obj3 = {test: {data1: "X"}};

  var newObject = AB.extend(true, obj1, obj2, obj3);

  // newObject = {blabla: "lorem", test: {data1: "X", data2: "B"}, toto: "bla"}
  ```

- **AB.isJson**: to check if a string can be a JSON:
  ```js
  AB.isJson('{"toto": true}');
  // return true

  AB.isJson('{"toto: true');
  // return false
  ```

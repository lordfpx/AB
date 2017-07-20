# AB - another-brick

This is the main dependency for all AB plugins.

It's very tiny: about **600 bytes** (uglified and GZipped)

[NPM](https://www.npmjs.com/package/another-brick)

## Usage

Alone, it's nearly useless. It's only a small common base for all AB plugins you can find on my repository.

You will need a build tool for that : Browserify, Webpack (or others).

Alone, it proposes you:
- **CustomEvent()** constructor polyfill for IE
- **AB.extend**: extend (optionnaly deeply) multiple objects:

  ```
  var obj1 = {toto: "bla", test: {data1: "A", data2: "B"}};
  var obj2 = {blabla: "lorem"};
  var obj3 = {test: {data1: "X"}};

  var newObject = AB.extend(true, obj1, obj2, obj3);

  /*
  newObject = {blabla: "lorem", test: {data1: "X", data2: "B"}, toto: "bla"}
  */
  ```
- **AB.isJson**: to check if a string can be a JSON:
  ```
  AB.isJson('{"toto": true}');
  // return true
  ```
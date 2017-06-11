# AB

This is the main dependency for all AB plugins.

[NPM](https://www.npmjs.com/package/another-brick)

## Usage

You can either :

- **Bad** -  load it before all AB plugins
- **Better** - concat it before all AB plugins
- **Best** - Use Browserify or webpack (or others)

Alone, it proposes:
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
- **AB.plugins**: gives you acces to loaded AB plugins (in order to run them again for exemple). It's a copy of normal function call (abInterchange() for exemple).
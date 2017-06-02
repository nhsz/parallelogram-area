# parallelogram-area

> Get the **[`area of a parallelogram`](https://en.wikipedia.org/wiki/Parallelogram#Area_formula)**, given the base and height


## Install

```
$ npm install --save parallelogram-area
```


## Usage

```js
const parallelogramArea = require('parallelogram-area')

console.log(parallelogramArea(2.5, 4.37))
// => 10.925

console.log(parallelogramArea(1, 1))
// => 1

console.log(parallelogramArea(3, Math.PI))
// => 9.42477796076938

console.log(parallelogramArea(0, 78))
// => Error: Invalid input. Sides of the parallelogram must be greater than 0

console.log(parallelogramArea(1, -1))
// => Error: Invalid input. Sides of the parallelogram must be greater than 0
```


## License

MIT © **[`Nicolás Quiroz`](https://nicolasquiroz.com)**

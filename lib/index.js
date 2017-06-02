/*
  The area of a parallelogram is equal to A = b * h,
  where b = base and h = height
*/
'use strict'

module.exports = (base, height) => {
  if (base <= 0 || height <= 0) {
    throw new Error('Invalid input. Sides of the parallelogram must be greater than 0')
  } else {
    return base * height
  }
}

import test from 'ava'
import parallelogramArea from '../lib'

test('Test 1', t => {
  t.is(parallelogramArea(2.5, 4.37), 10.925)
})

test('Test 2', t => {
  t.is(parallelogramArea(1, 1), 1)
})

test('Test 3', t => {
  t.is(parallelogramArea(7, 3), 21)
})

test('Test 4', t => {
  t.is(parallelogramArea(3, Math.PI), 9.42477796076938)
})

test('Test 5: zero base', t => {
  const error = t.throws(() => {
    parallelogramArea(0, 78)
  }, Error)

  t.is(error.message, 'Invalid input. Sides of the parallelogram must be greater than 0')
})

test('Test 6: negative height', t => {
  const error = t.throws(() => {
    parallelogramArea(1, -1)
  }, Error)

  t.is(error.message, 'Invalid input. Sides of the parallelogram must be greater than 0')
})

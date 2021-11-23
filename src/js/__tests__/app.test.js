import getBuffer from '../app';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('Test getBuffer', () => {
  const result = getBuffer();
  expect(typeof (result)).toBe('object');
});

test('Test ArrayBufferConverter', () => {
  const buff = getBuffer();
  const result = new ArrayBufferConverter(buff).toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

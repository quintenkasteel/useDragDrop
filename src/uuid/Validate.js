import REGEX from './Regex.js';

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

export default validate;

export const required = value => value ? undefined : 'Field is required';
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Field cannot be empty';
export const password = value => value.length >= 8 ? undefined : 'Password must be 8 characters or longer';

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export const email = value => validateEmail(value) ? undefined : 'You must provide a valid email address';
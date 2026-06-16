export const users = {
  validUser: {
    username: process.env.STANDARD_USER!,
    password: process.env.STANDARD_PASSWORD!
  },

  lockedUser: {
    username: process.env.LOCKED_USER!,
    password: process.env.LOCKED_PASSWORD!
  },

  invalidUser: {
    username: 'invalid_user',
    password: 'invalid_password'
  }
};
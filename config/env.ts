import * as dotenv from 'dotenv';

const environment = process.env.TEST_ENV || 'qa';

dotenv.config({
  path: `./config/${environment}.env`
});

export const ENV = {
  app: process.env.APP || '',
  baseUrl: process.env.BASE_URL || '',

  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',

  standardUser: process.env.STANDARD_USER || '',
  standardPassword: process.env.STANDARD_PASSWORD || '',

  lockedUser: process.env.LOCKED_USER || '',
  lockedPassword: process.env.LOCKED_PASSWORD || ''
};
import * as dotenv from 'dotenv';
import * as path from 'path';

// Read environment from command line
const environment = process.env.TEST_ENV || 'qa';

// Load corresponding env file
dotenv.config({
    path: path.resolve(__dirname, `../../config/${environment}.env`),
    override: true,
});

export const Config = {
    BASE_URL: process.env.BASE_URL || '',

    STANDARD_USER: process.env.STANDARD_USER || '',
    STANDARD_PASSWORD: process.env.STANDARD_PASSWORD || '',

    LOCKED_USER: process.env.LOCKED_USER || '',
    LOCKED_PASSWORD: process.env.LOCKED_PASSWORD || '',

    INVALID_USER: process.env.INVALID_USER || '',
    INVALID_PASSWORD: process.env.INVALID_PASSWORD || '',
};



import { remote } from 'webdriverio';
import { androidCapabilities } from '../config/android.capabilities';

export class AndroidDriver {

    static async createSession() {

        return await remote({
            hostname: '127.0.0.1',
            port: 4723,
            path: '/',
            capabilities: androidCapabilities
        });
}}
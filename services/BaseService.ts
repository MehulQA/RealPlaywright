import { APIRequestContext } from '@playwright/test';

export class BaseService {

    constructor(
        protected request: APIRequestContext
    ) {}
}
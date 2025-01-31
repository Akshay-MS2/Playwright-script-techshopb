import type { Page } from '@playwright/test';
import { expect} from '@playwright/test';
import { BrowserContext } from 'playwright';
 
 
  export default class PlaywrightWrapper {
      static page: any;
            constructor(public page: Page) { }
            async goto(url: string) {
            await this.page.goto(url, {
            waitUntil: "domcontentloaded"
            });
           
        }
    }
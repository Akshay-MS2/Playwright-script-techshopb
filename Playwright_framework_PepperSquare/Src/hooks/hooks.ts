import { BeforeAll, AfterAll, Before, After, Status, AfterStep, setDefaultTimeout} from "@cucumber/cucumber";
import { fixture } from "C:/Playwright_casestudy/Src/hooks/fixture";
import { invokeBrowser } from "C:/Playwright_casestudy/Src/base/configuration";

import { Browser, BrowserContext, PageScreenshotOptions } from "@playwright/test";
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
 

setDefaultTimeout(600* 100* 20);

const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;
let page:any;

BeforeAll(async function () {
    browser = await invokeBrowser();
    context = await browser.newContext()
    page = await context.newPage();
    fixture.page = page;
});

 
AfterAll(async function () {
        // Wait for 20 seconds before cleanup
        await delay(5000);
     try{
        // Cleanup resources
        if (page) {
            await page.close();
        }
        if (context) {
            await context.close();
        }
        if (browser) {
            await browser.close();
        }
    }
    catch(e){
        console.log("error",e)
    }
    });
     
    export {browser, context};

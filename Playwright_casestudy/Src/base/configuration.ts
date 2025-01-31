import { LaunchOptions, chromium, firefox, webkit } from "playwright-core";

const options: LaunchOptions = {
    headless:false,
    devtools: false,
    timeout: 60000,
    args: ["--start-maximized"],
}

export const invokeBrowser = async () => {
    const browserType = process.env.npm_config_BROWSER || "chrome";
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "safari":
            return webkit.launch(options);
        default:
            throw new Error("Please set the proper browser!")
    }
}
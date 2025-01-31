import PlaywrightWrapper from "C:/Playwright_casestudy/Src/PlaywrightWrapper";
import { Page } from "@playwright/test";
import { expect } from '@playwright/test';
export default class TechShopBD {
  private newPage: Page | null = null;
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements =
    {
      LoginBtn: "//*[text()='Login']",
      SignUp: '//a[@id="signup-tab"]',
      userName: '//input[@id="userName"]',
      email: '//input[@id="email"]',
      phonenumber: '//input[@id="phone"]',
      password: '//input[@id="password"]',
      Termsofuse: '//label[@class="custom-control-label"]',
      signup: '//input[@value="Sign Up"]',
      checkbox: '//label[@class="custom-control-label"]/preceding::input[1]',
      verificationmsg: '(//p[@class="otp-msg"])[1]',
      user: '//input[@name="username"]',
      Pwd: '(//input[@name="password"])[1]',
      Signinbtn: '//input[@value="Sign In"]',
      //homepage
      HomePage: '//li[@class="nav-item active"]',
      catagories: '//ul[@class="category-list"]',
      search: '//input[@type="search"]',
      productname: '//h1[@class="product-title"]',
      wishlist:'//a[@id="add-to-wishlist"]',
      Additem: "(//button[@class='btn btn-number'])[2]",
      Addtocart: '//a[@class="btn btn-cart"]',
      GotoCart:"//*[text()='Go to Cart']",

    }

  async openurl(attach: Function) {
    await this.page.context().clearCookies();
    const baseUrl = "https://techshopbd.com/";
    if (!baseUrl) {
      throw new Error(" SMA environment variable is not defined status is Fail");
    }
    await this.base.goto(baseUrl);
    const image = await this.page.screenshot({ type: 'png' });
    attach(image, "image/png");
    console.log(
      " Open browser and enter the techshopbd URL executed and status is Pass"
    );
  }

  async clickonLoginBtn(attach: Function) {
    await this.page.waitForSelector(this.Elements.LoginBtn);
    const loginbtn = await this.page.$(this.Elements.LoginBtn);
    if (loginbtn) {
      await this.page.evaluate((el) => {
        el.style.backgroundColor = 'yellow';
      }, loginbtn);
      await this.page.waitForTimeout(1000);
      // Take a screenshot with the highlight
      const image = await this.page.screenshot({ type: "png" });
      attach(image, "image/png");
      //Remove the highlight
      await this.page.evaluate((el) => {
        el.style.backgroundColor = '';
      }, loginbtn);
    }
    await this.page.locator(this.Elements.LoginBtn).click();
  }
  async clickonSignupTab(attach: Function) {
    const signinbtn = await this.page.$(this.Elements.SignUp);
    if (signinbtn) {
      await this.page.evaluate((el) => {
        el.style.backgroundColor = 'yellow';
      }, signinbtn);
      await this.page.waitForTimeout(1000);
      const image = await this.page.screenshot({ type: "png" });
      attach(image, "image/png");
      await this.page.evaluate((el) => {
        el.style.backgroundColor = '';
      }, signinbtn);
    }
    await this.page.locator(this.Elements.SignUp).click();
  }


  async verifyFieldsinSignUp(attach: Function) {
    await this.page.waitForTimeout(2000);
    let Selectors = {
      userName: '//input[@id="userName"]',
      email: '//input[@id="email"]',
      phonenumber: '//input[@id="phone"]',
      password: '//input[@id="password"]',
      Termsofuse: '//label[@class="custom-control-label"]',
      signup: '//input[@value="Sign Up"]',

    }
    await this.page.waitForTimeout(2000);
    try {
      for (const selector of Object.values(Selectors)) {
        const element = await this.page.$(selector);
        if (element) {
          // Highlight the element
          await this.page.evaluate((el) => {
            el.style.backgroundColor = 'yellow';
          }, element);
          await this.page.waitForTimeout(1000);
          const screenshot = await this.page.screenshot({ type: 'png' });
          attach(screenshot, 'image/png');
          await this.page.evaluate((el) => {
            el.style.backgroundColor = '';
          }, element);
          console.log(`Highlighted element with selector "${selector}".`);
        } else {
          console.error(`Element with selector "${selector}" not found.`);
        }
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
    console.log("................................Validation of input Fields on signup page successful................................");
    return;
  }


  async enterFieldsinSignup(attach: Function) {
    await this.page.locator(this.Elements.userName).fill("Akshay")
    await this.page.locator(this.Elements.email).fill("akshayms0073@gmail.com")
    await this.page.locator(this.Elements.phonenumber).fill("+8801908908612")
    await this.page.locator(this.Elements.password).fill("Akshay@123")
    const image = await this.page.screenshot({ type: 'png' });
    attach(image, "image/png");
  }
  async clickOnTermsOfUse(attach: Function) {
    await this.page.waitForSelector(this.Elements.checkbox);
    await this.page.evaluate(() => {
      // Find the checkbox input
      const checkbox = document.querySelector("input[type='checkbox']");


      if (checkbox) {
        (checkbox as HTMLInputElement).click();
      }
    });
    const image = await this.page.screenshot({ type: 'png' });
    attach(image, "image/png");
  }
  async clickOnSignup(attach: Function) {
    await this.page.locator(this.Elements.signup).click();
    await this.page.waitForTimeout(1000)
    const image = await this.page.screenshot({ type: 'png' });
    attach(image, "image/png");


  }
  async verifySuccesMessage(attach: Function) {
    await this.page.waitForTimeout(2000)
    const image = await this.page.screenshot({ type: 'png' });
    attach(image, "image/png");
    const text = await this.page.locator(this.Elements.verificationmsg).textContent();
    expect(text).toBe("Verification code has been sent to your email.");
    const textmsg = await this.page.$(this.Elements.verificationmsg);
    if (textmsg) {
      // Highlight the element
      await this.page.evaluate((el) => {
        el.style.backgroundColor = 'yellow';
      }, textmsg);
      await this.page.waitForTimeout(1000);
      const screenshot = await this.page.screenshot({ type: 'png' });
      attach(screenshot, 'image/png');
      await this.page.evaluate((el) => {
        el.style.backgroundColor = '';
      }, textmsg);
      console.log("Signup successful");
    }

  }
  async LogintoApplication(attach: Function) {
    await this.page.locator(this.Elements.LoginBtn).click();
    await this.page.waitForTimeout(1000)
    await this.page.locator(this.Elements.user).fill("akshayms073@gmail.com");
    await this.page.locator(this.Elements.Pwd).fill("Messi@10");
    const image = await this.page.screenshot({ type: 'png' });
    attach(image, "image/png");
    await this.page.locator(this.Elements.Signinbtn).click();
    await this.page.waitForTimeout(1000)
    const image1 = await this.page.screenshot({ type: 'png' });
    attach(image1, "image/png");
  }


  async validateHomePage(attach: Function) {
    await this.page.waitForTimeout(2000);
    let homepage = await this.page.locator("(//*[text()='Home'])[1]").isVisible();
    if (homepage === true) {
      const title = await this.page.$(this.Elements.HomePage)
      if (title) {
        await this.page.evaluate((el) => {
          el.style.backgroundColor = 'yellow';
        }, title);
        console.log("Home page is visible");
        await this.page.waitForTimeout(1000);
        const image = await this.page.screenshot({ type: "png" });
        attach(image, "image/png");
        await this.page.evaluate((el) => {
          el.style.backgroundColor = '';
        }, title);
      }
    }
    else {
      console.log("Home page is not visible");

      expect(homepage).toBe(true)
    }
  }
  async validateCategories(attach: Function) {
    const catagory = await this.page.$(this.Elements.catagories)
    const image = await this.page.screenshot({ type: "png" });
    attach(image, "image/png");
    if (catagory) {
      await this.page.evaluate((el) => {
        el.style.backgroundColor = 'yellow';
      }, catagory);
      await this.page.waitForTimeout(1000);
      const image = await this.page.screenshot({ type: "png" });
      attach(image, "image/png");
      await this.page.evaluate((el) => {
        el.style.backgroundColor = '';
      }, catagory);
    }
  }

  async productSearch(attach: Function) {
    const searchbox = await this.page.$(this.Elements.search)
    if (searchbox) {
      await this.page.evaluate((el) => {
        el.style.backgroundColor = 'yellow';
      }, searchbox);

      await this.page.waitForTimeout(1000);
      const image = await this.page.screenshot({ type: "png" });
      attach(image, "image/png");
      await this.page.evaluate((el) => {
        el.style.backgroundColor = '';
      }, searchbox);
    }
    await this.page.locator(this.Elements.search).fill('Laser Sensor')
    const image = await this.page.screenshot({ type: "png" });
    attach(image, "image/png");
  }

  async displayproduct(attach: Function) {
    const product = await this.page.$("//div[@class='search-option position-absolute']/a[1]")
    if (product) {
      await this.page.evaluate((el) => {
        el.style.backgroundColor = 'yellow';
      }, product);
      await this.page.waitForTimeout(1000);
      const image = await this.page.screenshot({ type: "png" });
      attach(image, "image/png");
      await this.page.evaluate((el) => {
        el.style.backgroundColor = '';
      }, product);
    }

  }


  async clickProduct(attach: Function) {
    await this.page.locator("//div[@class='search-option position-absolute']/a[1]").click();
    const image = await this.page.screenshot({ type: "png" });
    attach(image, "image/png");
  }

  async validateProductname(attach:Function){
    const Productname= await this.page.locator(this.Elements.productname).innerText()
    expect(Productname).toBe('Laser Sensor')
    const product = await this.page.$(this.Elements.productname)
    if (product) {
      await this.page.evaluate((el) => {
        el.style.backgroundColor = 'yellow';
      }, product);
      await this.page.waitForTimeout(1000);
      const image = await this.page.screenshot({ type: "png" });
      attach(image, "image/png");
      await this.page.evaluate((el) => {
        el.style.backgroundColor = '';
      }, product);
    }
  }

async addQuantity(attach:Function){
  let quantity= await this.page.locator(this.Elements.Additem)
  for(let i=1; i<5; i++){
    await quantity.click()
  }
  const image = await this.page.screenshot({ type: "png" });
  attach(image, "image/png");
}

async clickAddtoCart(attach:Function){
  let cartbtn= await this.page.$(this.Elements.Addtocart)
  if (cartbtn) {
    await this.page.evaluate((el) => {
      el.style.backgroundColor = 'yellow';
    }, cartbtn);
    await this.page.waitForTimeout(1000);
    const image = await this.page.screenshot({ type: "png" });
    attach(image, "image/png");
    await this.page.evaluate((el) => {
      el.style.backgroundColor = '';
    }, cartbtn);
  }
  await this.page.locator(this.Elements.Addtocart).click()
  let successtext=await this.page.locator('//*[text()="Added to Cart Successfully"]').textContent()
  console.log('product sucessfully added to cart',successtext)
  let text=await this.page.$('//*[text()="Added to Cart Successfully"]')
  if (text) {
    await this.page.evaluate((el) => {
      el.style.backgroundColor = 'yellow';
    }, text);
    const image = await this.page.screenshot({ type: "png" });
    attach(image, "image/png");
    await this.page.evaluate((el) => {
      el.style.backgroundColor = '';
    }, text);
  }
 
  const image = await this.page.screenshot({ type: "png" });
  attach(image, "image/png");
}

async clickSavetoWishlist(attach:Function){
  let wishlistbtn= await this.page.$(this.Elements.wishlist)
  if (wishlistbtn) {
    await this.page.evaluate((el) => {
      el.style.backgroundColor = 'yellow';
    }, wishlistbtn);
    await this.page.waitForTimeout(1000);
    const image = await this.page.screenshot({ type: "png" });
    attach(image, "image/png");
    await this.page.evaluate((el) => {
      el.style.backgroundColor = '';
    }, wishlistbtn);
  }
  await this.page.locator(this.Elements.wishlist).click()
}
async GotoCart(attach:Function){
  let GotoCart= await this.page.$(this.Elements.GotoCart)
  if (GotoCart) {
    await this.page.evaluate((el) => {
      el.style.backgroundColor = 'yellow';
    }, GotoCart);
    await this.page.waitForTimeout(1000);
    const image = await this.page.screenshot({ type: "png" });
    attach(image, "image/png");
    await this.page.evaluate((el) => {
      el.style.backgroundColor = '';
    }, GotoCart);
  }
  await this.page.locator(this.Elements.GotoCart).click()
  const image = await this.page.screenshot({ type: "png" });
  attach(image, "image/png");

}

async validateCartSummary(attach:Function){
  await this.page.waitForTimeout(2000)
  let cartsummary= await this.page.$('//div[@class="card"]')
  if (cartsummary) {
    await this.page.evaluate((el) => {
      el.style.backgroundColor = 'yellow';
    }, cartsummary);
    await this.page.waitForTimeout(1000);
    const image = await this.page.screenshot({ type: "png" });
    attach(image, "image/png");
    await this.page.evaluate((el) => {
      el.style.backgroundColor = '';
    }, cartsummary);
  }
}


async clickOnProfile(attach:Function){
  await this.page.waitForTimeout(1000)
  let profile= await this.page.$('//span[@class="icon-wrapper"]')
  if (profile) {
    await this.page.evaluate((el) => {
      el.style.backgroundColor = 'yellow';
    }, profile);
    await this.page.waitForTimeout(1000);
    const image = await this.page.screenshot({ type: "png" });
    attach(image, "image/png");
    await this.page.evaluate((el) => {
      el.style.backgroundColor = '';
    }, profile);
  }
  await this.page.locator('//span[@class="icon-wrapper"]').click()
}


async clickOnLogout(attach:Function){
  await this.page.waitForTimeout(1000)
  let logout= await this.page.$('(//a[@class="dropdown-item"])[2]')
  if (logout) {
    await this.page.evaluate((el) => {
      el.style.backgroundColor = 'yellow';
    }, logout);
    await this.page.waitForTimeout(1000);
    const image = await this.page.screenshot({ type: "png" });
    attach(image, "image/png");
    await this.page.evaluate((el) => {
      el.style.backgroundColor = '';
    }, logout);
  }
  await this.page.locator('(//a[@class="dropdown-item"])[2]').click()
  
}


async Loginpage(attach: Function) {
  await this.page.waitForTimeout(2000)
  await this.page.waitForSelector(this.Elements.LoginBtn);
  const loginbtn = await this.page.$(this.Elements.LoginBtn);
  if (loginbtn) {
    await this.page.evaluate((el) => {
      el.style.backgroundColor = 'yellow';
    }, loginbtn);
    await this.page.waitForTimeout(1000);
    // Take a screenshot with the highlight
    const image = await this.page.screenshot({ type: "png" });
    attach(image, "image/png");
    //Remove the highlight
    await this.page.evaluate((el) => {
      el.style.backgroundColor = '';
    }, loginbtn);
    await this.page.waitForTimeout(2000);
  }
}
}

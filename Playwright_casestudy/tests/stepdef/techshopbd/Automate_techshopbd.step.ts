
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import TechShopBD from "../../../Pages/techshopbd_Page";
import { fixture } from "../../../Src/hooks/fixture";
let TechShopBDpage:TechShopBD ;
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
TechShopBDpage = new TechShopBD(fixture.page);


setDefaultTimeout(60 * 1000 * 20)
Given('Launch browser and enter the URL', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.openurl(this.attach)
});

When('click on Login button', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.clickonLoginBtn(this.attach)
});

Then('click on Signup tab and verify all the required fields are visible', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.clickonSignupTab(this.attach)
  await TechShopBDpage.verifyFieldsinSignUp(this.attach)
});
Then('enter all the required fields and click on Signup button', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.enterFieldsinSignup(this.attach)
  await TechShopBDpage.clickOnTermsOfUse(this.attach)
  await TechShopBDpage.clickOnSignup(this.attach)
});

Then('verify the verification code message page is displayed', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.verifySuccesMessage(this.attach)
});

Then('click on SignIn tab and enter the valid credentials and click on SignIn button', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.LogintoApplication(this.attach)
});

Given('the user is on the homepage', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.validateHomePage(this.attach);

});

Then('the user should see the Categories section', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.validateCategories(this.attach);
});

When('the user search any product in {string} field', async function (string) {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.productSearch(this.attach);
});


Then('the product should be displayed in the search result', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.displayproduct(this.attach)
});


When('the user click on the product from the search result', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.clickProduct(this.attach)
});



Then('the product details should be displayed', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.validateProductname(this.attach)

});
When('user selects more than one quantity', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.addQuantity(this.attach)
});

Then('the user click on the Save to Wishlist button', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.clickSavetoWishlist(this.attach)
});

When('the user click on the {string} button', async function (string) {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.clickAddtoCart(this.attach)
});


Then('the product should be added to the cart', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.GotoCart(this.attach)
});

Then('verify the cart summary is displayed', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.validateCartSummary(this.attach)
});


Given('user clicks on profile icon', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.clickOnProfile(this.attach)
});

When('the user clicks on Logout button', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.clickOnLogout(this.attach)
});

Then('the user should be logged out and redirected to the login page', async function () {
  TechShopBDpage = new TechShopBD(fixture.page);
  await TechShopBDpage.Loginpage(this.attach)
});

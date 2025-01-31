import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import HomePage from "../../../Pages/HomePage";
import { fixture } from "../../../Src/hooks/fixture";
let Homepage: HomePage;
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
Homepage = new HomePage(fixture.page);
setDefaultTimeout(60 * 1000 * 20)

Given('the user is on the homepage', async function () {
    Homepage = new HomePage(fixture.page);
    await Homepage.validateHomePage(this.attach);
  });

  Then('the user should see the Categories section', async function() {
    Homepage = new HomePage(fixture.page);
    await Homepage.validateCategories(this.attach);
  });

  When('the user search any product in {string} field', async function (string) {
    Homepage = new HomePage(fixture.page);
    
  });


  Then('the product should be displayed in the search result', async function () {
    Homepage = new HomePage(fixture.page);

  });


  When('the user click on the product from the search result', async function () {

  });



  Then('the product details should be displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('the user click on the {string} button', async function (string) {

  });


  Then('the product should be added to the cart', async function () {
  
  });
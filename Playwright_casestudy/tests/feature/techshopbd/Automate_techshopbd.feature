Feature: Verify that user is able to Sign Up to techshopbd.com and add item to the cart
  
  @Login
  Scenario: Validating the functionality of LoginPage
    Given Launch browser and enter the URL
    When click on Login button
    Then click on Signup tab and verify all the required fields are visible
    Then enter all the required fields and click on Signup button
    Then verify the verification code message page is displayed
    Then click on SignIn tab and enter the valid credentials and click on SignIn button

  @AddtoCart
  Scenario: Validate that the user can search for any product and place an order from the 'Categories'.
    Given the user is on the homepage
    Then the user should see the Categories section
    When the user search any product in "Search by product name" field
    Then the product should be displayed in the search result
    When the user click on the product from the search result
    Then the product details should be displayed
    When user selects more than one quantity
    Then the user click on the Save to Wishlist button
    When the user click on the 'Add to cart' button
    Then the product should be added to the cart
    Then verify the cart summary is displayed

  @Logout
    Scenario: Validate that the user can able to Logout from the application
    Given user clicks on profile icon
    When the user clicks on Logout button
    Then the user should be logged out and redirected to the login page

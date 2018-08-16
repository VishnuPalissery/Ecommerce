import Page from './page.js';

class samplePage extends Page {
  get develperGuideButton() { return browser.element('//nav[@class="mainnav"]//li[3]'); }
  get signIn() {return browser.element('//a[@class="login"]');} 
  get createMail() {return browser.element('//input[@id="email_create"]');} 
  get createButton() {return browser.element('//button[@id="SubmitCreate"]');} 
  get selectGender() {return browser.element('//input[@type="radio"]');} 
  get firstName() {return browser.element('//input[contains(@name,"firstname")]');} 
  get lastName() {return browser.element('//input[contains(@name,"lastname")]');} 
  get password() {return browser.element('//input[contains(@name,"passwd")]');} 
  get dobDays() {return browser.element('//select[contains(@id,"days")]');} 
  get dobMonths() {return browser.element('//select[contains(@id,"months")]');} 
  get dobYears() {return browser.element('//select[contains(@id,"years")]');} 
  get firstNameAddress() {return browser.element('//input[@name="firstname"]');} 
  get lastNameAddress() {return browser.element('//input[@name="lastname"]');} 
  get company() {return browser.element('//input[@name="company"]');} 
  get address1() {return browser.element('//input[@id="address1"]');} 
  get address2() {return browser.element('//input[@id="address2"]');} 
  get city() {return browser.element('//input[@id="city"]');} 
  get state() {return browser.element('//select[@id="id_state"]');} 
  get postCode() {return browser.element('//input[@id="postcode"]');} 
  get country() {return browser.element('//select[@id="id_country"]');} 
  get other() {return browser.element('//textarea[@id="other"]');} 
  get phone() {return browser.element('//input[@name="phone"]');} 
  get mobile() {return browser.element('//input[@name="phone_mobile"]');} 
  get alias() {return browser.element('//input[@id="alias"]');} 
  get submitAccount() {return browser.element('//button[@name="submitAccount"]');} 
  get searchBar() {return browser.element('//input[contains(@class, "search_query")]');} 
  get searchButton() {return browser.element('//button[contains(@name, "submit")]');} 
  get addToCartButton() {return browser.element('//a[@data-id-product="4"]');} 
  get proceedButton() {return browser.element('//a[@title="Proceed to checkout"]');}
  get proceedStep1() {return browser.element('//a[contains(@class,"standard-checkout button-medium")]');}  
  get processAdress() {return browser.element('//button[@name="processAddress"]');}
  get agreement() {return browser.element('//input[@name="cgv"]');}  
  get processCarrier() {return browser.element('//button[@name="processCarrier"]');}  
  get bankwire() {return browser.element('//a[@class="bankwire"]');} 
  get proceed()  {return browser.element('//button[@class="button btn btn-default button-medium"]');}
 



  goToHome () {
    browser.url('http://automationpractice.com/');
    browser.pause(1000);
  }

  goToSignIn () {
    this.signIn.click();
    browser.pause(1000);
  }
  goToCreateMail () {
    this.createMail.setValue("xas@abc.com");
  //  browser.pause(1000);
  }
  goToCreateButton() {
    this.createButton.click();
    browser.pause(3000);
  }
  goToPersonalInformation () {
    this.selectGender.click();
    this.firstName.setValue("John");
    this.lastName.setValue("Honai");
    this.password.setValue("123456789");
    this.dobDays.selectByIndex(10);
    this.dobMonths.selectByIndex(5);
    this.dobYears.selectByIndex(20);
   // browser.pause(1000);
  }
  goToAddress () {
    this.firstNameAddress.setValue("John");
    this.lastNameAddress.setValue("Honai");
    this.company.setValue("xxyyzz");
    this.address1.setValue("aaaaaaa bbbbb cccccc ddddd");
    this.address2.setValue("aaaaaaa bbbbb cccccc ddddd");
    this.city.setValue("Kochi");
    this.state.selectByIndex(10);
    this.postCode.setValue("66677");
    this.country.selectByIndex(1);
    this.other.setValue("None");
    this.phone.setValue("4566680000")
    this.mobile.setValue("223343245");
    this.alias.setValue("None");
    this.submitAccount.click();
    browser.pause(3000);
  }
  goToSearchProduct () {
    this.searchBar.setValue("printed dress");
    this.searchButton.click();
    browser.pause(1000);
    this.addToCartButton.click();
    browser.pause(2000);
    this.proceedButton.click();
    browser.pause(2000);
  }
  goToFinalProceed () {
    
    this.proceedStep1.click();
    browser.pause(1000);
    this.processAdress.click();
    browser.pause(1000);
    this.agreement.click();
    this.processCarrier.click();
    browser.pause(1000);
    this.bankwire.click();
    this.proceed.click();
    browser.pause(3000);

  }
  
};
export default new samplePage();


import {Given , When , Then} from 'cucumber'
import samplePage from '../functions/sample.page.js';


  Given(/^User goes to Ecommerce Home page$/, () => {
    samplePage.goToHome();
  });

  When(/^User goes to Login Button$/, () => {
    samplePage.goToSignIn();
  });

  When(/^User goes to Create Mail$/, () => {
    samplePage.goToCreateMail();
  });

  When(/^User goes to Create Mail Button$/, () => {
    samplePage.goToCreateButton();
  });
  When(/^User goes to Personal Information$/, () => {
    samplePage.goToPersonalInformation();
  });
  When(/^User goes to Address$/, () => {
    samplePage.goToAddress();
  });
  When(/^User goes to Search Product$/, () => {
    samplePage.goToSearchProduct();
  });
  When(/^User goes to Final Proceed$/, () => {
    samplePage.goToFinalProceed();
  });
import { browser, element, by } from 'protractor';

export class WebstormAngularCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('produtos-app-root h1')).getText();
  }
}

//<reference types="cypress" />;
import LoginPage from '../../../support/POM/loginPage';
const loginPage = new LoginPage();

const testEmail = loginPage.generateEmail();
describe('Login Page. Main Tests suit', () => {
  describe('Login Page. Visit Login page', () => {
    it('Login Page. Visit Login page', () => {
      cy.visit('/');
    });
    it('Check Login page was loaded', () => {
      cy.location('pathname', 'eq', '/');
    });
    describe('Check Email Field exist', () => {
      it('Check Email Field exist', () => {
        loginPage.emailField();
      });
      it('Check Email Field visible', () => {
        loginPage.emailField().should('be.visible');
      });
      it('Check Email have placeholder', () => {
        loginPage
          .emailField()
          .should('have.attr', 'placeholder', 'Email or phone number');
      });
      it('Check Email should type', () => {
        loginPage.emailField().type(testEmail);
      });
      it('Check Email have value', () => {
        loginPage.emailField().should('have.value', testEmail);
      });
    });
    describe('Check Password Field exist', () => {
      it('Check password Field exist', () => {
        loginPage.passwordField();
      });
      it('Check password Field visible', () => {
        loginPage.passwordField().should('be.visible');
      });
      it('Check password have placeholder', () => {
        loginPage
          .passwordField()
          .should('have.attr', 'placeholder', 'Password');
      });
      it('Check password should type', () => {
        loginPage.passwordField().type('123123');
      });
      it('Check password have value', () => {
        loginPage.passwordField().should('have.value', '123123');
      });
    });
    describe('Check login button', () => {
      it('Check login button Field exist', () => {
        loginPage.loginBtn();
      });
      it('Check login button Field visible', () => {
        loginPage.loginBtn().should('be.visible');
      });
      it('Check login button have placeholder', () => {
        loginPage.loginBtn().should('have.text', 'Log In');
      });
      it('Click login button', () => {
        loginPage.loginBtn().click();
      });
      it('User was redirected to another page', () => {
        cy.location('pathname', 'eq', '/');
      });
      it('User was redirected to another page', () => {
        loginPage.header().contains("Your Request Couldn't be Processed");
      });
    });
  });
});

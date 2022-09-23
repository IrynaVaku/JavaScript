//<reference types="cypress" />;
export default class LoginPage {
  emailField = () => cy.get('input[data-testid="royal_email"]');
  passwordField = () => cy.get('input[data-testid="royal_pass"]');
  loginBtn = () => cy.get('button[data-testid="royal_login_button"]');
  header = () => cy.get('h2');
  generateEmail = () => {
    return `newUser${Math.floor(Math.random() * 1000)}ddt.com`;
  };
}

const emailAction = require('../configs/email-actin.enum');

module.exports = {
  [emailAction.WELCOME]: {
      subject: '[CAR SHOP] Welcome!',
      templateFileName: 'welcome'
  },

   [emailAction.FORGOT_PASS]: {
      subject: '[CAR SHOP] Forgot Password!',
       templateFileName: 'forgot-pass'
   }
};

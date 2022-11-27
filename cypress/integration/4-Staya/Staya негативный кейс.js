
describe('Негативный кейс формы логина Staya', function () {

   it('Открываю страницу входа/регистрации', function () {
   cy.visit('https://staya.dog/');
   cy.get('.BF2022Modal__actions > .s-button > .s-button__content').click();
   cy.wait(2000);
   cy.get('.header-bottom__right--link').click();
   cy.get('.auth-form > form > [type="email"]').type('danila.kaluga26@gmail.com');
   cy.get('.auth-form > form > [type="password"]').type('Luchok2288');
   cy.get('.auth-form__submit > .s-button__content').click();
   cy.wait(2000);
   cy.contains('Невозможно войти с предоставленными учетными данными.');
   })

})
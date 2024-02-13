describe("Авторизация", function() {


     it("Вход с валидным логином и паролем", function() {
        cy.visit("https://unsplash.com/");
        cy.contains("Log in").click();
        cy.contains("Email" );
        cy.get(':nth-child(1) > .ksgc2').type("danila.kaluga26@gmail.com");
        cy.get(':nth-child(2) > .ksgc2').type("Luchok228");
        cy.get('.a1ISs').click();
        cy.get('.ptze8').click();
        cy.get(':nth-child(3) > li > .KR60y').should('have.text', 'Logout @danilaqa');
    });      


    it("Вход с невалидным логином и паролем", function() {
        cy.visit("https://unsplash.com/");
        cy.contains("Log in").click();
        cy.contains("Email" );

  

     })



})


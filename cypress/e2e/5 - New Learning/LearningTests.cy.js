describe("Авторизация", function() {


     it.only("Вход с валидным логином и паролем", function() {
        cy.visit("https://unsplash.com/");
        cy.title().should('include', 'Unsplash');
        cy.contains("Log in").should('be.visible').click();
        cy.contains("Email" );  
        cy.get(':nth-child(1) > .ksgc2').type("danila.kaluga26@gmail.com");
        cy.get(':nth-child(2) > .ksgc2').type("Luchok228");
        cy.get('.a1ISs').click();
        cy.get('.ptze8').should('be.visible').click();
        cy.get(':nth-child(3) > li > .KR60y').should('have.text', 'Logout @danilaqa');
     });
     
     it("Выход из системы", function() {
        cy.visit("https://unsplash.com/");
        cy.title().should('include', 'Unsplash');
        cy.contains("Log in").should('be.visible').click();
        cy.contains("Email" );
        cy.get(':nth-child(1) > .ksgc2').type("danila.kaluga26@gmail.com");
        cy.get(':nth-child(2) > .ksgc2').type("Luchok228");
        cy.get('.a1ISs').click();
        cy.get('.ptze8').click();
        cy.get(':nth-child(3) > li > .KR60y').should('have.text', 'Logout @danilaqa');
        cy.get(':nth-child(3) > li > .KR60y').click();
        cy.contains("Log in");
    });      

    it("Вход с невалидным логином и паролем", function() {
        cy.visit("https://unsplash.com/");
        cy.contains("Log in").click();
        cy.contains("Email" );
        cy.get(':nth-child(1) > .ksgc2').type("danila.kaluga2546@gmail.com");
        cy.get(':nth-child(2) > .ksgc2').type("Luchok22348");
        cy.get('.a1ISs').click();
        cy.get('.s1dXf').should('have.text', 'Invalid email or password.');
    });
});

describe("Основные функции сайта", function() {


    it("Строка поиска(верхняя)+Url", function() {
        cy.visit("https://unsplash.com/");
        cy.get('[data-test="nav-bar-search-form-input"]').type('summer');
        cy.get('[data-test="nav-bar-search-form-input"]').type('{enter}');
        cy.wait(3000);
        cy.title().should('include', 'Summer');
        cy.get('[data-test="page-header-title"]').should('have.text', 'Summer');
        cy.url().should('include', 'https://unsplash.com/s/photos/summer');
    });

     it("Строка поиска(нижняя)+Url", function() {
        cy.visit("https://unsplash.com/");
        cy.get('[data-test="homepage-header-search-form-input"]').type('winter');
        cy.wait(3000);
        cy.get('[data-test="homepage-header-search-form-input"]').type('{enter}');
        cy.wait(3000);
        cy.title().should('include', 'Winter');
        cy.url().should('include', 'https://unsplash.com/s/photos/winter');
    });






})


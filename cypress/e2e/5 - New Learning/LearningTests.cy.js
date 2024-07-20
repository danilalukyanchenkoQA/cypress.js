describe("Регистрация", function() {

    const USER_EMAIL = 'danila.kaluga26@gmail.com'
    const PASSWORD = 'Luchok228'  

    
});




describe("Авторизация", function() {

const USER_EMAIL = 'danila.kaluga26@gmail.com'
const PASSWORD = 'Luchok228'

    it("Проверка на введенный в строку текст", function() {
        cy.visit("https://unsplash.com/login");
        cy.url().should('include', 'https://unsplash.com/login'); 
        cy.get('input[name="email"]').type(USER_EMAIL).should('have.value', USER_EMAIL); 
        cy.get('input[name="password"]').type(PASSWORD).should('have.value', PASSWORD);
});

     it("Проверка на введенный в строку текст", function() {
        cy.visit("https://unsplash.com/login");
        cy.url().should('include', 'https://unsplash.com/login'); 
        cy.get(':nth-child(1) > .ffHip').type(USER_EMAIL).should('have.value', USER_EMAIL); 
        cy.get(':nth-child(2) > .ffHip').type(PASSWORD).should('have.value', PASSWORD);
 });
 

    it("Вход с валидным логином и паролем", function() {
        cy.visit("https://unsplash.com/login");
        cy.url().should('include', 'https://unsplash.com/login'); 
        cy.get(':nth-child(1) > .ffHip').type(USER_EMAIL).should('have.value', USER_EMAIL); 
        cy.get(':nth-child(2) > .ffHip').type(PASSWORD);
        cy.get('button[class="IUoDf Qzy6N ogSND ZR5jm cs1e4 ibgtd LoCAy mP89P szXtT DA6Wz"]').click(); 
        cy.get('.wcgxB').should('not.exist');
     });
     
     it("Выход из системы", function() {
        cy.visit("https://unsplash.com/login");
        cy.url().should('include', 'https://unsplash.com/login'); 
        cy.get(':nth-child(1) > .ffHip').type(USER_EMAIL); 
        cy.get(':nth-child(2) > .ffHip').type(PASSWORD);
        cy.get('button[class="IUoDf Qzy6N ogSND ZR5jm cs1e4 ibgtd LoCAy mP89P szXtT DA6Wz"]').click(); 
        cy.get('.wcgxB').should('not.exist');
        cy.get('img[class="Lg6wf DlmAi"]').click();
        cy.get('button[class="wH4EU FEdrY zZzwR OvNxk VHcyz cs1e4 f62h9 thIqV"]').click();  
        cy.contains("Log in");
        cy.get('img[class="Lg6wf DlmAi"]').should('not.exist');
    });      

    it("Вход с невалидным логином и паролем", function() {
        cy.visit("https://unsplash.com/login");
        cy.url().should('include', 'https://unsplash.com/login'); 
        cy.get(':nth-child(1) > .ffHip').type("danila.kaluga2546@gmail.com");
        cy.get(':nth-child(2) > .ffHip').type('Luchok22348{enter}');     
        cy.get('div[class="ESPog"]').contains("Invalid email or password.");
    });
});

describe("Основные функции сайта", function() {

    it.only("Строка поиска(верхняя)+Url", function() {
        cy.visit("https://unsplash.com/");
        cy.get('[data-test="nav-bar-search-form-input"]').type('summer{enter}');
        cy.title().should('include', 'Summer');
        cy.url().should('include', 'https://unsplash.com/s/photos/summer');
    });

     it("Строка поиска(нижняя)+Url", function() {
        cy.visit("https://unsplash.com/");
        cy.get('[data-test="homepage-header-search-form-input"]').type('winter{enter}');
        cy.wait(3000);
        cy.title().should('include', 'Winter');
        cy.url().should('include', 'https://unsplash.com/s/photos/winter');
    });

    it("Поиск+Скролл", function() {
        cy.visit("https://unsplash.com/");
        cy.get('[data-test="homepage-header-search-form-input"]').type('car{enter}');
        cy.wait(3000);
        cy.title().should('include', 'Car');
        cy.url().should('include', 'https://unsplash.com/s/photos/car');
        cy.scrollTo('bottom');
        cy.wait(3000);
        cy.scrollTo('center');
        cy.wait(3000);
        cy.scrollTo('top');
        cy.wait(3000);
        cy.scrollTo(0, 1500);
       
    });

    it("Поиск без результата(Ничего не найдено)", function() {
        cy.visit("https://unsplash.com/");
        cy.get('[data-test="homepage-header-search-form-input"]').type('dfgshghsdldkjs{enter}');
        cy.wait(3000);
        cy.get('img[class="AAazD"]').should('be.visible');
        cy.contains("Photos 0");
        cy.contains("Collections 0");
    });




})
 

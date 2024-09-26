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

    it("Вход с валидным логином и паролем", function() {
        cy.visit("https://unsplash.com/login");
        cy.url().should('include', 'https://unsplash.com/login'); 
        cy.get('input[name="email"]').type(USER_EMAIL);
        cy.get('input[name="password"]').type(PASSWORD);   
        cy.get('button[value="Login"]').click(); 
        cy.get('.wcgxB').should('not.exist');
     });
     
     it("Выход из системы", function() {
        cy.visit("https://unsplash.com/login");
        cy.url().should('include', 'https://unsplash.com/login'); 
        cy.get('input[name="email"]').type(USER_EMAIL); 
        cy.get('input[name="password"]').type(PASSWORD); 
        cy.get('button[value="Login"]').click();
        cy.get('.wcgxB').should('not.exist');
        cy.get('img[class="voBgy SycQK"]').click();
        cy.wait(4000)
        cy.contains('Logout @danilaqa').click();  
        cy.contains("Log in");
        cy.get('img[class="Lg6wf DlmAi"]').should('not.exist');
    });      

    it("Вход с невалидным логином и паролем", function() {
        cy.visit("https://unsplash.com/login");
        cy.url().should('include', 'https://unsplash.com/login'); 
        cy.get('input[name="email"]').type("danila.kaluga2546@gmail.com");
        cy.get('input[name="password"]').type('Luchok22348{enter}');     
        cy.contains("Invalid email or password.");
    });
});

describe("Основные функции сайта", function() {

    it("Строка поиска(верхняя)+Url", function() {
        cy.visit("https://unsplash.com/");
        cy.get('input[class="gKBw1 uq8A1"]').type('summer{enter}');
        cy.title().should('include', 'Summer');
        cy.url().should('include', 'https://unsplash.com/s/photos/summer');
    });

     it("Строка поиска(нижняя)+Url", function() {
        cy.visit("https://unsplash.com/");
        cy.get('input[class="rAfGd uq8A1"]').type('winter{enter}');
        cy.title().should('include', 'Winter');
        cy.url().should('include', 'https://unsplash.com/s/photos/winter');
    });

    it("Поиск+Скролл", function() {
        cy.visit("https://unsplash.com/");
        cy.get('input[class="rAfGd uq8A1"]').type('car{enter}');
        cy.title().should('include', 'Car');
        cy.url().should('include', 'https://unsplash.com/s/photos/car');
        cy.scrollTo('bottom');
        cy.scrollTo('center');
        cy.scrollTo('top');
        cy.scrollTo(0, 1500);
       
    });

    it("Поиск без результата(Ничего не найдено)", function() {
        cy.visit("https://unsplash.com/");
        cy.get('input[class="rAfGd uq8A1"]').type('dfgshghsdldkjs{enter}');
        cy.get('img[class="ausjZ"]').should('be.visible');
        cy.contains("Photos 0");
        cy.contains("Collections 0");
    });

})


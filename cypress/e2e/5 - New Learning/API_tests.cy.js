describe("АPI tests", function() {

    it("GET запрос на статус код", function() {
      cy.request('GET', 'https://swapi.dev/api/people/1/').then( ({ status }) => {
        expect(status).to.eq(200)
      })

      
      cy.request({
        method: 'GET', 
        url: 'https://swapi.dev/api/people/1/', 
        body: {
          name: 'space travel plan'
        }
        // Вариант того как можно отправлять запросы

      })
 });

    it("GET запрос на проверку body ответа", function() {
      cy.request('GET', 'https://swapi.dev/api/people/1/').then((response) =>{
        expect(response).to.have.property('status', 200);
        expect(response.body).to.not.be.null;
        expect(response.body.films).to.have.length(4);
        expect(response.body.vehicles).to.have.length(2);
        expect(response.body.starships).to.have.length(2);
        expect(response.body.gender).to.eq('male');
        expect(response.body.birth_year).to.eq('19BBY');
        expect(response.body.name).to.eq('Luke Skywalker');
        // Проверки на то что body не должен быть пустым, статус код ответа 200 и в body есть определенное кол-во строк и их содержание
  })
});


});





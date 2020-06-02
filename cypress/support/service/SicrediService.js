class SicrediService {


    getSicrediRequest() {

      cy.request("GET", "http://5b847b30db24a100142dce1b.mockapi.io/api/v1/simulador").then(response => {
        cy.log(response.body);
        assert.equal(response.status, 200);
        expect(response.body).to.not.be.null;

      });
    }

    getElemento() {

      cy.request("http://5b847b30db24a100142dce1b.mockapi.io/api/v1/simulador").then(response => {
        expect(response.body).to.have.property('id');

      });  
           
    }

    getInformacao() {

      cy.request("http://5b847b30db24a100142dce1b.mockapi.io/api/v1/simulador").then(response => {
        expect(response.body).to.have.all.keys('id', 'meses','valor')

      });

    }
  
  }
  module.exports = new SicrediService();
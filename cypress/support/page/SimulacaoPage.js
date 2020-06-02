class SimulacaoPage {

    getValorAplicar() {

      return cy.get("#valorAplicar");

    }
    
    getPouparPorMes() {

      return cy.get("#valorInvestir");

    }
    
    getTempoParaPoupar() {

      return cy.get("#tempo");

    }
    
     getBotaoSimular() {

      return cy.get(".btn.btnAmarelo.btnSimular");
      
    }

    getBotaoLimpar(){

      return cy.get(".btn.btnLimpar");

    }
    
  }
  module.exports = new SimulacaoPage();
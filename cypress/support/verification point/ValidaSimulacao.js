class ValidaSimulacao {

    validaTextoSimulcao() {

      return cy
        .get(".maisOpcoes > span")
        .should("have.text", "Veja estas outras opções para você");
    }
  }
  module.exports = new ValidaSimulacao();
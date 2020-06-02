class ValidaPreco {

    validaTextoPreco() {

      return cy
        .get("label#valorAplicar-error")
        .should("have.text", "Valor mínimo de 20.00");
    }
  }
  module.exports = new ValidaPreco();
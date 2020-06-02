const simulacaoTask = require("../support/task/SimulacaoTask.js");
const validaPreco = require("../support/verification point/ValidaPreco.js");

var faker = require("faker");
var randomaplicar = faker.random.number({min:1, max:1999});
var randompoupar = faker.random.number({min:1, max:1999});
var randomtempo = faker.random.number({min:12, max:20});

before(() => {

  cy.visit("https://www.sicredi.com.br/html/ferramenta/simulador-investimento-poupanca/");
  cy.clearCookies();
  
});

describe("Fazer uma simulação de investimento com valor abaixo do permitido", () => {
  it("Dado um valor que eu quero aplicar", () => {

    simulacaoTask.setValorAplicarFill(randomaplicar);
   
  });

  it("Dado o valor que eu quero poupar", () => {
    
    simulacaoTask.setValorPouparFill(randompoupar);
    validaPreco.validaTextoPreco();

  });

  it("Dado que eu escolha o periodo de investimento", () => {

    simulacaoTask.setTempoPouparFill(randomtempo);
    
  });

  it("Então eu tento simular o meu investimento", () => {

    simulacaoTask.setGerarSimulacaoButton();
    
  });

  it("Então eu limpo os campos", () => {

    simulacaoTask.setLimparCampoButton();
    
  });

});
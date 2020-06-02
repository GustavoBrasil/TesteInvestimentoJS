const simulacaoTask = require("../support/task/SimulacaoTask.js");
const validaSimulacao = require("../support/verification point/ValidaSimulacao.js");
var faker = require("faker");
var randomaplicar = faker.random.number({min:4000, max:100000});
var randompoupar = faker.random.number({min:4000, max:100000});
var randomtempo = faker.random.number({min:12, max:20});

before(() => {

  cy.visit("https://www.sicredi.com.br/html/ferramenta/simulador-investimento-poupanca/");
  cy.clearCookies();
  
});

describe("Fazer uma simulação de investimento com sucesso", () => {
  it("Dado um valor que eu quero aplicar", () => {

    simulacaoTask.setValorAplicarFill(randomaplicar);
   
  });

  it("Dado o valor que eu quero poupar", () => {
    
    simulacaoTask.setValorPouparFill(randompoupar);

  });

  it("Dado que eu escolha o periodo de investimento", () => {

    simulacaoTask.setTempoPouparFill(randomtempo);
    
  });

  it("Então eu simulo meu investimento", () => {

   simulacaoTask.setGerarSimulacaoButton();

  });

  it("E Verifico o resultado da minha simulação", () => {

    validaSimulacao.validaTextoSimulcao();

  });
 
});
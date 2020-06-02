const simulacaoPage = require("../page/SimulacaoPage.js");

class SimulacaoTask {

    setValorAplicarFill(aplicarv) {
	
		cy.wait(5000);
        return simulacaoPage.getValorAplicar().type(aplicarv);
		
    }
	
	setValorPouparFill(poupar) {
			
        return simulacaoPage.getPouparPorMes().type(poupar);
		
    }
	
	setTempoPouparFill(tempo) {
			
        return simulacaoPage.getTempoParaPoupar().type(tempo);
        
    }
	
	
	setGerarSimulacaoButton(){
	
		return simulacaoPage.getBotaoSimular().click();
	
    }
    
    setLimparCampoButton(){

        return simulacaoPage.getBotaoLimpar().click();

    }
	
	
}
module.exports = new SimulacaoTask();
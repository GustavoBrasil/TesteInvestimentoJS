const sicrediService = require('../support/service/SicrediService.js');

describe('Sicredi - Teste de API ', () => {

    it('GET Request Sicredi', () => {
        sicrediService.getSicrediRequest();
    });

    it('GET Elemento', () => {
        sicrediService.getElemento();
    });

    it('GET Informacoes', () => {
        sicrediService.getInformacao();
    });

   
});
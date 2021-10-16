const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
        test('inicio deve ser um inteiro', () =>{
            expect(gerarNumeroAleatorio(3.5,5))
            .toBe(-1);
        });
        test('fim deve ser um inteiro',()=>{
            expect(gerarNumeroAleatorio(20,"notInteger")).toBe(-1);
        });
        test('inicio não pode ser negativo',()=>{
            expect(gerarNumeroAleatorio(-7,9)).toBe(-1);
        });
    });
    

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
        test('Deve retornar o indice cujo o caracter foi encontrado',()=>{
            expect(acharCaracter(3,'xyz','y')).toBe(1);
        })
        test('deve apresentar mensagem indicando que o caracter não está presente na cadeia: caracter não encontrado',()=>{
        expect(acharCaracter(5,'abcde','w')).toBe("caracter não encontrado");
        });
    });    
});
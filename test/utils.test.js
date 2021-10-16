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
    });    
});
import { Calculator } from '@App/Calculator';

describe('Calculator', () => {

    describe('Adicao', () => {

        it('Deve retornar a soma de dois numeros', () => {
            // Given/Arrange/Dado que
            const numberOne = 2
            const numberTwo = 8
        
            // When/Act/Execute a ação
            const resultado = Calculator.sum(numberOne, numberTwo)
        
            // Then/Assert/Entao o resultado é
            expect(resultado).toBe(10)
        })
    })
})

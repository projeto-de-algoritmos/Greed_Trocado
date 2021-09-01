import { cedulas, moedas } from "./mocks.js";

export default function trocador(valorTotal, valorPago) {
    let tam = moedas.length;

    let troco = (valorPago - valorTotal) * 100

    // Initialize result
        let resposta = [];

        // Traverse through all denomination
        for (let i = tam - 1; i >= 0; i--)
        {
            // Find denominations
            while (troco >= moedas[i])
            {
                troco -= moedas[i];
                resposta.push(moedas[i]);
            }
        }

        return resposta

}



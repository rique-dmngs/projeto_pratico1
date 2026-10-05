import { Despesa } from "./tipos"
import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto, maiorDespesa } from "./despesas"
import { descricaoCategoria, matrizCategoriaMes, formatarRelatorio } from "./relatorio"

export const despesas: Despesa[] = [
    { id: 1, descricao: "Café", valor: 20, categoria: "alimentacao", mes: 4 },
    { id: 2, descricao: "Taxi", valor: 50, categoria: "transporte", mes: 7 },
    { id: 3, descricao: "Spa", valor: 100, categoria: "lazer", mes: 3 },
    { id: 4, descricao: "Aluguel", valor: 800, categoria: "moradia", mes: 4 },
    { id: 5, descricao: "Cinema", valor: 30, categoria: "lazer", mes: 3 },
    { id: 6, descricao: "Jantar", valor: 40, categoria: "alimentacao", mes: 3 },
    { id: 7, descricao: "Uber", valor: 20, categoria: "transporte", mes: 4 },
    { id: 8, descricao: "Academia", valor: 70, categoria: "lazer", mes: 7 },
]

console.log(formatarRelatorio(despesas))
//use "npm run dev" no terminal para ver o relatório

/*
Resposta esperada no console:

RELATÓRIO DE DESPESAS

Categoria           Total do ano
Alimentação         R$ 60.00
Transporte          R$ 70.00
Lazer               R$ 200.00
Moradia             R$ 800.00

Total geral: R$ 1130.00
Maior despesa: Aluguel - R$ 800.00
*/
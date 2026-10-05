import { Despesa } from "./tipos"
import { Categoria } from "./tipos"

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
    if (nova.mes < 1 || nova.mes > 12) {
        throw new Error("Mês inválido");
    }

    if (nova.valor <= 0) {
        throw new Error("Valor inválido");
    }

    return [...despesas, nova];
}

export function removerDespesa(despesas: Despesa[], id: number): Despesa[] {
    return despesas.filter((despesa) => despesa.id !== id);
}

export function despesasDaCategoria(despesas: Despesa[], categoria: Categoria): Despesa[] {
    return despesas.filter((despesa) => despesa.categoria === categoria);
}

export function totalGasto(despesas: Despesa[]): number {
    return despesas.reduce((acc, despesa) => acc + despesa.valor, 0);
}
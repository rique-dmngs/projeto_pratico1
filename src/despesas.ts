import { Despesa } from "./tipos"

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
    throw new Error("Função não implementada");
}
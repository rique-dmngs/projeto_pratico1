import { describe, it, expect } from "vitest"
import { adicionarDespesa } from "../despesas"
import { Despesa } from "../tipos"

describe("adicionarDespesa", () => {
    it("deve adicionar uma nova despesa à lista de despesas", () => {
        const despesas: Despesa[] = [
            { id: 1, descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 },
            { id: 2, descricao: "Transporte", valor: 50, categoria: "transporte", mes: 5 }
        ]
        const nova: Despesa = { id: 3, descricao: "Lazer", valor: 100, categoria: "lazer", mes: 5 }

        const despesasAtualizadas = adicionarDespesa(despesas, nova)

        expect(despesasAtualizadas).toHaveLength(3)
        expect(despesasAtualizadas[2]).toEqual(nova)
    })

    it("deve lançar um erro se mes for maior que 12", () => {
        const despesas: Despesa[] = [
            { id: 1, descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 }
        ]
        const nova: Despesa = { id: 2, descricao: "Transporte", valor: 50, categoria: "transporte", mes: 13 }

        expect(() => adicionarDespesa(despesas, nova)).toThrow("Mês inválido")
    })

    it("deve lançar um erro se mes for menor que 1", () => {
        const despesas: Despesa[] = [
            { id: 1, descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 }
        ]
        const nova: Despesa = { id: 2, descricao: "Transporte", valor: 50, categoria: "transporte", mes: 0 }

        expect(() => adicionarDespesa(despesas, nova)).toThrow("Mês inválido")
    })

    it("array despesasAtualizadas deve ser diferente do array despesas", () => {
        const despesas: Despesa[] = [
            { id: 1, descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 }
        ]
        const nova: Despesa = { id: 2, descricao: "Transporte", valor: 50, categoria: "transporte", mes: 5 }

        const despesasAtualizadas = adicionarDespesa(despesas, nova)

        expect(despesasAtualizadas).not.toBe(despesas)
    })
})
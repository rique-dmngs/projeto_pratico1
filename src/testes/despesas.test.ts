import { describe, it, expect } from "vitest"
import { adicionarDespesa } from "../despesas"
import { removerDespesa } from "../despesas"
import { despesasDaCategoria } from "../despesas"
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

    it("deve lançar erro se valor for igual a 0", () => {
        const despesas: Despesa[] = [
            { id: 1, descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 }
        ]
        const nova: Despesa = { id: 2, descricao: "Transporte", valor: 0, categoria: "transporte", mes: 5 }

        expect(() => adicionarDespesa(despesas, nova)).toThrow("Valor inválido")
    })

    it("deve lançar erro se valor for menor que 0", () => {
        const despesas: Despesa[] = [
            { id: 1, descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 }
        ]
        const nova: Despesa = { id: 2, descricao: "Transporte", valor: -10, categoria: "transporte", mes: 5 }

        expect(() => adicionarDespesa(despesas, nova)).toThrow("Valor inválido")
    })
})

describe("removerDespesa", () => {
    it("deve retornar um novo array sem a despesa do id informado", () => {
        const despesas: Despesa[] = [
            { id: 1 , descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 },
            { id: 2 , descricao: "Transporte", valor: 50, categoria: "transporte", mes: 5 },
        ]
        const id = 1

        const despesasAtualizadas = removerDespesa(despesas, id)

        expect(despesasAtualizadas).toEqual([{ id: 2 , descricao: "Transporte", valor: 50, categoria: "transporte", mes: 5 }])
    })

    it("deve retornar um novo array com as mesmas despesas se o id informado não existir", () => {
        const despesas: Despesa[] = [
            { id: 1 , descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 },
            { id: 2 , descricao: "Transporte", valor: 50, categoria: "transporte", mes: 5 },
        ]
        const id = 3

        const despesasAtualizadas = removerDespesa(despesas, id)

        expect(despesasAtualizadas).toEqual([...despesas])
    })

    it("array despesasAtualizadas deve ser diferente do array despesas", () => {
        const despesas: Despesa[] = [
            { id: 1 , descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 },
            { id: 2 , descricao: "Transporte", valor: 50, categoria: "transporte", mes: 5 },
        ]
        const id = 1

        const despesasAtualizadas = removerDespesa(despesas, id)

        expect(despesasAtualizadas).not.toBe(despesas)
    })
})

describe ("despesasDaCategoria", () => {
    it("deve retornar apenas as despesas da categoria informada", () => {
        const despesas: Despesa[] = [
            { id: 1 , descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 },
            { id: 2 , descricao: "Transporte", valor: 50, categoria: "transporte", mes: 5 },
            { id: 3 , descricao: "Cinema", valor: 30, categoria: "lazer", mes: 5 },
            { id: 4 , descricao: "Jantar", valor: 40, categoria: "alimentacao", mes: 5 }
        ]
        const categoria = "alimentacao"

        const despesasFiltradas = despesasDaCategoria(despesas, categoria)

        expect(despesasFiltradas).toEqual([
            { id: 1 , descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 },
            { id: 4 , descricao: "Jantar", valor: 40, categoria: "alimentacao", mes: 5 }
        ])
    })

    it("array despesasFiltradas deve ser diferente do array despesas", () => {
        const despesas: Despesa[] = [
            { id: 1 , descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 },
            { id: 2 , descricao: "Transporte", valor: 50, categoria: "transporte", mes: 5 },
            { id: 3 , descricao: "Cinema", valor: 30, categoria: "lazer", mes: 5 },
            { id: 4 , descricao: "Jantar", valor: 40, categoria: "alimentacao", mes: 5 }
        ]
        const categoria = "alimentacao"

        const despesasFiltradas = despesasDaCategoria(despesas, categoria)

        expect(despesasFiltradas).not.toBe(despesas)
    })

    it("deve retornar um array vazio se despesas não possuir nenhuma Despesa da categoria informada", () => {
        const despesas: Despesa[] = [
            { id: 1 , descricao: "Almoço", valor: 20, categoria: "alimentacao", mes: 5 },
            { id: 2 , descricao: "Transporte", valor: 50, categoria: "transporte", mes: 5 },
            { id: 3 , descricao: "Cinema", valor: 30, categoria: "lazer", mes: 5 },
            { id: 4 , descricao: "Jantar", valor: 40, categoria: "alimentacao", mes: 5 }
        ]
        const categoria = "moradia"

        const despesasFiltradas = despesasDaCategoria(despesas, categoria)

        expect(despesasFiltradas).toEqual([])
    })
})
export type Categoria = "alimentacao" | "transporte" | "lazer" | "moradia"

export interface Despesa {
    readonly id: number
    //readonly é utilizado em id pois nunca muda depois de criado (não pode ser alterado)
    descricao: string
    valor: number
    categoria: Categoria
    //categoria é uma union type, pois só pode ser uma das opções definidas em Categoria.
    mes: number
    observacao?: string
    /*observacao é opcional (?), pois nem sempre é necessária para a definição de uma despesa;
    enquanto todo o resto é obrigatório pois são informações necessárias para o funcionamento do sistema, 
    além de serem importantes dados para a definição de uma despesa.*/
}

export const CATEGORIAS: Categoria[] = [
    "alimentacao",
    "transporte",
    "lazer",
    "moradia"
]

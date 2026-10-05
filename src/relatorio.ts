import { Despesa, Categoria, CATEGORIAS } from "./tipos"
import { despesas } from "./index"
import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto, maiorDespesa } from "./despesas"

export function descricaoCategoria(categoria: Categoria): string {
    switch (categoria) {
        case "alimentacao":
            return "Alimentação"
        case "transporte":
            return "Transporte"
        case "lazer":
            return "Lazer"
        case "moradia":
            return "Moradia"
    }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];

  for (let i = 0; i < CATEGORIAS.length; i++) {
    matriz.push(new Array(12).fill(0));
  }

  for (let i = 0; i < despesas.length; i++) {
    const despesa = despesas[i];

    if (despesa === undefined) {
      continue;
    }

    const linha = CATEGORIAS.indexOf(despesa.categoria);
    const coluna = despesa.mes - 1;

    if (linha < 0 || coluna < 0) {
      continue;
    }

    const linhaMatriz = matriz[linha];

    if (linhaMatriz === undefined || coluna >= linhaMatriz.length) {
      continue;
    }

    const valorAtual = linhaMatriz[coluna];

    if (valorAtual === undefined) {
      continue;
    }

    linhaMatriz[coluna] = valorAtual + despesa.valor;
  }

  return matriz;
}



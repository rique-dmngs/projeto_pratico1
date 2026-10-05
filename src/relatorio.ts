import { Despesa, Categoria, CATEGORIAS } from "./tipos"
import { despesas } from "./index"
import { totalGasto, maiorDespesa } from "./despesas"

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

export function formatarRelatorio(despesas: Despesa[]): string {
  let relatorio = "Relatório de despesas".toUpperCase() + "\n\n";

  relatorio += "Categoria".padEnd(20) + "Total do ano\n";

  for (let i = 0; i < CATEGORIAS.length; i++) {
    const categoria = CATEGORIAS[i];

    if (categoria === undefined) {
      continue;
    }

    let totalCategoria = 0;

    for (let j = 0; j < despesas.length; j++) {
      const despesa = despesas[j];

      if (despesa === undefined) {
        continue;
      }

      if (despesa.categoria === categoria) {
        totalCategoria += despesa.valor;
      }
    }

    const nomeCategoria = descricaoCategoria(categoria);
    const valorFormatado = totalCategoria.toFixed(2);

    relatorio +=
      nomeCategoria.padEnd(20) +
      "R$ " +
      valorFormatado +
      "\n";
  }

  const total = totalGasto(despesas);
  const maior = maiorDespesa(despesas);

  relatorio += "\n";
  relatorio += "Total geral: R$ " + total.toFixed(2) + "\n";

  if (maior === undefined) {
    relatorio += "Maior despesa: Nenhuma despesa registrada";
  } else {
    relatorio +=
      "Maior despesa: " +
      maior.descricao +
      " - R$ " +
      maior.valor.toFixed(2);
  }

  return relatorio;
}



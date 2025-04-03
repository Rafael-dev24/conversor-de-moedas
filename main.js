let valor_won, won, conversao;

valor_won = parseFloat(prompt("digite um valor em won!").replace(",", "."));

won = parseFloat(0.0040);

conversao = (valor_won * won);

alert("R$" + conversao)
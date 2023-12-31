//1–Crie um array contendo 10 valores de salário e utilizando o método map()
//atribua um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima de 2000.

const salario = [2000, 1800, 1900, 1200, 1100, 4500, 2500, 2200, 2100, 2400];

const aumento = salario.map(salario => {
    if (salario > 2000) {
        return salario * 1.1;
    } else {
        return salario * 1.15;
        
    }
});

//2–Utilizando o array de resultado do exercício anterior,crie um novo array,usando o método filter(),
//contendo somente os salários superiores a 2500.

const salarioMaior = aumento.filter(salario => salario > 2500);

//console.log("Salário: ", salario);

//console.log("Aumento no salário: ", aumento);

//console.log("Salários que são maiores que 2500: ", salarioMaior);

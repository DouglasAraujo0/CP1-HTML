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


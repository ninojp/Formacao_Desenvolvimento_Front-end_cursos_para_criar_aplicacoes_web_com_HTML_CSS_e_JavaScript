// Aprendemos que o método sort ordena os elementos do próprio array e retorna o array. 
// A função que você passa para ela deve retornar uma condição verdadeira ou falsa (true ou false),
//  como ilustram os código abaixo:

let n = [3, 0 , 2, 1, 10, 100];
console.log(n.sort())       

let p = ['Zequinha', 'anna', 'fábio', 'caio', 'Anna', 'lucas']
console.log(p.sort())

// RESULTADO
// [ 0, 1, 10, 100, 2, 3 ]
// [ 'Anna', 'Zequinha', 'anna', 'caio', 'fábio', 'lucas' ]

// O método sort converte elementos em strings e realiza a comparação ordenando de acordo com a pontuação de código Unicode. Observe que método sort coloca o 10 e o 100 antes de 2 porque a string “10” vem antes de “2” ao fazer uma comparação de strings. O mesmo acontece na ordenação da variável p onde as letras maiusculas são ordenadas primeiros que as letras minúsculas.
//Crie a const para a frase aqui
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS,  mas não deixe o gato sair"`
const novaFrase = frase.replaceAll('verde','rosa')
const novaFrase2 = novaFrase.replaceAll('azul','laranja')
const extra = 'MAS NÃO DEIXE O GATO SAIR'.toUpperCase()

console.log(novaFrase2.replaceAll('mas não deixe o gato sair', extra))
console.log('A nova frase inclui a palavra verde?', novaFrase2.includes('verde'))
console.log('A nova frase inclui a palavra laranja?', novaFrase2.includes('a'))
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringTrim = minhaString.trim()
const tamanho = minhaString.length
const tamanho2 = minhaStringTrim.length

console.log(minhaStringTrim)
console.log(`A frase antes de tirar os espaços tinha ${tamanho} caractéres.`)
console.log(`A frase depois de tirar os espaços tem ${tamanho2} caractéres.`)
console.log(minhaString.replaceAll('________.      ', 'sticioso.'))
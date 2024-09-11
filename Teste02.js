/*2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/

// Defina a função
function contarAEmString(entradaString) {
    // Converta para minúscula
    entradaString = entradaString.toLowerCase();
  
    // Verifique se existe
    let existe = entradaString.includes('a');
  
    // Contabilize ocorrências
    let contador = entradaString.split('a').length - 1;
  
    // Retorne o resultado
    return [existe, contador];
  }
  
  // Defina uma string pré-definida
  let entradaString = "ocorrido";
  
  // Chame a função
  let [existe, contador] = contarAEmString(entradaString);
  
  // Imprima o resultado
  if (existe) {
    console.log(`A letra 'a' existe na string e ocorre ${contador} vezes.`);
  } else {
    console.log("A letra 'a' não existe na string.");
  }
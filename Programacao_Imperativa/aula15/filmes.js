let filmes = ["star wars", "totoro", "rocky", "pulp fiction",
 "a vida é bela"]
 
 let filmesAnimados =
 ["Toy Story", "Procurando o Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

 function converterMaiusculas(filmes){
     for(let i = 0; i < filmes.length; i++){
         filmes[i] = filmes[i].toUpperCase()
     }
     return filmes
 }

 function passagemDeElementos(array1, array2){
    for(let i = 0; i < array1.length; i++) {
        array.push(array2).pop().toUpperCase()
    }
    return array1
}

converterMaiusculas(filmes)
passagemDeElementos(array1)
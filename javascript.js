var consultaCEP = fetch("https://viacep.com.br/ws/01001000/json/")
.then((resposta) => resposta.json())
.then((r) => {
    if(r.erro){ 
        throw Error('Esse CEP não existe!')
    }else{
        console.log(r)
    }
})
.catch(c => console.log(c))//tratando erros de excecao
.finally(f => console.log('Processamento concluído'))

console.log(consultaCEP)
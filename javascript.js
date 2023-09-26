async function buscaEndereco(cep){
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        console.log(consultaCEPConvertida)
        if(consultaCEPConvertida.erro){
            throw Error("CEP inexistente!")
        }
    }catch(erro){
        console.log(erro)
    }
}

var campoCep = document.getElementById('cep')
campoCep.addEventListener("focusout", () => {buscaEndereco(campoCep.value)})
// função que vai receber os valores e as ações que podem ser feitas
function calcular(tipo, valor){
    
    if(tipo === 'acao') {

        if(valor === 'c') {
            //limpar o visor (id resultado)
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') { // || significa ou
            document.getElementById('resultado').value += valor //+= pega o valor contido ja e faz a concatenação com o proximo valor ou ação
        } 

        if(valor === '=') {
            var valor_campo = eval(document.getElementById('resultado').value) // eval pega o valor string da nossa conta e transforma em uma 
                                        // função nativa javascript, ou seja, transforma em numero permitindo fazer as operações matemáticas
            document.getElementById('resultado').value = valor_campo 
        }


    } else if(tipo === 'numero') {
        document.getElementById('resultado').value += valor 
    }
}
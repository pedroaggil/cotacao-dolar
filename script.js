const cot = document.querySelector("#cot");

document.querySelector("#converter").addEventListener('click', function(){
    const opcoes = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }

    fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`, opcoes).then(
        response => { response.json()
            .then(data => {
            document.querySelector("#converte").textContent = cot.value * data['USDBRL']['bid'];
            document.querySelector("#compra").textContent = data['USDBRL']['bid'];
            document.querySelector("#venda").textContent = data['USDBRL']['ask'];
            document.querySelector("#minimo").textContent = data['USDBRL']['low'];
            document.querySelector("#maximo").textContent = data['USDBRL']['high'];
        });
    })
});

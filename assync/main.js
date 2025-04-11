const url = `https://www.viacep.com.br/ws/03716050/json/`

const fetchPromise = fetch(url);

fetchPromise
    .then( (resposta) => {
        if(!resposta.ok) throw new Error(`HTTP Error: ${resposta.status}`);

        return resposta.json()
    })
    .then( (data) => {
        console.log(data.localidade)
    })
    .catch( err => console.error(`Erro: ${err}`)  )
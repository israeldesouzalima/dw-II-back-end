functions
    setTimeout()
    callback()

notes

. Usado na busca de recursos externos da aplicação.

. Callback é executado após o término da primeira função

``` function de callback

```

PROMISSE
status
- pendente
- resolvida
- rejeitada

``` main.js

    .then( (resposta) => {
        if(!resposta.ok) throw new Error(`HTTP Error: ${resposta.status}`);

        return resposta.json()
    })
    .then( (data) => {
        console.log(data)
    })

```
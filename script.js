const Pessoas = document.getElementById("listaPessoa");

fetch("https://crudcrud.com/api/c9b94636a6a14a6f9ade97255a3da3e0/pessoas")
    .then(response => response.json())
    .then((listaPessoas) => {

        listaPessoas.forEach(cadastro => {
            const item = document.createElement("li");
            item.innerHTML = `${cadastro.nome} <button onclick="removePessoa('${cadastro._id}')" class="btnExcluiPessoa">Excluir</button>`;
            Pessoas.appendChild(item);
        });
    })


document.getElementById("btnCriaPessoa").addEventListener("click", () => {

    const nomeEscrito = document.getElementById("nome").value;
    const emailEscrito = document.getElementById("email").value;

    fetch("https://crudcrud.com/api/c9b94636a6a14a6f9ade97255a3da3e0/pessoas", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nomeEscrito,
            email: emailEscrito
        })

    })
        .then(response => response.json())
        .then((cadastro) => {

            const item = document.createElement("li");
            item.innerHTML = `${cadastro.nome} <button onclick="removePessoa('${cadastro._id}')" class="btnExcluiPessoa">Excluir</button>`;
            Pessoas.appendChild(item);


        })

})


const lista = document.getElementById("listaPessoa");

lista.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("btnExcluiPessoa"))
        evento.target.closest("li").remove();
})


function removePessoa(idPessoa) {

    fetch(`https://crudcrud.com/api/c9b94636a6a14a6f9ade97255a3da3e0/pessoas/${idPessoa}`, {
        method: "DELETE"
    })
        .then(response => {
            response ? console.log("Deu boa!") : console.log("Deu Ruim!");


        })

}

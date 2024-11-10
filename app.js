function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado ou você não escreveu nada no campo de busca";
        return;
    }

    // Converte o valor do campo de pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Percorre todos os dados de jogos
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        // Verifica se o título ou a descrição do jogo contém o termo pesquisado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Adiciona o resultado encontrado à variável resultados
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // Verifica se nenhum resultado foi encontrado
    if (resultados === "") {
        section.innerHTML = "Jogo não encontrado. Talvez ele ainda não tenha sido adicionado ou você digitou algo errado. Tente digitar uma categoria relacionada ao jogo ou entre em contato para que possamos adicionar.";
    } else {
        // Exibe os resultados encontrados
        section.innerHTML = resultados;
    }
}

// Adiciona um evento para permitir a pesquisa ao pressionar a tecla Enter
document.getElementById("campo-pesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        pesquisar(); // Chama a função pesquisar diretamente
    }
});
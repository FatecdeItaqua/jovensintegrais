$(() => {

    window.location.hash = ""

    window.onpopstate = function (event) {

        let paginaDestino = window.location.hash.replace(/#/, '')

        this.setConteudoPaginaClicada(paginaDestino)

    }

    window.location.hash = "chamada"

});

function setConteudoPaginaClicada(paginaASerCarregada) {
    let main = $("main")
    main.html("")
    main.load(paginaASerCarregada + ".html")
}


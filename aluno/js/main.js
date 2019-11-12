$(() => {

    window.location.hash = ""

    window.onpopstate = function (event) {

        let paginaDestino = window.location.hash.replace(/#/, '')

        this.setConteudoPaginaClicada(paginaDestino)

    }

    window.location.hash = "almoco"
    
    //MENSAGEM COLABORADOR

    $(document).on('click', ".mensagem-colaborador", function (event) {
        let iconeClicado = event.currentTarget
        let idColaborador = $(iconeClicado).data("id")
        $("#modal-mensagem").iziModal('open')

    });


});

function setConteudoPaginaClicada(paginaASerCarregada) {
    let main = $("main")
    main.html("")
    main.load(paginaASerCarregada + ".html")
}


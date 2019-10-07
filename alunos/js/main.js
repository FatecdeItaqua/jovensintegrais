$(() => {
    window.location.hash = ""

    window.onpopstate = function(event){
        
        let paginaDestino = window.location.hash.replace(/#/, '')

        this.setConteudoPaginaClicada(paginaDestino)
        
    }

    window.location.hash = "colaborador"


    $(document).on('click', '.trigger', function (event) {
        event.preventDefault();
        $('#modal').iziModal('open');
    });

//EDITAR COLABORADOR

    $(document).on('click', ".editar-colaborador", function(event){
        let iconeClicado = event.currentTarget
        let idColaborador = $(iconeClicado).data("id")
        let colaboradorObjeto = {
            nome: $(iconeClicado).closest('#colaborador-'+idColaborador).children('td')[0].innerHTML,
            email: $(iconeClicado).closest('#colaborador-'+idColaborador).children('td')[1].innerHTML,
            profissao: $(iconeClicado).closest('#colaborador-'+idColaborador).children('td')[2].innerHTML
        }
        $("#modal-editar").iziModal('open')
        $("#modal-editar").find('input#txbNome').val(colaboradorObjeto.nome)
        $("#modal-editar").find('input#txbEmail').val(colaboradorObjeto.email)
        $("#modal-editar").find('select#cbbCargo').val(colaboradorObjeto.profissao)
        
    });
})

function setConteudoPaginaClicada(paginaASerCarregada){
    let main = $("main")
    main.html("")   
    main.load(paginaASerCarregada + ".html")
}


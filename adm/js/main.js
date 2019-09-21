$(() => {
    $("#modal").iziModal({
        title: 'Adicionar Colaborador',
        subtitle: 'Formulário para adicionar um novo Colaborador ao sistema',
        headerColor: '#61ba6d'
    });

    $(document).on('click', '.trigger', function (event) {
        event.preventDefault();
        $('#modal').iziModal('open');
    });

    $(".editar-colaborador").on("click", function(event){

        var editclick = $(this);
        
        var idclient = editclick[0].dataset.idprod;
        console.log(idclient);
    });
})
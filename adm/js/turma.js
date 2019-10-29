$(() => {


    $(document).on('click', '.nova-turma', function (event) {
        event.preventDefault();
        $('#modal-turma').iziModal('open');
    });

    //EDITAR TURMA

    $(document).on('click', ".editar-turma", function (event) {
        let iconeClicado = event.currentTarget
        let idTurma = $(iconeClicado).data("id")
        let turmaObjeto = {
            turma: $(iconeClicado).closest('#turma-' + idTurma).children('td')[0].innerHTML,
            ano: $(iconeClicado).closest('#turma-' + idTurma).children('td')[1].innerHTML,
            responsavel: $(iconeClicado).closest('#turma-' + idTurma).children('td')[5].innerHTML
        }
        $("#editar-turma").iziModal('open')
        $("#editar-turma").find('input#eresponsavel').val(turmaObjeto.responsavel)
        $("#editar-turma").find('input#eturma').val(turmaObjeto.turma)
        $("#editar-turma").find('input#eano').val(turmaObjeto.ano)

    });

    //DELETAR TURMA

    $(document).on("click", ".desabilitar-turma", function (event) {

        let iconeClicado = event.currentTarget;
        let idTurma = $(iconeClicado).data("id");

        $.confirm({
            title: 'Desabitar',
            content: 'Deseja realmente desabilitar este item?',
            icon: "fa fa-trash",
            buttons: {
                confirm: {
                    text: 'Sim',
                    btnClass: 'btn-dark',
                    action: function () {
                        $.ajax({
                            type: "DELETE",
                            success: function () {
                                $.alert({
                                    title: "Turma Desabilitada",
                                    content: null,
                                    icon: "fa fa-trash black-text",
                                    theme: "modern"
                                });
                            }
                        });
                    }
                },
                cancel: {
                    text: 'Não',
                }
            }
        });

    });

});


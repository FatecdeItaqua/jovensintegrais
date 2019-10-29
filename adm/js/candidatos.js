$(() => {

    //ACEITAR CANDIDATO

    $(document).on("click", ".aceitar-candidato", function (event) {

        let iconeClicado = event.currentTarget;
        let idCandidato = $(iconeClicado).data("id");

        $.confirm({
            title: 'Aceitar',
            content: 'Adicionar Vale Transporte?<br>' +
                '<form action="POST" id="VT" style="margin-left:30px;">' +
                '<input class="form-check-input" type="radio" name="VT" id="VT" value="S">Sim<br>' +
                '<input class="form-check-input" type="radio" name="VT" id="VT" value="N">Não' +
                '</form>',
            icon: "fa fa-check",
            buttons: {
                confirm: {
                    text: 'Sim',
                    btnClass: 'btn-dark',
                    action: function () {
                        $.ajax({
                            type: "DELETE",
                            success: function () {
                                $.alert({
                                    title: "Candidato Adicionado",
                                    content: null,
                                    icon: "fa fa-check black-text",
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
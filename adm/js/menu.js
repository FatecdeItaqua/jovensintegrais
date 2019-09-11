$(() => {
    function prepararMenu() {
        let itemsMenu = $("div.site-wrap li.option")
        itemsMenu.on('click', (e) => {
            let itemClicado = e.currentTarget
            itemsMenu.removeClass("active")
            $(itemClicado).addClass("active")
        })
    }
    prepararMenu()

    $("#modal").iziModal({
        title: 'Adicionar Usuário',
        subtitle: 'Formulário para adicionar um novo usuário ao sistema',
        headerColor: '#61ba6d'
    });

    $(document).on('click', '.trigger', function (event) {
        event.preventDefault();
        $('#modal').iziModal('open');
    });

})
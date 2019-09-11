$(()=>{
    function prepararMenu(){
        let itemsMenu = $("div.site-wrap li.option")
        itemsMenu.on('click', (e)=>{
            let itemClicado = e.currentTarget
            itemsMenu.removeClass("active")
            $(itemClicado).addClass("active")
        })
    }
    prepararMenu()

    $("#modal").iziModal();

    $(document).on('click', '.trigger', function (event) {
        event.preventDefault();
        // $('#modal').iziModal('setZindex', 99999);
        // $('#modal').iziModal('open', { zindex: 99999 });
        $('#modal').iziModal('open');
    });
    
})
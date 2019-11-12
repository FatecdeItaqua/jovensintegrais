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


})
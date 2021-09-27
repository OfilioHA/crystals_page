$(function () {
    const init = () => {
        const btnMenu = $('#btn-menu');
        const menu = $('#nav-menu > ul');

        btnMenu.on('click', () => {
            menu.toggleClass('active-menu');
        });

        $(document).on("click", function (event) {
            if (!$(event.target).closest('#nav-menu').length) {
                menu.removeClass('active-menu');
            }
        });
    }
    init();
});
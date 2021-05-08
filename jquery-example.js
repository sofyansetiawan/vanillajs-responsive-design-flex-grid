$(document).ready(function () {
    const statusNotification = localStorage.getItem("cermatiHideNotif");
    const statusNewsletter = localStorage.getItem("cermatiHideNewsletter");

    if (statusNotification) {
        $("#notification-panel").remove();
        $("#logo-website").css({
            left: "2.5rem",
            top: "1.75rem"
        })
    }

    if (statusNewsletter) {
        $("#newsletter").remove();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > $('body').height() / 3) {
            $('#newsletter').slideDown();
        }
    });

    $("#close-notification").on("click", function () {
        $("#notification-panel").fadeOut(300, function () {
            $("#logo-website").animate({
                left: "2.5rem",
                top: "1.75rem"
            }, 300)
            $(this).remove();
            localStorage.setItem("cermatiHideNotif", true);
        });
    })

    $("#close-newsletter").on("click", function () {
        $('#newsletter').slideUp(function () {

            $(this).remove();
            localStorage.setItem("cermatiHideNewsletter", true);
        });

    })
})
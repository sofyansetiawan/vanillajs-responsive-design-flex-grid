window.onload = function() {
    const statusNotification = localStorage.getItem("cermatiHideNotif");
    const statusNewsletter = localStorage.getItem("cermatiHideNewsletter");

    const notificationPanel = document.getElementById("notification-panel");
    const newsletter = document.getElementById("newsletter");
    const logoWebsite = document.getElementById('logo-website');

    const btnCloseNotif = document.getElementById("close-notification")
    const btnCloseNewsletter = document.getElementById("close-newsletter")

    if (statusNotification) {
        logoWebsite.style.left = "2.5rem";
        logoWebsite.style.top = "1.75rem";
        notificationPanel.parentNode.removeChild(notificationPanel);
    }

    if (statusNewsletter) {
        newsletter.parentNode.removeChild(newsletter);
    }

    window.addEventListener('scroll', function () {
        let scrollBarPosition = window.pageYOffset | document.body.scrollTop;
        if (scrollBarPosition > (window.innerHeight / 3)) {
            newsletter.classList.remove("closed");
        }
    });

    btnCloseNotif.addEventListener("click", function () {
        notificationPanel.style.opacity = 1;
        notificationPanel.style.display = "none";
        logoWebsite.style.left = "2.5rem";
        logoWebsite.style.top = "1.75rem";
        localStorage.setItem("cermatiHideNotif", true);
    })

    btnCloseNewsletter.addEventListener("click", function () {
        newsletter.classList.add("closed")
        newsletter.parentNode.removeChild(newsletter);
        localStorage.setItem("cermatiHideNewsletter", true);
    })
};

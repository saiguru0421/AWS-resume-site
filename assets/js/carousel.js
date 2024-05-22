document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.project-nav li');
    const projectDetails = document.querySelectorAll('.project-detail');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to the clicked nav item
            item.classList.add('active');

            // Hide all project details
            projectDetails.forEach(detail => detail.classList.remove('active'));

            // Show the corresponding project detail
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

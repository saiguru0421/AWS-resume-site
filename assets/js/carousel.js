document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.project-nav li');
    const projectDetails = document.querySelectorAll('.project-detail');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
           
            navItems.forEach(nav => nav.classList.remove('active'));

           
            item.classList.add('active');

            
            projectDetails.forEach(detail => detail.classList.remove('active'));

            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

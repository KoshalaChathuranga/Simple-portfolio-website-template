// Wait for the DOM to load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle navigation link clicks
    var topnavLinks = document.querySelectorAll('.topnav a');
    
    topnavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            topnavLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Change the topnav background and link color on scroll
    var topnav = document.querySelector('.topnav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            topnav.classList.add('scrolled');
        } else {
            topnav.classList.remove('scrolled');
        }
    });

    // Handle the visibility of the #home section on scroll
    var homeSection = document.querySelector('#home');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Add the 'visible' class when the section is in view
                entry.target.classList.add('visible');
            } else {
                // Remove the 'visible' class when the section is out of view
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is in view

    // Observe the home section
    observer.observe(homeSection);

    // Handle the containers in the #news section
    var newsSection = document.querySelector('#news');
    var containers = document.querySelectorAll('.container');
    var animationDelay = 300; // Delay between each container's animation

    function checkScroll() {
        var sectionTop = newsSection.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
            containers.forEach(function(container, index) {
                setTimeout(function() {
                    container.classList.add('animate');
                }, index * animationDelay);
            });
        }
    }

    window.addEventListener('scroll', checkScroll);
    // Check on initial load
    checkScroll();
});

// Navbar stuff
document.addEventListener('DOMContentLoaded', function() {
    // Remember the original source URLs of images in #first ul
    const originalFirstImages = [];
    const firstImages = document.querySelectorAll('#first img');
    firstImages.forEach(img => {
        originalFirstImages.push(img.src);
    });

    // Add click event listeners to navbar links
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');

            // Hide all grid containers
            const gridContainers = document.querySelectorAll('.grid-container');
            gridContainers.forEach(container => {
                container.style.display = 'none';
            });

            // Show the target grid container
            const targetContainerId = this.getAttribute('href').substring(1);
            const targetContainer = document.getElementById(targetContainerId);
            if (targetContainer) {
                targetContainer.style.display = 'grid';
            }

            // Image swapping functionality
            if (targetContainerId === 'second') {
                swapImages('#first', '#second');
            } else if (targetContainerId === 'first') {
                // Revert to original images in #first
                const firstImages = document.querySelectorAll('#first img');
                firstImages.forEach((img, index) => {
                    img.src = originalFirstImages[index];
                });

                // Hide images from #second
                const secondImages = document.querySelectorAll('#second img');
                secondImages.forEach(img => {
                    img.style.display = 'none';
                });
            }
        });
    });

    // Function to swap images between two containers
    function swapImages(from, to) {
        const fromImages = document.querySelectorAll(from + ' img');
        const toImages = document.querySelectorAll(to + ' img');

        fromImages.forEach((img, index) => {
            img.src = toImages[index].src;
        });
    }
});



// Json data collection
window.addEventListener('scroll', function() {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    parallaxLayers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const yPos = -(window.scrollY * speed / 100);
        layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
    });
});
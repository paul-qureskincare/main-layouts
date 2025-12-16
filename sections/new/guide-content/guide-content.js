(function () {
    var collapses = document.querySelectorAll('.guide-content .accordion-collapse');
    var collapseBtns = document.querySelectorAll('.guide-content .accordion-button');

    // Reset all collapses on small screens (<768px)
    function resetCollapsesIfSmall() {
        if (window.innerWidth < 992) {
            collapses.forEach(function (collapse) {
                collapse.classList.remove('show');
            });
            collapseBtns.forEach(function (btn) {
                if (btn.getAttribute('aria-expanded') === 'true') {
                    btn.removeAttribute('aria-expanded');
                }
            });
        }
    }

    // Run on load and on resize
    resetCollapsesIfSmall();
    window.addEventListener('resize', resetCollapsesIfSmall);

    collapses.forEach(function (collapse) {
        collapse.addEventListener('show.bs.collapse', function (e) {
            // Ignore nested collapses and already opened ones
            if (e.target !== this || this.classList.contains('show')) return;

            const section = this.closest('.guide-content');
            if (!section) return;

            const offset = 150;
            const top = section.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
        });
    });
})();
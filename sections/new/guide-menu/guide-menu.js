(function () {
    const select = document.getElementById('guide-select');
    if (!select) return;
    document.body.classList.add('has-guide-select');

    select.addEventListener('change', function () {
        const value = (this.value || '').trim();
        if (!value) return;

        const target = document.getElementById(`${value}-tab`);
        if (!target) return;

        const scrollOffset = 150;
        const top = target.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
        window.scrollTo({ top, behavior: 'smooth' });

        setTimeout(() => {
            const btn = target.querySelector('.accordion-button');
            if (btn && btn.getAttribute('aria-expanded') !== 'true') {
                btn.click();
            }
        }, 200);
    });
})();
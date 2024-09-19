document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkmode-switch');
    const body = document.body;

    // Kontrollera systempreferenser
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function setDarkMode(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.checked = false;
        }
    }

    // Initiera baserat på lokal lagring eller systempreferens
    if (localStorage.getItem('darkMode') === 'enabled') {
        setDarkMode(true);
    } else if (localStorage.getItem('darkMode') === 'disabled') {
        setDarkMode(false);
    } else {
        setDarkMode(prefersDarkScheme.matches);
    }

    darkModeToggle.addEventListener('change', function() {
        setDarkMode(this.checked);
        localStorage.setItem('darkMode', this.checked ? 'enabled' : 'disabled');
    });

    // Lyssna på ändringar i systempreferenser
    prefersDarkScheme.addListener((e) => {
        if (localStorage.getItem('darkMode') === null) {
            setDarkMode(e.matches);
        }
    });

    // FAQ-funktionalitet
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        const icon = item.querySelector('i');

        question.addEventListener('click', () => {
            // Växla synligheten för svaret
            const isOpen = answer.style.display === 'block';
            answer.style.display = isOpen ? 'none' : 'block';

            // Rotera ikonen, ändra bakgrundsfärg och ikonens färg
            icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
            icon.style.backgroundColor = isOpen ? '' : '#6366F1';
            icon.style.color = isOpen ? '' : '#FFFFFF'; // Ändra ikonens färg när den är aktiv
            icon.style.borderRadius = isOpen ? '' : '50%';

            // Stäng andra öppna FAQ-objekt
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('p');
                    const otherIcon = otherItem.querySelector('i');
                    otherAnswer.style.display = 'none';
                    otherIcon.style.transform = 'rotate(0deg)';
                    otherIcon.style.backgroundColor = '';
                    otherIcon.style.color = ''; // Återställ ikonens färg
                    otherIcon.style.borderRadius = '';
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.rotate-on-hover');
    
    img.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.5s ease';
        this.style.transform = 'rotate(360deg)';
    });

    img.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.5s ease';
        this.style.transform = 'rotate(0deg)';
    });
});
document.addEventListener('DOMContentLoaded', () => {

    // под мобилку
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            //крестик/бургер
            const icon = menuToggle.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    //закрываем при клике на ссылку
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // плавный скролл
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                // учитываем высоту шапки
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    //сабмит форм
    const forms = [
        { id: 'quote-form-hero', msgId: 'formMessageHero' },
        { id: 'quote-form-footer', msgId: 'formMessageFooter' }
    ];

    forms.forEach(f => {
        const formElement = document.getElementById(f.id);
        const formMessage = document.getElementById(f.msgId);

        if (formElement) {
            formElement.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = formElement.querySelector('button[type="submit"]') || formElement.querySelector('.btn-submit');
                const originalText = btn.innerText;

                btn.innerText = 'Sending...';
                btn.style.opacity = '0.7';

                setTimeout(() => {
                    formMessage.innerHTML = "<span style='color: #10b981;'>Thank you! We have received your request and will contact you shortly to schedule an estimate.</span>";
                    formElement.reset();
                    btn.innerText = originalText;
                    btn.style.opacity = '1';

                    setTimeout(() => {
                        formMessage.innerHTML = "";
                    }, 8000);
                }, 1500);
            });
        }
    });

    //кнопка наверх
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    //смена темы
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        const savedTheme = localStorage.getItem('respace_theme');

        //грузим сохраненную тему
        if (savedTheme === 'light') {
            body.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {

            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('respace_theme', 'dark');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                localStorage.setItem('respace_theme', 'light');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
    }

    //анимации при скролле
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    //прячем шапку при скролле
    let lastScrollY = window.scrollY;
    const mainHeader = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        if (!mainHeader || mobileMenu.classList.contains('active')) return;

        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // скролл вниз
            mainHeader.classList.add('header-hidden');
        } else {
            //скролл вверх
            mainHeader.classList.remove('header-hidden');
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
});

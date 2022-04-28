// Nav Hamburger
const navHamburger = <HTMLElement>document.querySelector('section#nav-hamburger');
const navMenu = <HTMLElement>document.querySelector('section#nav-menu');
const nav = <HTMLElement>document.querySelector('nav');
navHamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
        navMenu.classList.add('flex');
    } else {
        navMenu.classList.remove('flex');
        navMenu.classList.add('hidden');
    }
    nav.classList.toggle('flex-col');
});

// Save Light-Dark Mode To Local Storage
const htmlElement = document.documentElement;
const switcher = <HTMLDivElement>document.querySelector('#switcher');
const mode = window.localStorage.getItem('mode');

if (!mode) {
    window.localStorage.setItem('mode', htmlElement.classList.contains('dark') ? 'dark' : 'light');
}

// Get Mode When Window Loads
window.onload = () => {
    if (mode === 'dark') {
        htmlElement.classList.add('dark');
        htmlElement.classList.remove('light');
        switcher.classList.add('translate-x-5');
        switcher.title = 'Switch to Light Mode';
        window.localStorage.setItem('mode', 'dark');
    } else {
        htmlElement.classList.add('light');
        htmlElement.classList.remove('dark');
        switcher.classList.remove('translate-x-5');
        switcher.title = 'Switch to Dark Mode';
        window.localStorage.setItem('mode', 'light');
    }
}

// Light-Dark Mode Toggle
switcher.addEventListener('click', () => {
    switcher.classList.toggle('translate-x-5');
    switcher.title = `Switch to ${(switcher.title === 'Switch to Dark Mode') ? 'Light' : 'Dark'} Mode`;
    // Switch Mode
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        window.localStorage.setItem('mode', 'light');
    } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        window.localStorage.setItem('mode', 'dark');
    }
});

// Scroll Top Button
const screenHeight = window.innerHeight;
const scrollToTopButton = <HTMLButtonElement>document.querySelector('button#scroll-to-top');

window.onscroll = () => {
    (() => {
        if (document.body.scrollTop > screenHeight / 3 || document.documentElement.scrollTop > screenHeight / 3) {
            scrollToTopButton?.classList.remove('hidden');
        } else {
            scrollToTopButton?.classList.add('hidden');
        }
    })();
};

scrollToTopButton?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

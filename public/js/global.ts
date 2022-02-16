// Light-Dark Mode Toggle
const switcher = <HTMLDivElement>document.querySelector('#switcher');
const htmlElement = document.documentElement;
switcher.addEventListener('click', (): void => {
    switcher.classList.toggle('translate-x-5');
    switcher.title = `Switch to ${(switcher.title === 'Switch to Dark Mode') ? 'Light' : 'Dark'} Mode`;
    htmlElement.classList.toggle('dark');
});

// Scroll Top Button
const screenHeight = window.innerHeight;
const scrollToTopButton = <HTMLButtonElement>document.querySelector('button#scroll-to-top');

window.onscroll = (): void => {
    ((): void => {
        if (document.body.scrollTop > screenHeight / 3 || document.documentElement.scrollTop > screenHeight / 3) {
            scrollToTopButton?.classList.remove('hidden');
        } else {
            scrollToTopButton?.classList.add('hidden');
        }
    })();
};

scrollToTopButton?.addEventListener('click', (): void => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

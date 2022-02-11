const screenHeight = window.innerHeight;
const scrollToTopButton = <HTMLButtonElement>document.querySelector('button#scroll-to-top');

window.onscroll = () => { scrollFunction() };


const scrollFunction = () => {
    if (document.body.scrollTop > screenHeight / 3 || document.documentElement.scrollTop > screenHeight / 3) {
        scrollToTopButton?.classList.remove('hidden');
    } else {
        scrollToTopButton?.classList.add('hidden');
    }
};

scrollToTopButton?.addEventListener('click', (): void => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

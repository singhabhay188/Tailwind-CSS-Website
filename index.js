let row1 = document.getElementById('row1');
let row2 = document.getElementById('row2');
let row3 = document.getElementById('row3');
let faqSection = document.querySelectorAll('.faq');

function toggleMenu(){
    let mobileNav = document.querySelector('#mobileNav');
    mobileNav.classList.toggle('hidden');
}

function addIntersectionObserver(element, LtR, speed) {
    function moveRow() {
        var translatex = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        
        if (LtR) {
            console.log(translatex);
            
            element.style.transform = `translateX(${translatex-500}px)`;
        } else {
            element.style.transform = `translateX(-${translatex}px)`;
        }
    }

    let intersectionCallback = (entries => {
        const isIntersecting = entries[0].isIntersecting;

        if (isIntersecting) {
            window.addEventListener('scroll', moveRow);
        } else {
            window.removeEventListener('scroll', moveRow);
        }
    });

    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    console.log('Intersection observer added',element);
}

addIntersectionObserver(row1, true, 0.2);
addIntersectionObserver(row2, false, 0.2);
addIntersectionObserver(row3, false, 0.5);


faqSection.forEach(faq => {
    faq.addEventListener('click', () => {
        let questioni = faq.querySelector('.question i');
        questioni.classList.toggle('rotate-180');
        let answer = faq.querySelector('.answer');
        answer.classList.toggle('h-0');
        answer.classList.toggle('p-2');
    });
});

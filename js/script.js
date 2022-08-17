// Owl Carousel - Special Offers
const owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 4,
    dots: false
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})



// Anchor 
const anchor = document.querySelectorAll(".nav__list a");
console.log(anchor);

anchor.forEach(anc => {
    anc.addEventListener("click", function(event){
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop,
            behavior: 'smooth'
        });
    });
}); 

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


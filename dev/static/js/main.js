// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var upperItem = document.getElementsByClassName('catalog__info');
var elNodes = document.querySelectorAll('.catalog__info');
var popupBody = document.querySelector('.catalog-popup');
var popupName = document.querySelector('.catalog-popup__name');
var popupDescription1 = document.querySelector('.description1');
var popupDescription2 = document.querySelector('.description2');
var popupPrice = document.querySelector('.catalog-popup__price');
var popupImage = document.querySelector('.catalog-popup__visual');
var popupCloser = document.querySelector('.catalog-popup__closer');

for (var i = 0; i < upperItem.length; i++) {
    var elem = upperItem[i];

    elem.addEventListener("click", function() {
        var elemName = this.querySelector('.catalog__name');
        var elemPrice = this.getAttribute('data-price');
        var elemDescriptionFirst = this.querySelector('.catalog__details-description1');
        var elemDescriptionSecond = this.querySelector('.catalog__details-description2');
        var image = this.querySelector('.catalog__visual');

        var imageType = image.getAttribute('data-type');
        var imageSrc = image.innerHTML;
        var elemNameIn = elemName.innerHTML;
        var elemPriceIn = elemPrice.innerHTML;
        var elemDescriptionFirstIn = elemDescriptionFirst.innerHTML;
        var elemDescriptionSecondIn = elemDescriptionSecond.innerHTML;

        popupBody.classList.add('active');
        popupName.innerHTML = elemNameIn;
        popupDescription1.innerHTML = elemDescriptionFirstIn;
        popupDescription2.innerHTML = elemDescriptionSecondIn;
        popupPrice.innerHTML = elemPrice;
        //popupImage.setAttribute('src', imageSrc);
        popupImage.innerHTML = imageSrc;
        popupImage.setAttribute('data-type', imageType);

        function horizontalSlider() {
            var sliderElement = $('.catalog-popup__visual ul li');
            var active = $('.catalog-popup__visual .active');
            var activeIndex = active.index();

            sliderElement.click(function() {
                var elem = $(this);
                var thisElement = elem.index();
                var newActive = $('.catalog-popup__visual .active');
                var newActiveIndex = newActive.index();

                if (thisElement == newActiveIndex) {
                    elem.addClass('active').children().addClass('active-sub');
                } else {
                    elem.addClass('active').children().addClass('active-sub');
                    console.log(thisElement < 3);
                    var first = $('.catalog-popup__visual>ul>li:first-child');
                    $(this).insertBefore(first);
                    newActive.removeClass('active').children().removeClass('active-sub');
                }
            });
        }

        horizontalSlider();
    });
}

if (popupCloser) {
    popupCloser.addEventListener('click', function() {
        popupBody.classList.remove('active');

        popupName.innerHTML = ' ';
        popupDescription1.innerHTML = ' ';
        popupDescription2.innerHTML = ' ';
        popupPrice.innerHTML = ' ';
        popupImage.removeAttribute('src');
    });
};

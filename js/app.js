'use strict';

// random

$(function() {
    $('.column > img').each(function(){
        $(this).attr("src","https://source.unsplash.com/random/" + Math.floor(600 + Math.random() * 100));
        $(this).attr("data-src","https://source.unsplash.com/random/" + Math.floor(600 + Math.random() * 100));
    });
});

// #random

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

var lazyImages = [].concat(
    _toConsumableArray(document.querySelectorAll('.lazy-image'))
);
var inAdvance = 300;

function lazyLoad() {
    lazyImages.forEach(function (image) {
        if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
            image.src = image.dataset.src;
            image.onload = function () {
                return image
                    .classList
                    .add('loaded');
            };
        }
    });

    // if all loaded removeEventListener
}

lazyLoad();

window.addEventListener('scroll', _.throttle(lazyLoad, 16));
window.addEventListener('resize', _.throttle(lazyLoad, 16));
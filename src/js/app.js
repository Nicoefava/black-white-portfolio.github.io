"use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var t=0,r=Array(a.length);t<a.length;t++)r[t]=a[t];return r}return Array.from(a)}$(function(){$(".column > img").each(function(){$(this).attr("src","https://source.unsplash.com/random/"+Math.floor(600+100*Math.random())),$(this).attr("data-src","https://source.unsplash.com/random/"+Math.floor(600+100*Math.random()))})});var lazyImages=[].concat(_toConsumableArray(document.querySelectorAll(".lazy-image"))),inAdvance=300;function lazyLoad(){lazyImages.forEach(function(a){a.offsetTop<window.innerHeight+window.pageYOffset+inAdvance&&(a.src=a.dataset.src,a.onload=function(){return a.classList.add("loaded")})})}lazyLoad(),window.addEventListener("scroll",_.throttle(lazyLoad,16)),window.addEventListener("resize",_.throttle(lazyLoad,16));
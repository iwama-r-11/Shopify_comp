! function() {
  var n = {
      337: function() {
        document.querySelectorAll("img[alt]").forEach(e => {
          var t = e.getAttribute("alt").replace(/<br>/g, " ");
          e.setAttribute("alt", t)
        });
        // const e = document.getElementById("target") || document.body,
        //   t = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, {
        //     acceptNode(e) {
        //       return e.parentElement.classList.contains("u-en") || "NOSCRIPT" === e.parentNode.nodeName ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        //     }
        //   });
        // for (; currentNode = t.nextNode();) {
        //   const e = document.createElement("template");
        //   e.innerHTML = currentNode.nodeValue.replace(/(\w+)/g, '<span class="u-en">$&</span>'), currentNode.parentElement.insertBefore(e.content, currentNode), currentNode.parentElement.removeChild(currentNode)
        // }
        const n = document.querySelectorAll(".fade-in"),
          o = document.querySelectorAll(".fade-in-top"),
          r = document.querySelectorAll(".fade-in-left"),
          a = document.querySelectorAll(".fade-in-right"),
          i = (document.querySelectorAll(".fade-in-bottom"), window.innerHeight);

        function l(e, t) {
          e.getBoundingClientRect().top - i <= 0 ? e.classList.add(t) : e.style.opacity = 1
        }

        function d() {
          for (let e = 0; e < n.length; e++) l(n[e], "fade-in-show")
        }

        function s() {
          for (let e = 0; e < o.length; e++) l(o[e], "fade-in-top-show")
        }

        function c(t, n) {
          for (let e = 0; e < t.length; e++) l(t[e], n)
        }
        d(), s(), c(r, "fade-in-left-show"), c(a, "fade-in-right-show"), s(), window.addEventListener("scroll", function() {
          d(), s(), c(r, "fade-in-left-show"), c(a, "fade-in-right-show"), s()
        })
      },
      549: function() {
        document.addEventListener("DOMContentLoaded", function() {
          const o = document.querySelectorAll(".splideContainer"),
            r = [];
          let n = 0,
            a = 0;
          for (let n = 0; n < o.length; n++) r[n] = new Splide(o[n], {
            type: "fade",
            rewind: !0,
            speed: 400,
            padding: "3em",
            classes: {
              arrows: "splide__arrows modal__arrows",
              arrow: "splide__arrow modal__arrow",
              prev: "splide__arrow--prev modal--prev",
              next: "splide__arrow--next modal--next",
              pagination: "splide__pagination modal__pagination",
              page: "splide__pagination__page modal__page"
            }
          }).mount(), r[n].on("resized active", function() {
            var e = o[n].querySelector(".splide__track"),
              t = o[n].querySelector(".splide__slide.is-active");
            e.style.height = t.offsetHeight + "px"
          });
          var t = document.querySelectorAll(".js-modal-buton");
          for (let e = 0; e < t.length; e++) t[e].addEventListener("click", e => {
            n = e.currentTarget.dataset.slider, a = e.currentTarget.dataset.index
          });
          MicroModal.init({
            openTrigger: "data-micromodal-trigger",
            disableScroll: !0,
            awaitOpenAnimation: !0,
            awaitCloseAnimation: !0,
            onShow: e => {
              r[n].options = {
                speed: 0
              };
              var t = document.querySelectorAll(".modal__container");
              for (let e = 0; e < t.length; e++) t[e].scrollTo(0, 0);
              r[n].go(Number(a)), r[n].options = {
                speed: 400
              }
            }
          });
          for (var e = document.getElementsByClassName("splide-lineupContainer"), i = {
              mediaQuery: "min",
              drag: "free",
              gap: 16,
              perPage: 2.1,
              perMove: 1,
              snap: !0,
              autoHeight: !0,
              arrows: !1,
              focus: "center",
              updateOnMove: !0,
              padding: "4%",
              breakpoints: {
                768: {
                  destroy: !0
                }
              },
              classes: {
                arrows: "splide__arrows modal__arrows",
                arrow: "splide__arrow modal__arrow",
                prev: "splide__arrow--prev modal--prev",
                next: "splide__arrow--next modal--next",
                pagination: "splide__pagination modal__pagination",
                page: "splide__pagination__page modal__page"
              }
            }, l = 0; l < e.length; l++) new Splide(e[l], i).mount();
          for (var d = document.getElementsByClassName("splide-ingredientsContainer"), s = {
              mediaQuery: "min",
              type: "loop",
              arrows: !1,
              pagination: !1,
              gap: 16,
              perPage: 2,
              drag: "false",
              focus: "center",
              breakpoints: {
                768: {
                  perPage: 6
                }
              },
              autoScroll: {
                speed: .5,
                pauseOnHover: !1
              }
            }, l = 0; l < d.length; l++) new Splide(d[l], s).mount(window.splide.Extensions)
        })
      },
      24: function() {
        document.addEventListener("DOMContentLoaded", function() {
          var t = new Swiper(".swiper-recContainer", {
            loop: !0,
            spaceBetween: 24,
            allowTouchMove: !1
          });

          function n(n) {
            document.querySelectorAll(".carousel-button").forEach(function(e, t) {
              t === n ? e.classList.add("active") : e.classList.remove("active")
            })
          }
          t.on("slideChangeTransitionEnd", function() {
            n(t.realIndex)
          }), window.changeSlide = function(e) {
            t.slideToLoop(e), n(e)
          }
        })
      }
    },
    o = {};

  function r(e) {
    var t = o[e];
    return void 0 !== t || (t = o[e] = {
      exports: {}
    }, n[e](t, t.exports, r)), t.exports
  }
  r.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return r.d(t, {
        a: t
      }), t
    }, r.d = function(e, t) {
      for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
      })
    }, r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    },
    function() {
      "use strict";
      r(337), r(24), r(549)
    }()
}();
let thumbSwipe = null,
  mainSwiper = null;
const mediaQuery = window.matchMedia("(max-width: 767px)"),
  checkBreakpoint = (e) => {
    e.matches
      ? initSwiper()
      : thumbSwipe &&
        mainSwiper &&
        (thumbSwipe.destroy(!1, !0),
        mainSwiper.destroy(!1, !0),
        (thumbSwiper = void 0),
        (mainSwiper = void 0));
  },
  initSwiper = () => {
    (thumbSwipe = new Swiper(".thumb-swiper", {
      slidesPerView: 3,
      spaceBetween: 8,
      grabCursor: !0,
    })),
      (mainSwiper = new Swiper(".product-swiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        grabCursor: !0,
        thumbs: { swiper: thumbSwipe },
      }));
  };
mediaQuery.addListener(checkBreakpoint), checkBreakpoint(mediaQuery);

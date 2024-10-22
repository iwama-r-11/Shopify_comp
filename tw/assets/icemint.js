//スライダー
new Splide( '.splide--icemint', {
  type: "loop",
  arrows: false,
  pagination: false,
  fixedWidth: "100px",
  gap: "20px",
  mediaQuery: 'min',
  autoScroll: {
    speed: 0.6,
  },
  breakpoints: { 
    767: {
      destroy: true,
    }
  },

}).mount( window.splide.Extensions );



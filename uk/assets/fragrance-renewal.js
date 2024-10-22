window.addEventListener('load', () => {
  productsListInit();
  toggleAccordion();
  scrollAnimeObserver();
  visibleAnimElemOnLoad();
  accordionAnimation();
  productsListAnimation();
  visiblePulldown();
  togglePulldown();
  visibleDiag();
  initLozad();
});

var productsListInit = function() {
  const splideElements = document.querySelectorAll('.products-splide');

  splideElements.forEach( (element) => {
    var slides = element.querySelectorAll('.splide__slide');

    if(slides.length > 5) {
      new Splide(element, {
        type: 'loop',
        rewind: false,
        autoplay: false,
        arrows: true,
        // arrowPath: "../images/icons/slider_arrow_right.svg",
        pagination: false,
        drag: true,
        perPage: 6,
        perMove: 1,
        gap: '20px',
        breakpoints: {
          768: {
            destroy: true,
          },
        }
      }).mount();
    } else {
      // 動かないスライダー
      new Splide(element, {
        type: 'slide',
        rewind: false,
        autoplay: false,
        arrows: true,
        // arrowPath: "../images/icons/slider_arrow_right.svg",
        pagination: false,
        drag: false,
        perPage: 6,
        perMove: 1,
        gap: '20px',
        breakpoints: {
          768: {
            destroy: true,
          },
        }
      }).mount();
    }
  });
};



var toggleAccordion = function () {
  const menu = document.querySelectorAll(".types-watch");

  function toggle() {
    const content = this.nextElementSibling;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
  }

  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
  }
};

var findFragranceBgInit = function (){
  new Splide( '.splide.find-slide', {
    type: 'fade',
    rewind: true,
    autoplay: true,
    arrows: false,
    interval: 4000,
    speed: 2000,
    pagination: false,
    drag:false,
    pauseOnHover:false,
  }).mount();
}

var scrollAnimeObserver = function(){
  let aniBoxes = [].slice.call(document.querySelectorAll('.anime_trigger'));
  const options = {
    root: null,
    rootMargin: '-15% 0px',
  }
  let aniBoxObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const cont = entry.target;
        let anim = cont.dataset.anim;
        if(!anim){
          anim = "is_anim"
        }
        if (cont.classList.contains(anim) === false) {
          cont.classList.add(anim);
        }
        aniBoxObserver.unobserve(cont);
      }
    });
  },options);
  aniBoxes.forEach(function (aniBox) {
    aniBoxObserver.observe(aniBox);
  });
}

/**
* ページロード時に現在位置より上にある要素のアニメーションを完了させる
*/
var visibleAnimElemOnLoad = function() {
  let aniBoxes = [].slice.call(document.querySelectorAll('.anime_trigger'));
  aniBoxes.forEach(function (el) {
    const pos = el.getBoundingClientRect().top;
    let anim = el.dataset.anim;
    if(!anim){
      anim = "is_anim"
    }
    if(pos < 0){
      el.classList.add(anim);
    }
  });
}

var accordionAnimation = function() {
  const content = document.querySelectorAll('.types-contents');

  content.forEach( (element) => {
    const height = element.scrollHeight;
    element.style.setProperty('--max-height', height + 'px');
  });
}

var productsListAnimation = function() {
  let productsLists = [].slice.call(document.querySelectorAll('.products-splide'));

  const options = {
    root: null,
    rootMargin: '-15% 0px',
  }

  let productListObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {

        const cont = entry.target;
        const slides = cont.querySelectorAll('.splide__slide:not(.splide__slide--clone)');

        slides.forEach(function (slide, index) {
          var anim = slide.dataset.anim;

          if(!anim){
            anim = "is_anim"
          }
          
          if (slide.classList.contains(anim) === false) {
            slide.classList.add(anim);
            slide.style.setProperty('--slide-delay', index * 0.1 + 's');
          }
        });

        productListObserver.unobserve(cont);
      }
    });
  },options);

  productsLists.forEach(function (productList) {
    productListObserver.observe(productList);
  });
}

var togglePulldown = function () {
  const dropdown = document.querySelectorAll(".dropdown-button");

  function toggle() {
    const content = this.nextElementSibling;
    // this.classList.toggle("is-active");
    content.classList.toggle("is-open");
  }

  for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", toggle);
  }
  const fragrance = document.querySelector(".anchor-dropdowns > .dropdown-fragrance > .dropdown-button");
  const products = document.querySelector(".anchor-dropdowns > .dropdown-products > .dropdown-button");
  const fragranceSP = document.querySelector(".sticky-pulldown > .dropdown-fragrance > .dropdown-button");
  const productsSP = document.querySelector(".sticky-pulldown > .dropdown-products > .dropdown-button");

  function closeFragrance() {
    fragrance.nextElementSibling.classList.remove("is-open");
    fragranceSP.nextElementSibling.classList.remove("is-open");
    productsSP.nextElementSibling.classList.remove("is-open");
  }
  function closeFragranceSP() {
    fragranceSP.nextElementSibling.classList.remove("is-open");
    products.nextElementSibling.classList.remove("is-open");
    fragrance.nextElementSibling.classList.remove("is-open");
  }

  function closeProducts() {
    products.nextElementSibling.classList.remove("is-open");
    fragranceSP.nextElementSibling.classList.remove("is-open");
    productsSP.nextElementSibling.classList.remove("is-open");
  }
  function closeProductsSP() {
    productsSP.nextElementSibling.classList.remove("is-open");
    products.nextElementSibling.classList.remove("is-open");
    fragrance.nextElementSibling.classList.remove("is-open");
  }

  products.addEventListener("click", closeFragrance);
  productsSP.addEventListener("click", closeFragranceSP);
  fragrance.addEventListener("click", closeProducts);
  fragranceSP.addEventListener("click", closeProductsSP);
}

var visiblePulldown = function() {
  const pulldown = document.querySelector(".sticky-pulldown");
  const wrap = document.querySelector(".sp-visible-pulldowns");

  window.addEventListener("scroll", () => {
    let wrapPos = wrap.getBoundingClientRect().top;
    if (wrapPos >= 0) {
      pulldown.classList.add("is-hide");
    } else {
      pulldown.classList.remove("is-hide");
    }
  });

  let wrapPos = wrap.getBoundingClientRect().top;
  if (wrapPos >= 0) {
    pulldown.classList.add("is-hide");
  } else {
    pulldown.classList.remove("is-hide");
  }
}



var initLozad = function() {
  const observer = lozad('.lozad', {
    rootMargin: '300px 300px',
    threshold: 0.1
  });
  
  observer.observe();
}

const itemOpenBtn = document.querySelectorAll('.button-more-products');
for (let i = 0; i< itemOpenBtn.length; i++) {
  itemOpenBtn[i].addEventListener('click', function() {
    const link_text = itemOpenBtn[i].innerText;
    gtag('event', 'click', {
      'observation_type': 'item_list_view',
      'link_label' : link_text
    });
  });
}
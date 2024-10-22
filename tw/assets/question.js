
    $(function() {
  var scrollPos;//topからのスクロール位置
  $('.modal-btn').click(function() { //ボタンをクリックしたら
    scrollPos = $(window).scrollTop();//topからのスクロール位置を取得
    $('.modal').fadeIn();//モーダル背景をフェードイン
    $('.modal-main-container').addClass('slide');//モーダル本体をスライドイン
    $('body').addClass('fixed').css({ top: -scrollPos });//背景固定
   // return false;//<a>を無効化
  });
  $('.modal-close').click(function() { //閉じるまたは背景をクリックしたら
    $('.modal').fadeOut();//モーダル背景をフェードアウト
    $('.modal-main-container').removeClass('slide');//モーダル本体をスライドアウト
    $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
    $(window).scrollTop(scrollPos);//元の位置までスクロール
    //return false;//<a>を無効化
  });
  $(window).keyup(function(e){//キーボードのキーを押して
    if(e.key === "Escape"){//ESCキーだったら
      $('.modal').fadeOut();//モーダル背景をフェードアウト     
      $('.modal-main-container').removeClass('slide');//モーダル本体をスライドアウト
      $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
      $(window).scrollTop(scrollPos);//元の位置までスクロール
    }
  });
});

    window.addEventListener('load', () => {
    question();
    question_modal_toggle();
});
var question = function() {
    const btns = document.querySelectorAll(".question-modal .btn");
    const wrap = document.querySelector(".question_box");
    btns.forEach(btn => {
      btn.addEventListener( 'click', function(e){
        e.preventDefault();
        let href = btn.getAttribute("href");
        let next = document.querySelector(href)
        let check = document.querySelectorAll(".check:not(" +  href + ")")
        check.forEach(item => {
          item.classList.add("is-hidden")
        });
        next.classList.remove("is-hidden")
        if(next.classList.contains("question1")){
          document.querySelector(".dot.step02").classList.remove("is-active");
          document.querySelector(".dot.step03").classList.remove("is-active");
          document.querySelector(".dot.step01").classList.add("is-active");
          wrap.classList.add("is-question")
          wrap.classList.remove("is-answer")
        }else if(next.classList.contains("question2")){
          document.querySelector(".dot.step01").classList.remove("is-active");
          document.querySelector(".dot.step03").classList.remove("is-active");
          document.querySelector(".dot.step02").classList.add("is-active");
          wrap.classList.add("is-question")
          wrap.classList.remove("is-answer")
        } else {
          document.querySelector(".dot.step01").classList.remove("is-active");
          document.querySelector(".dot.step02").classList.remove("is-active");
          document.querySelector(".dot.step03").classList.add("is-active");
          wrap.classList.add("is-answer")
          wrap.classList.remove("is-question")
        }
      });
    });
  };
var question_modal_toggle = function() {
    const modal = document.querySelector(".question-modal");
    const modalBg = document.querySelector(".question-modal-bg");
    const openBtn01 = document.querySelector(".question-btn");
    const openBtn02 = document.querySelector(".test-btn");
    // const openBtn02 = document.querySelector(".btn.find-fragrance-btn");
    const closeBtn = modal.querySelector(".close-btn");
    const question01 = document.querySelector("#q_01");
    const check = document.querySelectorAll(".check:not(#q_01)")
    const wrap = document.querySelector(".question_box");
    var fixed = function(){
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
      if(modal.classList.contains("is-open") === true){
        let scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        const body = document.body;
        document.body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
      } else {
        const body = document.body;
        let scrollY = body.style.top;
        body.style.top = '';
        body.style.position = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }


    openBtn01.addEventListener( 'click', function(){
      modal.classList.add("is-open")
      modalBg.classList.add("is-open")
      fixed()
    });


    openBtn02.addEventListener( 'click', function(){
      modal.classList.add("is-open")
      modalBg.classList.add("is-open")
      fixed()
    });


    // openBtn02.addEventListener( 'click', function(){
    //   modal.classList.add("is-open")
    //   modalBg.classList.add("is-open")
    //   fixed()
    // });
    modalBg.addEventListener( 'click', function(){
      modal.classList.remove("is-open")
      modalBg.classList.remove("is-open")
      setTimeout(function () {
        fixed()
        check.forEach(item => {
          item.classList.add("is-hidden")
        });
        question01.classList.remove("is-hidden")
        document.querySelector(".dot.step02").classList.remove("is-active");
        document.querySelector(".dot.step03").classList.remove("is-active");
        document.querySelector(".dot.step01").classList.add("is-active");
        wrap.classList.add("is-question")
        wrap.classList.remove("is-answer")
      }, 200);
    });
    closeBtn.addEventListener( 'click', function(){
      modal.classList.remove("is-open")
      modalBg.classList.remove("is-open")
      setTimeout(function () {
        fixed()
        check.forEach(item => {
          item.classList.add("is-hidden")
        });
        question01.classList.remove("is-hidden")
        document.querySelector(".dot.step02").classList.remove("is-active");
        document.querySelector(".dot.step03").classList.remove("is-active");
        document.querySelector(".dot.step01").classList.add("is-active");
        wrap.classList.add("is-question")
        wrap.classList.remove("is-answer")
      }, 200);
    });
};
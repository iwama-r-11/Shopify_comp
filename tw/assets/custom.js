/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */
 $(function(){
  // $(".ingredients_btn").on("click", function() {
  //   $(".skinconcern-toggle").slideUp();
  //   $(".skinconcern-btn").removeClass('open');
  //   $(".fragrance-toggle").slideUp();
  //   $(".fragrance-btn").removeClass('open');
  //   $(".ingredients-toggle").slideToggle();
  //   $(this).toggleClass('open');
  // });
  // $(".skinconcern_btn").on("click", function() {
  //   $(".ingredients-toggle").slideUp();
  //   $(".ingredients-btn").removeClass('open');
  //   $(".fragrance-toggle").slideUp();
  //   $(".fragrance-btn").removeClass('open');
  //   $(".skinconcern-toggle").slideToggle();
  //   $(this).toggleClass('open');
  // });
  // $(".fragrance_btn").on("click", function() {
  //   $(".skinconcern-toggle").slideUp();
  //   $(".skinconcern-btn").removeClass('open');
  //   $(".ingredients-toggle").slideUp();
  //   $(".ingredients-btn").removeClass('open');
  //   $(".fragrance-toggle").slideToggle();
  //   $(this).toggleClass('open');
  // });
  $(".toggle_1_btn").on("click", function() {
    $(".toggle_2").slideUp();
    $(".toggle_2_btn").removeClass('open');
    $(".toggle_3").slideUp();
    $(".toggle_3_btn").removeClass('open');
    $(".toggle_1").slideToggle();
    $(this).toggleClass('open');
  });
  $(".toggle_2_btn").on("click", function() {
    $(".toggle_1").slideUp();
    $(".toggle_1_btn").removeClass('open');
    $(".toggle_3").slideUp();
    $(".toggle_3_btn").removeClass('open');
    $(".toggle_2").slideToggle();
    $(this).toggleClass('open');
  });
  $(".toggle_3_btn").on("click", function() {
    $(".toggle_1").slideUp();
    $(".toggle_1_btn").removeClass('open');
    $(".toggle_2").slideUp();
    $(".toggle_2_btn").removeClass('open');
    $(".toggle_3").slideToggle();
    $(this).toggleClass('open');
  });
});
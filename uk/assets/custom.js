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
  $(".ingredients_btn").on("click", function() {
    $(".skinconcern-toggle").slideUp();
    $(".skinconcern_btn").removeClass('open');
    $(".fragrance-toggle").slideUp();
    $(".fragrance_btn").removeClass('open');
    $(".type-toggle").slideUp();
    $(".type_btn").removeClass('open');
    $(".ingredients-toggle").slideToggle();
    $(this).toggleClass('open');
  });
  $(".skinconcern_btn").on("click", function() {
    $(".ingredients-toggle").slideUp();
    $(".ingredients_btn").removeClass('open');
    $(".fragrance-toggle").slideUp();
    $(".fragrance_btn").removeClass('open');
    $(".type-toggle").slideUp();
    $(".type_btn").removeClass('open');
    $(".skinconcern-toggle").slideToggle();
    $(this).toggleClass('open');
  });
  $(".fragrance_btn").on("click", function() {
    $(".skinconcern-toggle").slideUp();
    $(".skinconcern_btn").removeClass('open');
    $(".ingredients-toggle").slideUp();
    $(".ingredients_btn").removeClass('open');
    $(".type-toggle").slideUp();
    $(".type_btn").removeClass('open');
    $(".fragrance-toggle").slideToggle();
    $(this).toggleClass('open');
  });
  $(".type_btn").on("click", function() {
    $(".skinconcern-toggle").slideUp();
    $(".skinconcern_btn").removeClass('open');
    $(".ingredients-toggle").slideUp();
    $(".ingredients_btn").removeClass('open');
    $(".fragrance-toggle").slideUp();
    $(".fragrance_btn").removeClass('open');
    $(".type-toggle").slideToggle();
    $(this).toggleClass('open');
  });
});
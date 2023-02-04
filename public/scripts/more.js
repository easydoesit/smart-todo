$(document).ready(function() {
  const liHeight = $('li').height();
  //this is the mobileStart conditions
  const mobileStart = function() {
    startHeight = liHeight * 2;

    $("ul").height(startHeight);
  };
  //this listener expands the category box and hides all other categories
  const mobileListenerExpand = function() {
    $(".category-footer").on('click', function() {
      const $idParent = $(this).parent().attr('id');
      const liLength = $(`#${$idParent} > ul > li`).length;
      const fullHeight = liHeight * liLength;

      $(`#${$idParent} ul`).height(fullHeight);
      $(`#${$idParent}`).siblings('.container').addClass('hidden');
      $(this).addClass('hidden');
      $(this).siblings('.category-footer-open').removeClass('hidden');

    });
  };
  //this listener shrinks the category box and reveals all other categories
  const mobileListenerShrink = function() {
    $(".category-footer-open").on('click', function() {
      const $idParent = $(this).parent().attr('id');

      $(`#${$idParent} ul`).height(startHeight);
      $(`#${$idParent}`).siblings('.container').removeClass('hidden');
      $(this).addClass('hidden');
      $(this).siblings('.category-footer').removeClass('hidden');

    });
  };
  console.log($(window).width());
  // mobile version controls
  if ($(window).width() <= 480) {

    mobileStart();
    mobileListenerExpand();
    mobileListenerShrink();
  } else {
    $('.category-footer').remove();
    $('.category-footer-open').remove();
  }

});

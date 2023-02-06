// Client facing scripts here
$(document).ready(function() {
  const startConditions = {};
  startConditions.liMargin =  parseInt($('li').css('marginTop')) + parseInt($('li').css('marginBottom'));
  startConditions.liHeight = $('li').outerHeight();
  startConditions.startHeight = (startConditions.liHeight * 2) + startConditions.liMargin + (startConditions.liMargin / 2);

  //this is the mobileStart conditions
  const mobileStart = function() {
    $("ul").height(startConditions.startHeight);
  };
  //this listener expands the category box and shrinks all other categories
  const mobileListenerExpand = function() {
    $(".category-footer").on('click', function() {
      const $idParent = $(this).parent().attr('id');
      const liLength = $(`#${$idParent} > ul > li`).length;
      const fullHeight = (startConditions.startHeight / 2) * liLength;
      $(`#${$idParent} ul`).height(fullHeight);
      $(`#${$idParent}`).siblings('.category-box').children('ul').height(startConditions.liMargin / 2);
      $(this).addClass('hidden');
      $(this).siblings('.category-footer-open').removeClass('hidden');

    });
  };

  //this listener shrinks the category box and reveals all other categories
  const mobileListenerShrink = function() {
    $(".category-footer-open").on('click', function() {
      const $idParent = $(this).parent().attr('id');
      $(`#${$idParent} ul`).height(startConditions.startHeight);
      $(`#${$idParent}`).siblings('.category-box').children('ul').height(startConditions.startHeight);
      $(this).addClass('hidden');
      $(this).siblings('.category-footer').removeClass('hidden');

    });
  };


  if ($(window).width() <= 1024) {
    mobileStart();
    mobileListenerExpand();
    mobileListenerShrink();
  } else {
    $('.category-footer').remove();
    $('.category-footer-open').remove();
  }

});

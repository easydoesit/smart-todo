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
  //this listener expands the category box and hides all other categories
  const mobileListenerExpand = function() {
    $(".category-footer").on('click', function() {
      const $idParent = $(this).parent().attr('id');
      console.log($idParent);
      const liLength = $(`#${$idParent} > ul > li`).length;
      console.log(liLength);
      const fullHeight = (startConditions.startHeight / 2) * liLength;
      $(`#${$idParent} ul`).height(fullHeight);
      $(`#${$idParent}`).siblings('.category-box').addClass('hidden');
      $(this).addClass('hidden');
      $(this).siblings('.category-footer-open').removeClass('hidden');

    });
  };
  //this listener shrinks the category box and reveals all other categories
  const mobileListenerShrink = function() {
    $(".category-footer-open").on('click', function() {
      const $idParent = $(this).parent().attr('id');
      console.log($idParent);
      console.log(startConditions.startHeight);
      $(`#${$idParent} ul`).height(startConditions.startHeight);
      $(`#${$idParent}`).siblings('.category-box').removeClass('hidden');
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

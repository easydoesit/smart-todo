$(document).ready(function() {
  const liHeight = $('li').height();
  startHeight = liHeight * 2;

  console.log(liHeight);

  $("ul").height(startHeight);

  //this listener expands the category box and hides all other categories
  $(".category-footer").on('click', function() {
    const $idParent = $(this).parent().attr('id');
    const liLength = $(`#${$idParent} > ul > li`).length;
    const fullHeight = liHeight * liLength;

    $(`#${$idParent} ul`).height(fullHeight);
    $(`#${$idParent}`).siblings('.container').addClass('hidden');
    $(this).addClass('hidden');
    $(this).siblings('.category-footer-open').removeClass('hidden');

  });
  //this listener shrinks the category box and reveals all other categories
  $(".category-footer-open").on('click', function() {
    const $idParent = $(this).parent().attr('id');

    $(`#${$idParent} ul`).height(startHeight);
    $(`#${$idParent}`).siblings('.container').removeClass('hidden');
    $(this).addClass('hidden');
    $(this).siblings('.category-footer').removeClass('hidden');

  });



});


//this is the mobileStart conditions
const mobileStart = function() {
  const startConditions = {};
  startConditions.liHeight = $('li').height();
  startConditions.startHeight = liHeight * 2;
  return startConditions;
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

module.exports = { mobileStart, mobileListenerShrink, mobileListenerExpand };

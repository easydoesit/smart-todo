// Client facing scripts here
$(document).ready(function() {
  const startConditions = {};
  startConditions.liMargin = parseInt($('li').css('marginTop')) + parseInt($('li').css('marginBottom'));
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

  //this listener sorts the items in the categories list with drag and drop and updates the database with the new order. It also updates the category ID of the item if it is moved to a different category

  $(".sortable").sortable({
    connectWith: ".sortable",
    handle: ".grip",
    update: function (event, ui) {
      const $list = $(this);
      const form = ui.item.find('form');
      const itemID = form.data('id');
      let categoryID = '';
      const categories = {
        restaurants: 2,
        movies: 1,
        books: 3,
        products: 4
      };
      for (const [key, value] of Object.entries(categories)) {
        if (key === $list.closest('.category-box').attr('id')) {
          categoryID = value;
        }
      }
      const priorities = $list.find('li ').map(function (index, element) {
        const itemID = $(element).find('form').data('id');
        return { itemID, categoryID, priority: index + 1 };
      })
        .get();
      //make an AJAX post request to the server with the updated items' IDs, category IDs and priorities
      $.post('/update-item-details', { priorities });
    }
  });

  if ($(window).width() < 1024) {
    mobileStart();
    mobileListenerExpand();
    mobileListenerShrink();
  }

  $(window).on('resize', function() {
    var win = $(this);
    if (win.width() >= 1024) {
      $("ul").height('auto');
    }
    if (win.width() < 1024) {
      mobileStart();
      mobileListenerExpand();
      mobileListenerShrink();
    }
  });

});

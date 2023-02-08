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
      //$(`#${$idParent} ul`).height(fullHeight);
      $(`#${$idParent} ul`).height('auto');
      $(`#${$idParent}`).siblings('.category-box').children('ul').height(startConditions.liMargin / 2);
      $(this).addClass('hidden');
      $(this).siblings('.category-footer-open').removeClass('hidden');
      $(`#${$idParent}`).siblings('.category-box').children('.category-footer').removeClass('hidden');
      $(`#${$idParent}`).siblings('.category-box').children('.category-footer-open').addClass('hidden');

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
      $(`#${$idParent}`).siblings('.category-box').children('.category-footer').removeClass('hidden');
      $(`#${$idParent}`).siblings('.category-box').children('.category-footer-open').addClass('hidden');

    });
  };

  //function to update the "No items found" message
  function updateNoItemsMessage() {
    // Loop through each category
    $('.category-box').each(function() {
      var categoryId = $(this).attr('id');
      var noItemsMessage = $('#noItemsMessage', this);
      //show or hide the "No items found" message based on whether the category has any items
      if ($(this).find('li.item').length > 0) {
        noItemsMessage.hide();
      } else {
        noItemsMessage.show();
      }
    });
  }

  //this listener sorts the items in the categories list with drag and drop and updates the database with the new order. It also updates the category ID of the item if it is moved to a different category

  $(".sortable").sortable({
    connectWith: ".sortable",
    handle: ".grip",
    update: function (event, ui) {
      const $list = $(this);
      const form = ui.item.find("form");
      const itemID = form.data("id");
      let categoryID = "";
      const categories = {
        restaurants: 2,
        movies: 1,
        books: 3,
        products: 4,
      };
      for (const [key, value] of Object.entries(categories)) {
        if (key === $list.closest(".category-box").attr("id")) {
          categoryID = value;
        }
      }
      const priorities = $list
        .find("li")
        .map(function (index, element) {
          const itemForm = $(element).find("form");
          if (itemForm.length) {
            const itemID = itemForm.data("id");
            return { itemID, categoryID, priority: index + 1 };
          }
          return null;
        })
        .get()

      if (priorities.length) {
        $.post("/update-item-details", { priorities });
        updateNoItemsMessage();
      }

      if ($(window).width() >= 1024) {
        if ($('#restaurants-list li').length >= 1) {
          $('#restaurants-list').height('auto');
        } else {
          $('#restaurants-list').height(48);
        }

        if ($('#movies-list li').length >= 1) {
          $('#movies-list').height('auto');
        } else {
          $('#movies-list').height(48);
        }

        if ($('#books-list li').length >= 1) {
          $('#books-list').height('auto');
        } else {
          $('#books-list').height(48);
        }

        if ($('#products-list li').length >= 1) {
          $('#products-list').height('auto');
        } else {
          $('#products-list').height(48);
        }
      }

    },
  });

  if ($(window).width() < 1024) {
    mobileStart();
    mobileListenerExpand();
    mobileListenerShrink();
  }

  $(window).on('resize', function() {
    var win = $(this);
    if (win.width() >= 1024) {
      $('ul').height('auto');

    } else if (win.width() < 1024) {
      mobileStart();
      mobileListenerExpand();
      mobileListenerShrink();
    }
  });

});

// Client facing scripts here
$(() => {

  $('#add-button').on('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    if (document.cookie === ''){
      alert("Please login");
    } else{
      const form = $("#add-item-form");
      const url = form.attr('action');
      $.ajax({
        type: 'POST',
        url: url,
        data: form.serialize(),
      })
      .done((response) => {
        $('#item-input').val('');

        const $list = $(`#${response.category}s-list`);

        $list.append(`<li class="item"><form class="item-form" action="/" method="POST"><button><i class="fa-solid fa-square-check"></i></button><div class="item-divider"><span>${response.item}</span><div><img class="grip" src="/images/gripIcon-01.png"></div></div></form></li>`);

        $(`#${response.category}s-list`).height('auto');

        if ($(window).width() < 1024) {
          $(`#${response.category}s-list`).parent().siblings('.category-box').children('ul').height(5);
          $(`#${response.category}s-list`).siblings('.category-footer').addClass('hidden');
          $(`#${response.category}s-list`).siblings('.category-footer-open').removeClass('hidden');
        }
      });
    }
  });
});

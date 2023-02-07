// Client facing scripts here
$(() => {
  $('#add-button').on('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const form = $("#add-item-form");
    const url = form.attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: form.serialize(),
    })
      .done((response) => {

        $('#item-input').val('');

        const $list = $(`#${response.category}s ul`);

        $list.append(`<li class="item"><form class="item-form" action="/" method="POST"><button><i class="fa-solid fa-square-check"></i></button><div class="item-divider"><span>${response.item}</span><div><img class="grip" src="/images/gripIcon-01.png"></div></div></form></li>`);

      });
  });
});

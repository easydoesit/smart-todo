$(() => {
  $('.item-button').on('click', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const form = $(this).parent();
    const url = form.attr('action');
    console.log(url);
    $.ajax({
      type: 'POST',
      url: url,
      data: form.serialize(),
    })
      .done((response) => {
        $(this).parent().parent().remove();
      });

  });
});

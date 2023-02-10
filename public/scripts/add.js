// Client facing scripts here
$(() => {

  $('#add-button').on('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    if (document.cookie === '') {
      alert("Please login");
    } else {
      const form = $("#add-item-form");
      const url = form.attr('action');
      const formData = form.serialize();

      if (formData === "item=") {
        console.log("no data");
      } else {

        $(".overlay").removeClass('hidden');
        $('#item-input').val('');

        $.ajax({
          type: 'POST',
          url: url,
          data: formData,
        })
          .done((response) => {
            const $list = $(`#${response.category}s-list`);

            $list.append(`<li class="item"><form class="item-form" action="/items/${response.itemID}/delete" method="POST" data-id="${response.itemID}"><button class="item-button"><i class="fa-solid fa-square-check"></i></button><div class="item-divider"><span>${response.item}</span><div><img class="grip" src="/images/gripIcon-01.png"></div></div></form></li>`);
            $(`#${response.category}s-list`).height('auto');
            $(".overlay").addClass('hidden');

            const animateCatBox = (id => {
              const passID = id;
              let i = 0;
              const flashdiv = setInterval(function() {
                console.log(passID);
                const header = $(`#${passID}.category-header`);
                const footer = $(`#${passID}.category-footer-open`);
                i++;
                console.log(header);

                header.addClass('blink');
                footer.addClass('blink');

                setTimeout(function() {
                  header.removeClass('blink');
                  footer.removeClass('blink');
                },150);

                if (i === 4) clearInterval(flashdiv);
              },300, passID);
            });

            if (response.category === 'movie') {
              animateCatBox(1);
            } else if (response.category === 'restaurant') {
              animateCatBox(2);
            } else if (response.category === 'book') {
              animateCatBox(3);
            } else if (response.category === 'product') {
              animateCatBox(4);
            }

            if ($(window).width() < 1024) {
              $(`#${response.category}s-list`).parent().siblings('.category-box').children('ul').height(5);
              $(`#${response.category}s-list`).siblings('.category-footer').addClass('hidden');
              $(`#${response.category}s-list`).siblings('.category-footer-open').removeClass('hidden');
            }
          });
      }
    }
  });
});

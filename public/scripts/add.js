// Client facing scripts here
$(() => {
  $('#add-button').on('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    var form = $("#add-item-form");
    var url = form.attr('action');
    $.ajax({
      type: 'POST',
      //url: '/api/users',
      url: url,
      data: form.serialize(),
      // success: function(data) {

      //     // Ajax call completed successfully
      //     alert("Form Submited Successfully");
      // },
      // error: function(data) {

      //     // Some error in ajax call
      //     alert("some Error");
      // }
    })
      .done((response) => {

        //console.log('ajax button');
        //console.log(response);
        location.reload(true);

        // const $usersList = $('#users');
        // $usersList.empty();

        // for (const user of response.users) {
        //   $(`<li class="user">`).text(user.name).appendTo($usersList);
        // }
      });
  });
});

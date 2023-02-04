// Client facing scripts here
$(document).ready(function () {
  $.ajax({
    url: '/api/test',
    type: 'GET',
    success: function (data) {
      console.log(data);
      // data is an array of objects, each object representing a task
      for(const item of data.test) {
        // create a table row element and set its content
        let tr = $('<tr></tr>');
        tr.append('<td>' + item.item_name + '</td>');
        tr.append('<td>' + item.priority + '</td>');
        tr.append('<td><form method="GET" action="/"><button type="submit" class="btn btn-outline-primary">Edit</button></form></td>');
        tr.append('<td><form method="POST" action="/"><button type="submit" class="btn btn-outline-danger">Delete</button></form></td>');
        // append the new table row to the table body
        $('#sortable').append(tr);
      };
    },
    error: function (error) {
      console.error(error);
    }
  });
});


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
        tr.append('<td class="priority">' + item.priority + '</td>');
        tr.append('<td><form method="GET" action="/"><button type="submit" class="btn btn-outline-primary">Edit</button></form></td>');
        tr.append('<td><form method="POST" action="/"><button type="submit" class="btn btn-outline-danger">Delete</button></form></td>');
        // append the new table row to the table body
        $('#sortable').append(tr);
      };
      $('#sortable').sortable({
        update: function(event, ui) {
          let newPriorities = [];
          $('#sortable tr').each(function(index, item) {
            // set the new priority to be the index + 1
            newPriorities.push(index);
            // update the priority number in the table
            $(item).find('td').eq(1).text(index);
          });
          // make a call to the server to update the database with the new priorities
          $.ajax({
            url: '/api/test',
            type: 'POST',
            data: { newPriorities },
            success: function (data) {
              console.log(data);
            }
          });
        }
      });
    },
    error: function (error) {
      console.error(error);
    }
  });
});

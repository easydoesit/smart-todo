const capitalize = function(item) {
  if (item) {

    item = item.split(" ");
    for (let i = 0; i < item.length; i++) {
      item[i] = item[i][0].toUpperCase() + item[i].slice(1);
    }
    item = item.join(" ");
  }
  return item;
};

module.exports = { capitalize };


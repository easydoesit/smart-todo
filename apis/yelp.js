// api is provided by yelp
const sdk = require('api')('@yelp-developers/v1.0#2hsur2ylbank95o');


// fetch Yelp takes in parameters of city and name and returns true if the name is an exact match in the city.
const fetchYelp = function(city, name) {
  // make url friendly strings
  name = name.replace(' ', '%20');
  city = city.replace(' ', '%20');

  // yelp authorization header
  sdk.auth('Bearer OMTnW_wt6SpHUqUEyvUs_3KEDVZg2E6cKkc7VlMWujgAqZDSp8iScv87aYthLjoH2vHH-ZpY4LLOn8vdfwgWjxy4q_fR2hocEh-dxOeW8AnCGi_HxLQasu1dYKXYY3Yx');

  // yelp request {data} is the full object of what is returned. Console.log(data) to see the nested objects.
  sdk.v3_business_search({location: city, term: name, sort_by: 'best_match', limit: '10'})
    .then(({ data }) => {
      for (let i in data.businesses) {
        console.log(data.businesses[i].name);
        if (data.businesses[i].name === 'The Eden') {
          return true;
        }
      }
    })
    .catch(err => console.error(err));
};

module.exports = { fetchYelp };

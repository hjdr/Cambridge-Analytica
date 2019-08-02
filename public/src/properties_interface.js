$(document).ready(function() {

  console.log('calling getallprops...')
  getAllProperties()


  function getAllProperties() {
    return $.get('http://localhost:9292/properties/get_all/', function(data) {
    console.log(data)
    })
  };
});
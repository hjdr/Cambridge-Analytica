var Obj = function(name, last_name, sex) {
  this.name = name,
  this.last_name = last_name,
  this.sex = sex;
};

Obj.prototype.jSON = function() {
  var json_obj = {
    name : this.name,
    last_name : this.last_name,
    sex : this.sex
  };
  return JSON.stringify(json_obj);
};

var new_object = new Obj('Tim', 'Cole', 'male');
var json = new_object.jSON();

console.log(json);

var return_object = JSON.parse(json);

var new_object = new Obj(return_object.name, return_object.last_name, return_object.sex);

console.log(new_object);

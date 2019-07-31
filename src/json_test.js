var Obj = function(name, last_name, sex) {
  this.name = name;
  this.last_name = last_name;
  this.sex = sex;
};

Obj.prototype.jsonStringify = function() {
  return JSON.stringify(this.createJsonObject());
};

Obj.prototype.createJsonObject = function() {
  return {
    name: this.name,
    last_name: this.last_name,
    sex: this.sex
  };
};

var new_object = new Obj('Tim', 'Cole', 'male');
var json = new_object.jsonStringify();

console.log(json);

var return_object = JSON.parse(json);

var new_object = new Obj(return_object.name, return_object.last_name, return_object.sex);

console.log(new_object);

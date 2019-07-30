class Listing {

  constructor() {
    this.name = '';
  }

  createJsonString() {
    return JSON.stringify(this._createJsonObject());
  }

  _createJsonObject() {
    return { name : this.name };
  }

  newName(name) {
    this.name = name
  }

}

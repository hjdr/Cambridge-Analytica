class Listing {

  constructor(name = 'newlisting') {
    this.name = name;
  }

  createJsonString() {
    return JSON.stringify(this._createJsonObject());
  }

  _createJsonObject() {
    return { name : this.name };
  }

}

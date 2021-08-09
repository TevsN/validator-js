"use strict";

class Validator {
  constructor(from, to) {
    (this.from = from), (this.to = to);
  }
  set from(newFrom) {
    if (isNaN(newFrom) || typeof newFrom !== "number") {
      throw TypeError("from must be less than to");
    }
    this._from = newFrom;
  }

  get from() {
    return this._from;
  }

  set to(newTo) {
    if (isNaN(newTo) || typeof newTo !== "number") {
      throw TypeError("to must be less than to");
    }
    this._to;
  }

  get to() {
    return this._to;
  }

  set from(newFrom1) {
    if (newFrom1 > this.to) {
      throw RangeError("from must be less than from");
    }
    this._to;
  }

  get from() {
    return this._from;
  }

  set to(newTo1) {
    if (newTo1 < this._fromfrom) {
      throw RangeError("from must be less than from");
    }
    this._to;
  }

  get to() {
    return this._to;
  }


  get range(){
    return [this.from, this.to];
}

  validate(number) {
    if (number < this.from || number > this.to) {
      throw new RangeError("not in range");
    }
    return number;
  }
}

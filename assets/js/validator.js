"use strict";

class Validator {
  constructor(from, to) {
    this.from = from,
    this.to = to;
  }
  set from(newFrom) {
    if (isNaN(newFrom) || typeof newFrom !== "number") {
      throw new TypeError("from must be less than to");
    }
    if (newFrom > this.to) {
      throw new RangeError("from must be less than from");
    }
    this._from = newFrom;
  }

  get from() {
    return this._from;
  }

  set to(newTo) {
    if (isNaN(newTo) || typeof newTo !== "number") {
      throw new TypeError("to must be less than to");
    }
    if (newTo < this._from) {
      throw new RangeError("from must be less than from");
    }
    this._to = newTo;
  }

  get to() {
    return this._to;
  }


  get range(){
    return [this.from, this.to];
}

  validate(number) {
    if (isNaN(number) || typeof newTo !== "number") {
      throw new TypeError("to must be less than to");
    }
    if (number < this.from || number > this.to) {
      throw new RangeError("not in range");
    }
    return number;
  }
}

  const range1 = new Validator (20,40);
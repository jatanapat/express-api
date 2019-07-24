'use strict';

export default class Util {
  checkAttrs(obj, req) {
    let invalid = [];
    invalid = req.filter((ele) => {
      if ({}.hasOwnProperty.call(obj, ele)) {
        if (typeof obj[ele] !== 'undefined' && obj[ele] !== null) {
          return false;
        }
      }
      return true;
    });
    return invalid;
  }

  getAttr(obj, key, defalut) {
    return Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : defalut;
  }

  build(arr, obj) {
    const json = {};
    for (let i = 0; i < arr.length; i += 1) {
      if ({}.hasOwnProperty.call(obj, arr[i])) {
        json[arr[i]] = obj[arr[i]];
      }
    }
    return json;
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  pad(n, width, z) {
    const nZ = z || '0';
    const nN = `${n}`;
    return nN.length >= width ? nN : new Array((width - nN.length) + 1).join(nZ) + nN;
  }

  extend(o1, o2) {
    const o3 = {};
    Object.keys(o1).forEach((key) => {
      o3[key] = o1[key];
    });
    Object.keys(o2).forEach((key) => {
      o3[key] = o2[key];
    });
    return o3;
  }
};
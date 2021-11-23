export default class ArrayBufferConverter {
  constructor(arrbuff) {
    this.arrbuff = arrbuff;
  }

  load() {
    const buffarr = new Uint16Array(this.arrbuff);
    return buffarr;
  }

  toString() {
    const buffView = this.load();
    let output = '';
    for (let i = 0; i < buffView.length; i += 1) {
      output += String.fromCharCode(buffView[i]);
    }
    return output;
  }
}

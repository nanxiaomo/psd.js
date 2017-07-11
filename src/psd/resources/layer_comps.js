export default class LayerComps {
  static id = 1065;
  static name = 'layerComps';

  static visibilityCaptured(comp) {
    return comp.capturedInfo & parseInt('001', 2) > 0;
  }

  static positionCaptured(comp) {
    return comp.positionCaptured & parseInt('010', 2) > 0;
  }

  static appearanceCaptured(comp) {
    return comp.appearanceCaptured & parseInt('100', 2) > 0;
  }

  constructor(resource) {
    this.resource = resource;
    this.file = this.resource.file;
  }

  parse() {
    console.log('Parsing layer comps');
    this.file.seek(4, true);

  }
}
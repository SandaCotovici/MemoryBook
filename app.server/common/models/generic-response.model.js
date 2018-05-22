class GenericResponse {

  constructor(payload) {
    this.msg = payload.msg;
    this.data = payload.data;
  }

}

module.exports = GenericResponse;

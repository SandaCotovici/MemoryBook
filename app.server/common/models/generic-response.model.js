class GenericResponse {

  constructor(payload) {
    this.status = payload.status;
    this.data = payload.data;
  }

}

module.exports = GenericResponse;

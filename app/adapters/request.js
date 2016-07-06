import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  //namespace: 'api',
  host: 'http://127.0.0.1:3000', //move it to parent
  findAll() {
    var token = localStorage["token"];
    return Ember.$.getJSON(this.host + "/api/user/requests", {token: token});
  },
  query(store, type, query) {
    var token = localStorage["token"];
    return Ember.$.getJSON(this.host + "/api/user/requests/search", {token: token, query});
  },
  updateRecord(store, type, snapshot) {
    var token = localStorage["token"];
    var data = {status: snapshot.attr('status'), token: token}; //only status

    return Ember.$.ajax({
      url: this.host + "/api/user/requests/" + snapshot.id + "/update_request",
      type: "POST",
      data: data,
      dataType: 'json'
    });
  },
  createRecord(store, type, snapshot) {
    var token = localStorage["token"];
    var data = {text: snapshot.attr('text'), token: token};

    return Ember.$.ajax({
      url: this.host + "/api/user/requests",
      type: "POST",
      data: data,
      dataType: 'json'
    });
  },
  deleteRecord(store, type, snapshot) {
    var token = localStorage["token"];

    return Ember.$.ajax({
      url: this.host + "/api/user/requests/" + snapshot.id + "/destroy_request",
      type: "POST",
      data: {token: token},
      dataType: 'json'
    });
  }
});

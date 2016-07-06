import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  //namespace: 'api',
  host: 'http://127.0.0.1:3000',
  queryRecord() {
    var token = localStorage["token"];
    return Ember.$.getJSON(this.host + "/api/user", {token: token});
  },
  findAll() {
    var token = localStorage["token"];
    return Ember.$.getJSON(this.host + "/api/user/managed_users", {token: token});
  },
  createRecord(store, type, snapshot) {
    var token = localStorage["token"];
    var data = {email: snapshot.attr('email'), role: snapshot.attr('role'), 
      password: snapshot.attr('password'), token: token};

    return Ember.$.ajax({
      url: this.host + "/api/user",
      type: "POST",
      data: data,
      dataType: 'json'
    });
  },
  deleteRecord(store, type, snapshot) {
    var token = localStorage["token"];
    var data = {user_id: snapshot.id, token: token};

    return Ember.$.ajax({
      url: this.host + "/api/user/destroy_user",
      type: "POST",
      data: data,
      dataType: 'json'
    });
  }
});
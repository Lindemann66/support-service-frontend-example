import Ember from 'ember';

export default Ember.Service.extend({
  //model exists only after successful auth by header or login & password
  //otherwise it's null
  modelFromCache() {
    var user_id = localStorage["cached_user_id"];
    if (user_id !== undefined) {
      return this.get('store').peekRecord('user', user_id);
    }
    return null;
  },
  // return promise
  signIn(data) {
    var host = this.get('store').adapterFor('user').get('host');

    var self = this;
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      return Ember.$.ajax({
        url: host + "/api/session",
        type: "POST",
        data: data,
        dataType: 'json'
      }).done(function(data) {
        if (data.status !== 200) {
          return reject(data.message);
        }
        localStorage.clear();
        localStorage.setItem("token", data.token);

        self.get('store').push({
          data: [{
            id: data.user.id,
            type: 'user',
            attributes: { email: data.user.email, role: data.user.role }
          }]
        });
        localStorage.setItem("cached_user_id", data.user.id);

        resolve();
      }).fail(function() {
        reject();
      });
    });
    return promise;
  },
  // return promise
  logout() {
    var host = this.get('store').adapterFor('user').get('host');
    var token = localStorage["token"];

    var self = this;
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      return Ember.$.ajax({
        url: host + "/api/session/destroy_session",
        type: "POST",
        data: {token: token},
        dataType: 'json'
      }).done(function(data) {
        if (data.status !== 200) {
          return reject(data.message);
        }

        localStorage.clear();
        self.get('store').unloadAll('user');
        self.get('store').unloadAll('request');

        resolve();
      }).fail(function() {
        reject();
      });
    });
    return promise;
  }
});

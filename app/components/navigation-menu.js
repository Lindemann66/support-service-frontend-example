import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    logout() {
      var promise = this.get('auth').logout();
      var self = this;
      promise.then(function() {
        self.get('router').transitionTo('index');
      }, function(message) {
        alert(message || "Server did not respond");
      });
    }
  }
});

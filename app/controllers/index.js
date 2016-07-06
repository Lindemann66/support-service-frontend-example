import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signIn: function() {
      var email = this.get('email');
      var password = this.get('password');
      var data = {email: email, password: password};

      var promise = this.get('auth').signIn(data);
      var self = this;
      promise.then(function() {
        self.send('redirectToBasePath');
      }, function(message) {
        alert(message || "Incorrect login or password");
      });
    }
  }
});

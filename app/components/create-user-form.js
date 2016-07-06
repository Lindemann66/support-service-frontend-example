import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createUser: function(roleId) {
      var email = this.get('userEmail');
      var password = this.get('userPassword');

      var user = this.get('store').createRecord('user', {email: email, 
        role: roleId, password: password});
      user.save();

      this.get('userAdded')();
    }
  }
});
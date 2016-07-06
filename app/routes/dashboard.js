import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('auth').modelFromCache() === null) {
      this.transitionTo('index');
    }
  },
  model() {
    return this.get('store').findAll('request');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    
    var pendingRequests = this.get('store').filter('request', function(request) {
      if (request.isPending()) { return true; }
    });
    var fixedRequests = this.get('store').filter('request', function(request) {
      if (request.isFixed()) { return true; }
    });
    var deniedRequests = this.get('store').filter('request', function(request) {
      if (request.isDenied()) { return true; }
    });

    var currentUser = this.get('auth').modelFromCache();

    this.controller.set('isCustomer', currentUser.isCustomer());
    this.controller.set('isSupport', currentUser.isSupport());
    this.controller.set('isAdmin', currentUser.isAdmin());

    this.controller.set('customerRoleId', this.get('role-mapper').customerRoleId);
    this.controller.set('supportRoleId', this.get('role-mapper').supportRoleId);
    this.controller.set('adminRoleId', this.get('role-mapper').adminRoleId);

    this.controller.set('currentUser', currentUser);

    if (currentUser.isAdmin()) {
      this.get('store').findAll('user');
      var usersExceptAdmin = this.get('store').filter('user', function(user) {
        if (user.id !== currentUser.id) { return true; }
      });
      this.controller.set('users', usersExceptAdmin);
    }

    this.controller.set('pendingRequests', pendingRequests);
    this.controller.set('fixedRequests', fixedRequests);
    this.controller.set('deniedRequests', deniedRequests);
  }
});

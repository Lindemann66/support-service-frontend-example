import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  email: attr('string'),
  role: attr('number'),
  password: attr('string'),

  isCustomer() {
    return (this.get('role') === this.get('role-mapper').customerRoleId);
  },
  isSupport() {
    return (this.get('role') === this.get('role-mapper').supportRoleId);
  },
  isAdmin() {
    return (this.get('role') === this.get('role-mapper').adminRoleId);
  },
  humanRole: Ember.computed('role', function() {
    if (this.isCustomer()) {
      return "Customer";
    } else if (this.isSupport()) {
      return "Support";
    } else if (this.isAdmin()) {
      return "Admin";
    }
    return "Unknown";
  })
});
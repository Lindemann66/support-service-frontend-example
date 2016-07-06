import Ember from 'ember';

// decided not to use string role due to redundancy
// magic constants is bad so
export default Ember.Service.extend({
  customerRoleId: 1,
  supportRoleId: 2,
  adminRoleId: 3,
});

import Ember from 'ember';

// decided not to use string status due to redundancy
// magic constants is bad so
export default Ember.Service.extend({
  pendingStatusId: 1,
  fixedStatusId: 2,
  deniedStatusId: 3
});

import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  text: attr('string'),
  status: attr('number'),

  isPending() {
    return (this.get('status') === this.get('status-mapper').pendingStatusId);
  },
  isFixed() {
    return (this.get('status') === this.get('status-mapper').fixedStatusId);
  },
  isDenied() {
    return (this.get('status') === this.get('status-mapper').deniedStatusId);
  },
  humanStatus: Ember.computed('status', function() {
    if (this.isPending()) {
      return "Pending";
    } else if (this.isFixed()) {
      return "Fixed";
    } else if (this.isDenied()) {
      return "Denied";
    }
    return "Unknown";
  })
});

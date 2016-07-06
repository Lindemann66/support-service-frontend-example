import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    markAsFixed: function(requestId) {
      var request = this.get('store').peekRecord('request', requestId);
      request.set('status', this.get('status-mapper').fixedStatusId);
      request.save();
    },
    markAsDenied: function(requestId) {
      var request = this.get('store').peekRecord('request', requestId);
      request.set('status', this.get('status-mapper').deniedStatusId);
      request.save();
    },
    exportToPdf: function(requestId) {
      var host = this.get('store').adapterFor('request').get('host');
      var token = localStorage["token"];
      window.open(host + "/api/user/requests/" + requestId + "/as_pdf?token=" + token);
    },
    delete: function(requestId) {
      var request = this.get('store').peekRecord('request', requestId);
      request.destroyRecord();
    }
  }
});

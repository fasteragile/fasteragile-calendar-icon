import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  classNames: 'opening-time',
  time: null,

  day: function() {
    return moment(this.get('time')).format('dddd');
  }.property('time'),

  month: function() {
    return moment(this.get('time')).format('MMMM');
  }.property('time'),

  dayOfMonth: function() {
    return moment(this.get('time')).format('DD');
  }.property('time'),

});

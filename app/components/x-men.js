import Ember from 'ember';

export default Ember.Component.extend({
	click(){
		// debugger
	},

	actions: {
		click1(){
			debugger
			console.log('Entré a click 1')
		},
		click2(){
			debugger
			console.log('Entré a click 2')
		}
	}
});

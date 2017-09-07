import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createTask(newTaskText){
			this.store.createRecord('task', {text: newTaskText})
		},
		deleteTask(task){
			console.log(`${task.get('text')}`);
			task.destroyRecord();
		}
	}
});

var Task = function (name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function () {
  console.log("completing task: " + this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log("saving Task: " + this.name);
};

var myTask = new Task("Legacy Task");
myTask.complete();
myTask.save();

let UrgentTask = function (name, priority) {
  Task.call(this, name);
  this.priority = priority;
};

UrgentTask.prototype.notify = function () {
  console.log("notifying important people");
};

UrgentTask.prototype.save = function () {
  this.notify();
  Task.prototype.save.call(this);
};

var urgentTask = new UrgentTask("Urgent Task", 2);

console.log(urgentTask);

urgentTask.notify();

urgentTask.save();

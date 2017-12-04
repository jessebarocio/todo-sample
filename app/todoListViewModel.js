function todo(title, complete) {
    var self = this;
    self.title = title;
    self.complete = ko.observable(complete);
}

function todoListViewModel() {
    var self = this;

    self.newTask = ko.observable();
    
    self.todos = ko.observableArray();

    self.createTask = function(title) {
        self.todos.push(new todo(self.newTask(), false));
        self.newTask('');

    }
}

ko.applyBindings(new todoListViewModel());
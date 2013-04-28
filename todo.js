function TodoCtrl($scope) {
	$scope.todos = [
		{text:'learn angular', done:true},
    	{text:'build an angular app', done:false}];

    $scope.remaining = function() {
    	return _.reduce($scope.todos, function(memo, todo) { return memo + (todo.done? 0:1); }, 0);
    };

    $scope.archive = function() {
    	$scope.todos = _.filter($scope.todos, function(todo) {return !todo.done;});
    };

    $scope.addTodo = function() {
    	$scope.todos.push({text: $scope.todoText, done: false});
    	$scope.todoText = "";
    }
}
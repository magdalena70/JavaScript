app.controller('myController', function($scope, visitors, HOME_SITE){
	$scope.home = HOME_SITE.url + ': ' + HOME_SITE.port;
	$scope.greeting = {
		title: 'Hello!',
		text: 'How are you?',
		date: new Date().toDateString()
	};
	$scope.names = ["Ivan", "Vasil", "Maria"];
	
	for(i in visitors.names){
		$scope.names.push(visitors.names[i]);
	}
	
	$scope.names.sort();
	$scope.count = $scope.names.length;
	
	if($scope.names){
		$scope.boolValue = true;
	}else{
		$scope.boolValue = false;
	}
	
	if($scope.home){
		$scope.homeBoolValue = true;
	}else{
		$scope.homeBoolValue = false;
	}
});
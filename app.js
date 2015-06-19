var app = angular.module("clocking",[]);
app.controller('main',['$scope',function($scope){

	$scope.showTime = function(){
		$scope.time = moment().format("h:mm:ss");
		setTimeout($scope.showTime(),1000);
	};

	$scope.startClocking = function(){
		$scope.timeRunning = true;
		$scope.showTime();
	};

	$scope.toggleBreak = function(){
		$scope.breakLabel = $scope.breakStatus === 0 ? "Stop break" : "Start break";
		$scope.breakStatus = 1;
	};

	$scope.decreaseHours = function(){
		if($scope.workingHours !== 1){
			$scope.workingHours--;
		}
	};

	$scope.increaseHours = function(){
		if($scope.workingHours !== 12){
			$scope.workingHours++;
		}
	};

	$scope.time = "";
	$scope.timeRunning = false;
	$scope.breakStatus = 0;
	$scope.startLabel = "Start workday";
	$scope.breakLabel = "Start a break";
	$scope.workingHours = "8";
}]);
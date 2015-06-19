var app = angular.module("clocking",[]);
app.controller('main',['$scope','$interval',function($scope,$interval){

	$scope.init = function(){
		$scope.timeRunning = false;
		$scope.breakStatus = 0;
		$scope.startLabel = "Start workday";
		$scope.breakLabel = "Start a break";
		$scope.workingHours = "8";
		$scope.time = moment().format("HH:mm:ss");
		$interval(function(){
			$scope.time = moment().format("HH:mm:ss");
		},1000);
	};

	$scope.startClocking = function(){
		$scope.timeRunning = true;
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

	$scope.init();

}]);
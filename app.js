var app = angular.module("clocking",[]);
app.controller('main',['$scope','$interval',function($scope,$interval){

	$scope.init = function(){
		$scope.timeRunning = false;
		$scope.breakStatus = 0;
		$scope.startLabel = "Start workday";
		$scope.breakLabel = "Start a break";
		$scope.workingHours = "8";
		$scope.time = moment().format("HH:mm:ss");
		$scope.endTime = "";
		$interval(function(){
			$scope.time = moment().format("HH:mm:ss");
		},1000);
	};

	$scope.startClocking = function(){
		$scope.timeRunning = true;
		$scope.endTime = moment().add($scope.workingHours,'hours');
		$scope.endTimeString = $scope.endTime.format("HH:mm");
	};

	$scope.toggleBreak = function(){
		if($scope.breakStatus === 0){
			$scope.breakLabel = "Stop break";
			$scope.breakStatus = 1;
			$scope.breakStart = moment();
		}else{
			$scope.breakLabel = "Start break";
			$scope.breakStatus = 0;
			var breakEnd = moment();
			$scope.length = breakEnd.diff($scope.breakStart,'minutes');
			$scope.endTime.add($scope.length,'minutes');
			$scope.endTimeString = $scope.endTime.format("HH:mm");
		}
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
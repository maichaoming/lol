(function(window,angular){
	var app = angular.module("app",["ionic"]);
	app.controller("all",function($scope,$http,$timeout,$ionicSideMenuDelegate){
		$scope.toggle = "a1";
		$scope.btan1 = false;
		$scope.btan2 = true;
		$scope.btan3 = true;
		$scope.btan4 = true;
		$scope.btan5 = true;
		$scope.Name = "LOL";
		$scope.arrs = [];
		$scope.arrshou = [];
		$scope.dZ1 = 100;
		$scope.dZ2 = "点赞";
		$scope.toggle1 = "d1"
		var yi = false;
		$scope.change = function(){

		}
		$scope.toggleRight = function(){
			$ionicSideMenuDelegate.toggleRight();
			console.log(111)
		}
		$scope.dianz = function($event){
			if (yi) {
				$scope.dZ1--;
				$scope.dZ2 = "点赞";
				yi = false;
			}else{	
				$scope.dZ1++;
				$scope.dZ2 = "已点赞";
				console.log($event.target)
				console.log($event)
				yi = true;
			}
		}

		$scope.aa = function($event){
			console.log($event);
			
			if ($event.target.localName=="span") {
				$scope.toggle= angular.element($event.target).parent().attr("id")
			}else
			{$scope.toggle = $event.target.id;}
			angular.element(document.querySelectorAll(".tab-item1 span")).css({
						color:"grey",
						border:"none"
					})
			angular.element($event.target).css({
						color:"blue",
						borderBottom:"1px solid blue"
					})
			angular.element(document.querySelectorAll(".tab-item1")).css({
						color:"grey",
						border:"none"
					})
			angular.element($event.target).find("span").css({
						color:"blue",
						borderBottom:"1px solid blue"
					})
		}

		$scope.dd = function($event){
			if ($event.target.localName=="span") {
				$scope.toggle1= angular.element($event.target).parent().attr("id")
			}else
			{$scope.toggle1 = $event.target.id;}
			angular.element(document.querySelectorAll(".tab-item2 span")).css({
						
						border:"none"
					})
			angular.element($event.target).css({
						
						borderBottom:"2px solid red"
					})
			angular.element(document.querySelectorAll(".tab-item2")).css({
						
						border:"none"
					})
			angular.element($event.target).find("span").css({
						borderBottom:"2px solid red"
					})
		}
		$http.get("./json/index.json").then(function(response){
			$scope.arrs = response.data
			$scope.arrshou = response.data.NB[1];
			console.log($scope.arrs)
		})





		$scope.bb1 = function($event){
			console.log("11")
			$scope.Name = "LOL";
			$scope.btan1 =false;
			$scope.btan2 =true;
			$scope.btan3 = true;
			$scope.btan4 = true;
			$scope.btan5 = true;
		}
		$scope.bb2 = function($event){
			console.log("11")
			$scope.Name = "发现";
			$scope.btan1 =true;
			$scope.btan2 =false;
			$scope.btan3 = true;
			$scope.btan4 = true;
			$scope.btan5 = true;
		}
		$scope.bb3 = function($event){
			$scope.Name = "广场";
			$scope.btan1 =true;
			$scope.btan2 =true;
			$scope.btan3 = false;
			$scope.btan4 = true;
			$scope.btan5 = true;
		}
		$scope.bb4 = function($event){
			$scope.Name = "周边商城";
			$scope.btan1 =true;
			$scope.btan2 =true;
			$scope.btan3 = true;
			$scope.btan4 = false;
			$scope.btan5 = true;
		}
		$scope.bb5 = function($event){
			$scope.Name = "我";
			$scope.btan1 =true;
			$scope.btan2 =true;
			$scope.btan3 = true;
			$scope.btan4 = true;
			$scope.btan5 = false;
		}
		$scope.addstr=[];
		$scope.tadd=function($event){
			var objstr = angular.element($event.target).parent().parent().attr("data-arr");
			
			var obj = angular.fromJson(objstr);
			console.log(obj);

			if ($scope.addstr.length==0) {
				var zx=0;
				for(i=0;i<$scope.addstr.length;i++){
					if(obj.name==$scope.addstr[i].name){
						chooseNum++;
						zx=1;
					}
					
				}
				if (zx==0) {
					$scope.addstr.push(obj);
					$scope.addstr[$scope.addstr.length-1].id=$scope.addstr.length-1;
					$scope.addstr[$scope.addstr.length-1].chooseNum++;
				}
				zx=0;
			}else{
					$scope.addstr.push(obj);
					$scope.addstr[$scope.addstr.length-1].id=$scope.addstr.length-1;
					$scope.addstr[$scope.addstr.length-1].chooseNum++;
			}
			




		}
		




	})
})(window,angular)





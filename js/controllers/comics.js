
app.controller('characters',function($scope,$http) {
  
      
 		 $scope.raros= [];
 		 $scope.maisLidos = [];
  $http.get('https://gateway.marvel.com:443/v1/public/characters/1009610/comics?limit=50&apikey=cf057af7ba6950b1b018c0bb1e7f1567')
        .then(function(response){
        $scope.quadrinho = response.data;
        $scope.revistas = $scope.quadrinho.data.results;
        	
        	for(var i = 0; i < $scope.revistas.length/5; i++){
 		    	 $scope.maisLidos.push($scope.revistas[Math.floor(Math.random() * $scope.revistas.length)]);

  	   	 	 }		


           for(var i = 0; i < $scope.revistas.length*0.1; i++){
 		    	 $scope.raros.push($scope.revistas[Math.floor(Math.random() * $scope.revistas.length)]);
  	   	 	
  	   	 	}
   			
   			
    
    });
 
});
let app = angular.module("MyApp", [])

app.controller("formCtrl", function ($scope) {
    $scope.kilome=$scope.kilome;
    $scope.nombre = $scope.nombre;
    $scope.Apellido = $scope.Apellido;
    $scope.tarifa = function(kilo){
        $scope.precio='';
        $scope.descuento='';
        $scope.total = 0;

        if(kilo<300){
            $scope.precio = 250 + ' Soles';
            $scope.total = $scope.precio;
        }else if(kilo>300 && kilo<1000){
            $scope.precio = 250+(kilo*30);
            if($scope.precio>500){
                $scope.descuento = $scope.precio *0.1;
                $scope.total = $scope.precio - $scope.descuento + ' Soles';
            }else{
                $scope.total = 250+(kilo*30) + ' Soles';
            }
        }else if(kilo>1000){
            $scope.precio=250 + (250+(kilo*30)) + 20*(kilo-1000);
            if($scope.precio>500){
                $scope.descuento = $scope.precio *0.1;
                $scope.total = $scope.precio - $scope.descuento + ' Soles';
            }else{
                $scope.total = 250 + (250+(kilo*30)) + 20*(kilo-1000) + ' Soles';
            }
        }
        return $scope.total;
    }
    
})

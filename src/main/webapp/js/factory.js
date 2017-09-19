/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('appFactory', [])
.factory('Vacuna',[
    '$resource',
    function($resource){
        return $resource('vacunas/:idVacuna');
    }
]);

angular.module('appFactory', [])
.factory('CatalogoAplicacion',[
    '$resource',
    function($resource){
        return $resource('catalogoAplicaciones/:idCatalogo');
    }
]);

angular.module('appFactory', [])
.factory('Recomendacion',[
    '$resource',
    function($resource){
        return $resource('recomendaciones/:idRecomendacion');
    }
]);

angular.module('appFactory', [])
.factory('Contraindicacion',[
    '$resource',
    function($resource){
        return $resource('contraindicaciones/:idContraindicacion');
    }
]);
     
angular.module('appFactory', [])     
.factory('EfectoAdverso',[
    '$resource',
    function($resource){
        return $resource('efectosAdversos/:idEfecto');
    }
]);

angular.module('appFactory', [])
.factory('Jurisdiccion',[
    '$resource',
    function($resource){
        return $resource('jurisdicciones/:idJurisdiccion');
    }
]);

angular.module('appFactory', [])
.factory('Centro',[
    '$resource',
    function($resource){
        return $resource('centros/:idCentro');
    }
]);

angular.module('appFactory', [])
.factory('Inventario',[
    '$resource',
    function($resource){
        return $resource('inventario/:idInventario');
    }
]);


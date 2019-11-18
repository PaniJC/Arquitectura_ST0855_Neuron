var nModulo = angular.module('modNeuron',['ngRoute','ui.grid']);


nModulo.config(['$locationProvider', function($locationProvider) {
     $locationProvider.hashPrefix('');
}]);

	
nModulo.config(function ($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: 'login.html',
		controller: 'conNeuron'
    })
    .when('/Productos.html', {
		templateUrl: 'Productos.html',
		controller: 'conNeuron'
    })
    .otherwise({
        //Si ninguna ruta coincide
        templateUrl: 'login.html',
        controller: 'conNeuron'
    });
})



nModulo.controller('conNeuron', ['$scope','$http', function($scope,$http) {
  
  $scope.Productos=[];
  var Productos=[];
  


  
  
    $scope.gridOptions = {
      enableCellEditOnFocus: true,
      showGridFooter: true,
      showColumnFooter: true,
      paginationPageSizes: [25, 50, 75],
      paginationPageSize: 8,
      enableSorting: true,
      enableFiltering: true,
      customScroller: function myScrolling(uiGridViewport, scrollHandler) {
          uiGridViewport.on('scroll', function myScrollingOverride(event) {
            $scope.scroll.top = uiGridViewport[0].scrollTop;
            $scope.scroll.left = uiGridViewport[0].scrollLeft;
            scrollHandler(event);
          });
        },
      columnDefs: [

          { field: 'Cod_Int', displayName: 'Cod_Int.',  width: '30%', maxWidth: 90, minWidth: 90,  enableCellEdit: false },

          { field: 'Intervencion', displayName: 'Intervención', maxWidth: 300, minWidth: 300 },

          { field: 'Consultor', displayName: 'Consultor', maxWidth: 120, minWidth: 120 },

          { field: 'Arquitecto', displayName: 'Arquitecto', maxWidth: 120, minWidth: 120 },

          { field: 'Tipo', displayName: 'Tipo', maxWidth: 120, minWidth: 120},

          { field: 'Estado', displayName: 'Estado', maxWidth: 120, minWidth: 120 },

          { field: 'Categoria', displayName: 'Categoría', maxWidth: 120, minWidth: 120 },

          { field: 'ProvD',displayName: 'Diseño',maxWidth: 90, minWidth: 90},

          { field: 'ProvC',displayName: 'Configur',maxWidth: 90, minWidth: 90 },

          { field: 'CodSub', displayName: 'Cod. Sub.', maxWidth: 170, minWidth: 170 },

          { field: 'NombreUsuarioAct', displayName: 'Responsable', maxWidth: 170, minWidth: 170 },

          { field: 'Registro', displayName: 'Registro', maxWidth: 90, minWidth: 90 },

          { field: 'Comite', displayName: 'Comite', maxWidth: 90, minWidth: 90 }

      ],

      enableGridMenu: true,

      enableSelectAll: true,

      exporterCsvFilename: 'myFile.csv',

      exporterPdfDefaultStyle: {fontSize: 9},

      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},

      exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},

      exporterPdfHeader: { text: "My Header", style: 'headerStyle' },

      exporterPdfFooter: function ( currentPage, pageCount ) {

        return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };

      },

      exporterPdfCustomFormatter: function ( docDefinition ) {

        docDefinition.styles.headerStyle = { fontSize: 22, bold: true };

        docDefinition.styles.footerStyle = { fontSize: 10, bold: true };

        return docDefinition;

      },

      exporterPdfOrientation: 'portrait',

      exporterPdfPageSize: 'LETTER',

      exporterPdfMaxGridWidth: 500,

      exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),

      exporterExcelFilename: 'myFile.xlsx',

      exporterExcelSheetName: 'Sheet1',

      onRegisterApi: function (gridApi) {

          $scope.grid1Api = gridApi;

          }

      };

      $http.get("asp/Consulta_Productos.asp").then(function(response){
        $scope.gridOptions.data = response.data;
      })

 
  $scope.usuario;
  $scope.pass;
  $scope.mensaje_user;
  $scope.mensaje_pass;
  $scope.ingresar;

  var usuario=$scope.usuario;
  var pass = $scope.pass;

$scope.Valida_Usuario=function(usuario, pass){
  $scope.misDatos=[];
  $http.get("asp/Consulta_Usuarios.asp?user=" + usuario).then(function(response){
    $scope.misDatos = response.data;
    if($scope.misDatos.length>0){
      if($scope.misDatos[0].Password==pass){
        $scope.mensaje_user="";
        $scope.mensaje_pass="";
        $('#ingr').attr("href","Productos.html");
        console.log($('#ingr').attr("href","Productos.html"));
      }else{
        $scope.mensaje_pass="Password inválido";
        $scope.mensaje_user="";
      }
    }else{
      $scope.mensaje_user="El usuario no está registrado en la BD";
    }
})
}

$scope.accederProductos=function(){
  location.href="Productos.html";
}




}]);
/*
var app = angular.module("uigridApp", ['ngAnimate' , 'ngTouch', 'ui.grid','ui.grid.pagination','ui.grid.selection', 'ui.grid.exporter',  'ui.grid.edit', 'ui.grid.cellNav', 'addressFormatter']);

 

angular.module('addressFormatter', []).filter('address', function () {

    return function (input) {

        return input.street + ', ' + input.city + ', ' + input.state + ', ' + input.zip;

    };

  });

 

//Factory para el manejo de las variabes de usuario

 

app.factory("obtenerDatosDe",function(){

    var datos_login=[];

    var interfaz = {

        getUsuario:function(){

            return datos_login;

        },

        setRol:function(rol){

            datos_login.push(rol);

        }

    }

    return interfaz;

})

 

app.controller("uigridCtrl", ['$scope','$http', '$q','obtenerDatosDe', function ($scope,$http, $q, obtenerDatosDe) {

 

    $scope.scroll ={top: 0,left: 0};

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

      

              // You should always pass the event to the callback since ui-grid needs it

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

            { field: 'Comite', displayName: 'Comite', maxWidth: 90, minWidth: 90 },

            { field: 'Inicio_Diseno', displayName: 'In.Dise', maxWidth: 90, minWidth: 90 },

            { field: 'Fin_Diseno', displayName: 'Fin.Dise', maxWidth: 90, minWidth: 90 },

            { field: 'Inicio_Configuracion', displayName: 'Ini.Conf', maxWidth: 90, minWidth: 90 },

            { field: 'Fin_Configuracion', displayName: 'Fin.Conf', maxWidth: 90, minWidth: 90 },

            { field: 'Inicio_Prod_Controlada', displayName: 'Ini.Control', maxWidth: 90, minWidth: 90 },

            { field: 'Fin_Prod_Controlada', displayName: 'Fin.Control', maxWidth: 90, minWidth: 90 },

            { field: 'Fecha_Cierre', displayName: 'Cierre', maxWidth: 90, minWidth: 90 },

            { field: 'Fecha_Entrega', displayName: 'Entrega', maxWidth: 90, minWidth: 90 },

            { field: 'Robots', displayName: 'Robots', maxWidth: 80, minWidth: 80 },

            { field: 'FTEs', displayName: 'FteS', maxWidth: 80, minWidth: 80 },

            { field: 'Pos_Liberar', displayName: 'Pos.Lib', maxWidth: 80, minWidth: 80 },

            { field: 'Pos_Contra', displayName: 'Pos.Lib', maxWidth: 80, minWidth: 80 },

            { field: 'Vicepresidencia', displayName: 'Vicepresidencia', maxWidth: 200, minWidth: 200 },

            { field: 'Direccion', displayName: 'Dirección', maxWidth: 200, minWidth: 200 },

            { field: 'Gerencia', displayName: 'Gerencia', maxWidth: 200, minWidth: 200 },       

            { field: 'NombreUsuarioConf', displayName: 'Usu.Config', maxWidth: 120, minWidth: 120 },

            { field: 'NombreUsuarioAct', displayName: 'Usu.Actual', maxWidth: 120, minWidth: 120 },

            { field: 'UsuarioExperto', displayName: 'Usu.Experto', maxWidth: 120, minWidth: 120 },

            { field: 'UsuarioSolicitante', displayName: 'Usu.Solicitante', maxWidth: 120, minWidth: 120 },

            { field: 'UsuarioAprobador', displayName: 'Usu.Aprobador', maxWidth: 120, minWidth: 120 },

            { field: 'DuenoProceso', displayName: 'Dueño Proceso', maxWidth: 120, minWidth: 120 },

            { field: 'Jefe_D', displayName: 'Jefe Dueño', maxWidth: 120, minWidth: 120 },

            { field: 'Gerente_D', displayName: 'Gerente Dueño', maxWidth: 120, minWidth: 120 },

            { field: 'Colaborador_A', displayName: 'Colaborador As', maxWidth: 120, minWidth: 120 },

            { field: 'Asistente', displayName: 'Asistente', maxWidth: 100, minWidth: 100 },

            { field: 'DocPro', displayName: 'Ppt', maxWidth: 70, minWidth: 70 },

            { field: 'DocAsi', displayName: 'Dsñ', maxWidth: 70, minWidth: 70 },

            { field: 'HVCon', displayName: 'HVd', maxWidth: 70, minWidth: 70 },

            { field: 'VoBoF', displayName: 'VbD', maxWidth: 70, minWidth: 70 },

            { field: 'Pertinencia', displayName: 'Pert', maxWidth: 70, minWidth: 70 },

            { field: 'Creador', displayName: 'Modif', maxWidth: 80, minWidth: 80 },

            { field: 'Fecha_Registro', displayName: 'Fecha', maxWidth: 80, minWidth: 80 },

            { field: 'Bizagi', displayName: 'Bizagi', maxWidth: 80, minWidth: 80 },

            { field: 'Link_Sh', displayName: 'Sharepoint', maxWidth: 120, minWidth: 120 },

            { field: 'Aho_Gas_Anual', displayName: 'Aho_Gas_Anual', maxWidth: 120, minWidth: 120 },

            { field: 'Nuevos_Ing', displayName: 'Nuevos_Ing', maxWidth: 120, minWidth: 120 },

            { field: 'Mit_Riesgos', displayName: 'Mit_Riesgos', maxWidth: 120, minWidth: 120 },

            { field: 'Val_Riesgos', displayName: 'Val_Riesgos', maxWidth: 120, minWidth: 120 },

            { field: 'Lib_Hor_Equ_Com', displayName: 'Lib_Hor_Equ_Com', maxWidth: 120, minWidth: 120 },

            { field: 'Imp_Servicio', displayName: 'Imp_Servicio', maxWidth: 120, minWidth: 120 },

            { field: 'Pos_Entr', displayName: 'Pos_Entr', maxWidth: 120, minWidth: 120 },

            { field: 'Ao_Lib_Meta', displayName: 'Ao_Lib_Meta', maxWidth: 120, minWidth: 120 },

            { field: 'IEst_Lib_Pos_Ger_Ges', displayName: 'IEst_Lib_Pos_Ger_Ges', maxWidth: 120, minWidth: 120 },

            { field: 'Observaciones', displayName: 'IEst_Lib_Pos_Ger_Ges', maxWidth: 120, minWidth: 120 },

            { field: 'Est_Rep_Cas_Neg', displayName: 'IEst_Lib_Pos_Ger_Ges', maxWidth: 120, minWidth: 120 },

            { field: 'IValor_Cert_Caso_Negocio', displayName: 'IEst_Lib_Pos_Ger_Ges', maxWidth: 120, minWidth: 120 },

            { field: 'IBeneficio_Potencial_RDA', displayName: 'IEst_Lib_Pos_Ger_Ges', maxWidth: 120, minWidth: 120 }   

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

 

        $scope.datosUsuarios={};

        $http.get('/asp/Select_Procesos.asp')

        .then(function(response) {

         $scope.gridOptions.data = response.data;

         console.log($scope.gridOptions.data);

         //*************************************************** */
/*
            var Rol_Id;

            $http.get('/asp/Consulta_Usuario.asp')

            .then(function(response) {

                $scope.datosUsuarios.data=response.data;

                Rol_Id=$scope.datosUsuarios.data[0].Rol_Id;

                console.log(Rol_Id);

                if(Rol_Id!=1){

                    $scope.gridOptions.enableGridMenu=false;

                }else{

                    $scope.gridOptions.enableGridMenu=true;

                }

              

            })

       });

      

    }]);

 

    app.filter('ProvD', function() {

        var genderHash = {

          1: 'ENTERDEV',

          2: 'KPMG',

          3: 'WIPRO',

          4: 'ACCENTURE',

          5: 'TCS',

          6: 'PENDIENTE',

          7: 'USUARIO'

        };

       

        return function(input) {

          if (!input){

            return '';

          } else {

            return genderHash[input];

          }

        };

      })

 

 

  <title>Procesos CEDEX</title>

        <meta charset="UTF-8">

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="css/style.css" rel="stylesheet">

 

        <!--Invocamos las librerias de angular y UI GRID-->

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.7.0/angular.js"></script>

        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.7.0/angular-touch.js"></script>

        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.7.0/angular-animate.js"></script>

        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.7.0/angular-aria.js"></script>

        <script src="http://ui-grid.info/docs/grunt-scripts/csv.js"></script>

        <script src="http://ui-grid.info/docs/grunt-scripts/pdfmake.js"></script>

        <script src="http://ui-grid.info/docs/grunt-scripts/vfs_fonts.js"></script>

        <script src="http://ui-grid.info/docs/grunt-scripts/lodash.min.js"></script>

        <script src="http://ui-grid.info/docs/grunt-scripts/jszip.min.js"></script>

        <script src="http://ui-grid.info/docs/grunt-scripts/excel-builder.dist.js"></script>

        <script src="http://ui-grid.info/release/ui-grid.cellnav.min.js"></script>

        <script src="http://ui-grid.info/release/ui-grid.edit.min.js"></script>

        <script src="http://ui-grid.info/release/ui-grid.core.min.js"></script>

        <script src="http://ui-grid.info/release/ui-grid.js"></script>

        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"></script>

        <link rel="stylesheet" href="css/font/css/font-awesome.min.css">

        <script src="js/funciones.js"></script>

        <script src="js/controlTablas.js"></script>

 

        <!--Hojas de estilo-->

        <link rel="stylesheet" href="http://ui-grid.info/release/ui-grid.css" type="text/css">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <link rel="stylesheet" href="css/style.css" type="text/css"></link>*/
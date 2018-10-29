var routes = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('holaMundo', {
      url: "/",
      templateUrl: "partials/hola_mundo.html"
    })

    .state('hacerPedido', {
      url: "/",
      templateUrl: "partials/hacer_pedido.html"
    })

    .state('finalizarPedido', {
      url: "/",
      templateUrl: "partials/finalizar_pedido.html"
    })

    $urlRouterProvider.otherwise("/")

}
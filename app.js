const app = angular.module('empanadasApp', ['ui.router'])

app.service('TotoService', TotoAPI)

app.controller('HacerPedidoCtrl', HacerPedidoCtrl)
app.service('HacerPedidoSrvc', HacerPedidoSrvc)
app.controller('FinalizarPedidoCtrl', FinalizarPedidoCtrl)

app.config(routes)

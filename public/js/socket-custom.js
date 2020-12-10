var socket = io();
socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

//escuchar sucesos
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});

request = require("request-promise"),
    RUTA = "https://reclutamiento-14cf7.firebaseio.com/personas.json";

request({
    url: RUTA,
    json: true // Para que lo decodifique automáticamente 
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})
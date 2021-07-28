// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://generate-people.p.rapidapi.com/generatepeople',
//   headers: {
//     'x-rapidapi-key': '073c3e5af3msh76d0713e2d68f1bp127d70jsn3754113c7674',
//     'x-rapidapi-host': 'generate-people.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

var Persona = require("persona-generator");
Persona = new Persona();
console.log(Persona.generate());
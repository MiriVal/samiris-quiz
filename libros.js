//array de arrays con las preguntas
var libros = [
    [
    "Uno de estos libros no fue escrito por Julio Verne. ¿Sabes cuál?",
    "Viaje al centro de la Tierra",
    "Héctor Servadac",
    "El escarabajo de oro",
    "La isla misteriosa",
    ],
    [
        
    ]
];
var librosTemplate = _.template("\
   <div class='card quiestion'><span class='question'><%= question %></span> \
   <ul class='options'>\
   <li> \
   <input type='radio' name='question[<%= index %>]' value='0' id='q<%=indes %>o1'> \
   <label for='q<%
")
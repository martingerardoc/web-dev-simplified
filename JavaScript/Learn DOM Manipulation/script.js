// Agregamos elementos al body

const body = document.body

// append agregamos texto un string y despues tenemos appendChild

// Si queremos utilizar el appendChild con un string tendremos error, porque con appendChild solo podremos agregar tags como anchor spand etc.

// Como creamos elementos

const div = document.createElement("div");

div.innerContent= "Hello World";

body.appendChild(div);


const path = require('path'); //Nos ayuda a crear mejores path's

//El sigueinte codigo en realidad es igual a los siguiente
//npx webpack --entry ./index.js --output ./bundle.js --mode development
module.exports = {
  entry: './index.js', //input
  // mode: 'development', // o production
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
//__dirname lee la ubicacion del proyecto, y si queremos que el archivo final este en una carpeta especifica usamos
//,"carpeta". Si le queremos en la raiz solo dejamos el (__dirname)

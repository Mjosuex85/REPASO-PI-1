const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.

// Para la precarga cuando se levanta el server, ejecutar la funcion getEpisodes(). Al ser una peticion vamos a usar async await.
const port = 3008

conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log("Listening at " + port); // eslint-disable-line no-console
  });
});

const express = require("express");
const path = require("path");
const app = express();
const hbs =  require('hbs');
const port_number = process.env.PORT || 4000;
// public path
// app.use(express.static());
const static_path = path.join(__dirname, "./public");
const template_v_path = path.join(__dirname,"./templates/views");
app.set('view engine','hbs');
app.set('views',template_v_path);
app.use(express.static(static_path));
hbs.registerPartials(path.join(__dirname,"./templates/partials"))

// routing
app.get("/", (request, response) => {
  response.render("weather");
});

app.get("*", (request, response) => {
  response.send("404 Erorr not found");
});
app.listen(port_number, () => {
  console.log(`Server run at ${port_number}`);
});

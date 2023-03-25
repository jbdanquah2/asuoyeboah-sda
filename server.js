const express =  require('express');
const path = require('path');
const {__express} = require("ejs");

const app = express();

app.use(express.static(path.join(__dirname, '/public/')));
app.set('views', './public/views');
app.set('view engine', 'ejs');

require("./public/routes/home.routes")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    if (process.send) {
        process.send('online');
    }
});




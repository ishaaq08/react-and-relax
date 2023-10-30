require("dotenv").config();

const app = require("./api");

app.listen(process.env.PORT, () => {
    console.log(`API listening on ${process.env.PORT}`);
})
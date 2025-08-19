import express from "express"

const app = express();
const port = 1010;

app.listen(port, () => {
    console.log("Server is Running on port " + 1010)
})
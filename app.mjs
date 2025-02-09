import express from "express";
import "dotenv/config";
import indexRouter  from "./routers/indexRoute.mjs";

const app = express();
const PORT = process.env.PORT || 3000;
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
      }
];

app.set('view engine', 'ejs');

app.use('/',indexRouter);

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});

export {messages};
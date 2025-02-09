import express from "express";
import "dotenv/config";
import indexRouter  from "./routers/indexRouter.mjs";
import messageRouter from "./routers/messageRouter.mjs";

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
app.use(express.urlencoded({extended: true}));
app.use('/',indexRouter);
app.use('/new', messageRouter);

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});

export {messages};
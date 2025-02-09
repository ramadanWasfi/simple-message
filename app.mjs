import express from "express";
import "dotenv/config";
import indexRouter  from "./routers/indexRoute.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/',indexRouter);

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});


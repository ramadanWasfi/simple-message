import { messages } from "../app.mjs";

function handleIndexRequest(req,res) {
    res.render("index",{messages: messages});
}

export {handleIndexRequest};
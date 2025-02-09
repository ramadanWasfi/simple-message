import { messages } from "../app.mjs";

function handleMessageRequest(req,res) {
    res.render("form");
}

function handleMessageCreation(req,res) {
    console.log(`$gh`);
    console.log(`${req.body.messageText} ${req.body.name}`);
    messages.push({ text: req.body.messageText, user: req.body.name, added: new Date() });

    res.redirect("/");
}

export {handleMessageRequest,handleMessageCreation};
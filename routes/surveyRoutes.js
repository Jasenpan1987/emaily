const mongoose = require("mongoose");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const requireLogin = require("../middlewares/requireLogin");
const requireCredit = require("../middlewares/requireCredit");

const Survey = mongoose.model("surveys");

module.exports = app => {
    app.get("/api/survey/thanks", (req, res) => {
        res.send("Thanks for voting.");
    });

    // create new survey
    app.post("/api/survey", 
        requireLogin,
        requireCredit,
        async (req, res) => {
            const { title, body, subject, recipients } = req.body;
            const recipientEmailList = recipients
                .replace(/' '/g, '')
                .split(',')
                .map(email => ({ email }));

            const survey = new Survey({
                title,
                body,
                subject,
                recipients: recipientEmailList,
                _user: req.user.id,
                dateSend: Date.now()
            });

            // use Mailer class to send off email
            const mailer = new Mailer(survey, surveyTemplate(survey));
            try {
                await mailer.send();
                await survey.save();
                req.user.credits -= 1;
                const user = await req.user.save();
                return res.send(user);
            } catch(err) {
                res.status(402).send(err);
            }
        }
    );
}
// eslint-disable-next-line no-unused-vars
const debug = require("debug")("discord-user-manager:index");
const express = require("express");

const DiscordAdapter = require("../discord/DiscordAdapter");
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  if (req.query.codeOfConduct === "true") {
    res.cookie("codeOfConduct", req.query.codeOfConduct, {
      maxAge: 3.154e10 // 1 year.
    });
  }

  const flashMessages = req.flash("info")[0];

  // Get the URL of the Discord welcome channel:
  let welcomeChannelURL = "https://discordapp.com/channels/@me";
  try {
    welcomeChannelURL = await DiscordAdapter.getWelcomeChannelURL();
  } catch (err) {
    debug(`An error occured while getting URL for welcome channel: ${err}`);
  }

  // eslint-disable-next-line no-unused-vars
  res.render("index", {
    pageTitle: "Home",
    ...flashMessages,
    welcomeChannelURL
  });
});

/* GET privacy-policy page. */
router.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy", {
    pageTitle: "Privacy Policy"
  });
});

/* GET code-of-conduct page. */
router.get("/code-of-conduct", (req, res) => {
  res.render("code-of-conduct", {
    pageTitle: "Code of Conduct"
  });
});

module.exports = router;

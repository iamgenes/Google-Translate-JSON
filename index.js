var fs = require("fs");
const { env } = require("process");
const { Translate } = require("@google-cloud/translate").v2;

var target = "sw";

var targetJSON = "json/sw.json";
var sourceJSON = "json/en.json";

const DEBUG = false;

const googleTranslate = new Translate({ key: env("API_KEY") });

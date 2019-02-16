const generateExtension = require("./script/generateExtension")({
  createTextIntroSectionOne,
  generateGraphOneSurveyOne,
  generateGraphTwoSurveyOne,
  generateGraphTwoSurveyTwo,
});
const { containerSectionTwo } = generateExtension;
const generateGraph = require("./script/generateGraph")({
  containerSectionTwo,
});
const {
  startConstructionGraphicOne,
  startConstructionGraphicTwo,
} = generateGraph;
const generateButtons = require("./script/generateButtons")({
  startConstructionGraphicOne,
  startConstructionGraphicTwo,
});
const { createButtonFactors } = generateButtons;
const generateMainTextView = require("./script/generateMainTextView")({
  createButtonFactors,
});

const eventOnmouseover = require("./script/eventOnmouseover");
const generateAdvice = require("./script/generateAdvice");
const generateTextFactorSurvey = require("./script/generateTextFactorSurvey")({
  createButtonFactorsComponent,
});
const startDashboard = require("./tabs/startDashboard");

console.log("OK!");

module.exports = {
  ...eventOnmouseover,
  ...generateAdvice,
  ...generateButtons,
  ...generateExtension,
  ...generateGraph,
  ...generateMainTextView,
  ...generateTextFactorSurvey,
  ...startDashboard,
};

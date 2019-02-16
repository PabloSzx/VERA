const generateAdvice = require("./script/generateAdvice");
const {
  startConstructionAdvice,
  generateAdviceSurveyOne,
  generateAdviceSurveyTwo,
} = generateAdvice;

const generateGraph = require("./script/generateGraph")({
  startConstructionAdvice,
  generateAdviceSurveyOne,
  generateAdviceSurveyTwo,
});
const {
  generateGraphOneSurveyOne,
  generateGraphTwoSurveyOne,
  generateGraphTwoSurveyTwo,
  startConstructionGraphicOne,
  startConstructionGraphicTwo,
  generateGraphOneSurveyTwo,
} = generateGraph;
const generateButtons = require("./script/generateButtons")({
  startConstructionGraphicOne,
  startConstructionGraphicTwo,
});
const {
  createButtonFactors,
  createButtonFactorsComponent,
  generateBtnSectionTwo,
} = generateButtons;
const generateMainTextView = require("./script/generateMainTextView")({
  createButtonFactors,
});
const {
  createTextIntroSectionOne,
  getIntroductionText,
  reference,
} = generateMainTextView;
const generateExtension = require("./script/generateExtension")({
  createTextIntroSectionOne,
  generateGraphOneSurveyOne,
  generateGraphTwoSurveyOne,
  generateGraphTwoSurveyTwo,
  generateBtnSectionTwo,
  generateGraphOneSurveyTwo,
  generateAdviceSurveyTwo,
});
const { containerSectionOne } = generateExtension;
const generateTextFactorSurvey = require("./script/generateTextFactorSurvey")({
  containerSectionOne,
  createButtonFactorsComponent,
});

const eventOnmouseover = require("./script/eventOnmouseover");

const startDashboard = require("./tabs/startDashboard")({
  getIntroductionText,
  reference,
});

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

window.onload = startDashboard.startDashboard(startDashboard.mainContainer);

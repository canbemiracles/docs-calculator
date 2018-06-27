function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
    .addItem('Start', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  var ui = HtmlService.createHtmlOutputFromFile('sidebar')
    .setTitle('Calculator');
  DocumentApp.getUi().showSidebar(ui);
}

function clearData() {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.deleteProperty('data');
}

function getData() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var data = scriptProperties.getProperty('data');
  return JSON.parse(data);
}

function setData(data) {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('data', JSON.stringify(data));
}
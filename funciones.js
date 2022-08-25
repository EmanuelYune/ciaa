function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('CIAA-USPT');
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}
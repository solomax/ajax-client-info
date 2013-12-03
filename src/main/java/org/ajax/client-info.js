$(function() {
	$(document.body).append('<div style="style="position:absolute; left: -10000px;" id="ajaxClientInfo"></div>');
	$('#ajaxClientInfo').append('${ajaxClientInfoPanel}');
	fillClientInfoForm($('#ajaxClientInfo form')[0]);
	Wicket.Ajax.ajax({"f":"${ajaxClientInfoFormId}","u":"${ajaxClientInfoFormUrl}","m":"POST"});
});
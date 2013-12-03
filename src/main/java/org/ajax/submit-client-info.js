function fillClientInfoForm(form) {
	form.navigatorAppName.value = window.navigator.appName;
	form.navigatorAppVersion.value = window.navigator.appVersion;
	form.navigatorAppCodeName.value = window.navigator.appCodeName;
	var cookieEnabled = (window.navigator.cookieEnabled)? true : false;
	if (typeof window.navigator.cookieEnabled == "undefined" && !cookieEnabled) { 
		document.cookie = "wickettestcookie";
		cookieEnabled = (document.cookie.indexOf("wickettestcookie")!=-1)? true : false;
	}
	form.navigatorCookieEnabled.value = cookieEnabled;
	form.navigatorJavaEnabled.value =  window.navigator.javaEnabled();
	form.navigatorLanguage.value = window.navigator.language ? window.navigator.language : window.navigator.userLanguage;
	form.navigatorPlatform.value = window.navigator.platform;
	form.navigatorUserAgent.value = window.navigator.userAgent;
	if (window.screen) {
		form.screenWidth.value = window.screen.width;
		form.screenHeight.value = window.screen.height;
		form.screenColorDepth.value = window.screen.colorDepth;
	}
	form.utcOffset.value = (new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0).getTimezoneOffset() / -60);
	form.utcDSTOffset.value = (new Date(new Date().getFullYear(), 6, 1, 0, 0, 0, 0).getTimezoneOffset() / -60);
	form.browserWidth.value =  window.innerWidth || document.body.offsetWidth;
	form.browserHeight.value =  window.innerHeight || document.body.offsetHeight;
	form.hostname.value =  window.location.hostname;
}

function submitform() {
	fillClientInfoForm(document.postback);
	document.postback.submit();
}

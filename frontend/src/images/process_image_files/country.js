(function () {
	var country = {'code':'pt','id':26,'defaultLangauge':'pt'};
	
	if (!window.evidon) window.evidon = {};
	
	if (window.evidon.notice) {
		window.evidon.notice.setLocation(country);
	}
	else {
		window.evidon.location = country;
	}
})();
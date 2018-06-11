$(function () {
	var test = /_min\./;
	$("img").each(function (index, obj) {
		if(test.test($(this).attr("src"))) {
			var reSrc = $(this).attr("src").replace(test, ".");
			$(this).attr("src", reSrc)
		}
	});
})
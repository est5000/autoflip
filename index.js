var allWindows = {};
$(function() {
	$("#working_area fieldset div button").click(function() {
		$(this).parent().find("input[name=index]").val(1);
	});

	$("#working_area button").click(function() {
		check();
	});
});

function check() {
	$("#working_area fieldset").each(function() {
		checkField(this);
	});
	// window.setTimeout(checkAndOpen, 1000);
}

function checkField(field) {
	if ($(field).find("input[name=switch]").is(':checked')) {
		var id = $(field).attr("id");
		var popWindows = allWindows[id];
		if (popWindows == null) {
			popWindows = [];
			allWindows[id] = popWindows;
		}
		for ( var i = 0; i < 3; i++) {
			var win = popWindows[i];
			if (win == null || win.closed) {
				var base = $(field).find("input[name=base]").val() + "/";
				var index = $(field).find("input[name=index]").val();
				var rest = "/" + $(field).find("input[name=rest]").val();

				popWindows[i] = open(base + index + rest);
				index++;
				$(field).find("input[name=index]").val(index);
			}

		}

	}

}
var popWindows = [];
$(function() {
	$("#reset").click(function() {
		$("#index").val(1);
	});

	$("#switch").change(function() {
		checkAndOpen();
	});
});

function checkAndOpen() {
	if ($("#switch").is(':checked')) {
		for ( var i = 0; i < 3; i++) {
			var win = popWindows[i];
			if (win == null || win.closed) {
				var base = $("#base").val() + "/";
				var index = $("#index").val();
				var rest = "/" + $("#rest").val();

				popWindows[i] = open(base + index + rest);
				index++;
				$("#index").val(index);
			}

		}

		window.setTimeout(checkAndOpen, 1000);
	} else {
	}
}
$(function() {
	// alert("jQuery is OK");

	$("#btn2").click(function() {
		var value = ($("#i1").val());
		$("#output").empty().append(value);
	});
});

function click1() {
	alert("click1");
}

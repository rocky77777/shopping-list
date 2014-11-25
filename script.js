$(document).ready(function() {
	$("#addbutt").click(function() {
		if( $("input#additem").val().trim().length == 0 ) {
			$("#blank").show();
			$("input#additem").val("");
		} else {
			$(".m2").remove();
			$(".m").append('<p class="m2"></p>');
			$("ul").append('<li class="notbought"><button class="boughtit">Bought it!</button>' + $('input#additem').val() + "</li>");
			$(".m2").append(" Come on! You know you're not gonna use " + $('input#additem').val() + ", are you?");
			$("input#additem").val("");
			$("#blank").hide();
		};
	});


	$("ul").on("click", ".boughtit", function() {
		$(this).closest("li").toggleClass("bought notbought");
		$(this).remove();
	});

/* removes all checked items */

	$(".buttons").click (function() {
		$(".bought").remove();
	});


});
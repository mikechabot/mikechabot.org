$(document).ready(function(){
	$("a.big").click(function() {		
		var id = $(this).prop("id");
		var visible = $("div.dropdown:visible").prop("id");
		if(id != visible) {
			$("div.dropdown:visible").toggle(100);
			$("div#" + id).toggle(100);
		}
		else {
			$("div#" + id).toggle(100);
		}		
		return false;
	});
});
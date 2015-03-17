var togglePanels = function(){
	$(".toggle-title").click(function () {
		$(this).next(".toggle-details").toggle("fast");
	});
}

// ***************************************************************
// Dom Ready
// ***************************************************************

jQuery( document ).ready(function() {
    togglePanels();
});

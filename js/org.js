$(function() {
	var isToolBarClosed = 0;
	
	/*$('body').popover({
	    selector: '[rel=popover]',
	    trigger: 'hover',
	    title : 'Position',
	    content : $(this).html()
	});*/
	
	$(".toggle-dir").tooltip();
	
	$("body[rel='tooltip']").tooltip();

		
	$(".getxml").click(function(){
		alert("get cxml");
		var c = jsPlumb.getConnections();
		console.log(c);
	});
	
	
	
	$("#toggler").click(function(){
		$("#main-menu").toggle();
		if(isToolBarClosed == 0){
			$(".toggle-dir").removeClass("icon-chevron-right");
			$(".toggle-dir").addClass("icon-chevron-left");	
			$(".toggle-dir").attr("data-original-title", "Show");
			isToolBarClosed = 1;
		}else{
			$(".toggle-dir").removeClass("icon-chevron-left");
			$(".toggle-dir").addClass("icon-chevron-right");
			$(".toggle-dir").attr("data-original-title", "Hide");
			isToolBarClosed = 0;
		}
	});

	$("body").on("mouseover",".w",function(){
		$(this).find(".ep").stop().show();
	});
	
	$("body").on("mouseleave",".w",function(){
		$(this).find(".ep").fadeOut(2000);
	});
	
	/*$("body").on("click",".item-name",function(){
		$(this).hide();
		$(this).next().val($(this).text());
		$(this).next().show();
		$(this).next().focus();
		$(this).next().val("");
	});*/
	
	
	$("body").on("focusout",".item-text",function(){
		$(this).hide();
		if($(this).val() == ""){
			$(this).prev().text("Name");
		}else{
			$(this).prev().text($(this).val());
		}
		$(this).prev().show();
	});
	
	/*$("body").on("click",".role-name",function(){
		$(this).hide();
		$(this).next().val($(this).text());
		$(this).next().show();
		$(this).next().focus();
		$(this).next().val("");
	});*/
	
	$("body").on("focusout",".role-text",function(){
		$(this).hide();
		if($(this).val() == ""){
			$(this).prev().text("Role");
		}else{
			$(this).prev().text($(this).val());
		}
		$(this).prev().show();
	});
	
	$("body").on("click", ".open-fill",function(){
		$(this).parent().find(".fill").show();
	});
	
	$("body").on("click", ".close-fill",function(){
		$(this).parent().hide();
	});
	
	$("body").on("click", ".add-fill",function(){
		$(this).parent().append('<div class="span3"><input type="text" value="" class="name" style="width:50px">:<input type="text" value="" class="name" style="width:140px"><i rel="tooltip" data-placement="left" data-original-title="Edit" class="remove-attr icon-minus-sign"></i></div>');
	});
	
	
	$("body").on("click", ".remove-attr",function(){
		$(this).parent().remove();
	});
	
	
});
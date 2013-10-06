		var mapping=new Array();
		var attributes = new Array();
		var path = new Array();
		var xmlCode = '';
		var text = '';
		var start = 'start';
		var size = 0;
		var count = 0;
		var currentItem = '';
		var flowchartpath = new Array();
		var flowChartConnections = new Array();
		var dialContin = 0;
		var getDigitsContin = 0;
		var preAnswerContin = 0;
		var XMLCode = "";
		var now = "";
		var recXMLCode = "";
		var recElement = "";
		var nestStack = new Array();
		var curColourIndex = 1, maxColourIndex = 24;
		var nextColour = function() {
			var R,G,B;
			R = parseInt(128+Math.sin((curColourIndex*3+0)*1.3)*128);
			G = parseInt(128+Math.sin((curColourIndex*3+1)*1.3)*128);
			B = parseInt(128+Math.sin((curColourIndex*3+2)*1.3)*128);
			curColourIndex = curColourIndex + 1;
			if (curColourIndex > maxColourIndex) curColourIndex = 1;
			return "rgb(" + R + "," + G + "," + B + ")";
		 };
		
			$(function() 
			{
				// chrome fix
				document.onselectstart = function() { return false; };
				
				$("#menu ul li").draggable({
					helper:"clone",
					zIndex:50
				});
				
				$("#menu").draggable({
					zIndex:100
				});
				
				
				
				$("#main").droppable({
					drop:function(e,ui){
						var id = ui.draggable.data("id");
						
						// $(this).attr("id") -- Droppable Id
						// ui.draggable.attr("id") -- Draggable Id
						
						//alert(ui.draggable.attr("id"));
						
						
						if(id == "rectangle" || id == "circle"){
							var d = $("#tmpl-" + id).tmpl();
							var timestamp = new Date().getTime();
							d.attr("id", "unarto_" + timestamp);
							$("#main").append(d);
							d.offset(ui.helper.offset());
							jsPlumb.draggable(d);
						
							d.find(".ep").each(function(i,e) {
								var p = $(e).parent();
								jsPlumb.makeSource($(e), {
									parent:p,				
									anchor:"AutoDefault",
									connector:[ "Flowchart", { gap:0 } ],
									connectorStyle:{ strokeStyle:"black", lineWidth:4 },
									/*maxConnections:5,
									onMaxConnections:function(info, e) {
										alert("Maximum connections (" + info.maxConnections + ") reached");
									}*/
								});
							});
							
							jsPlumb.makeTarget(d, {
								dropOptions:{ hoverClass:"dragHover" },
								anchor:"AutoDefault"				
							});
					}
					}
				});
				
				
			});
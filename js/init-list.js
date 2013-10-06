;(function() {

	var entries = [
		{ id:"demo", name:"jsPlumb Home", about:"Main jsPlumb demo page.  Contains a bit of everything" },
		{ id:"flowchartConnectorsDemo", name:"Flowchart", about:"Demonstration of the Flowchart connectors" },
		{ id:"draggableConnectorsDemo", name:"Draggable Connections", about:"Demonstration of drag and drop connections" },
		{ id:"perimeterAnchorsDemo", name:"Perimeter Anchors", about:"Demonstration of perimeter anchors" },
		{ id:"stateMachineDemo", name:"State Machine", about:"Demonstration of the State Machine Connectors and Continuous Anchors" },
		{ id:"chartDemo", name:"Chart Demonstration", about:"Simple Chart Demo" },
		{ id:"anchorDemo", name:"Sources and Targets", about:"Demonstration of how to make whole elements Connection sources and targets" },
		{ id:"dynamicAnchorsDemo", name:"Dynamic Anchors", about:"Demonstration of Dynamic Anchors" },
		{ id:"dragAnimDemo", name:"Animation", about:"Drag/drop demo with animation" }
	],
	libraries = [
		{id:"jquery", name:"jQuery"},
		{id:"mootools", name:"MooTools"},
		{id:"yui3", name:"YUI3"}
	],
	prepareOtherLibraryString = function(demoId, library) {
		var s = "", demoInfo = jsPlumb.DemoList.find(demoId);
		for (var i = 0; i < libraries.length; i++) {
			var c = libraries[i].id == library ? "selected" : "";
			s += '<a class="' + c + '" href="../' + libraries[i].id + '/' + demoId + '.html" title="Use ' + libraries[i].name + ' as the support library">' + libraries[i].name + '</a>&nbsp;';
		}
		return s;
	},
	demoSelectorString = (function() {
		var s = '&nbsp;<h5>select:</h5><select id="demoSelector" class="demoSelector" title="Select a demo">';
		for (var i = 0; i < entries.length; i++) {
			s += '<option value="' + entries[i].id + '.html">' + entries[i].name + '</option>';
		}
		s += '</select>';
		return s;
	})();
	
	
	jsPlumb.DemoList = {
		find:function(id) {
			for (var i = 0; i < entries.length; i++) {
				if (entries[i].id === id) {
					var next = i < entries.length - 1 ? i + 1 : 0,
						prev = i > 0 ? i - 1 : entries.length - 1;
						
					return {
						current:entries[i],
						prev:entries[prev],
						next:entries[next],
						idx:i
					};
				}
			}
		},
		init : function() {
			var bod = document.body,
				demoId = bod.getAttribute("data-demo-id"),
				library = bod.getAttribute("data-library"),
				renderModeString = '<a href="#" class="rmode" mode="svg" title="Use SVG for rendering">SVG</a>&nbsp;<a href="#" class="selected rmode" mode="canvas" title="Use Canvas elements for rendering">Canvas</a>&nbsp;<a href="#" class="rmode" mode="vml" title="Use VML for rendering (IE < 10 only)">VML</a>',
				libraryString = '&nbsp;|&nbsp;<div class="otherLibraries"></div>' + prepareOtherLibraryString(demoId, library),
				demoInfo = jsPlumb.DemoList.find(demoId);
				
			if (demoInfo) {
				var prevString = '|&nbsp;<h5>prev:</h5><a href="' + demoInfo.prev.id + '.html" title="View previous demo">' + demoInfo.prev.name + '</a>',
					nextString = '&nbsp;<h5>next:</h5><a href="' + demoInfo.next.id + '.html" title="View next demo">' + demoInfo.next.name + '</a>',
					menuString = '<a href="../doc/usage.html" class="mplink">Documentation</a>' +
							 '&nbsp;|&nbsp;<a href="../apidocs">API docs</a>' +
							 '&nbsp;|&nbsp;<a href="../../tests/qunit-all.html">qUnit tests</a>' +
							 '&nbsp;|&nbsp;<a href="mailto:simon.porritt@gmail.com" class="mplink">Contact</a>' +
                             '&nbsp;|&nbsp;<a href="http://github.com/sporritt/jsplumb/" class="mplink">GitHub</a>' +
							 '&nbsp;|&nbsp;<a href="http://code.google.com/p/jsplumb/issues/list" class="mplink">Issues</a>';// +			
							 //'&nbsp;|&nbsp;<a href="http://jsplumb.tumblr.com" class="mplink">jsPlumb on Tumblr</a>';			
			
				//var d = document.createElement("div");
				//d.className = "renderMode";
				//document.getElementById("sidebar").appendChild(d);
				//document.body.appendChild(d);				
				//document.getElementById("sidebar").insertBefore(d, document.getElementById("explanation"));
				
			}	
		}
	};
})();
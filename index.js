var xmldom = require('xmldom');
var xpath = require('xpath');

// MIT License http://www.opensource.org/licenses/mit-license.php
// Jim Rowe @jimrowe
module.exports = function(content) {
	this.cacheable && this.cacheable();

	var content = content.toString('utf8');

	var markup = "";
	markup = "icons['test'] = 'test123'; ";

	// parse content of doc
	var svgDoc = new xmldom.DOMParser().parseFromString(content, "text/xml");
	var svgEl = svgDoc.documentElement;

	// find all the symbols in the svg doc
	var select = xpath.useNamespaces({"svg": "http://www.w3.org/2000/svg"});
	var nodes = select('//svg:symbol', svgDoc);
	for (var i = 0; i < nodes.length; i++) {
		var node = nodes[i];
		var nodeContent = new xmldom.XMLSerializer().serializeToString(node.childNodes);
		nodeContent = '<svg viewBox="'+node.getAttribute('viewBox')+'" xmlns="http://www.w3.org/2000/svg"><g>' + nodeContent.trim() + '</g></svg>';

      // this fails when there is whitespace between elements, need a fix!
		markup = markup + "icons['"+node.getAttribute('id')+"'] = '"+nodeContent+"'; ";
	}

	var functionStart = "module.exports = function(iconId) { var icons = []; ";
	var functionEnd = "return icons[iconId]; }";

	return functionStart + markup + functionEnd;
}
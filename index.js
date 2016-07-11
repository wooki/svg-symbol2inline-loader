var xmldom = require('xmldom');
var xpath = require('xpath');

// MIT License http://www.opensource.org/licenses/mit-license.php
// Jim Rowe @jimrowe
module.exports = function(content) {
	this.cacheable && this.cacheable();

	var content = content.toString('utf8');

	// create a target element to add content to
	var targetDoc = new xmldom.DOMParser().parseFromString('<g></g>', 'text/xml');
	// var targetEl = targetDoc.documentElement;

	// parse content of doc
	var svgDoc = new xmldom.DOMParser().parseFromString(content, "text/xml");
	var svgEl = svgDoc.documentElement;

	// find the symbol in the svg doc
	var nodesWithId = xpath.select('/*/*[@id]', targetDoc);
	if (nodesWithId.length > 0) {
		svgSymbol = nodesWithId[0];
	} else {
		// throw error
	}

	// Transfer supported attributes from symbol element to the target element.
	var attributes = ['viewBox', 'height', 'width', 'preserveAspectRatio'];
	attributes.forEach(function(attr) {
		if (svgEl.hasAttribute(attr)) {
			targetEl.setAttribute(attr, svgSymbol.getAttribute(attr));
		}
	});

	var markup = new xmldom.XMLSerializer().serializeToString(targetDoc);
	return "module.exports = " + JSON.stringify(content);
}
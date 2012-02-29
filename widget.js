/*
 * Fenice Widgets
 * Copyright 2009 Baidu Inc. All rights reserved.
 * 
 * path: widget.js
 * @author: Ray
 * version: 0.0.1
 * date: 2011/11/02
 */


/**
 * 声明fenice包
 */
var F,
 	fenice = F = fenice || {version: "1.0.1"};
	
	
fenice.clearSelection = function(){
	try {
		document.selection && document.selection.empty && ( document.selection.empty(), 1)
		|| window.getSelection && window.getSelection().removeAllRanges();
	} catch(e) {
	}
}
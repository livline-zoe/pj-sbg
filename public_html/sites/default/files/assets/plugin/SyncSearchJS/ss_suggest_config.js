var ssConfig = {
	base: 'suggest',
	suggest: {
		forms: [
			{
				id: '',
				site: '6AYNYTBV',
				group: '1',
				depth: 3
			},
			{
				id: '1',
				site: '6AYNYTBV',
				group: '1',
				depth: 3
			},
			{
				id: '2',
				site: '6AYNYTBV',
				group: '1',
				depth: 3
			}
		],
		wmModeExcludes: '',
		cssPath: '/sites/default/files/assets/plugin/SyncSearchJS/ss_suggest.css',
		templates: {}
	}
};

ssConfig.suggest.templates.item =
'<div class="ss-suggest-item ss-suggest-item-off" id="{{item.suggestId}}">' +
	'<span class="ss-suggest-key">{{item.keyword}}</span>' +
'</div>';

/*!
* ss_loader.js
* http://www.syncsearch.jp/
*
* @version 1.0.0
* @date 2017-06-19
* @license Copyright 2017 SyncThought,Inc. All Rights Reserved.
* This software is the proprietary information of SyncThought,Inc.
* Use is subject to license terms.
*/
var SyncSearchLoader=function(){this.proto="https:"===location.protocol?"https://":"http://",this.server="",this.CDNv6={host:"cdn.syncsearch-ipv6.net",path:"/libs/"},this.CDN={host:"cdn.syncsearch.jp",path:"/libs/"},this.ALT={host:"static.syncsearch.jp",path:"/libs/"},this.ALTv6={host:"static.syncsearch-ipv6.net",path:"/libs/"}};SyncSearchLoader.prototype={load:function(){var targetServer,targetServer;targetServer=ssConfig.useIpv6Domain?this.CDNv6:this.CDN;var url=this.proto+targetServer.host+targetServer.path+ssConfig.base+"_version.js?d="+(new Date).getTime(),xhr=this.createAjaxRequest();try{xhr.open("GET",url,!0),xhr.timeout=500,xhr.onreadystatechange=function(){4==xhr.readyState&&(200==xhr.status?(ssLoader.server=targetServer,eval(xhr.responseText)):0==xhr.status&&ssLoader.loadScript())},xhr.send(null)}catch(ex){ssLoader.loadScript()}},createAjaxRequest:function(){var t;if(window.XMLHttpRequest)t=new XMLHttpRequest;else try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}return t},loadScript:function(t){s=ssConfig.useIpv6Domain?this.ALTv6:this.ALT,this.server=s;var t=this.proto+s.host+s.path+ssConfig.base+"_version.js?d="+(new Date).getTime(),e=document.getElementsByTagName("head").item(0),s=document.createElement("script");s.setAttribute("type","text/javascript"),s.setAttribute("charset","utf-8"),s.setAttribute("src",t),e.appendChild(s)},init:function(initObj,version){var url=this.proto+this.server.host+this.server.path+ssConfig.base+"_"+version+".min.js";"undefined"!=typeof SS_DEV_SCRIPT&&(url=SS_DEV_SCRIPT);var script=document.createElement("script");script.setAttribute("type","text/javascript"),script.setAttribute("charset","utf-8"),script.setAttribute("src",url);var done=!1;script.onload=script.onreadystatechange=function(){done||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(done=!0,eval(initObj+".init()"))},document.body.appendChild(script)}};var ssLoader=new SyncSearchLoader;ssLoader.load();
// Input 0
(function(a){var b=function(){};b.VERSION="0.0.1";a.Modulog=b})(window);
(function(){var a=function(){};a.VERSION="0.0.1";a.LEVEL_NONE=0;a.LEVEL_ERROR=1;a.LEVEL_WARN=2;a.LEVEL_INFO=3;a.LEVEL_DEBUG=4;a.level=a.LEVEL_DEBUG;var b=null;a.addLogTarget=function(c){"function"===typeof c&&(b=c)};a.debug=function(c,a,b){ModulogLog.level>=ModulogLog.LEVEL_DEBUG&&(c="[ DEBUG "+(a?"| "+a+" ":"")+"] "+c,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(b?console.debug(c,b):console.debug(c)),ModulogLog.__delegate(c,b))};a.info=function(a,b,d){ModulogLog.level>=ModulogLog.LEVEL_INFO&&
(a="[ INFO "+(b?"| "+b+" ":"")+"] "+a,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(d?console.info(a,d):console.info(a)),ModulogLog.__delegate(a,d))};a.warn=function(a,b,d){ModulogLog.level>=ModulogLog.LEVEL_WARN&&(a="[ WARN "+(b?"| "+b+" ":"")+"] "+a,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(d?console.warn(a,d):console.warn(a)),ModulogLog.__delegate(a,d))};a.error=function(a,b,d){ModulogLog.level>=ModulogLog.LEVEL_ERROR&&(a="[ ERROR "+(b?"| "+b+" ":"")+"] "+
a,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(d?console.error(a,d):console.error(a)),ModulogLog.__delegate(a,d))};a.__delegate=function(a,f){b&&(f?b(a+" : "+f.toString()):b(a))};window.Log=window.MLog=window.ModulogLog=a})(window.Modulog);
(function(){var a=function(){};a.VERSION="0.0.1";var b=null,c=ModulogLog;a.get=function(a){for(var c=a.split("."),e=b,g=0;g<c.length;g++){var h=c[g];e.hasOwnProperty(h)||ModulogLog.warn("Config value not found: "+a,"CONFIG");e=e[h]}return e};a.set=function(a,c){for(var e=a.split("."),g=b,h=0;h<e.length-1;h++)g=g[e[h]];g[e.pop()]=c};a.init=function(a,d){"string"===typeof a&&jQuery?$.getJSON(a,function(a){b=a;"function"===typeof d&&d()}):"object"===typeof a?b=a:c.error("Could not init config. init() function expects config object or url to config.js. Latter needs jQuery to be initialized before.",
"Modulog | ModulogConfig")};window.Config=window.MConfig=window.ModulogConfig=a})(window.Modulog);
// Input 1
(function(a){var b=function(){};b.VERSION="0.0.4";a.EC=a.EdgeCommons=b;Log.debug("v"+b.VERSION,"EdgeCommons")})(window);
// Input 2
(function(a){var b=function(){};b.VERSION="0.0.4";var c=ModulogLog,f=null,d=null;a.loadScript=function(a,b){c.debug("loadScript: "+a,"EdgeCommons | Core");try{yepnope({load:a,callback:function(d){d==a&&(c.debug("Loading external script was successful: "+a,"EdgeCommons | Core"),"function"===typeof b&&b())}})}catch(d){c.error("Loading external script failed: "+a,"EdgeCommons | Core")}};a.getInjectedData=function(a,b){try{b=b||"data";for((!a||!a.getParentSymbol)&&c.error("getInjectedData(): First argument 'sys' is not optional",
"EdgeCommons | Core");a.getParentSymbol();)a=a.getParentSymbol();var d=a.getSymbolElement().find("."+b).html();return $.parseJSON(d)}catch(f){c.error("Reading injected data failed (scriptClassSelector="+b+")","EdgeCommons | Core",f)}};a.setAdaptiveLayouts=function(a){(!a||!a.length)&&c.error("Error in setAdaptiveLayouts(). Argument 'layouts' is not optional and has to be an array.");f=a};a.applyAdaptiveLayout=function(a,b){try{a.setVariable("doResizing",function(){var c=a.getComposition().getStage().getSymbolElement().width(),
h=a.$(b),i=null;$.each(f,function(a,b){c>=b-20&&(i=b)});d!=i&&(LOG.debug("Switching to: layout"+i,"EdgeCommons | Core"),d=i,h.html(""),a.createChildSymbol("layout"+i,b));a.$("currentLayout").html(a.getVariable("layout"))}),a.getVariable("doResizing")()}catch(c){console.error(c)}};a.Core=b;a.Log=c;a.debug=c.debug;a.info=c.info;a.warn=c.warn;a.error=c.error;a.Config=MConfig})(EdgeCommons);
// Input 3
(function(a){var b=function(){};b.VERSION="0.0.1";b.preloader=null;var c=ModulogLog;b.setup=function(f){try{b.preloader?f():a.loadScript("http://code.createjs.com/preloadjs-0.1.0.min.js",function(){b.preloader=new PreloadJS;f()})}catch(d){c.error("Error in setup(): "+d.toString(),"EdgeCommons | Preload",d)}};a.Preload=b})(EdgeCommons);
// Input 4
(function(a){var b=function(){};b.VERSION="0.0.1";b.soundManifest=null;var c=ModulogLog;b.setup=function(f,d){try{if(f){this.soundManifest=f;var e=function(){a.Preload.preloader.installPlugin(SoundJS);a.Preload.preloader.onFileLoad=function(){c.debug("onFileLoad","EdgeCommons | Sound")};a.Preload.preloader.onComplete=function(){c.debug("onComplete","EdgeCommons | Sound")};c.debug("Loading Sound Manifest","DEBUG",b.soundManifest);a.Preload.preloader.loadManifest(b.soundManifest,!0);d&&d()};a.Preload.preloader?
a.loadScript("http://code.createjs.com/soundjs-0.2.0.min.js",e):a.Preload.setup(function(){a.loadScript("http://code.createjs.com/soundjs-0.2.0.min.js",e)})}else c.error("Sound.setup() failed: manifest argument is not optional","EdgeCommons | Sound")}catch(g){c.error("Error in setup(): "+g.toString(),"EdgeCommons | Sound",g)}};b.play=function(a,b){if(SoundJS.checkPlugin(!0)){c.debug("Playing sound: "+a,"EdgeCommons | Sound");var e=SoundJS.play(a,SoundJS.INTERRUPT_NONE,0,0,!1,1);e&&(e.onComplete=b)}else c.error("Error in SoundJS (SoundJS.checkPlugin(true) failed)",
"EdgeCommons | Sound")};a.Sound=b})(EdgeCommons);
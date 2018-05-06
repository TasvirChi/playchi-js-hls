!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("playkit-js"),require("hls.js")):"function"==typeof define&&define.amd?define(["playkit-js","hls.js"],t):"object"==typeof exports?exports.hls=t(require("playkit-js"),require("hls.js")):(e.playkit=e.playkit||{},e.playkit.hls=t(e.playkit.core,e.Hls))}(this,function(e,t){return function(e){function t(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NAME=t.VERSION=void 0;var o=r(0),a=r(3),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=i.default,t.VERSION="1.6.1",t.NAME="playkit-js-hls",i.default.isSupported()&&(0,o.registerMediaSourceAdapter)(i.default)},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function e(t,r,o){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in a)return a.value;var n=a.get;if(void 0!==n)return n.call(o)},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),d=r(1),c=o(d),u=r(4),_=o(u),h=r(5),f=r(0),E=r(6),v=o(E),g=function(e){function t(e,r,o){a(this,t),t._logger.debug("Creating adapter. Hls version: "+c.default.version);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,o));return n._triedReloadWithRedirect=!1,n._startTime=0,n._config=f.Utils.Object.mergeDeep({},n._config,_.default),n._config.forceRedirectExternalStreams&&(n._config.hlsConfig.pLoader=v.default),n._hls=new c.default(n._config.hlsConfig),n._addBindings(),n}return n(t,e),l(t,null,[{key:"createAdapter",value:function(e,t,r){var o={};if(f.Utils.Object.hasPropertyPath(r,"playback.options.html5.hls")&&(o.hlsConfig=r.playback.options.html5.hls),f.Utils.Object.hasPropertyPath(r,"sources.options")){var a=r.sources.options;o.forceRedirectExternalStreams=a.forceRedirectExternalStreams,o.redirectExternalStreamsHandler=a.redirectExternalStreamsHandler,o.redirectExternalStreamsTimeout=a.redirectExternalStreamsTimeout,v.default.redirectExternalStreamsHandler=o.redirectExternalStreamsHandler,v.default.redirectExternalStreamsTimeout=o.redirectExternalStreamsTimeout}return f.Utils.Object.hasPropertyPath(r,"playback.startTime")&&(o.hlsConfig.startPosition=r.playback.startTime),new this(e,t,o)}},{key:"canPlayType",value:function(e){var r="string"==typeof e&&t._hlsMimeTypes.includes(e.toLowerCase());return t._logger.debug("canPlayType result for mimeType:"+e+" is "+r.toString()),r}},{key:"canPlayDrm",value:function(){return t._logger.warn("canPlayDrm result is false"),!1}},{key:"isSupported",value:function(){var e=c.default.isSupported();return t._logger.debug("isSupported:"+e),e}}]),l(t,[{key:"_addBindings",value:function(){var e=this;this._hls.on(c.default.Events.ERROR,function(t,r){return e._onError(r)}),this._hls.on(c.default.Events.MANIFEST_LOADED,this._onManifestLoaded.bind(this)),this._hls.on(c.default.Events.LEVEL_SWITCHED,this._onLevelSwitched.bind(this)),this._hls.on(c.default.Events.AUDIO_TRACK_SWITCHED,this._onAudioTrackSwitched.bind(this))}},{key:"load",value:function(e){var t=this;return this._loadPromise||(this._startTime=e,this._loadPromise=new Promise(function(e){t._resolveLoad=e,t._loadInternal()})),this._loadPromise}},{key:"_loadInternal",value:function(){this._onLoadedMetadataCallback=this._onLoadedMetadata.bind(this),this._videoElement.addEventListener(f.EventType.LOADED_METADATA,this._onLoadedMetadataCallback),this._sourceObj&&this._sourceObj.url&&(this._hls.loadSource(this._sourceObj.url),this._hls.attachMedia(this._videoElement),this._trigger(f.EventType.ABR_MODE_CHANGED,{mode:this.isAdaptiveBitrateEnabled()?"auto":"manual"}))}},{key:"_reloadWithDirectManifest",value:function(){this._triedReloadWithRedirect=!0,this._reset(),this._config.hlsConfig.pLoader=v.default,this._hls=new c.default(this._config.hlsConfig),this._addBindings(),this._loadInternal()}},{key:"_onLoadedMetadata",value:function(){this._removeLoadedMetadataListener(),this._resolveLoad({tracks:this._playerTracks})}},{key:"_removeLoadedMetadataListener",value:function(){this._onLoadedMetadataCallback&&(this._videoElement.removeEventListener(f.EventType.LOADED_METADATA,this._onLoadedMetadataCallback),this._onLoadedMetadataCallback=null)}},{key:"destroy",value:function(){var e=this;return s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this).then(function(){t._logger.debug("destroy"),e._loadPromise=null,e._playerTracks=[],e._reset()})}},{key:"_reset",value:function(){this._removeBindings(),this._hls.detachMedia(),this._hls.destroy()}},{key:"_parseTracks",value:function(){var e=this._parseAudioTracks(this._hls.audioTracks||[]),t=this._parseVideoTracks(this._hls.levels||[]),r=this._parseTextTracks(this._hls.subtitleTracks||[]);return e.concat(t).concat(r)}},{key:"_parseAudioTracks",value:function(e){for(var t=[],r=0;r<e.length;r++){var o={id:e[r].id,active:this._hls.audioTrack===e[r].id,label:e[r].name,language:e[r].lang,index:r};t.push(new f.AudioTrack(o))}return t}},{key:"_parseVideoTracks",value:function(e){for(var t=[],r=0;r<e.length;r++){var o={active:this._hls.startLevel===r,bandwidth:e[r].bitrate,width:e[r].width,height:e[r].height,language:"",index:r};t.push(new f.VideoTrack(o))}return t}},{key:"_parseTextTracks",value:function(e){for(var t=[],r=0;r<e.length;r++){var o={id:e[r].id,active:e[r].default,label:e[r].name,kind:e[r].type.toLowerCase(),language:e[r].lang,index:r};t.push(new f.TextTrack(o))}return t}},{key:"selectAudioTrack",value:function(e){e instanceof f.AudioTrack&&!e.active&&this._hls.audioTracks&&(this._hls.audioTrack=e.id)}},{key:"selectVideoTrack",value:function(e){e instanceof f.VideoTrack&&(!e.active||this.isAdaptiveBitrateEnabled())&&this._hls.levels&&(this.isAdaptiveBitrateEnabled()&&this._trigger(f.EventType.ABR_MODE_CHANGED,{mode:"manual"}),this._hls.currentLevel=e.index)}},{key:"selectTextTrack",value:function(e){e instanceof f.TextTrack&&!e.active&&this._videoElement.textTracks&&(this._disableAllTextTracks(),this._videoElement.textTracks[e.index].mode="hidden",t._logger.debug("Text track changed",e),this._onTrackChanged(e))}},{key:"hideTextTrack",value:function(){this._disableAllTextTracks()}},{key:"enableAdaptiveBitrate",value:function(){this.isAdaptiveBitrateEnabled()||(this._trigger(f.EventType.ABR_MODE_CHANGED,{mode:"auto"}),this._hls.nextLevel=-1)}},{key:"isAdaptiveBitrateEnabled",value:function(){return this._hls.autoLevelEnabled}},{key:"_getLevelDetails",value:function(){var e=this._hls.levels[this._hls.currentLevel]||this._hls.levels[this._hls.nextLevel]||this._hls.levels[this._hls.nextAutoLevel]||this._hls.levels[this._hls.nextLoadLevel];return e&&e.details?e.details:{}}},{key:"_getLiveEdge",value:function(){try{var e=void 0;return e=this._hls.liveSyncPosition?this._hls.liveSyncPosition:this._hls.config.liveSyncDuration?this._videoElement.duration-this._hls.config.liveSyncDuration:this._videoElement.duration-this._hls.config.liveSyncDurationCount*this._getLevelDetails().targetduration,e>0?e:this._videoElement.duration}catch(e){return t._logger.debug("Live edge calculation failed, fall back to duration"),this._videoElement.duration}}},{key:"seekToLiveEdge",value:function(){try{this._videoElement.currentTime=this._getLiveEdge()}catch(e){return}}},{key:"isLive",value:function(){try{return!!this._getLevelDetails().live}catch(e){return!1}}},{key:"_onManifestLoaded",value:function(){t._logger.debug("The source has been loaded successfully"),this._hls.config.autoStartLoad||this._hls.startLoad(this._startTime),this._playerTracks=this._parseTracks()}},{key:"_onLevelSwitched",value:function(e,r){var o=this._playerTracks.find(function(e){return e instanceof f.VideoTrack&&e.index===r.level});t._logger.debug("Video track changed",o),this._onTrackChanged(o)}},{key:"_onAudioTrackSwitched",value:function(e,r){var o=this._playerTracks.find(function(e){return e instanceof f.AudioTrack&&e.id===r.id});t._logger.debug("Audio track changed",o),this._onTrackChanged(o),this._handleWaitingUponAudioTrackSwitch()}},{key:"_handleWaitingUponAudioTrackSwitch",value:function(){var e=this;if(["IE","Edge"].includes(f.Env.browser.name)){var t=function t(){e._trigger(f.EventType.PLAYING),e._videoElement.removeEventListener(f.EventType.TIME_UPDATE,t)};this._videoElement.addEventListener(f.EventType.TIME_UPDATE,t)}}},{key:"_disableAllTextTracks",value:function(){for(var e=this._videoElement.textTracks,t=0;t<e.length;t++)e[t].mode="disabled"}},{key:"_onError",value:function(e){var r=e.type,o=e.details;if(e.fatal){var a=void 0;switch(r){case c.default.ErrorTypes.NETWORK_ERROR:![c.default.ErrorDetails.MANIFEST_LOAD_ERROR,c.default.ErrorDetails.MANIFEST_LOAD_TIMEOUT].includes(o)||this._triedReloadWithRedirect||this._config.forceRedirectExternalStreams?a=new f.Error(f.Error.Severity.CRITICAL,f.Error.Category.NETWORK,f.Error.Code.HTTP_ERROR,o):this._reloadWithDirectManifest();break;case c.default.ErrorTypes.MEDIA_ERROR:a=this._handleMediaError()?new f.Error(f.Error.Severity.RECOVERABLE,f.Error.Category.MEDIA,f.Error.Code.HLS_FATAL_MEDIA_ERROR,o):new f.Error(f.Error.Severity.CRITICAL,f.Error.Category.MEDIA,f.Error.Code.HLS_FATAL_MEDIA_ERROR,o);break;default:a=new f.Error(f.Error.Severity.CRITICAL,f.Error.Category.PLAYER,f.Error.Code.HLS_FATAL_MEDIA_ERROR,o)}this._trigger(f.EventType.ERROR,a),a&&a.severity===f.Error.Severity.CRITICAL&&this.destroy()}else{var i=h.HlsJsErrorMap[o]||{category:0,code:0},n=i.category,s=i.code;t._logger.warn(new f.Error(f.Error.Severity.RECOVERABLE,n,s,o))}}},{key:"_handleMediaError",value:function(){var e=performance.now(),r=!0;return this._checkTimeDeltaHasPassed(e,this._recoverDecodingErrorDate,this._config.recoverDecodingErrorDelay)?this._recoverDecodingError():this._checkTimeDeltaHasPassed(e,this._recoverSwapAudioCodecDate,this._config.recoverSwapAudioCodecDelay)?this._recoverSwapAudioCodec():(r=!1,t._logger.error("cannot recover, last media error recovery failed")),r}},{key:"_checkTimeDeltaHasPassed",value:function(e,t,r){return!t||e-t>r}},{key:"_recoverDecodingError",value:function(){this._recoverDecodingErrorDate=performance.now(),t._logger.warn("try to recover media Error"),this._hls.recoverMediaError()}},{key:"_recoverSwapAudioCodec",value:function(){this._recoverSwapAudioCodecDate=performance.now(),t._logger.warn("try to swap Audio Codec and recover media Error"),this._hls.swapAudioCodec(),this._hls.recoverMediaError()}},{key:"_removeBindings",value:function(){this._hls.off(c.default.Events.ERROR,this._onError),this._hls.off(c.default.Events.LEVEL_SWITCHED,this._onLevelSwitched),this._hls.off(c.default.Events.AUDIO_TRACK_SWITCHED,this._onAudioTrackSwitched),this._removeLoadedMetadataListener()}},{key:"getStartTimeOfDvrWindow",value:function(){if(!this.isLive())return 0;try{var e=this._hls.levels[this._hls.nextLoadLevel],r=e.details,o=r.fragments,a=o.length,i=o[0].start+o[0].duration,n=o[a-1].start+o[a-1].duration,s=void 0!==this._hls.config.liveMaxLatencyDuration?this._hls.config.liveMaxLatencyDuration:this._hls.config.liveMaxLatencyDurationCount*r.targetduration;return Math.max(i-this._hls.config.maxFragLookUpTolerance,n-s)}catch(e){return t._logger.debug("Unable obtain the start of DVR window"),0}}}]),t}(f.BaseMediaSourceAdapter);g.id="HlsAdapter",g._logger=f.BaseMediaSourceAdapter.getLogger(g.id),g._hlsMimeTypes=["application/x-mpegurl","application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"],t.default=g},function(e,t){e.exports={recoverDecodingErrorDelay:3e3,recoverSwapAudioCodecDelay:3e3,hlsConfig:{fragLoadingMaxRetry:4,maxMaxBufferLength:60}}},function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.HlsJsErrorMap=void 0;var a,i=r(1),n=function(e){return e&&e.__esModule?e:{default:e}}(i),s=r(0),l=(a={},o(a,n.default.ErrorDetails.MANIFEST_LOAD_ERROR,{category:s.Error.Category.MANIFEST,code:s.Error.Code.HTTP_ERROR}),o(a,n.default.ErrorDetails.MANIFEST_LOAD_TIMEOUT,{category:s.Error.Category.MANIFEST,code:s.Error.Code.TIMEOUT}),o(a,n.default.ErrorDetails.MANIFEST_PARSING_ERROR,{category:s.Error.Category.MANIFEST,code:s.Error.Code.HLSJS_CANNOT_PARSE}),o(a,n.default.ErrorDetails.LEVEL_LOAD_ERROR,{category:s.Error.Category.NETWORK,code:s.Error.Code.HTTP_ERROR}),o(a,n.default.ErrorDetails.LEVEL_LOAD_TIMEOUT,{category:s.Error.Category.NETWORK,code:s.Error.Code.TIMEOUT}),o(a,n.default.ErrorDetails.LEVEL_SWITCH_ERROR,{category:s.Error.Category.PLAYER,code:s.Error.Code.BITRATE_SWITCH_ISSUE}),o(a,n.default.ErrorDetails.FRAG_LOAD_ERROR,{category:s.Error.Category.NETWORK,code:s.Error.Code.HTTP_ERROR}),o(a,n.default.ErrorDetails.FRAG_LOOP_LOADING_ERROR,{category:s.Error.Category.NETWORK,code:s.Error.Code.HTTP_ERROR}),o(a,n.default.ErrorDetails.FRAG_LOAD_TIMEOUT,{category:s.Error.Category.NETWORK,code:s.Error.Code.TIMEOUT}),o(a,n.default.ErrorDetails.FRAG_PARSING_ERROR,{category:s.Error.Category.MEDIA,code:s.Error.Code.HLS_FRAG_PARSING_ERROR}),o(a,n.default.ErrorDetails.BUFFER_APPEND_ERROR,{category:s.Error.Category.MEDIA,code:s.Error.Code.HLS_BUFFER_APPEND_ISSUE}),o(a,n.default.ErrorDetails.BUFFER_APPENDING_ERROR,{category:s.Error.Category.MEDIA,code:s.Error.Code.HLS_BUFFER_APPENDING_ISSUE}),o(a,n.default.ErrorDetails.BUFFER_STALLED_ERROR,{category:s.Error.Category.MEDIA,code:s.Error.Code.HLS_BUFFER_STALLED_ERROR}),a);t.HlsJsErrorMap=l},function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),s=r(1),l=function(e){return e&&e.__esModule?e:{default:e}}(s),d=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=r.load.bind(r),s=t.redirectExternalStreamsHandler;return r.load=function(e,r,o){var a=e.url;"manifest"===e.type?n.Utils.Http.jsonp(a,s,{timeout:t.redirectExternalStreamsTimeout}).then(function(t){e.url=t,i(e,r,o)}).catch(function(){return i(e,r,o)}):i(e,r,o)},r}return i(t,e),t}(l.default.DefaultConfig.loader);d.redirectExternalStreamsHandler=function(e){return e},t.default=d}])});
//# sourceMappingURL=playkit-hls.js.map
(function(){var b=false;document.createElement("div").addEventListener("test",function(){},{get passive(){b=true;return false}});if(!b){var e=EventTarget.prototype.addEventListener;var d=EventTarget.prototype.removeEventListener;var a=Event.prototype.preventDefault;function c(k,m,h,l){var j=false;var f=false;var i=false;var g;if(h){if(typeof(h)==="object"){i=h.passive?true:false;f=h.useCapture?true:false}else{f=h}}if(i){j=true}if(j){g=f.toString();g+=i.toString()}l(j,g,f,i)}Event.prototype.preventDefault=function(){if(this.__passive){console.warn("Ignored attempt to preventDefault an event from a passive listener");return}a.apply(this)};EventTarget.prototype.addEventListener=function(h,i,g){var f=this;c(h,i,g,function(n,l,j,m){if(n){var l=j.toString();l+=m.toString();if(!this.__event_listeners_options){this.__event_listeners_options={}}if(!this.__event_listeners_options[h]){this.__event_listeners_options[h]={}}if(!this.__event_listeners_options[h][i]){this.__event_listeners_options[h][i]=[]}if(this.__event_listeners_options[h][i][l]){return}var k={handleEvent:function(o){o.__passive=m;if(typeof(i)==="function"){i(o)}else{i.handleEvent(o)}o.__passive=false}};this.__event_listeners_options[h][i][l]=k;e.call(f,h,k,j)}else{e.call(f,h,i,j)}})};EventTarget.prototype.removeEventListener=function(h,i,g){var f=this;c(h,i,g,function(m,k,j,l){if(m&&this.__event_listeners_options&&this.__event_listeners_options[h]&&this.__event_listeners_options[h][i]&&this.__event_listeners_options[h][i][k]){d.call(f,h,this.__event_listeners_options[h][i][k],false);delete this.__event_listeners_options[h][i][k];if(this.__event_listeners_options[h][i].length==0){delete this.__event_listeners_options[h][i]}}else{d.call(f,h,i,j)}})}}})();

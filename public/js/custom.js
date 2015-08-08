
			$(function() {
			
				var Page = (function() {

					var $navArrows = $( '#nav-arrows' ),
						slitslider = $( '#slider' ).slitslider(),

						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							// add navigation events
							$navArrows.children( ':last' ).on( 'click', function() {

								slitslider.next();

								return false;

							} );

							$navArrows.children( ':first' ).on( 'click', function() {
								
								slitslider.previous();
								return false;

							} );


							$('#gate, figcaption').on( 'click', function() {

								slitslider.next();								

							    // initialize of labels
							    $('.labels a#label1').fadeIn(300).effect('bounce', { times:1 }, 100, function() {
							        $('.labels a#label2').fadeIn(300).effect('bounce', { times:1 }, 100, function() {
							            $('.labels a#label3').fadeIn(300).effect('bounce', { times:1 }, 100, function() {
							                $('.labels a#label4').fadeIn(300).effect('bounce', { times:1 }, 100, function() {
							                    $('.labels a#label5').fadeIn(300).effect('bounce', { times:1 }, 100, function() {
							                        $('.labels a#label6').fadeIn(1000).effect('bounce', { times:1 }, 300);
							                    });
							                });
							            });
							        });
							    });

						   		 return false;

							} );

						    // description close
						    $('.description .close').click(function() {
						        $(this).parent().fadeOut(500);
						        return false;
						    });

						    // display description on click by labels
						    $('#label1').click(function() {
						    	$('.description img').attr('src', $(this).find('img').attr('src'));
						    	$('.description p').html( $(this).find('p').html() ).parent().fadeIn(500);	
						    		  	
						        return false;
						        
						    });

						    $('#label2').click(function() {
						    	$('.description img').attr('src', $(this).find('img').attr('src'));
						    	$('.description p').html( $(this).find('p').html() ).parent().fadeIn(500);	
						    		  	
						        return false;
						        
						    });

						    $('#label4').click(function() {
						    	$('.description img').attr('src', $(this).find('img').attr('src'));
						    	$('.description p').html( $(this).find('p').html() ).parent().fadeIn(500);	
						    		  	
						        return false;
						        
						    });


						    $('#label3').click(function() {
						    	$('#player').attr('src', 'https://www.youtube.com/embed/3Uj8tDaUEzc?autoplay=0&controls=0&enablejsapi=1');
						    	$('.videoDescription p').html( $(this).find('p').html()).parent().fadeIn(500);		
						        return false;
						    });

						    $('.videoDescription .close').click(function(){
						    	$('#player').attr('src', '');
  								$('.videoDescription').fadeOut(500);
  								return false;
  							})

						    $('#label5').click(function() {
    							$('.app').addClass('active-app');
    							$('.app .close').show();
    							return false;
  							});

  							$('.app .close').click(function(){

					        	$('.timbreKey').hide();
					        	$('#timbreExampleKey').show();
					            $('.rdolist').removeClass("checked");
					            $('.rdolist').addClass("unchecked");
					            $('.rdobox').removeClass("checked");
					            $('.rdobox').addClass("unchecked");
					            $(".check-image").css("background", "url(images/input-unchecked.png)");

					        
					        	$('.app .close').hide('slow');
  								$('.app').removeClass('active-app');

  								return false;
  							})

						    // close dialog on click outside
						    $('#insidePic').click(function() {
						    	$('.description').fadeOut(500);
						    	$('#player').attr('src', '');
						        $('.videoDescription').fadeOut(500);
						    });

						    $("#share").jsSocials({
        						showLabel: false,
    							showCount: false,
            					shares: ["email", "twitter", "facebook", "googleplus", "linkedin"]
        					});	

						    $('#lastPic, figcaption').click(function() {
								slitslider.next();
								$('.timbreKey').hide();
					        	$('#timbreExampleKey').show();
					            $('.rdolist').removeClass("checked");
					            $('.rdolist').addClass("unchecked");
					            $('.rdobox').removeClass("checked");
					            $('.rdobox').addClass("unchecked");
					            $(".check-image").css("background", "url(images/input-unchecked.png)");

								$('.app .close').hide('slow');
  								$('.app').removeClass('active-app');

  								$('.description').fadeOut(500);

						    	$('#player').attr('src', '');
						        $('.videoDescription').fadeOut(500);
							});	


							// Howler JS for playing the audio
						    var cache = {}, ctx = null, usingWebAudio = !0, noAudio = !1;
						    if ("undefined" != typeof AudioContext) ctx = new AudioContext(); else if ("undefined" != typeof webkitAudioContext) ctx = new webkitAudioContext(); else if ("undefined" != typeof Audio) {
						        usingWebAudio = !1;
						        try {
						            new Audio();
						        } catch (e) {
						            noAudio = !0;
						        }
						    } else usingWebAudio = !1, noAudio = !0;
						    if (usingWebAudio) {
						        var masterGain = "undefined" == typeof ctx.createGain ? ctx.createGainNode() : ctx.createGain();
						        masterGain.gain.value = 1, masterGain.connect(ctx.destination);
						    }
						    var HowlerGlobal = function() {
						        this._volume = 1, this._muted = !1, this.usingWebAudio = usingWebAudio, this._howls = [];
						    };
						    HowlerGlobal.prototype = {
						        volume: function(vol) {
						            var self = this;
						            if (vol = parseFloat(vol), vol && vol >= 0 && 1 >= vol) {
						                self._volume = vol, usingWebAudio && (masterGain.gain.value = vol);
						                for (var key in self._howls) if (self._howls.hasOwnProperty(key) && self._howls[key]._webAudio === !1) for (var i = 0; i < self._howls[key]._audioNode.length; i++) self._howls[key]._audioNode[i].volume = self._howls[key]._volume * self._volume;
						                return self;
						            }
						            return usingWebAudio ? masterGain.gain.value : self._volume;
						        },
						        mute: function() {
						            return this._setMuted(!0), this;
						        },
						        unmute: function() {
						            return this._setMuted(!1), this;
						        },
						        _setMuted: function(muted) {
						            var self = this;
						            self._muted = muted, usingWebAudio && (masterGain.gain.value = muted ? 0 : self._volume);
						            for (var key in self._howls) if (self._howls.hasOwnProperty(key) && self._howls[key]._webAudio === !1) for (var i = 0; i < self._howls[key]._audioNode.length; i++) self._howls[key]._audioNode[i].muted = muted;
						        }
						    };
						    var Howler = new HowlerGlobal(), audioTest = null;
						    if (!noAudio) {
						        audioTest = new Audio();
						        var codecs = {
						            mp3: !!audioTest.canPlayType("audio/mpeg;").replace(/^no$/, ""),
						            opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
						            ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
						            wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
						            m4a: !!(audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
						            weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
						        };
						    }
						    var Howl = function(o) {
						        var self = this;
						        self._autoplay = o.autoplay || !1, self._buffer = o.buffer || !1, self._duration = o.duration || 0, 
						        self._format = o.format || null, self._loop = o.loop || !1, self._loaded = !1, self._sprite = o.sprite || {}, 
						        self._src = o.src || "", self._pos3d = o.pos3d || [ 0, 0, -.5 ], self._volume = o.volume || 1, 
						        self._urls = o.urls || [], self._rate = o.rate || 1, self._onload = [ o.onload || function() {} ], 
						        self._onloaderror = [ o.onloaderror || function() {} ], self._onend = [ o.onend || function() {} ], 
						        self._onpause = [ o.onpause || function() {} ], self._onplay = [ o.onplay || function() {} ], 
						        self._onendTimer = [], self._webAudio = usingWebAudio && !self._buffer, self._audioNode = [], 
						        self._webAudio && self._setupAudioNode(), Howler._howls.push(self), self.load();
						    };
						    if (Howl.prototype = {
						        load: function() {
						            var self = this, url = null;
						            if (noAudio) return self.on("loaderror"), void 0;
						            for (var i = 0; i < self._urls.length; i++) {
						                var ext, urlItem;
						                if (self._format) ext = self._format; else {
						                    if (urlItem = self._urls[i].toLowerCase().split("?")[0], ext = urlItem.match(/.+\.([^?]+)(\?|$)/), 
						                    ext = ext && ext.length >= 2 ? ext : urlItem.match(/data\:audio\/([^?]+);/), !ext) return self.on("loaderror"), 
						                    void 0;
						                    ext = ext[1];
						                }
						                if (codecs[ext]) {
						                    url = self._urls[i];
						                    break;
						                }
						            }
						            if (!url) return self.on("loaderror"), void 0;
						            if (self._src = url, self._webAudio) loadBuffer(self, url); else {
						                var newNode = new Audio();
						                self._audioNode.push(newNode), newNode.src = url, newNode._pos = 0, newNode.preload = "auto", 
						                newNode.volume = Howler._muted ? 0 : self._volume * Howler.volume(), cache[url] = self;
						                var listener = function() {
						                    self._duration = newNode.duration, 0 === Object.getOwnPropertyNames(self._sprite).length && (self._sprite = {
						                        _default: [ 0, 1e3 * self._duration ]
						                    }), self._loaded || (self._loaded = !0, self.on("load")), self._autoplay && self.play(), 
						                    newNode.removeEventListener("canplaythrough", listener, !1);
						                };
						                newNode.addEventListener("canplaythrough", listener, !1), newNode.load();
						            }
						            return self;
						        },
						        urls: function(urls) {
						            var self = this;
						            return urls ? (self.stop(), self._urls = "string" == typeof urls ? [ urls ] : urls, 
						            self._loaded = !1, self.load(), self) : self._urls;
						        },
						        play: function(sprite, callback) {
						            var self = this;
						            return "function" == typeof sprite && (callback = sprite), sprite && "function" != typeof sprite || (sprite = "_default"), 
						            self._loaded ? self._sprite[sprite] ? (self._inactiveNode(function(node) {
						                node._sprite = sprite;
						                var timerId, pos = node._pos > 0 ? node._pos : self._sprite[sprite][0] / 1e3, duration = self._sprite[sprite][1] / 1e3 - node._pos, loop = !(!self._loop && !self._sprite[sprite][2]), soundId = "string" == typeof callback ? callback : Math.round(Date.now() * Math.random()) + "";
						                if (function() {
						                    var data = {
						                        id: soundId,
						                        sprite: sprite,
						                        loop: loop
						                    };
						                    timerId = setTimeout(function() {
						                        !self._webAudio && loop && self.stop(data.id, data.timer).play(sprite, data.id), 
						                        self._webAudio && !loop && (self._nodeById(data.id).paused = !0), self._webAudio || loop || self.stop(data.id, data.timer), 
						                        self.on("end", soundId);
						                    }, 1e3 * duration), self._onendTimer.push(timerId), data.timer = self._onendTimer[self._onendTimer.length - 1];
						                }(), self._webAudio) {
						                    var loopStart = self._sprite[sprite][0] / 1e3, loopEnd = self._sprite[sprite][1] / 1e3;
						                    node.id = soundId, node.paused = !1, refreshBuffer(self, [ loop, loopStart, loopEnd ], soundId), 
						                    self._playStart = ctx.currentTime, node.gain.value = self._volume, "undefined" == typeof node.bufferSource.start ? node.bufferSource.noteGrainOn(0, pos, duration) : node.bufferSource.start(0, pos, duration);
						                } else {
						                    if (4 !== node.readyState) return self._clearEndTimer(timerId), function() {
						                        var sound = self, playSprite = sprite, fn = callback, newNode = node, listener = function() {
						                            sound.play(playSprite, fn), newNode.removeEventListener("canplaythrough", listener, !1);
						                        };
						                        newNode.addEventListener("canplaythrough", listener, !1);
						                    }(), self;
						                    node.id = soundId, node.currentTime = pos, node.muted = Howler._muted, node.volume = self._volume * Howler.volume(), 
						                    setTimeout(function() {
						                        node.play();
						                    }, 0);
						                }
						                return self.on("play"), "function" == typeof callback && callback(soundId), self;
						            }), self) : ("function" == typeof callback && callback(), self) : (self.on("load", function() {
						                self.play(sprite, callback);
						            }), self);
						        },
						        pause: function(id, timerId) {
						            var self = this;
						            if (!self._loaded) return self.on("play", function() {
						                self.pause(id);
						            }), self;
						            self._clearEndTimer(timerId || 0);
						            var activeNode = id ? self._nodeById(id) : self._activeNode();
						            if (activeNode) if (activeNode._pos = self.pos(null, id), self._webAudio) {
						                if (!activeNode.bufferSource) return self;
						                activeNode.paused = !0, "undefined" == typeof activeNode.bufferSource.stop ? activeNode.bufferSource.noteOff(0) : activeNode.bufferSource.stop(0);
						            } else activeNode.pause();
						            return self.on("pause"), self;
						        },
						        stop: function(id, timerId) {
						            var self = this;
						            if (!self._loaded) return self.on("play", function() {
						                self.stop(id);
						            }), self;
						            self._clearEndTimer(timerId || 0);
						            var activeNode = id ? self._nodeById(id) : self._activeNode();
						            if (activeNode) if (activeNode._pos = 0, self._webAudio) {
						                if (!activeNode.bufferSource) return self;
						                activeNode.paused = !0, "undefined" == typeof activeNode.bufferSource.stop ? activeNode.bufferSource.noteOff(0) : activeNode.bufferSource.stop(0);
						            } else activeNode.pause(), activeNode.currentTime = 0;
						            return self;
						        },
						        mute: function(id) {
						            var self = this;
						            if (!self._loaded) return self.on("play", function() {
						                self.mute(id);
						            }), self;
						            var activeNode = id ? self._nodeById(id) : self._activeNode();
						            return activeNode && (self._webAudio ? activeNode.gain.value = 0 : activeNode.volume = 0), 
						            self;
						        },
						        unmute: function(id) {
						            var self = this;
						            if (!self._loaded) return self.on("play", function() {
						                self.unmute(id);
						            }), self;
						            var activeNode = id ? self._nodeById(id) : self._activeNode();
						            return activeNode && (self._webAudio ? activeNode.gain.value = self._volume : activeNode.volume = self._volume), 
						            self;
						        },
						        volume: function(vol, id) {
						            var self = this;
						            if (vol = parseFloat(vol), vol >= 0 && 1 >= vol) {
						                if (self._volume = vol, !self._loaded) return self.on("play", function() {
						                    self.volume(vol, id);
						                }), self;
						                var activeNode = id ? self._nodeById(id) : self._activeNode();
						                return activeNode && (self._webAudio ? activeNode.gain.value = vol : activeNode.volume = vol * Howler.volume()), 
						                self;
						            }
						            return self._volume;
						        },
						        loop: function(loop) {
						            var self = this;
						            return "boolean" == typeof loop ? (self._loop = loop, self) : self._loop;
						        },
						        sprite: function(sprite) {
						            var self = this;
						            return "object" == typeof sprite ? (self._sprite = sprite, self) : self._sprite;
						        },
						        pos: function(pos, id) {
						            var self = this;
						            if (!self._loaded) return self.on("load", function() {
						                self.pos(pos);
						            }), "number" == typeof pos ? self : self._pos || 0;
						            pos = parseFloat(pos);
						            var activeNode = id ? self._nodeById(id) : self._activeNode();
						            if (activeNode) return self._webAudio ? pos >= 0 ? (activeNode._pos = pos, self.pause(id).play(activeNode._sprite, id), 
						            self) : activeNode._pos + (ctx.currentTime - self._playStart) : pos >= 0 ? (activeNode.currentTime = pos, 
						            self) : activeNode.currentTime;
						            if (pos >= 0) return self;
						            for (var i = 0; i < self._audioNode.length; i++) if (self._audioNode[i].paused && 4 === self._audioNode[i].readyState) return self._webAudio ? self._audioNode[i]._pos : self._audioNode[i].currentTime;
						        },
						        pos3d: function(x, y, z, id) {
						            var self = this;
						            if (y = "undefined" != typeof y && y ? y : 0, z = "undefined" != typeof z && z ? z : -.5, 
						            !self._loaded) return self.on("play", function() {
						                self.pos3d(x, y, z, id);
						            }), self;
						            if (!(x >= 0 || 0 > x)) return self._pos3d;
						            if (self._webAudio) {
						                var activeNode = id ? self._nodeById(id) : self._activeNode();
						                activeNode && (self._pos3d = [ x, y, z ], activeNode.panner.setPosition(x, y, z));
						            }
						            return self;
						        },
						        fade: function(from, to, len, callback, id) {
						            var self = this, diff = Math.abs(from - to), dir = from > to ? "down" : "up", steps = diff / .01, stepTime = len / steps;
						            if (!self._loaded) return self.on("load", function() {
						                self.fade(from, to, len, callback, id);
						            }), self;
						            self.volume(from, id);
						            for (var i = 1; steps >= i; i++) !function() {
						                var change = self._volume + ("up" === dir ? .01 : -.01) * i, vol = Math.round(1e3 * change) / 1e3, toVol = to;
						                setTimeout(function() {
						                    self.volume(vol, id), vol === toVol && callback && callback();
						                }, stepTime * i);
						            }();
						        },
						        fadeIn: function(to, len, callback) {
						            return this.volume(0).play().fade(0, to, len, callback);
						        },
						        fadeOut: function(to, len, callback, id) {
						            var self = this;
						            return self.fade(self._volume, to, len, function() {
						                callback && callback(), self.pause(id), self.on("end");
						            }, id);
						        },
						        _nodeById: function(id) {
						            for (var self = this, node = self._audioNode[0], i = 0; i < self._audioNode.length; i++) if (self._audioNode[i].id === id) {
						                node = self._audioNode[i];
						                break;
						            }
						            return node;
						        },
						        _activeNode: function() {
						            for (var self = this, node = null, i = 0; i < self._audioNode.length; i++) if (!self._audioNode[i].paused) {
						                node = self._audioNode[i];
						                break;
						            }
						            return self._drainPool(), node;
						        },
						        _inactiveNode: function(callback) {
						            for (var self = this, node = null, i = 0; i < self._audioNode.length; i++) if (self._audioNode[i].paused && 4 === self._audioNode[i].readyState) {
						                callback(self._audioNode[i]), node = !0;
						                break;
						            }
						            if (self._drainPool(), !node) {
						                var newNode;
						                self._webAudio ? (newNode = self._setupAudioNode(), callback(newNode)) : (self.load(), 
						                newNode = self._audioNode[self._audioNode.length - 1], newNode.addEventListener("loadedmetadata", function() {
						                    callback(newNode);
						                }));
						            }
						        },
						        _drainPool: function() {
						            var i, self = this, inactive = 0;
						            for (i = 0; i < self._audioNode.length; i++) self._audioNode[i].paused && inactive++;
						            for (i = self._audioNode.length - 1; i >= 0 && !(5 >= inactive); i--) self._audioNode[i].paused && (self._webAudio && self._audioNode[i].disconnect(0), 
						            inactive--, self._audioNode.splice(i, 1));
						        },
						        _clearEndTimer: function(timerId) {
						            var self = this, timer = self._onendTimer.indexOf(timerId);
						            timer = timer >= 0 ? timer : 0, self._onendTimer[timer] && (clearTimeout(self._onendTimer[timer]), 
						            self._onendTimer.splice(timer, 1));
						        },
						        _setupAudioNode: function() {
						            var self = this, node = self._audioNode, index = self._audioNode.length;
						            return node[index] = "undefined" == typeof ctx.createGain ? ctx.createGainNode() : ctx.createGain(), 
						            node[index].gain.value = self._volume, node[index].paused = !0, node[index]._pos = 0, 
						            node[index].readyState = 4, node[index].connect(masterGain), node[index].panner = ctx.createPanner(), 
						            node[index].panner.setPosition(self._pos3d[0], self._pos3d[1], self._pos3d[2]), 
						            node[index].panner.connect(node[index]), node[index];
						        },
						        on: function(event, fn) {
						            var self = this, events = self["_on" + event];
						            if ("function" == typeof fn) events.push(fn); else for (var i = 0; i < events.length; i++) fn ? events[i].call(self, fn) : events[i].call(self);
						            return self;
						        },
						        off: function(event, fn) {
						            for (var self = this, events = self["_on" + event], fnString = fn.toString(), i = 0; i < events.length; i++) if (fnString === events[i].toString()) {
						                events.splice(i, 1);
						                break;
						            }
						            return self;
						        },
						        unload: function() {
						            for (var self = this, nodes = self._audioNode, i = 0; i < self._audioNode.length; i++) self.stop(nodes[i].id), 
						            self._webAudio ? nodes[i].disconnect(0) : nodes[i].src = "";
						            var index = Howler._howls.indexOf(self);
						            index && Howler._howls.splice(index, 1), delete cache[self._src], self = null;
						        }
						    }, usingWebAudio) var loadBuffer = function(obj, url) {
						        if (url in cache) obj._duration = cache[url].duration, loadSound(obj); else {
						            var xhr = new XMLHttpRequest();
						            xhr.open("GET", url, !0), xhr.responseType = "arraybuffer", xhr.onload = function() {
						                ctx.decodeAudioData(xhr.response, function(buffer) {
						                    buffer && (cache[url] = buffer, loadSound(obj, buffer));
						                });
						            }, xhr.onerror = function() {
						                obj._webAudio && (obj._buffer = !0, obj._webAudio = !1, obj._audioNode = [], delete obj._gainNode, 
						                obj.load());
						            };
						            try {
						                xhr.send();
						            } catch (e) {
						                xhr.onerror();
						            }
						        }
						    }, loadSound = function(obj, buffer) {
						        obj._duration = buffer ? buffer.duration : obj._duration, 0 === Object.getOwnPropertyNames(obj._sprite).length && (obj._sprite = {
						            _default: [ 0, 1e3 * obj._duration ]
						        }), obj._loaded || (obj._loaded = !0, obj.on("load")), obj._autoplay && obj.play();
						    }, refreshBuffer = function(obj, loop, id) {
						        var node = obj._nodeById(id);
						        node.bufferSource = ctx.createBufferSource(), node.bufferSource.buffer = cache[obj._src], 
						        node.bufferSource.connect(node.panner), node.bufferSource.loop = loop[0], loop[0] && (node.bufferSource.loopStart = loop[1], 
						        node.bufferSource.loopEnd = loop[1] + loop[2]), node.bufferSource.playbackRate.value = obj._rate;
						    };
						    "function" == typeof define && define.amd && define(function() {
						        return {
						            Howler: Howler,
						            Howl: Howl
						        };
						    }), window.Howler = Howler, window.Howl = Howl;

						    var notes = {

						    		//Timbre 1
						            "1_1C": new Howl({
						                urls: [ "../media/1_1C.mp3" ],
						            }),
						            "1_1Cs": new Howl({
						                urls: [ "../media/1_1Cs.mp3" ]
						            }),
						            "1_1D": new Howl({
						                urls: [ "../media/1_1D.mp3" ]
						            }),
						            "1_1Ds": new Howl({
						                urls: [ "../media/1_1Ds.mp3" ]
						            }),
						            "1_1E": new Howl({
						                urls: [ "../media/1_1E.mp3" ]
						            }),
						            "1_1F": new Howl({
						                urls: [ "../media/1_1F.mp3" ]
						            }),
						            "1_1Fs": new Howl({
						                urls: [ "../media/1_1Fs.mp3" ]
						            }),
						            "1_1G": new Howl({
						                urls: [ "../media/1_1G.mp3" ]
						            }),
						            "1_1Gs": new Howl({
						                urls: [ "../media/1_1Gs.mp3" ]
						            }),
						            "1_2A": new Howl({
						                urls: [ "../media/1_2A.mp3" ]
						            }),
						            "1_2As": new Howl({
						                urls: [ "../media/1_2As.mp3" ]
						            }),
						            "1_2B": new Howl({
						                urls: [ "../media/1_2B.mp3" ]
						            }),
						            "1_2C": new Howl({
						                urls: [ "../media/1_2C.mp3" ]
						            }),
						            "1_2Cs": new Howl({
						                urls: [ "../media/1_2Cs.mp3" ]
						            }),
						            "1_2D": new Howl({
						                urls: [ "../media/1_2D.mp3" ]
						            }),
						            "1_2Ds": new Howl({
						                urls: [ "../media/1_2Ds.mp3" ]
						            }),
						            "1_2E": new Howl({
						                urls: [ "../media/1_2E.mp3" ]
						            }),
						            "1_2F": new Howl({
						                urls: [ "../media/1_2F.mp3" ]
						            }),
						            "1_2Fs": new Howl({
						                urls: [ "../media/1_2Fs.mp3" ]
						            }),
						            "1_2G": new Howl({
						                urls: [ "../media/1_2G.mp3" ]
						            }),
						            "1_2Gs": new Howl({
						                urls: [ "../media/1_2Gs.mp3" ]
						            }),
						            "1_3A": new Howl({
						                urls: [ "../media/1_3A.mp3" ]
						            }),
						            "1_3As": new Howl({
						                urls: [ "../media/1_3As.mp3" ]
						            }),
						            "1_3B": new Howl({
						                urls: [ "../media/1_3B.mp3" ]
						            }),

						            //Timbre 2
						            "2_1C": new Howl({
						                urls: [ "../media/2_1C.mp3" ]
						            }),
						            "2_1Cs": new Howl({
						                urls: [ "../media/2_1Cs.mp3" ]
						            }),
						            "2_1D": new Howl({
						                urls: [ "../media/2_1D.mp3" ]
						            }),
						            "2_1Ds": new Howl({
						                urls: [ "../media/2_1Ds.mp3" ]
						            }),
						            "2_1E": new Howl({
						                urls: [ "../media/2_1E.mp3" ]
						            }),
						            "2_1F": new Howl({
						                urls: [ "../media/2_1F.mp3" ]
						            }),
						            "2_1Fs": new Howl({
						                urls: [ "../media/2_1Fs.mp3" ]
						            }),
						            "2_1G": new Howl({
						                urls: [ "../media/2_1G.mp3" ]
						            }),
						            "2_1Gs": new Howl({
						                urls: [ "../media/2_1Gs.mp3" ]
						            }),
						            "2_2A": new Howl({
						                urls: [ "../media/2_2A.mp3" ]
						            }),
						            "2_2As": new Howl({
						                urls: [ "../media/2_2As.mp3" ]
						            }),
						            "2_2B": new Howl({
						                urls: [ "../media/2_2B.mp3" ]
						            }),
						            "2_2C": new Howl({
						                urls: [ "../media/2_2C.mp3" ]
						            }),
						            "2_2Cs": new Howl({
						                urls: [ "../media/2_2Cs.mp3" ]
						            }),
						            "2_2D": new Howl({
						                urls: [ "../media/2_2D.mp3" ]
						            }),
						            "2_2Ds": new Howl({
						                urls: [ "../media/2_2Ds.mp3" ]
						            }),
						            "2_2E": new Howl({
						                urls: [ "../media/2_2E.mp3" ]
						            }),
						            "2_2F": new Howl({
						                urls: [ "../media/2_2F.mp3" ]
						            }),
						            "2_2Fs": new Howl({
						                urls: [ "../media/2_2Fs.mp3" ]
						            }),
						            "2_2G": new Howl({
						                urls: [ "../media/2_2G.mp3" ]
						            }),
						            "2_2Gs": new Howl({
						                urls: [ "../media/2_2Gs.mp3" ]
						            }),
						            "2_3A": new Howl({
						                urls: [ "../media/2_3A.mp3" ]
						            }),
						            "2_3As": new Howl({
						                urls: [ "../media/2_3As.mp3" ]
						            }),
						            "2_3B": new Howl({
						                urls: [ "../media/2_3B.mp3" ]
						            }),

						            //Timbre 3
						            "3_1C": new Howl({
						                urls: [ "../media/3_1C.mp3" ]
						            }),
						            "3_1Cs": new Howl({
						                urls: [ "../media/3_1Cs.mp3" ]
						            }),
						            "3_1D": new Howl({
						                urls: [ "../media/3_1D.mp3" ]
						            }),
						            "3_1Ds": new Howl({
						                urls: [ "../media/3_1Ds.mp3" ]
						            }),
						            "3_1E": new Howl({
						                urls: [ "../media/3_1E.mp3" ]
						            }),
						            "3_1F": new Howl({
						                urls: [ "../media/3_1F.mp3" ]
						            }),
						            "3_1Fs": new Howl({
						                urls: [ "../media/3_1Fs.mp3" ]
						            }),
						            "3_1G": new Howl({
						                urls: [ "../media/3_1G.mp3" ]
						            }),
						            "3_1Gs": new Howl({
						                urls: [ "../media/3_1Gs.mp3" ]
						            }),
						            "3_2A": new Howl({
						                urls: [ "../media/3_2A.mp3" ]
						            }),
						            "3_2As": new Howl({
						                urls: [ "../media/3_2As.mp3" ]
						            }),
						            "3_2B": new Howl({
						                urls: [ "../media/3_2B.mp3" ]
						            }),
						            "3_2C": new Howl({
						                urls: [ "../media/3_2C.mp3" ]
						            }),
						            "3_2Cs": new Howl({
						                urls: [ "../media/3_2Cs.mp3" ]
						            }),
						            "3_2D": new Howl({
						                urls: [ "../media/3_2D.mp3" ]
						            }),
						            "3_2Ds": new Howl({
						                urls: [ "../media/3_2Ds.mp3" ]
						            }),
						            "3_2E": new Howl({
						                urls: [ "../media/3_2E.mp3" ]
						            }),
						            "3_2F": new Howl({
						                urls: [ "../media/3_2F.mp3" ]
						            }),
						            "3_2Fs": new Howl({
						                urls: [ "../media/3_2Fs.mp3" ]
						            }),
						            "3_2G": new Howl({
						                urls: [ "../media/3_2G.mp3" ]
						            }),
						            "3_2Gs": new Howl({
						                urls: [ "../media/3_2Gs.mp3" ]
						            }),
						            "3_3A": new Howl({
						                urls: [ "../media/3_3A.mp3" ]
						            }),
						            "3_3As": new Howl({
						                urls: [ "../media/3_3As.mp3" ]
						            }),
						            "3_3B": new Howl({
						                urls: [ "../media/3_3B.mp3" ]
						            }),

						            //Timbre 4
						            "4_1C": new Howl({
						                urls: [ "../media/4_1C.mp3" ]
						            }),
						            "4_1Cs": new Howl({
						                urls: [ "../media/4_1Cs.mp3" ]
						            }),
						            "4_1D": new Howl({
						                urls: [ "../media/4_1D.mp3" ]
						            }),
						            "4_1Ds": new Howl({
						                urls: [ "../media/4_1Ds.mp3" ]
						            }),
						            "4_1E": new Howl({
						                urls: [ "../media/4_1E.mp3" ]
						            }),
						            "4_1F": new Howl({
						                urls: [ "../media/4_1F.mp3" ]
						            }),
						            "4_1Fs": new Howl({
						                urls: [ "../media/4_1Fs.mp3" ]
						            }),
						            "4_1G": new Howl({
						                urls: [ "../media/4_1G.mp3" ]
						            }),
						            "4_1Gs": new Howl({
						                urls: [ "../media/4_1Gs.mp3" ]
						            }),
						            "4_2A": new Howl({
						                urls: [ "../media/4_2A.mp3" ]
						            }),
						            "4_2As": new Howl({
						                urls: [ "../media/4_2As.mp3" ]
						            }),
						            "4_2B": new Howl({
						                urls: [ "../media/4_2B.mp3" ]
						            }),
						            "4_2C": new Howl({
						                urls: [ "../media/4_2C.mp3" ]
						            }),
						            "4_2Cs": new Howl({
						                urls: [ "../media/4_2Cs.mp3" ]
						            }),
						            "4_2D": new Howl({
						                urls: [ "../media/4_2D.mp3" ]
						            }),
						            "4_2Ds": new Howl({
						                urls: [ "../media/4_2Ds.mp3" ]
						            }),
						            "4_2E": new Howl({
						                urls: [ "../media/4_2E.mp3" ]
						            }),
						            "4_2F": new Howl({
						                urls: [ "../media/4_2F.mp3" ]
						            }),
						            "4_2Fs": new Howl({
						                urls: [ "../media/4_2Fs.mp3" ]
						            }),
						            "4_2G": new Howl({
						                urls: [ "../media/4_2G.mp3" ]
						            }),
						            "4_2Gs": new Howl({
						                urls: [ "../media/4_2Gs.mp3" ]
						            }),
						            "4_3A": new Howl({
						                urls: [ "../media/4_3A.mp3" ]
						            }),
						            "4_3As": new Howl({
						                urls: [ "../media/4_3As.mp3" ]
						            }),
						            "4_3B": new Howl({
						                urls: [ "../media/4_3B.mp3" ]
						            }),

						            //Timbre 5
						            "5_1C": new Howl({
						                urls: [ "../media/5_1C.mp3" ]
						            }),
						            "5_1Cs": new Howl({
						                urls: [ "../media/5_1Cs.mp3" ]
						            }),
						            "5_1D": new Howl({
						                urls: [ "../media/5_1D.mp3" ]
						            }),
						            "5_1Ds": new Howl({
						                urls: [ "../media/5_1Ds.mp3" ]
						            }),
						            "5_1E": new Howl({
						                urls: [ "../media/5_1E.mp3" ]
						            }),
						            "5_1F": new Howl({
						                urls: [ "../media/5_1F.mp3" ]
						            }),
						            "5_1Fs": new Howl({
						                urls: [ "../media/5_1Fs.mp3" ]
						            }),
						            "5_1G": new Howl({
						                urls: [ "../media/5_1G.mp3" ]
						            }),
						            "5_1Gs": new Howl({
						                urls: [ "../media/5_1Gs.mp3" ]
						            }),
						            "5_2A": new Howl({
						                urls: [ "../media/5_2A.mp3" ]
						            }),
						            "5_2As": new Howl({
						                urls: [ "../media/5_2As.mp3" ]
						            }),
						            "5_2B": new Howl({
						                urls: [ "../media/5_2B.mp3" ]
						            }),
						            "5_2C": new Howl({
						                urls: [ "../media/5_2C.mp3" ]
						            }),
						            "5_2Cs": new Howl({
						                urls: [ "../media/5_2Cs.mp3" ]
						            }),
						            "5_2D": new Howl({
						                urls: [ "../media/5_2D.mp3" ]
						            }),
						            "5_2Ds": new Howl({
						                urls: [ "../media/5_2Ds.mp3" ]
						            }),
						            "5_2E": new Howl({
						                urls: [ "../media/5_2E.mp3" ]
						            }),
						            "5_2F": new Howl({
						                urls: [ "../media/5_2F.mp3" ]
						            }),
						            "5_2Fs": new Howl({
						                urls: [ "../media/5_2Fs.mp3" ]
						            }),
						            "5_2G": new Howl({
						                urls: [ "../media/5_2G.mp3" ]
						            }),
						            "5_2Gs": new Howl({
						                urls: [ "../media/5_2Gs.mp3" ]
						            }),
						            "5_3A": new Howl({
						                urls: [ "../media/5_3A.mp3" ]
						            }),
						            "5_3As": new Howl({
						                urls: [ "../media/5_3As.mp3" ]
						            }),
						            "5_3B": new Howl({
						                urls: [ "../media/5_3B.mp3" ]
						            }),

						            //Timbre 6
						            "6_1C": new Howl({
						                urls: [ "../media/6_1C.mp3" ]
						            }),
						            "6_1Cs": new Howl({
						                urls: [ "../media/6_1Cs.mp3" ]
						            }),
						            "6_1D": new Howl({
						                urls: [ "../media/6_1D.mp3" ]
						            }),
						            "6_1Ds": new Howl({
						                urls: [ "../media/6_1Ds.mp3" ]
						            }),
						            "6_1E": new Howl({
						                urls: [ "../media/6_1E.mp3" ]
						            }),
						            "6_1F": new Howl({
						                urls: [ "../media/6_1F.mp3" ]
						            }),
						            "6_1Fs": new Howl({
						                urls: [ "../media/6_1Fs.mp3" ]
						            }),
						            "6_1G": new Howl({
						                urls: [ "../media/6_1G.mp3" ]
						            }),
						            "6_1Gs": new Howl({
						                urls: [ "../media/6_1Gs.mp3" ]
						            }),
						            "6_2A": new Howl({
						                urls: [ "../media/6_2A.mp3" ]
						            }),
						            "6_2As": new Howl({
						                urls: [ "../media/6_2As.mp3" ]
						            }),
						            "6_2B": new Howl({
						                urls: [ "../media/6_2B.mp3" ]
						            }),
						            "6_2C": new Howl({
						                urls: [ "../media/6_2C.mp3" ]
						            }),
						            "6_2Cs": new Howl({
						                urls: [ "../media/6_2Cs.mp3" ]
						            }),
						            "6_2D": new Howl({
						                urls: [ "../media/6_2D.mp3" ]
						            }),
						            "6_2Ds": new Howl({
						                urls: [ "../media/6_2Ds.mp3" ]
						            }),
						            "6_2E": new Howl({
						                urls: [ "../media/6_2E.mp3" ]
						            }),
						            "6_2F": new Howl({
						                urls: [ "../media/6_2F.mp3" ]
						            }),
						            "6_2Fs": new Howl({
						                urls: [ "../media/6_2Fs.mp3" ]
						            }),
						            "6_2G": new Howl({
						                urls: [ "../media/6_2G.mp3" ]
						            }),
						            "6_2Gs": new Howl({
						                urls: [ "../media/6_2Gs.mp3" ]
						            }),
						            "6_3A": new Howl({
						                urls: [ "../media/6_3A.mp3" ]
						            }),
						            "6_3As": new Howl({
						                urls: [ "../media/6_3As.mp3" ]
						            }),
						            "6_3B": new Howl({
						                urls: [ "../media/6_3B.mp3" ]
						            })

						    }; 

						    lockEvent = {};
						    $(".consoleDescription").bind("selectstart dragstart", function(ev) {
						        return ev.preventDefault(), !1;
						    });

						    // Select the timbre
							$.fn.labelauty = function (tag, tag2) {
        
        						rdochecked(tag);

        
						        if (tag2 == "rdo") {
						            $(".rdobox").click(function () {
						                $(this).prev().prop("checked", "checked");
						                rdochecked(tag);
						                selectTimbre = $(this).children().eq(1).attr("class");
						                $(".timbreKey").hide();
        								$("#"+selectTimbre+"Key").show();

        								$(window).bind("keydown keyup", function(ev) {
						       
						                    var keyNo = ev.which,
						                    	$key = $('[data-key="' + selectTimbre + '_' + keyNo + '"]'), 
							        			note = $key.attr("data-note");

									        note && ("keydown" == ev.type ? 
									        	lockEvent[keyNo] || (
									        		notes[note].play(), 
									        		lockEvent[keyNo] = !0, 
									        		$key.addClass("active"), 
									        		$key.parent().addClass("active")) 
									        	: 
									        	"keyup" == ev.type && (
									        		lockEvent[keyNo] = !1, 
									        		$key.removeClass("active"), 
									        		$key.parent().removeClass("active"))
							        		);
						        		});

						            });

						        } else {
						            $(".chkbox").click(function () {
						                
						                if ($(this).prev().prop("checked") == true) {
						                    $(this).prev().removeAttr("checked");
						                }
						                else {
						                    $(this).prev().prop("checked", "checked");
						                }
						                rdochecked(tag);
						            });
						        }
    						};
        
					        function rdochecked(tag) {
					            $('.' + tag).each(function (i) {
					                var rdobox = $('.' + tag).eq(i).next();
					                if ($('.' + tag).eq(i).prop("checked") == false) {
					                    rdobox.removeClass("checked");
					                    rdobox.addClass("unchecked");
					                    rdobox.find(".check-image").css("background", "url(images/input-unchecked.png)");
					                }
					                else {
					                    rdobox.removeClass("unchecked");
					                    rdobox.addClass("checked");
					                    rdobox.find(".check-image").css("background", "url(images/input-checked.png)");
					                }
					            });
					        };

        					$(".rdolist").labelauty("rdolist", "rdo");

        					

						    $(".key > span").mousedown(function() {
						        var me = $(this), 
						        	noteClick = me.attr("data-note");
						        notes[noteClick].play();
						    });
        				       																	
						};

						return { init : init };

				})();

				Page.init();
			
			});

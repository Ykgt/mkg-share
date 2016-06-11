module.exports = function(e) {
    function t(r) {
        if (i[r]) return i[r].exports;
        var n = i[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports;
    }
    var i = {};
    return t.m = e, t.c = i, t.p = "/", t(0);
}([ function(e, t, i) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, i, r) {
            return i && e(t.prototype, i), r && e(t, r), t;
        };
    }();
    i(1);
    var o = function() {
        function e(t, i) {
            r(this, e), this.selector = t, this.options = {
                mode: "expanded",
                style: "basic",
                text: null,
                setTexts: null,
                size: null,
                url: window.location.href,
                title: this._defaultTitle(),
                image: this._defaultImage(),
                description: this._defaultDescription(),
                facebook: !0,
                facebookAppId: 677755208947007,
                googleplus: !0,
                linkedin: !0,
                pinterest: !0,
                reddit: !0,
                twitter: !0,
                email: !0,
                whatsapp: !0,
                sms: !0
            }, this.isMobile = !1, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (this.isMobile = !0), 
            this._networks = {
                facebook: {
                    className: "facebook",
                    url: "https://www.facebook.com/sharer/sharer.php",
                    text: "SHARE",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {
                        u: "$url"
                    },
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "",
                        scriptContent: "(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = \"//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=' + this.options.facebookAppId + '\";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));",
                        addContent: '<div class="fb-share-button" data-href="$:url" data-layout="button_count"></div>'
                    }
                },
                googleplus: {
                    url: "https://plus.google.com/share",
                    text: "SHARE",
                    className: "googleplus",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {
                        url: "$url"
                    },
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "https://apis.google.com/js/platform.js",
                        scriptContent: "",
                        addContent: '<div class="g-plus" data-action="share" data-annotation="bubble" data-height="20" data-href="$:url"></div>'
                    }
                },
                linkedin: {
                    url: "https://www.linkedin.com/shareArticle",
                    text: "SHARE",
                    className: "linkedin",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {
                        mini: "true",
                        url: "$:url"
                    },
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "//platform.linkedin.com/in.js",
                        scriptContent: "",
                        addContent: '<script type="IN/Share" data-url="$:url" data-counter="right"></script>'
                    }
                },
                pinterest: {
                    url: "https://www.pinterest.com/pin/create/button",
                    text: "PIN",
                    className: "pinterest",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {
                        url: "$url",
                        media: "$image",
                        description: "$title"
                    },
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "//assets.pinterest.com/js/pinit.js",
                        scriptContent: "",
                        scriptAttr: {
                            async: "",
                            defer: ""
                        },
                        addContent: '<a data-pin-do="buttonPin" href="https://www.pinterest.com/pin/create/button/?url=$:url&media=$:img&description=$description"></a>'
                    }
                },
                reddit: {
                    url: "http://www.reddit.com/submit",
                    text: "SHARE",
                    className: "reddit",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {},
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "",
                        scriptContent: "",
                        addContent: '<a href="//www.reddit.com/submit" onclick="window.location = \'//www.reddit.com/submit?url=$url\'; return false"> <img src="//www.redditstatic.com/spreddit8.gif" style="height:20px" alt="submit to reddit" border="0" /> </a>'
                    }
                },
                twitter: {
                    url: "https://twitter.com/intent/tweet",
                    text: "TWEET",
                    className: "twitter",
                    mobileOnly: !1,
                    openPopUp: !0,
                    datas: {
                        text: "$title",
                        url: "$url"
                    },
                    "native": !0,
                    nativeProps: {
                        scriptSrc: "",
                        scriptContent: "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');",
                        addContent: '<a href="https://twitter.com/share" class="twitter-share-button" data-url="$:url" data-text="$:title">Tweet</a>'
                    }
                },
                whatsapp: {
                    url: "whatsapp://send",
                    text: "SEND",
                    className: "whatsapp",
                    mobileOnly: !0,
                    openPopUp: !1,
                    datas: {
                        text: "$url"
                    },
                    "native": !1,
                    nativeProps: {}
                },
                email: {
                    url: "mailto:@",
                    text: "MAIL",
                    className: "email",
                    mobileOnly: !1,
                    openPopUp: !1,
                    datas: {
                        subject: "$title",
                        body: "$url"
                    },
                    "native": !1,
                    nativeProps: {}
                },
                sms: {
                    url: "sms:",
                    text: "SMS",
                    className: "sms",
                    mobileOnly: !0,
                    openPopUp: !1,
                    datas: {
                        body: "$title $url"
                    },
                    "native": !1,
                    nativeProps: {}
                }
            };
            for (var n in i) this.options[n] = i[n];
            if (this.options.setTexts) {
                var o = this.options.setTexts;
                for (var s in o) this._networks.hasOwnProperty(s) && (this._networks[s].text = o[s]);
            }
            "native" === this.options.style && (this.options.size = "small");
            for (var a = document.querySelectorAll(t), l = 0; l < a.length; l++) this._init(a[l]);
        }
        return n(e, [ {
            key: "toRFC3986",
            value: function(e) {
                var t = encodeURIComponent(e);
                return t.replace(/[!'()*]/g, function(e) {
                    return "%" + e.charCodeAt(0).toString(16);
                });
            }
        }, {
            key: "_addScript",
            value: function(e, t) {
                var i = t.scriptSrc, r = t.scriptContent, n = t.scriptAttr, o = document.querySelector(".mshare_metacontainer");
                if (!o) {
                    var s = document.createElement("div");
                    s.className = "mshare_metacontainer", document.body.insertBefore(s, document.body.firstChild), 
                    o = s;
                }
                if ((i || r) && !o.querySelector("script#" + e)) {
                    var a = document.createElement("script");
                    if (a.setAttribute("type", "text/javascript"), a.setAttribute("id", e), i && a.setAttribute("src", i), 
                    r && (a.innerHTML = r), n) for (var l in n) a.setAttribute(l, n[l]);
                    o.appendChild(a);
                }
            }
        }, {
            key: "_init",
            value: function(e) {
                var t = '<div class="mshare mshare--' + this.options.mode + " " + ("native" === this.options.style ? "mshare--native" : "mshare-nonative") + '">', i = void 0, r = void 0, n = void 0, o = void 0;
                e.getAttribute("data-mshare-title") && (i = e.getAttribute("data-mshare-title")), 
                e.getAttribute("data-mshare-description") && (n = e.getAttribute("data-mshare-description")), 
                e.getAttribute("data-mshare-image") && (r = e.getAttribute("data-mshare-image")), 
                e.getAttribute("data-mshare-url") && (o = e.getAttribute("data-mshare-url"));
                var s = this.options.text;
                null === this.options.text && "expanded" === this.options.mode && (s = !0);
                for (var a in this._networks) {
                    var l = this._networks[a];
                    if ((this.isMobile || !this.isMobile && !l.mobileOnly) && this.options[l.className]) if ("native" !== this.options.style) {
                        var c = "";
                        for (var p in l.datas) {
                            c += "" === c ? "?" : "&";
                            var d = l.datas[p];
                            d = d.replace("$title", i ? this.toRFC3986(i) : this.toRFC3986(this.options.title)), 
                            d = d.replace("$image", r ? this.toRFC3986(r) : this.toRFC3986(this.options.image)), 
                            d = d.replace("$description", n ? this.toRFC3986(n) : this.toRFC3986(this.options.description)), 
                            d = d.replace("$url", o ? this.toRFC3986(o) : this.toRFC3986(this.options.url)), 
                            d = d.replace("$:title", i ? i : this.options.title), d = d.replace("$:image", r ? r : this.options.image), 
                            d = d.replace("$:description", n ? n : this.options.description), d = d.replace("$:url", o ? o : this.options.url), 
                            c += p + "=" + d;
                        }
                        t += '<a href="' + (l.url + c) + '" class="mshare-item' + (l.openPopUp ? " mshare-item--popup" : "") + " mshare-item--" + l.className + '">' + (s ? l.text : "") + "</a>";
                    } else if (l["native"]) {
                        this._addScript(l.className, l.nativeProps);
                        var m = l.nativeProps.addContent;
                        m = m.replace("$title", i ? this.toRFC3986(i) : this.toRFC3986(this.options.title)), 
                        m = m.replace("$image", r ? this.toRFC3986(r) : this.toRFC3986(this.options.image)), 
                        m = m.replace("$description", n ? this.toRFC3986(n) : this.toRFC3986(this.options.description)), 
                        m = m.replace("$url", o ? this.toRFC3986(o) : this.toRFC3986(this.options.url)), 
                        m = m.replace("$:title", i ? i : this.options.title), m = m.replace("$:image", r ? r : this.options.image), 
                        m = m.replace("$:description", n ? n : this.options.description), m = m.replace("$:url", o ? o : this.options.url), 
                        t += '<div class="mshare-native mshare-native--' + l.className + '">' + m + "</div>";
                    }
                }
                t += "</div>", e.innerHTML += t, e.className += " mshare_container";
                var u = e.querySelector(".mshare");
                this.options.size && (u.className += " mshare--" + this.options.size), "pane" === this.options.mode && (e.className += " mshare--button", 
                e.addEventListener("click", this.toggle.bind(this, e)), u.className += " mshare--close", 
                "native" !== this.options.style && (u.style.left = -u.offsetWidth / 2 + e.offsetWidth / 2 + "px", 
                u.getBoundingClientRect().left < 0 && (u.style.left = -1 * e.getBoundingClientRect().left + "px"), 
                u.getBoundingClientRect().left > document.documentElement.clientWidth - u.offsetWidth && (u.style.left = document.documentElement.clientWidth - e.getBoundingClientRect().left - u.offsetWidth + "px")));
                for (var h = e.querySelectorAll(".mshare-item--popup"), f = 0; f < h.length; f++) h[f].addEventListener("click", this._shareOpen.bind(h[f]));
            }
        }, {
            key: "_shareOpen",
            value: function(e) {
                e.preventDefault();
                var t = {
                    width: 500,
                    height: 350
                };
                t.top = screen.height / 2 - t.height / 2, t.left = screen.width / 2 - t.width / 2, 
                window.open(this.href, "targetWindow", "\n            toolbar=no,\n            location=no,\n            status=no,\n            menubar=no,\n            scrollbars=yes,\n            resizable=yes,\n            left=" + t.left + ",\n            top=" + t.top + ",\n            width=" + t.width + ",\n            height=" + t.height + "\n          ");
            }
        }, {
            key: "open",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? this.selector : arguments[0];
                if ("string" == typeof e) for (var t = document.querySelectorAll(e), i = 0; i < t.length; i++) {
                    var r = t[i].querySelector(".mshare");
                    r.className = r.className.replace("mshare--close", "mshare--open");
                } else {
                    var n = e.querySelector(".mshare");
                    n.className = n.className.replace("mshare--close", "mshare--open");
                }
            }
        }, {
            key: "close",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? this.selector : arguments[0];
                if ("string" == typeof e) for (var t = document.querySelectorAll(e), i = 0; i < t.length; i++) {
                    var r = t[i].querySelector(".mshare");
                    r.className = r.className.replace("mshare--open", "mshare--close");
                } else {
                    var n = e.querySelector(".mshare");
                    n.className = n.className.replace("mshare--open", "mshare--close");
                }
            }
        }, {
            key: "toggle",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? this.selector : arguments[0];
                if ("string" == typeof e) for (var t = document.querySelectorAll(e), i = 0; i < t.length; i++) {
                    var r = t[i].querySelector(".mshare");
                    r.className.indexOf("mshare--open") > 0 ? this.close(t[i]) : this.open(t[i]);
                } else {
                    var n = e.querySelector(".mshare");
                    n.className.indexOf("mshare--open") > 0 ? this.close(e) : this.open(e);
                }
            }
        }, {
            key: "_defaultTitle",
            value: function() {
                var e = void 0;
                return (e = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) ? e.getAttribute("content") : (e = document.querySelector("title")) ? e.textContent || e.innerText : void 0;
            }
        }, {
            key: "_defaultImage",
            value: function() {
                var e = void 0;
                return (e = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) ? e.getAttribute("content") : void 0;
            }
        }, {
            key: "_defaultDescription",
            value: function() {
                var e = void 0;
                return (e = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) ? e.getAttribute("content") : "";
            }
        } ]), e;
    }();
    t["default"] = o;
}, function(e, t, i) {
    var r = i(2);
    "string" == typeof r && (r = [ [ e.id, r, "" ] ]);
    i(4)(r, {});
    r.locals && (e.exports = r.locals);
}, function(e, t, i) {
    t = e.exports = i(3)(), t.push([ e.id, ".mshare{font-size:0;text-align:center;white-space:nowrap;overflow:hidden/*!owner element*/}.mshare--pane{position:absolute;top:-45px;left:50%;z-index:1}.mshare-item{height:40px;padding:0 12px;color:#fff;cursor:pointer;display:inline-block;line-height:40px;text-decoration:none;text-indent:5px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:manipulation;touch-action:manipulation}.mshare-item:before{content:'';width:25px;height:100%;display:block;float:left;line-height:40px;vertical-align:middle}.mshare-item--email{background-color:#4a586f}.mshare-item--facebook{background-color:#3b5998}.mshare-item--googleplus{background-color:#e34429}.mshare-item--linkedin{background-color:#027bb6}.mshare-item--pinterest{background-color:#c5282f}.mshare-item--reddit{background-color:#a1caf2}.mshare-item--twitter{background-color:#27aae1}.mshare-item--whatsapp{background-color:#25d366}.mshare-item--sms{background-color:#63908d}.mshare-native{display:inline-block;font-size:1rem;vertical-align:top;padding:4px 6px;min-width:52px}.mshare_container{position:relative}.mshare--open:not(.mshare--native){height:40px;visibility:visible;transform:translateZ(0);opacity:1;transition:transform .45s cubic-bezier(.515,.57,.11,.98),opacity .45s cubic-bezier(.515,.57,.11,.98),height 0ms}.mshare--close:not(.mshare--native){height:0;transform:translate3d(0,20px,0);opacity:0;transition:transform .35s cubic-bezier(.515,.57,.11,.98),opacity .35s cubic-bezier(.515,.57,.11,.98),height 0ms .35s;pointer-events:none}.mshare--open.mshare--native{height:40px;visibility:visible;transform:translate3d(-50%,0,0);opacity:1;transition:transform .45s cubic-bezier(.515,.57,.11,.98),opacity .45s cubic-bezier(.515,.57,.11,.98),height 0ms}.mshare--close.mshare--native{height:0;transform:translate3d(-50%,20px,0);opacity:0;transition:transform .35s cubic-bezier(.515,.57,.11,.98),opacity .35s cubic-bezier(.515,.57,.11,.98),height 0ms .35s;pointer-events:none}.mshare--button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:manipulation;touch-action:manipulation}.mshare--expanded{margin:1em}.mshare--expanded .mshare-item{margin:0 5px;padding:0 15px}.mshare--small{height:30px;top:-35px}.mshare--small .mshare-item{height:30px;line-height:30px;font-size:.8rem;padding:0 8px}.mshare--small .mshare-item:before{width:22px}.mshare--small.mshare--expanded .mshare-item{padding:0 14px}", "" ]);
}, function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var i = this[t];
                i[2] ? e.push("@media " + i[2] + "{" + i[1] + "}") : e.push(i[1]);
            }
            return e.join("");
        }, e.i = function(t, i) {
            "string" == typeof t && (t = [ [ null, t, "" ] ]);
            for (var r = {}, n = 0; n < this.length; n++) {
                var o = this[n][0];
                "number" == typeof o && (r[o] = !0);
            }
            for (n = 0; n < t.length; n++) {
                var s = t[n];
                "number" == typeof s[0] && r[s[0]] || (i && !s[2] ? s[2] = i : i && (s[2] = "(" + s[2] + ") and (" + i + ")"), 
                e.push(s));
            }
        }, e;
    };
}, function(e, t, i) {
    function r(e, t) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i], n = u[r.id];
            if (n) {
                n.refs++;
                for (var o = 0; o < n.parts.length; o++) n.parts[o](r.parts[o]);
                for (;o < r.parts.length; o++) n.parts.push(c(r.parts[o], t));
            } else {
                for (var s = [], o = 0; o < r.parts.length; o++) s.push(c(r.parts[o], t));
                u[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                };
            }
        }
    }
    function n(e) {
        for (var t = [], i = {}, r = 0; r < e.length; r++) {
            var n = e[r], o = n[0], s = n[1], a = n[2], l = n[3], c = {
                css: s,
                media: a,
                sourceMap: l
            };
            i[o] ? i[o].parts.push(c) : t.push(i[o] = {
                id: o,
                parts: [ c ]
            });
        }
        return t;
    }
    function o(e, t) {
        var i = v(), r = y[y.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? i.insertBefore(t, r.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild), 
        y.push(t); else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            i.appendChild(t);
        }
    }
    function s(e) {
        e.parentNode.removeChild(e);
        var t = y.indexOf(e);
        t >= 0 && y.splice(t, 1);
    }
    function a(e) {
        var t = document.createElement("style");
        return t.type = "text/css", o(e, t), t;
    }
    function l(e) {
        var t = document.createElement("link");
        return t.rel = "stylesheet", o(e, t), t;
    }
    function c(e, t) {
        var i, r, n;
        if (t.singleton) {
            var o = b++;
            i = g || (g = a(t)), r = p.bind(null, i, o, !1), n = p.bind(null, i, o, !0);
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = l(t), 
        r = m.bind(null, i), n = function() {
            s(i), i.href && URL.revokeObjectURL(i.href);
        }) : (i = a(t), r = d.bind(null, i), n = function() {
            s(i);
        });
        return r(e), function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r(e = t);
            } else n();
        };
    }
    function p(e, t, i, r) {
        var n = i ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = w(t, n); else {
            var o = document.createTextNode(n), s = e.childNodes;
            s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
        }
    }
    function d(e, t) {
        var i = t.css, r = t.media;
        if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = i; else {
            for (;e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(i));
        }
    }
    function m(e, t) {
        var i = t.css, r = t.sourceMap;
        r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var n = new Blob([ i ], {
            type: "text/css"
        }), o = e.href;
        e.href = URL.createObjectURL(n), o && URL.revokeObjectURL(o);
    }
    var u = {}, h = function(e) {
        var t;
        return function() {
            return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
        };
    }, f = h(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }), v = h(function() {
        return document.head || document.getElementsByTagName("head")[0];
    }), g = null, b = 0, y = [];
    e.exports = function(e, t) {
        t = t || {}, "undefined" == typeof t.singleton && (t.singleton = f()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
        var i = n(e);
        return r(i, t), function(e) {
            for (var o = [], s = 0; s < i.length; s++) {
                var a = i[s], l = u[a.id];
                l.refs--, o.push(l);
            }
            if (e) {
                var c = n(e);
                r(c, t);
            }
            for (var s = 0; s < o.length; s++) {
                var l = o[s];
                if (0 === l.refs) {
                    for (var p = 0; p < l.parts.length; p++) l.parts[p]();
                    delete u[l.id];
                }
            }
        };
    };
    var w = function() {
        var e = [];
        return function(t, i) {
            return e[t] = i, e.filter(Boolean).join("\n");
        };
    }();
} ]);
//# sourceMappingURL=mkg-share.npm.js.map
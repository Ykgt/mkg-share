'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mShare = function () {
    function mShare(selector, options) {
        _classCallCheck(this, mShare);

        this.selector = selector;
        this.options = {
            style: 'expanded', //expandedn, pane
            text: null, //default auto, u can set true, false
            url: window.location.href,
            title: this._defaultTitle(),
            image: this._defaultImage(),
            description: this._defaultDescription(),
            facebook: true,
            googleplus: true,
            linkedin: true,
            pinterest: true,
            reddit: true,
            twitter: true,
            email: true,
            whatsapp: true,
            sms: true
        };

        this.isMobile = false;
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) this.isMobile = true;

        this._networks = {
            facebook: {
                url: 'https://www.facebook.com/sharer/sharer.php',
                text: 'SHARE',
                className: 'facebook',
                mobileOnly: false,
                openPopUp: true,
                datas: {
                    u: '$url'
                }
            },
            googleplus: {
                url: 'https://plus.google.com/share',
                text: 'SHARE',
                className: 'googleplus',
                mobileOnly: false,
                openPopUp: true,
                datas: {
                    url: '$url'
                }
            },
            linkedin: {
                url: 'https://www.linkedin.com/shareArticle',
                text: 'SHARE',
                className: 'linkedin',
                mobileOnly: false,
                openPopUp: true,
                datas: {
                    mini: 'true',
                    url: '$url'
                }
            },
            pinterest: {
                url: 'https://www.pinterest.com/pin/create/button',
                text: 'PIN',
                className: 'pinterest',
                mobileOnly: false,
                openPopUp: true,
                datas: {
                    url: '$url',
                    media: '$image',
                    description: '$title'
                }
            },
            reddit: {
                url: 'http://www.reddit.com/submit',
                text: 'SHARE',
                className: 'reddit',
                mobileOnly: false,
                openPopUp: true,
                datas: {}
            },
            twitter: {
                url: 'https://twitter.com/intent/tweet',
                text: 'TWEET',
                className: 'twitter',
                mobileOnly: false,
                openPopUp: true,
                datas: {
                    text: '$title',
                    url: '$url'
                }
            },
            whatsapp: {
                url: 'whatsapp://send',
                text: 'SEND',
                className: 'whatsapp',
                mobileOnly: true,
                openPopUp: false,
                datas: {
                    text: '$url'
                }
            },
            email: {
                url: 'mailto:@',
                text: 'MAIL',
                className: 'email',
                mobileOnly: false,
                openPopUp: false,
                datas: {
                    subject: '$title',
                    body: '$url'
                }
            },
            sms: {
                url: 'sms:',
                text: 'SMS',
                className: 'sms',
                mobileOnly: true,
                openPopUp: false,
                datas: {
                    body: '$title $url'
                }
            }
        };

        for (var item in options) {
            this.options[item] = options[item];
        }

        var matches = document.querySelectorAll(selector);
        for (var i = 0; i < matches.length; i++) {
            this._init(matches[i]);
        }
    }

    _createClass(mShare, [{
        key: 'toRFC3986',
        value: function toRFC3986(s) {
            var tmp = encodeURIComponent(s);
            return tmp.replace(/[!'()*]/g, function (c) {
                return '%' + c.charCodeAt(0).toString(16);
            });
        }
    }, {
        key: '_init',
        value: function _init(element) {
            var template = '<div class="mshare mshare--' + this.options.style + '">';
            var customTitle = void 0,
                customImage = void 0,
                customDescription = void 0,
                customURL = void 0;
            if (element.getAttribute('data-mshare-title')) customTitle = element.getAttribute('data-mshare-title');
            if (element.getAttribute('data-mshare-description')) customDescription = element.getAttribute('data-mshare-description');
            if (element.getAttribute('data-mshare-image')) customImage = element.getAttribute('data-mshare-image');
            if (element.getAttribute('data-mshare-url')) customURL = element.getAttribute('data-mshare-url');

            var isTextDisplay = this.options.text;
            if (this.options.text === null && this.options.style === 'expanded') isTextDisplay = true;
            for (var _i in this._networks) {
                var network = this._networks[_i];
                var datas = "";
                if ((this.isMobile || !this.isMobile && !network.mobileOnly) && this.options[network.className]) {
                    for (var data in network.datas) {
                        datas += datas === '' ? '?' : '&';
                        var dataValue = network.datas[data];
                        dataValue = dataValue.replace('$title', customTitle ? customTitle : this.options.title);
                        dataValue = dataValue.replace('$image', customImage ? customImage : this.options.image);
                        dataValue = dataValue.replace('$description', customDescription ? customDescription : this.options.description);
                        dataValue = dataValue.replace('$url', customURL ? customURL : this.options.url);
                        if (network.className === 'linkedin' && data === 'url') {
                            datas += data + '=' + dataValue;
                        } else {
                            datas += data + '=' + this.toRFC3986(dataValue);
                        }
                    }
                    template += '<a href="' + (network.url + datas) + '" class="mshare-item' + (network.openPopUp ? ' mshare--popup' : '') + ' mshare--' + network.className + '">' + (isTextDisplay ? network.text : '') + '</a>';
                }
            }
            //
            template += '</div>';
            element.innerHTML += template;
            element.className += ' mshare--container';
            if (this.options.style === 'pane') {
                element.addEventListener('click', this.toggle.bind(this, element));
                var mshare = element.querySelector('.mshare');
                mshare.className += ' mshare--close';
                mshare.style.left = mshare.offsetWidth / -2 + element.offsetWidth / 2 + 'px';
                if (mshare.getBoundingClientRect().left < 0) {
                    mshare.style.left = mshare.offsetWidth / -2 + element.offsetWidth / 2 - mshare.getBoundingClientRect().left + 'px';
                }
            }
            var items = element.querySelectorAll('.mshare--popup');
            for (var i = 0; i < items.length; i++) {
                items[i].addEventListener('click', this._shareOpen.bind(items[i]));
            }
        }
    }, {
        key: '_shareOpen',
        value: function _shareOpen(e) {
            e.preventDefault();
            var popup = {
                width: 500,
                height: 350
            };
            popup.top = screen.height / 2 - popup.height / 2;
            popup.left = screen.width / 2 - popup.width / 2;
            window.open(this.href, 'targetWindow', '\n            toolbar=no,\n            location=no,\n            status=no,\n            menubar=no,\n            scrollbars=yes,\n            resizable=yes,\n            left=' + popup.left + ',\n            top=' + popup.top + ',\n            width=' + popup.width + ',\n            height=' + popup.height + '\n          ');
        }
    }, {
        key: 'open',
        value: function open() {
            var target = arguments.length <= 0 || arguments[0] === undefined ? this.selector : arguments[0];

            if (typeof target === 'string') {
                var matches = document.querySelectorAll(target);
                for (var i = 0; i < matches.length; i++) {
                    var mshare = matches[i].querySelector('.mshare');
                    mshare.className = mshare.className.replace('mshare--close', 'mshare--open');
                }
            } else {
                var _mshare = target.querySelector('.mshare');
                _mshare.className = _mshare.className.replace('mshare--close', 'mshare--open');
            }
        }
    }, {
        key: 'close',
        value: function close() {
            var target = arguments.length <= 0 || arguments[0] === undefined ? this.selector : arguments[0];

            if (typeof target === 'string') {
                var matches = document.querySelectorAll(target);
                for (var i = 0; i < matches.length; i++) {
                    var mshare = matches[i].querySelector('.mshare');
                    mshare.className = mshare.className.replace('mshare--open', 'mshare--close');
                }
            } else {
                var _mshare2 = target.querySelector('.mshare');
                _mshare2.className = _mshare2.className.replace('mshare--open', 'mshare--close');
            }
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            var target = arguments.length <= 0 || arguments[0] === undefined ? this.selector : arguments[0];

            if (typeof target === 'string') {
                var matches = document.querySelectorAll(target);
                for (var i = 0; i < matches.length; i++) {
                    var mshare = matches[i].querySelector('.mshare');
                    if (mshare.className.indexOf('mshare--open') > 0) {
                        this.close(matches[i]);
                    } else {
                        this.open(matches[i]);
                    }
                }
            } else {
                var _mshare3 = target.querySelector('.mshare');
                if (_mshare3.className.indexOf('mshare--open') > 0) {
                    this.close(target);
                } else {
                    this.open(target);
                }
            }
        }
    }, {
        key: '_defaultTitle',
        value: function _defaultTitle() {
            var content = void 0;
            if (content = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) return content.getAttribute('content');else if (content = document.querySelector('title')) return content.textContent || content.innerText;
        }
    }, {
        key: '_defaultImage',
        value: function _defaultImage() {
            var content = void 0;
            if (content = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) return content.getAttribute('content');
        }
    }, {
        key: '_defaultDescription',
        value: function _defaultDescription() {
            var content = void 0;
            if (content = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) return content.getAttribute('content');else return '';
        }
    }]);

    return mShare;
}();
//# sourceMappingURL=mkg-share.js.map

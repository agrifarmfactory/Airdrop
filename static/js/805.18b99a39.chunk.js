"use strict";
(self.webpackChunkcoinbidex = self.webpackChunkcoinbidex || []).push([
    [805], {
        6805: function(e, n, t) {
            t.r(n), t.d(n, {
                W3mModal: function() {
                    return y
                }
            });
            var i, o, r = t(4165),
                a = t(5861),
                s = t(168),
                c = t(5671),
                l = t(3144),
                d = t(136),
                u = t(9388),
                h = t(6482),
                p = t(9323),
                f = t(8940),
                v = t(3756),
                w = (0, f.iv)(i || (i = (0, s.Z)(["\n  :host {\n    z-index: var(--w3m-z-index);\n    display: block;\n    backface-visibility: hidden;\n    will-change: opacity;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    pointer-events: none;\n    opacity: 0;\n    background-color: var(--wui-cover);\n    transition: opacity 0.2s var(--wui-ease-out-power-2);\n    will-change: opacity;\n  }\n\n  :host(.open) {\n    opacity: 1;\n  }\n\n  @keyframes zoom-in {\n    0% {\n      transform: scale(0.95) translateY(0);\n    }\n    100% {\n      transform: scale(1) translateY(0);\n    }\n  }\n\n  @keyframes slide-in {\n    0% {\n      transform: scale(1) translateY(50px);\n    }\n    100% {\n      transform: scale(1) translateY(0);\n    }\n  }\n\n  wui-card {\n    max-width: var(--w3m-modal-width);\n    width: 100%;\n    position: relative;\n    animation-duration: 0.2s;\n    animation-name: zoom-in;\n    animation-fill-mode: backwards;\n    animation-timing-function: var(--wui-ease-out-power-2);\n    outline: none;\n  }\n\n  wui-flex {\n    overflow-x: hidden;\n    overflow-y: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  @media (max-height: 700px) and (min-width: 431px) {\n    wui-flex {\n      align-items: flex-start;\n    }\n\n    wui-card {\n      margin: var(--wui-spacing-xxl) 0px;\n    }\n  }\n\n  @media (max-width: 430px) {\n    wui-flex {\n      align-items: flex-end;\n    }\n\n    wui-card {\n      max-width: 100%;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      border-bottom: none;\n      animation-name: slide-in;\n    }\n  }\n"]))),
                b = function(e, n, t, i) {
                    var o, r = arguments.length,
                        a = r < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, t) : i;
                    if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) a = Reflect.decorate(e, n, t, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(n, t, a) : o(n, t)) || a);
                    return r > 3 && a && Object.defineProperty(n, t, a), a
                },
                m = "scroll-lock",
                y = function(e) {
                    (0, d.Z)(i, e);
                    var n = (0, u.Z)(i);

                    function i() {
                        var e;
                        return (0, c.Z)(this, i), (e = n.call(this)).unsubscribe = [], e.abortController = void 0, e.open = h.IN.state.open, e.caipAddress = h.Ni.state.caipAddress, e.isSiweEnabled = h.hD.state.isSiweEnabled, e.connected = h.Ni.state.isConnected, e.loading = h.IN.state.loading, e.initializeTheming(), h.QT.prefetch(), e.unsubscribe.push(h.IN.subscribeKey("open", (function(n) {
                            return n ? e.onOpen() : e.onClose()
                        })), h.IN.subscribeKey("loading", (function(n) {
                            e.loading = n, e.onNewAddress(h.Ni.state.caipAddress)
                        })), h.Ni.subscribeKey("isConnected", (function(n) {
                            return e.connected = n
                        })), h.Ni.subscribeKey("caipAddress", (function(n) {
                            return e.onNewAddress(n)
                        })), h.hD.subscribeKey("isSiweEnabled", (function(n) {
                            return e.isSiweEnabled = n
                        }))), h.Xs.sendEvent({
                            type: "track",
                            event: "MODAL_LOADED"
                        }), e
                    }
                    return (0, l.Z)(i, [{
                        key: "disconnectedCallback",
                        value: function() {
                            this.unsubscribe.forEach((function(e) {
                                return e()
                            })), this.onRemoveKeyboardListener()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.open ? (0, f.dy)(o || (o = (0, s.Z)(["\n          <wui-flex @click=", '>\n            <wui-card role="alertdialog" aria-modal="true" tabindex="0">\n              <w3m-header></w3m-header>\n              <w3m-router></w3m-router>\n              <w3m-snackbar></w3m-snackbar>\n            </wui-card>\n          </wui-flex>\n          <w3m-tooltip></w3m-tooltip>\n        '])), this.onOverlayClick.bind(this)) : null
                        }
                    }, {
                        key: "onOverlayClick",
                        value: function() {
                            var e = (0, a.Z)((0, r.Z)().mark((function e(n) {
                                return (0, r.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n.target !== n.currentTarget) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.next = 3, this.handleClose();
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "handleClose",
                        value: function() {
                            var e = (0, a.Z)((0, r.Z)().mark((function e() {
                                var n;
                                return (0, r.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.isSiweEnabled) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 3, t.e(878).then(t.bind(t, 6878));
                                        case 3:
                                            if (n = e.sent, "success" === n.SIWEController.state.status || !this.connected) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 8, h.lZ.disconnect();
                                        case 8:
                                            h.IN.close();
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "initializeTheming",
                        value: function() {
                            var e = h.u0.state,
                                n = e.themeVariables,
                                t = e.themeMode,
                                i = p.UiHelperUtil.getColorTheme(t);
                            (0, p.initializeTheming)(n, i)
                        }
                    }, {
                        key: "onClose",
                        value: function() {
                            this.open = !1, this.classList.remove("open"), this.onScrollUnlock(), h.KC.hide(), this.onRemoveKeyboardListener()
                        }
                    }, {
                        key: "onOpen",
                        value: function() {
                            this.open = !0, this.classList.add("open"), this.onScrollLock(), this.onAddKeyboardListener()
                        }
                    }, {
                        key: "onScrollLock",
                        value: function() {
                            var e = document.createElement("style");
                            e.dataset.w3m = m, e.textContent = "\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ", document.head.appendChild(e)
                        }
                    }, {
                        key: "onScrollUnlock",
                        value: function() {
                            var e = document.head.querySelector('style[data-w3m="'.concat(m, '"]'));
                            e && e.remove()
                        }
                    }, {
                        key: "onAddKeyboardListener",
                        value: function() {
                            var e, n = this;
                            this.abortController = new AbortController;
                            var t = null === (e = this.shadowRoot) || void 0 === e ? void 0 : e.querySelector("wui-card");
                            null === t || void 0 === t || t.focus(), window.addEventListener("keydown", (function(e) {
                                if ("Escape" === e.key) n.handleClose();
                                else if ("Tab" === e.key) {
                                    var i = e.target.tagName;
                                    !i || i.includes("W3M-") || i.includes("WUI-") || null === t || void 0 === t || t.focus()
                                }
                            }), this.abortController)
                        }
                    }, {
                        key: "onRemoveKeyboardListener",
                        value: function() {
                            var e;
                            null === (e = this.abortController) || void 0 === e || e.abort(), this.abortController = void 0
                        }
                    }, {
                        key: "onNewAddress",
                        value: function() {
                            var e = (0, a.Z)((0, r.Z)().mark((function e(n) {
                                var i, o, a, s, c, l, d, u, p;
                                return (0, r.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.connected && !this.loading) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (i = h.j1.getPlainAddress(this.caipAddress), o = h.j1.getPlainAddress(n), a = h.j1.getNetworkId(this.caipAddress), s = h.j1.getNetworkId(n), this.caipAddress = n, !this.isSiweEnabled) {
                                                e.next = 28;
                                                break
                                            }
                                            return e.next = 10, t.e(878).then(t.bind(t, 6878));
                                        case 10:
                                            return c = e.sent, l = c.SIWEController, e.next = 14, l.getSession();
                                        case 14:
                                            if (!((d = e.sent) && i && o && i !== o)) {
                                                e.next = 21;
                                                break
                                            }
                                            if (null === (u = l.state._client) || void 0 === u || !u.options.signOutOnAccountChange) {
                                                e.next = 20;
                                                break
                                            }
                                            return e.next = 19, l.signOut();
                                        case 19:
                                            this.onSiweNavigation();
                                        case 20:
                                            return e.abrupt("return");
                                        case 21:
                                            if (!(d && a && s && a !== s)) {
                                                e.next = 27;
                                                break
                                            }
                                            if (null === (p = l.state._client) || void 0 === p || !p.options.signOutOnNetworkChange) {
                                                e.next = 26;
                                                break
                                            }
                                            return e.next = 25, l.signOut();
                                        case 25:
                                            this.onSiweNavigation();
                                        case 26:
                                            return e.abrupt("return");
                                        case 27:
                                            this.onSiweNavigation();
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "onSiweNavigation",
                        value: function() {
                            this.open ? h.Pc.push("ConnectingSiwe") : h.IN.open({
                                view: "ConnectingSiwe"
                            })
                        }
                    }]), i
                }(f.oi);
            y.styles = w, b([(0, v.SB)()], y.prototype, "open", void 0), b([(0, v.SB)()], y.prototype, "caipAddress", void 0), b([(0, v.SB)()], y.prototype, "isSiweEnabled", void 0), b([(0, v.SB)()], y.prototype, "connected", void 0), b([(0, v.SB)()], y.prototype, "loading", void 0), y = b([(0, p.customElement)("w3m-modal")], y)
        }
    }
]);
//# sourceMappingURL=805.18b99a39.chunk.js.map
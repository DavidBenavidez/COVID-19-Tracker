let e; let t; let i; let n; let s; let o; let a; let r; let l; let h; let c; let d; let p; let u; let f; let m; let g; let _; let v; let y; let b; let w; let z; let C; let S; let x; let M; let E; let T; let H; let A; let k; let L; let P; let V; let O; let I; let N; let R; const F = (e) => e; const D = typeof window !== 'undefined' && window.customElements != null && void 0 !== window.customElements.polyfillWrapFlushCallback; const B = (e, t, i = null) => { for (;t !== i;) { const i = t.nextSibling; e.removeChild(t), t = i; } }; const U = `{{lit-${String(Math.random()).slice(2)}}}`; const $ = `\x3c!--${U}--\x3e`; const K = new RegExp(`${U}|${$}`); class j {
  constructor(e, t) {
    this.parts = [], this.element = t; const i = []; const n = []; const s = document.createTreeWalker(t.content, 133, null, !1); let o = 0; let a = -1; let r = 0; const { strings: l, values: { length: h } } = e; for (;r < h;) {
      const e = s.nextNode(); if (e !== null) {
        if (a++, e.nodeType === 1) {
          if (e.hasAttributes()) {
            const t = e.attributes; const { length: i } = t; let n = 0; for (let e = 0; e < i; e++)q(t[e].name, '$lit$') && n++; for (;n-- > 0;) {
              const t = l[r]; const i = G.exec(t)[2]; const n = `${i.toLowerCase()}$lit$`; const s = e.getAttribute(n); e.removeAttribute(n); const o = s.split(K); this.parts.push({
                type: 'attribute', index: a, name: i, strings: o,
              }), r += o.length - 1;
            }
          }e.tagName === 'TEMPLATE' && (n.push(e), s.currentNode = e.content);
        } else if (e.nodeType === 3) { const t = e.data; if (t.indexOf(U) >= 0) { const n = e.parentNode; const s = t.split(K); const o = s.length - 1; for (let t = 0; t < o; t++) { let i; let o = s[t]; if (o === '')i = W(); else { const e = G.exec(o); e !== null && q(e[2], '$lit$') && (o = o.slice(0, e.index) + e[1] + e[2].slice(0, -'$lit$'.length) + e[3]), i = document.createTextNode(o); }n.insertBefore(i, e), this.parts.push({ type: 'node', index: ++a }); }s[o] === '' ? (n.insertBefore(W(), e), i.push(e)) : e.data = s[o], r += o; } } else if (e.nodeType === 8) if (e.data === U) { const t = e.parentNode; e.previousSibling !== null && a !== o || (a++, t.insertBefore(W(), e)), o = a, this.parts.push({ type: 'node', index: a }), e.nextSibling === null ? e.data = '' : (i.push(e), a--), r++; } else { let t = -1; for (;(t = e.data.indexOf(U, t + 1)) !== -1;) this.parts.push({ type: 'node', index: -1 }), r++; }
      } else s.currentNode = n.pop();
    } for (const e of i)e.parentNode.removeChild(e);
  }
} const q = (e, t) => { const i = e.length - t.length; return i >= 0 && e.slice(i) === t; }; const Y = (e) => e.index !== -1; const W = () => document.createComment(''); const G = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/; function J(e, t) { const { element: { content: i }, parts: n } = e; const s = document.createTreeWalker(i, 133, null, !1); let o = X(n); let a = n[o]; let r = -1; let l = 0; const h = []; let c = null; for (;s.nextNode();) { r++; const e = s.currentNode; for (e.previousSibling === c && (c = null), t.has(e) && (h.push(e), c === null && (c = e)), c !== null && l++; void 0 !== a && a.index === r;)a.index = c !== null ? -1 : a.index - l, o = X(n, o), a = n[o]; }h.forEach((e) => e.parentNode.removeChild(e)); } const Z = (e) => { let t = e.nodeType === 11 ? 0 : 1; const i = document.createTreeWalker(e, 133, null, !1); for (;i.nextNode();)t++; return t; }; const X = (e, t = -1) => { for (let i = t + 1; i < e.length; i++) { const t = e[i]; if (Y(t)) return i; } return -1; }; const Q = new WeakMap(); const ee = (e) => typeof e === 'function' && Q.has(e); const te = {}; const
  ie = {}; class ne {
  constructor(e, t, i) { this.__parts = [], this.template = e, this.processor = t, this.options = i; }

  update(e) { let t = 0; for (const i of this.__parts) void 0 !== i && i.setValue(e[t]), t++; for (const e of this.__parts) void 0 !== e && e.commit(); }

  _clone() { const e = D ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0); const t = []; const i = this.template.parts; const n = document.createTreeWalker(e, 133, null, !1); let s; let o = 0; let a = 0; let r = n.nextNode(); for (;o < i.length;) if (s = i[o], Y(s)) { for (;a < s.index;)a++, r.nodeName === 'TEMPLATE' && (t.push(r), n.currentNode = r.content), (r = n.nextNode()) === null && (n.currentNode = t.pop(), r = n.nextNode()); if (s.type === 'node') { const e = this.processor.handleTextExpression(this.options); e.insertAfterNode(r.previousSibling), this.__parts.push(e); } else this.__parts.push(...this.processor.handleAttributeExpressions(r, s.name, s.strings, this.options)); o++; } else this.__parts.push(void 0), o++; return D && (document.adoptNode(e), customElements.upgrade(e)), e; }
} const se = ` ${U} `; class oe {
  constructor(e, t, i, n) { this.strings = e, this.values = t, this.type = i, this.processor = n; }

  getHTML() { const e = this.strings.length - 1; let t = ''; let i = !1; for (let n = 0; n < e; n++) { const e = this.strings[n]; const s = e.lastIndexOf('\x3c!--'); i = (s > -1 || i) && e.indexOf('--\x3e', s + 1) === -1; const o = G.exec(e); t += o === null ? e + (i ? se : $) : `${e.substr(0, o.index) + o[1] + o[2]}$lit$${o[3]}${U}`; } return t += this.strings[e], t; }

  getTemplateElement() { const e = document.createElement('template'); return e.innerHTML = this.getHTML(), e; }
} const ae = (e) => e === null || !(typeof e === 'object' || typeof e === 'function'); const re = (e) => Array.isArray(e) || !(!e || !e[Symbol.iterator]); class le {
  constructor(e, t, i) { this.dirty = !0, this.element = e, this.name = t, this.strings = i, this.parts = []; for (let e = 0; e < i.length - 1; e++) this.parts[e] = this._createPart(); }

  _createPart() { return new he(this); }

  _getValue() { const e = this.strings; const t = e.length - 1; let i = ''; for (let n = 0; n < t; n++) { i += e[n]; const t = this.parts[n]; if (void 0 !== t) { const e = t.value; if (ae(e) || !re(e))i += typeof e === 'string' ? e : String(e); else for (const t of e)i += typeof t === 'string' ? t : String(t); } } return i += e[t], i; }

  commit() { this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue())); }
} class he {
  constructor(e) { this.value = void 0, this.committer = e; }

  setValue(e) { e === te || ae(e) && e === this.value || (this.value = e, ee(e) || (this.committer.dirty = !0)); }

  commit() { for (;ee(this.value);) { const e = this.value; this.value = te, e(this); } this.value !== te && this.committer.commit(); }
} class ce {
  constructor(e) { this.value = void 0, this.__pendingValue = void 0, this.options = e; }

  appendInto(e) { this.startNode = e.appendChild(W()), this.endNode = e.appendChild(W()); }

  insertAfterNode(e) { this.startNode = e, this.endNode = e.nextSibling; }

  appendIntoPart(e) { e.__insert(this.startNode = W()), e.__insert(this.endNode = W()); }

  insertAfterPart(e) { e.__insert(this.startNode = W()), this.endNode = e.endNode, e.endNode = this.startNode; }

  setValue(e) { this.__pendingValue = e; }

  commit() { if (this.startNode.parentNode === null) return; for (;ee(this.__pendingValue);) { const e = this.__pendingValue; this.__pendingValue = te, e(this); } const e = this.__pendingValue; e !== te && (ae(e) ? e !== this.value && this.__commitText(e) : e instanceof oe ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : re(e) ? this.__commitIterable(e) : e === ie ? (this.value = ie, this.clear()) : this.__commitText(e)); }

  __insert(e) { this.endNode.parentNode.insertBefore(e, this.endNode); }

  __commitNode(e) { this.value !== e && (this.clear(), this.__insert(e), this.value = e); }

  __commitText(e) { const t = this.startNode.nextSibling; const i = typeof (e = e == null ? '' : e) === 'string' ? e : String(e); t === this.endNode.previousSibling && t.nodeType === 3 ? t.data = i : this.__commitNode(document.createTextNode(i)), this.value = e; }

  __commitTemplateResult(e) { const t = this.options.templateFactory(e); if (this.value instanceof ne && this.value.template === t) this.value.update(e.values); else { const i = new ne(t, e.processor, this.options); const n = i._clone(); i.update(e.values), this.__commitNode(n), this.value = i; } }

  __commitIterable(e) { Array.isArray(this.value) || (this.value = [], this.clear()); const t = this.value; let i; let n = 0; for (const s of e)i = t[n], void 0 === i && (i = new ce(this.options), t.push(i), n === 0 ? i.appendIntoPart(this) : i.insertAfterPart(t[n - 1])), i.setValue(s), i.commit(), n++; n < t.length && (t.length = n, this.clear(i && i.endNode)); }

  clear(e = this.startNode) { B(this.startNode.parentNode, e.nextSibling, this.endNode); }
} class de {
  constructor(e, t, i) { if (this.value = void 0, this.__pendingValue = void 0, i.length !== 2 || i[0] !== '' || i[1] !== '') throw new Error('Boolean attributes can only contain a single expression'); this.element = e, this.name = t, this.strings = i; }

  setValue(e) { this.__pendingValue = e; }

  commit() { for (;ee(this.__pendingValue);) { const e = this.__pendingValue; this.__pendingValue = te, e(this); } if (this.__pendingValue === te) return; const e = !!this.__pendingValue; this.value !== e && (e ? this.element.setAttribute(this.name, '') : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = te; }
} class pe extends le {
  constructor(e, t, i) { super(e, t, i), this.single = i.length === 2 && i[0] === '' && i[1] === ''; }

  _createPart() { return new ue(this); }

  _getValue() { return this.single ? this.parts[0].value : super._getValue(); }

  commit() { this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue()); }
} class ue extends he {} let fe = !1; (() => { try { const e = { get capture() { return fe = !0, !1; } }; window.addEventListener('test', e, e), window.removeEventListener('test', e, e); } catch (e) {} })(); class me {
  constructor(e, t, i) { this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = i, this.__boundHandleEvent = (e) => this.handleEvent(e); }

  setValue(e) { this.__pendingValue = e; }

  commit() { for (;ee(this.__pendingValue);) { const e = this.__pendingValue; this.__pendingValue = te, e(this); } if (this.__pendingValue === te) return; const e = this.__pendingValue; const t = this.value; const i = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive); const n = e != null && (t == null || i); i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = ge(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = te; }

  handleEvent(e) { typeof this.value === 'function' ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e); }
} const ge = (e) => e && (fe ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture); function _e(e) { let t = ve.get(e.type); void 0 === t && (t = { stringsArray: new WeakMap(), keyString: new Map() }, ve.set(e.type, t)); let i = t.stringsArray.get(e.strings); if (void 0 !== i) return i; const n = e.strings.join(U); return i = t.keyString.get(n), void 0 === i && (i = new j(e, e.getTemplateElement()), t.keyString.set(n, i)), t.stringsArray.set(e.strings, i), i; } const ve = new Map(); const
  ye = new WeakMap(); const be = new class {
  handleAttributeExpressions(e, t, i, n) { const s = t[0]; if (s === '.') { return new pe(e, t.slice(1), i).parts; } return s === '@' ? [new me(e, t.slice(1), n.eventContext)] : s === '?' ? [new de(e, t.slice(1), i)] : new le(e, t, i).parts; }

  handleTextExpression(e) { return new ce(e); }
}(); typeof window !== 'undefined' && (window.litHtmlVersions || (window.litHtmlVersions = [])).push('1.2.1'); const we = (e, ...t) => new oe(e, t, 'html', be); const ze = (e, t) => `${e}--${t}`; let Ce = !0; void 0 === window.ShadyCSS ? Ce = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn('Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.'), Ce = !1); const Se = (e) => (t) => { const i = ze(t.type, e); let n = ve.get(i); void 0 === n && (n = { stringsArray: new WeakMap(), keyString: new Map() }, ve.set(i, n)); let s = n.stringsArray.get(t.strings); if (void 0 !== s) return s; const o = t.strings.join(U); if (s = n.keyString.get(o), void 0 === s) { const i = t.getTemplateElement(); Ce && window.ShadyCSS.prepareTemplateDom(i, e), s = new j(t, i), n.keyString.set(o, s); } return n.stringsArray.set(t.strings, s), s; }; const xe = ['html', 'svg']; const Me = new Set(); const Ee = (e, t, i) => { Me.add(e); const n = i ? i.element : document.createElement('template'); const s = t.querySelectorAll('style'); const { length: o } = s; if (o === 0) return void window.ShadyCSS.prepareTemplateStyles(n, e); const a = document.createElement('style'); for (let e = 0; e < o; e++) { const t = s[e]; t.parentNode.removeChild(t), a.textContent += t.textContent; }((e) => { xe.forEach((t) => { const i = ve.get(ze(t, e)); void 0 !== i && i.keyString.forEach((e) => { const { element: { content: t } } = e; const i = new Set(); Array.from(t.querySelectorAll('style')).forEach((e) => { i.add(e); }), J(e, i); }); }); })(e); const r = n.content; i ? (function (e, t, i = null) { const { element: { content: n }, parts: s } = e; if (i == null) return void n.appendChild(t); const o = document.createTreeWalker(n, 133, null, !1); let a = X(s); let r = 0; let l = -1; for (;o.nextNode();) { for (l++, o.currentNode === i && (r = Z(t), i.parentNode.insertBefore(t, i)); a !== -1 && s[a].index === l;) { if (r > 0) { for (;a !== -1;)s[a].index += r, a = X(s, a); return; }a = X(s, a); } } }(i, a, r.firstChild)) : r.insertBefore(a, r.firstChild), window.ShadyCSS.prepareTemplateStyles(n, e); const l = r.querySelector('style'); if (window.ShadyCSS.nativeShadow && l !== null)t.insertBefore(l.cloneNode(!0), t.firstChild); else if (i) { r.insertBefore(a, r.firstChild); const e = new Set(); e.add(a), J(i, e); } }; window.JSCompiler_renameProperty = (e, t) => e; const Te = { toAttribute(e, t) { switch (t) { case Boolean: return e ? '' : null; case Object: case Array: return e == null ? e : JSON.stringify(e); } return e; }, fromAttribute(e, t) { switch (t) { case Boolean: return e !== null; case Number: return e === null ? null : Number(e); case Object: case Array: return JSON.parse(e); } return e; } }; const He = (e, t) => t !== e && (t == t || e == e); const Ae = {
  attribute: !0, type: String, converter: Te, reflect: !1, hasChanged: He,
}; class ke extends HTMLElement {
  constructor() { super(), this._updateState = 0, this._instanceProperties = void 0, this._updatePromise = new Promise((e) => this._enableUpdatingResolver = e), this._changedProperties = new Map(), this._reflectingProperties = void 0, this.initialize(); }

  static get observedAttributes() { this.finalize(); const e = []; return this._classProperties.forEach((t, i) => { const n = this._attributeNameForProperty(i, t); void 0 !== n && (this._attributeToPropertyMap.set(n, i), e.push(n)); }), e; }

  static _ensureClassProperties() { if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) { this._classProperties = new Map(); const e = Object.getPrototypeOf(this)._classProperties; void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e)); } }

  static createProperty(e, t = Ae) { if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return; const i = typeof e === 'symbol' ? Symbol() : `__${e}`; const n = this.getPropertyDescriptor(e, i, t); void 0 !== n && Object.defineProperty(this.prototype, e, n); }

  static getPropertyDescriptor(e, t, i) {
    return {
      get() { return this[t]; }, set(i) { const n = this[e]; this[t] = i, this._requestUpdate(e, n); }, configurable: !0, enumerable: !0,
    };
  }

  static getPropertyOptions(e) { return this._classProperties && this._classProperties.get(e) || Ae; }

  static finalize() { const e = Object.getPrototypeOf(this); if (e.hasOwnProperty('finalized') || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) { const e = this.properties; const t = [...Object.getOwnPropertyNames(e), ...typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(e) : []]; for (const i of t) this.createProperty(i, e[i]); } }

  static _attributeNameForProperty(e, t) { const i = t.attribute; return !1 === i ? void 0 : typeof i === 'string' ? i : typeof e === 'string' ? e.toLowerCase() : void 0; }

  static _valueHasChanged(e, t, i = He) { return i(e, t); }

  static _propertyValueFromAttribute(e, t) { const i = t.type; const n = t.converter || Te; const s = typeof n === 'function' ? n : n.fromAttribute; return s ? s(e, i) : e; }

  static _propertyValueToAttribute(e, t) { if (void 0 === t.reflect) return; const i = t.type; const n = t.converter; return (n && n.toAttribute || Te.toAttribute)(e, i); }

  initialize() { this._saveInstanceProperties(), this._requestUpdate(); }

  _saveInstanceProperties() { this.constructor._classProperties.forEach((e, t) => { if (this.hasOwnProperty(t)) { const e = this[t]; delete this[t], this._instanceProperties || (this._instanceProperties = new Map()), this._instanceProperties.set(t, e); } }); }

  _applyInstanceProperties() { this._instanceProperties.forEach((e, t) => this[t] = e), this._instanceProperties = void 0; }

  connectedCallback() { this.enableUpdating(); }

  enableUpdating() { void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0); }

  disconnectedCallback() {}

  attributeChangedCallback(e, t, i) { t !== i && this._attributeToProperty(e, i); }

  _propertyToAttribute(e, t, i = Ae) { const n = this.constructor; const s = n._attributeNameForProperty(e, i); if (void 0 !== s) { const e = n._propertyValueToAttribute(t, i); if (void 0 === e) return; this._updateState = 8 | this._updateState, e == null ? this.removeAttribute(s) : this.setAttribute(s, e), this._updateState = -9 & this._updateState; } }

  _attributeToProperty(e, t) { if (8 & this._updateState) return; const i = this.constructor; const n = i._attributeToPropertyMap.get(e); if (void 0 !== n) { const e = i.getPropertyOptions(n); this._updateState = 16 | this._updateState, this[n] = i._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState; } }

  _requestUpdate(e, t) { let i = !0; if (void 0 !== e) { const n = this.constructor; const s = n.getPropertyOptions(e); n._valueHasChanged(this[e], t, s.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()), this._reflectingProperties.set(e, s))) : i = !1; }!this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate()); }

  requestUpdate(e, t) { return this._requestUpdate(e, t), this.updateComplete; }

  async _enqueueUpdate() { this._updateState = 4 | this._updateState; try { await this._updatePromise; } catch (e) {} const e = this.performUpdate(); return e != null && await e, !this._hasRequestedUpdate; }

  get _hasRequestedUpdate() { return 4 & this._updateState; }

  get hasUpdated() { return 1 & this._updateState; }

  performUpdate() { this._instanceProperties && this._applyInstanceProperties(); let e = !1; const t = this._changedProperties; try { e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated(); } catch (t) { throw e = !1, this._markUpdated(), t; }e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t)); }

  _markUpdated() { this._changedProperties = new Map(), this._updateState = -5 & this._updateState; }

  get updateComplete() { return this._getUpdateComplete(); }

  _getUpdateComplete() { return this._updatePromise; }

  shouldUpdate(e) { return !0; }

  update(e) { void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((e, t) => this._propertyToAttribute(t, this[t], e)), this._reflectingProperties = void 0), this._markUpdated(); }

  updated(e) {}

  firstUpdated(e) {}
}ke.finalized = !0; const Le = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype; const Pe = Symbol(); class Ve {
  constructor(e, t) { if (t !== Pe) throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'); this.cssText = e; }

  get styleSheet() { return void 0 === this._styleSheet && (Le ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet; }

  toString() { return this.cssText; }
} const Oe = (e, ...t) => { const i = t.reduce((t, i, n) => t + ((e) => { if (e instanceof Ve) return e.cssText; if (typeof e === 'number') return e; throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`); })(i) + e[n + 1], e[0]); return new Ve(i, Pe); }; (window.litElementVersions || (window.litElementVersions = [])).push('2.3.1'); const Ie = {}; class Ne extends ke {
  static getStyles() { return this.styles; }

  static _getUniqueStyles() { if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) return; const e = this.getStyles(); if (void 0 === e) this._styles = []; else if (Array.isArray(e)) { const t = (e, i) => e.reduceRight((e, i) => (Array.isArray(i) ? t(i, e) : (e.add(i), e)), i); const i = t(e, new Set()); const n = []; i.forEach((e) => n.unshift(e)), this._styles = n; } else this._styles = [e]; }

  initialize() { super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles(); }

  createRenderRoot() { return this.attachShadow({ mode: 'open' }); }

  adoptStyles() { const e = this.constructor._styles; e.length !== 0 && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Le ? this.renderRoot.adoptedStyleSheets = e.map((e) => e.styleSheet) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e) => e.cssText), this.localName)); }

  connectedCallback() { super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this); }

  update(e) { const t = this.render(); super.update(e), t !== Ie && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e) => { const t = document.createElement('style'); t.textContent = e.cssText, this.renderRoot.appendChild(t); })); }

  render() { return Ie; }
}Ne.finalized = !0, Ne.render = (e, t, i) => { if (!i || typeof i !== 'object' || !i.scopeName) throw new Error('The `scopeName` option is required.'); const n = i.scopeName; const s = ye.has(t); const o = Ce && t.nodeType === 11 && !!t.host; const a = o && !Me.has(n); const r = a ? document.createDocumentFragment() : t; if (((e, t, i) => { let n = ye.get(t); void 0 === n && (B(t, t.firstChild), ye.set(t, n = new ce({ templateFactory: _e, ...i })), n.appendInto(t)), n.setValue(e), n.commit(); })(e, r, { templateFactory: Se(n), ...i }), a) { const e = ye.get(r); ye.delete(r); const i = e.value instanceof ne ? e.value.template : void 0; Ee(n, r, i), B(t, t.firstChild), t.appendChild(r), ye.set(t, e); }!s && o && window.ShadyCSS.styleElement(t.host); }; const Re = !(window.ShadyDOM && window.ShadyDOM.inUse); let Fe; let De; function Be(e) { Fe = (!e || !e.shimcssproperties) && (Re || Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports('box-shadow', '0 0 0 var(--foo)'))); }window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (De = window.ShadyCSS.cssBuild); const Ue = Boolean(window.ShadyCSS && window.ShadyCSS.disableRuntime); window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? Fe = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Be(window.ShadyCSS), window.ShadyCSS = void 0) : Be(window.WebComponents && window.WebComponents.flags); const $e = Fe; class Ke {constructor() { this.start = 0, this.end = 0, this.previous = null, this.parent = null, this.rules = null, this.parsedCssText = '', this.cssText = '', this.atRule = !1, this.type = 0, this.keyframesName = '', this.selector = '', this.parsedSelector = ''; }} function je(e) { return (function e(t, i) { let n = i.substring(t.start, t.end - 1); if (t.parsedCssText = t.cssText = n.trim(), t.parent) { const e = t.previous ? t.previous.end : t.parent.start; n = i.substring(e, t.start - 1), n = (function (e) { return e.replace(/\\([0-9a-f]{1,6})\s/gi, (function () { let e = arguments[1]; let t = 6 - e.length; for (;t--;)e = `0${e}`; return `\\${e}`; })); }(n)), n = n.replace(Je.multipleSpaces, ' '), n = n.substring(n.lastIndexOf(';') + 1); const s = t.parsedSelector = t.selector = n.trim(); t.atRule = s.indexOf(Qe) === 0, t.atRule ? s.indexOf(Xe) === 0 ? t.type = Ye.MEDIA_RULE : s.match(Je.keyframesRule) && (t.type = Ye.KEYFRAMES_RULE, t.keyframesName = t.selector.split(Je.multipleSpaces).pop()) : s.indexOf(Ze) === 0 ? t.type = Ye.MIXIN_RULE : t.type = Ye.STYLE_RULE; } const s = t.rules; if (s) for (let t, n = 0, o = s.length; n < o && (t = s[n]); n++)e(t, i); return t; }((function (e) { const t = new Ke(); t.start = 0, t.end = e.length; let i = t; for (let n = 0, s = e.length; n < s; n++) if (e[n] === We) { i.rules || (i.rules = []); const e = i; const t = e.rules[e.rules.length - 1] || null; i = new Ke(), i.start = n + 1, i.parent = e, i.previous = t, e.rules.push(i); } else e[n] === Ge && (i.end = n + 1, i = i.parent || t); return t; }(e = e.replace(Je.comments, '').replace(Je.port, ''))), e)); } function qe(e, t, i = '') { let n = ''; if (e.cssText || e.rules) { const i = e.rules; if (i && !(function (e) { const t = e[0]; return Boolean(t) && Boolean(t.selector) && t.selector.indexOf(Ze) === 0; }(i))) for (let e, s = 0, o = i.length; s < o && (e = i[s]); s++)n = qe(e, t, n); else n = t ? e.cssText : (function (e) { return (function (e) { return e.replace(Je.mixinApply, '').replace(Je.varApply, ''); }(e = (function (e) { return e.replace(Je.customProp, '').replace(Je.mixinProp, ''); }(e)))); }(e.cssText)), n = n.trim(), n && (n = `  ${n}\n`); } return n && (e.selector && (i += `${e.selector} ${We}\n`), i += n, e.selector && (i += `${Ge}\n\n`)), i; } const Ye = {
  STYLE_RULE: 1, KEYFRAMES_RULE: 7, MEDIA_RULE: 4, MIXIN_RULE: 1e3,
}; const We = '{'; const Ge = '}'; const Je = {
  comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, port: /@import[^;]*;/gim, customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim, mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim, keyframesRule: /^@[^\s]*keyframes/, multipleSpaces: /\s+/g,
}; const Ze = '--'; const Xe = '@media'; const Qe = '@'; const et = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi; const tt = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi; const it = /@media\s(.*)/; const nt = new Set(); function st(e) { const t = e.textContent; if (!nt.has(t)) { nt.add(t); const e = document.createElement('style'); e.setAttribute('shady-unscoped', ''), e.textContent = t, document.head.appendChild(e); } } function ot(e) { return e.hasAttribute('shady-unscoped'); } function at(e, t) { return e ? (typeof e === 'string' && (e = je(e)), t && lt(e, t), qe(e, $e)) : ''; } function rt(e) { return !e.__cssRules && e.textContent && (e.__cssRules = je(e.textContent)), e.__cssRules || null; } function lt(e, t, i, n) { if (!e) return; let s = !1; const o = e.type; if (n && o === Ye.MEDIA_RULE) { const t = e.selector.match(it); t && (window.matchMedia(t[1]).matches || (s = !0)); }o === Ye.STYLE_RULE ? t(e) : i && o === Ye.KEYFRAMES_RULE ? i(e) : o === Ye.MIXIN_RULE && (s = !0); const a = e.rules; if (a && !s) for (let e, s = 0, o = a.length; s < o && (e = a[s]); s++)lt(e, t, i, n); }window.ShadyDOM && window.ShadyDOM.wrap; function ht(e) { if (void 0 !== De) return De; if (void 0 === e.__cssBuild) { const t = e.getAttribute('css-build'); if (t)e.__cssBuild = t; else { const t = (function (e) { const t = e.localName === 'template' ? e.content.firstChild : e.firstChild; if (t instanceof Comment) { const e = t.textContent.trim().split(':'); if (e[0] === 'css-build') return e[1]; } return ''; }(e)); t !== '' && (function (e) { const t = e.localName === 'template' ? e.content.firstChild : e.firstChild; t.parentNode.removeChild(t); }(e)), e.__cssBuild = t; } } return e.__cssBuild || ''; } function ct(e) { return ht(e) !== ''; } function dt(e, t) { for (const i in t)i === null ? e.style.removeProperty(i) : e.style.setProperty(i, t[i]); } function pt(e, t) { const i = window.getComputedStyle(e).getPropertyValue(t); return i ? i.trim() : ''; } const ut = /;\s*/m; const ft = /^\s*(initial)|(inherit)\s*$/; const mt = /\s*!important/; class gt {
  constructor() { this._map = {}; }

  set(e, t) { e = e.trim(), this._map[e] = { properties: t, dependants: {} }; }

  get(e) { return e = e.trim(), this._map[e] || null; }
} let _t = null; class vt {
  constructor() { this._currentElement = null, this._measureElement = null, this._map = new gt(); }

  detectMixin(e) { return (function (e) { const t = tt.test(e) || et.test(e); return tt.lastIndex = 0, et.lastIndex = 0, t; }(e)); }

  gatherStyles(e) { const t = (function (e) { const t = []; const i = e.querySelectorAll('style'); for (let e = 0; e < i.length; e++) { const n = i[e]; ot(n) ? Re || (st(n), n.parentNode.removeChild(n)) : (t.push(n.textContent), n.parentNode.removeChild(n)); } return t.join('').trim(); }(e.content)); if (t) { const i = document.createElement('style'); return i.textContent = t, e.content.insertBefore(i, e.content.firstChild), i; } return null; }

  transformTemplate(e, t) { void 0 === e._gatheredStyle && (e._gatheredStyle = this.gatherStyles(e)); const i = e._gatheredStyle; return i ? this.transformStyle(i, t) : null; }

  transformStyle(e, t = '') { const i = rt(e); return this.transformRules(i, t), e.textContent = at(i), i; }

  transformCustomStyle(e) { const t = rt(e); return lt(t, (e) => { e.selector === ':root' && (e.selector = 'html'), this.transformRule(e); }), e.textContent = at(t), t; }

  transformRules(e, t) { this._currentElement = t, lt(e, (e) => { this.transformRule(e); }), this._currentElement = null; }

  transformRule(e) { e.cssText = this.transformCssText(e.parsedCssText, e), e.selector === ':root' && (e.selector = ':host > *'); }

  transformCssText(e, t) { return e = e.replace(et, (e, i, n, s) => this._produceCssProperties(e, i, n, s, t)), this._consumeCssProperties(e, t); }

  _getInitialValueForProperty(e) { return this._measureElement || (this._measureElement = document.createElement('meta'), this._measureElement.setAttribute('apply-shim-measure', ''), this._measureElement.style.all = 'initial', document.head.appendChild(this._measureElement)), window.getComputedStyle(this._measureElement).getPropertyValue(e); }

  _fallbacksFromPreviousRules(e) { let t = e; for (;t.parent;)t = t.parent; const i = {}; let n = !1; return lt(t, (t) => { n = n || t === e, n || t.selector === e.selector && Object.assign(i, this._cssTextToMap(t.parsedCssText)); }), i; }

  _consumeCssProperties(e, t) { let i = null; for (;i = tt.exec(e);) { const n = i[0]; const s = i[1]; const o = i.index; const a = o + n.indexOf('@apply'); const r = o + n.length; const l = e.slice(0, a); const h = e.slice(r); const c = t ? this._fallbacksFromPreviousRules(t) : {}; Object.assign(c, this._cssTextToMap(l)); const d = this._atApplyToCssProperties(s, c); e = `${l}${d}${h}`, tt.lastIndex = o + d.length; } return e; }

  _atApplyToCssProperties(e, t) { e = e.replace(ut, ''); const i = []; let n = this._map.get(e); if (n || (this._map.set(e, {}), n = this._map.get(e)), n) { let s; let o; let a; this._currentElement && (n.dependants[this._currentElement] = !0); const r = n.properties; for (s in r)a = t && t[s], o = [s, ': var(', e, '_-_', s], a && o.push(',', a.replace(mt, '')), o.push(')'), mt.test(r[s]) && o.push(' !important'), i.push(o.join('')); } return i.join('; '); }

  _replaceInitialOrInherit(e, t) { const i = ft.exec(t); return i && (t = i[1] ? this._getInitialValueForProperty(e) : 'apply-shim-inherit'), t; }

  _cssTextToMap(e, t = !1) { let i; let n; const s = e.split(';'); const o = {}; for (let e, a, r = 0; r < s.length; r++)e = s[r], e && (a = e.split(':'), a.length > 1 && (i = a[0].trim(), n = a.slice(1).join(':'), t && (n = this._replaceInitialOrInherit(i, n)), o[i] = n)); return o; }

  _invalidateMixinEntry(e) { if (_t) for (const t in e.dependants)t !== this._currentElement && _t(t); }

  _produceCssProperties(e, t, i, n, s) { if (i && (function e(t, i) { const n = t.indexOf('var('); if (n === -1) return i(t, '', '', ''); const s = (function (e, t) { let i = 0; for (let n = t, s = e.length; n < s; n++) if (e[n] === '(')i++; else if (e[n] === ')' && --i == 0) return n; return -1; }(t, n + 3)); const o = t.substring(n + 4, s); const a = t.substring(0, n); const r = e(t.substring(s + 1), i); const l = o.indexOf(','); return l === -1 ? i(a, o.trim(), '', r) : i(a, o.substring(0, l).trim(), o.substring(l + 1).trim(), r); }(i, (e, t) => { t && this._map.get(t) && (n = `@apply ${t};`); })), !n) return e; const o = this._consumeCssProperties(`${n}`, s); let a = e.slice(0, e.indexOf('--')); const r = this._cssTextToMap(o, !0); let l = r; const h = this._map.get(t); const c = h && h.properties; c ? l = Object.assign(Object.create(c), r) : this._map.set(t, l); let d; let p; const u = []; let f = !1; for (d in l)p = r[d], void 0 === p && (p = 'initial'), c && !(d in c) && (f = !0), u.push(`${t}_-_${d}: ${p}`); return f && this._invalidateMixinEntry(h), h && (h.properties = l), i && (a = `${e};${a}`), `${a}${u.join('; ')};`; }
}vt.prototype.detectMixin = vt.prototype.detectMixin, vt.prototype.transformStyle = vt.prototype.transformStyle, vt.prototype.transformCustomStyle = vt.prototype.transformCustomStyle, vt.prototype.transformRules = vt.prototype.transformRules, vt.prototype.transformRule = vt.prototype.transformRule, vt.prototype.transformTemplate = vt.prototype.transformTemplate, vt.prototype._separator = '_-_', Object.defineProperty(vt.prototype, 'invalidCallback', { get: () => _t, set(e) { _t = e; } }); const yt = {}; const bt = '_applyShimCurrentVersion'; const wt = '_applyShimNextVersion'; const zt = Promise.resolve(); function Ct(e) { const t = yt[e]; t && (function (e) { e[bt] = e[bt] || 0, e._applyShimValidatingVersion = e._applyShimValidatingVersion || 0, e[wt] = (e[wt] || 0) + 1; }(t)); } function St(e) { return e[bt] === e[wt]; } let xt; let Mt = null; const Et = window.HTMLImports && window.HTMLImports.whenReady || null; function Tt(e) { requestAnimationFrame((() => { Et ? Et(e) : (Mt || (Mt = new Promise((e) => { xt = e; }), document.readyState === 'complete' ? xt() : document.addEventListener('readystatechange', () => { document.readyState === 'complete' && xt(); })), Mt.then((() => { e && e(); }))); })); } const Ht = '__shadyCSSCachedStyle'; let At = null; let kt = null; class Lt {
  constructor() { this.customStyles = [], this.enqueued = !1, Tt(() => { window.ShadyCSS.flushCustomStyles && window.ShadyCSS.flushCustomStyles(); }); }

  enqueueDocumentValidation() { !this.enqueued && kt && (this.enqueued = !0, Tt(kt)); }

  addCustomStyle(e) { e.__seenByShadyCSS || (e.__seenByShadyCSS = !0, this.customStyles.push(e), this.enqueueDocumentValidation()); }

  getStyleForCustomStyle(e) { if (e[Ht]) return e[Ht]; let t; return t = e.getStyle ? e.getStyle() : e, t; }

  processStyles() { const e = this.customStyles; for (let t = 0; t < e.length; t++) { const i = e[t]; if (i[Ht]) continue; const n = this.getStyleForCustomStyle(i); if (n) { const e = n.__appliedElement || n; At && At(e), i[Ht] = e; } } return e; }
}Lt.prototype.addCustomStyle = Lt.prototype.addCustomStyle, Lt.prototype.getStyleForCustomStyle = Lt.prototype.getStyleForCustomStyle, Lt.prototype.processStyles = Lt.prototype.processStyles, Object.defineProperties(Lt.prototype, { transformCallback: { get: () => At, set(e) { At = e; } }, validateCallback: { get: () => kt, set(e) { let t = !1; kt || (t = !0), kt = e, t && this.enqueueDocumentValidation(); } } }); const Pt = new vt(); class Vt {
  constructor() { this.customStyleInterface = null, Pt.invalidCallback = Ct; }

  ensure() { this.customStyleInterface || window.ShadyCSS.CustomStyleInterface && (this.customStyleInterface = window.ShadyCSS.CustomStyleInterface, this.customStyleInterface.transformCallback = (e) => { Pt.transformCustomStyle(e); }, this.customStyleInterface.validateCallback = () => { requestAnimationFrame(() => { this.customStyleInterface.enqueued && this.flushCustomStyles(); }); }); }

  prepareTemplate(e, t) { if (this.ensure(), ct(e)) return; yt[t] = e; const i = Pt.transformTemplate(e, t); e._styleAst = i; }

  flushCustomStyles() { if (this.ensure(), !this.customStyleInterface) return; const e = this.customStyleInterface.processStyles(); if (this.customStyleInterface.enqueued) { for (let t = 0; t < e.length; t++) { const i = e[t]; const n = this.customStyleInterface.getStyleForCustomStyle(i); n && Pt.transformCustomStyle(n); } this.customStyleInterface.enqueued = !1; } }

  styleSubtree(e, t) { if (this.ensure(), t && dt(e, t), e.shadowRoot) { this.styleElement(e); const t = e.shadowRoot.children || e.shadowRoot.childNodes; for (let e = 0; e < t.length; e++) this.styleSubtree(t[e]); } else { const t = e.children || e.childNodes; for (let e = 0; e < t.length; e++) this.styleSubtree(t[e]); } }

  styleElement(e) { this.ensure(); const { is: t } = (function (e) { const t = e.localName; let i = ''; let n = ''; return t ? t.indexOf('-') > -1 ? i = t : (n = t, i = e.getAttribute && e.getAttribute('is') || '') : (i = e.is, n = e.extends), { is: i, typeExtension: n }; }(e)); const i = yt[t]; if ((!i || !ct(i)) && i && !St(i)) { (function (e) { return !St(e) && e._applyShimValidatingVersion === e[wt]; }(i)) || (this.prepareTemplate(i, t), (function (e) { e._applyShimValidatingVersion = e[wt], e._validating || (e._validating = !0, zt.then((() => { e[bt] = e[wt], e._validating = !1; }))); }(i))); const n = e.shadowRoot; if (n) { const e = n.querySelector('style'); e && (e.__cssRules = i._styleAst, e.textContent = at(i._styleAst)); } } }

  styleDocument(e) { this.ensure(), this.styleSubtree(document.body, e); }
} if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
  const e = new Vt(); const t = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface; window.ShadyCSS = {
    prepareTemplate(t, i, n) { e.flushCustomStyles(), e.prepareTemplate(t, i); }, prepareTemplateStyles(e, t, i) { window.ShadyCSS.prepareTemplate(e, t, i); }, prepareTemplateDom(e, t) {}, styleSubtree(t, i) { e.flushCustomStyles(), e.styleSubtree(t, i); }, styleElement(t) { e.flushCustomStyles(), e.styleElement(t); }, styleDocument(t) { e.flushCustomStyles(), e.styleDocument(t); }, getComputedStyleValue: (e, t) => pt(e, t), flushCustomStyles() { e.flushCustomStyles(); }, nativeCss: $e, nativeShadow: Re, cssBuild: De, disableRuntime: Ue,
  }, t && (window.ShadyCSS.CustomStyleInterface = t);
}window.ShadyCSS.ApplyShim = Pt, window.JSCompiler_renameProperty = function (e, t) { return e; }; let Ot; let It; const Nt = /(url\()([^)]*)(\))/g; const Rt = /(^\/[^\/])|(^#)|(^[\w-\d]*:)/; function Ft(e, t) { if (e && Rt.test(e)) return e; if (e === '//') return e; if (void 0 === Ot) { Ot = !1; try { const e = new URL('b', 'http://a'); e.pathname = 'c%20d', Ot = e.href === 'http://a/c%20d'; } catch (e) {} } if (t || (t = document.baseURI || window.location.href), Ot) try { return new URL(e, t).href; } catch (t) { return e; } return It || (It = document.implementation.createHTMLDocument('temp'), It.base = It.createElement('base'), It.head.appendChild(It.base), It.anchor = It.createElement('a'), It.body.appendChild(It.anchor)), It.base.href = t, It.anchor.href = e, It.anchor.href || e; } function Dt(e, t) { return e.replace(Nt, ((e, i, n, s) => `${i}'${Ft(n.replace(/["']/g, ''), t)}'${s}`)); } function Bt(e) { return e.substring(0, e.lastIndexOf('/') + 1); } const Ut = !window.ShadyDOM; Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss); const $t = Bt(document.baseURI || window.location.href); const Kt = window.Polymer && window.Polymer.sanitizeDOMValue || void 0; let jt = 0; const qt = function (e) { let t = e.__mixinApplications; t || (t = new WeakMap(), e.__mixinApplications = t); const i = jt++; function n(n) { const s = n.__mixinSet; if (s && s[i]) return n; const o = t; let a = o.get(n); a || (a = e(n), o.set(n, a)); const r = Object.create(a.__mixinSet || s || null); return r[i] = !0, a.__mixinSet = r, a; } return n; }; const Yt = {}; const Wt = {}; class Gt extends HTMLElement {
  static get observedAttributes() { return ['id']; }

  static import(e, t) { if (e) { const i = (function (e) { return Yt[e] || Wt[e.toLowerCase()]; }(e)); return i && t ? i.querySelector(t) : i; } return null; }

  attributeChangedCallback(e, t, i, n) { t !== i && this.register(); }

  get assetpath() { if (!this.__assetpath) { const e = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument; const t = Ft(this.getAttribute('assetpath') || '', e.baseURI); this.__assetpath = Bt(t); } return this.__assetpath; }

  register(e) { let t; (e = e || this.id) && (this.id = e, (function (e, t) { Yt[e] = Wt[e.toLowerCase()] = t; }(e, this)), (t = this).querySelector('style') && console.warn('dom-module %s has style outside template', t.id)); }
}Gt.prototype.modules = Yt, customElements.define('dom-module', Gt); function Jt(e) { return Gt.import(e); } function Zt(e) { const t = Dt((e.body ? e.body : e).textContent, e.baseURI); const i = document.createElement('style'); return i.textContent = t, i; } function Xt(e) { const t = e.trim().split(/\s+/); const i = []; for (let e = 0; e < t.length; e++)i.push(...Qt(t[e])); return i; } function Qt(e) { const t = Jt(e); if (!t) return console.warn('Could not find style data in module named', e), []; if (void 0 === t._styles) { const e = []; e.push(...ti(t)); const i = t.querySelector('template'); i && e.push(...ei(i, t.assetpath)), t._styles = e; } return t._styles; } function ei(e, t) { if (!e._styles) { const i = []; const n = e.content.querySelectorAll('style'); for (let e = 0; e < n.length; e++) { const s = n[e]; const o = s.getAttribute('include'); o && i.push(...Xt(o).filter(((e, t, i) => i.indexOf(e) === t))), t && (s.textContent = Dt(s.textContent, t)), i.push(s); }e._styles = i; } return e._styles; } function ti(e) { const t = []; const i = e.querySelectorAll('link[rel=import][type~=css]'); for (let e = 0; e < i.length; e++) { const n = i[e]; if (n.import) { const e = n.import; const i = n.hasAttribute('shady-unscoped'); if (i && !e._unscopedStyle) { const t = Zt(e); t.setAttribute('shady-unscoped', ''), e._unscopedStyle = t; } else e._style || (e._style = Zt(e)); t.push(i ? e._unscopedStyle : e._style); } } return t; } function ii(e) { const t = Jt(e); if (t && void 0 === t._cssText) { let e = (function (e) { let t = ''; const i = ti(e); for (let e = 0; e < i.length; e++)t += i[e].textContent; return t; }(t)); const i = t.querySelector('template'); i && (e += (function (e, t) { let i = ''; const n = ei(e, t); for (let e = 0; e < n.length; e++) { const t = n[e]; t.parentNode && t.parentNode.removeChild(t), i += t.textContent; } return i; }(i, t.assetpath))), t._cssText = e || null; } return t || console.warn('Could not find style data in module named', e), t && t._cssText || ''; } const ni = window.ShadyDOM && window.ShadyDOM.noPatch && window.ShadyDOM.wrap ? window.ShadyDOM.wrap : window.ShadyDOM ? (e) => ShadyDOM.patch(e) : (e) => e; function si(e) { return e.indexOf('.') >= 0; } function oi(e) { const t = e.indexOf('.'); return t === -1 ? e : e.slice(0, t); } function ai(e, t) { return e.indexOf(`${t}.`) === 0; } function ri(e, t) { return t.indexOf(`${e}.`) === 0; } function li(e, t, i) { return t + i.slice(e.length); } function hi(e) { if (Array.isArray(e)) { const t = []; for (let i = 0; i < e.length; i++) { const n = e[i].toString().split('.'); for (let e = 0; e < n.length; e++)t.push(n[e]); } return t.join('.'); } return e; } function ci(e) { return Array.isArray(e) ? hi(e).split('.') : e.toString().split('.'); } function di(e, t, i) { let n = e; const s = ci(t); for (let e = 0; e < s.length; e++) { if (!n) return; n = n[s[e]]; } return i && (i.path = s.join('.')), n; } function pi(e, t, i) { let n = e; const s = ci(t); const o = s[s.length - 1]; if (s.length > 1) { for (let e = 0; e < s.length - 1; e++) { if (n = n[s[e]], !n) return; }n[o] = i; } else n[t] = i; return s.join('.'); } const ui = {}; const fi = /-[a-z]/g; const mi = /([A-Z])/g; function gi(e) { return ui[e] || (ui[e] = e.indexOf('-') < 0 ? e : e.replace(fi, (e) => e[1].toUpperCase())); } function _i(e) { return ui[e] || (ui[e] = e.replace(mi, '-$1').toLowerCase()); } let vi = 0; let yi = 0; const bi = []; let wi = 0; const zi = document.createTextNode(''); new window.MutationObserver(((() => { const e = bi.length; for (let t = 0; t < e; t++) { const e = bi[t]; if (e) try { e(); } catch (e) { setTimeout(() => { throw e; }); } }bi.splice(0, e), yi += e; }))).observe(zi, { characterData: !0 }); const Ci = { after: (e) => ({ run: (t) => window.setTimeout(t, e), cancel(e) { window.clearTimeout(e); } }), run: (e, t) => window.setTimeout(e, t), cancel(e) { window.clearTimeout(e); } }; const Si = { run: (e) => window.requestAnimationFrame(e), cancel(e) { window.cancelAnimationFrame(e); } }; const xi = { run: (e) => (zi.textContent = wi++, bi.push(e), vi++), cancel(e) { const t = e - yi; if (t >= 0) { if (!bi[t]) throw new Error(`invalid async handle: ${e}`); bi[t] = null; } } }; const Mi = xi; const Ei = qt((e) => class extends e {
  static createProperties(e) { const t = this.prototype; for (const i in e)i in t || t._createPropertyAccessor(i); }

  static attributeNameForProperty(e) { return e.toLowerCase(); }

  static typeForProperty(e) {}

  _createPropertyAccessor(e, t) { this._addPropertyToAttributeMap(e), this.hasOwnProperty(JSCompiler_renameProperty('__dataHasAccessor', this)) || (this.__dataHasAccessor = { ...this.__dataHasAccessor }), this.__dataHasAccessor[e] || (this.__dataHasAccessor[e] = !0, this._definePropertyAccessor(e, t)); }

  _addPropertyToAttributeMap(e) { if (this.hasOwnProperty(JSCompiler_renameProperty('__dataAttributes', this)) || (this.__dataAttributes = { ...this.__dataAttributes }), !this.__dataAttributes[e]) { const t = this.constructor.attributeNameForProperty(e); this.__dataAttributes[t] = e; } }

  _definePropertyAccessor(e, t) { Object.defineProperty(this, e, { get() { return this._getProperty(e); }, set: t ? function () {} : function (t) { this._setProperty(e, t); } }); }

  constructor() { super(), this.__dataEnabled = !1, this.__dataReady = !1, this.__dataInvalid = !1, this.__data = {}, this.__dataPending = null, this.__dataOld = null, this.__dataInstanceProps = null, this.__serializing = !1, this._initializeProperties(); }

  ready() { this.__dataReady = !0, this._flushProperties(); }

  _initializeProperties() { for (const e in this.__dataHasAccessor) this.hasOwnProperty(e) && (this.__dataInstanceProps = this.__dataInstanceProps || {}, this.__dataInstanceProps[e] = this[e], delete this[e]); }

  _initializeInstanceProperties(e) { Object.assign(this, e); }

  _setProperty(e, t) { this._setPendingProperty(e, t) && this._invalidateProperties(); }

  _getProperty(e) { return this.__data[e]; }

  _setPendingProperty(e, t, i) { const n = this.__data[e]; const s = this._shouldPropertyChange(e, t, n); return s && (this.__dataPending || (this.__dataPending = {}, this.__dataOld = {}), this.__dataOld && !(e in this.__dataOld) && (this.__dataOld[e] = n), this.__data[e] = t, this.__dataPending[e] = t), s; }

  _invalidateProperties() { !this.__dataInvalid && this.__dataReady && (this.__dataInvalid = !0, Mi.run(() => { this.__dataInvalid && (this.__dataInvalid = !1, this._flushProperties()); })); }

  _enableProperties() { this.__dataEnabled || (this.__dataEnabled = !0, this.__dataInstanceProps && (this._initializeInstanceProperties(this.__dataInstanceProps), this.__dataInstanceProps = null), this.ready()); }

  _flushProperties() { const e = this.__data; const t = this.__dataPending; const i = this.__dataOld; this._shouldPropertiesChange(e, t, i) && (this.__dataPending = null, this.__dataOld = null, this._propertiesChanged(e, t, i)); }

  _shouldPropertiesChange(e, t, i) { return Boolean(t); }

  _propertiesChanged(e, t, i) {}

  _shouldPropertyChange(e, t, i) { return i !== t && (i == i || t == t); }

  attributeChangedCallback(e, t, i, n) { t !== i && this._attributeToProperty(e, i), super.attributeChangedCallback && super.attributeChangedCallback(e, t, i, n); }

  _attributeToProperty(e, t, i) { if (!this.__serializing) { const n = this.__dataAttributes; const s = n && n[e] || e; this[s] = this._deserializeValue(t, i || this.constructor.typeForProperty(s)); } }

  _propertyToAttribute(e, t, i) { this.__serializing = !0, i = arguments.length < 3 ? this[e] : i, this._valueToNodeAttribute(this, i, t || this.constructor.attributeNameForProperty(e)), this.__serializing = !1; }

  _valueToNodeAttribute(e, t, i) { const n = this._serializeValue(t); i !== 'class' && i !== 'name' && i !== 'slot' || (e = ni(e)), void 0 === n ? e.removeAttribute(i) : e.setAttribute(i, n); }

  _serializeValue(e) { switch (typeof e) { case 'boolean': return e ? '' : void 0; default: return e != null ? e.toString() : void 0; } }

  _deserializeValue(e, t) { switch (t) { case Boolean: return e !== null; case Number: return Number(e); default: return e; } }
}); const Ti = {}; let Hi = HTMLElement.prototype; for (;Hi;) { const e = Object.getOwnPropertyNames(Hi); for (let t = 0; t < e.length; t++)Ti[e[t]] = !0; Hi = Object.getPrototypeOf(Hi); } const Ai = qt((e) => {
  const t = Ei(e); return class extends t {
    static createPropertiesForAttributes() { const e = this.observedAttributes; for (let t = 0; t < e.length; t++) this.prototype._createPropertyAccessor(gi(e[t])); }

    static attributeNameForProperty(e) { return _i(e); }

    _initializeProperties() { this.__dataProto && (this._initializeProtoProperties(this.__dataProto), this.__dataProto = null), super._initializeProperties(); }

    _initializeProtoProperties(e) { for (const t in e) this._setProperty(t, e[t]); }

    _ensureAttribute(e, t) { const i = this; i.hasAttribute(e) || this._valueToNodeAttribute(i, t, e); }

    _serializeValue(e) { switch (typeof e) { case 'object': if (e instanceof Date) return e.toString(); if (e) try { return JSON.stringify(e); } catch (e) { return ''; } default: return super._serializeValue(e); } }

    _deserializeValue(e, t) { let i; switch (t) { case Object: try { i = JSON.parse(e); } catch (t) { i = e; } break; case Array: try { i = JSON.parse(e); } catch (t) { i = null, console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`); } break; case Date: i = isNaN(e) ? String(e) : Number(e), i = new Date(i); break; default: i = super._deserializeValue(e, t); } return i; }

    _definePropertyAccessor(e, t) { !(function (e, t) { if (!Ti[t]) { const i = e[t]; void 0 !== i && (e.__data ? e._setPendingProperty(t, i) : (e.__dataProto ? e.hasOwnProperty(JSCompiler_renameProperty('__dataProto', e)) || (e.__dataProto = Object.create(e.__dataProto)) : e.__dataProto = {}, e.__dataProto[t] = i)); } }(this, e)), super._definePropertyAccessor(e, t); }

    _hasAccessor(e) { return this.__dataHasAccessor && this.__dataHasAccessor[e]; }

    _isPropertyPending(e) { return Boolean(this.__dataPending && e in this.__dataPending); }
  };
}); const ki = { 'dom-if': !0, 'dom-repeat': !0 }; let Li = !1; let Pi = !1; function Vi(e) { (function () { if (!Li) { Li = !0; const e = document.createElement('textarea'); e.placeholder = 'a', Pi = e.placeholder === e.textContent; } return Pi; }()) && e.localName === 'textarea' && e.placeholder && e.placeholder === e.textContent && (e.textContent = null); } function Oi(e) { const t = e.getAttribute('is'); if (t && ki[t]) { const i = e; for (i.removeAttribute('is'), e = i.ownerDocument.createElement(t), i.parentNode.replaceChild(e, i), e.appendChild(i); i.attributes.length;)e.setAttribute(i.attributes[0].name, i.attributes[0].value), i.removeAttribute(i.attributes[0].name); } return e; } function Ii(e, t) { const i = t.parentInfo && Ii(e, t.parentInfo); if (!i) return e; for (let e = i.firstChild, n = 0; e; e = e.nextSibling) if (t.parentIndex === n++) return e; } function Ni(e, t, i, n) { n.id && (t[n.id] = i); } function Ri(e, t, i) { if (i.events && i.events.length) for (let n, s = 0, o = i.events; s < o.length && (n = o[s]); s++)e._addMethodEventListenerToNode(t, n.name, n.value, e); } function Fi(e, t, i) { i.templateInfo && (t._templateInfo = i.templateInfo); } const Di = qt((e) => class extends e {
  static _parseTemplate(e, t) { if (!e._templateInfo) { const i = e._templateInfo = {}; i.nodeInfoList = [], i.stripWhiteSpace = t && t.stripWhiteSpace || e.hasAttribute('strip-whitespace'), this._parseTemplateContent(e, i, { parent: null }); } return e._templateInfo; }

  static _parseTemplateContent(e, t, i) { return this._parseTemplateNode(e.content, t, i); }

  static _parseTemplateNode(e, t, i) { let n = !1; const s = e; return s.localName != 'template' || s.hasAttribute('preserve-content') ? s.localName === 'slot' && (t.hasInsertionPoint = !0) : n = this._parseTemplateNestedTemplate(s, t, i) || n, Vi(s), s.firstChild && this._parseTemplateChildNodes(s, t, i), s.hasAttributes && s.hasAttributes() && (n = this._parseTemplateNodeAttributes(s, t, i) || n), n; }

  static _parseTemplateChildNodes(e, t, i) { if (e.localName !== 'script' && e.localName !== 'style') for (let n, s = e.firstChild, o = 0; s; s = n) { if (s.localName == 'template' && (s = Oi(s)), n = s.nextSibling, s.nodeType === Node.TEXT_NODE) { let i = n; for (;i && i.nodeType === Node.TEXT_NODE;)s.textContent += i.textContent, n = i.nextSibling, e.removeChild(i), i = n; if (t.stripWhiteSpace && !s.textContent.trim()) { e.removeChild(s); continue; } } const a = { parentIndex: o, parentInfo: i }; this._parseTemplateNode(s, t, a) && (a.infoIndex = t.nodeInfoList.push(a) - 1), s.parentNode && o++; } }

  static _parseTemplateNestedTemplate(e, t, i) { const n = e; const s = this._parseTemplate(n, t); return (s.content = n.content.ownerDocument.createDocumentFragment()).appendChild(n.content), i.templateInfo = s, !0; }

  static _parseTemplateNodeAttributes(e, t, i) { let n = !1; const s = Array.from(e.attributes); for (let o, a = s.length - 1; o = s[a]; a--)n = this._parseTemplateNodeAttribute(e, t, i, o.name, o.value) || n; return n; }

  static _parseTemplateNodeAttribute(e, t, i, n, s) { return n.slice(0, 3) === 'on-' ? (e.removeAttribute(n), i.events = i.events || [], i.events.push({ name: n.slice(3), value: s }), !0) : n === 'id' && (i.id = s, !0); }

  static _contentForTemplate(e) { const t = e._templateInfo; return t && t.content || e.content; }

  _stampTemplate(e) { e && !e.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(e); const t = this.constructor._parseTemplate(e); const i = t.nodeInfoList; const n = t.content || e.content; let s = document.importNode(n, !0); s.__noInsertionPoint = !t.hasInsertionPoint; const o = s.nodeList = new Array(i.length); s.$ = {}; for (let e, t = 0, n = i.length; t < n && (e = i[t]); t++) { const i = o[t] = Ii(s, e); Ni(0, s.$, i, e), Fi(0, i, e), Ri(this, i, e); } return s = s, s; }

  _addMethodEventListenerToNode(e, t, i, n) { const s = (function (e, t, i) { return e = e._methodHost || e, function (t) { e[i] ? e[i](t, t.detail) : console.warn(`listener method \`${i}\` not defined`); }; }(n = n || e, 0, i)); return this._addEventListenerToNode(e, t, s), s; }

  _addEventListenerToNode(e, t, i) { e.addEventListener(t, i); }

  _removeEventListenerFromNode(e, t, i) { e.removeEventListener(t, i); }
}); let Bi = 0; const Ui = {
  COMPUTE: '__computeEffects', REFLECT: '__reflectEffects', NOTIFY: '__notifyEffects', PROPAGATE: '__propagateEffects', OBSERVE: '__observeEffects', READ_ONLY: '__readOnly',
}; const $i = /[A-Z]/; function Ki(e, t) { let i = e[t]; if (i) { if (!e.hasOwnProperty(t)) { i = e[t] = Object.create(e[t]); for (const e in i) { const t = i[e]; const n = i[e] = Array(t.length); for (let e = 0; e < t.length; e++)n[e] = t[e]; } } } else i = e[t] = {}; return i; } function ji(e, t, i, n, s, o) { if (t) { let a = !1; const r = Bi++; for (const l in i)qi(e, t, r, l, i, n, s, o) && (a = !0); return a; } return !1; } function qi(e, t, i, n, s, o, a, r) { let l = !1; const h = t[a ? oi(n) : n]; if (h) for (let t, c = 0, d = h.length; c < d && (t = h[c]); c++)t.info && t.info.lastRun === i || a && !Yi(n, t.trigger) || (t.info && (t.info.lastRun = i), t.fn(e, n, s, o, t.info, a, r), l = !0); return l; } function Yi(e, t) { if (t) { const i = t.name; return i == e || !(!t.structured || !ai(i, e)) || !(!t.wildcard || !ri(i, e)); } return !0; } function Wi(e, t, i, n, s) { const o = typeof s.method === 'string' ? e[s.method] : s.method; const a = s.property; o ? o.call(e, e.__data[a], n[a]) : s.dynamicFn || console.warn(`observer method \`${s.method}\` not defined`); } function Gi(e, t, i) { const n = oi(t); if (n !== t) { return Ji(e, `${_i(n)}-changed`, i[t], t), !0; } return !1; } function Ji(e, t, i, n) { const s = { value: i, queueProperty: !0 }; n && (s.path = n), ni(e).dispatchEvent(new CustomEvent(t, { detail: s })); } function Zi(e, t, i, n, s, o) { const a = (o ? oi(t) : t) != t ? t : null; let r = a ? di(e, a) : e.__data[t]; a && void 0 === r && (r = i[t]), Ji(e, s.eventName, r, a); } function Xi(e, t, i, n, s) { let o = e.__data[t]; Kt && (o = Kt(o, s.attrName, 'attribute', e)), e._propertyToAttribute(t, s.attrName, o); } function Qi(e, t, i, n, s) { const o = rn(e, t, i, n, s); const a = s.methodInfo; e.__dataHasAccessor && e.__dataHasAccessor[a] ? e._setPendingProperty(a, o, !0) : e[a] = o; } function en(e, t, i, n, s, o, a) {
  i.bindings = i.bindings || []; const r = {
    kind: n, target: s, parts: o, literal: a, isCompound: o.length !== 1,
  }; if (i.bindings.push(r), (function (e) { return Boolean(e.target) && e.kind != 'attribute' && e.kind != 'text' && !e.isCompound && e.parts[0].mode === '{'; }(r))) { const { event: e, negate: t } = r.parts[0]; r.listenerEvent = e || `${_i(s)}-changed`, r.listenerNegate = t; } const l = t.nodeInfoList.length; for (let i = 0; i < r.parts.length; i++) { const n = r.parts[i]; n.compoundIndex = i, tn(e, t, r, n, l); }
} function tn(e, t, i, n, s) {
  if (!n.literal) {
    if (i.kind === 'attribute' && i.target[0] === '-')console.warn(`Cannot set attribute ${i.target} because "-" is not a valid attribute starting character`); else {
      const o = n.dependencies; const a = {
        index: s, binding: i, part: n, evaluator: e,
      }; for (let i = 0; i < o.length; i++) { let n = o[i]; typeof n === 'string' && (n = pn(n), n.wildcard = !0), e._addTemplatePropertyEffect(t, n.rootProperty, { fn: nn, info: a, trigger: n }); }
    }
  }
} function nn(e, t, i, n, s, o, a) { const r = a[s.index]; const l = s.binding; const h = s.part; if (o && h.source && t.length > h.source.length && l.kind == 'property' && !l.isCompound && r.__isPropertyEffectsClient && r.__dataHasAccessor && r.__dataHasAccessor[l.target]) { const n = i[t]; t = li(h.source, l.target, t), r._setPendingPropertyOrPath(t, n, !1, !0) && e._enqueueClient(r); } else { !(function (e, t, i, n, s) { s = (function (e, t, i, n) { if (i.isCompound) { const s = e.__dataCompoundStorage[i.target]; s[n.compoundIndex] = t, t = s.join(''); }i.kind !== 'attribute' && (i.target !== 'textContent' && (i.target !== 'value' || e.localName !== 'input' && e.localName !== 'textarea') || (t = t == null ? '' : t)); return t; }(t, s, i, n)), Kt && (s = Kt(s, i.target, i.kind, t)); if (i.kind == 'attribute')e._valueToNodeAttribute(t, s, i.target); else { const n = i.target; t.__isPropertyEffectsClient && t.__dataHasAccessor && t.__dataHasAccessor[n] ? t[Ui.READ_ONLY] && t[Ui.READ_ONLY][n] || t._setPendingProperty(n, s) && e._enqueueClient(t) : e._setUnmanagedPropertyToNode(t, n, s); } }(e, r, l, h, s.evaluator._evaluateBinding(e, h, t, i, n, o))); } } function sn(e, t) { if (t.isCompound) { const i = e.__dataCompoundStorage || (e.__dataCompoundStorage = {}); const n = t.parts; const s = new Array(n.length); for (let e = 0; e < n.length; e++)s[e] = n[e].literal; const o = t.target; i[o] = s, t.literal && t.kind == 'property' && (o === 'className' && (e = ni(e)), e[o] = t.literal); } } function on(e, t, i) { if (i.listenerEvent) { const n = i.parts[0]; e.addEventListener(i.listenerEvent, ((e) => { !(function (e, t, i, n, s) { let o; const a = e.detail; const r = a && a.path; r ? (n = li(i, n, r), o = a && a.value) : o = e.currentTarget[i], o = s ? !o : o, t[Ui.READ_ONLY] && t[Ui.READ_ONLY][n] || !t._setPendingPropertyOrPath(n, o, !0, Boolean(r)) || a && a.queueProperty || t._invalidateProperties(); }(e, t, i.target, n.source, n.negate)); })); } } function an(e, t, i, n, s, o) {
  o = t.static || o && (typeof o !== 'object' || o[t.methodName]); const a = {
    methodName: t.methodName, args: t.args, methodInfo: s, dynamicFn: o,
  }; for (let s, o = 0; o < t.args.length && (s = t.args[o]); o++)s.literal || e._addPropertyEffect(s.rootProperty, i, { fn: n, info: a, trigger: s }); o && e._addPropertyEffect(t.methodName, i, { fn: n, info: a });
} function rn(e, t, i, n, s) { const o = e._methodHost || e; const a = o[s.methodName]; if (a) { const n = e._marshalArgs(s.args, t, i); return a.apply(o, n); }s.dynamicFn || console.warn(`method \`${s.methodName}\` not defined`); } const ln = []; const hn = new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})", 'g'); function cn(e) { let t = ''; for (let i = 0; i < e.length; i++) { t += e[i].literal || ''; } return t; } function dn(e) { const t = e.match(/([^\s]+?)\(([\s\S]*)\)/); if (t) { const e = { methodName: t[1], static: !0, args: ln }; if (t[2].trim()) { return (function (e, t) { return t.args = e.map(((e) => { const i = pn(e); return i.literal || (t.static = !1), i; }), this), t; }(t[2].replace(/\\,/g, '&comma;').split(','), e)); } return e; } return null; } function pn(e) { const t = e.trim().replace(/&comma;/g, ',').replace(/\\(.)/g, '$1'); const i = { name: t, value: '', literal: !1 }; let n = t[0]; switch (n === '-' && (n = t[1]), n >= '0' && n <= '9' && (n = '#'), n) { case "'": case '"': i.value = t.slice(1, -1), i.literal = !0; break; case '#': i.value = Number(t), i.literal = !0; } return i.literal || (i.rootProperty = oi(t), i.structured = si(t), i.structured && (i.wildcard = t.slice(-2) == '.*', i.wildcard && (i.name = t.slice(0, -2)))), i; } function un(e, t, i) { let n = di(e, i); return void 0 === n && (n = t[i]), n; } function fn(e, t, i, n) { e.notifyPath(`${i}.splices`, { indexSplices: n }), e.notifyPath(`${i}.length`, t.length); } function mn(e, t, i, n, s, o) {
  fn(e, t, i, [{
    index: n, addedCount: s, removed: o, object: t, type: 'splice',
  }]);
} const gn = qt((e) => {
  const t = Di(Ai(e)); return class extends t {
    constructor() { super(), this.__isPropertyEffectsClient = !0, this.__dataCounter = 0, this.__dataClientsReady, this.__dataPendingClients, this.__dataToNotify, this.__dataLinkedPaths, this.__dataHasPaths, this.__dataCompoundStorage, this.__dataHost, this.__dataTemp, this.__dataClientsInitialized, this.__data, this.__dataPending, this.__dataOld, this.__computeEffects, this.__reflectEffects, this.__notifyEffects, this.__propagateEffects, this.__observeEffects, this.__readOnly, this.__templateInfo; }

    get PROPERTY_EFFECT_TYPES() { return Ui; }

    _initializeProperties() { super._initializeProperties(), _n.registerHost(this), this.__dataClientsReady = !1, this.__dataPendingClients = null, this.__dataToNotify = null, this.__dataLinkedPaths = null, this.__dataHasPaths = !1, this.__dataCompoundStorage = this.__dataCompoundStorage || null, this.__dataHost = this.__dataHost || null, this.__dataTemp = {}, this.__dataClientsInitialized = !1; }

    _initializeProtoProperties(e) { this.__data = Object.create(e), this.__dataPending = Object.create(e), this.__dataOld = {}; }

    _initializeInstanceProperties(e) { const t = this[Ui.READ_ONLY]; for (const i in e)t && t[i] || (this.__dataPending = this.__dataPending || {}, this.__dataOld = this.__dataOld || {}, this.__data[i] = this.__dataPending[i] = e[i]); }

    _addPropertyEffect(e, t, i) { this._createPropertyAccessor(e, t == Ui.READ_ONLY); let n = Ki(this, t)[e]; n || (n = this[t][e] = []), n.push(i); }

    _removePropertyEffect(e, t, i) { const n = Ki(this, t)[e]; const s = n.indexOf(i); s >= 0 && n.splice(s, 1); }

    _hasPropertyEffect(e, t) { const i = this[t]; return Boolean(i && i[e]); }

    _hasReadOnlyEffect(e) { return this._hasPropertyEffect(e, Ui.READ_ONLY); }

    _hasNotifyEffect(e) { return this._hasPropertyEffect(e, Ui.NOTIFY); }

    _hasReflectEffect(e) { return this._hasPropertyEffect(e, Ui.REFLECT); }

    _hasComputedEffect(e) { return this._hasPropertyEffect(e, Ui.COMPUTE); }

    _setPendingPropertyOrPath(e, t, i, n) { if (n || oi(Array.isArray(e) ? e[0] : e) !== e) { if (!n) { const i = di(this, e); if (!(e = pi(this, e, t)) || !super._shouldPropertyChange(e, t, i)) return !1; } if (this.__dataHasPaths = !0, this._setPendingProperty(e, t, i)) return (function (e, t, i) { const n = e.__dataLinkedPaths; if (n) { let s; for (const o in n) { const a = n[o]; ri(o, t) ? (s = li(o, a, t), e._setPendingPropertyOrPath(s, i, !0, !0)) : ri(a, t) && (s = li(a, o, t), e._setPendingPropertyOrPath(s, i, !0, !0)); } } }(this, e, t)), !0; } else { if (this.__dataHasAccessor && this.__dataHasAccessor[e]) return this._setPendingProperty(e, t, i); this[e] = t; } return !1; }

    _setUnmanagedPropertyToNode(e, t, i) { i === e[t] && typeof i !== 'object' || (t === 'className' && (e = ni(e)), e[t] = i); }

    _setPendingProperty(e, t, i) { const n = this.__dataHasPaths && si(e); const s = n ? this.__dataTemp : this.__data; return !!this._shouldPropertyChange(e, t, s[e]) && (this.__dataPending || (this.__dataPending = {}, this.__dataOld = {}), e in this.__dataOld || (this.__dataOld[e] = this.__data[e]), n ? this.__dataTemp[e] = t : this.__data[e] = t, this.__dataPending[e] = t, (n || this[Ui.NOTIFY] && this[Ui.NOTIFY][e]) && (this.__dataToNotify = this.__dataToNotify || {}, this.__dataToNotify[e] = i), !0); }

    _setProperty(e, t) { this._setPendingProperty(e, t, !0) && this._invalidateProperties(); }

    _invalidateProperties() { this.__dataReady && this._flushProperties(); }

    _enqueueClient(e) { this.__dataPendingClients = this.__dataPendingClients || [], e !== this && this.__dataPendingClients.push(e); }

    _flushProperties() { this.__dataCounter++, super._flushProperties(), this.__dataCounter--; }

    _flushClients() { this.__dataClientsReady ? this.__enableOrFlushClients() : (this.__dataClientsReady = !0, this._readyClients(), this.__dataReady = !0); }

    __enableOrFlushClients() { const e = this.__dataPendingClients; if (e) { this.__dataPendingClients = null; for (let t = 0; t < e.length; t++) { const i = e[t]; i.__dataEnabled ? i.__dataPending && i._flushProperties() : i._enableProperties(); } } }

    _readyClients() { this.__enableOrFlushClients(); }

    setProperties(e, t) { for (const i in e)!t && this[Ui.READ_ONLY] && this[Ui.READ_ONLY][i] || this._setPendingPropertyOrPath(i, e[i], !0); this._invalidateProperties(); }

    ready() { this._flushProperties(), this.__dataClientsReady || this._flushClients(), this.__dataPending && this._flushProperties(); }

    _propertiesChanged(e, t, i) { const n = this.__dataHasPaths; this.__dataHasPaths = !1, (function (e, t, i, n) { const s = e[Ui.COMPUTE]; if (s) { let o = t; for (;ji(e, s, o, i, n);)Object.assign(i, e.__dataOld), Object.assign(t, e.__dataPending), o = e.__dataPending, e.__dataPending = null; } }(this, t, i, n)); const s = this.__dataToNotify; this.__dataToNotify = null, this._propagatePropertyChanges(t, i, n), this._flushClients(), ji(this, this[Ui.REFLECT], t, i, n), ji(this, this[Ui.OBSERVE], t, i, n), s && (function (e, t, i, n, s) { let o; let a; const r = e[Ui.NOTIFY]; const l = Bi++; for (const a in t)t[a] && (r && qi(e, r, l, a, i, n, s) || s && Gi(e, a, i)) && (o = !0); o && (a = e.__dataHost) && a._invalidateProperties && a._invalidateProperties(); }(this, s, t, i, n)), this.__dataCounter == 1 && (this.__dataTemp = {}); }

    _propagatePropertyChanges(e, t, i) { this[Ui.PROPAGATE] && ji(this, this[Ui.PROPAGATE], e, t, i); let n = this.__templateInfo; for (;n;)ji(this, n.propertyEffects, e, t, i, n.nodeList), n = n.nextTemplateInfo; }

    linkPaths(e, t) { e = hi(e), t = hi(t), this.__dataLinkedPaths = this.__dataLinkedPaths || {}, this.__dataLinkedPaths[e] = t; }

    unlinkPaths(e) { e = hi(e), this.__dataLinkedPaths && delete this.__dataLinkedPaths[e]; }

    notifySplices(e, t) { const i = { path: '' }; fn(this, di(this, e, i), i.path, t); }

    get(e, t) { return di(t || this, e); }

    set(e, t, i) { i ? pi(i, e, t) : this[Ui.READ_ONLY] && this[Ui.READ_ONLY][e] || this._setPendingPropertyOrPath(e, t, !0) && this._invalidateProperties(); }

    push(e, ...t) { const i = { path: '' }; const n = di(this, e, i); const s = n.length; const o = n.push(...t); return t.length && mn(this, n, i.path, s, t.length, []), o; }

    pop(e) { const t = { path: '' }; const i = di(this, e, t); const n = Boolean(i.length); const s = i.pop(); return n && mn(this, i, t.path, i.length, 0, [s]), s; }

    splice(e, t, i, ...n) { let s; const o = { path: '' }; const a = di(this, e, o); return t < 0 ? t = a.length - Math.floor(-t) : t && (t = Math.floor(t)), s = arguments.length === 2 ? a.splice(t) : a.splice(t, i, ...n), (n.length || s.length) && mn(this, a, o.path, t, n.length, s), s; }

    shift(e) { const t = { path: '' }; const i = di(this, e, t); const n = Boolean(i.length); const s = i.shift(); return n && mn(this, i, t.path, 0, 0, [s]), s; }

    unshift(e, ...t) { const i = { path: '' }; const n = di(this, e, i); const s = n.unshift(...t); return t.length && mn(this, n, i.path, 0, t.length, []), s; }

    notifyPath(e, t) { let i; if (arguments.length == 1) { const n = { path: '' }; t = di(this, e, n), i = n.path; } else i = Array.isArray(e) ? hi(e) : e; this._setPendingPropertyOrPath(i, t, !0, !0) && this._invalidateProperties(); }

    _createReadOnlyProperty(e, t) { let i; this._addPropertyEffect(e, Ui.READ_ONLY), t && (this[`_set${i = e, i[0].toUpperCase() + i.substring(1)}`] = function (t) { this._setProperty(e, t); }); }

    _createPropertyObserver(e, t, i) { const n = { property: e, method: t, dynamicFn: Boolean(i) }; this._addPropertyEffect(e, Ui.OBSERVE, { fn: Wi, info: n, trigger: { name: e } }), i && this._addPropertyEffect(t, Ui.OBSERVE, { fn: Wi, info: n, trigger: { name: t } }); }

    _createMethodObserver(e, t) { const i = dn(e); if (!i) throw new Error(`Malformed observer expression '${e}'`); an(this, i, Ui.OBSERVE, rn, null, t); }

    _createNotifyingProperty(e) { this._addPropertyEffect(e, Ui.NOTIFY, { fn: Zi, info: { eventName: `${_i(e)}-changed`, property: e } }); }

    _createReflectedProperty(e) { const t = this.constructor.attributeNameForProperty(e); t[0] === '-' ? console.warn(`Property ${e} cannot be reflected to attribute ${t} because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`) : this._addPropertyEffect(e, Ui.REFLECT, { fn: Xi, info: { attrName: t } }); }

    _createComputedProperty(e, t, i) { const n = dn(t); if (!n) throw new Error(`Malformed computed expression '${t}'`); an(this, n, Ui.COMPUTE, Qi, e, i); }

    _marshalArgs(e, t, i) {
      const n = this.__data; const s = []; for (let o = 0, a = e.length; o < a; o++) {
        let {
          name: a, structured: r, wildcard: l, value: h, literal: c,
        } = e[o]; if (!c) if (l) { const e = ri(a, t); const s = un(n, i, e ? t : a); h = { path: e ? t : a, value: s, base: e ? di(n, a) : s }; } else h = r ? un(n, i, a) : n[a]; s[o] = h;
      } return s;
    }

    static addPropertyEffect(e, t, i) { this.prototype._addPropertyEffect(e, t, i); }

    static createPropertyObserver(e, t, i) { this.prototype._createPropertyObserver(e, t, i); }

    static createMethodObserver(e, t) { this.prototype._createMethodObserver(e, t); }

    static createNotifyingProperty(e) { this.prototype._createNotifyingProperty(e); }

    static createReadOnlyProperty(e, t) { this.prototype._createReadOnlyProperty(e, t); }

    static createReflectedProperty(e) { this.prototype._createReflectedProperty(e); }

    static createComputedProperty(e, t, i) { this.prototype._createComputedProperty(e, t, i); }

    static bindTemplate(e) { return this.prototype._bindTemplate(e); }

    _bindTemplate(e, t) { let i = this.constructor._parseTemplate(e); const n = this.__templateInfo == i; if (!n) for (const e in i.propertyEffects) this._createPropertyAccessor(e); if (t && (i = Object.create(i), i.wasPreBound = n, !n && this.__templateInfo)) { const e = this.__templateInfoLast || this.__templateInfo; return this.__templateInfoLast = e.nextTemplateInfo = i, i.previousTemplateInfo = e, i; } return this.__templateInfo = i; }

    static _addTemplatePropertyEffect(e, t, i) { (e.hostProps = e.hostProps || {})[t] = !0; const n = e.propertyEffects = e.propertyEffects || {}; (n[t] = n[t] || []).push(i); }

    _stampTemplate(e) { _n.beginHosting(this); const t = super._stampTemplate(e); _n.endHosting(this); const i = this._bindTemplate(e, !0); if (i.nodeList = t.nodeList, !i.wasPreBound) { const e = i.childNodes = []; for (let i = t.firstChild; i; i = i.nextSibling)e.push(i); } return t.templateInfo = i, (function (e, t) { const { nodeList: i, nodeInfoList: n } = t; if (n.length) for (let t = 0; t < n.length; t++) { const s = n[t]; const o = i[t]; const a = s.bindings; if (a) for (let t = 0; t < a.length; t++) { const i = a[t]; sn(o, i), on(o, e, i); }o.__dataHost = e; } }(this, i)), this.__dataReady && ji(this, i.propertyEffects, this.__data, null, !1, i.nodeList), t; }

    _removeBoundDom(e) { const t = e.templateInfo; t.previousTemplateInfo && (t.previousTemplateInfo.nextTemplateInfo = t.nextTemplateInfo), t.nextTemplateInfo && (t.nextTemplateInfo.previousTemplateInfo = t.previousTemplateInfo), this.__templateInfoLast == t && (this.__templateInfoLast = t.previousTemplateInfo), t.previousTemplateInfo = t.nextTemplateInfo = null; const i = t.childNodes; for (let e = 0; e < i.length; e++) { const t = i[e]; t.parentNode.removeChild(t); } }

    static _parseTemplateNode(e, i, n) { let s = t._parseTemplateNode.call(this, e, i, n); if (e.nodeType === Node.TEXT_NODE) { const t = this._parseBindings(e.textContent, i); t && (e.textContent = cn(t) || ' ', en(this, i, n, 'text', 'textContent', t), s = !0); } return s; }

    static _parseTemplateNodeAttribute(e, i, n, s, o) { const a = this._parseBindings(o, i); if (a) { const t = s; let o = 'property'; $i.test(s) ? o = 'attribute' : s[s.length - 1] == '$' && (s = s.slice(0, -1), o = 'attribute'); let r = cn(a); return r && o == 'attribute' && (s == 'class' && e.hasAttribute('class') && (r += ` ${e.getAttribute(s)}`), e.setAttribute(s, r)), e.localName === 'input' && t === 'value' && e.setAttribute(t, ''), e.removeAttribute(t), o === 'property' && (s = gi(s)), en(this, i, n, o, s, a, r), !0; } return t._parseTemplateNodeAttribute.call(this, e, i, n, s, o); }

    static _parseTemplateNestedTemplate(e, i, n) { const s = t._parseTemplateNestedTemplate.call(this, e, i, n); const o = n.templateInfo.hostProps; for (const e in o) { en(this, i, n, 'property', `_host_${e}`, [{ mode: '{', source: e, dependencies: [e] }]); } return s; }

    static _parseBindings(e, t) {
      let i; const n = []; let s = 0; for (;(i = hn.exec(e)) !== null;) {
        i.index > s && n.push({ literal: e.slice(s, i.index) }); const o = i[1][0]; const a = Boolean(i[2]); let r = i[3].trim(); let l = !1; let h = ''; let c = -1; o == '{' && (c = r.indexOf('::')) > 0 && (h = r.substring(c + 2), r = r.substring(0, c), l = !0); const d = dn(r); const p = []; if (d) { const { args: e, methodName: i } = d; for (let t = 0; t < e.length; t++) { const i = e[t]; i.literal || p.push(i); } const n = t.dynamicFns; (n && n[i] || d.static) && (p.push(i), d.dynamicFn = !0); } else p.push(r); n.push({
          source: r, mode: o, negate: a, customEvent: l, signature: d, dependencies: p, event: h,
        }), s = hn.lastIndex;
      } if (s && s < e.length) { const t = e.substring(s); t && n.push({ literal: t }); } return n.length ? n : null;
    }

    static _evaluateBinding(e, t, i, n, s, o) { let a; return a = t.signature ? rn(e, i, n, 0, t.signature) : i != t.source ? di(e, t.source) : o && si(i) ? di(e, i) : e.__data[i], t.negate && (a = !a), a; }
  };
}); const _n = new class {
  constructor() { this.stack = []; }

  registerHost(e) { if (this.stack.length) { this.stack[this.stack.length - 1]._enqueueClient(e); } }

  beginHosting(e) { this.stack.push(e); }

  endHosting(e) { const t = this.stack.length; t && this.stack[t - 1] == e && this.stack.pop(); }
}(); const vn = qt((e) => {
  const t = Ei(e); function i(e) { const t = Object.getPrototypeOf(e); return t.prototype instanceof s ? t : null; } function n(e) { if (!e.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', e))) { let t = null; if (e.hasOwnProperty(JSCompiler_renameProperty('properties', e))) { const i = e.properties; i && (t = (function (e) { const t = {}; for (const i in e) { const n = e[i]; t[i] = typeof n === 'function' ? { type: n } : n; } return t; }(i))); }e.__ownProperties = t; } return e.__ownProperties; } class s extends t {
    static get observedAttributes() { if (!this.hasOwnProperty(JSCompiler_renameProperty('__observedAttributes', this))) { this.prototype; const e = this._properties; this.__observedAttributes = e ? Object.keys(e).map((e) => this.attributeNameForProperty(e)) : []; } return this.__observedAttributes; }

    static finalize() { if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) { const e = i(this); e && e.finalize(), this.__finalized = !0, this._finalizeClass(); } }

    static _finalizeClass() { const e = n(this); e && this.createProperties(e); }

    static get _properties() { if (!this.hasOwnProperty(JSCompiler_renameProperty('__properties', this))) { const e = i(this); this.__properties = { ...e && e._properties, ...n(this) }; } return this.__properties; }

    static typeForProperty(e) { const t = this._properties[e]; return t && t.type; }

    _initializeProperties() { this.constructor.finalize(), super._initializeProperties(); }

    connectedCallback() { super.connectedCallback && super.connectedCallback(), this._enableProperties(); }

    disconnectedCallback() { super.disconnectedCallback && super.disconnectedCallback(); }
  } return s;
}); const yn = window.ShadyCSS && window.ShadyCSS.cssBuild; const bn = qt((e) => {
  const t = vn(gn(e)); function i(e, t, i, n) { i.computed && (i.readOnly = !0), i.computed && (e._hasReadOnlyEffect(t) ? console.warn(`Cannot redefine computed property '${t}'.`) : e._createComputedProperty(t, i.computed, n)), i.readOnly && !e._hasReadOnlyEffect(t) ? e._createReadOnlyProperty(t, !i.computed) : !1 === i.readOnly && e._hasReadOnlyEffect(t) && console.warn(`Cannot make readOnly property '${t}' non-readOnly.`), i.reflectToAttribute && !e._hasReflectEffect(t) ? e._createReflectedProperty(t) : !1 === i.reflectToAttribute && e._hasReflectEffect(t) && console.warn(`Cannot make reflected property '${t}' non-reflected.`), i.notify && !e._hasNotifyEffect(t) ? e._createNotifyingProperty(t) : !1 === i.notify && e._hasNotifyEffect(t) && console.warn(`Cannot make notify property '${t}' non-notify.`), i.observer && e._createPropertyObserver(t, i.observer, n[i.observer]), e._addPropertyToAttributeMap(t); } function n(e, t, i, n) { if (!yn) { const s = t.content.querySelectorAll('style'); const o = ei(t); const a = (function (e) { const t = Jt(e); return t ? ti(t) : []; }(i)); const r = t.content.firstElementChild; for (let i = 0; i < a.length; i++) { const s = a[i]; s.textContent = e._processStyleText(s.textContent, n), t.content.insertBefore(s, r); } let l = 0; for (let t = 0; t < o.length; t++) { let i = o[t]; const a = s[l]; a !== i ? (i = i.cloneNode(!0), a.parentNode.insertBefore(i, a)) : l++, i.textContent = e._processStyleText(i.textContent, n); } }window.ShadyCSS && window.ShadyCSS.prepareTemplate(t, i); } return class extends t {
    static get polymerElementVersion() { return '3.3.1'; }

    static _finalizeClass() { t._finalizeClass.call(this); const e = ((i = this).hasOwnProperty(JSCompiler_renameProperty('__ownObservers', i)) || (i.__ownObservers = i.hasOwnProperty(JSCompiler_renameProperty('observers', i)) ? i.observers : null), i.__ownObservers); let i; e && this.createObservers(e, this._properties), this._prepareTemplate(); }

    static _prepareTemplate() { let e = this.template; e && (typeof e === 'string' ? (console.error('template getter must return HTMLTemplateElement'), e = null) : e = e.cloneNode(!0)), this.prototype._template = e; }

    static createProperties(e) { for (const t in e)i(this.prototype, t, e[t], e); }

    static createObservers(e, t) { const i = this.prototype; for (let n = 0; n < e.length; n++)i._createMethodObserver(e[n], t); }

    static get template() { return this.hasOwnProperty(JSCompiler_renameProperty('_template', this)) || (this._template = this.prototype.hasOwnProperty(JSCompiler_renameProperty('_template', this.prototype)) ? this.prototype._template : (function (e) { let t = null; return e && (t = Gt.import(e, 'template')), t; }(this.is)) || Object.getPrototypeOf(this.prototype).constructor.template), this._template; }

    static set template(e) { this._template = e; }

    static get importPath() { if (!this.hasOwnProperty(JSCompiler_renameProperty('_importPath', this))) { const e = this.importMeta; if (e) this._importPath = Bt(e.url); else { const e = Gt.import(this.is); this._importPath = e && e.assetpath || Object.getPrototypeOf(this.prototype).constructor.importPath; } } return this._importPath; }

    constructor() { super(), this._template, this._importPath, this.rootPath, this.importPath, this.root, this.$; }

    _initializeProperties() { this.constructor.finalize(), this.constructor._finalizeTemplate(this.localName), super._initializeProperties(), this.rootPath = $t, this.importPath = this.constructor.importPath; const e = (function (e) { if (!e.hasOwnProperty(JSCompiler_renameProperty('__propertyDefaults', e))) { e.__propertyDefaults = null; const t = e._properties; for (const i in t) { const n = t[i]; 'value' in n && (e.__propertyDefaults = e.__propertyDefaults || {}, e.__propertyDefaults[i] = n); } } return e.__propertyDefaults; }(this.constructor)); if (e) for (const t in e) { const i = e[t]; if (!this.hasOwnProperty(t)) { const e = typeof i.value === 'function' ? i.value.call(this) : i.value; this._hasAccessor(t) ? this._setPendingProperty(t, e, !0) : this[t] = e; } } }

    static _processStyleText(e, t) { return Dt(e, t); }

    static _finalizeTemplate(e) { const t = this.prototype._template; if (t && !t.__polymerFinalized) { t.__polymerFinalized = !0; const i = this.importPath; n(this, t, e, i ? Ft(i) : ''), this.prototype._bindTemplate(t); } }

    connectedCallback() { window.ShadyCSS && this._template && window.ShadyCSS.styleElement(this), super.connectedCallback(); }

    ready() { this._template && (this.root = this._stampTemplate(this._template), this.$ = this.root.$), super.ready(); }

    _readyClients() { this._template && (this.root = this._attachDom(this.root)), super._readyClients(); }

    _attachDom(e) { const t = ni(this); if (t.attachShadow) return e ? (t.shadowRoot || (t.attachShadow({ mode: 'open', shadyUpgradeFragment: e }), t.shadowRoot.appendChild(e)), t.shadowRoot) : null; throw new Error('ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.'); }

    updateStyles(e) { window.ShadyCSS && window.ShadyCSS.styleSubtree(this, e); }

    resolveUrl(e, t) { return !t && this.importPath && (t = Ft(this.importPath)), Ft(e, t); }

    static _parseTemplateContent(e, i, n) { return i.dynamicFns = i.dynamicFns || this._properties, t._parseTemplateContent.call(this, e, i, n); }

    static _addTemplatePropertyEffect(e, i, n) { return t._addTemplatePropertyEffect.call(this, e, i, n); }
  };
}); class wn {
  constructor() { this._asyncModule = null, this._callback = null, this._timer = null; }

  setConfig(e, t) { this._asyncModule = e, this._callback = t, this._timer = this._asyncModule.run(() => { this._timer = null, zn.delete(this), this._callback(); }); }

  cancel() { this.isActive() && (this._cancelAsync(), zn.delete(this)); }

  _cancelAsync() { this.isActive() && (this._asyncModule.cancel(this._timer), this._timer = null); }

  flush() { this.isActive() && (this.cancel(), this._callback()); }

  isActive() { return this._timer != null; }

  static debounce(e, t, i) { return e instanceof wn ? e._cancelAsync() : e = new wn(), e.setConfig(t, i), e; }
} let zn = new Set(); const Cn = function (e) { zn.add(e); }; const Sn = function () { const e = Boolean(zn.size); return zn.forEach((e) => { try { e.flush(); } catch (e) { setTimeout(() => { throw e; }); } }), e; }; const xn = typeof document.head.style.touchAction === 'string'; const Mn = '__polymerGesturesHandled'; const En = '__polymerGesturesTouchAction'; const Tn = ['mousedown', 'mousemove', 'mouseup', 'click']; const Hn = [0, 1, 4, 2]; const An = (function () { try { return new MouseEvent('test', { buttons: 1 }).buttons === 1; } catch (e) { return !1; } }()); function kn(e) { return Tn.indexOf(e) > -1; } let Ln = !1; function Pn(e) { kn(e); }!(function () { try { const e = Object.defineProperty({}, 'passive', { get() { Ln = !0; } }); window.addEventListener('test', null, e), window.removeEventListener('test', null, e); } catch (e) {} }()); const Vn = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/); const On = []; const In = {
  button: !0, input: !0, keygen: !0, meter: !0, output: !0, textarea: !0, progress: !0, select: !0,
}; const Nn = {
  button: !0, command: !0, fieldset: !0, input: !0, keygen: !0, optgroup: !0, option: !0, select: !0, textarea: !0,
}; function Rn(e) { let t = Array.prototype.slice.call(e.labels || []); if (!t.length) { t = []; const i = e.getRootNode(); if (e.id) { const n = i.querySelectorAll(`label[for = ${e.id}]`); for (let e = 0; e < n.length; e++)t.push(n[e]); } } return t; } const Fn = function (e) { const t = e.sourceCapabilities; let i; if ((!t || t.firesTouchEvents) && (e[Mn] = { skip: !0 }, e.type === 'click')) { let t = !1; const n = jn(e); for (let e = 0; e < n.length; e++) { if (n[e].nodeType === Node.ELEMENT_NODE) if (n[e].localName === 'label')On.push(n[e]); else if (i = n[e], In[i.localName]) { const i = Rn(n[e]); for (let e = 0; e < i.length; e++)t = t || On.indexOf(i[e]) > -1; } if (n[e] === Un.mouse.target) return; } if (t) return; e.preventDefault(), e.stopPropagation(); } }; function Dn(e) { const t = Vn ? ['click'] : Tn; for (let i, n = 0; n < t.length; n++)i = t[n], e ? (On.length = 0, document.addEventListener(i, Fn, !0)) : document.removeEventListener(i, Fn, !0); } function Bn(e) { const t = e.type; if (!kn(t)) return !1; if (t === 'mousemove') { let t = void 0 === e.buttons ? 1 : e.buttons; return e instanceof window.MouseEvent && !An && (t = Hn[e.which] || 0), Boolean(1 & t); } return (void 0 === e.button ? 0 : e.button) === 0; } let Un = {
  mouse: { target: null, mouseIgnoreJob: null },
  touch: {
    x: 0, y: 0, id: -1, scrollDecided: !1,
  },
}; function $n(e, t, i) { e.movefn = t, e.upfn = i, document.addEventListener('mousemove', t), document.addEventListener('mouseup', i); } function Kn(e) { document.removeEventListener('mousemove', e.movefn), document.removeEventListener('mouseup', e.upfn), e.movefn = null, e.upfn = null; }document.addEventListener('touchend', ((e) => { Un.mouse.mouseIgnoreJob || Dn(!0), Un.mouse.target = jn(e)[0], Un.mouse.mouseIgnoreJob = wn.debounce(Un.mouse.mouseIgnoreJob, Ci.after(2500), (() => { Dn(), Un.mouse.target = null, Un.mouse.mouseIgnoreJob = null; })); }), !!Ln && { passive: !0 }); const jn = window.ShadyDOM && window.ShadyDOM.noPatch ? window.ShadyDOM.composedPath : (e) => e.composedPath && e.composedPath() || []; const qn = {}; const Yn = []; function Wn(e) { const t = jn(e); return t.length > 0 ? t[0] : e.target; } function Gn(e) { let t; const i = e.type; const n = e.currentTarget.__polymerGestures; if (!n) return; const s = n[i]; if (s) { if (!e[Mn] && (e[Mn] = {}, i.slice(0, 5) === 'touch')) { const t = (e = e).changedTouches[0]; if (i === 'touchstart' && e.touches.length === 1 && (Un.touch.id = t.identifier), Un.touch.id !== t.identifier) return; xn || i !== 'touchstart' && i !== 'touchmove' || (function (e) { const t = e.changedTouches[0]; const i = e.type; if (i === 'touchstart')Un.touch.x = t.clientX, Un.touch.y = t.clientY, Un.touch.scrollDecided = !1; else if (i === 'touchmove') { if (Un.touch.scrollDecided) return; Un.touch.scrollDecided = !0; const i = (function (e) { let t = 'auto'; const i = jn(e); for (let e, n = 0; n < i.length; n++) if (e = i[n], e[En]) { t = e[En]; break; } return t; }(e)); let n = !1; const s = Math.abs(Un.touch.x - t.clientX); const o = Math.abs(Un.touch.y - t.clientY); e.cancelable && (i === 'none' ? n = !0 : i === 'pan-x' ? n = o > s : i === 'pan-y' && (n = s > o)), n ? e.preventDefault() : ts('track'); } }(e)); } if (t = e[Mn], !t.skip) { for (let i, n = 0; n < Yn.length; n++)i = Yn[n], s[i.name] && !t[i.name] && i.flow && i.flow.start.indexOf(e.type) > -1 && i.reset && i.reset(); for (let n, o = 0; o < Yn.length; o++)n = Yn[o], s[n.name] && !t[n.name] && (t[n.name] = !0, n[i](e)); } } } function Jn(e, t, i) { return !!qn[t] && ((function (e, t, i) { const n = qn[t]; const s = n.deps; const o = n.name; let a = e.__polymerGestures; a || (e.__polymerGestures = a = {}); for (let t, i, n = 0; n < s.length; n++)t = s[n], Vn && kn(t) && t !== 'click' || (i = a[t], i || (a[t] = i = { _count: 0 }), i._count === 0 && e.addEventListener(t, Gn, Pn(t)), i[o] = (i[o] || 0) + 1, i._count = (i._count || 0) + 1); e.addEventListener(t, i), n.touchAction && Qn(e, n.touchAction); }(e, t, i)), !0); } function Zn(e, t, i) { return !!qn[t] && ((function (e, t, i) { const n = qn[t]; const s = n.deps; const o = n.name; const a = e.__polymerGestures; if (a) for (let t, i, n = 0; n < s.length; n++)t = s[n], i = a[t], i && i[o] && (i[o] = (i[o] || 1) - 1, i._count = (i._count || 1) - 1, i._count === 0 && e.removeEventListener(t, Gn, Pn(t))); e.removeEventListener(t, i); }(e, t, i)), !0); } function Xn(e) { Yn.push(e); for (let t = 0; t < e.emits.length; t++)qn[e.emits[t]] = e; } function Qn(e, t) { xn && e instanceof HTMLElement && xi.run(() => { e.style.touchAction = t; }), e[En] = t; } function es(e, t, i) { const n = new Event(t, { bubbles: !0, cancelable: !0, composed: !0 }); if (n.detail = i, ni(e).dispatchEvent(n), n.defaultPrevented) { const e = i.preventer || i.sourceEvent; e && e.preventDefault && e.preventDefault(); } } function ts(e) { const t = (function (e) { for (let t, i = 0; i < Yn.length; i++) { t = Yn[i]; for (let i, n = 0; n < t.emits.length; n++) if (i = t.emits[n], i === e) return t; } return null; }(e)); t.info && (t.info.prevent = !0); } function is(e, t, i, n) {
  t && es(t, e, {
    x: i.clientX, y: i.clientY, sourceEvent: i, preventer: n, prevent(e) { return ts(e); },
  });
} function ns(e, t, i) { if (e.prevent) return !1; if (e.started) return !0; const n = Math.abs(e.x - t); const s = Math.abs(e.y - i); return n >= 5 || s >= 5; } function ss(e, t, i) {
  if (!t) return; let n; const s = e.moves[e.moves.length - 2]; const o = e.moves[e.moves.length - 1]; const a = o.x - e.x; const r = o.y - e.y; let l = 0; s && (n = o.x - s.x, l = o.y - s.y), es(t, 'track', {
    state: e.state, x: i.clientX, y: i.clientY, dx: a, dy: r, ddx: n, ddy: l, sourceEvent: i, hover() { return (function (e, t) { let i = document.elementFromPoint(e, t); let n = i; for (;n && n.shadowRoot && !window.ShadyDOM;) { const s = n; if (n = n.shadowRoot.elementFromPoint(e, t), s === n) break; n && (i = n); } return i; }(i.clientX, i.clientY)); },
  });
} function os(e, t, i) {
  const n = Math.abs(t.clientX - e.x); const s = Math.abs(t.clientY - e.y); const o = Wn(i || t); !o || Nn[o.localName] && o.hasAttribute('disabled') || (isNaN(n) || isNaN(s) || n <= 25 && s <= 25 || (function (e) { if (e.type === 'click') { if (e.detail === 0) return !0; const t = Wn(e); if (!t.nodeType || t.nodeType !== Node.ELEMENT_NODE) return !0; const i = t.getBoundingClientRect(); const n = e.pageX; const s = e.pageY; return !(n >= i.left && n <= i.right && s >= i.top && s <= i.bottom); } return !1; }(t))) && (e.prevent || es(o, 'tap', {
    x: t.clientX, y: t.clientY, sourceEvent: t, preventer: i,
  }));
}Xn({
  name: 'downup', deps: ['mousedown', 'touchstart', 'touchend'], flow: { start: ['mousedown', 'touchstart'], end: ['mouseup', 'touchend'] }, emits: ['down', 'up'], info: { movefn: null, upfn: null }, reset() { Kn(this.info); }, mousedown(e) { if (!Bn(e)) return; const t = Wn(e); const i = this; $n(this.info, ((e) => { Bn(e) || (is('up', t, e), Kn(i.info)); }), ((e) => { Bn(e) && is('up', t, e), Kn(i.info); })), is('down', t, e); }, touchstart(e) { is('down', Wn(e), e.changedTouches[0], e); }, touchend(e) { is('up', Wn(e), e.changedTouches[0], e); },
}), Xn({
  name: 'track',
  touchAction: 'none',
  deps: ['mousedown', 'touchstart', 'touchmove', 'touchend'],
  flow: { start: ['mousedown', 'touchstart'], end: ['mouseup', 'touchend'] },
  emits: ['track'],
  info: {
    x: 0, y: 0, state: 'start', started: !1, moves: [], addMove(e) { this.moves.length > 2 && this.moves.shift(), this.moves.push(e); }, movefn: null, upfn: null, prevent: !1,
  },
  reset() { this.info.state = 'start', this.info.started = !1, this.info.moves = [], this.info.x = 0, this.info.y = 0, this.info.prevent = !1, Kn(this.info); },
  mousedown(e) { if (!Bn(e)) return; const t = Wn(e); const i = this; const n = function (e) { const n = e.clientX; const s = e.clientY; ns(i.info, n, s) && (i.info.state = i.info.started ? e.type === 'mouseup' ? 'end' : 'track' : 'start', i.info.state === 'start' && ts('tap'), i.info.addMove({ x: n, y: s }), Bn(e) || (i.info.state = 'end', Kn(i.info)), t && ss(i.info, t, e), i.info.started = !0); }; $n(this.info, n, ((e) => { i.info.started && n(e), Kn(i.info); })), this.info.x = e.clientX, this.info.y = e.clientY; },
  touchstart(e) { const t = e.changedTouches[0]; this.info.x = t.clientX, this.info.y = t.clientY; },
  touchmove(e) { const t = Wn(e); const i = e.changedTouches[0]; const n = i.clientX; const s = i.clientY; ns(this.info, n, s) && (this.info.state === 'start' && ts('tap'), this.info.addMove({ x: n, y: s }), ss(this.info, t, i), this.info.state = 'track', this.info.started = !0); },
  touchend(e) { const t = Wn(e); const i = e.changedTouches[0]; this.info.started && (this.info.state = 'end', this.info.addMove({ x: i.clientX, y: i.clientY }), ss(this.info, t, i)); },
}), Xn({
  name: 'tap', deps: ['mousedown', 'click', 'touchstart', 'touchend'], flow: { start: ['mousedown', 'touchstart'], end: ['click', 'touchend'] }, emits: ['tap'], info: { x: NaN, y: NaN, prevent: !1 }, reset() { this.info.x = NaN, this.info.y = NaN, this.info.prevent = !1; }, mousedown(e) { Bn(e) && (this.info.x = e.clientX, this.info.y = e.clientY); }, click(e) { Bn(e) && os(this.info, e); }, touchstart(e) { const t = e.changedTouches[0]; this.info.x = t.clientX, this.info.y = t.clientY; }, touchend(e) { os(this.info, e.changedTouches[0], e); },
}); const as = Wn; const rs = qt((e) => class extends e {
  _addEventListenerToNode(e, t, i) { Jn(e, t, i) || super._addEventListenerToNode(e, t, i); }

  _removeEventListenerFromNode(e, t, i) { Zn(e, t, i) || super._removeEventListenerFromNode(e, t, i); }
}); const ls = /:host\(:dir\((ltr|rtl)\)\)/g; const hs = /([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g; const cs = /:dir\((?:ltr|rtl)\)/; const ds = Boolean(window.ShadyDOM && window.ShadyDOM.inUse); const ps = []; let us = null; let fs = ''; function ms() { fs = document.documentElement.getAttribute('dir'); } function gs(e) { if (!e.__autoDirOptOut) { e.setAttribute('dir', fs); } } function _s() { ms(), fs = document.documentElement.getAttribute('dir'); for (let e = 0; e < ps.length; e++)gs(ps[e]); } const vs = qt((e) => {
  ds || us || (ms(), us = new MutationObserver(_s), us.observe(document.documentElement, { attributes: !0, attributeFilter: ['dir'] })); const t = Ai(e); class i extends t {
    static _processStyleText(e, i) { return e = t._processStyleText.call(this, e, i), !ds && cs.test(e) && (e = this._replaceDirInCssText(e), this.__activateDir = !0), e; }

    static _replaceDirInCssText(e) { let t = e; return t = t.replace(ls, ':host([dir="$1"])'), t = t.replace(hs, ':host([dir="$2"]) $1'), t; }

    constructor() { super(), this.__autoDirOptOut = !1; }

    ready() { super.ready(), this.__autoDirOptOut = this.hasAttribute('dir'); }

    connectedCallback() { t.prototype.connectedCallback && super.connectedCallback(), this.constructor.__activateDir && (us && us.takeRecords().length && _s(), ps.push(this), gs(this)); }

    disconnectedCallback() { if (t.prototype.disconnectedCallback && super.disconnectedCallback(), this.constructor.__activateDir) { const e = ps.indexOf(this); e > -1 && ps.splice(e, 1); } }
  } return i.__activateDir = !1, i;
}); function ys() { document.body.removeAttribute('unresolved'); } function bs(e, t, i) { return { index: e, removed: t, addedCount: i }; }document.readyState === 'interactive' || document.readyState === 'complete' ? ys() : window.addEventListener('DOMContentLoaded', ys); function ws(e, t, i, n, s, o) { let a; let r = 0; let l = 0; const h = Math.min(i - t, o - s); if (t == 0 && s == 0 && (r = (function (e, t, i) { for (let n = 0; n < i; n++) if (!Cs(e[n], t[n])) return n; return i; }(e, n, h))), i == e.length && o == n.length && (l = (function (e, t, i) { let n = e.length; let s = t.length; let o = 0; for (;o < i && Cs(e[--n], t[--s]);)o++; return o; }(e, n, h - r))), s += r, o -= l, (i -= l) - (t += r) == 0 && o - s == 0) return []; if (t == i) { for (a = bs(t, [], 0); s < o;)a.removed.push(n[s++]); return [a]; } if (s == o) return [bs(t, [], i - t)]; const c = (function (e) { let t = e.length - 1; let i = e[0].length - 1; let n = e[t][i]; const s = []; for (;t > 0 || i > 0;) { if (t == 0) { s.push(2), i--; continue; } if (i == 0) { s.push(3), t--; continue; } let o; const a = e[t - 1][i - 1]; const r = e[t - 1][i]; const l = e[t][i - 1]; o = r < l ? r < a ? r : a : l < a ? l : a, o == a ? (a == n ? s.push(0) : (s.push(1), n = a), t--, i--) : o == r ? (s.push(3), t--, n = r) : (s.push(2), i--, n = l); } return s.reverse(), s; }(function (e, t, i, n, s, o) { const a = o - s + 1; const r = i - t + 1; const l = new Array(a); for (let e = 0; e < a; e++)l[e] = new Array(r), l[e][0] = e; for (let e = 0; e < r; e++)l[0][e] = e; for (let i = 1; i < a; i++) for (let o = 1; o < r; o++) if (Cs(e[t + o - 1], n[s + i - 1]))l[i][o] = l[i - 1][o - 1]; else { const e = l[i - 1][o] + 1; const t = l[i][o - 1] + 1; l[i][o] = e < t ? e : t; } return l; }(e, t, i, n, s, o))); a = void 0; const d = []; let p = t; let u = s; for (let e = 0; e < c.length; e++) switch (c[e]) { case 0: a && (d.push(a), a = void 0), p++, u++; break; case 1: a || (a = bs(p, [], 0)), a.addedCount++, p++, a.removed.push(n[u]), u++; break; case 2: a || (a = bs(p, [], 0)), a.addedCount++, p++; break; case 3: a || (a = bs(p, [], 0)), a.removed.push(n[u]), u++; } return a && d.push(a), d; } function zs(e, t) { return ws(e, 0, e.length, t, 0, t.length); } function Cs(e, t) { return e === t; } function Ss(e) { return e.localName === 'slot'; } const xs = class {
  static getFlattenedNodes(e) { const t = ni(e); return Ss(e) ? (e = e, t.assignedNodes({ flatten: !0 })) : Array.from(t.childNodes).map((e) => (Ss(e) ? ni(e = e).assignedNodes({ flatten: !0 }) : [e])).reduce((e, t) => e.concat(t), []); }

  constructor(e, t) { this._shadyChildrenObserver = null, this._nativeChildrenObserver = null, this._connected = !1, this._target = e, this.callback = t, this._effectiveNodes = [], this._observer = null, this._scheduled = !1, this._boundSchedule = () => { this._schedule(); }, this.connect(), this._schedule(); }

  connect() { Ss(this._target) ? this._listenSlots([this._target]) : ni(this._target).children && (this._listenSlots(ni(this._target).children), window.ShadyDOM ? this._shadyChildrenObserver = window.ShadyDOM.observeChildren(this._target, (e) => { this._processMutations(e); }) : (this._nativeChildrenObserver = new MutationObserver((e) => { this._processMutations(e); }), this._nativeChildrenObserver.observe(this._target, { childList: !0 }))), this._connected = !0; }

  disconnect() { Ss(this._target) ? this._unlistenSlots([this._target]) : ni(this._target).children && (this._unlistenSlots(ni(this._target).children), window.ShadyDOM && this._shadyChildrenObserver ? (window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver), this._shadyChildrenObserver = null) : this._nativeChildrenObserver && (this._nativeChildrenObserver.disconnect(), this._nativeChildrenObserver = null)), this._connected = !1; }

  _schedule() { this._scheduled || (this._scheduled = !0, xi.run(() => this.flush())); }

  _processMutations(e) { this._processSlotMutations(e), this.flush(); }

  _processSlotMutations(e) { if (e) for (let t = 0; t < e.length; t++) { const i = e[t]; i.addedNodes && this._listenSlots(i.addedNodes), i.removedNodes && this._unlistenSlots(i.removedNodes); } }

  flush() { if (!this._connected) return !1; window.ShadyDOM && ShadyDOM.flush(), this._nativeChildrenObserver ? this._processSlotMutations(this._nativeChildrenObserver.takeRecords()) : this._shadyChildrenObserver && this._processSlotMutations(this._shadyChildrenObserver.takeRecords()), this._scheduled = !1; const e = { target: this._target, addedNodes: [], removedNodes: [] }; const t = this.constructor.getFlattenedNodes(this._target); const i = zs(t, this._effectiveNodes); for (let t, n = 0; n < i.length && (t = i[n]); n++) for (let i, n = 0; n < t.removed.length && (i = t.removed[n]); n++)e.removedNodes.push(i); for (let n, s = 0; s < i.length && (n = i[s]); s++) for (let i = n.index; i < n.index + n.addedCount; i++)e.addedNodes.push(t[i]); this._effectiveNodes = t; let n = !1; return (e.addedNodes.length || e.removedNodes.length) && (n = !0, this.callback.call(this._target, e)), n; }

  _listenSlots(e) { for (let t = 0; t < e.length; t++) { const i = e[t]; Ss(i) && i.addEventListener('slotchange', this._boundSchedule); } }

  _unlistenSlots(e) { for (let t = 0; t < e.length; t++) { const i = e[t]; Ss(i) && i.removeEventListener('slotchange', this._boundSchedule); } }
}; const Ms = function () { let e; let t; do { e = window.ShadyDOM && ShadyDOM.flush(), window.ShadyCSS && window.ShadyCSS.ScopingShim && window.ShadyCSS.ScopingShim.flush(), t = Sn(); } while (e || t); }; const Es = Element.prototype; const Ts = Es.matches || Es.matchesSelector || Es.mozMatchesSelector || Es.msMatchesSelector || Es.oMatchesSelector || Es.webkitMatchesSelector; const Hs = function (e, t) { return Ts.call(e, t); }; class As {
  constructor(e) { window.ShadyDOM && window.ShadyDOM.inUse && window.ShadyDOM.patch(e), this.node = e; }

  observeNodes(e) { return new xs(this.node, e); }

  unobserveNodes(e) { e.disconnect(); }

  notifyObserver() {}

  deepContains(e) { if (ni(this.node).contains(e)) return !0; let t = e; const i = e.ownerDocument; for (;t && t !== i && t !== this.node;)t = ni(t).parentNode || ni(t).host; return t === this.node; }

  getOwnerRoot() { return ni(this.node).getRootNode(); }

  getDistributedNodes() { return this.node.localName === 'slot' ? ni(this.node).assignedNodes({ flatten: !0 }) : []; }

  getDestinationInsertionPoints() { const e = []; let t = ni(this.node).assignedSlot; for (;t;)e.push(t), t = ni(t).assignedSlot; return e; }

  importNode(e, t) { const i = this.node instanceof Document ? this.node : this.node.ownerDocument; return ni(i).importNode(e, t); }

  getEffectiveChildNodes() { return xs.getFlattenedNodes(this.node); }

  queryDistributedElements(e) { const t = this.getEffectiveChildNodes(); const i = []; for (let n, s = 0, o = t.length; s < o && (n = t[s]); s++)n.nodeType === Node.ELEMENT_NODE && Hs(n, e) && i.push(n); return i; }

  get activeElement() { const e = this.node; return void 0 !== e._activeElement ? e._activeElement : e.activeElement; }
} function ks(e, t) { for (let i = 0; i < t.length; i++) { const n = t[i]; Object.defineProperty(e, n, { get() { return this.node[n]; }, configurable: !0 }); } } class Ls {
  constructor(e) { this.event = e; }

  get rootTarget() { return this.path[0]; }

  get localTarget() { return this.event.target; }

  get path() { return this.event.composedPath(); }
}As.prototype.cloneNode, As.prototype.appendChild, As.prototype.insertBefore, As.prototype.removeChild, As.prototype.replaceChild, As.prototype.setAttribute, As.prototype.removeAttribute, As.prototype.querySelector, As.prototype.querySelectorAll, As.prototype.parentNode, As.prototype.firstChild, As.prototype.lastChild, As.prototype.nextSibling, As.prototype.previousSibling, As.prototype.firstElementChild, As.prototype.lastElementChild, As.prototype.nextElementSibling, As.prototype.previousElementSibling, As.prototype.childNodes, As.prototype.children, As.prototype.classList, As.prototype.textContent, As.prototype.innerHTML; let Ps = As; if (window.ShadyDOM && window.ShadyDOM.inUse && window.ShadyDOM.noPatch && window.ShadyDOM.Wrapper) { class e extends window.ShadyDOM.Wrapper {}Object.getOwnPropertyNames(As.prototype).forEach((t) => { t != 'activeElement' && (e.prototype[t] = As.prototype[t]); }), ks(e.prototype, ['classList']), Ps = e, Object.defineProperties(Ls.prototype, { localTarget: { get() { const e = this.event.currentTarget; const t = e && Vs(e).getOwnerRoot(); const i = this.path; for (let e = 0; e < i.length; e++) { const n = i[e]; if (Vs(n).getOwnerRoot() === t) return n; } }, configurable: !0 }, path: { get() { return window.ShadyDOM.composedPath(this.event); }, configurable: !0 } }); } else !(function (e, t) { for (let i = 0; i < t.length; i++) { const n = t[i]; e[n] = function () { return this.node[n].apply(this.node, arguments); }; } }(As.prototype, ['cloneNode', 'appendChild', 'insertBefore', 'removeChild', 'replaceChild', 'setAttribute', 'removeAttribute', 'querySelector', 'querySelectorAll'])), ks(As.prototype, ['parentNode', 'firstChild', 'lastChild', 'nextSibling', 'previousSibling', 'firstElementChild', 'lastElementChild', 'nextElementSibling', 'previousElementSibling', 'childNodes', 'children', 'classList']), (function (e, t) { for (let i = 0; i < t.length; i++) { const n = t[i]; Object.defineProperty(e, n, { get() { return this.node[n]; }, set(e) { this.node[n] = e; }, configurable: !0 }); } }(As.prototype, ['textContent', 'innerHTML', 'className'])); const Vs = function (e) { if ((e = e || document) instanceof Ps) return e; if (e instanceof Ls) return e; let t = e.__domApi; return t || (t = e instanceof Event ? new Ls(e) : new Ps(e), e.__domApi = t), t; }; const Os = window.ShadyDOM; const Is = window.ShadyCSS; function Ns(e, t) { return ni(e).getRootNode() === t; } const Rs = window.ShadyCSS; const Fs = qt((e) => {
  const t = vs(rs(bn(e))); const i = {
    x: 'pan-x', y: 'pan-y', none: 'none', all: 'auto',
  }; class n extends t {
    constructor() { super(), this.isAttached, this.__boundListeners, this._debouncers; }

    static get importMeta() { return this.prototype.importMeta; }

    created() {}

    connectedCallback() { super.connectedCallback(), this.isAttached = !0, this.attached(); }

    attached() {}

    disconnectedCallback() { super.disconnectedCallback(), this.isAttached = !1, this.detached(); }

    detached() {}

    attributeChangedCallback(e, t, i, n) { t !== i && (super.attributeChangedCallback(e, t, i, n), this.attributeChanged(e, t, i)); }

    attributeChanged(e, t, i) {}

    _initializeProperties() { const e = Object.getPrototypeOf(this); e.hasOwnProperty(JSCompiler_renameProperty('__hasRegisterFinished', e)) || (this._registered(), e.__hasRegisterFinished = !0), super._initializeProperties(), this.root = this, this.created(), this._applyListeners(); }

    _registered() {}

    ready() { this._ensureAttributes(), super.ready(); }

    _ensureAttributes() {}

    _applyListeners() {}

    serialize(e) { return this._serializeValue(e); }

    deserialize(e, t) { return this._deserializeValue(e, t); }

    reflectPropertyToAttribute(e, t, i) { this._propertyToAttribute(e, t, i); }

    serializeValueToAttribute(e, t, i) { this._valueToNodeAttribute(i || this, e, t); }

    extend(e, t) { if (!e || !t) return e || t; const i = Object.getOwnPropertyNames(t); for (let n, s = 0; s < i.length && (n = i[s]); s++) { const i = Object.getOwnPropertyDescriptor(t, n); i && Object.defineProperty(e, n, i); } return e; }

    mixin(e, t) { for (const i in t)e[i] = t[i]; return e; }

    chainObject(e, t) { return e && t && e !== t && (e.__proto__ = t), e; }

    instanceTemplate(e) { const t = this.constructor._contentForTemplate(e); return document.importNode(t, !0); }

    fire(e, t, i) { i = i || {}, t = t == null ? {} : t; const n = new Event(e, { bubbles: void 0 === i.bubbles || i.bubbles, cancelable: Boolean(i.cancelable), composed: void 0 === i.composed || i.composed }); n.detail = t; const s = i.node || this; return ni(s).dispatchEvent(n), n; }

    listen(e, t, i) { e = e || this; const n = this.__boundListeners || (this.__boundListeners = new WeakMap()); let s = n.get(e); s || (s = {}, n.set(e, s)); const o = t + i; s[o] || (s[o] = this._addMethodEventListenerToNode(e, t, i, this)); }

    unlisten(e, t, i) { e = e || this; const n = this.__boundListeners && this.__boundListeners.get(e); const s = t + i; const o = n && n[s]; o && (this._removeEventListenerFromNode(e, t, o), n[s] = null); }

    setScrollDirection(e, t) { Qn(t || this, i[e] || 'auto'); }

    $$(e) { return this.root.querySelector(e); }

    get domHost() { const e = ni(this).getRootNode(); return e instanceof DocumentFragment ? e.host : e; }

    distributeContent() { const e = Vs(this); window.ShadyDOM && e.shadowRoot && ShadyDOM.flush(); }

    getEffectiveChildNodes() { return Vs(this).getEffectiveChildNodes(); }

    queryDistributedElements(e) { return Vs(this).queryDistributedElements(e); }

    getEffectiveChildren() { return this.getEffectiveChildNodes().filter(((e) => e.nodeType === Node.ELEMENT_NODE)); }

    getEffectiveTextContent() { const e = this.getEffectiveChildNodes(); const t = []; for (let i, n = 0; i = e[n]; n++)i.nodeType !== Node.COMMENT_NODE && t.push(i.textContent); return t.join(''); }

    queryEffectiveChildren(e) { const t = this.queryDistributedElements(e); return t && t[0]; }

    queryAllEffectiveChildren(e) { return this.queryDistributedElements(e); }

    getContentChildNodes(e) { const t = this.root.querySelector(e || 'slot'); return t ? Vs(t).getDistributedNodes() : []; }

    getContentChildren(e) { return this.getContentChildNodes(e).filter(((e) => e.nodeType === Node.ELEMENT_NODE)); }

    isLightDescendant(e) { return this !== e && ni(this).contains(e) && ni(this).getRootNode() === ni(e).getRootNode(); }

    isLocalDescendant(e) { return this.root === ni(e).getRootNode(); }

    scopeSubtree(e, t = !1) { return (function (e, t = !1) { if (!Os || !Is) return null; if (!Os.handlesDynamicScoping) return null; const i = Is.ScopingShim; if (!i) return null; const n = i.scopeForNode(e); const s = ni(e).getRootNode(); const o = (e) => { if (!Ns(e, s)) return; const t = Array.from(Os.nativeMethods.querySelectorAll.call(e, '*')); t.push(e); for (let e = 0; e < t.length; e++) { const o = t[e]; if (!Ns(o, s)) continue; const a = i.currentScopeForNode(o); a !== n && (a !== '' && i.unscopeNode(o, a), i.scopeNode(o, n)); } }; if (o(e), t) { const t = new MutationObserver((e) => { for (let t = 0; t < e.length; t++) { const i = e[t]; for (let e = 0; e < i.addedNodes.length; e++) { const t = i.addedNodes[e]; t.nodeType === Node.ELEMENT_NODE && o(t); } } }); return t.observe(e, { childList: !0, subtree: !0 }), t; } return null; }(e, t)); }

    getComputedStyleValue(e) { return Rs.getComputedStyleValue(this, e); }

    debounce(e, t, i) { return this._debouncers = this._debouncers || {}, this._debouncers[e] = wn.debounce(this._debouncers[e], i > 0 ? Ci.after(i) : xi, t.bind(this)); }

    isDebouncerActive(e) { this._debouncers = this._debouncers || {}; const t = this._debouncers[e]; return !(!t || !t.isActive()); }

    flushDebouncer(e) { this._debouncers = this._debouncers || {}; const t = this._debouncers[e]; t && t.flush(); }

    cancelDebouncer(e) { this._debouncers = this._debouncers || {}; const t = this._debouncers[e]; t && t.cancel(); }

    async(e, t) { return t > 0 ? Ci.run(e.bind(this), t) : ~xi.run(e.bind(this)); }

    cancelAsync(e) { e < 0 ? xi.cancel(~e) : Ci.cancel(e); }

    create(e, t) { const i = document.createElement(e); if (t) if (i.setProperties)i.setProperties(t); else for (const e in t)i[e] = t[e]; return i; }

    elementMatches(e, t) { return Hs(t || this, e); }

    toggleAttribute(e, t) { let i = this; return arguments.length === 3 && (i = arguments[2]), arguments.length == 1 && (t = !i.hasAttribute(e)), t ? (ni(i).setAttribute(e, ''), !0) : (ni(i).removeAttribute(e), !1); }

    toggleClass(e, t, i) { i = i || this, arguments.length == 1 && (t = !i.classList.contains(e)), t ? i.classList.add(e) : i.classList.remove(e); }

    transform(e, t) { (t = t || this).style.webkitTransform = e, t.style.transform = e; }

    translate3d(e, t, i, n) { n = n || this, this.transform(`translate3d(${e},${t},${i})`, n); }

    arrayDelete(e, t) { let i; if (Array.isArray(e)) { if (i = e.indexOf(t), i >= 0) return e.splice(i, 1); } else if (i = di(this, e).indexOf(t), i >= 0) return this.splice(e, i, 1); return null; }

    _logger(e, t) { switch (Array.isArray(t) && t.length === 1 && Array.isArray(t[0]) && (t = t[0]), e) { case 'log': case 'warn': case 'error': console[e](...t); } }

    _log(...e) { this._logger('log', e); }

    _warn(...e) { this._logger('warn', e); }

    _error(...e) { this._logger('error', e); }

    _logf(e, ...t) { return ['[%s::%s]', this.is, e, ...t]; }
  } return n.prototype.is = '', n;
}); const Ds = {
  attached: !0, detached: !0, ready: !0, created: !0, beforeRegister: !0, registered: !0, attributeChanged: !0, listeners: !0, hostAttributes: !0,
}; const Bs = {
  attached: !0, detached: !0, ready: !0, created: !0, beforeRegister: !0, registered: !0, attributeChanged: !0, behaviors: !0, _noAccessors: !0,
}; const Us = {
  listeners: !0, hostAttributes: !0, properties: !0, observers: !0, ...Bs,
}; function $s(e, t, i, n) { !(function (e, t, i) { const n = e._noAccessors; const s = Object.getOwnPropertyNames(e); for (let o = 0; o < s.length; o++) { const a = s[o]; if (!(a in i)) if (n)t[a] = e[a]; else { const i = Object.getOwnPropertyDescriptor(e, a); i && (i.configurable = !0, Object.defineProperty(t, a, i)); } } }(t, e, n)); for (const e in Ds)t[e] && (i[e] = i[e] || [], i[e].push(t[e])); } function Ks(e, t) { for (const i in t) { const n = e[i]; const s = t[i]; e[i] = !('value' in s) && n && 'value' in n ? ({ value: n.value, ...s }) : s; } } function js(e, t, i) {
  let n; const s = {}; class o extends t {
    static _finalizeClass() { if (this.hasOwnProperty(JSCompiler_renameProperty('generatedFrom', this))) { if (n) for (let e, t = 0; t < n.length; t++)e = n[t], e.properties && this.createProperties(e.properties), e.observers && this.createObservers(e.observers, e.properties); e.properties && this.createProperties(e.properties), e.observers && this.createObservers(e.observers, e.properties), this._prepareTemplate(); } else t._finalizeClass.call(this); }

    static get properties() { const t = {}; if (n) for (let e = 0; e < n.length; e++)Ks(t, n[e].properties); return Ks(t, e.properties), t; }

    static get observers() { let t = []; if (n) for (let e, i = 0; i < n.length; i++)e = n[i], e.observers && (t = t.concat(e.observers)); return e.observers && (t = t.concat(e.observers)), t; }

    created() { super.created(); const e = s.created; if (e) for (let t = 0; t < e.length; t++)e[t].call(this); }

    _registered() { const e = o.prototype; if (!e.hasOwnProperty(JSCompiler_renameProperty('__hasRegisterFinished', e))) { e.__hasRegisterFinished = !0, super._registered(); const t = Object.getPrototypeOf(this); let i = s.beforeRegister; if (i) for (let e = 0; e < i.length; e++)i[e].call(t); if (i = s.registered, i) for (let e = 0; e < i.length; e++)i[e].call(t); } }

    _applyListeners() { super._applyListeners(); const e = s.listeners; if (e) for (let t = 0; t < e.length; t++) { const i = e[t]; if (i) for (const e in i) this._addMethodEventListenerToNode(this, e, i[e]); } }

    _ensureAttributes() { const e = s.hostAttributes; if (e) for (let t = e.length - 1; t >= 0; t--) { const i = e[t]; for (const e in i) this._ensureAttribute(e, i[e]); } super._ensureAttributes(); }

    ready() { super.ready(); const e = s.ready; if (e) for (let t = 0; t < e.length; t++)e[t].call(this); }

    attached() { super.attached(); const e = s.attached; if (e) for (let t = 0; t < e.length; t++)e[t].call(this); }

    detached() { super.detached(); const e = s.detached; if (e) for (let t = 0; t < e.length; t++)e[t].call(this); }

    attributeChanged(e, t, i) { super.attributeChanged(); const n = s.attributeChanged; if (n) for (let s = 0; s < n.length; s++)n[s].call(this, e, t, i); }
  } if (i) { Array.isArray(i) || (i = [i]); const e = t.prototype.behaviors; n = (function e(t, i, n) { i = i || []; for (let s = t.length - 1; s >= 0; s--) { const o = t[s]; o ? Array.isArray(o) ? e(o, i) : i.indexOf(o) < 0 && (!n || n.indexOf(o) < 0) && i.unshift(o) : console.warn('behavior is null, check for missing or 404 import'); } return i; }(i, null, e)), o.prototype.behaviors = e ? e.concat(i) : n; } return ((t) => { n && (function (e, t, i) { for (let n = 0; n < t.length; n++)$s(e, t[n], i, Us); }(t, n, s)), $s(t, e, s, Bs); })(o.prototype), o.generatedFrom = e, o;
} const qs = function e(t) { let i; return i = typeof t === 'function' ? t : e.Class(t), customElements.define(i.is, i), i; }; function Ys(e, t, i, n, s) { let o; s && (o = typeof i === 'object' && i !== null, o && (n = e.__dataTemp[t])); const a = n !== i && (n == n || i == i); return o && a && (e.__dataTemp[t] = i), a; }qs.Class = function (e, t) { e || console.warn('Polymer.Class requires `info` argument'); let i = t ? t(Fs(HTMLElement)) : Fs(HTMLElement); return i = js(e, i, e.behaviors), i.is = i.prototype.is = e.is, i; }; const Ws = qt((e) => class extends e {_shouldPropertyChange(e, t, i) { return Ys(this, e, t, i, !0); }}); const Gs = qt((e) => class extends e {
  static get properties() { return { mutableData: Boolean }; }

  _shouldPropertyChange(e, t, i) { return Ys(this, e, t, i, this.mutableData); }
}); Ws._mutablePropertyChange = Ys; let Js = null; function Zs() { return Js; }Zs.prototype = Object.create(HTMLTemplateElement.prototype, { constructor: { value: Zs, writable: !0 } }); const Xs = gn(Zs); const Qs = Ws(Xs); const eo = gn(class {}); class to extends eo {
  constructor(e) { super(), this._configureProperties(e), this.root = this._stampTemplate(this.__dataHost); const t = []; this.children = t; for (let e = this.root.firstChild; e; e = e.nextSibling)t.push(e), e.__templatizeInstance = this; this.__templatizeOwner && this.__templatizeOwner.__hideTemplateChildren__ && this._showHideChildren(!0); const i = this.__templatizeOptions; (e && i.instanceProps || !i.instanceProps) && this._enableProperties(); }

  _configureProperties(e) { if (this.__templatizeOptions.forwardHostProp) for (const e in this.__hostProps) this._setPendingProperty(e, this.__dataHost[`_host_${e}`]); for (const t in e) this._setPendingProperty(t, e[t]); }

  forwardHostProp(e, t) { this._setPendingPropertyOrPath(e, t, !1, !0) && this.__dataHost._enqueueClient(this); }

  _addEventListenerToNode(e, t, i) { if (this._methodHost && this.__templatizeOptions.parentModel) this._methodHost._addEventListenerToNode(e, t, (e) => { e.model = this, i(e); }); else { const n = this.__dataHost.__dataHost; n && n._addEventListenerToNode(e, t, i); } }

  _showHideChildren(e) { const t = this.children; for (let i = 0; i < t.length; i++) { const n = t[i]; if (Boolean(e) != Boolean(n.__hideTemplateChildren__)) if (n.nodeType === Node.TEXT_NODE)e ? (n.__polymerTextContent__ = n.textContent, n.textContent = '') : n.textContent = n.__polymerTextContent__; else if (n.localName === 'slot') if (e)n.__polymerReplaced__ = document.createComment('hidden-slot'), ni(ni(n).parentNode).replaceChild(n.__polymerReplaced__, n); else { const e = n.__polymerReplaced__; e && ni(ni(e).parentNode).replaceChild(n, e); } else n.style && (e ? (n.__polymerDisplay__ = n.style.display, n.style.display = 'none') : n.style.display = n.__polymerDisplay__); n.__hideTemplateChildren__ = e, n._showHideChildren && n._showHideChildren(e); } }

  _setUnmanagedPropertyToNode(e, t, i) { e.__hideTemplateChildren__ && e.nodeType == Node.TEXT_NODE && t == 'textContent' ? e.__polymerTextContent__ = i : super._setUnmanagedPropertyToNode(e, t, i); }

  get parentModel() { let e = this.__parentModel; if (!e) { let t; e = this; do { e = e.__dataHost.__dataHost; } while ((t = e.__templatizeOptions) && !t.parentModel);this.__parentModel = e; } return e; }

  dispatchEvent(e) { return !0; }
}to.prototype.__dataHost, to.prototype.__templatizeOptions, to.prototype._methodHost, to.prototype.__templatizeOwner, to.prototype.__hostProps; const io = Ws(to); function no(e, t, i) { let n = i.mutableData ? io : to; ro.mixin && (n = ro.mixin(n)); const s = class extends n {}; return s.prototype.__templatizeOptions = i, s.prototype._bindTemplate(e), (function (e, t, i, n) { const s = i.hostProps || {}; for (const t in n.instanceProps) { delete s[t]; const i = n.notifyInstanceProp; i && e.prototype._addPropertyEffect(t, e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: ao(t, i) }); } if (n.forwardHostProp && t.__dataHost) for (const t in s)i.hasHostProps || (i.hasHostProps = !0), e.prototype._addPropertyEffect(t, e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn(e, t, i) { e.__dataHost._setPendingPropertyOrPath(`_host_${t}`, i[t], !0, !0); } }); }(s, e, t, i)), s; } function so(e, t, i) { const n = i.forwardHostProp; if (n && t.hasHostProps) { let s = t.templatizeTemplateClass; if (!s) { const e = i.mutableData ? Qs : Xs; s = t.templatizeTemplateClass = class extends e {}; const o = t.hostProps; for (const e in o)s.prototype._addPropertyEffect(`_host_${e}`, s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, { fn: oo(e, n) }), s.prototype._createNotifyingProperty(`_host_${e}`); }!(function (e, t) { Js = e, Object.setPrototypeOf(e, t.prototype), new t(), Js = null; }(e, s)), e.__dataProto && Object.assign(e.__data, e.__dataProto), e.__dataTemp = {}, e.__dataPending = null, e.__dataOld = null, e._enableProperties(); } } function oo(e, t) { return function (e, i, n) { t.call(e.__templatizeOwner, i.substring('_host_'.length), n[i]); }; } function ao(e, t) { return function (e, i, n) { t.call(e.__templatizeOwner, e, i, n[i]); }; } function ro(e, t, i) { if (i = i || {}, e.__templatizeOwner) throw new Error('A <template> can only be templatized once'); e.__templatizeOwner = t; const n = (t ? t.constructor : to)._parseTemplate(e); let s = n.templatizeInstanceClass; s || (s = no(e, n, i), n.templatizeInstanceClass = s), so(e, n, i); let o = class extends s {}; return o.prototype._methodHost = (function (e) { const t = e.__dataHost; return t && t._methodHost || t; }(e)), o.prototype.__dataHost = e, o.prototype.__templatizeOwner = t, o.prototype.__hostProps = n.hostProps, o = o, o; } const lo = rs(Gs(gn(HTMLElement))); customElements.define('dom-bind', class extends lo {
  static get observedAttributes() { return ['mutable-data']; }

  constructor() { super(), this.root = null, this.$ = null, this.__children = null; }

  attributeChangedCallback(e, t, i, n) { this.mutableData = !0; }

  connectedCallback() { this.style.display = 'none', this.render(); }

  disconnectedCallback() { this.__removeChildren(); }

  __insertChildren() { ni(ni(this).parentNode).insertBefore(this.root, this); }

  __removeChildren() { if (this.__children) for (let e = 0; e < this.__children.length; e++) this.root.appendChild(this.__children[e]); }

  render() { let e; if (!this.__children) { if (e = e || this.querySelector('template'), !e) { const t = new MutationObserver(() => { if (e = this.querySelector('template'), !e) throw new Error('dom-bind requires a <template> child'); t.disconnect(), this.render(); }); return void t.observe(this, { childList: !0 }); } this.root = this._stampTemplate(e), this.$ = this.root.$, this.__children = []; for (let e = this.root.firstChild; e; e = e.nextSibling) this.__children[this.__children.length] = e; this._enableProperties(); } this.__insertChildren(), this.dispatchEvent(new CustomEvent('dom-change', { bubbles: !0, composed: !0 })); }
}); class ho {
  constructor(e) { this.value = e.toString(); }

  toString() { return this.value; }
} function co(e) { if (e instanceof HTMLTemplateElement) return e.innerHTML; if (e instanceof ho) return (function (e) { if (e instanceof ho) return e.value; throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`); }(e)); throw new Error(`non-template value passed to Polymer's html function: ${e}`); } const po = function (e, ...t) { const i = document.createElement('template'); return i.innerHTML = t.reduce((t, i, n) => t + co(i) + e[n + 1], e[0]), i; }; const uo = bn(HTMLElement); const fo = Gs(uo); class mo extends fo {
  static get is() { return 'dom-repeat'; }

  static get template() { return null; }

  static get properties() {
    return {
      items: { type: Array }, as: { type: String, value: 'item' }, indexAs: { type: String, value: 'index' }, itemsIndexAs: { type: String, value: 'itemsIndex' }, sort: { type: Function, observer: '__sortChanged' }, filter: { type: Function, observer: '__filterChanged' }, observe: { type: String, observer: '__observeChanged' }, delay: Number, renderedItemCount: { type: Number, notify: !0, readOnly: !0 }, initialCount: { type: Number, observer: '__initializeChunking' }, targetFramerate: { type: Number, value: 20 }, _targetFrameTime: { type: Number, computed: '__computeFrameTime(targetFramerate)' },
    };
  }

  static get observers() { return ['__itemsChanged(items.*)']; }

  constructor() { super(), this.__instances = [], this.__limit = 1 / 0, this.__pool = [], this.__renderDebouncer = null, this.__itemsIdxToInstIdx = {}, this.__chunkCount = null, this.__lastChunkTime = null, this.__sortFn = null, this.__filterFn = null, this.__observePaths = null, this.__ctor = null, this.__isDetached = !0, this.template = null; }

  disconnectedCallback() { super.disconnectedCallback(), this.__isDetached = !0; for (let e = 0; e < this.__instances.length; e++) this.__detachInstance(e); }

  connectedCallback() { if (super.connectedCallback(), this.style.display = 'none', this.__isDetached) { this.__isDetached = !1; const e = ni(ni(this).parentNode); for (let t = 0; t < this.__instances.length; t++) this.__attachInstance(t, e); } }

  __ensureTemplatized() {
    if (!this.__ctor) {
      const e = this.template = this.querySelector('template'); if (!e) { const e = new MutationObserver(() => { if (!this.querySelector('template')) throw new Error('dom-repeat requires a <template> child'); e.disconnect(), this.__render(); }); return e.observe(this, { childList: !0 }), !1; } const t = {}; t[this.as] = !0, t[this.indexAs] = !0, t[this.itemsIndexAs] = !0, this.__ctor = ro(e, this, {
        mutableData: this.mutableData, parentModel: !0, instanceProps: t, forwardHostProp(e, t) { const i = this.__instances; for (let n, s = 0; s < i.length && (n = i[s]); s++)n.forwardHostProp(e, t); }, notifyInstanceProp(e, t, i) { if ((n = this.as) === (s = t) || ai(n, s) || ri(n, s)) { const n = e[this.itemsIndexAs]; t == this.as && (this.items[n] = i); const s = li(this.as, `${JSCompiler_renameProperty('items', this)}.${n}`, t); this.notifyPath(s, i); } let n; let s; },
      });
    } return !0;
  }

  __getMethodHost() { return this.__dataHost._methodHost || this.__dataHost; }

  __functionFromPropertyValue(e) { if (typeof e === 'string') { const t = e; const i = this.__getMethodHost(); return function () { return i[t].apply(i, arguments); }; } return e; }

  __sortChanged(e) { this.__sortFn = this.__functionFromPropertyValue(e), this.items && this.__debounceRender(this.__render); }

  __filterChanged(e) { this.__filterFn = this.__functionFromPropertyValue(e), this.items && this.__debounceRender(this.__render); }

  __computeFrameTime(e) { return Math.ceil(1e3 / e); }

  __initializeChunking() { this.initialCount && (this.__limit = this.initialCount, this.__chunkCount = this.initialCount, this.__lastChunkTime = performance.now()); }

  __tryRenderChunk() { this.items && this.__limit < this.items.length && this.__debounceRender(this.__requestRenderChunk); }

  __requestRenderChunk() { requestAnimationFrame(() => this.__renderChunk()); }

  __renderChunk() { const e = performance.now(); const t = this._targetFrameTime / (e - this.__lastChunkTime); this.__chunkCount = Math.round(this.__chunkCount * t) || 1, this.__limit += this.__chunkCount, this.__lastChunkTime = e, this.__debounceRender(this.__render); }

  __observeChanged() { this.__observePaths = this.observe && this.observe.replace('.*', '.').split(' '); }

  __itemsChanged(e) { this.items && !Array.isArray(this.items) && console.warn('dom-repeat expected array for `items`, found', this.items), this.__handleItemPath(e.path, e.value) || (this.__initializeChunking(), this.__debounceRender(this.__render)); }

  __handleObservedPaths(e) { if (this.__sortFn || this.__filterFn) if (e) { if (this.__observePaths) { const t = this.__observePaths; for (let i = 0; i < t.length; i++)e.indexOf(t[i]) === 0 && this.__debounceRender(this.__render, this.delay); } } else this.__debounceRender(this.__render, this.delay); }

  __debounceRender(e, t = 0) { this.__renderDebouncer = wn.debounce(this.__renderDebouncer, t > 0 ? Ci.after(t) : xi, e.bind(this)), Cn(this.__renderDebouncer); }

  render() { this.__debounceRender(this.__render), Ms(); }

  __render() { this.__ensureTemplatized() && (this.__applyFullRefresh(), this.__pool.length = 0, this._setRenderedItemCount(this.__instances.length), this.dispatchEvent(new CustomEvent('dom-change', { bubbles: !0, composed: !0 })), this.__tryRenderChunk()); }

  __applyFullRefresh() { const e = this.items || []; let t = new Array(e.length); for (let i = 0; i < e.length; i++)t[i] = i; this.__filterFn && (t = t.filter((t, i, n) => this.__filterFn(e[t], i, n))), this.__sortFn && t.sort((t, i) => this.__sortFn(e[t], e[i])); const i = this.__itemsIdxToInstIdx = {}; let n = 0; const s = Math.min(t.length, this.__limit); for (;n < s; n++) { const s = this.__instances[n]; const o = t[n]; const a = e[o]; i[o] = n, s ? (s._setPendingProperty(this.as, a), s._setPendingProperty(this.indexAs, n), s._setPendingProperty(this.itemsIndexAs, o), s._flushProperties()) : this.__insertInstance(a, n, o); } for (let e = this.__instances.length - 1; e >= n; e--) this.__detachAndRemoveInstance(e); }

  __detachInstance(e) { const t = this.__instances[e]; const i = ni(t.root); for (let e = 0; e < t.children.length; e++) { const n = t.children[e]; i.appendChild(n); } return t; }

  __attachInstance(e, t) { const i = this.__instances[e]; t.insertBefore(i.root, this); }

  __detachAndRemoveInstance(e) { const t = this.__detachInstance(e); t && this.__pool.push(t), this.__instances.splice(e, 1); }

  __stampInstance(e, t, i) { const n = {}; return n[this.as] = e, n[this.indexAs] = t, n[this.itemsIndexAs] = i, new this.__ctor(n); }

  __insertInstance(e, t, i) { let n = this.__pool.pop(); n ? (n._setPendingProperty(this.as, e), n._setPendingProperty(this.indexAs, t), n._setPendingProperty(this.itemsIndexAs, i), n._flushProperties()) : n = this.__stampInstance(e, t, i); const s = this.__instances[t + 1]; const o = s ? s.children[0] : this; return ni(ni(this).parentNode).insertBefore(n.root, o), this.__instances[t] = n, n; }

  _showHideChildren(e) { for (let t = 0; t < this.__instances.length; t++) this.__instances[t]._showHideChildren(e); }

  __handleItemPath(e, t) { const i = e.slice(6); const n = i.indexOf('.'); const s = n < 0 ? i : i.substring(0, n); if (s == parseInt(s, 10)) { const e = n < 0 ? '' : i.substring(n + 1); this.__handleObservedPaths(e); const o = this.__itemsIdxToInstIdx[s]; const a = this.__instances[o]; if (a) { const i = this.as + (e ? `.${e}` : ''); a._setPendingPropertyOrPath(i, t, !1, !0), a._flushProperties(); } return !0; } }

  itemForElement(e) { const t = this.modelForElement(e); return t && t[this.as]; }

  indexForElement(e) { const t = this.modelForElement(e); return t && t[this.indexAs]; }

  modelForElement(e) { return (function (e, t) { let i; for (;t;) if (i = t.__templatizeInstance) { if (i.__dataHost == e) return i; t = i.__dataHost; } else t = ni(t).parentNode; return null; }(this.template, e)); }
}customElements.define(mo.is, mo); class go extends uo {
  static get is() { return 'dom-if'; }

  static get template() { return null; }

  static get properties() { return { if: { type: Boolean, observer: '__debounceRender' }, restamp: { type: Boolean, observer: '__debounceRender' } }; }

  constructor() { super(), this.__renderDebouncer = null, this.__invalidProps = null, this.__instance = null, this._lastIf = !1, this.__ctor = null, this.__hideTemplateChildren__ = !1; }

  __debounceRender() { this.__renderDebouncer = wn.debounce(this.__renderDebouncer, xi, () => this.__render()), Cn(this.__renderDebouncer); }

  disconnectedCallback() { super.disconnectedCallback(); const e = ni(this).parentNode; e && (e.nodeType != Node.DOCUMENT_FRAGMENT_NODE || ni(e).host) || this.__teardownInstance(); }

  connectedCallback() { super.connectedCallback(), this.style.display = 'none', this.if && this.__debounceRender(); }

  render() { Ms(); }

  __render() { if (this.if) { if (!this.__ensureInstance()) return; this._showHideChildren(); } else this.restamp && this.__teardownInstance(); !this.restamp && this.__instance && this._showHideChildren(), this.if != this._lastIf && (this.dispatchEvent(new CustomEvent('dom-change', { bubbles: !0, composed: !0 })), this._lastIf = this.if); }

  __ensureInstance() { const e = ni(this).parentNode; if (e) { if (!this.__ctor) { const e = ni(this).querySelector('template'); if (!e) { const e = new MutationObserver(() => { if (!ni(this).querySelector('template')) throw new Error('dom-if requires a <template> child'); e.disconnect(), this.__render(); }); return e.observe(this, { childList: !0 }), !1; } this.__ctor = ro(e, this, { mutableData: !0, forwardHostProp(e, t) { this.__instance && (this.if ? this.__instance.forwardHostProp(e, t) : (this.__invalidProps = this.__invalidProps || Object.create(null), this.__invalidProps[oi(e)] = !0)); } }); } if (this.__instance) { this.__syncHostProperties(); const t = this.__instance.children; if (t && t.length) { if (ni(this).previousSibling !== t[t.length - 1]) for (let i, n = 0; n < t.length && (i = t[n]); n++)ni(e).insertBefore(i, this); } } else this.__instance = new this.__ctor(), ni(e).insertBefore(this.__instance.root, this); } return !0; }

  __syncHostProperties() { const e = this.__invalidProps; if (e) { for (const t in e) this.__instance._setPendingProperty(t, this.__dataHost[t]); this.__invalidProps = null, this.__instance._flushProperties(); } }

  __teardownInstance() { if (this.__instance) { const e = this.__instance.children; if (e && e.length) { let t = ni(e[0]).parentNode; if (t) { t = ni(t); for (let i, n = 0; n < e.length && (i = e[n]); n++)t.removeChild(i); } } this.__instance = null, this.__invalidProps = null; } }

  _showHideChildren() { const e = this.__hideTemplateChildren__ || !this.if; this.__instance && this.__instance._showHideChildren(e); }
}customElements.define(go.is, go); const _o = qt((e) => {
  const t = bn(e); return class extends t {
    static get properties() {
      return {
        items: { type: Array }, multi: { type: Boolean, value: !1 }, selected: { type: Object, notify: !0 }, selectedItem: { type: Object, notify: !0 }, toggle: { type: Boolean, value: !1 },
      };
    }

    static get observers() { return ['__updateSelection(multi, items.*)']; }

    constructor() { super(), this.__lastItems = null, this.__lastMulti = null, this.__selectedMap = null; }

    __updateSelection(e, t) { const i = t.path; if (i == JSCompiler_renameProperty('items', this)) { const i = t.base || []; const n = this.__lastItems; if (e !== this.__lastMulti && this.clearSelection(), n) { const e = zs(i, n); this.__applySplices(e); } this.__lastItems = i, this.__lastMulti = e; } else if (t.path == `${JSCompiler_renameProperty('items', this)}.splices`) this.__applySplices(t.value.indexSplices); else { const e = i.slice((`${JSCompiler_renameProperty('items', this)}.`).length); const t = parseInt(e, 10); e.indexOf('.') < 0 && e == t && this.__deselectChangedIdx(t); } }

    __applySplices(e) { const t = this.__selectedMap; for (let i = 0; i < e.length; i++) { const n = e[i]; t.forEach((e, i) => { e < n.index || (e >= n.index + n.removed.length ? t.set(i, e + n.addedCount - n.removed.length) : t.set(i, -1)); }); for (let e = 0; e < n.addedCount; e++) { const i = n.index + e; t.has(this.items[i]) && t.set(this.items[i], i); } } this.__updateLinks(); let i = 0; t.forEach((e, n) => { e < 0 ? (this.multi ? this.splice(JSCompiler_renameProperty('selected', this), i, 1) : this.selected = this.selectedItem = null, t.delete(n)) : i++; }); }

    __updateLinks() { if (this.__dataLinkedPaths = {}, this.multi) { let e = 0; this.__selectedMap.forEach((t) => { t >= 0 && this.linkPaths(`${JSCompiler_renameProperty('items', this)}.${t}`, `${JSCompiler_renameProperty('selected', this)}.${e++}`); }); } else this.__selectedMap.forEach((e) => { this.linkPaths(JSCompiler_renameProperty('selected', this), `${JSCompiler_renameProperty('items', this)}.${e}`), this.linkPaths(JSCompiler_renameProperty('selectedItem', this), `${JSCompiler_renameProperty('items', this)}.${e}`); }); }

    clearSelection() { this.__dataLinkedPaths = {}, this.__selectedMap = new Map(), this.selected = this.multi ? [] : null, this.selectedItem = null; }

    isSelected(e) { return this.__selectedMap.has(e); }

    isIndexSelected(e) { return this.isSelected(this.items[e]); }

    __deselectChangedIdx(e) { const t = this.__selectedIndexForItemIndex(e); if (t >= 0) { let e = 0; this.__selectedMap.forEach((i, n) => { t == e++ && this.deselect(n); }); } }

    __selectedIndexForItemIndex(e) { const t = this.__dataLinkedPaths[`${JSCompiler_renameProperty('items', this)}.${e}`]; if (t) return parseInt(t.slice((`${JSCompiler_renameProperty('selected', this)}.`).length), 10); }

    deselect(e) { const t = this.__selectedMap.get(e); if (t >= 0) { let i; this.__selectedMap.delete(e), this.multi && (i = this.__selectedIndexForItemIndex(t)), this.__updateLinks(), this.multi ? this.splice(JSCompiler_renameProperty('selected', this), i, 1) : this.selected = this.selectedItem = null; } }

    deselectIndex(e) { this.deselect(this.items[e]); }

    select(e) { this.selectIndex(this.items.indexOf(e)); }

    selectIndex(e) { const t = this.items[e]; this.isSelected(t) ? this.toggle && this.deselectIndex(e) : (this.multi || this.__selectedMap.clear(), this.__selectedMap.set(t, e), this.__updateLinks(), this.multi ? this.push(JSCompiler_renameProperty('selected', this), t) : this.selected = this.selectedItem = t); }
  };
})(uo); class vo extends _o {
  static get is() { return 'array-selector'; }

  static get template() { return null; }
}customElements.define(vo.is, vo); const yo = new Lt(); window.ShadyCSS || (window.ShadyCSS = {
  prepareTemplate(e, t, i) {}, prepareTemplateDom(e, t) {}, prepareTemplateStyles(e, t, i) {}, styleSubtree(e, t) { yo.processStyles(), dt(e, t); }, styleElement(e) { yo.processStyles(); }, styleDocument(e) { yo.processStyles(), dt(document.body, e); }, getComputedStyleValue: (e, t) => pt(e, t), flushCustomStyles() {}, nativeCss: $e, nativeShadow: Re, cssBuild: De, disableRuntime: Ue,
}), window.ShadyCSS.CustomStyleInterface = yo; const bo = window.ShadyCSS.CustomStyleInterface; class wo extends HTMLElement {
  constructor() { super(), this._style = null, bo.addCustomStyle(this); }

  getStyle() { if (this._style) return this._style; const e = this.querySelector('style'); if (!e) return null; this._style = e; const t = e.getAttribute('include'); return t && (e.removeAttribute('include'), e.textContent = (function (e) { const t = e.trim().split(/\s+/); let i = ''; for (let e = 0; e < t.length; e++)i += ii(t[e]); return i; }(t)) + e.textContent), this.ownerDocument !== window.document && window.document.head.appendChild(this), this._style; }
}window.customElements.define('custom-style', wo); const zo = Fs(HTMLElement).prototype; const Co = po(e || (e = F`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`)); Co.setAttribute('style', 'display: none;'), document.head.appendChild(Co.content); const So = document.createElement('style'); So.textContent = '[hidden] { display: none !important; }', document.head.appendChild(So); const xo = new Set(); const Mo = {
  properties: { _parentResizable: { type: Object, observer: '_parentResizableChanged' }, _notifyingDescendant: { type: Boolean, value: !1 } }, listeners: { 'iron-request-resize-notifications': '_onIronRequestResizeNotifications' }, created() { this._interestedResizables = [], this._boundNotifyResize = this.notifyResize.bind(this), this._boundOnDescendantIronResize = this._onDescendantIronResize.bind(this); }, attached() { this._requestResizeNotifications(); }, detached() { this._parentResizable ? this._parentResizable.stopResizeNotificationsFor(this) : (xo.delete(this), window.removeEventListener('resize', this._boundNotifyResize)), this._parentResizable = null; }, notifyResize() { this.isAttached && (this._interestedResizables.forEach((function (e) { this.resizerShouldNotify(e) && this._notifyDescendant(e); }), this), this._fireResize()); }, assignParentResizable(e) { this._parentResizable && this._parentResizable.stopResizeNotificationsFor(this), this._parentResizable = e, e && e._interestedResizables.indexOf(this) === -1 && (e._interestedResizables.push(this), e._subscribeIronResize(this)); }, stopResizeNotificationsFor(e) { const t = this._interestedResizables.indexOf(e); t > -1 && (this._interestedResizables.splice(t, 1), this._unsubscribeIronResize(e)); }, _subscribeIronResize(e) { e.addEventListener('iron-resize', this._boundOnDescendantIronResize); }, _unsubscribeIronResize(e) { e.removeEventListener('iron-resize', this._boundOnDescendantIronResize); }, resizerShouldNotify(e) { return !0; }, _onDescendantIronResize(e) { this._notifyingDescendant ? e.stopPropagation() : Ut || this._fireResize(); }, _fireResize() { this.fire('iron-resize', null, { node: this, bubbles: !1 }); }, _onIronRequestResizeNotifications(e) { const t = Vs(e).rootTarget; t !== this && (t.assignParentResizable(this), this._notifyDescendant(t), e.stopPropagation()); }, _parentResizableChanged(e) { e && window.removeEventListener('resize', this._boundNotifyResize); }, _notifyDescendant(e) { this.isAttached && (this._notifyingDescendant = !0, e.notifyResize(), this._notifyingDescendant = !1); }, _requestResizeNotifications() { if (this.isAttached) if (document.readyState === 'loading') { const e = this._requestResizeNotifications.bind(this); document.addEventListener('readystatechange', (function t() { document.removeEventListener('readystatechange', t), e(); })); } else this._findParent(), this._parentResizable ? this._parentResizable._interestedResizables.forEach((function (e) { e !== this && e._findParent(); }), this) : (xo.forEach((function (e) { e !== this && e._findParent(); }), this), window.addEventListener('resize', this._boundNotifyResize), this.notifyResize()); }, _findParent() { this.assignParentResizable(null), this.fire('iron-request-resize-notifications', null, { node: this, bubbles: !0, cancelable: !0 }), this._parentResizable ? xo.delete(this) : xo.add(this); },
}; const Eo = [Mo, {
  listeners: { 'app-reset-layout': '_appResetLayoutHandler', 'iron-resize': 'resetLayout' }, attached() { this.fire('app-reset-layout'); }, _appResetLayoutHandler(e) { Vs(e).path[0] !== this && (this.resetLayout(), e.stopPropagation()); }, _updateLayoutStates() { console.error('unimplemented'); }, resetLayout() { const e = this._updateLayoutStates.bind(this); this._layoutDebouncer = wn.debounce(this._layoutDebouncer, Si, e), Cn(this._layoutDebouncer), this._notifyDescendantResize(); }, _notifyLayoutChanged() { const e = this; requestAnimationFrame((() => { e.fire('app-reset-layout'); })); }, _notifyDescendantResize() { this.isAttached && this._interestedResizables.forEach((function (e) { this.resizerShouldNotify(e) && this._notifyDescendant(e); }), this); },
}]; qs({
  _template: po(t || (t = F`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`)),
  is: 'app-header-layout',
  behaviors: [Eo],
  properties: { hasScrollingRegion: { type: Boolean, value: !1, reflectToAttribute: !0 } },
  observers: ['resetLayout(isAttached, hasScrollingRegion)'],
  get header() { return Vs(this.$.headerSlot).getDistributedNodes()[0]; },
  _updateLayoutStates() { const e = this.header; if (this.isAttached && e) { this.$.wrapper.classList.remove('initializing'), e.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement; const t = e.offsetHeight; this.hasScrollingRegion ? (e.style.left = '', e.style.right = '') : requestAnimationFrame(() => { const t = this.getBoundingClientRect(); const i = document.documentElement.clientWidth - t.right; e.style.left = `${t.left}px`, e.style.right = `${i}px`; }); const i = this.$.contentContainer.style; e.fixed && !e.condenses && this.hasScrollingRegion ? (i.marginTop = `${t}px`, i.paddingTop = '') : (i.paddingTop = `${t}px`, i.marginTop = ''); } },
}); const To = {
  properties: { scrollTarget: { type: HTMLElement, value() { return this._defaultScrollTarget; } } }, observers: ['_scrollTargetChanged(scrollTarget, isAttached)'], _shouldHaveListener: !0, _scrollTargetChanged(e, t) { if (this._oldScrollTarget && (this._toggleScrollListener(!1, this._oldScrollTarget), this._oldScrollTarget = null), t) if (e === 'document') this.scrollTarget = this._doc; else if (typeof e === 'string') { const i = this.domHost; this.scrollTarget = i && i.$ ? i.$[e] : Vs(this.ownerDocument).querySelector(`#${e}`); } else this._isValidScrollTarget() && (this._oldScrollTarget = e, this._toggleScrollListener(this._shouldHaveListener, e)); }, _scrollHandler() {}, get _defaultScrollTarget() { return this._doc; }, get _doc() { return this.ownerDocument.documentElement; }, get _scrollTop() { return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop : 0; }, get _scrollLeft() { return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft : 0; }, set _scrollTop(e) { this.scrollTarget === this._doc ? window.scrollTo(window.pageXOffset, e) : this._isValidScrollTarget() && (this.scrollTarget.scrollTop = e); }, set _scrollLeft(e) { this.scrollTarget === this._doc ? window.scrollTo(e, window.pageYOffset) : this._isValidScrollTarget() && (this.scrollTarget.scrollLeft = e); }, scroll(e, t) { let i; typeof e === 'object' ? (i = e.left, t = e.top) : i = e, i = i || 0, t = t || 0, this.scrollTarget === this._doc ? window.scrollTo(i, t) : this._isValidScrollTarget() && (this.scrollTarget.scrollLeft = i, this.scrollTarget.scrollTop = t); }, get _scrollTargetWidth() { return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth : 0; }, get _scrollTargetHeight() { return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight : 0; }, _isValidScrollTarget() { return this.scrollTarget instanceof HTMLElement; }, _toggleScrollListener(e, t) { const i = t === this._doc ? window : t; e ? this._boundScrollHandler || (this._boundScrollHandler = this._scrollHandler.bind(this), i.addEventListener('scroll', this._boundScrollHandler)) : this._boundScrollHandler && (i.removeEventListener('scroll', this._boundScrollHandler), this._boundScrollHandler = null); }, toggleScrollListener(e) { this._shouldHaveListener = e, this._toggleScrollListener(e, this.scrollTarget); },
}; const Ho = {}; const Ao = function (e, t) { if (Ho[e] != null) throw new Error(`effect \`${e}\` is already registered.`); Ho[e] = t; }; const ko = [To, {
  properties: {
    effects: { type: String },
    effectsConfig: { type: Object, value() { return {}; } },
    disabled: { type: Boolean, reflectToAttribute: !0, value: !1 },
    threshold: { type: Number, value: 0 },
    thresholdTriggered: {
      type: Boolean, notify: !0, readOnly: !0, reflectToAttribute: !0,
    },
  },
  observers: ['_effectsChanged(effects, effectsConfig, isAttached)'],
  _updateScrollState(e) {},
  isOnScreen() { return !1; },
  isContentBelow() { return !1; },
  _effectsRunFn: null,
  _effects: null,
  get _clampedScrollTop() { return Math.max(0, this._scrollTop); },
  attached() { this._scrollStateChanged(); },
  detached() { this._tearDownEffects(); },
  createEffect(e, t) { const i = Ho[e]; if (!i) throw new ReferenceError(this._getUndefinedMsg(e)); const n = this._boundEffect(i, t || {}); return n.setUp(), n; },
  _effectsChanged(e, t, i) { this._tearDownEffects(), e && i && (e.split(' ').forEach((function (e) { let i; e !== '' && ((i = Ho[e]) ? this._effects.push(this._boundEffect(i, t[e])) : console.warn(this._getUndefinedMsg(e))); }), this), this._setUpEffect()); },
  _layoutIfDirty() { return this.offsetWidth; },
  _boundEffect(e, t) { t = t || {}; const i = parseFloat(t.startsAt || 0); const n = parseFloat(t.endsAt || 1); const s = n - i; const o = function () {}; const a = i === 0 && n === 1 ? e.run : function (t, n) { e.run.call(this, Math.max(0, (t - i) / s), n); }; return { setUp: e.setUp ? e.setUp.bind(this, t) : o, run: e.run ? a.bind(this) : o, tearDown: e.tearDown ? e.tearDown.bind(this) : o }; },
  _setUpEffect() { this.isAttached && this._effects && (this._effectsRunFn = [], this._effects.forEach((function (e) { !1 !== e.setUp() && this._effectsRunFn.push(e.run); }), this)); },
  _tearDownEffects() { this._effects && this._effects.forEach(((e) => { e.tearDown(); })), this._effectsRunFn = [], this._effects = []; },
  _runEffects(e, t) { this._effectsRunFn && this._effectsRunFn.forEach(((i) => { i(e, t); })); },
  _scrollHandler() { this._scrollStateChanged(); },
  _scrollStateChanged() { if (!this.disabled) { const e = this._clampedScrollTop; this._updateScrollState(e), this.threshold > 0 && this._setThresholdTriggered(e >= this.threshold); } },
  _getDOMRef(e) { console.warn('_getDOMRef', `\`${e}\` is undefined`); },
  _getUndefinedMsg(e) { return `Scroll effect \`${e}\` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/${e}.html ?`; },
}]; Ao('blend-background', { setUp() { const e = {}; e.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer'), e.backgroundRearLayer = this._getDOMRef('backgroundRearLayer'), e.backgroundFrontLayer.style.willChange = 'opacity', e.backgroundFrontLayer.style.transform = 'translateZ(0)', e.backgroundRearLayer.style.willChange = 'opacity', e.backgroundRearLayer.style.transform = 'translateZ(0)', e.backgroundRearLayer.style.opacity = 0, this._fxBlendBackground = e; }, run(e, t) { const i = this._fxBlendBackground; i.backgroundFrontLayer.style.opacity = 1 - e, i.backgroundRearLayer.style.opacity = e; }, tearDown() { delete this._fxBlendBackground; } }), Ao('fade-background', { setUp(e) { const t = {}; const i = e.duration || '0.5s'; t.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer'), t.backgroundRearLayer = this._getDOMRef('backgroundRearLayer'), t.backgroundFrontLayer.style.willChange = 'opacity', t.backgroundFrontLayer.style.webkitTransform = 'translateZ(0)', t.backgroundFrontLayer.style.transitionProperty = 'opacity', t.backgroundFrontLayer.style.transitionDuration = i, t.backgroundRearLayer.style.willChange = 'opacity', t.backgroundRearLayer.style.webkitTransform = 'translateZ(0)', t.backgroundRearLayer.style.transitionProperty = 'opacity', t.backgroundRearLayer.style.transitionDuration = i, this._fxFadeBackground = t; }, run(e, t) { const i = this._fxFadeBackground; e >= 1 ? (i.backgroundFrontLayer.style.opacity = 0, i.backgroundRearLayer.style.opacity = 1) : (i.backgroundFrontLayer.style.opacity = 1, i.backgroundRearLayer.style.opacity = 0); }, tearDown() { delete this._fxFadeBackground; } }), Ao('waterfall', { run() { this.shadow = this.isOnScreen() && this.isContentBelow(); } }), Ao('resize-title', { setUp() { const e = this._getDOMRef('mainTitle'); const t = this._getDOMRef('condensedTitle'); if (!t) return console.warn('Scroll effect `resize-title`: undefined `condensed-title`'), !1; if (!e) return console.warn('Scroll effect `resize-title`: undefined `main-title`'), !1; t.style.willChange = 'opacity', t.style.webkitTransform = 'translateZ(0)', t.style.transform = 'translateZ(0)', t.style.webkitTransformOrigin = 'left top', t.style.transformOrigin = 'left top', e.style.willChange = 'opacity', e.style.webkitTransformOrigin = 'left top', e.style.transformOrigin = 'left top', e.style.webkitTransform = 'translateZ(0)', e.style.transform = 'translateZ(0)'; const i = e.getBoundingClientRect(); const n = t.getBoundingClientRect(); const s = {}; s.scale = parseInt(window.getComputedStyle(t)['font-size'], 10) / parseInt(window.getComputedStyle(e)['font-size'], 10), s.titleDX = i.left - n.left, s.titleDY = i.top - n.top, s.condensedTitle = t, s.title = e, this._fxResizeTitle = s; }, run(e, t) { let i; let n; const s = this._fxResizeTitle; this.condenses || (t = 0), e >= 1 ? (s.title.style.opacity = 0, s.condensedTitle.style.opacity = 1) : (s.title.style.opacity = 1, s.condensedTitle.style.opacity = 0), i = Math.min(1, e), n = [[1, s.scale], [0, -s.titleDX], [t, t - s.titleDY]], function (e, t, i) { this.transform(`translate(${t}px, ${i}px) scale3d(${e}, ${e}, 1)`, s.title); }.apply(this, n.map(((e) => e[0] + (e[1] - e[0]) * i))); }, tearDown() { delete this._fxResizeTitle; } }), Ao('parallax-background', { setUp(e) { const t = {}; let i = parseFloat(e.scalar); t.background = this._getDOMRef('background'), t.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer'), t.backgroundRearLayer = this._getDOMRef('backgroundRearLayer'), t.deltaBg = t.backgroundFrontLayer.offsetHeight - t.background.offsetHeight, t.deltaBg === 0 ? (isNaN(i) && (i = 0.8), t.deltaBg = (this._dHeight || 0) * i) : (isNaN(i) && (i = 1), t.deltaBg *= i), this._fxParallaxBackground = t; }, run(e, t) { const i = this._fxParallaxBackground; this.transform(`translate3d(0px, ${i.deltaBg * Math.min(1, e)}px, 0px)`, i.backgroundFrontLayer), i.backgroundRearLayer && this.transform(`translate3d(0px, ${i.deltaBg * Math.min(1, e)}px, 0px)`, i.backgroundRearLayer); }, tearDown() { delete this._fxParallaxBackground; } }), Ao('material', { setUp() { return this.effects = 'waterfall resize-title blend-background parallax-background', !1; } }), Ao('resize-snapped-title', { setUp(e) { const t = this._getDOMRef('mainTitle'); const i = this._getDOMRef('condensedTitle'); const n = e.duration || '0.2s'; const s = {}; return i ? t ? (t.style.transitionProperty = 'opacity', t.style.transitionDuration = n, i.style.transitionProperty = 'opacity', i.style.transitionDuration = n, s.condensedTitle = i, s.title = t, void (this._fxResizeSnappedTitle = s)) : (console.warn('Scroll effect `resize-snapped-title`: undefined `main-title`'), !1) : (console.warn('Scroll effect `resize-snapped-title`: undefined `condensed-title`'), !1); }, run(e, t) { const i = this._fxResizeSnappedTitle; e > 0 ? (i.title.style.opacity = 0, i.condensedTitle.style.opacity = 1) : (i.title.style.opacity = 1, i.condensedTitle.style.opacity = 0); }, tearDown() { const e = this._fxResizeSnappedTitle; e.title.style.transition = '', e.condensedTitle.style.transition = '', delete this._fxResizeSnappedTitle; } }), qs({
  _template: po(i || (i = F`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`)),
  is: 'app-header',
  behaviors: [ko, Eo],
  properties: {
    condenses: { type: Boolean, value: !1 }, fixed: { type: Boolean, value: !1 }, reveals: { type: Boolean, value: !1 }, shadow: { type: Boolean, reflectToAttribute: !0, value: !1 },
  },
  observers: ['_configChanged(isAttached, condenses, fixed)'],
  _height: 0,
  _dHeight: 0,
  _stickyElTop: 0,
  _stickyElRef: null,
  _top: 0,
  _progress: 0,
  _wasScrollingDown: !1,
  _initScrollTop: 0,
  _initTimestamp: 0,
  _lastTimestamp: 0,
  _lastScrollTop: 0,
  get _maxHeaderTop() { return this.fixed ? this._dHeight : this._height + 5; },
  get _stickyEl() { if (this._stickyElRef) return this._stickyElRef; for (var e, t = Vs(this.$.slot).getDistributedNodes(), i = 0; e = t[i]; i++) if (e.nodeType === Node.ELEMENT_NODE) { if (e.hasAttribute('sticky')) { this._stickyElRef = e; break; } this._stickyElRef || (this._stickyElRef = e); } return this._stickyElRef; },
  _configChanged() { this.resetLayout(), this._notifyLayoutChanged(); },
  _updateLayoutStates() { if (this.offsetWidth !== 0 || this.offsetHeight !== 0) { const e = this._clampedScrollTop; const t = this._height === 0 || e === 0; const i = this.disabled; this._height = this.offsetHeight, this._stickyElRef = null, this.disabled = !0, t || this._updateScrollState(0, !0), this._mayMove() ? this._dHeight = this._stickyEl ? this._height - this._stickyEl.offsetHeight : 0 : this._dHeight = 0, this._stickyElTop = this._stickyEl ? this._stickyEl.offsetTop : 0, this._setUpEffect(), t ? this._updateScrollState(e, !0) : (this._updateScrollState(this._lastScrollTop, !0), this._layoutIfDirty()), this.disabled = i; } },
  _updateScrollState(e, t) { if (this._height !== 0) { let i = 0; let n = 0; const s = this._top; const o = (this._lastScrollTop, this._maxHeaderTop); const a = e - this._lastScrollTop; const r = Math.abs(a); const l = e > this._lastScrollTop; const h = performance.now(); if (this._mayMove() && (n = this._clamp(this.reveals ? s + a : e, 0, o)), e >= this._dHeight && (n = this.condenses && !this.fixed ? Math.max(this._dHeight, n) : n, this.style.transitionDuration = '0ms'), this.reveals && !this.disabled && r < 100 && ((h - this._initTimestamp > 300 || this._wasScrollingDown !== l) && (this._initScrollTop = e, this._initTimestamp = h), e >= o)) if (Math.abs(this._initScrollTop - e) > 30 || r > 10) { l && e >= o ? n = o : !l && e >= this._dHeight && (n = this.condenses && !this.fixed ? this._dHeight : 0); const c = a / (h - this._lastTimestamp); this.style.transitionDuration = `${this._clamp((n - s) / c, 0, 300)}ms`; } else n = this._top; i = this._dHeight === 0 ? e > 0 ? 1 : 0 : n / this._dHeight, t || (this._lastScrollTop = e, this._top = n, this._wasScrollingDown = l, this._lastTimestamp = h), (t || i !== this._progress || s !== n || e === 0) && (this._progress = i, this._runEffects(i, n), this._transformHeader(n)); } },
  _mayMove() { return this.condenses || !this.fixed; },
  willCondense() { return this._dHeight > 0 && this.condenses; },
  isOnScreen() { return this._height !== 0 && this._top < this._height; },
  isContentBelow() { return this._top === 0 ? this._clampedScrollTop > 0 : this._clampedScrollTop - this._maxHeaderTop >= 0; },
  _transformHeader(e) { this.translate3d(0, `${-e}px`, 0), this._stickyEl && this.translate3d(0, this.condenses && e >= this._stickyElTop ? `${Math.min(e, this._dHeight) - this._stickyElTop}px` : 0, 0, this._stickyEl); },
  _clamp(e, t, i) { return Math.min(i, Math.max(t, e)); },
  _ensureBgContainers() { this._bgContainer || (this._bgContainer = document.createElement('div'), this._bgContainer.id = 'background', this._bgRear = document.createElement('div'), this._bgRear.id = 'backgroundRearLayer', this._bgContainer.appendChild(this._bgRear), this._bgFront = document.createElement('div'), this._bgFront.id = 'backgroundFrontLayer', this._bgContainer.appendChild(this._bgFront), Vs(this.root).insertBefore(this._bgContainer, this.$.contentContainer)); },
  _getDOMRef(e) { switch (e) { case 'backgroundFrontLayer': return this._ensureBgContainers(), this._bgFront; case 'backgroundRearLayer': return this._ensureBgContainers(), this._bgRear; case 'background': return this._ensureBgContainers(), this._bgContainer; case 'mainTitle': return Vs(this).querySelector('[main-title]'); case 'condensedTitle': return Vs(this).querySelector('[condensed-title]'); } return null; },
  getScrollState() { return { progress: this._progress, top: this._top }; },
}), qs({
  _template: po(n || (n = F`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`)),
  is: 'app-toolbar',
}); class Lo {
  constructor(e) { Lo[' '](e), this.type = e && e.type || 'default', this.key = e && e.key, e && 'value' in e && (this.value = e.value); }

  get value() { const e = this.type; const t = this.key; if (e && t) return Lo.types[e] && Lo.types[e][t]; }

  set value(e) { let t = this.type; const i = this.key; t && i && (t = Lo.types[t] = Lo.types[t] || {}, e == null ? delete t[i] : t[i] = e); }

  get list() { if (this.type) { const e = Lo.types[this.type]; return e ? Object.keys(e).map((function (e) { return Po[this.type][e]; }), this) : []; } }

  byKey(e) { return this.key = e, this.value; }
}Lo[' '] = function () {}, Lo.types = {}; var Po = Lo.types; qs({
  is: 'iron-meta',
  properties: {
    type: { type: String, value: 'default' }, key: { type: String }, value: { type: String, notify: !0 }, self: { type: Boolean, observer: '_selfChanged' }, __meta: { type: Boolean, computed: '__computeMeta(type, key, value)' },
  },
  hostAttributes: { hidden: !0 },
  __computeMeta(e, t, i) { const n = new Lo({ type: e, key: t }); return void 0 !== i && i !== n.value ? n.value = i : this.value !== n.value && (this.value = n.value), n; },
  get list() { return this.__meta && this.__meta.list; },
  _selfChanged(e) { e && (this.value = this); },
  byKey(e) { return new Lo({ type: this.type, key: e }).value; },
}), qs({
  _template: po(s || (s = F`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`)),
  is: 'iron-icon',
  properties: {
    icon: { type: String }, theme: { type: String }, src: { type: String }, _meta: { value: zo.create('iron-meta', { type: 'iconset' }) },
  },
  observers: ['_updateIcon(_meta, isAttached)', '_updateIcon(theme, isAttached)', '_srcChanged(src, isAttached)', '_iconChanged(icon, isAttached)'],
  _DEFAULT_ICONSET: 'icons',
  _iconChanged(e) { const t = (e || '').split(':'); this._iconName = t.pop(), this._iconsetName = t.pop() || this._DEFAULT_ICONSET, this._updateIcon(); },
  _srcChanged(e) { this._updateIcon(); },
  _usesIconset() { return this.icon || !this.src; },
  _updateIcon() { this._usesIconset() ? (this._img && this._img.parentNode && Vs(this.root).removeChild(this._img), this._iconName === '' ? this._iconset && this._iconset.removeIcon(this) : this._iconsetName && this._meta && (this._iconset = this._meta.byKey(this._iconsetName), this._iconset ? (this._iconset.applyIcon(this, this._iconName, this.theme), this.unlisten(window, 'iron-iconset-added', '_updateIcon')) : this.listen(window, 'iron-iconset-added', '_updateIcon'))) : (this._iconset && this._iconset.removeIcon(this), this._img || (this._img = document.createElement('img'), this._img.style.width = '100%', this._img.style.height = '100%', this._img.draggable = !1), this._img.src = this.src, Vs(this.root).appendChild(this._img)); },
}); const Vo = po(o || (o = F`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`)); Vo.setAttribute('style', 'display: none;'), document.head.appendChild(Vo.content); const Oo = po(a || (a = F`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`)); Oo.setAttribute('style', 'display: none;'), document.head.appendChild(Oo.content); const Io = {
  properties: {
    focused: {
      type: Boolean, value: !1, notify: !0, readOnly: !0, reflectToAttribute: !0,
    },
    disabled: {
      type: Boolean, value: !1, notify: !0, observer: '_disabledChanged', reflectToAttribute: !0,
    },
    _oldTabIndex: { type: String },
    _boundFocusBlurHandler: { type: Function, value() { return this._focusBlurHandler.bind(this); } },
  },
  observers: ['_changedControlState(focused, disabled)'],
  ready() { this.addEventListener('focus', this._boundFocusBlurHandler, !0), this.addEventListener('blur', this._boundFocusBlurHandler, !0); },
  _focusBlurHandler(e) { this._setFocused(e.type === 'focus'); },
  _disabledChanged(e, t) { this.setAttribute('aria-disabled', e ? 'true' : 'false'), this.style.pointerEvents = e ? 'none' : '', e ? (this._oldTabIndex = this.getAttribute('tabindex'), this._setFocused(!1), this.tabIndex = -1, this.blur()) : void 0 !== this._oldTabIndex && (this._oldTabIndex === null ? this.removeAttribute('tabindex') : this.setAttribute('tabindex', this._oldTabIndex)); },
  _changedControlState() { this._controlStateChanged && this._controlStateChanged(); },
}; const No = {
  'U+0008': 'backspace', 'U+0009': 'tab', 'U+001B': 'esc', 'U+0020': 'space', 'U+007F': 'del',
}; const Ro = {
  8: 'backspace', 9: 'tab', 13: 'enter', 27: 'esc', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 32: 'space', 37: 'left', 38: 'up', 39: 'right', 40: 'down', 46: 'del', 106: '*',
}; const Fo = {
  shift: 'shiftKey', ctrl: 'ctrlKey', alt: 'altKey', meta: 'metaKey',
}; const Do = /[a-z0-9*]/; const Bo = /U\+/; const Uo = /^arrow/; const $o = /^space(bar)?/; const Ko = /^escape$/; function jo(e, t) { let i = ''; if (e) { const n = e.toLowerCase(); n === ' ' || $o.test(n) ? i = 'space' : Ko.test(n) ? i = 'esc' : n.length == 1 ? t && !Do.test(n) || (i = n) : i = Uo.test(n) ? n.replace('arrow', '') : n == 'multiply' ? '*' : n; } return i; } function qo(e, t) { return e.key ? jo(e.key, t) : e.detail && e.detail.key ? jo(e.detail.key, t) : (i = e.keyIdentifier, n = '', i && (i in No ? n = No[i] : Bo.test(i) ? (i = parseInt(i.replace('U+', '0x'), 16), n = String.fromCharCode(i).toLowerCase()) : n = i.toLowerCase()), n || (function (e) { let t = ''; return Number(e) && (t = e >= 65 && e <= 90 ? String.fromCharCode(32 + e) : e >= 112 && e <= 123 ? `f${e - 112 + 1}` : e >= 48 && e <= 57 ? String(e - 48) : e >= 96 && e <= 105 ? String(e - 96) : Ro[e]), t; }(e.keyCode)) || ''); let i; let n; } function Yo(e, t) { return qo(t, e.hasModifiers) === e.key && (!e.hasModifiers || !!t.shiftKey == !!e.shiftKey && !!t.ctrlKey == !!e.ctrlKey && !!t.altKey == !!e.altKey && !!t.metaKey == !!e.metaKey); } function Wo(e) { return e.trim().split(' ').map(((e) => (function (e) { return e.length === 1 ? { combo: e, key: e, event: 'keydown' } : e.split('+').reduce(((e, t) => { const i = t.split(':'); const n = i[0]; const s = i[1]; return n in Fo ? (e[Fo[n]] = !0, e.hasModifiers = !0) : (e.key = n, e.event = s || 'keydown'), e; }), { combo: e.split(':').shift() }); }(e)))); } const Go = {
  properties: {
    keyEventTarget: { type: Object, value() { return this; } }, stopKeyboardEventPropagation: { type: Boolean, value: !1 }, _boundKeyHandlers: { type: Array, value() { return []; } }, _imperativeKeyBindings: { type: Object, value() { return {}; } },
  },
  observers: ['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],
  keyBindings: {},
  registered() { this._prepKeyBindings(); },
  attached() { this._listenKeyEventListeners(); },
  detached() { this._unlistenKeyEventListeners(); },
  addOwnKeyBinding(e, t) { this._imperativeKeyBindings[e] = t, this._prepKeyBindings(), this._resetKeyEventListeners(); },
  removeOwnKeyBindings() { this._imperativeKeyBindings = {}, this._prepKeyBindings(), this._resetKeyEventListeners(); },
  keyboardEventMatchesKeys(e, t) { for (let i = Wo(t), n = 0; n < i.length; ++n) if (Yo(i[n], e)) return !0; return !1; },
  _collectKeyBindings() { const e = this.behaviors.map(((e) => e.keyBindings)); return e.indexOf(this.keyBindings) === -1 && e.push(this.keyBindings), e; },
  _prepKeyBindings() { for (const e in this._keyBindings = {}, this._collectKeyBindings().forEach((function (e) { for (const t in e) this._addKeyBinding(t, e[t]); }), this), this._imperativeKeyBindings) this._addKeyBinding(e, this._imperativeKeyBindings[e]); for (const t in this._keyBindings) this._keyBindings[t].sort(((e, t) => { const i = e[0].hasModifiers; return i === t[0].hasModifiers ? 0 : i ? -1 : 1; })); },
  _addKeyBinding(e, t) { Wo(e).forEach((function (e) { this._keyBindings[e.event] = this._keyBindings[e.event] || [], this._keyBindings[e.event].push([e, t]); }), this); },
  _resetKeyEventListeners() { this._unlistenKeyEventListeners(), this.isAttached && this._listenKeyEventListeners(); },
  _listenKeyEventListeners() { this.keyEventTarget && Object.keys(this._keyBindings).forEach((function (e) { const t = this._keyBindings[e]; const i = this._onKeyBindingEvent.bind(this, t); this._boundKeyHandlers.push([this.keyEventTarget, e, i]), this.keyEventTarget.addEventListener(e, i); }), this); },
  _unlistenKeyEventListeners() { for (var e, t, i, n; this._boundKeyHandlers.length;)t = (e = this._boundKeyHandlers.pop())[0], i = e[1], n = e[2], t.removeEventListener(i, n); },
  _onKeyBindingEvent(e, t) { if (this.stopKeyboardEventPropagation && t.stopPropagation(), !t.defaultPrevented) for (let i = 0; i < e.length; i++) { const n = e[i][0]; const s = e[i][1]; if (Yo(n, t) && (this._triggerKeyHandler(n, s, t), t.defaultPrevented)) return; } },
  _triggerKeyHandler(e, t, i) { const n = Object.create(e); n.keyboardEvent = i; const s = new CustomEvent(e.event, { detail: n, cancelable: !0 }); this[t].call(this, s), s.defaultPrevented && i.preventDefault(); },
}; const Jo = {
  properties: {
    pressed: {
      type: Boolean, readOnly: !0, value: !1, reflectToAttribute: !0, observer: '_pressedChanged',
    },
    toggles: { type: Boolean, value: !1, reflectToAttribute: !0 },
    active: {
      type: Boolean, value: !1, notify: !0, reflectToAttribute: !0,
    },
    pointerDown: { type: Boolean, readOnly: !0, value: !1 },
    receivedFocusFromKeyboard: { type: Boolean, readOnly: !0 },
    ariaActiveAttribute: { type: String, value: 'aria-pressed', observer: '_ariaActiveAttributeChanged' },
  },
  listeners: { down: '_downHandler', up: '_upHandler', tap: '_tapHandler' },
  observers: ['_focusChanged(focused)', '_activeChanged(active, ariaActiveAttribute)'],
  keyBindings: { 'enter:keydown': '_asyncClick', 'space:keydown': '_spaceKeyDownHandler', 'space:keyup': '_spaceKeyUpHandler' },
  _mouseEventRe: /^mouse/,
  _tapHandler() { this.toggles ? this._userActivate(!this.active) : this.active = !1; },
  _focusChanged(e) { this._detectKeyboardFocus(e), e || this._setPressed(!1); },
  _detectKeyboardFocus(e) { this._setReceivedFocusFromKeyboard(!this.pointerDown && e); },
  _userActivate(e) { this.active !== e && (this.active = e, this.fire('change')); },
  _downHandler(e) { this._setPointerDown(!0), this._setPressed(!0), this._setReceivedFocusFromKeyboard(!1); },
  _upHandler() { this._setPointerDown(!1), this._setPressed(!1); },
  _spaceKeyDownHandler(e) { const t = e.detail.keyboardEvent; const i = Vs(t).localTarget; this.isLightDescendant(i) || (t.preventDefault(), t.stopImmediatePropagation(), this._setPressed(!0)); },
  _spaceKeyUpHandler(e) { const t = e.detail.keyboardEvent; const i = Vs(t).localTarget; this.isLightDescendant(i) || (this.pressed && this._asyncClick(), this._setPressed(!1)); },
  _asyncClick() { this.async((function () { this.click(); }), 1); },
  _pressedChanged(e) { this._changedButtonState(); },
  _ariaActiveAttributeChanged(e, t) { t && t != e && this.hasAttribute(t) && this.removeAttribute(t); },
  _activeChanged(e, t) { this.toggles ? this.setAttribute(this.ariaActiveAttribute, e ? 'true' : 'false') : this.removeAttribute(this.ariaActiveAttribute), this._changedButtonState(); },
  _controlStateChanged() { this.disabled ? this._setPressed(!1) : this._changedButtonState(); },
  _changedButtonState() { this._buttonStateChanged && this._buttonStateChanged(); },
}; const Zo = [Go, Jo]; const Xo = { distance(e, t, i, n) { const s = e - i; const o = t - n; return Math.sqrt(s * s + o * o); }, now: window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now }; function Qo(e) { this.element = e, this.width = this.boundingRect.width, this.height = this.boundingRect.height, this.size = Math.max(this.width, this.height); } function ea(e) { this.element = e, this.color = window.getComputedStyle(e).color, this.wave = document.createElement('div'), this.waveContainer = document.createElement('div'), this.wave.style.backgroundColor = this.color, this.wave.classList.add('wave'), this.waveContainer.classList.add('wave-container'), Vs(this.waveContainer).appendChild(this.wave), this.resetInteractionState(); }Qo.prototype = { get boundingRect() { return this.element.getBoundingClientRect(); }, furthestCornerDistanceFrom(e, t) { const i = Xo.distance(e, t, 0, 0); const n = Xo.distance(e, t, this.width, 0); const s = Xo.distance(e, t, 0, this.height); const o = Xo.distance(e, t, this.width, this.height); return Math.max(i, n, s, o); } }, ea.MAX_RADIUS = 300, ea.prototype = {
  get recenters() { return this.element.recenters; }, get center() { return this.element.center; }, get mouseDownElapsed() { let e; return this.mouseDownStart ? (e = Xo.now() - this.mouseDownStart, this.mouseUpStart && (e -= this.mouseUpElapsed), e) : 0; }, get mouseUpElapsed() { return this.mouseUpStart ? Xo.now() - this.mouseUpStart : 0; }, get mouseDownElapsedSeconds() { return this.mouseDownElapsed / 1e3; }, get mouseUpElapsedSeconds() { return this.mouseUpElapsed / 1e3; }, get mouseInteractionSeconds() { return this.mouseDownElapsedSeconds + this.mouseUpElapsedSeconds; }, get initialOpacity() { return this.element.initialOpacity; }, get opacityDecayVelocity() { return this.element.opacityDecayVelocity; }, get radius() { const e = this.containerMetrics.width * this.containerMetrics.width; const t = this.containerMetrics.height * this.containerMetrics.height; const i = 1.1 * Math.min(Math.sqrt(e + t), ea.MAX_RADIUS) + 5; const n = 1.1 - i / ea.MAX_RADIUS * 0.2; const s = this.mouseInteractionSeconds / n; const o = i * (1 - Math.pow(80, -s)); return Math.abs(o); }, get opacity() { return this.mouseUpStart ? Math.max(0, this.initialOpacity - this.mouseUpElapsedSeconds * this.opacityDecayVelocity) : this.initialOpacity; }, get outerOpacity() { const e = 0.3 * this.mouseUpElapsedSeconds; const t = this.opacity; return Math.max(0, Math.min(e, t)); }, get isOpacityFullyDecayed() { return this.opacity < 0.01 && this.radius >= Math.min(this.maxRadius, ea.MAX_RADIUS); }, get isRestingAtMaxRadius() { return this.opacity >= this.initialOpacity && this.radius >= Math.min(this.maxRadius, ea.MAX_RADIUS); }, get isAnimationComplete() { return this.mouseUpStart ? this.isOpacityFullyDecayed : this.isRestingAtMaxRadius; }, get translationFraction() { return Math.min(1, this.radius / this.containerMetrics.size * 2 / Math.sqrt(2)); }, get xNow() { return this.xEnd ? this.xStart + this.translationFraction * (this.xEnd - this.xStart) : this.xStart; }, get yNow() { return this.yEnd ? this.yStart + this.translationFraction * (this.yEnd - this.yStart) : this.yStart; }, get isMouseDown() { return this.mouseDownStart && !this.mouseUpStart; }, resetInteractionState() { this.maxRadius = 0, this.mouseDownStart = 0, this.mouseUpStart = 0, this.xStart = 0, this.yStart = 0, this.xEnd = 0, this.yEnd = 0, this.slideDistance = 0, this.containerMetrics = new Qo(this.element); }, draw() { let e; let t; let i; this.wave.style.opacity = this.opacity, e = this.radius / (this.containerMetrics.size / 2), t = this.xNow - this.containerMetrics.width / 2, i = this.yNow - this.containerMetrics.height / 2, this.waveContainer.style.webkitTransform = `translate(${t}px, ${i}px)`, this.waveContainer.style.transform = `translate3d(${t}px, ${i}px, 0)`, this.wave.style.webkitTransform = `scale(${e},${e})`, this.wave.style.transform = `scale3d(${e},${e},1)`; }, downAction(e) { const t = this.containerMetrics.width / 2; const i = this.containerMetrics.height / 2; this.resetInteractionState(), this.mouseDownStart = Xo.now(), this.center ? (this.xStart = t, this.yStart = i, this.slideDistance = Xo.distance(this.xStart, this.yStart, this.xEnd, this.yEnd)) : (this.xStart = e ? e.detail.x - this.containerMetrics.boundingRect.left : this.containerMetrics.width / 2, this.yStart = e ? e.detail.y - this.containerMetrics.boundingRect.top : this.containerMetrics.height / 2), this.recenters && (this.xEnd = t, this.yEnd = i, this.slideDistance = Xo.distance(this.xStart, this.yStart, this.xEnd, this.yEnd)), this.maxRadius = this.containerMetrics.furthestCornerDistanceFrom(this.xStart, this.yStart), this.waveContainer.style.top = `${(this.containerMetrics.height - this.containerMetrics.size) / 2}px`, this.waveContainer.style.left = `${(this.containerMetrics.width - this.containerMetrics.size) / 2}px`, this.waveContainer.style.width = `${this.containerMetrics.size}px`, this.waveContainer.style.height = `${this.containerMetrics.size}px`; }, upAction(e) { this.isMouseDown && (this.mouseUpStart = Xo.now()); }, remove() { Vs(Vs(this.waveContainer).parentNode).removeChild(this.waveContainer); },
}, qs({
  _template: po(r || (r = F`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`)),
  is: 'paper-ripple',
  behaviors: [Go],
  properties: {
    initialOpacity: { type: Number, value: 0.25 },
    opacityDecayVelocity: { type: Number, value: 0.8 },
    recenters: { type: Boolean, value: !1 },
    center: { type: Boolean, value: !1 },
    ripples: { type: Array, value() { return []; } },
    animating: {
      type: Boolean, readOnly: !0, reflectToAttribute: !0, value: !1,
    },
    holdDown: { type: Boolean, value: !1, observer: '_holdDownChanged' },
    noink: { type: Boolean, value: !1 },
    _animating: { type: Boolean },
    _boundAnimate: { type: Function, value() { return this.animate.bind(this); } },
  },
  get target() { return this.keyEventTarget; },
  keyBindings: { 'enter:keydown': '_onEnterKeydown', 'space:keydown': '_onSpaceKeydown', 'space:keyup': '_onSpaceKeyup' },
  attached() { Vs(this).parentNode.nodeType == 11 ? this.keyEventTarget = Vs(this).getOwnerRoot().host : this.keyEventTarget = Vs(this).parentNode; const e = this.keyEventTarget; this.listen(e, 'up', 'uiUpAction'), this.listen(e, 'down', 'uiDownAction'); },
  detached() { this.unlisten(this.keyEventTarget, 'up', 'uiUpAction'), this.unlisten(this.keyEventTarget, 'down', 'uiDownAction'), this.keyEventTarget = null; },
  get shouldKeepAnimating() { for (let e = 0; e < this.ripples.length; ++e) if (!this.ripples[e].isAnimationComplete) return !0; return !1; },
  simulatedRipple() { this.downAction(null), this.async((function () { this.upAction(); }), 1); },
  uiDownAction(e) { this.noink || this.downAction(e); },
  downAction(e) { this.holdDown && this.ripples.length > 0 || (this.addRipple().downAction(e), this._animating || (this._animating = !0, this.animate())); },
  uiUpAction(e) { this.noink || this.upAction(e); },
  upAction(e) { this.holdDown || (this.ripples.forEach(((t) => { t.upAction(e); })), this._animating = !0, this.animate()); },
  onAnimationComplete() { this._animating = !1, this.$.background.style.backgroundColor = '', this.fire('transitionend'); },
  addRipple() { const e = new ea(this); return Vs(this.$.waves).appendChild(e.waveContainer), this.$.background.style.backgroundColor = e.color, this.ripples.push(e), this._setAnimating(!0), e; },
  removeRipple(e) { const t = this.ripples.indexOf(e); t < 0 || (this.ripples.splice(t, 1), e.remove(), this.ripples.length || this._setAnimating(!1)); },
  animate() { if (this._animating) { let e; let t; for (e = 0; e < this.ripples.length; ++e)(t = this.ripples[e]).draw(), this.$.background.style.opacity = t.outerOpacity, t.isOpacityFullyDecayed && !t.isRestingAtMaxRadius && this.removeRipple(t); this.shouldKeepAnimating || this.ripples.length !== 0 ? window.requestAnimationFrame(this._boundAnimate) : this.onAnimationComplete(); } },
  animateRipple() { return this.animate(); },
  _onEnterKeydown() { this.uiDownAction(), this.async(this.uiUpAction, 1); },
  _onSpaceKeydown() { this.uiDownAction(); },
  _onSpaceKeyup() { this.uiUpAction(); },
  _holdDownChanged(e, t) { void 0 !== t && (e ? this.downAction() : this.upAction()); },
}); const ta = {
  properties: { noink: { type: Boolean, observer: '_noinkChanged' }, _rippleContainer: { type: Object } }, _buttonStateChanged() { this.focused && this.ensureRipple(); }, _downHandler(e) { Jo._downHandler.call(this, e), this.pressed && this.ensureRipple(e); }, ensureRipple(e) { if (!this.hasRipple()) { this._ripple = this._createRipple(), this._ripple.noink = this.noink; const t = this._rippleContainer || this.root; if (t && Vs(t).appendChild(this._ripple), e) { const i = Vs(this._rippleContainer || this); const n = Vs(e).rootTarget; i.deepContains(n) && this._ripple.uiDownAction(e); } } }, getRipple() { return this.ensureRipple(), this._ripple; }, hasRipple() { return Boolean(this._ripple); }, _createRipple() { return document.createElement('paper-ripple'); }, _noinkChanged(e) { this.hasRipple() && (this._ripple.noink = e); },
}; const ia = { observers: ['_focusedChanged(receivedFocusFromKeyboard)'], _focusedChanged(e) { e && this.ensureRipple(), this.hasRipple() && (this._ripple.holdDown = e); }, _createRipple() { const e = ta._createRipple(); return e.id = 'ink', e.setAttribute('center', ''), e.classList.add('circle'), e; } }; const na = [Zo, Io, ta, ia]; qs({
  is: 'paper-icon-button',
  _template: po(l || (l = F`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `)),
  hostAttributes: { role: 'button', tabindex: '0' },
  behaviors: [na],
  registered() { this._template.setAttribute('strip-whitespace', ''); },
  properties: { src: { type: String }, icon: { type: String }, alt: { type: String, observer: '_altChanged' } },
  _altChanged(e, t) { const i = this.getAttribute('aria-label'); i && t != i || this.setAttribute('aria-label', e); },
}); const sa = qs({
  _template: po(h || (h = F`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`)),
  is: 'iron-a11y-announcer',
  properties: { mode: { type: String, value: 'polite' }, _text: { type: String, value: '' } },
  created() { sa.instance || (sa.instance = this), document.body.addEventListener('iron-announce', this._onIronAnnounce.bind(this)); },
  announce(e) { this._text = '', this.async((function () { this._text = e; }), 100); },
  _onIronAnnounce(e) { e.detail && e.detail.text && this.announce(e.detail.text); },
}); sa.instance = null, sa.requestAvailability = function () { sa.instance || (sa.instance = document.createElement('iron-a11y-announcer')), document.body.appendChild(sa.instance); }; let oa = null; const aa = {
  properties: {
    validator: { type: String },
    invalid: {
      notify: !0, reflectToAttribute: !0, type: Boolean, value: !1, observer: '_invalidChanged',
    },
  },
  registered() { oa = new Lo({ type: 'validator' }); },
  _invalidChanged() { this.invalid ? this.setAttribute('aria-invalid', 'true') : this.removeAttribute('aria-invalid'); },
  get _validator() { return oa && oa.byKey(this.validator); },
  hasValidator() { return this._validator != null; },
  validate(e) { return void 0 === e && void 0 !== this.value ? this.invalid = !this._getValidity(this.value) : this.invalid = !this._getValidity(e), !this.invalid; },
  _getValidity(e) { return !this.hasValidator() || this._validator.validate(e); },
}; if (qs({
  _template: po(c || (c = F`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`)),
  is: 'iron-input',
  behaviors: [aa],
  properties: {
    bindValue: { type: String, value: '' }, value: { type: String, computed: '_computeValue(bindValue)' }, allowedPattern: { type: String }, autoValidate: { type: Boolean, value: !1 }, _inputElement: Object,
  },
  observers: ['_bindValueChanged(bindValue, _inputElement)'],
  listeners: { input: '_onInput', keypress: '_onKeypress' },
  created() { sa.requestAvailability(), this._previousValidInput = '', this._patternAlreadyChecked = !1; },
  attached() { this._observer = Vs(this).observeNodes((e) => { this._initSlottedInput(); }); },
  detached() { this._observer && (Vs(this).unobserveNodes(this._observer), this._observer = null); },
  get inputElement() { return this._inputElement; },
  _initSlottedInput() { this._inputElement = this.getEffectiveChildren()[0], this.inputElement && this.inputElement.value && (this.bindValue = this.inputElement.value), this.fire('iron-input-ready'); },
  get _patternRegExp() { let e; if (this.allowedPattern)e = new RegExp(this.allowedPattern); else switch (this.inputElement.type) { case 'number': e = /[0-9.,e-]/; } return e; },
  _bindValueChanged(e, t) { t && (void 0 === e ? t.value = null : e !== t.value && (this.inputElement.value = e), this.autoValidate && this.validate(), this.fire('bind-value-changed', { value: e })); },
  _onInput() { this.allowedPattern && !this._patternAlreadyChecked && (this._checkPatternValidity() || (this._announceInvalidCharacter('Invalid string of characters not entered.'), this.inputElement.value = this._previousValidInput)); this.bindValue = this._previousValidInput = this.inputElement.value, this._patternAlreadyChecked = !1; },
  _isPrintable(e) { const t = e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 13 || e.keyCode == 27; const i = e.keyCode == 19 || e.keyCode == 20 || e.keyCode == 45 || e.keyCode == 46 || e.keyCode == 144 || e.keyCode == 145 || e.keyCode > 32 && e.keyCode < 41 || e.keyCode > 111 && e.keyCode < 124; return !(t || e.charCode == 0 && i); },
  _onKeypress(e) { if (this.allowedPattern || this.inputElement.type === 'number') { const t = this._patternRegExp; if (t && !(e.metaKey || e.ctrlKey || e.altKey)) { this._patternAlreadyChecked = !0; const i = String.fromCharCode(e.charCode); this._isPrintable(e) && !t.test(i) && (e.preventDefault(), this._announceInvalidCharacter(`Invalid character ${i} not entered.`)); } } },
  _checkPatternValidity() { const e = this._patternRegExp; if (!e) return !0; for (let t = 0; t < this.inputElement.value.length; t++) if (!e.test(this.inputElement.value[t])) return !1; return !0; },
  validate() { if (!this.inputElement) return this.invalid = !1, !0; let e = this.inputElement.checkValidity(); return e && (this.required && this.bindValue === '' ? e = !1 : this.hasValidator() && (e = aa.validate.call(this, this.bindValue))), this.invalid = !e, this.fire('iron-input-validate'), e; },
  _announceInvalidCharacter(e) { this.fire('iron-announce', { text: e }); },
  _computeValue(e) { return e; },
}), !window.polymerSkipLoadingFontRoboto) { const e = document.createElement('link'); e.rel = 'stylesheet', e.type = 'text/css', e.crossOrigin = 'anonymous', e.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic', document.head.appendChild(e); } const ra = po(d || (d = F`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`)); ra.setAttribute('style', 'display: none;'), document.head.appendChild(ra.content); const la = { attached() { this.fire('addon-attached'); }, update(e) {} }; qs({
  _template: po(p || (p = F`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`)),
  is: 'paper-input-char-counter',
  behaviors: [la],
  properties: { _charCounterStr: { type: String, value: '0' } },
  update(e) { if (e.inputElement) { e.value = e.value || ''; let t = e.value.toString().length.toString(); e.inputElement.hasAttribute('maxlength') && (t += `/${e.inputElement.getAttribute('maxlength')}`), this._charCounterStr = t; } },
}); const ha = po(u || (u = F`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`)); ha.setAttribute('style', 'display: none;'), document.head.appendChild(ha.content), qs({
  _template: po(f || (f = F`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`)),
  is: 'paper-input-container',
  properties: {
    noLabelFloat: { type: Boolean, value: !1 },
    alwaysFloatLabel: { type: Boolean, value: !1 },
    attrForValue: { type: String, value: 'bind-value' },
    autoValidate: { type: Boolean, value: !1 },
    invalid: { observer: '_invalidChanged', type: Boolean, value: !1 },
    focused: {
      readOnly: !0, type: Boolean, value: !1, notify: !0,
    },
    _addons: { type: Array },
    _inputHasContent: { type: Boolean, value: !1 },
    _inputSelector: { type: String, value: 'input,iron-input,textarea,.paper-input-input' },
    _boundOnFocus: { type: Function, value() { return this._onFocus.bind(this); } },
    _boundOnBlur: { type: Function, value() { return this._onBlur.bind(this); } },
    _boundOnInput: { type: Function, value() { return this._onInput.bind(this); } },
    _boundValueChanged: { type: Function, value() { return this._onValueChanged.bind(this); } },
  },
  listeners: { 'addon-attached': '_onAddonAttached', 'iron-input-validate': '_onIronInputValidate' },
  get _valueChangedEvent() { return `${this.attrForValue}-changed`; },
  get _propertyForValue() { return gi(this.attrForValue); },
  get _inputElement() { return Vs(this).querySelector(this._inputSelector); },
  get _inputElementValue() { return this._inputElement[this._propertyForValue] || this._inputElement.value; },
  ready() { this.__isFirstValueUpdate = !0, this._addons || (this._addons = []), this.addEventListener('focus', this._boundOnFocus, !0), this.addEventListener('blur', this._boundOnBlur, !0); },
  attached() { this.attrForValue ? this._inputElement.addEventListener(this._valueChangedEvent, this._boundValueChanged) : this.addEventListener('input', this._onInput), this._inputElementValue && this._inputElementValue != '' ? this._handleValueAndAutoValidate(this._inputElement) : this._handleValue(this._inputElement); },
  _onAddonAttached(e) { this._addons || (this._addons = []); const t = e.target; this._addons.indexOf(t) === -1 && (this._addons.push(t), this.isAttached && this._handleValue(this._inputElement)); },
  _onFocus() { this._setFocused(!0); },
  _onBlur() { this._setFocused(!1), this._handleValueAndAutoValidate(this._inputElement); },
  _onInput(e) { this._handleValueAndAutoValidate(e.target); },
  _onValueChanged(e) { const t = e.target; this.__isFirstValueUpdate && (this.__isFirstValueUpdate = !1, void 0 === t.value || t.value === '') || this._handleValueAndAutoValidate(e.target); },
  _handleValue(e) { const t = this._inputElementValue; t || t === 0 || e.type === 'number' && !e.checkValidity() ? this._inputHasContent = !0 : this._inputHasContent = !1, this.updateAddons({ inputElement: e, value: t, invalid: this.invalid }); },
  _handleValueAndAutoValidate(e) { let t; this.autoValidate && e && (t = e.validate ? e.validate(this._inputElementValue) : e.checkValidity(), this.invalid = !t); this._handleValue(e); },
  _onIronInputValidate(e) { this.invalid = this._inputElement.invalid; },
  _invalidChanged() { this._addons && this.updateAddons({ invalid: this.invalid }); },
  updateAddons(e) { for (var t, i = 0; t = this._addons[i]; i++)t.update(e); },
  _computeInputContentClass(e, t, i, n, s) { let o = 'input-content'; if (e)s && (o += ' label-is-hidden'), n && (o += ' is-invalid'); else { const a = this.querySelector('label'); t || s ? (o += ' label-is-floating', this.$.labelAndInputContainer.style.position = 'static', n ? o += ' is-invalid' : i && (o += ' label-is-highlighted')) : (a && (this.$.labelAndInputContainer.style.position = 'relative'), n && (o += ' is-invalid')); } return i && (o += ' focused'), o; },
  _computeUnderlineClass(e, t) { let i = 'underline'; return t ? i += ' is-invalid' : e && (i += ' is-highlighted'), i; },
  _computeAddOnContentClass(e, t) { let i = 'add-on-content'; return t ? i += ' is-invalid' : e && (i += ' is-highlighted'), i; },
}), qs({
  _template: po(m || (m = F`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`)),
  is: 'paper-input-error',
  behaviors: [la],
  properties: { invalid: { readOnly: !0, reflectToAttribute: !0, type: Boolean } },
  update(e) { this._setInvalid(e.invalid); },
}); const ca = { properties: { name: { type: String }, value: { notify: !0, type: String }, required: { type: Boolean, value: !1 } }, attached() {}, detached() {} }; const da = { NextLabelID: 1, NextAddonID: 1, NextInputID: 1 }; const pa = {
  properties: {
    label: { type: String }, value: { notify: !0, type: String }, disabled: { type: Boolean, value: !1 }, invalid: { type: Boolean, value: !1, notify: !0 }, allowedPattern: { type: String }, type: { type: String }, list: { type: String }, pattern: { type: String }, required: { type: Boolean, value: !1 }, errorMessage: { type: String }, charCounter: { type: Boolean, value: !1 }, noLabelFloat: { type: Boolean, value: !1 }, alwaysFloatLabel: { type: Boolean, value: !1 }, autoValidate: { type: Boolean, value: !1 }, validator: { type: String }, autocomplete: { type: String, value: 'off' }, autofocus: { type: Boolean, observer: '_autofocusChanged' }, inputmode: { type: String }, minlength: { type: Number }, maxlength: { type: Number }, min: { type: String }, max: { type: String }, step: { type: String }, name: { type: String }, placeholder: { type: String, value: '' }, readonly: { type: Boolean, value: !1 }, size: { type: Number }, autocapitalize: { type: String, value: 'none' }, autocorrect: { type: String, value: 'off' }, autosave: { type: String }, results: { type: Number }, accept: { type: String }, multiple: { type: Boolean }, _ariaDescribedBy: { type: String, value: '' }, _ariaLabelledBy: { type: String, value: '' }, _inputId: { type: String, value: '' },
  },
  listeners: { 'addon-attached': '_onAddonAttached' },
  keyBindings: { 'shift+tab:keydown': '_onShiftTabDown' },
  hostAttributes: { tabindex: 0 },
  get inputElement() { return this.$ || (this.$ = {}), this.$.input || (this._generateInputId(), this.$.input = this.$$(`#${this._inputId}`)), this.$.input; },
  get _focusableElement() { return this.inputElement; },
  created() { this._typesThatHaveText = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week', 'file']; },
  attached() { this._updateAriaLabelledBy(), !uo && this.inputElement && this._typesThatHaveText.indexOf(this.inputElement.type) !== -1 && (this.alwaysFloatLabel = !0); },
  _appendStringWithSpace(e, t) { return e = e ? `${e} ${t}` : t; },
  _onAddonAttached(e) { const t = Vs(e).rootTarget; if (t.id) this._ariaDescribedBy = this._appendStringWithSpace(this._ariaDescribedBy, t.id); else { const i = `paper-input-add-on-${da.NextAddonID++}`; t.id = i, this._ariaDescribedBy = this._appendStringWithSpace(this._ariaDescribedBy, i); } },
  validate() { return this.inputElement.validate(); },
  _focusBlurHandler(e) { Io._focusBlurHandler.call(this, e), this.focused && !this._shiftTabPressed && this._focusableElement && this._focusableElement.focus(); },
  _onShiftTabDown(e) { const t = this.getAttribute('tabindex'); this._shiftTabPressed = !0, this.setAttribute('tabindex', '-1'), this.async((function () { this.setAttribute('tabindex', t), this._shiftTabPressed = !1; }), 1); },
  _handleAutoValidate() { this.autoValidate && this.validate(); },
  updateValueAndPreserveCaret(e) { try { const t = this.inputElement.selectionStart; this.value = e, this.inputElement.selectionStart = t, this.inputElement.selectionEnd = t; } catch (t) { this.value = e; } },
  _computeAlwaysFloatLabel(e, t) { return t || e; },
  _updateAriaLabelledBy() { let e; const t = Vs(this.root).querySelector('label'); t ? (t.id ? e = t.id : (e = `paper-input-label-${da.NextLabelID++}`, t.id = e), this._ariaLabelledBy = e) : this._ariaLabelledBy = ''; },
  _generateInputId() { this._inputId && this._inputId !== '' || (this._inputId = `input-${da.NextInputID++}`); },
  _onChange(e) { this.shadowRoot && this.fire(e.type, { sourceEvent: e }, { node: this, bubbles: e.bubbles, cancelable: e.cancelable }); },
  _autofocusChanged() { if (this.autofocus && this._focusableElement) { const e = document.activeElement; e instanceof HTMLElement && e !== document.body && e !== document.documentElement || this._focusableElement.focus(); } },
}; const ua = [Io, Go, pa]; qs({
  is: 'paper-input',
  _template: po(g || (g = F`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `)),
  behaviors: [ua, ca],
  properties: { value: { type: String }, inputRole: { type: String, value: void 0 }, inputAriaHaspopup: { type: String, value: void 0 } },
  get _focusableElement() { return this.inputElement._inputElement; },
  listeners: { 'iron-input-ready': '_onIronInputReady' },
  _onIronInputReady() { this.$.nativeInput || (this.$.nativeInput = this.$$('input')), this.inputElement && this._typesThatHaveText.indexOf(this.$.nativeInput.type) !== -1 && (this.alwaysFloatLabel = !0), this.inputElement.bindValue && this.$.container._handleValueAndAutoValidate(this.inputElement); },
}); const fa = {
  properties: {
    sizingTarget: { type: Object, value() { return this; } }, fitInto: { type: Object, value: window }, noOverlap: { type: Boolean }, positionTarget: { type: Element }, horizontalAlign: { type: String }, verticalAlign: { type: String }, dynamicAlign: { type: Boolean }, horizontalOffset: { type: Number, value: 0, notify: !0 }, verticalOffset: { type: Number, value: 0, notify: !0 }, autoFitOnAttach: { type: Boolean, value: !1 }, _fitInfo: { type: Object },
  },
  get _fitWidth() { return this.fitInto === window ? this.fitInto.innerWidth : this.fitInto.getBoundingClientRect().width; },
  get _fitHeight() { return this.fitInto === window ? this.fitInto.innerHeight : this.fitInto.getBoundingClientRect().height; },
  get _fitLeft() { return this.fitInto === window ? 0 : this.fitInto.getBoundingClientRect().left; },
  get _fitTop() { return this.fitInto === window ? 0 : this.fitInto.getBoundingClientRect().top; },
  get _defaultPositionTarget() { let e = Vs(this).parentNode; return e && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (e = e.host), e; },
  get _localeHorizontalAlign() { if (this._isRTL) { if (this.horizontalAlign === 'right') return 'left'; if (this.horizontalAlign === 'left') return 'right'; } return this.horizontalAlign; },
  get __shouldPosition() { return (this.horizontalAlign || this.verticalAlign) && this.positionTarget; },
  get _isRTL() { return void 0 === this._memoizedIsRTL && (this._memoizedIsRTL = window.getComputedStyle(this).direction == 'rtl'), this._memoizedIsRTL; },
  attached() { this.positionTarget = this.positionTarget || this._defaultPositionTarget, this.autoFitOnAttach && (window.getComputedStyle(this).display === 'none' ? setTimeout(() => { this.fit(); }) : (window.ShadyDOM && ShadyDOM.flush(), this.fit())); },
  detached() { this.__deferredFit && (clearTimeout(this.__deferredFit), this.__deferredFit = null); },
  fit() { this.position(), this.constrain(), this.center(); },
  _discoverInfo() {
    if (!this._fitInfo) {
      const e = window.getComputedStyle(this); const t = window.getComputedStyle(this.sizingTarget); this._fitInfo = {
        inlineStyle: { top: this.style.top || '', left: this.style.left || '', position: this.style.position || '' },
        sizerInlineStyle: { maxWidth: this.sizingTarget.style.maxWidth || '', maxHeight: this.sizingTarget.style.maxHeight || '', boxSizing: this.sizingTarget.style.boxSizing || '' },
        positionedBy: { vertically: e.top !== 'auto' ? 'top' : e.bottom !== 'auto' ? 'bottom' : null, horizontally: e.left !== 'auto' ? 'left' : e.right !== 'auto' ? 'right' : null },
        sizedBy: {
          height: t.maxHeight !== 'none', width: t.maxWidth !== 'none', minWidth: parseInt(t.minWidth, 10) || 0, minHeight: parseInt(t.minHeight, 10) || 0,
        },
        margin: {
          top: parseInt(e.marginTop, 10) || 0, right: parseInt(e.marginRight, 10) || 0, bottom: parseInt(e.marginBottom, 10) || 0, left: parseInt(e.marginLeft, 10) || 0,
        },
      };
    }
  },
  resetFit() { const e = this._fitInfo || {}; for (var t in e.sizerInlineStyle) this.sizingTarget.style[t] = e.sizerInlineStyle[t]; for (var t in e.inlineStyle) this.style[t] = e.inlineStyle[t]; this._fitInfo = null; },
  refit() { const e = this.sizingTarget.scrollLeft; const t = this.sizingTarget.scrollTop; this.resetFit(), this.fit(), this.sizingTarget.scrollLeft = e, this.sizingTarget.scrollTop = t; },
  position() { if (this.__shouldPosition) { this._discoverInfo(), this.style.position = 'fixed', this.sizingTarget.style.boxSizing = 'border-box', this.style.left = '0px', this.style.top = '0px'; const e = this.getBoundingClientRect(); const t = this.__getNormalizedRect(this.positionTarget); const i = this.__getNormalizedRect(this.fitInto); const n = this._fitInfo.margin; const s = { width: e.width + n.left + n.right, height: e.height + n.top + n.bottom }; const o = this.__getPosition(this._localeHorizontalAlign, this.verticalAlign, s, e, t, i); let a = o.left + n.left; let r = o.top + n.top; const l = Math.min(i.right - n.right, a + e.width); const h = Math.min(i.bottom - n.bottom, r + e.height); a = Math.max(i.left + n.left, Math.min(a, l - this._fitInfo.sizedBy.minWidth)), r = Math.max(i.top + n.top, Math.min(r, h - this._fitInfo.sizedBy.minHeight)), this.sizingTarget.style.maxWidth = `${Math.max(l - a, this._fitInfo.sizedBy.minWidth)}px`, this.sizingTarget.style.maxHeight = `${Math.max(h - r, this._fitInfo.sizedBy.minHeight)}px`, this.style.left = `${a - e.left}px`, this.style.top = `${r - e.top}px`; } },
  constrain() { if (!this.__shouldPosition) { this._discoverInfo(); const e = this._fitInfo; e.positionedBy.vertically || (this.style.position = 'fixed', this.style.top = '0px'), e.positionedBy.horizontally || (this.style.position = 'fixed', this.style.left = '0px'), this.sizingTarget.style.boxSizing = 'border-box'; const t = this.getBoundingClientRect(); e.sizedBy.height || this.__sizeDimension(t, e.positionedBy.vertically, 'top', 'bottom', 'Height'), e.sizedBy.width || this.__sizeDimension(t, e.positionedBy.horizontally, 'left', 'right', 'Width'); } },
  _sizeDimension(e, t, i, n, s) { this.__sizeDimension(e, t, i, n, s); },
  __sizeDimension(e, t, i, n, s) { const o = this._fitInfo; const a = this.__getNormalizedRect(this.fitInto); const r = s === 'Width' ? a.width : a.height; const l = t === n; const h = l ? r - e[n] : e[i]; const c = o.margin[l ? i : n]; const d = `offset${s}`; const p = this[d] - this.sizingTarget[d]; this.sizingTarget.style[`max${s}`] = `${r - c - h - p}px`; },
  center() { if (!this.__shouldPosition) { this._discoverInfo(); const e = this._fitInfo.positionedBy; if (!e.vertically || !e.horizontally) { this.style.position = 'fixed', e.vertically || (this.style.top = '0px'), e.horizontally || (this.style.left = '0px'); const t = this.getBoundingClientRect(); const i = this.__getNormalizedRect(this.fitInto); if (!e.vertically) { const n = i.top - t.top + (i.height - t.height) / 2; this.style.top = `${n}px`; } if (!e.horizontally) { const s = i.left - t.left + (i.width - t.width) / 2; this.style.left = `${s}px`; } } } },
  __getNormalizedRect(e) {
    return e === document.documentElement || e === window ? {
      top: 0, left: 0, width: window.innerWidth, height: window.innerHeight, right: window.innerWidth, bottom: window.innerHeight,
    } : e.getBoundingClientRect();
  },
  __getOffscreenArea(e, t, i) { const n = Math.min(0, e.top) + Math.min(0, i.bottom - (e.top + t.height)); const s = Math.min(0, e.left) + Math.min(0, i.right - (e.left + t.width)); return Math.abs(n) * t.width + Math.abs(s) * t.height; },
  __getPosition(e, t, i, n, s, o) {
    let a; const r = [{
      verticalAlign: 'top', horizontalAlign: 'left', top: s.top + this.verticalOffset, left: s.left + this.horizontalOffset,
    }, {
      verticalAlign: 'top', horizontalAlign: 'right', top: s.top + this.verticalOffset, left: s.right - i.width - this.horizontalOffset,
    }, {
      verticalAlign: 'bottom', horizontalAlign: 'left', top: s.bottom - i.height - this.verticalOffset, left: s.left + this.horizontalOffset,
    }, {
      verticalAlign: 'bottom', horizontalAlign: 'right', top: s.bottom - i.height - this.verticalOffset, left: s.right - i.width - this.horizontalOffset,
    }]; if (this.noOverlap) { for (var l = 0, h = r.length; l < h; l++) { const c = {}; for (const d in r[l])c[d] = r[l][d]; r.push(c); }r[0].top = r[1].top += s.height, r[2].top = r[3].top -= s.height, r[4].left = r[6].left += s.width, r[5].left = r[7].left -= s.width; }t = t === 'auto' ? null : t, (e = e === 'auto' ? null : e) && e !== 'center' || (r.push({
      verticalAlign: 'top', horizontalAlign: 'center', top: s.top + this.verticalOffset + (this.noOverlap ? s.height : 0), left: s.left - n.width / 2 + s.width / 2 + this.horizontalOffset,
    }), r.push({
      verticalAlign: 'bottom', horizontalAlign: 'center', top: s.bottom - i.height - this.verticalOffset - (this.noOverlap ? s.height : 0), left: s.left - n.width / 2 + s.width / 2 + this.horizontalOffset,
    })), t && t !== 'middle' || (r.push({
      verticalAlign: 'middle', horizontalAlign: 'left', top: s.top - n.height / 2 + s.height / 2 + this.verticalOffset, left: s.left + this.horizontalOffset + (this.noOverlap ? s.width : 0),
    }), r.push({
      verticalAlign: 'middle', horizontalAlign: 'right', top: s.top - n.height / 2 + s.height / 2 + this.verticalOffset, left: s.right - i.width - this.horizontalOffset - (this.noOverlap ? s.width : 0),
    })), t === 'middle' && e === 'center' && r.push({
      verticalAlign: 'middle', horizontalAlign: 'center', top: s.top - n.height / 2 + s.height / 2 + this.verticalOffset, left: s.left - n.width / 2 + s.width / 2 + this.horizontalOffset,
    }); for (l = 0; l < r.length; l++) { const p = r[l]; const u = p.verticalAlign === t; const f = p.horizontalAlign === e; if (!this.dynamicAlign && !this.noOverlap && u && f) { a = p; break; } const m = (!t || u) && (!e || f); if (this.dynamicAlign || m) { if (p.offscreenArea = this.__getOffscreenArea(p, i, o), p.offscreenArea === 0 && m) { a = p; break; }a = a || p; const g = p.offscreenArea - a.offscreenArea; (g < 0 || g === 0 && (u || f)) && (a = p); } } return a;
  },
}; const ma = Element.prototype; const ga = ma.matches || ma.matchesSelector || ma.mozMatchesSelector || ma.msMatchesSelector || ma.oMatchesSelector || ma.webkitMatchesSelector; const _a = new class {
  getTabbableNodes(e) { const t = []; return this._collectTabbableNodes(e, t) ? this._sortByTabIndex(t) : t; }

  isFocusable(e) { return ga.call(e, 'input, select, textarea, button, object') ? ga.call(e, ':not([disabled])') : ga.call(e, 'a[href], area[href], iframe, [tabindex], [contentEditable]'); }

  isTabbable(e) { return this.isFocusable(e) && ga.call(e, ':not([tabindex="-1"])') && this._isVisible(e); }

  _normalizedTabIndex(e) { if (this.isFocusable(e)) { const t = e.getAttribute('tabindex') || 0; return Number(t); } return -1; }

  _collectTabbableNodes(e, t) { if (e.nodeType !== Node.ELEMENT_NODE) return !1; const i = e; if (!this._isVisible(i)) return !1; let n; const s = this._normalizedTabIndex(i); let o = s > 0; s >= 0 && t.push(i), n = i.localName === 'content' || i.localName === 'slot' ? Vs(i).getDistributedNodes() : Vs(i.root || i).children; for (let a = 0; a < n.length; a++)o = this._collectTabbableNodes(n[a], t) || o; return o; }

  _isVisible(e) { let t = e.style; return t.visibility !== 'hidden' && t.display !== 'none' && ((t = window.getComputedStyle(e)).visibility !== 'hidden' && t.display !== 'none'); }

  _sortByTabIndex(e) { const t = e.length; if (t < 2) return e; const i = Math.ceil(t / 2); const n = this._sortByTabIndex(e.slice(0, i)); const s = this._sortByTabIndex(e.slice(i)); return this._mergeSortByTabIndex(n, s); }

  _mergeSortByTabIndex(e, t) { for (var i = []; e.length > 0 && t.length > 0;) this._hasLowerTabOrder(e[0], t[0]) ? i.push(t.shift()) : i.push(e.shift()); return i.concat(e, t); }

  _hasLowerTabOrder(e, t) { const i = Math.max(e.tabIndex, 0); const n = Math.max(t.tabIndex, 0); return i === 0 || n === 0 ? n > i : i > n; }
}(); qs({
  _template: po(_ || (_ = F`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`)),
  is: 'iron-overlay-backdrop',
  properties: {
    opened: {
      reflectToAttribute: !0, type: Boolean, value: !1, observer: '_openedChanged',
    },
  },
  listeners: { transitionend: '_onTransitionend' },
  created() { this.__openedRaf = null; },
  attached() { this.opened && this._openedChanged(this.opened); },
  prepare() { this.opened && !this.parentNode && Vs(document.body).appendChild(this); },
  open() { this.opened = !0; },
  close() { this.opened = !1; },
  complete() { this.opened || this.parentNode !== document.body || Vs(this.parentNode).removeChild(this); },
  _onTransitionend(e) { e && e.target === this && this.complete(); },
  _openedChanged(e) { if (e) this.prepare(); else { const t = window.getComputedStyle(this); t.transitionDuration !== '0s' && t.opacity != 0 || this.complete(); } this.isAttached && (this.__openedRaf && (window.cancelAnimationFrame(this.__openedRaf), this.__openedRaf = null), this.scrollTop = this.scrollTop, this.__openedRaf = window.requestAnimationFrame(() => { this.__openedRaf = null, this.toggleClass('opened', this.opened); })); },
}); const va = new class {
  constructor() { this._overlays = [], this._minimumZ = 101, this._backdropElement = null, Jn(document.documentElement, 'tap', (() => {})), document.addEventListener('tap', this._onCaptureClick.bind(this), !0), document.addEventListener('focus', this._onCaptureFocus.bind(this), !0), document.addEventListener('keydown', this._onCaptureKeyDown.bind(this), !0); }

  get backdropElement() { return this._backdropElement || (this._backdropElement = document.createElement('iron-overlay-backdrop')), this._backdropElement; }

  get deepActiveElement() { let e = document.activeElement; for (e && e instanceof Element != !1 || (e = document.body); e.root && Vs(e.root).activeElement;)e = Vs(e.root).activeElement; return e; }

  _bringOverlayAtIndexToFront(e) { const t = this._overlays[e]; if (t) { let i = this._overlays.length - 1; const n = this._overlays[i]; if (n && this._shouldBeBehindOverlay(t, n) && i--, !(e >= i)) { const s = Math.max(this.currentOverlayZ(), this._minimumZ); for (this._getZ(t) <= s && this._applyOverlayZ(t, s); e < i;) this._overlays[e] = this._overlays[e + 1], e++; this._overlays[i] = t; } } }

  addOrRemoveOverlay(e) { e.opened ? this.addOverlay(e) : this.removeOverlay(e); }

  addOverlay(e) { const t = this._overlays.indexOf(e); if (t >= 0) return this._bringOverlayAtIndexToFront(t), void this.trackBackdrop(); let i = this._overlays.length; const n = this._overlays[i - 1]; let s = Math.max(this._getZ(n), this._minimumZ); const o = this._getZ(e); if (n && this._shouldBeBehindOverlay(e, n)) { this._applyOverlayZ(n, s), i--; const a = this._overlays[i - 1]; s = Math.max(this._getZ(a), this._minimumZ); }o <= s && this._applyOverlayZ(e, s), this._overlays.splice(i, 0, e), this.trackBackdrop(); }

  removeOverlay(e) { const t = this._overlays.indexOf(e); t !== -1 && (this._overlays.splice(t, 1), this.trackBackdrop()); }

  currentOverlay() { const e = this._overlays.length - 1; return this._overlays[e]; }

  currentOverlayZ() { return this._getZ(this.currentOverlay()); }

  ensureMinimumZ(e) { this._minimumZ = Math.max(this._minimumZ, e); }

  focusOverlay() { const e = this.currentOverlay(); e && e._applyFocus(); }

  trackBackdrop() { const e = this._overlayWithBackdrop(); (e || this._backdropElement) && (this.backdropElement.style.zIndex = this._getZ(e) - 1, this.backdropElement.opened = !!e, this.backdropElement.prepare()); }

  getBackdrops() { for (var e = [], t = 0; t < this._overlays.length; t++) this._overlays[t].withBackdrop && e.push(this._overlays[t]); return e; }

  backdropZ() { return this._getZ(this._overlayWithBackdrop()) - 1; }

  _overlayWithBackdrop() { for (let e = this._overlays.length - 1; e >= 0; e--) if (this._overlays[e].withBackdrop) return this._overlays[e]; }

  _getZ(e) { let t = this._minimumZ; if (e) { const i = Number(e.style.zIndex || window.getComputedStyle(e).zIndex); i == i && (t = i); } return t; }

  _setZ(e, t) { e.style.zIndex = t; }

  _applyOverlayZ(e, t) { this._setZ(e, t + 2); }

  _overlayInPath(e) { e = e || []; for (let t = 0; t < e.length; t++) if (e[t]._manager === this) return e[t]; }

  _onCaptureClick(e) { let t = this._overlays.length - 1; if (t !== -1) for (var i, n = Vs(e).path; (i = this._overlays[t]) && this._overlayInPath(n) !== i && (i._onCaptureClick(e), i.allowClickThrough);)t--; }

  _onCaptureFocus(e) { const t = this.currentOverlay(); t && t._onCaptureFocus(e); }

  _onCaptureKeyDown(e) { const t = this.currentOverlay(); t && (Go.keyboardEventMatchesKeys(e, 'esc') ? t._onCaptureEsc(e) : Go.keyboardEventMatchesKeys(e, 'tab') && t._onCaptureTab(e)); }

  _shouldBeBehindOverlay(e, t) { return !e.alwaysOnTop && t.alwaysOnTop; }
}(); let ya; let ba; const wa = { pageX: 0, pageY: 0 }; let za = null; let Ca = []; const Sa = ['wheel', 'mousewheel', 'DOMMouseScroll', 'touchstart', 'touchmove']; function xa(e) { Ea.indexOf(e) >= 0 || (Ea.length === 0 && (function () { ya = ya || Ta.bind(void 0); for (let e = 0, t = Sa.length; e < t; e++)document.addEventListener(Sa[e], ya, { capture: !0, passive: !1 }); }()), Ea.push(e), ba = Ea[Ea.length - 1]); } function Ma(e) { const t = Ea.indexOf(e); t !== -1 && (Ea.splice(t, 1), ba = Ea[Ea.length - 1], Ea.length === 0 && (function () { for (let e = 0, t = Sa.length; e < t; e++)document.removeEventListener(Sa[e], ya, { capture: !0, passive: !1 }); }())); } const Ea = []; function Ta(e) { if (e.cancelable && (function (e) { const t = Vs(e).rootTarget; e.type !== 'touchmove' && za !== t && (za = t, Ca = (function (e) { for (var t = [], i = e.indexOf(ba), n = 0; n <= i; n++) if (e[n].nodeType === Node.ELEMENT_NODE) { const s = e[n]; let o = s.style; o.overflow !== 'scroll' && o.overflow !== 'auto' && (o = window.getComputedStyle(s)), o.overflow !== 'scroll' && o.overflow !== 'auto' || t.push(s); } return t; }(Vs(e).path))); if (!Ca.length) return !0; if (e.type === 'touchstart') return !1; const i = (function (e) { const t = { deltaX: e.deltaX, deltaY: e.deltaY }; if ('deltaX' in e);else if ('wheelDeltaX' in e && 'wheelDeltaY' in e)t.deltaX = -e.wheelDeltaX, t.deltaY = -e.wheelDeltaY; else if ('wheelDelta' in e)t.deltaX = 0, t.deltaY = -e.wheelDelta; else if ('axis' in e)t.deltaX = e.axis === 1 ? e.detail : 0, t.deltaY = e.axis === 2 ? e.detail : 0; else if (e.targetTouches) { const i = e.targetTouches[0]; t.deltaX = wa.pageX - i.pageX, t.deltaY = wa.pageY - i.pageY; } return t; }(e)); return !(function (e, t, i) { if (!t && !i) return; for (let n = Math.abs(i) >= Math.abs(t), s = 0; s < e.length; s++) { const o = e[s]; if (n ? i < 0 ? o.scrollTop > 0 : o.scrollTop < o.scrollHeight - o.clientHeight : t < 0 ? o.scrollLeft > 0 : o.scrollLeft < o.scrollWidth - o.clientWidth) return o; } }(Ca, i.deltaX, i.deltaY)); }(e)) && e.preventDefault(), e.targetTouches) { const t = e.targetTouches[0]; wa.pageX = t.pageX, wa.pageY = t.pageY; } } const Ha = {
  properties: {
    opened: {
      observer: '_openedChanged', type: Boolean, value: !1, notify: !0,
    },
    canceled: {
      observer: '_canceledChanged', readOnly: !0, type: Boolean, value: !1,
    },
    withBackdrop: { observer: '_withBackdropChanged', type: Boolean },
    noAutoFocus: { type: Boolean, value: !1 },
    noCancelOnEscKey: { type: Boolean, value: !1 },
    noCancelOnOutsideClick: { type: Boolean, value: !1 },
    closingReason: { type: Object },
    restoreFocusOnClose: { type: Boolean, value: !1 },
    allowClickThrough: { type: Boolean },
    alwaysOnTop: { type: Boolean },
    scrollAction: { type: String },
    _manager: { type: Object, value: va },
    _focusedChild: { type: Object },
  },
  listeners: { 'iron-resize': '_onIronResize' },
  observers: ['__updateScrollObservers(isAttached, opened, scrollAction)'],
  get backdropElement() { return this._manager.backdropElement; },
  get _focusNode() { return this._focusedChild || Vs(this).querySelector('[autofocus]') || this; },
  get _focusableNodes() { return _a.getTabbableNodes(this); },
  ready() { this.__isAnimating = !1, this.__shouldRemoveTabIndex = !1, this.__firstFocusableNode = this.__lastFocusableNode = null, this.__rafs = {}, this.__restoreFocusNode = null, this.__scrollTop = this.__scrollLeft = null, this.__onCaptureScroll = this.__onCaptureScroll.bind(this), this.__rootNodes = null, this._ensureSetup(); },
  attached() { this.opened && this._openedChanged(this.opened), this._observer = Vs(this).observeNodes(this._onNodesChange); },
  detached() { for (const e in this._observer && Vs(this).unobserveNodes(this._observer), this._observer = null, this.__rafs) this.__rafs[e] !== null && cancelAnimationFrame(this.__rafs[e]); this.__rafs = {}, this._manager.removeOverlay(this), this.__isAnimating && (this.opened ? this._finishRenderOpened() : (this._applyFocus(), this._finishRenderClosed())); },
  toggle() { this._setCanceled(!1), this.opened = !this.opened; },
  open() { this._setCanceled(!1), this.opened = !0; },
  close() { this._setCanceled(!1), this.opened = !1; },
  cancel(e) { this.fire('iron-overlay-canceled', e, { cancelable: !0 }).defaultPrevented || (this._setCanceled(!0), this.opened = !1); },
  invalidateTabbables() { this.__firstFocusableNode = this.__lastFocusableNode = null; },
  _ensureSetup() { this._overlaySetup || (this._overlaySetup = !0, this.style.outline = 'none', this.style.display = 'none'); },
  _openedChanged(e) { e ? this.removeAttribute('aria-hidden') : this.setAttribute('aria-hidden', 'true'), this.isAttached && (this.__isAnimating = !0, this.__deraf('__openedChanged', this.__openedChanged)); },
  _canceledChanged() { this.closingReason = this.closingReason || {}, this.closingReason.canceled = this.canceled; },
  _withBackdropChanged() { this.withBackdrop && !this.hasAttribute('tabindex') ? (this.setAttribute('tabindex', '-1'), this.__shouldRemoveTabIndex = !0) : this.__shouldRemoveTabIndex && (this.removeAttribute('tabindex'), this.__shouldRemoveTabIndex = !1), this.opened && this.isAttached && this._manager.trackBackdrop(); },
  _prepareRenderOpened() { this.__restoreFocusNode = this._manager.deepActiveElement, this._preparePositioning(), this.refit(), this._finishPositioning(), this.noAutoFocus && document.activeElement === this._focusNode && (this._focusNode.blur(), this.__restoreFocusNode.focus()); },
  _renderOpened() { this._finishRenderOpened(); },
  _renderClosed() { this._finishRenderClosed(); },
  _finishRenderOpened() { this.notifyResize(), this.__isAnimating = !1, this.fire('iron-overlay-opened'); },
  _finishRenderClosed() { this.style.display = 'none', this.style.zIndex = '', this.notifyResize(), this.__isAnimating = !1, this.fire('iron-overlay-closed', this.closingReason); },
  _preparePositioning() { this.style.transition = this.style.webkitTransition = 'none', this.style.transform = this.style.webkitTransform = 'none', this.style.display = ''; },
  _finishPositioning() { this.style.display = 'none', this.scrollTop = this.scrollTop, this.style.transition = this.style.webkitTransition = '', this.style.transform = this.style.webkitTransform = '', this.style.display = '', this.scrollTop = this.scrollTop; },
  _applyFocus() { if (this.opened) this.noAutoFocus || this._focusNode.focus(); else { if (this.restoreFocusOnClose && this.__restoreFocusNode) { const e = this._manager.deepActiveElement; (e === document.body || Aa(this, e)) && this.__restoreFocusNode.focus(); } this.__restoreFocusNode = null, this._focusNode.blur(), this._focusedChild = null; } },
  _onCaptureClick(e) { this.noCancelOnOutsideClick || this.cancel(e); },
  _onCaptureFocus(e) { if (this.withBackdrop) { const t = Vs(e).path; t.indexOf(this) === -1 ? (e.stopPropagation(), this._applyFocus()) : this._focusedChild = t[0]; } },
  _onCaptureEsc(e) { this.noCancelOnEscKey || this.cancel(e); },
  _onCaptureTab(e) { if (this.withBackdrop) { this.__ensureFirstLastFocusables(); const t = e.shiftKey; const i = t ? this.__firstFocusableNode : this.__lastFocusableNode; const n = t ? this.__lastFocusableNode : this.__firstFocusableNode; let s = !1; if (i === n)s = !0; else { const o = this._manager.deepActiveElement; s = o === i || o === this; }s && (e.preventDefault(), this._focusedChild = n, this._applyFocus()); } },
  _onIronResize() { this.opened && !this.__isAnimating && this.__deraf('refit', this.refit); },
  _onNodesChange() { this.opened && !this.__isAnimating && (this.invalidateTabbables(), this.notifyResize()); },
  __ensureFirstLastFocusables() { const e = this._focusableNodes; this.__firstFocusableNode = e[0], this.__lastFocusableNode = e[e.length - 1]; },
  __openedChanged() { this.opened ? (this._prepareRenderOpened(), this._manager.addOverlay(this), this._applyFocus(), this._renderOpened()) : (this._manager.removeOverlay(this), this._applyFocus(), this._renderClosed()); },
  __deraf(e, t) { const i = this.__rafs; i[e] !== null && cancelAnimationFrame(i[e]), i[e] = requestAnimationFrame(() => { i[e] = null, t.call(this); }); },
  __updateScrollObservers(e, t, i) { e && t && this.__isValidScrollAction(i) ? (i === 'lock' && (this.__saveScrollPosition(), xa(this)), this.__addScrollListeners()) : (Ma(this), this.__removeScrollListeners()); },
  __addScrollListeners() { if (!this.__rootNodes) { if (this.__rootNodes = [], Ut) for (let e = this; e;)e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host && this.__rootNodes.push(e), e = e.host || e.assignedSlot || e.parentNode; this.__rootNodes.push(document); } this.__rootNodes.forEach((function (e) { e.addEventListener('scroll', this.__onCaptureScroll, { capture: !0, passive: !0 }); }), this); },
  __removeScrollListeners() { this.__rootNodes && this.__rootNodes.forEach((function (e) { e.removeEventListener('scroll', this.__onCaptureScroll, { capture: !0, passive: !0 }); }), this), this.isAttached || (this.__rootNodes = null); },
  __isValidScrollAction(e) { return e === 'lock' || e === 'refit' || e === 'cancel'; },
  __onCaptureScroll(e) { if (!(this.__isAnimating || Vs(e).path.indexOf(this) >= 0)) switch (this.scrollAction) { case 'lock': this.__restoreScrollPosition(); break; case 'refit': this.__deraf('refit', this.refit); break; case 'cancel': this.cancel(e); } },
  __saveScrollPosition() { document.scrollingElement ? (this.__scrollTop = document.scrollingElement.scrollTop, this.__scrollLeft = document.scrollingElement.scrollLeft) : (this.__scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop), this.__scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)); },
  __restoreScrollPosition() { document.scrollingElement ? (document.scrollingElement.scrollTop = this.__scrollTop, document.scrollingElement.scrollLeft = this.__scrollLeft) : (document.documentElement.scrollTop = document.body.scrollTop = this.__scrollTop, document.documentElement.scrollLeft = document.body.scrollLeft = this.__scrollLeft); },
}; const Aa = (e, t) => { for (let n = t; n; n = (i = n).assignedSlot || i.parentNode || i.host) if (n === e) return !0; let i; return !1; }; const ka = [fa, Mo, Ha]; const La = [{
  properties: { animationConfig: { type: Object }, entryAnimation: { observer: '_entryAnimationChanged', type: String }, exitAnimation: { observer: '_exitAnimationChanged', type: String } }, _entryAnimationChanged() { this.animationConfig = this.animationConfig || {}, this.animationConfig.entry = [{ name: this.entryAnimation, node: this }]; }, _exitAnimationChanged() { this.animationConfig = this.animationConfig || {}, this.animationConfig.exit = [{ name: this.exitAnimation, node: this }]; }, _copyProperties(e, t) { for (const i in t)e[i] = t[i]; }, _cloneConfig(e) { const t = { isClone: !0 }; return this._copyProperties(t, e), t; }, _getAnimationConfigRecursive(e, t, i) { let n; if (this.animationConfig) if (this.animationConfig.value && typeof this.animationConfig.value === 'function') this._warn(this._logf('playAnimation', "Please put 'animationConfig' inside of your components 'properties' object instead of outside of it.")); else if (n = e ? this.animationConfig[e] : this.animationConfig, Array.isArray(n) || (n = [n]), n) for (var s, o = 0; s = n[o]; o++) if (s.animatable)s.animatable._getAnimationConfigRecursive(s.type || e, t, i); else if (s.id) { let a = t[s.id]; a ? (a.isClone || (t[s.id] = this._cloneConfig(a), a = t[s.id]), this._copyProperties(a, s)) : t[s.id] = s; } else i.push(s); }, getAnimationConfig(e) { const t = {}; const i = []; for (const n in this._getAnimationConfigRecursive(e, t, i), t)i.push(t[n]); return i; },
}, {
  _configureAnimations(e) { const t = []; const i = []; if (e.length > 0) for (let t, n = 0; t = e[n]; n++) { const e = document.createElement(t.name); if (e.isNeonAnimation) { let n = null; e.configure || (e.configure = function (e) { return null; }), n = e.configure(t), i.push({ result: n, config: t, neonAnimation: e }); } else console.warn(`${this.is}:`, t.name, 'not found!'); } for (let n = 0; n < i.length; n++) { let e = i[n].result; const s = i[n].config; const o = i[n].neonAnimation; try { typeof e.cancel !== 'function' && (e = document.timeline.play(e)); } catch (t) { e = null, console.warn('Couldnt play', '(', s.name, ').', t); }e && t.push({ neonAnimation: o, config: s, animation: e }); } return t; }, _shouldComplete(e) { for (var t = !0, i = 0; i < e.length; i++) if (e[i].animation.playState != 'finished') { t = !1; break; } return t; }, _complete(e) { for (var t = 0; t < e.length; t++)e[t].neonAnimation.complete(e[t].config); for (t = 0; t < e.length; t++)e[t].animation.cancel(); }, playAnimation(e, t) { const i = this.getAnimationConfig(e); if (i) { this._active = this._active || {}, this._active[e] && (this._complete(this._active[e]), delete this._active[e]); const n = this._configureAnimations(i); if (n.length != 0) { this._active[e] = n; for (let s = 0; s < n.length; s++)n[s].animation.onfinish = function () { this._shouldComplete(n) && (this._complete(n), delete this._active[e], this.fire('neon-animation-finish', t, { bubbles: !1 })); }.bind(this); } else this.fire('neon-animation-finish', t, { bubbles: !1 }); } }, cancelAnimation() { for (const e in this._active) { const t = this._active[e]; for (const i in t)t[i].animation.cancel(); } this._active = {}; },
}]; qs({
  _template: po(v || (v = F`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`)),
  is: 'iron-dropdown',
  behaviors: [Io, Go, ka, La],
  properties: {
    horizontalAlign: { type: String, value: 'left', reflectToAttribute: !0 }, verticalAlign: { type: String, value: 'top', reflectToAttribute: !0 }, openAnimationConfig: { type: Object }, closeAnimationConfig: { type: Object }, focusTarget: { type: Object }, noAnimations: { type: Boolean, value: !1 }, allowOutsideScroll: { type: Boolean, value: !1, observer: '_allowOutsideScrollChanged' },
  },
  listeners: { 'neon-animation-finish': '_onNeonAnimationFinish' },
  observers: ['_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)'],
  get containedElement() { for (let e = Vs(this.$.content).getDistributedNodes(), t = 0, i = e.length; t < i; t++) if (e[t].nodeType === Node.ELEMENT_NODE) return e[t]; },
  ready() { this.scrollAction || (this.scrollAction = this.allowOutsideScroll ? 'refit' : 'lock'), this._readied = !0; },
  attached() { this.sizingTarget && this.sizingTarget !== this || (this.sizingTarget = this.containedElement || this); },
  detached() { this.cancelAnimation(); },
  _openedChanged() { this.opened && this.disabled ? this.cancel() : (this.cancelAnimation(), this._updateAnimationConfig(), Ha._openedChanged.apply(this, arguments)); },
  _renderOpened() { !this.noAnimations && this.animationConfig.open ? (this.$.contentWrapper.classList.add('animating'), this.playAnimation('open')) : Ha._renderOpened.apply(this, arguments); },
  _renderClosed() { !this.noAnimations && this.animationConfig.close ? (this.$.contentWrapper.classList.add('animating'), this.playAnimation('close')) : Ha._renderClosed.apply(this, arguments); },
  _onNeonAnimationFinish() { this.$.contentWrapper.classList.remove('animating'), this.opened ? this._finishRenderOpened() : this._finishRenderClosed(); },
  _updateAnimationConfig() { for (let e = this.containedElement, t = [].concat(this.openAnimationConfig || []).concat(this.closeAnimationConfig || []), i = 0; i < t.length; i++)t[i].node = e; this.animationConfig = { open: this.openAnimationConfig, close: this.closeAnimationConfig }; },
  _updateOverlayPosition() { this.isAttached && this.notifyResize(); },
  _allowOutsideScrollChanged(e) { this._readied && (e ? this.scrollAction && this.scrollAction !== 'lock' || (this.scrollAction = 'refit') : this.scrollAction = 'lock'); },
  _applyFocus() { const e = this.focusTarget || this.containedElement; e && this.opened && !this.noAutoFocus ? e.focus() : Ha._applyFocus.apply(this, arguments); },
}); const Pa = {
  properties: { animationTiming: { type: Object, value() { return { duration: 500, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'both' }; } } }, isNeonAnimation: !0, created() { document.body.animate || console.warn('No web animations detected. This element will not function without a web animations polyfill.'); }, timingFromConfig(e) { if (e.timing) for (const t in e.timing) this.animationTiming[t] = e.timing[t]; return this.animationTiming; }, setPrefixedProperty(e, t, i) { for (var n, s = { transform: ['webkitTransform'], transformOrigin: ['mozTransformOrigin', 'webkitTransformOrigin'] }[t], o = 0; n = s[o]; o++)e.style[n] = i; e.style[t] = i; }, complete(e) {},
}; qs({ is: 'fade-in-animation', behaviors: [Pa], configure(e) { const t = e.node; return this._effect = new KeyframeEffect(t, [{ opacity: '0' }, { opacity: '1' }], this.timingFromConfig(e)), this._effect; } }), qs({ is: 'fade-out-animation', behaviors: [Pa], configure(e) { const t = e.node; return this._effect = new KeyframeEffect(t, [{ opacity: '1' }, { opacity: '0' }], this.timingFromConfig(e)), this._effect; } }); const Va = po(y || (y = F`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`)); Va.setAttribute('style', 'display: none;'), document.head.appendChild(Va.content), qs({ is: 'paper-menu-grow-height-animation', behaviors: [Pa], configure(e) { const t = e.node; const i = t.getBoundingClientRect().height; return this._effect = new KeyframeEffect(t, [{ height: `${i / 2}px` }, { height: `${i}px` }], this.timingFromConfig(e)), this._effect; } }), qs({ is: 'paper-menu-grow-width-animation', behaviors: [Pa], configure(e) { const t = e.node; const i = t.getBoundingClientRect().width; return this._effect = new KeyframeEffect(t, [{ width: `${i / 2}px` }, { width: `${i}px` }], this.timingFromConfig(e)), this._effect; } }), qs({ is: 'paper-menu-shrink-width-animation', behaviors: [Pa], configure(e) { const t = e.node; const i = t.getBoundingClientRect().width; return this._effect = new KeyframeEffect(t, [{ width: `${i}px` }, { width: `${i - i / 20}px` }], this.timingFromConfig(e)), this._effect; } }), qs({ is: 'paper-menu-shrink-height-animation', behaviors: [Pa], configure(e) { const t = e.node; const i = t.getBoundingClientRect().height; return this.setPrefixedProperty(t, 'transformOrigin', '0 0'), this._effect = new KeyframeEffect(t, [{ height: `${i}px`, transform: 'translateY(0)' }, { height: `${i / 2}px`, transform: 'translateY(-20px)' }], this.timingFromConfig(e)), this._effect; } }); const Oa = { ANIMATION_CUBIC_BEZIER: 'cubic-bezier(.3,.95,.5,1)', MAX_ANIMATION_TIME_MS: 400 }; const Ia = qs({
  _template: po(b || (b = F`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`)),
  is: 'paper-menu-button',
  behaviors: [Go, Io],
  properties: {
    opened: {
      type: Boolean, value: !1, notify: !0, observer: '_openedChanged',
    },
    horizontalAlign: { type: String, value: 'left', reflectToAttribute: !0 },
    verticalAlign: { type: String, value: 'top', reflectToAttribute: !0 },
    dynamicAlign: { type: Boolean },
    horizontalOffset: { type: Number, value: 0, notify: !0 },
    verticalOffset: { type: Number, value: 0, notify: !0 },
    noOverlap: { type: Boolean },
    noAnimations: { type: Boolean, value: !1 },
    ignoreSelect: { type: Boolean, value: !1 },
    closeOnActivate: { type: Boolean, value: !1 },
    openAnimationConfig: { type: Object, value() { return [{ name: 'fade-in-animation', timing: { delay: 100, duration: 200 } }, { name: 'paper-menu-grow-width-animation', timing: { delay: 100, duration: 150, easing: Oa.ANIMATION_CUBIC_BEZIER } }, { name: 'paper-menu-grow-height-animation', timing: { delay: 100, duration: 275, easing: Oa.ANIMATION_CUBIC_BEZIER } }]; } },
    closeAnimationConfig: { type: Object, value() { return [{ name: 'fade-out-animation', timing: { duration: 150 } }, { name: 'paper-menu-shrink-width-animation', timing: { delay: 100, duration: 50, easing: Oa.ANIMATION_CUBIC_BEZIER } }, { name: 'paper-menu-shrink-height-animation', timing: { duration: 200, easing: 'ease-in' } }]; } },
    allowOutsideScroll: { type: Boolean, value: !1 },
    restoreFocusOnClose: { type: Boolean, value: !0 },
    _dropdownContent: { type: Object },
  },
  hostAttributes: { role: 'group', 'aria-haspopup': 'true' },
  listeners: { 'iron-activate': '_onIronActivate', 'iron-select': '_onIronSelect' },
  get contentElement() { for (let e = Vs(this.$.content).getDistributedNodes(), t = 0, i = e.length; t < i; t++) if (e[t].nodeType === Node.ELEMENT_NODE) return e[t]; },
  toggle() { this.opened ? this.close() : this.open(); },
  open() { this.disabled || this.$.dropdown.open(); },
  close() { this.$.dropdown.close(); },
  _onIronSelect(e) { this.ignoreSelect || this.close(); },
  _onIronActivate(e) { this.closeOnActivate && this.close(); },
  _openedChanged(e, t) { e ? (this._dropdownContent = this.contentElement, this.fire('paper-dropdown-open')) : t != null && this.fire('paper-dropdown-close'); },
  _disabledChanged(e) { Io._disabledChanged.apply(this, arguments), e && this.opened && this.close(); },
  __onIronOverlayCanceled(e) { const t = e.detail; const i = this.$.trigger; Vs(t).path.indexOf(i) > -1 && e.preventDefault(); },
}); Object.keys(Oa).forEach(((e) => { Ia[e] = Oa[e]; })), qs({
  is: 'iron-iconset-svg',
  properties: {
    name: { type: String, observer: '_nameChanged' }, size: { type: Number, value: 24 }, rtlMirroring: { type: Boolean, value: !1 }, useGlobalRtlAttribute: { type: Boolean, value: !1 },
  },
  created() { this._meta = new Lo({ type: 'iconset', key: null, value: null }); },
  attached() { this.style.display = 'none'; },
  getIconNames() { return this._icons = this._createIconMap(), Object.keys(this._icons).map((function (e) { return `${this.name}:${e}`; }), this); },
  applyIcon(e, t) { this.removeIcon(e); const i = this._cloneIcon(t, this.rtlMirroring && this._targetIsRTL(e)); if (i) { const n = Vs(e.root || e); return n.insertBefore(i, n.childNodes[0]), e._svgIcon = i; } return null; },
  removeIcon(e) { e._svgIcon && (Vs(e.root || e).removeChild(e._svgIcon), e._svgIcon = null); },
  _targetIsRTL(e) { if (this.__targetIsRTL == null) if (this.useGlobalRtlAttribute) { const t = document.body && document.body.hasAttribute('dir') ? document.body : document.documentElement; this.__targetIsRTL = t.getAttribute('dir') === 'rtl'; } else e && e.nodeType !== Node.ELEMENT_NODE && (e = e.host), this.__targetIsRTL = e && window.getComputedStyle(e).direction === 'rtl'; return this.__targetIsRTL; },
  _nameChanged() { this._meta.value = null, this._meta.key = this.name, this._meta.value = this, this.async((function () { this.fire('iron-iconset-added', this, { node: window }); })); },
  _createIconMap() { const e = Object.create(null); return Vs(this).querySelectorAll('[id]').forEach(((t) => { e[t.id] = t; })), e; },
  _cloneIcon(e, t) { return this._icons = this._icons || this._createIconMap(), this._prepareSvgClone(this._icons[e], this.size, t); },
  _prepareSvgClone(e, t, i) { if (e) { const n = e.cloneNode(!0); const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); const o = n.getAttribute('viewBox') || `0 0 ${t} ${t}`; let a = 'pointer-events: none; display: block; width: 100%; height: 100%;'; return i && n.hasAttribute('mirror-in-rtl') && (a += '-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;'), s.setAttribute('viewBox', o), s.setAttribute('preserveAspectRatio', 'xMidYMid meet'), s.setAttribute('focusable', 'false'), s.style.cssText = a, s.appendChild(n).removeAttribute('id'), s; } return null; },
}); const Na = document.createElement('template'); Na.setAttribute('style', 'display: none;'), Na.innerHTML = '<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>', document.head.appendChild(Na.content); const Ra = document.createElement('template'); Ra.setAttribute('style', 'display: none;'), Ra.innerHTML = '<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      /* paper-dropdown-menu and paper-dropdown-menu-light both delegate focus\n       * to other internal elements which manage focus styling. */\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host(:dir(rtl)) {\n        text-align: right;\n\n        @apply(--paper-dropdown-menu);\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>', document.head.appendChild(Ra.content); const Fa = Fs(HTMLElement); qs({
  _template: po(w || (w = F`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input id="input" type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]" input-role="button" input-aria-haspopup="listbox" autocomplete="off">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`)),
  is: 'paper-dropdown-menu',
  behaviors: [Zo, Io, ca, aa],
  properties: {
    selectedItemLabel: { type: String, notify: !0, readOnly: !0 },
    selectedItem: { type: Object, notify: !0, readOnly: !0 },
    value: { type: String, notify: !0 },
    label: { type: String },
    placeholder: { type: String },
    errorMessage: { type: String },
    opened: {
      type: Boolean, notify: !0, value: !1, observer: '_openedChanged',
    },
    allowOutsideScroll: { type: Boolean, value: !1 },
    noLabelFloat: { type: Boolean, value: !1, reflectToAttribute: !0 },
    alwaysFloatLabel: { type: Boolean, value: !1 },
    noAnimations: { type: Boolean, value: !1 },
    horizontalAlign: { type: String, value: 'right' },
    verticalAlign: { type: String, value: 'top' },
    verticalOffset: Number,
    dynamicAlign: { type: Boolean },
    restoreFocusOnClose: { type: Boolean, value: !0 },
  },
  listeners: { tap: '_onTap' },
  keyBindings: { 'up down': 'open', esc: 'close' },
  observers: ['_selectedItemChanged(selectedItem)'],
  _attachDom(e) { const t = ni(this); return t.attachShadow({ mode: 'open', delegatesFocus: !0, shadyUpgradeFragment: e }), t.shadowRoot.appendChild(e), Fa.prototype._attachDom.call(this, e); },
  focus() { this.$.input._focusableElement.focus(); },
  attached() { const e = this.contentElement; e && e.selectedItem && this._setSelectedItem(e.selectedItem); },
  get contentElement() { for (let e = Vs(this.$.content).getDistributedNodes(), t = 0, i = e.length; t < i; t++) if (e[t].nodeType === Node.ELEMENT_NODE) return e[t]; },
  open() { this.$.menuButton.open(); },
  close() { this.$.menuButton.close(); },
  _onIronSelect(e) { this._setSelectedItem(e.detail.item); },
  _onIronDeselect(e) { this._setSelectedItem(null); },
  _onTap(e) { as(e) === this && this.open(); },
  _selectedItemChanged(e) { let t = ''; t = e ? e.label || e.getAttribute('label') || e.textContent.trim() : '', this.value = t, this._setSelectedItemLabel(t); },
  _computeMenuVerticalOffset(e, t) { return t || (e ? -4 : 8); },
  _getValidity(e) { return this.disabled || !this.required || this.required && !!this.value; },
  _openedChanged() {
    const e = this.opened ? 'true' : 'false'; const
      t = this.contentElement; t && t.setAttribute('aria-expanded', e);
  },
}); const Da = document.createElement('template'); Da.setAttribute('style', 'display: none;'), Da.innerHTML = "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>", document.head.appendChild(Da.content); const Ba = [Zo, Io, { hostAttributes: { role: 'option', tabindex: '0' } }]; qs({
  _template: po(z || (z = F`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`)),
  is: 'paper-item',
  behaviors: [Ba],
}); class Ua {
  constructor(e) { this.selection = [], this.selectCallback = e; }

  get() { return this.multi ? this.selection.slice() : this.selection[0]; }

  clear(e) { this.selection.slice().forEach((function (t) { (!e || e.indexOf(t) < 0) && this.setItemSelected(t, !1); }), this); }

  isSelected(e) { return this.selection.indexOf(e) >= 0; }

  setItemSelected(e, t) { if (e != null && t !== this.isSelected(e)) { if (t) this.selection.push(e); else { const i = this.selection.indexOf(e); i >= 0 && this.selection.splice(i, 1); } this.selectCallback && this.selectCallback(e, t); } }

  select(e) { this.multi ? this.toggle(e) : this.get() !== e && (this.setItemSelected(this.get(), !1), this.setItemSelected(e, !0)); }

  toggle(e) { this.setItemSelected(e, !this.isSelected(e)); }
} const $a = {
  properties: {
    attrForSelected: { type: String, value: null },
    selected: { type: String, notify: !0 },
    selectedItem: { type: Object, readOnly: !0, notify: !0 },
    activateEvent: { type: String, value: 'tap', observer: '_activateEventChanged' },
    selectable: String,
    selectedClass: { type: String, value: 'iron-selected' },
    selectedAttribute: { type: String, value: null },
    fallbackSelection: { type: String, value: null },
    items: {
      type: Array, readOnly: !0, notify: !0, value() { return []; },
    },
    _excludedLocalNames: {
      type: Object,
      value() {
        return {
          template: 1, 'dom-bind': 1, 'dom-if': 1, 'dom-repeat': 1,
        };
      },
    },
  },
  observers: ['_updateAttrForSelected(attrForSelected)', '_updateSelected(selected)', '_checkFallback(fallbackSelection)'],
  created() { this._bindFilterItem = this._filterItem.bind(this), this._selection = new Ua(this._applySelection.bind(this)); },
  attached() { this._observer = this._observeItems(this), this._addListener(this.activateEvent); },
  detached() { this._observer && Vs(this).unobserveNodes(this._observer), this._removeListener(this.activateEvent); },
  indexOf(e) { return this.items ? this.items.indexOf(e) : -1; },
  select(e) { this.selected = e; },
  selectPrevious() { const e = this.items.length; let t = e - 1; void 0 !== this.selected && (t = (Number(this._valueToIndex(this.selected)) - 1 + e) % e), this.selected = this._indexToValue(t); },
  selectNext() { let e = 0; void 0 !== this.selected && (e = (Number(this._valueToIndex(this.selected)) + 1) % this.items.length), this.selected = this._indexToValue(e); },
  selectIndex(e) { this.select(this._indexToValue(e)); },
  forceSynchronousItemUpdate() { this._observer && typeof this._observer.flush === 'function' ? this._observer.flush() : this._updateItems(); },
  get _shouldUpdateSelection() { return this.selected != null; },
  _checkFallback() { this._updateSelected(); },
  _addListener(e) { this.listen(this, e, '_activateHandler'); },
  _removeListener(e) { this.unlisten(this, e, '_activateHandler'); },
  _activateEventChanged(e, t) { this._removeListener(t), this._addListener(e); },
  _updateItems() { let e = Vs(this).queryDistributedElements(this.selectable || '*'); e = Array.prototype.filter.call(e, this._bindFilterItem), this._setItems(e); },
  _updateAttrForSelected() { this.selectedItem && (this.selected = this._valueForItem(this.selectedItem)); },
  _updateSelected() { this._selectSelected(this.selected); },
  _selectSelected(e) { if (this.items) { const t = this._valueToItem(this.selected); t ? this._selection.select(t) : this._selection.clear(), this.fallbackSelection && this.items.length && void 0 === this._selection.get() && (this.selected = this.fallbackSelection); } },
  _filterItem(e) { return !this._excludedLocalNames[e.localName]; },
  _valueToItem(e) { return e == null ? null : this.items[this._valueToIndex(e)]; },
  _valueToIndex(e) { if (!this.attrForSelected) return Number(e); for (var t, i = 0; t = this.items[i]; i++) if (this._valueForItem(t) == e) return i; },
  _indexToValue(e) { if (!this.attrForSelected) return e; const t = this.items[e]; return t ? this._valueForItem(t) : void 0; },
  _valueForItem(e) { if (!e) return null; if (!this.attrForSelected) { const t = this.indexOf(e); return t === -1 ? null : t; } const i = e[gi(this.attrForSelected)]; return i != null ? i : e.getAttribute(this.attrForSelected); },
  _applySelection(e, t) { this.selectedClass && this.toggleClass(this.selectedClass, t, e), this.selectedAttribute && this.toggleAttribute(this.selectedAttribute, t, e), this._selectionChange(), this.fire(`iron-${t ? 'select' : 'deselect'}`, { item: e }); },
  _selectionChange() { this._setSelectedItem(this._selection.get()); },
  _observeItems(e) { return Vs(e).observeNodes((function (e) { this._updateItems(), this._updateSelected(), this.fire('iron-items-changed', e, { bubbles: !1, cancelable: !1 }); })); },
  _activateHandler(e) { for (let t = e.target, i = this.items; t && t != this;) { const n = i.indexOf(t); if (n >= 0) { const s = this._indexToValue(n); return void this._itemActivate(s, t); }t = t.parentNode; } },
  _itemActivate(e, t) { this.fire('iron-activate', { selected: e, item: t }, { cancelable: !0 }).defaultPrevented || this.select(e); },
}; const Ka = {
  properties: {
    multi: { type: Boolean, value: !1, observer: 'multiChanged' },
    selectedValues: { type: Array, notify: !0, value() { return []; } },
    selectedItems: {
      type: Array, readOnly: !0, notify: !0, value() { return []; },
    },
  },
  observers: ['_updateSelected(selectedValues.splices)'],
  select(e) { this.multi ? this._toggleSelected(e) : this.selected = e; },
  multiChanged(e) { this._selection.multi = e, this._updateSelected(); },
  get _shouldUpdateSelection() { return this.selected != null || this.selectedValues != null && this.selectedValues.length; },
  _updateAttrForSelected() { this.multi ? this.selectedItems && this.selectedItems.length > 0 && (this.selectedValues = this.selectedItems.map((function (e) { return this._indexToValue(this.indexOf(e)); }), this).filter(((e) => e != null), this)) : $a._updateAttrForSelected.apply(this); },
  _updateSelected() { this.multi ? this._selectMulti(this.selectedValues) : this._selectSelected(this.selected); },
  _selectMulti(e) { e = e || []; const t = (this._valuesToItems(e) || []).filter(((e) => e != null)); this._selection.clear(t); for (let i = 0; i < t.length; i++) this._selection.setItemSelected(t[i], !0); this.fallbackSelection && !this._selection.get().length && (this._valueToItem(this.fallbackSelection) && this.select(this.fallbackSelection)); },
  _selectionChange() { const e = this._selection.get(); this.multi ? (this._setSelectedItems(e), this._setSelectedItem(e.length ? e[0] : null)) : e != null ? (this._setSelectedItems([e]), this._setSelectedItem(e)) : (this._setSelectedItems([]), this._setSelectedItem(null)); },
  _toggleSelected(e) { const t = this.selectedValues.indexOf(e); t < 0 ? this.push('selectedValues', e) : this.splice('selectedValues', t, 1); },
  _valuesToItems(e) { return e == null ? null : e.map((function (e) { return this._valueToItem(e); }), this); },
}; const ja = {
  properties: { focusedItem: { observer: '_focusedItemChanged', readOnly: !0, type: Object }, attrForItemTitle: { type: String }, disabled: { type: Boolean, value: !1, observer: '_disabledChanged' } },
  _MODIFIER_KEYS: ['Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'OS', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock'],
  _SEARCH_RESET_TIMEOUT_MS: 1e3,
  _previousTabIndex: 0,
  hostAttributes: { role: 'menu' },
  observers: ['_updateMultiselectable(multi)'],
  listeners: { focus: '_onFocus', keydown: '_onKeydown', 'iron-items-changed': '_onIronItemsChanged' },
  keyBindings: {
    up: '_onUpKey', down: '_onDownKey', esc: '_onEscKey', 'shift+tab:keydown': '_onShiftTabDown',
  },
  attached() { this._resetTabindices(); },
  select(e) { this._defaultFocusAsync && (this.cancelAsync(this._defaultFocusAsync), this._defaultFocusAsync = null); const t = this._valueToItem(e); t && t.hasAttribute('disabled') || (this._setFocusedItem(t), Ka.select.apply(this, arguments)); },
  _resetTabindices() { const e = this.multi ? this.selectedItems && this.selectedItems[0] : this.selectedItem; this.items.forEach((function (t) { t.setAttribute('tabindex', t === e ? '0' : '-1'), t.setAttribute('aria-selected', this._selection.isSelected(t)); }), this); },
  _updateMultiselectable(e) { e ? this.setAttribute('aria-multiselectable', 'true') : this.removeAttribute('aria-multiselectable'); },
  _focusWithKeyboardEvent(e) { if (this._MODIFIER_KEYS.indexOf(e.key) === -1) { this.cancelDebouncer('_clearSearchText'); for (var t, i = this._searchText || '', n = (i += (e.key && e.key.length == 1 ? e.key : String.fromCharCode(e.keyCode)).toLocaleLowerCase()).length, s = 0; t = this.items[s]; s++) if (!t.hasAttribute('disabled')) { const o = this.attrForItemTitle || 'textContent'; const a = (t[o] || t.getAttribute(o) || '').trim(); if (!(a.length < n) && a.slice(0, n).toLocaleLowerCase() == i) { this._setFocusedItem(t); break; } } this._searchText = i, this.debounce('_clearSearchText', this._clearSearchText, this._SEARCH_RESET_TIMEOUT_MS); } },
  _clearSearchText() { this._searchText = ''; },
  _focusPrevious() { for (let e = this.items.length, t = Number(this.indexOf(this.focusedItem)), i = 1; i < e + 1; i++) { const n = this.items[(t - i + e) % e]; if (!n.hasAttribute('disabled')) { const s = Vs(n).getOwnerRoot() || document; if (this._setFocusedItem(n), Vs(s).activeElement == n) return; } } },
  _focusNext() { for (let e = this.items.length, t = Number(this.indexOf(this.focusedItem)), i = 1; i < e + 1; i++) { const n = this.items[(t + i) % e]; if (!n.hasAttribute('disabled')) { const s = Vs(n).getOwnerRoot() || document; if (this._setFocusedItem(n), Vs(s).activeElement == n) return; } } },
  _applySelection(e, t) { t ? e.setAttribute('aria-selected', 'true') : e.setAttribute('aria-selected', 'false'), $a._applySelection.apply(this, arguments); },
  _focusedItemChanged(e, t) { t && t.setAttribute('tabindex', '-1'), !e || e.hasAttribute('disabled') || this.disabled || (e.setAttribute('tabindex', '0'), e.focus()); },
  _onIronItemsChanged(e) { e.detail.addedNodes.length && this._resetTabindices(); },
  _onShiftTabDown(e) { const t = this.getAttribute('tabindex'); ja._shiftTabPressed = !0, this._setFocusedItem(null), this.setAttribute('tabindex', '-1'), this.async((function () { this.setAttribute('tabindex', t), ja._shiftTabPressed = !1; }), 1); },
  _onFocus(e) { if (!ja._shiftTabPressed) { const t = Vs(e).rootTarget; (t === this || void 0 === t.tabIndex || this.isLightDescendant(t)) && (this._defaultFocusAsync = this.async((function () { const e = this.multi ? this.selectedItems && this.selectedItems[0] : this.selectedItem; this._setFocusedItem(null), e ? this._setFocusedItem(e) : this.items[0] && this._focusNext(); }))); } },
  _onUpKey(e) { this._focusPrevious(), e.detail.keyboardEvent.preventDefault(); },
  _onDownKey(e) { this._focusNext(), e.detail.keyboardEvent.preventDefault(); },
  _onEscKey(e) { const t = this.focusedItem; t && t.blur(); },
  _onKeydown(e) { this.keyboardEventMatchesKeys(e, 'up down esc') || this._focusWithKeyboardEvent(e), e.stopPropagation(); },
  _activateHandler(e) { $a._activateHandler.call(this, e), e.stopPropagation(); },
  _disabledChanged(e) { e ? (this._previousTabIndex = this.hasAttribute('tabindex') ? this.tabIndex : 0, this.removeAttribute('tabindex')) : this.hasAttribute('tabindex') || this.setAttribute('tabindex', this._previousTabIndex); },
  _shiftTabPressed: !1,
}; const qa = [[$a, Ka], Go, ja]; qs({
  _template: po(C || (C = F`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`)),
  is: 'paper-listbox',
  behaviors: [qa],
  hostAttributes: { role: 'listbox' },
}); customElements.define('covid-app-nav', class extends Ne {
  static get properties() { return { typingTimer: { type: Number } }; }

  constructor() { super(), this.typingTimer = 0; }

  static get styles() { return Oe(S || (S = F`.nav-container{height:60px;color:var(--app-secondary-color);background-color:var(--app-primary-color);z-index:2}.nav-container .nav-container_button{--paper-icon-button-ink-color:var(--app-secondary-color)}.nav-container .nav-container_input{--paper-input-container-color:var(--app-secondary-color);--paper-input-container-focus-color:var(--app-secondary-color);--paper-input-container-invalid-color:red;--paper-input-container-input-color:var(--app-secondary-color)}.nav-container .nav-container_dropdown{margin-left:8px;--paper-input-container-color:white;--paper-input-container-focus-color:white;--paper-input-container-invalid-color:red;--paper-input-container-input-color:white}`)); }

  render() { return we(x || (x = F` <app-header class="nav-container" slot="header" fixed effects="waterfall"> <app-toolbar> <div main-title>COVID-19 Tracker</div> <paper-icon-button class="nav-container_button" icon="search"></paper-icon-button> <paper-input class="nav-container_input" always-float-label label="Country Name" name="country" @keyup="${0}" @keydown="${0}"></paper-input> <paper-dropdown-menu class="nav-container_dropdown" label="Sort By"> <paper-listbox slot="dropdown-content" id="sort_countries_dropdown" @iron-select="${0}"> <paper-item value="Default">Default</paper-item> <paper-item value="Cases">Cases</paper-item> <paper-item value="Recovered">Recovered</paper-item> <paper-item value="Deaths">Deaths</paper-item> </paper-listbox> </paper-dropdown-menu> </app-toolbar> </app-header> `), this.searchCountryKeyUp, this.searchCountryKeyDown, this.updateSorter); }

  searchCountryKeyUp() { const e = this.shadowRoot.querySelector('paper-input[name=country]').value; const t = new CustomEvent('keyboardUp', { detail: { filterValue: e } }); clearTimeout(this.typingTimer), this.typingTimer = setTimeout(() => this.dispatchEvent(t), 300); }

  searchCountryKeyDown() { clearTimeout(this.typingTimer); }

  updateSorter(e) { const t = e.target.selectedItem.getAttribute('value'); this.dispatchEvent(new CustomEvent('updateSorter', { detail: { sorterValue: t } })); }
}); customElements.define('covid-stat-box', class extends Ne {
  static get properties() {
    return {
      country: { type: String }, countryCode: { type: String }, cases: { type: Number }, newCases: { type: Number }, deaths: { type: Number }, recovered: { type: Number },
    };
  }

  static get styles() { return Oe(M || (M = F`:host{max-height:250px;box-sizing:border-box;border:5px solid #fff;opacity:1;position:relative;display:flex;flex-basis:25%;flex-flow:column wrap}:host(:hover){cursor:pointer;transition:.3s;opacity:1}.stats{margin-top:auto}.country-flag-container{overflow:hidden;height:75%;display:flex;justify-content:center}.country-flag-overlay{position:absolute;background-image:linear-gradient(180deg,#000 8%,rgba(161,161,171,0) 22%);opacity:.5;top:0;bottom:0;left:0;right:0;height:100%;width:100%;z-index:1}.country-flag-overlay:hover{transition:.5s;opacity:0}.country-flag-container .country-flag{width:100%;align-self:center}.stats-container{display:flex;font-family:roboto;height:25%;width:100%}.stats-container .mini-stat-box{display:flex;background-color:#000;opacity:.7;width:33.3%;height:100%;flex-flow:column wrap;justify-content:center;align-items:center}.stat-country{position:absolute;margin-top:8px;display:flex;justify-content:center;letter-spacing:1.5px;width:200px;font-family:Roboto,sans-serif;font-weight:500;color:#fff;z-index:2}.stat{font-weight:400;color:#fff}.stat-header{letter-spacing:1px;font-weight:600}.stat-deaths{color:var(--deaths-color)}.stat-recovered{color:var(--recovered-color)}@media only screen and (max-width:600px){:host{flex-basis:unset}}@media only screen and (min-width:600px){:host{flex-basis:unset}}@media only screen and (min-width:768px){:host{flex-basis:25%}}@media only screen and (min-width:992px){:host{flex-basis:25%}}@media only screen and (min-width:1200px){:host{flex-basis:25%}}`)); }

  render() { return we(E || (E = F` <div class="country-flag-container"> <div class="stat-country"> <span> ${0} </span> </div> <div class="country-flag-overlay"></div> <img class="country-flag" src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/${0}.png"> </div> <div class="stats-container"> <div class="mini-stat-box"> <span class="stat stat-header stat-cases">Cases</span> <span class="stat stat-cases">${0}</span> </div> <div class="mini-stat-box"> <span class="stat stat-header stat-deaths">Deaths</span> <span class="stat stat-deaths">${0}</span> </div> <div class="mini-stat-box"> <span class="stat stat-header stat-recovered">Recovered</span> <span class="stat stat-recovered">${0}</span> </div> </div> `), this.country, this.countryCode ? this.countryCode : 'af', this.cases, this.deaths, this.recovered); }
}); customElements.define('mil-pulse-spinner', class extends Ne {
  static get styles() { return [Oe(T || (T = F`.spinner{width:var(--width,40px);height:var(--height,40px);position:relative;margin:100px auto}.double-bounce1,.double-bounce2{width:100%;height:100%;border-radius:50%;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:sk-bounce 2s infinite ease-in-out;animation:sk-bounce 2s infinite ease-in-out}.double-bounce1{background-color:var(--color1,#000)}.double-bounce2{background-color:var(--color2,#fff)}.double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}`))]; }

  render() { return we(H || (H = F` <div class="spinner"> <div class="double-bounce1"></div> <div class="double-bounce2"></div> </div> `)); }
}); const Ya = po(A || (A = F`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`)); document.head.appendChild(Ya.content); const Wa = [{ code: 'AF', name: 'Afghanistan' }, { code: 'AX', name: 'Åland Islands' }, { code: 'AL', name: 'Albania' }, { code: 'DZ', name: 'Algeria' }, { code: 'AS', name: 'American Samoa' }, { code: 'AD', name: 'Andorra' }, { code: 'AO', name: 'Angola' }, { code: 'AI', name: 'Anguilla' }, { code: 'AQ', name: 'Antarctica' }, { code: 'AG', name: 'Antigua and Barbuda, Antigua-and-Barbuda' }, { code: 'AR', name: 'Argentina' }, { code: 'AM', name: 'Armenia' }, { code: 'AW', name: 'Aruba' }, { code: 'AU', name: 'Australia, Oceania' }, { code: 'AT', name: 'Austria' }, { code: 'AZ', name: 'Azerbaijan' }, { code: 'BS', name: 'Bahamas' }, { code: 'BH', name: 'Bahrain' }, { code: 'BD', name: 'Bangladesh' }, { code: 'BB', name: 'Barbados' }, { code: 'BY', name: 'Belarus' }, { code: 'BE', name: 'Belgium' }, { code: 'BZ', name: 'Belize' }, { code: 'BJ', name: 'Benin' }, { code: 'BM', name: 'Bermuda' }, { code: 'BT', name: 'Bhutan' }, { code: 'BO', name: 'Bolivia, Plurinational State of' }, { code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba, caribbean-netherlands' }, { code: 'BA', name: 'Bosnia and Herzegovina, Bosnia-and-Herzegovina' }, { code: 'BW', name: 'Botswana' }, { code: 'BV', name: 'Bouvet Island' }, { code: 'BR', name: 'Brazil' }, { code: 'IO', name: 'British Indian Ocean Territory' }, { code: 'BN', name: 'Brunei Darussalam' }, { code: 'BG', name: 'Bulgaria' }, { code: 'BF', name: 'Burkina Faso, Burkina-Faso' }, { code: 'BI', name: 'Burundi' }, { code: 'KH', name: 'Cambodia' }, { code: 'CM', name: 'Cameroon' }, { code: 'CA', name: 'Canada' }, { code: 'CV', name: 'Cape Verde, Cabo-Verde' }, { code: 'KY', name: 'Cayman Islands, Cayman-Islands' }, { code: 'CF', name: 'Central African Republic, CAR' }, { code: 'TD', name: 'Chad' }, { code: 'CL', name: 'Chile' }, { code: 'CN', name: 'China' }, { code: 'CX', name: 'Christmas Island' }, { code: 'CC', name: 'Cocos (Keeling) Islands' }, { code: 'CO', name: 'Colombia' }, { code: 'KM', name: 'Comoros' }, { code: 'CG', name: 'Congo' }, { code: 'CD', name: 'Congo, the Democratic Republic of the, DRC' }, { code: 'CK', name: 'Cook Islands' }, { code: 'CR', name: 'Costa Rica, Costa-Rica' }, { code: 'CI', name: "Côte d'Ivoire, ivory-coast" }, { code: 'HR', name: 'Croatia' }, { code: 'CU', name: 'Cuba' }, { code: 'CW', name: 'Curaçao, Cura&ccedil;ao' }, { code: 'CY', name: 'Cyprus' }, { code: 'CZ', name: 'Czech Republic, Czechia' }, { code: 'DK', name: 'Denmark' }, { code: 'DJ', name: 'Djibouti' }, { code: 'DM', name: 'Dominica' }, { code: 'DO', name: 'Dominican Republic, Dominican-Republic' }, { code: 'EC', name: 'Ecuador' }, { code: 'EG', name: 'Egypt' }, { code: 'SV', name: 'El Salvador, El-Salvador' }, { code: 'GQ', name: 'Equatorial Guinea, Equatorial-Guinea' }, { code: 'ER', name: 'Eritrea' }, { code: 'EE', name: 'Estonia' }, { code: 'ET', name: 'Ethiopia' }, { code: 'FK', name: 'Falkland Islands (Malvinas), falkland-islands' }, { code: 'FO', name: 'Faroe Islands, Faeroe-Islands' }, { code: 'FJ', name: 'Fiji' }, { code: 'FI', name: 'Finland' }, { code: 'FR', name: 'France' }, { code: 'GF', name: 'French Guiana, French-Guiana' }, { code: 'PF', name: 'French Polynesia, French-Polynesia' }, { code: 'TF', name: 'French Southern Territories' }, { code: 'GA', name: 'Gabon' }, { code: 'GM', name: 'Gambia' }, { code: 'GE', name: 'Georgia' }, { code: 'DE', name: 'Germany' }, { code: 'GH', name: 'Ghana' }, { code: 'GI', name: 'Gibraltar' }, { code: 'GR', name: 'Greece' }, { code: 'GL', name: 'Greenland' }, { code: 'GD', name: 'Grenada' }, { code: 'GP', name: 'Guadeloupe' }, { code: 'GU', name: 'Guam' }, { code: 'GT', name: 'Guatemala' }, { code: 'GG', name: 'Guernsey' }, { code: 'GN', name: 'Guinea' }, { code: 'GW', name: 'Guinea-Bissau' }, { code: 'GY', name: 'Guyana' }, { code: 'HT', name: 'Haiti' }, { code: 'HM', name: 'Heard Island and McDonald Islands' }, { code: 'VA', name: 'Holy See (Vatican City State), vatican-city' }, { code: 'HN', name: 'Honduras' }, { code: 'HK', name: 'Hong Kong, Hong-Kong' }, { code: 'HU', name: 'Hungary' }, { code: 'IS', name: 'Iceland' }, { code: 'IN', name: 'India' }, { code: 'ID', name: 'Indonesia' }, { code: 'IR', name: 'Iran' }, { code: 'IQ', name: 'Iraq' }, { code: 'IE', name: 'Ireland' }, { code: 'IM', name: 'Isle of Man, Isle-of-Man' }, { code: 'IL', name: 'Israel' }, { code: 'IT', name: 'Italy' }, { code: 'JM', name: 'Jamaica' }, { code: 'JP', name: 'Japan' }, { code: 'JE', name: 'Jersey' }, { code: 'JO', name: 'Jordan' }, { code: 'KZ', name: 'Kazakhstan' }, { code: 'KE', name: 'Kenya' }, { code: 'KI', name: 'Kiribati' }, { code: 'KP', name: "Korea, Democratic People's Republic of, South Korea, S-Korea" }, { code: 'KR', name: 'Korea, Republic of, North Korea, N-Korea' }, { code: 'KW', name: 'Kuwait' }, { code: 'KG', name: 'Kyrgyzstan' }, { code: 'LA', name: "Lao People's Democratic Republic, Laos" }, { code: 'LV', name: 'Latvia' }, { code: 'LB', name: 'Lebanon' }, { code: 'LS', name: 'Lesotho' }, { code: 'LR', name: 'Liberia' }, { code: 'LY', name: 'Libya' }, { code: 'LI', name: 'Liechtenstein' }, { code: 'LT', name: 'Lithuania' }, { code: 'LU', name: 'Luxembourg' }, { code: 'MO', name: 'Macao' }, { code: 'MK', name: 'Macedonia, the Former Yugoslav Republic of, North-Macedonia' }, { code: 'MG', name: 'Madagascar' }, { code: 'MW', name: 'Malawi' }, { code: 'MY', name: 'Malaysia' }, { code: 'MV', name: 'Maldives' }, { code: 'ML', name: 'Mali' }, { code: 'MT', name: 'Malta' }, { code: 'MH', name: 'Marshall Islands' }, { code: 'MQ', name: 'Martinique' }, { code: 'MR', name: 'Mauritania' }, { code: 'MU', name: 'Mauritius' }, { code: 'YT', name: 'Mayotte' }, { code: 'MX', name: 'Mexico' }, { code: 'FM', name: 'Micronesia, Federated States of' }, { code: 'MD', name: 'Moldova, Republic of' }, { code: 'MC', name: 'Monaco' }, { code: 'MN', name: 'Mongolia' }, { code: 'ME', name: 'Montenegro' }, { code: 'MS', name: 'Montserrat' }, { code: 'MA', name: 'Morocco' }, { code: 'MZ', name: 'Mozambique' }, { code: 'MM', name: 'Myanmar' }, { code: 'NA', name: 'Namibia' }, { code: 'NR', name: 'Nauru' }, { code: 'NP', name: 'Nepal' }, { code: 'NL', name: 'Netherlands, MS-Zaandam-' }, { code: 'NC', name: 'New Caledonia, New-Caledonia' }, { code: 'NZ', name: 'New Zealand, New-Zealand' }, { code: 'NI', name: 'Nicaragua' }, { code: 'NE', name: 'Niger' }, { code: 'NG', name: 'Nigeria' }, { code: 'NU', name: 'Niue' }, { code: 'NF', name: 'Norfolk Island' }, { code: 'MP', name: 'Northern Mariana Islands' }, { code: 'NO', name: 'Norway' }, { code: 'OM', name: 'Oman' }, { code: 'PK', name: 'Pakistan' }, { code: 'PW', name: 'Palau' }, { code: 'PS', name: 'Palestine, State of' }, { code: 'PA', name: 'Panama' }, { code: 'PG', name: 'Papua New Guinea, Papua-New-Guinea' }, { code: 'PY', name: 'Paraguay' }, { code: 'PE', name: 'Peru' }, { code: 'PH', name: 'Philippines' }, { code: 'PN', name: 'Pitcairn' }, { code: 'PL', name: 'Poland' }, { code: 'PT', name: 'Portugal' }, { code: 'PR', name: 'Puerto Rico, Puerto-Rico' }, { code: 'QA', name: 'Qatar' }, { code: 'RE', name: 'Réunion, R&eacute;union' }, { code: 'RO', name: 'Romania' }, { code: 'RU', name: 'Russian Federation' }, { code: 'RW', name: 'Rwanda' }, { code: 'BL', name: 'Saint Barthélemy, st-barth' }, { code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha' }, { code: 'KN', name: 'Saint Kitts and Nevis, Saint-Kitts-and-Nevis' }, { code: 'LC', name: 'Saint Lucia, Saint-Lucia' }, { code: 'MF', name: 'Saint Martin (French part), saint-martin' }, { code: 'PM', name: 'Saint Pierre and Miquelon, Saint-Pierre-Miquelon' }, { code: 'VC', name: 'Saint Vincent and the Grenadines, St-Vincent-Grenadines' }, { code: 'WS', name: 'Samoa' }, { code: 'SM', name: 'San Marino, San-Marino' }, { code: 'ST', name: 'Sao Tome and Principe, Sao-Tome-and-Principe' }, { code: 'SA', name: 'Saudi Arabia, Saudi-Arabia' }, { code: 'SN', name: 'Senegal' }, { code: 'RS', name: 'Serbia' }, { code: 'SC', name: 'Seychelles' }, { code: 'SL', name: 'Sierra Leone, Sierra-Leone' }, { code: 'SG', name: 'Singapore' }, { code: 'SX', name: 'Sint Maarten (Dutch part), Sint-Maarten' }, { code: 'SK', name: 'Slovakia' }, { code: 'SI', name: 'Slovenia' }, { code: 'SB', name: 'Solomon Islands' }, { code: 'SO', name: 'Somalia' }, { code: 'ZA', name: 'South Africa, South-Africa' }, { code: 'GS', name: 'South Georgia and the South Sandwich Islands' }, { code: 'SS', name: 'South Sudan, south-sudan' }, { code: 'ES', name: 'Spain' }, { code: 'LK', name: 'Sri Lanka, Sri-Lanka' }, { code: 'SD', name: 'Sudan' }, { code: 'SR', name: 'Suriname' }, { code: 'SJ', name: 'Svalbard and Jan Mayen' }, { code: 'SZ', name: 'Swaziland, eswatini' }, { code: 'SE', name: 'Sweden' }, { code: 'CH', name: 'Switzerland' }, { code: 'SY', name: 'Syrian Arab Republic' }, { code: 'TW', name: 'Taiwan, Province of China' }, { code: 'TJ', name: 'Tajikistan' }, { code: 'TZ', name: 'Tanzania, United Republic of' }, { code: 'TH', name: 'Thailand' }, { code: 'TL', name: 'Timor-Leste' }, { code: 'TG', name: 'Togo' }, { code: 'TK', name: 'Tokelau' }, { code: 'TO', name: 'Tonga' }, { code: 'TT', name: 'Trinidad and Tobago, Trinidad-and-Tobago' }, { code: 'TN', name: 'Tunisia' }, { code: 'TR', name: 'Turkey' }, { code: 'TM', name: 'Turkmenistan' }, { code: 'TC', name: 'Turks and Caicos Islands, turks-and-caicos' }, { code: 'TV', name: 'Tuvalu' }, { code: 'UG', name: 'Uganda' }, { code: 'UA', name: 'Ukraine' }, { code: 'AE', name: 'United Arab Emirates, UAE' }, { code: 'GB', name: 'United Kingdom, Diamond-Princess-, Channel-islands' }, { code: 'US', name: 'USA, north-america, south-america, united states of america' }, { code: 'UM', name: 'United States Minor Outlying Islands' }, { code: 'UY', name: 'Uruguay' }, { code: 'UZ', name: 'Uzbekistan' }, { code: 'VU', name: 'Vanuatu' }, { code: 'VE', name: 'Venezuela, Bolivarian Republic of' }, { code: 'VN', name: 'Vietnam' }, { code: 'VG', name: 'Virgin Islands, British, british-virgin-islands' }, { code: 'VI', name: 'Virgin Islands, U.S., us-virgin-islands' }, { code: 'WF', name: 'Wallis and Futuna' }, { code: 'EH', name: 'Western Sahara, western-sahara' }, { code: 'YE', name: 'Yemen' }, { code: 'ZM', name: 'Zambia' }, { code: 'ZW', name: 'Zimbabwe' }, { code: 'EU', name: 'Europe, Asia' }]; class Ga extends Ne {
  static get properties() {
    return {
      countries: { type: Array }, filter: { type: String }, loaded: { type: Number }, loading: { type: Boolean }, sorter: { type: String },
    };
  }

  constructor() { super(), this.countries = [], this.filter = '', this.sorter = '', this.loaded = 2, this.isLoading = !0; }

  connectedCallback() { super.connectedCallback(), this.getStatistics(); }

  updated() { const e = this.shadowRoot.getElementById('sentinel'); if (e) { new IntersectionObserver((e) => { e.forEach((e) => { e.intersectionRatio > 0 && (this.loaded += 10); }); }).observe(e); } }

  static get styles() { return Oe(k || (k = F`mil-pulse-spinner{--height:100px;--width:100px;--color1:var(--app-primary-color);--color2:gray}#main-content{display:flex;flex-flow:row wrap}#sentinel{width:1px;height:1px}@media only screen and (max-width:600px){.main-content{flex-flow:column wrap}}@media only screen and (min-width:600px){.main-content{flex-flow:column wrap}}@media only screen and (min-width:768px){.main-content{flex-flow:column wrap}}@media only screen and (min-width:992px){.main-content{flex-flow:row wrap}}@media only screen and (min-width:1200px){.main-content{flex-flow:row wrap}}`)); }

  render() { if (this.isLoading) return we(L || (L = F`<mil-pulse-spinner id="myMilPulseSpinner"></mil-pulse-spinner>`)); let e = this.countries.filter(({ country: e }) => e.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1); return this.sortCountries(e), e = e || this.countries, e = e.slice(0, this.loaded), we(P || (P = F` <covid-app-nav @updateSorter="${0}" @keyboardUp="${0}"></covid-app-nav> <div id="main-content"> ${0} </div> `), this.updateSorter, this.updateFilter, this._mapCountries(e)); }

  _mapCountries(e) { return we(V || (V = F`${0}`), e.map((e, t) => { const { code: i } = Wa.find(({ name: t }) => t.toLowerCase().indexOf(e.country.toLowerCase()) !== -1); return t === this.loaded - 1 ? we(O || (O = F`<div id="sentinel"></div>`)) : we(I || (I = F` <covid-stat-box .countryCode="${0}" .country="${0}" .cases="${0}" .newCases="${0}" .deaths="${0}" .recovered="${0}"><covid-stat-box></covid-stat-box></covid-stat-box>`), i.toLowerCase(), e.country.toUpperCase(), e.cases.total, e.cases.new, e.deaths.total, e.cases.recovered); })); }

  getStatistics() { console.log('Fetch COVID-19 Statistics'); }

  updateFilter({ detail: { filterValue: e } }) { this.filter = e; }

  updateSorter({ detail: e }) { this.sorter = e.sorterValue; }

  sortCountries(e) { e.sort((e, t) => (this.sorter === 'Cases' ? e.cases.total > t.cases.total ? -1 : 1 : this.sorter === 'Recovered' ? e.cases.recovered > t.cases.recovered ? -1 : 1 : this.sorter === 'Deaths' ? e.deaths.total > t.deaths.total ? -1 : 1 : void 0)); }
}customElements.define('covid-app-body-connected', class extends Ga {async getStatistics() { const e = await fetch('https://covid-193.p.rapidapi.com/statistics', { headers: { 'x-rapidapi-host': 'covid-193.p.rapidapi.com', 'x-rapidapi-key': '5af96d14dbmsh51fc4214ae8ceb1p1a3d43jsncd88f5576ae6' } }).catch((e) => { console.error(e.message); }); const t = await e.json().catch((e) => { console.error(e.message); }); this.countries = t.response, this.isLoading = !1; }}); customElements.define('main-app', class extends Ne {
  static get styles() { return Oe(N || (N = F`:host{--app-primary-color:black;--app-secondary-color:white;--recovered-color:#ACF39D;--deaths-color:#FF5D73;display:block}app-heaeder-layout{background-color:var(--app-secondary-color)}`)); }

  render() { return we(R || (R = F` <app-header-layout has-scrolling-region fullbleed> <covid-app-body-connected></covid-app-body-connected> </app-header-layout> `)); }
});

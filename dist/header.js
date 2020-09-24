(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@contentarchitect/editor')) :
	typeof define === 'function' && define.amd ? define(['@contentarchitect/editor'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Header = factory(global.ContentArchitect));
}(this, (function (editor) { 'use strict';

	//

	function contentToAnchorId (content) {
		const str = dasherize(latinise(content).replace(/[^\w\s-]/g, '').toLowerCase());
		if (str.charAt(0) === '-') str = str.substr(1);
		return str
	}

	// https://github.com/jprichardson/string.js/blob/52ce6c168055a58b29932764cee7253e3b631e5c/lib/string.js#L138
	function latinise(str) {
		const latin_map = {"Á":"A","Ă":"A","Ắ":"A","Ặ":"A","Ằ":"A","Ẳ":"A","Ẵ":"A","Ǎ":"A","Â":"A","Ấ":"A","Ậ":"A","Ầ":"A","Ẩ":"A","Ẫ":"A","Ä":"A","Ǟ":"A","Ȧ":"A","Ǡ":"A","Ạ":"A","Ȁ":"A","À":"A","Ả":"A","Ȃ":"A","Ā":"A","Ą":"A","Å":"A","Ǻ":"A","Ḁ":"A","Ⱥ":"A","Ã":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ḃ":"B","Ḅ":"B","Ɓ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ć":"C","Č":"C","Ç":"C","Ḉ":"C","Ĉ":"C","Ċ":"C","Ƈ":"C","Ȼ":"C","Ď":"D","Ḑ":"D","Ḓ":"D","Ḋ":"D","Ḍ":"D","Ɗ":"D","Ḏ":"D","ǲ":"D","ǅ":"D","Đ":"D","Ƌ":"D","Ǳ":"DZ","Ǆ":"DZ","É":"E","Ĕ":"E","Ě":"E","Ȩ":"E","Ḝ":"E","Ê":"E","Ế":"E","Ệ":"E","Ề":"E","Ể":"E","Ễ":"E","Ḙ":"E","Ë":"E","Ė":"E","Ẹ":"E","Ȅ":"E","È":"E","Ẻ":"E","Ȇ":"E","Ē":"E","Ḗ":"E","Ḕ":"E","Ę":"E","Ɇ":"E","Ẽ":"E","Ḛ":"E","Ꝫ":"ET","Ḟ":"F","Ƒ":"F","Ǵ":"G","Ğ":"G","Ǧ":"G","Ģ":"G","Ĝ":"G","Ġ":"G","Ɠ":"G","Ḡ":"G","Ǥ":"G","Ḫ":"H","Ȟ":"H","Ḩ":"H","Ĥ":"H","Ⱨ":"H","Ḧ":"H","Ḣ":"H","Ḥ":"H","Ħ":"H","Í":"I","Ĭ":"I","Ǐ":"I","Î":"I","Ï":"I","Ḯ":"I","İ":"I","Ị":"I","Ȉ":"I","Ì":"I","Ỉ":"I","Ȋ":"I","Ī":"I","Į":"I","Ɨ":"I","Ĩ":"I","Ḭ":"I","Ꝺ":"D","Ꝼ":"F","Ᵹ":"G","Ꞃ":"R","Ꞅ":"S","Ꞇ":"T","Ꝭ":"IS","Ĵ":"J","Ɉ":"J","Ḱ":"K","Ǩ":"K","Ķ":"K","Ⱪ":"K","Ꝃ":"K","Ḳ":"K","Ƙ":"K","Ḵ":"K","Ꝁ":"K","Ꝅ":"K","Ĺ":"L","Ƚ":"L","Ľ":"L","Ļ":"L","Ḽ":"L","Ḷ":"L","Ḹ":"L","Ⱡ":"L","Ꝉ":"L","Ḻ":"L","Ŀ":"L","Ɫ":"L","ǈ":"L","Ł":"L","Ǉ":"LJ","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ń":"N","Ň":"N","Ņ":"N","Ṋ":"N","Ṅ":"N","Ṇ":"N","Ǹ":"N","Ɲ":"N","Ṉ":"N","Ƞ":"N","ǋ":"N","Ñ":"N","Ǌ":"NJ","Ó":"O","Ŏ":"O","Ǒ":"O","Ô":"O","Ố":"O","Ộ":"O","Ồ":"O","Ổ":"O","Ỗ":"O","Ö":"O","Ȫ":"O","Ȯ":"O","Ȱ":"O","Ọ":"O","Ő":"O","Ȍ":"O","Ò":"O","Ỏ":"O","Ơ":"O","Ớ":"O","Ợ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ȏ":"O","Ꝋ":"O","Ꝍ":"O","Ō":"O","Ṓ":"O","Ṑ":"O","Ɵ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Õ":"O","Ṍ":"O","Ṏ":"O","Ȭ":"O","Ƣ":"OI","Ꝏ":"OO","Ɛ":"E","Ɔ":"O","Ȣ":"OU","Ṕ":"P","Ṗ":"P","Ꝓ":"P","Ƥ":"P","Ꝕ":"P","Ᵽ":"P","Ꝑ":"P","Ꝙ":"Q","Ꝗ":"Q","Ŕ":"R","Ř":"R","Ŗ":"R","Ṙ":"R","Ṛ":"R","Ṝ":"R","Ȑ":"R","Ȓ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꜿ":"C","Ǝ":"E","Ś":"S","Ṥ":"S","Š":"S","Ṧ":"S","Ş":"S","Ŝ":"S","Ș":"S","Ṡ":"S","Ṣ":"S","Ṩ":"S","ẞ":"SS","Ť":"T","Ţ":"T","Ṱ":"T","Ț":"T","Ⱦ":"T","Ṫ":"T","Ṭ":"T","Ƭ":"T","Ṯ":"T","Ʈ":"T","Ŧ":"T","Ɐ":"A","Ꞁ":"L","Ɯ":"M","Ʌ":"V","Ꜩ":"TZ","Ú":"U","Ŭ":"U","Ǔ":"U","Û":"U","Ṷ":"U","Ü":"U","Ǘ":"U","Ǚ":"U","Ǜ":"U","Ǖ":"U","Ṳ":"U","Ụ":"U","Ű":"U","Ȕ":"U","Ù":"U","Ủ":"U","Ư":"U","Ứ":"U","Ự":"U","Ừ":"U","Ử":"U","Ữ":"U","Ȗ":"U","Ū":"U","Ṻ":"U","Ų":"U","Ů":"U","Ũ":"U","Ṹ":"U","Ṵ":"U","Ꝟ":"V","Ṿ":"V","Ʋ":"V","Ṽ":"V","Ꝡ":"VY","Ẃ":"W","Ŵ":"W","Ẅ":"W","Ẇ":"W","Ẉ":"W","Ẁ":"W","Ⱳ":"W","Ẍ":"X","Ẋ":"X","Ý":"Y","Ŷ":"Y","Ÿ":"Y","Ẏ":"Y","Ỵ":"Y","Ỳ":"Y","Ƴ":"Y","Ỷ":"Y","Ỿ":"Y","Ȳ":"Y","Ɏ":"Y","Ỹ":"Y","Ź":"Z","Ž":"Z","Ẑ":"Z","Ⱬ":"Z","Ż":"Z","Ẓ":"Z","Ȥ":"Z","Ẕ":"Z","Ƶ":"Z","Ĳ":"IJ","Œ":"OE","ᴀ":"A","ᴁ":"AE","ʙ":"B","ᴃ":"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F","ɢ":"G","ʛ":"G","ʜ":"H","ɪ":"I","ʁ":"R","ᴊ":"J","ᴋ":"K","ʟ":"L","ᴌ":"L","ᴍ":"M","ɴ":"N","ᴏ":"O","ɶ":"OE","ᴐ":"O","ᴕ":"OU","ᴘ":"P","ʀ":"R","ᴎ":"N","ᴙ":"R","ꜱ":"S","ᴛ":"T","ⱻ":"E","ᴚ":"R","ᴜ":"U","ᴠ":"V","ᴡ":"W","ʏ":"Y","ᴢ":"Z","á":"a","ă":"a","ắ":"a","ặ":"a","ằ":"a","ẳ":"a","ẵ":"a","ǎ":"a","â":"a","ấ":"a","ậ":"a","ầ":"a","ẩ":"a","ẫ":"a","ä":"a","ǟ":"a","ȧ":"a","ǡ":"a","ạ":"a","ȁ":"a","à":"a","ả":"a","ȃ":"a","ā":"a","ą":"a","ᶏ":"a","ẚ":"a","å":"a","ǻ":"a","ḁ":"a","ⱥ":"a","ã":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ḃ":"b","ḅ":"b","ɓ":"b","ḇ":"b","ᵬ":"b","ᶀ":"b","ƀ":"b","ƃ":"b","ɵ":"o","ć":"c","č":"c","ç":"c","ḉ":"c","ĉ":"c","ɕ":"c","ċ":"c","ƈ":"c","ȼ":"c","ď":"d","ḑ":"d","ḓ":"d","ȡ":"d","ḋ":"d","ḍ":"d","ɗ":"d","ᶑ":"d","ḏ":"d","ᵭ":"d","ᶁ":"d","đ":"d","ɖ":"d","ƌ":"d","ı":"i","ȷ":"j","ɟ":"j","ʄ":"j","ǳ":"dz","ǆ":"dz","é":"e","ĕ":"e","ě":"e","ȩ":"e","ḝ":"e","ê":"e","ế":"e","ệ":"e","ề":"e","ể":"e","ễ":"e","ḙ":"e","ë":"e","ė":"e","ẹ":"e","ȅ":"e","è":"e","ẻ":"e","ȇ":"e","ē":"e","ḗ":"e","ḕ":"e","ⱸ":"e","ę":"e","ᶒ":"e","ɇ":"e","ẽ":"e","ḛ":"e","ꝫ":"et","ḟ":"f","ƒ":"f","ᵮ":"f","ᶂ":"f","ǵ":"g","ğ":"g","ǧ":"g","ģ":"g","ĝ":"g","ġ":"g","ɠ":"g","ḡ":"g","ᶃ":"g","ǥ":"g","ḫ":"h","ȟ":"h","ḩ":"h","ĥ":"h","ⱨ":"h","ḧ":"h","ḣ":"h","ḥ":"h","ɦ":"h","ẖ":"h","ħ":"h","ƕ":"hv","í":"i","ĭ":"i","ǐ":"i","î":"i","ï":"i","ḯ":"i","ị":"i","ȉ":"i","ì":"i","ỉ":"i","ȋ":"i","ī":"i","į":"i","ᶖ":"i","ɨ":"i","ĩ":"i","ḭ":"i","ꝺ":"d","ꝼ":"f","ᵹ":"g","ꞃ":"r","ꞅ":"s","ꞇ":"t","ꝭ":"is","ǰ":"j","ĵ":"j","ʝ":"j","ɉ":"j","ḱ":"k","ǩ":"k","ķ":"k","ⱪ":"k","ꝃ":"k","ḳ":"k","ƙ":"k","ḵ":"k","ᶄ":"k","ꝁ":"k","ꝅ":"k","ĺ":"l","ƚ":"l","ɬ":"l","ľ":"l","ļ":"l","ḽ":"l","ȴ":"l","ḷ":"l","ḹ":"l","ⱡ":"l","ꝉ":"l","ḻ":"l","ŀ":"l","ɫ":"l","ᶅ":"l","ɭ":"l","ł":"l","ǉ":"lj","ſ":"s","ẜ":"s","ẛ":"s","ẝ":"s","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ᵯ":"m","ᶆ":"m","ń":"n","ň":"n","ņ":"n","ṋ":"n","ȵ":"n","ṅ":"n","ṇ":"n","ǹ":"n","ɲ":"n","ṉ":"n","ƞ":"n","ᵰ":"n","ᶇ":"n","ɳ":"n","ñ":"n","ǌ":"nj","ó":"o","ŏ":"o","ǒ":"o","ô":"o","ố":"o","ộ":"o","ồ":"o","ổ":"o","ỗ":"o","ö":"o","ȫ":"o","ȯ":"o","ȱ":"o","ọ":"o","ő":"o","ȍ":"o","ò":"o","ỏ":"o","ơ":"o","ớ":"o","ợ":"o","ờ":"o","ở":"o","ỡ":"o","ȏ":"o","ꝋ":"o","ꝍ":"o","ⱺ":"o","ō":"o","ṓ":"o","ṑ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","õ":"o","ṍ":"o","ṏ":"o","ȭ":"o","ƣ":"oi","ꝏ":"oo","ɛ":"e","ᶓ":"e","ɔ":"o","ᶗ":"o","ȣ":"ou","ṕ":"p","ṗ":"p","ꝓ":"p","ƥ":"p","ᵱ":"p","ᶈ":"p","ꝕ":"p","ᵽ":"p","ꝑ":"p","ꝙ":"q","ʠ":"q","ɋ":"q","ꝗ":"q","ŕ":"r","ř":"r","ŗ":"r","ṙ":"r","ṛ":"r","ṝ":"r","ȑ":"r","ɾ":"r","ᵳ":"r","ȓ":"r","ṟ":"r","ɼ":"r","ᵲ":"r","ᶉ":"r","ɍ":"r","ɽ":"r","ↄ":"c","ꜿ":"c","ɘ":"e","ɿ":"r","ś":"s","ṥ":"s","š":"s","ṧ":"s","ş":"s","ŝ":"s","ș":"s","ṡ":"s","ṣ":"s","ṩ":"s","ʂ":"s","ᵴ":"s","ᶊ":"s","ȿ":"s","ɡ":"g","ß":"ss","ᴑ":"o","ᴓ":"o","ᴝ":"u","ť":"t","ţ":"t","ṱ":"t","ț":"t","ȶ":"t","ẗ":"t","ⱦ":"t","ṫ":"t","ṭ":"t","ƭ":"t","ṯ":"t","ᵵ":"t","ƫ":"t","ʈ":"t","ŧ":"t","ᵺ":"th","ɐ":"a","ᴂ":"ae","ǝ":"e","ᵷ":"g","ɥ":"h","ʮ":"h","ʯ":"h","ᴉ":"i","ʞ":"k","ꞁ":"l","ɯ":"m","ɰ":"m","ᴔ":"oe","ɹ":"r","ɻ":"r","ɺ":"r","ⱹ":"r","ʇ":"t","ʌ":"v","ʍ":"w","ʎ":"y","ꜩ":"tz","ú":"u","ŭ":"u","ǔ":"u","û":"u","ṷ":"u","ü":"u","ǘ":"u","ǚ":"u","ǜ":"u","ǖ":"u","ṳ":"u","ụ":"u","ű":"u","ȕ":"u","ù":"u","ủ":"u","ư":"u","ứ":"u","ự":"u","ừ":"u","ử":"u","ữ":"u","ȗ":"u","ū":"u","ṻ":"u","ų":"u","ᶙ":"u","ů":"u","ũ":"u","ṹ":"u","ṵ":"u","ᵫ":"ue","ꝸ":"um","ⱴ":"v","ꝟ":"v","ṿ":"v","ʋ":"v","ᶌ":"v","ⱱ":"v","ṽ":"v","ꝡ":"vy","ẃ":"w","ŵ":"w","ẅ":"w","ẇ":"w","ẉ":"w","ẁ":"w","ⱳ":"w","ẘ":"w","ẍ":"x","ẋ":"x","ᶍ":"x","ý":"y","ŷ":"y","ÿ":"y","ẏ":"y","ỵ":"y","ỳ":"y","ƴ":"y","ỷ":"y","ỿ":"y","ȳ":"y","ẙ":"y","ɏ":"y","ỹ":"y","ź":"z","ž":"z","ẑ":"z","ʑ":"z","ⱬ":"z","ż":"z","ẓ":"z","ȥ":"z","ẕ":"z","ᵶ":"z","ᶎ":"z","ʐ":"z","ƶ":"z","ɀ":"z","ﬀ":"ff","ﬃ":"ffi","ﬄ":"ffl","ﬁ":"fi","ﬂ":"fl","ĳ":"ij","œ":"oe","ﬆ":"st","ₐ":"a","ₑ":"e","ᵢ":"i","ⱼ":"j","ₒ":"o","ᵣ":"r","ᵤ":"u","ᵥ":"v","ₓ":"x"};
		const s = str.replace(/[^A-Za-z0-9\[\] ]/g, function(x) { return latin_map[x] || x; });
		return s;
	}

	// https://github.com/jprichardson/string.js/blob/52ce6c168055a58b29932764cee7253e3b631e5c/lib/string.js#L128
	function dasherize(str) {
		const s = str.trim().replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
		return s;
	}

	// https://ctrlq.org/code/19813-convert-html-to-text
	function getInnerText(str) {
		const temp = document.createElement("div");
	   	temp.innerHTML = str;
	   return temp.innerText;
	}

	var script = {
		props: ['value'],
		components: {
			'heading': {
				render: function (createElement) {
					return createElement(
						'h' + this.level,   // tag name
						{
							attrs: {
								id: this.anchorId
							},
						},
						this.$slots.default // array of children
					)
				},
				props: {
					level: {
						type: Number,
						required: true
					},
					anchorId: {
						type: String
					}
				}
			}
		},
		directives: {
			edit: editor.EditDirective
		},
		inject: ['slottedBlocks'],
		data () {
			return {
				content: this.value.content,
				textSettings: {
					placeholder: 'Type header...'
				}
			}
		},
		created () {
			const prevHeader = this.slottedBlocks
				.slice()
				.reverse()
				.find(block => block.name === "Header" && block != this.value);

			if (prevHeader) this.value.level = prevHeader.level;
		},
		watch: {
			content: {
				immediate: true,
				handler () {
					const anchorId = this._isMounted
						? contentToAnchorId(this.$refs.editable.innerText)
						: contentToAnchorId(getInnerText(this.content));

					Object.assign(this.value, {
						anchorId,
						content: this.content,
					});
				}
			}
		}
	};

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	    if (typeof shadowMode !== 'boolean') {
	        createInjectorSSR = createInjector;
	        createInjector = shadowMode;
	        shadowMode = false;
	    }
	    // Vue.extend constructor export interop.
	    const options = typeof script === 'function' ? script.options : script;
	    // render functions
	    if (template && template.render) {
	        options.render = template.render;
	        options.staticRenderFns = template.staticRenderFns;
	        options._compiled = true;
	        // functional template
	        if (isFunctionalTemplate) {
	            options.functional = true;
	        }
	    }
	    // scopedId
	    if (scopeId) {
	        options._scopeId = scopeId;
	    }
	    let hook;
	    if (moduleIdentifier) {
	        // server build
	        hook = function (context) {
	            // 2.3 injection
	            context =
	                context || // cached call
	                    (this.$vnode && this.$vnode.ssrContext) || // stateful
	                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
	            // 2.2 with runInNewContext: true
	            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	                context = __VUE_SSR_CONTEXT__;
	            }
	            // inject component styles
	            if (style) {
	                style.call(this, createInjectorSSR(context));
	            }
	            // register component module identifier for async chunk inference
	            if (context && context._registeredComponents) {
	                context._registeredComponents.add(moduleIdentifier);
	            }
	        };
	        // used by ssr in case component is cached and beforeCreate
	        // never gets called
	        options._ssrRegister = hook;
	    }
	    else if (style) {
	        hook = shadowMode
	            ? function (context) {
	                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
	            }
	            : function (context) {
	                style.call(this, createInjector(context));
	            };
	    }
	    if (hook) {
	        if (options.functional) {
	            // register for functional component in vue file
	            const originalRender = options.render;
	            options.render = function renderWithStyleInjection(h, context) {
	                hook.call(context);
	                return originalRender(h, context);
	            };
	        }
	        else {
	            // inject component registration as beforeCreate hook
	            const existing = options.beforeCreate;
	            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	    }
	    return script;
	}

	/* script */
	const __vue_script__ = script;

	/* template */
	var __vue_render__ = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "heading",
	    { attrs: { level: _vm.value.level, "anchor-id": _vm.value.anchorId } },
	    [
	      _vm.value.constructor.addAnchorLink
	        ? _c(
	            "a",
	            {
	              staticClass: "anchor",
	              attrs: { href: "#" + _vm.value.anchorId }
	            },
	            [
	              _c(
	                "svg",
	                {
	                  attrs: {
	                    "aria-hidden": "true",
	                    height: "16",
	                    version: "1.1",
	                    viewBox: "0 0 16 16",
	                    width: "16"
	                  }
	                },
	                [
	                  _c("path", {
	                    attrs: {
	                      "fill-rule": "evenodd",
	                      d:
	                        "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
	                    }
	                  })
	                ]
	              )
	            ]
	          )
	        : _vm._e(),
	      _vm._v(" "),
	      _c("div", {
	        directives: [
	          {
	            name: "edit",
	            rawName: "v-edit:[textSettings]",
	            value: _vm.content,
	            expression: "content",
	            arg: _vm.textSettings
	          }
	        ],
	        ref: "editable"
	      })
	    ]
	  )
	};
	var __vue_staticRenderFns__ = [];
	__vue_render__._withStripped = true;

	  /* style */
	  const __vue_inject_styles__ = undefined;
	  /* scoped */
	  const __vue_scope_id__ = undefined;
	  /* module identifier */
	  const __vue_module_identifier__ = undefined;
	  /* functional template */
	  const __vue_is_functional_template__ = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__ = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    false,
	    undefined,
	    undefined,
	    undefined
	  );

	//

	var script$1 = {
	    components: { CssGrid: editor.CssGrid, CssGridItem: editor.CssGridItem, RadioButtons: editor.RadioButtons, RadioButton: editor.RadioButton },
	    props: ['value'],
	    computed: {
	        options () {
	            return this.value.constructor.settings.levels.map(level => {
	                return {
	                    label: 'H' + level,
	                    value: level
	                }
	            });
	        }
	    },
	    methods: {
	        handleVal (value) {
	            this.value.level = value;
	        }
	    }
	};

	const isOldIE = typeof navigator !== 'undefined' &&
	    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
	function createInjector(context) {
	    return (id, style) => addStyle(id, style);
	}
	let HEAD;
	const styles = {};
	function addStyle(id, css) {
	    const group = isOldIE ? css.media || 'default' : id;
	    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
	    if (!style.ids.has(id)) {
	        style.ids.add(id);
	        let code = css.source;
	        if (css.map) {
	            // https://developer.chrome.com/devtools/docs/javascript-debugging
	            // this makes source maps inside style tags work properly in Chrome
	            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
	            // http://stackoverflow.com/a/26603875
	            code +=
	                '\n/*# sourceMappingURL=data:application/json;base64,' +
	                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
	                    ' */';
	        }
	        if (!style.element) {
	            style.element = document.createElement('style');
	            style.element.type = 'text/css';
	            if (css.media)
	                style.element.setAttribute('media', css.media);
	            if (HEAD === undefined) {
	                HEAD = document.head || document.getElementsByTagName('head')[0];
	            }
	            HEAD.appendChild(style.element);
	        }
	        if ('styleSheet' in style.element) {
	            style.styles.push(code);
	            style.element.styleSheet.cssText = style.styles
	                .filter(Boolean)
	                .join('\n');
	        }
	        else {
	            const index = style.ids.size - 1;
	            const textNode = document.createTextNode(code);
	            const nodes = style.element.childNodes;
	            if (nodes[index])
	                style.element.removeChild(nodes[index]);
	            if (nodes.length)
	                style.element.insertBefore(textNode, nodes[index]);
	            else
	                style.element.appendChild(textNode);
	        }
	    }
	}

	/* script */
	const __vue_script__$1 = script$1;

	/* template */
	var __vue_render__$1 = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c(
	    "css-grid",
	    { attrs: { columns: ["1fr", "2fr"], gap: "8px" } },
	    [
	      _c("css-grid-item", [_vm._v("Level")]),
	      _vm._v(" "),
	      _c(
	        "css-grid-item",
	        [
	          _c(
	            "radio-buttons",
	            {
	              attrs: { inline: "" },
	              model: {
	                value: _vm.value.level,
	                callback: function($$v) {
	                  _vm.$set(_vm.value, "level", $$v);
	                },
	                expression: "value.level"
	              }
	            },
	            _vm._l(_vm.options, function(option) {
	              return _c(
	                "radio-button",
	                { key: option.value, attrs: { value: option.value } },
	                [
	                  _vm._v(
	                    "\n                " +
	                      _vm._s(option.label) +
	                      "\n            "
	                  )
	                ]
	              )
	            }),
	            1
	          )
	        ],
	        1
	      )
	    ],
	    1
	  )
	};
	var __vue_staticRenderFns__$1 = [];
	__vue_render__$1._withStripped = true;

	  /* style */
	  const __vue_inject_styles__$1 = function (inject) {
	    if (!inject) return
	    inject("data-v-b759a6ee_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"Settings.vue"}, media: undefined });

	  };
	  /* scoped */
	  const __vue_scope_id__$1 = undefined;
	  /* module identifier */
	  const __vue_module_identifier__$1 = undefined;
	  /* functional template */
	  const __vue_is_functional_template__$1 = false;
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
	    __vue_inject_styles__$1,
	    __vue_script__$1,
	    __vue_scope_id__$1,
	    __vue_is_functional_template__$1,
	    __vue_module_identifier__$1,
	    false,
	    createInjector,
	    undefined,
	    undefined
	  );

	var icon = { render: function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","height":"24","width":"24"}},[_c('path',{attrs:{"d":"M5 4v3h5.5v12h3V7H19V4z"}}),_c('path',{attrs:{"d":"M0 0h24v24H0V0z","fill":"none"}})]) } };

	class Header extends editor.Block {
		static get viewComponent () {
			return __vue_component__;
		}

		static get settingsComponent () {
			return __vue_component__$1;
		}

		static get icon () {
			return icon;
		}

		static defaultData () {
			return {
				level: 2,
				content: "Header",
				achorId: "header"
			}
		}

		static defaultSettings = {
			levels: [1,2,3],
			addAnchorLink: true,
			anchorSvg: `<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16">
						<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
						</path>
					</svg>`
		}

		toHTML () {
			let anchorLink;

			if (this.constructor.addAnchorLink) {
				anchorLink = `<a class="anchor" href="#${this.anchorId}">${this.constructor.anchorSvg}</a>`;
			}

			return `<h${this.level} id="${this.anchorId}">
			${anchorLink || ''}${this.content}
		</h${this.level}>`
		}

		static serializeFromHTML (blockDom) {
			let content, level;

			const header = blockDom.firstElementChild;
			content = header.innerHTML;
			
			level = Number(/\d/.exec(header.tagName)[0]);
			
			return {
				content,
				level
			}
		}
	}

	return Header;

})));

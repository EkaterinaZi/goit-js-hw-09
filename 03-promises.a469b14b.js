function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=o);var u=o("eWCmQ");const l=document.querySelector(".form");document.querySelector('[name="amount"]'),document.querySelector('[name="delay"]'),document.querySelector('[name="step"]');function i(e,t){const r=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}l.addEventListener("submit",(function(t){t.preventDefault();const r=t.currentTarget.elements,n=Number(r.step.value),o=Number(r.delay.value),l=Number(r.amount.value);let a=0,c=0;for(let t=0;t<l;t++)c+=1,a=o+n*t,i(c,a).then((t=>e(u).Notify.success(t))).catch((t=>e(u).Notify.failure(t)));t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.a469b14b.js.map

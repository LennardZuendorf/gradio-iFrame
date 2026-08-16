const {
  SvelteComponent: pi,
  append_hydration: hi,
  attr: te,
  binding_callbacks: fi,
  children: Ht,
  claim_element: Gt,
  detach: ut,
  element: jt,
  init: mi,
  insert_hydration: gi,
  listen: bi,
  noop: Zt,
  safe_not_equal: vi,
  toggle_class: He
} = window.__gradio__svelte__internal, { createEventDispatcher: Di, onMount: yi, onDestroy: $i } = window.__gradio__svelte__internal;
function wi(r) {
  let t, e, n, i, o, a;
  return {
    c() {
      t = jt("div"), e = jt("iframe"), this.h();
    },
    l(l) {
      t = Gt(l, "DIV", { class: !0 });
      var s = Ht(t);
      e = Gt(s, "IFRAME", {
        title: !0,
        width: !0,
        srcdoc: !0,
        height: !0,
        allow: !0,
        sandbox: !0
      }), Ht(e).forEach(ut), s.forEach(ut), this.h();
    },
    h() {
      te(e, "title", "iframe component"), te(
        e,
        "width",
        /*width*/
        r[4]
      ), te(
        e,
        "srcdoc",
        /*srcdocValue*/
        r[7]
      ), te(
        e,
        "height",
        /*height*/
        r[3]
      ), te(e, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"), e.allowFullscreen = !0, te(e, "sandbox", n = /*sandbox*/
      r[5] ?? void 0), te(t, "class", i = "prose " + /*elem_classes*/
      r[0].join(" ") + " svelte-2qygph"), He(
        t,
        "min",
        /*min_height*/
        r[2]
      ), He(t, "hide", !/*visible*/
      r[1]);
    },
    m(l, s) {
      gi(l, t, s), hi(t, e), r[10](e), o || (a = bi(
        e,
        "load",
        /*onLoad*/
        r[8]
      ), o = !0);
    },
    p(l, [s]) {
      s & /*width*/
      16 && te(
        e,
        "width",
        /*width*/
        l[4]
      ), s & /*srcdocValue*/
      128 && te(
        e,
        "srcdoc",
        /*srcdocValue*/
        l[7]
      ), s & /*height*/
      8 && te(
        e,
        "height",
        /*height*/
        l[3]
      ), s & /*sandbox*/
      32 && n !== (n = /*sandbox*/
      l[5] ?? void 0) && te(e, "sandbox", n), s & /*elem_classes*/
      1 && i !== (i = "prose " + /*elem_classes*/
      l[0].join(" ") + " svelte-2qygph") && te(t, "class", i), s & /*elem_classes, min_height*/
      5 && He(
        t,
        "min",
        /*min_height*/
        l[2]
      ), s & /*elem_classes, visible*/
      3 && He(t, "hide", !/*visible*/
      l[1]);
    },
    i: Zt,
    o: Zt,
    d(l) {
      l && ut(t), r[10](null), o = !1, a();
    }
  };
}
function Fi(r, t, e) {
  let n, { elem_classes: i = [] } = t, { value: o } = t, { visible: a = !0 } = t, { min_height: l = !1 } = t, { height: s = "100%" } = t, { width: c = "100%" } = t, { sandbox: d = "allow-scripts" } = t;
  const u = Di();
  let p;
  const m = `<script>(function(){
		var ro=new ResizeObserver(function(){
			window.parent.postMessage({type:'gradio-iframe-h',h:document.documentElement.scrollHeight},'*');
		});
		ro.observe(document.documentElement);
		window.addEventListener('load',function(){
			window.parent.postMessage({type:'gradio-iframe-h',h:document.documentElement.scrollHeight},'*');
		});
	})()<\/script>`, g = () => {
    if (s === "100%")
      try {
        const $ = p.contentDocument || p.contentWindow?.document;
        $ && e(6, p.style.height = `${$.documentElement.scrollHeight}px`, p);
      } catch {
      }
  };
  let v;
  yi(() => {
    v = ($) => {
      $.source === p?.contentWindow && $.data?.type === "gradio-iframe-h" && s === "100%" && e(6, p.style.height = $.data.h + "px", p);
    }, window.addEventListener("message", v);
  }), $i(() => {
    v && window.removeEventListener("message", v);
  });
  function y($) {
    fi[$ ? "unshift" : "push"](() => {
      p = $, e(6, p);
    });
  }
  return r.$$set = ($) => {
    "elem_classes" in $ && e(0, i = $.elem_classes), "value" in $ && e(9, o = $.value), "visible" in $ && e(1, a = $.visible), "min_height" in $ && e(2, l = $.min_height), "height" in $ && e(3, s = $.height), "width" in $ && e(4, c = $.width), "sandbox" in $ && e(5, d = $.sandbox);
  }, r.$$.update = () => {
    r.$$.dirty & /*height, value*/
    520 && e(7, n = s === "100%" ? m + o : o), r.$$.dirty & /*value*/
    512 && u("change");
  }, [
    i,
    a,
    l,
    s,
    c,
    d,
    p,
    n,
    g,
    o,
    y
  ];
}
class Ei extends pi {
  constructor(t) {
    super(), mi(this, t, Fi, wi, vi, {
      elem_classes: 0,
      value: 9,
      visible: 1,
      min_height: 2,
      height: 3,
      width: 4,
      sandbox: 5
    });
  }
}
function Be(r) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], e = 0;
  for (; r > 1e3 && e < t.length - 1; )
    r /= 1e3, e++;
  let n = t[e];
  return (Number.isInteger(r) ? r : r.toFixed(1)) + n;
}
function Ke() {
}
const On = typeof window < "u";
let Vt = On ? () => window.performance.now() : () => Date.now(), Nn = On ? (r) => requestAnimationFrame(r) : Ke;
const Ie = /* @__PURE__ */ new Set();
function zn(r) {
  Ie.forEach((t) => {
    t.c(r) || (Ie.delete(t), t.f());
  }), Ie.size !== 0 && Nn(zn);
}
function ki(r) {
  let t;
  return Ie.size === 0 && Nn(zn), { promise: new Promise((e) => {
    Ie.add(t = { c: r, f: e });
  }), abort() {
    Ie.delete(t);
  } };
}
const Te = [];
function Ci(r, t = Ke) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function i(a) {
    if (s = a, ((l = r) != l ? s == s : l !== s || l && typeof l == "object" || typeof l == "function") && (r = a, e)) {
      const c = !Te.length;
      for (const d of n) d[1](), Te.push(d, r);
      if (c) {
        for (let d = 0; d < Te.length; d += 2) Te[d][0](Te[d + 1]);
        Te.length = 0;
      }
    }
    var l, s;
  }
  function o(a) {
    i(a(r));
  }
  return { set: i, update: o, subscribe: function(a, l = Ke) {
    const s = [a, l];
    return n.add(s), n.size === 1 && (e = t(i, o) || Ke), a(r), () => {
      n.delete(s), n.size === 0 && e && (e(), e = null);
    };
  } };
}
function Yt(r) {
  return Object.prototype.toString.call(r) === "[object Date]";
}
function bt(r, t, e, n) {
  if (typeof e == "number" || Yt(e)) {
    const i = n - e, o = (e - t) / (r.dt || 1 / 60), a = (o + (r.opts.stiffness * i - r.opts.damping * o) * r.inv_mass) * r.dt;
    return Math.abs(a) < r.opts.precision && Math.abs(i) < r.opts.precision ? n : (r.settled = !1, Yt(e) ? new Date(e.getTime() + a) : e + a);
  }
  if (Array.isArray(e)) return e.map((i, o) => bt(r, t[o], e[o], n[o]));
  if (typeof e == "object") {
    const i = {};
    for (const o in e) i[o] = bt(r, t[o], e[o], n[o]);
    return i;
  }
  throw new Error(`Cannot spring ${typeof e} values`);
}
function Xt(r, t = {}) {
  const e = Ci(r), { stiffness: n = 0.15, damping: i = 0.8, precision: o = 0.01 } = t;
  let a, l, s, c = r, d = r, u = 1, p = 0, m = !1;
  function g(y, $ = {}) {
    d = y;
    const h = s = {};
    return r == null || $.hard || v.stiffness >= 1 && v.damping >= 1 ? (m = !0, a = Vt(), c = y, e.set(r = d), Promise.resolve()) : ($.soft && (p = 1 / (60 * ($.soft === !0 ? 0.5 : +$.soft)), u = 0), l || (a = Vt(), m = !1, l = ki((_) => {
      if (m) return m = !1, l = null, !1;
      u = Math.min(u + p, 1);
      const f = { inv_mass: u, opts: v, settled: !0, dt: 60 * (_ - a) / 1e3 }, b = bt(f, c, r, d);
      return a = _, c = r, e.set(r = b), f.settled && (l = null), !f.settled;
    })), new Promise((_) => {
      l.promise.then(() => {
        h === s && _();
      });
    }));
  }
  const v = { set: g, update: (y, $) => g(y(d, r), $), subscribe: e.subscribe, stiffness: n, damping: i, precision: o };
  return v;
}
const {
  SvelteComponent: Ai,
  append_hydration: de,
  attr: x,
  children: ne,
  claim_element: Si,
  claim_svg_element: _e,
  component_subscribe: Wt,
  detach: W,
  element: Ti,
  init: xi,
  insert_hydration: Bi,
  noop: Kt,
  safe_not_equal: Ii,
  set_style: Ge,
  svg_element: pe,
  toggle_class: Qt
} = window.__gradio__svelte__internal, { onMount: Ri } = window.__gradio__svelte__internal;
function qi(r) {
  let t, e, n, i, o, a, l, s, c, d, u, p;
  return {
    c() {
      t = Ti("div"), e = pe("svg"), n = pe("g"), i = pe("path"), o = pe("path"), a = pe("path"), l = pe("path"), s = pe("g"), c = pe("path"), d = pe("path"), u = pe("path"), p = pe("path"), this.h();
    },
    l(m) {
      t = Si(m, "DIV", { class: !0 });
      var g = ne(t);
      e = _e(g, "svg", {
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0
      });
      var v = ne(e);
      n = _e(v, "g", { style: !0 });
      var y = ne(n);
      i = _e(y, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), ne(i).forEach(W), o = _e(y, "path", { d: !0, fill: !0, class: !0 }), ne(o).forEach(W), a = _e(y, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), ne(a).forEach(W), l = _e(y, "path", { d: !0, fill: !0, class: !0 }), ne(l).forEach(W), y.forEach(W), s = _e(v, "g", { style: !0 });
      var $ = ne(s);
      c = _e($, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), ne(c).forEach(W), d = _e($, "path", { d: !0, fill: !0, class: !0 }), ne(d).forEach(W), u = _e($, "path", {
        d: !0,
        fill: !0,
        "fill-opacity": !0,
        class: !0
      }), ne(u).forEach(W), p = _e($, "path", { d: !0, fill: !0, class: !0 }), ne(p).forEach(W), $.forEach(W), v.forEach(W), g.forEach(W), this.h();
    },
    h() {
      x(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), x(i, "fill", "#FF7C00"), x(i, "fill-opacity", "0.4"), x(i, "class", "svelte-43sxxs"), x(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), x(o, "fill", "#FF7C00"), x(o, "class", "svelte-43sxxs"), x(a, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), x(a, "fill", "#FF7C00"), x(a, "fill-opacity", "0.4"), x(a, "class", "svelte-43sxxs"), x(l, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), x(l, "fill", "#FF7C00"), x(l, "class", "svelte-43sxxs"), Ge(n, "transform", "translate(" + /*$top*/
      r[1][0] + "px, " + /*$top*/
      r[1][1] + "px)"), x(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), x(c, "fill", "#FF7C00"), x(c, "fill-opacity", "0.4"), x(c, "class", "svelte-43sxxs"), x(d, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), x(d, "fill", "#FF7C00"), x(d, "class", "svelte-43sxxs"), x(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), x(u, "fill", "#FF7C00"), x(u, "fill-opacity", "0.4"), x(u, "class", "svelte-43sxxs"), x(p, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), x(p, "fill", "#FF7C00"), x(p, "class", "svelte-43sxxs"), Ge(s, "transform", "translate(" + /*$bottom*/
      r[2][0] + "px, " + /*$bottom*/
      r[2][1] + "px)"), x(e, "viewBox", "-1200 -1200 3000 3000"), x(e, "fill", "none"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "class", "svelte-43sxxs"), x(t, "class", "svelte-43sxxs"), Qt(
        t,
        "margin",
        /*margin*/
        r[0]
      );
    },
    m(m, g) {
      Bi(m, t, g), de(t, e), de(e, n), de(n, i), de(n, o), de(n, a), de(n, l), de(e, s), de(s, c), de(s, d), de(s, u), de(s, p);
    },
    p(m, [g]) {
      g & /*$top*/
      2 && Ge(n, "transform", "translate(" + /*$top*/
      m[1][0] + "px, " + /*$top*/
      m[1][1] + "px)"), g & /*$bottom*/
      4 && Ge(s, "transform", "translate(" + /*$bottom*/
      m[2][0] + "px, " + /*$bottom*/
      m[2][1] + "px)"), g & /*margin*/
      1 && Qt(
        t,
        "margin",
        /*margin*/
        m[0]
      );
    },
    i: Kt,
    o: Kt,
    d(m) {
      m && W(t);
    }
  };
}
function Li(r, t, e) {
  let n, i, { margin: o = !0 } = t;
  const a = Xt([0, 0]);
  Wt(r, a, (p) => e(1, n = p));
  const l = Xt([0, 0]);
  Wt(r, l, (p) => e(2, i = p));
  let s;
  async function c() {
    await Promise.all([a.set([125, 140]), l.set([-125, -140])]), await Promise.all([a.set([-125, 140]), l.set([125, -140])]), await Promise.all([a.set([-125, 0]), l.set([125, -0])]), await Promise.all([a.set([125, 0]), l.set([-125, 0])]);
  }
  async function d() {
    await c(), s || d();
  }
  async function u() {
    await Promise.all([a.set([125, 0]), l.set([-125, 0])]), d();
  }
  return Ri(() => (u(), () => s = !0)), r.$$set = (p) => {
    "margin" in p && e(0, o = p.margin);
  }, [o, n, i, a, l];
}
class Oi extends Ai {
  constructor(t) {
    super(), xi(this, t, Li, qi, Ii, { margin: 0 });
  }
}
const {
  SvelteComponent: Ni,
  append_hydration: vt,
  assign: zi,
  attr: H,
  binding_callbacks: Pi,
  children: Le,
  claim_element: Pn,
  claim_space: Mn,
  claim_svg_element: ct,
  create_slot: Mi,
  detach: ve,
  element: Un,
  empty: Jt,
  get_all_dirty_from_scope: Ui,
  get_slot_changes: Hi,
  get_spread_update: Gi,
  init: ji,
  insert_hydration: ze,
  listen: Zi,
  noop: Vi,
  safe_not_equal: Yi,
  set_dynamic_element_data: en,
  set_style: B,
  space: Hn,
  svg_element: dt,
  toggle_class: P,
  transition_in: Gn,
  transition_out: jn,
  update_slot_base: Xi
} = window.__gradio__svelte__internal;
function tn(r) {
  let t, e, n, i, o;
  return {
    c() {
      t = dt("svg"), e = dt("line"), n = dt("line"), this.h();
    },
    l(a) {
      t = ct(a, "svg", { class: !0, xmlns: !0, viewBox: !0 });
      var l = Le(t);
      e = ct(l, "line", {
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        stroke: !0,
        "stroke-width": !0
      }), Le(e).forEach(ve), n = ct(l, "line", {
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        stroke: !0,
        "stroke-width": !0
      }), Le(n).forEach(ve), l.forEach(ve), this.h();
    },
    h() {
      H(e, "x1", "1"), H(e, "y1", "9"), H(e, "x2", "9"), H(e, "y2", "1"), H(e, "stroke", "gray"), H(e, "stroke-width", "0.5"), H(n, "x1", "5"), H(n, "y1", "9"), H(n, "x2", "9"), H(n, "y2", "5"), H(n, "stroke", "gray"), H(n, "stroke-width", "0.5"), H(t, "class", "resize-handle svelte-239wnu"), H(t, "xmlns", "http://www.w3.org/2000/svg"), H(t, "viewBox", "0 0 10 10");
    },
    m(a, l) {
      ze(a, t, l), vt(t, e), vt(t, n), i || (o = Zi(
        t,
        "mousedown",
        /*resize*/
        r[27]
      ), i = !0);
    },
    p: Vi,
    d(a) {
      a && ve(t), i = !1, o();
    }
  };
}
function Wi(r) {
  let t, e, n, i, o;
  const a = (
    /*#slots*/
    r[31].default
  ), l = Mi(
    a,
    r,
    /*$$scope*/
    r[30],
    null
  );
  let s = (
    /*resizable*/
    r[19] && tn(r)
  ), c = [
    { "data-testid": (
      /*test_id*/
      r[11]
    ) },
    { id: (
      /*elem_id*/
      r[6]
    ) },
    {
      class: n = "block " + /*elem_classes*/
      (r[7]?.join(" ") || "") + " svelte-239wnu"
    },
    {
      dir: i = /*rtl*/
      r[20] ? "rtl" : "ltr"
    }
  ], d = {};
  for (let u = 0; u < c.length; u += 1)
    d = zi(d, c[u]);
  return {
    c() {
      t = Un(
        /*tag*/
        r[25]
      ), l && l.c(), e = Hn(), s && s.c(), this.h();
    },
    l(u) {
      t = Pn(
        u,
        /*tag*/
        (r[25] || "null").toUpperCase(),
        {
          "data-testid": !0,
          id: !0,
          class: !0,
          dir: !0
        }
      );
      var p = Le(t);
      l && l.l(p), e = Mn(p), s && s.l(p), p.forEach(ve), this.h();
    },
    h() {
      en(
        /*tag*/
        r[25]
      )(t, d), P(
        t,
        "hidden",
        /*visible*/
        r[14] === !1 || /*visible*/
        r[14] === "hidden"
      ), P(
        t,
        "padded",
        /*padding*/
        r[10]
      ), P(
        t,
        "flex",
        /*flex*/
        r[1]
      ), P(
        t,
        "border_focus",
        /*border_mode*/
        r[9] === "focus"
      ), P(
        t,
        "border_contrast",
        /*border_mode*/
        r[9] === "contrast"
      ), P(t, "hide-container", !/*explicit_call*/
      r[12] && !/*container*/
      r[13]), P(
        t,
        "fullscreen",
        /*fullscreen*/
        r[0]
      ), P(
        t,
        "animating",
        /*fullscreen*/
        r[0] && /*preexpansionBoundingRect*/
        r[24] !== null
      ), P(
        t,
        "auto-margin",
        /*scale*/
        r[17] === null
      ), B(
        t,
        "height",
        /*fullscreen*/
        r[0] ? void 0 : (
          /*get_dimension*/
          r[26](
            /*height*/
            r[2]
          )
        )
      ), B(
        t,
        "min-height",
        /*fullscreen*/
        r[0] ? void 0 : (
          /*get_dimension*/
          r[26](
            /*min_height*/
            r[3]
          )
        )
      ), B(
        t,
        "max-height",
        /*fullscreen*/
        r[0] ? void 0 : (
          /*get_dimension*/
          r[26](
            /*max_height*/
            r[4]
          )
        )
      ), B(
        t,
        "--start-top",
        /*preexpansionBoundingRect*/
        r[24] ? `${/*preexpansionBoundingRect*/
        r[24].top}px` : "0px"
      ), B(
        t,
        "--start-left",
        /*preexpansionBoundingRect*/
        r[24] ? `${/*preexpansionBoundingRect*/
        r[24].left}px` : "0px"
      ), B(
        t,
        "--start-width",
        /*preexpansionBoundingRect*/
        r[24] ? `${/*preexpansionBoundingRect*/
        r[24].width}px` : "0px"
      ), B(
        t,
        "--start-height",
        /*preexpansionBoundingRect*/
        r[24] ? `${/*preexpansionBoundingRect*/
        r[24].height}px` : "0px"
      ), B(
        t,
        "width",
        /*fullscreen*/
        r[0] ? void 0 : typeof /*width*/
        r[5] == "number" ? `calc(min(${/*width*/
        r[5]}px, 100%))` : (
          /*get_dimension*/
          r[26](
            /*width*/
            r[5]
          )
        )
      ), B(
        t,
        "border-style",
        /*variant*/
        r[8]
      ), B(
        t,
        "overflow",
        /*allow_overflow*/
        r[15] ? (
          /*overflow_behavior*/
          r[16]
        ) : "hidden"
      ), B(
        t,
        "flex-grow",
        /*scale*/
        r[17]
      ), B(t, "min-width", `calc(min(${/*min_width*/
      r[18]}px, 100%))`), B(t, "border-width", "var(--block-border-width)");
    },
    m(u, p) {
      ze(u, t, p), l && l.m(t, null), vt(t, e), s && s.m(t, null), r[32](t), o = !0;
    },
    p(u, p) {
      l && l.p && (!o || p[0] & /*$$scope*/
      1073741824) && Xi(
        l,
        a,
        u,
        /*$$scope*/
        u[30],
        o ? Hi(
          a,
          /*$$scope*/
          u[30],
          p,
          null
        ) : Ui(
          /*$$scope*/
          u[30]
        ),
        null
      ), /*resizable*/
      u[19] ? s ? s.p(u, p) : (s = tn(u), s.c(), s.m(t, null)) : s && (s.d(1), s = null), en(
        /*tag*/
        u[25]
      )(t, d = Gi(c, [
        (!o || p[0] & /*test_id*/
        2048) && { "data-testid": (
          /*test_id*/
          u[11]
        ) },
        (!o || p[0] & /*elem_id*/
        64) && { id: (
          /*elem_id*/
          u[6]
        ) },
        (!o || p[0] & /*elem_classes*/
        128 && n !== (n = "block " + /*elem_classes*/
        (u[7]?.join(" ") || "") + " svelte-239wnu")) && { class: n },
        (!o || p[0] & /*rtl*/
        1048576 && i !== (i = /*rtl*/
        u[20] ? "rtl" : "ltr")) && { dir: i }
      ])), P(
        t,
        "hidden",
        /*visible*/
        u[14] === !1 || /*visible*/
        u[14] === "hidden"
      ), P(
        t,
        "padded",
        /*padding*/
        u[10]
      ), P(
        t,
        "flex",
        /*flex*/
        u[1]
      ), P(
        t,
        "border_focus",
        /*border_mode*/
        u[9] === "focus"
      ), P(
        t,
        "border_contrast",
        /*border_mode*/
        u[9] === "contrast"
      ), P(t, "hide-container", !/*explicit_call*/
      u[12] && !/*container*/
      u[13]), P(
        t,
        "fullscreen",
        /*fullscreen*/
        u[0]
      ), P(
        t,
        "animating",
        /*fullscreen*/
        u[0] && /*preexpansionBoundingRect*/
        u[24] !== null
      ), P(
        t,
        "auto-margin",
        /*scale*/
        u[17] === null
      ), p[0] & /*fullscreen, height*/
      5 && B(
        t,
        "height",
        /*fullscreen*/
        u[0] ? void 0 : (
          /*get_dimension*/
          u[26](
            /*height*/
            u[2]
          )
        )
      ), p[0] & /*fullscreen, min_height*/
      9 && B(
        t,
        "min-height",
        /*fullscreen*/
        u[0] ? void 0 : (
          /*get_dimension*/
          u[26](
            /*min_height*/
            u[3]
          )
        )
      ), p[0] & /*fullscreen, max_height*/
      17 && B(
        t,
        "max-height",
        /*fullscreen*/
        u[0] ? void 0 : (
          /*get_dimension*/
          u[26](
            /*max_height*/
            u[4]
          )
        )
      ), p[0] & /*preexpansionBoundingRect*/
      16777216 && B(
        t,
        "--start-top",
        /*preexpansionBoundingRect*/
        u[24] ? `${/*preexpansionBoundingRect*/
        u[24].top}px` : "0px"
      ), p[0] & /*preexpansionBoundingRect*/
      16777216 && B(
        t,
        "--start-left",
        /*preexpansionBoundingRect*/
        u[24] ? `${/*preexpansionBoundingRect*/
        u[24].left}px` : "0px"
      ), p[0] & /*preexpansionBoundingRect*/
      16777216 && B(
        t,
        "--start-width",
        /*preexpansionBoundingRect*/
        u[24] ? `${/*preexpansionBoundingRect*/
        u[24].width}px` : "0px"
      ), p[0] & /*preexpansionBoundingRect*/
      16777216 && B(
        t,
        "--start-height",
        /*preexpansionBoundingRect*/
        u[24] ? `${/*preexpansionBoundingRect*/
        u[24].height}px` : "0px"
      ), p[0] & /*fullscreen, width*/
      33 && B(
        t,
        "width",
        /*fullscreen*/
        u[0] ? void 0 : typeof /*width*/
        u[5] == "number" ? `calc(min(${/*width*/
        u[5]}px, 100%))` : (
          /*get_dimension*/
          u[26](
            /*width*/
            u[5]
          )
        )
      ), p[0] & /*variant*/
      256 && B(
        t,
        "border-style",
        /*variant*/
        u[8]
      ), p[0] & /*allow_overflow, overflow_behavior*/
      98304 && B(
        t,
        "overflow",
        /*allow_overflow*/
        u[15] ? (
          /*overflow_behavior*/
          u[16]
        ) : "hidden"
      ), p[0] & /*scale*/
      131072 && B(
        t,
        "flex-grow",
        /*scale*/
        u[17]
      ), p[0] & /*min_width*/
      262144 && B(t, "min-width", `calc(min(${/*min_width*/
      u[18]}px, 100%))`);
    },
    i(u) {
      o || (Gn(l, u), o = !0);
    },
    o(u) {
      jn(l, u), o = !1;
    },
    d(u) {
      u && ve(t), l && l.d(u), s && s.d(), r[32](null);
    }
  };
}
function nn(r) {
  let t;
  return {
    c() {
      t = Un("div"), this.h();
    },
    l(e) {
      t = Pn(e, "DIV", { class: !0 }), Le(t).forEach(ve), this.h();
    },
    h() {
      H(t, "class", "placeholder svelte-239wnu"), B(
        t,
        "height",
        /*placeholder_height*/
        r[22] + "px"
      ), B(
        t,
        "width",
        /*placeholder_width*/
        r[23] + "px"
      );
    },
    m(e, n) {
      ze(e, t, n);
    },
    p(e, n) {
      n[0] & /*placeholder_height*/
      4194304 && B(
        t,
        "height",
        /*placeholder_height*/
        e[22] + "px"
      ), n[0] & /*placeholder_width*/
      8388608 && B(
        t,
        "width",
        /*placeholder_width*/
        e[23] + "px"
      );
    },
    d(e) {
      e && ve(t);
    }
  };
}
function Ki(r) {
  let t, e, n, i = (
    /*tag*/
    r[25] && Wi(r)
  ), o = (
    /*fullscreen*/
    r[0] && nn(r)
  );
  return {
    c() {
      i && i.c(), t = Hn(), o && o.c(), e = Jt();
    },
    l(a) {
      i && i.l(a), t = Mn(a), o && o.l(a), e = Jt();
    },
    m(a, l) {
      i && i.m(a, l), ze(a, t, l), o && o.m(a, l), ze(a, e, l), n = !0;
    },
    p(a, l) {
      /*tag*/
      a[25] && i.p(a, l), /*fullscreen*/
      a[0] ? o ? o.p(a, l) : (o = nn(a), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    i(a) {
      n || (Gn(i, a), n = !0);
    },
    o(a) {
      jn(i, a), n = !1;
    },
    d(a) {
      a && (ve(t), ve(e)), i && i.d(a), o && o.d(a);
    }
  };
}
function Qi(r, t, e) {
  let { $$slots: n = {}, $$scope: i } = t, { height: o = void 0 } = t, { min_height: a = void 0 } = t, { max_height: l = void 0 } = t, { width: s = void 0 } = t, { elem_id: c = "" } = t, { elem_classes: d = [] } = t, { variant: u = "solid" } = t, { border_mode: p = "base" } = t, { padding: m = !0 } = t, { type: g = "normal" } = t, { test_id: v = void 0 } = t, { explicit_call: y = !1 } = t, { container: $ = !0 } = t, { visible: h = !0 } = t, { allow_overflow: _ = !0 } = t, { overflow_behavior: f = "auto" } = t, { scale: b = null } = t, { min_width: D = 0 } = t, { flex: E = !1 } = t, { resizable: S = !1 } = t, { rtl: F = !1 } = t, { fullscreen: T = !1 } = t, O = T, L, ue = g === "fieldset" ? "fieldset" : "div", ee = 0, ke = 0, Y = null;
  function ce(w) {
    T && w.key === "Escape" && e(0, T = !1);
  }
  const q = (w) => {
    if (w !== void 0) {
      if (typeof w == "number")
        return w + "px";
      if (typeof w == "string")
        return w;
    }
  }, G = (w) => {
    let M = w.clientY;
    const $e = (ge) => {
      const Fe = ge.clientY - M;
      M = ge.clientY, e(21, L.style.height = `${L.offsetHeight + Fe}px`, L);
    }, X = () => {
      window.removeEventListener("mousemove", $e), window.removeEventListener("mouseup", X);
    };
    window.addEventListener("mousemove", $e), window.addEventListener("mouseup", X);
  };
  function me(w) {
    Pi[w ? "unshift" : "push"](() => {
      L = w, e(21, L);
    });
  }
  return r.$$set = (w) => {
    "height" in w && e(2, o = w.height), "min_height" in w && e(3, a = w.min_height), "max_height" in w && e(4, l = w.max_height), "width" in w && e(5, s = w.width), "elem_id" in w && e(6, c = w.elem_id), "elem_classes" in w && e(7, d = w.elem_classes), "variant" in w && e(8, u = w.variant), "border_mode" in w && e(9, p = w.border_mode), "padding" in w && e(10, m = w.padding), "type" in w && e(28, g = w.type), "test_id" in w && e(11, v = w.test_id), "explicit_call" in w && e(12, y = w.explicit_call), "container" in w && e(13, $ = w.container), "visible" in w && e(14, h = w.visible), "allow_overflow" in w && e(15, _ = w.allow_overflow), "overflow_behavior" in w && e(16, f = w.overflow_behavior), "scale" in w && e(17, b = w.scale), "min_width" in w && e(18, D = w.min_width), "flex" in w && e(1, E = w.flex), "resizable" in w && e(19, S = w.resizable), "rtl" in w && e(20, F = w.rtl), "fullscreen" in w && e(0, T = w.fullscreen), "$$scope" in w && e(30, i = w.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*fullscreen, old_fullscreen, element*/
    538968065 && T !== O && (e(29, O = T), T ? (e(24, Y = L.getBoundingClientRect()), e(22, ee = L.offsetHeight), e(23, ke = L.offsetWidth), window.addEventListener("keydown", ce)) : (e(24, Y = null), window.removeEventListener("keydown", ce))), r.$$.dirty[0] & /*visible*/
    16384 && (h || e(1, E = !1));
  }, [
    T,
    E,
    o,
    a,
    l,
    s,
    c,
    d,
    u,
    p,
    m,
    v,
    y,
    $,
    h,
    _,
    f,
    b,
    D,
    S,
    F,
    L,
    ee,
    ke,
    Y,
    ue,
    q,
    G,
    g,
    O,
    i,
    n,
    me
  ];
}
class Ji extends Ni {
  constructor(t) {
    super(), ji(
      this,
      t,
      Qi,
      Ki,
      Yi,
      {
        height: 2,
        min_height: 3,
        max_height: 4,
        width: 5,
        elem_id: 6,
        elem_classes: 7,
        variant: 8,
        border_mode: 9,
        padding: 10,
        type: 28,
        test_id: 11,
        explicit_call: 12,
        container: 13,
        visible: 14,
        allow_overflow: 15,
        overflow_behavior: 16,
        scale: 17,
        min_width: 18,
        flex: 1,
        resizable: 19,
        rtl: 20,
        fullscreen: 0
      },
      null,
      [-1, -1]
    );
  }
}
function xt() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let Ae = xt();
function Zn(r) {
  Ae = r;
}
const Vn = /[&<>"']/, ea = new RegExp(Vn.source, "g"), Yn = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, ta = new RegExp(Yn.source, "g"), na = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, an = (r) => na[r];
function K(r, t) {
  if (t) {
    if (Vn.test(r))
      return r.replace(ea, an);
  } else if (Yn.test(r))
    return r.replace(ta, an);
  return r;
}
const ia = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function aa(r) {
  return r.replace(ia, (t, e) => (e = e.toLowerCase(), e === "colon" ? ":" : e.charAt(0) === "#" ? e.charAt(1) === "x" ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""));
}
const ra = /(^|[^\[])\^/g;
function R(r, t) {
  let e = typeof r == "string" ? r : r.source;
  t = t || "";
  const n = {
    replace: (i, o) => {
      let a = typeof o == "string" ? o : o.source;
      return a = a.replace(ra, "$1"), e = e.replace(i, a), n;
    },
    getRegex: () => new RegExp(e, t)
  };
  return n;
}
function rn(r) {
  try {
    r = encodeURI(r).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return r;
}
const Oe = { exec: () => null };
function on(r, t) {
  const e = r.replace(/\|/g, (o, a, l) => {
    let s = !1, c = a;
    for (; --c >= 0 && l[c] === "\\"; )
      s = !s;
    return s ? "|" : " |";
  }), n = e.split(/ \|/);
  let i = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), t)
    if (n.length > t)
      n.splice(t);
    else
      for (; n.length < t; )
        n.push("");
  for (; i < n.length; i++)
    n[i] = n[i].trim().replace(/\\\|/g, "|");
  return n;
}
function je(r, t, e) {
  const n = r.length;
  if (n === 0)
    return "";
  let i = 0;
  for (; i < n && r.charAt(n - i - 1) === t; )
    i++;
  return r.slice(0, n - i);
}
function oa(r, t) {
  if (r.indexOf(t[1]) === -1)
    return -1;
  let e = 0;
  for (let n = 0; n < r.length; n++)
    if (r[n] === "\\")
      n++;
    else if (r[n] === t[0])
      e++;
    else if (r[n] === t[1] && (e--, e < 0))
      return n;
  return -1;
}
function ln(r, t, e, n) {
  const i = t.href, o = t.title ? K(t.title) : null, a = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const l = {
      type: "link",
      raw: e,
      href: i,
      title: o,
      text: a,
      tokens: n.inlineTokens(a)
    };
    return n.state.inLink = !1, l;
  }
  return {
    type: "image",
    raw: e,
    href: i,
    title: o,
    text: K(a)
  };
}
function la(r, t) {
  const e = r.match(/^(\s+)(?:```)/);
  if (e === null)
    return t;
  const n = e[1];
  return t.split(`
`).map((i) => {
    const o = i.match(/^\s+/);
    if (o === null)
      return i;
    const [a] = o;
    return a.length >= n.length ? i.slice(n.length) : i;
  }).join(`
`);
}
class et {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(t) {
    this.options = t || Ae;
  }
  space(t) {
    const e = this.rules.block.newline.exec(t);
    if (e && e[0].length > 0)
      return {
        type: "space",
        raw: e[0]
      };
  }
  code(t) {
    const e = this.rules.block.code.exec(t);
    if (e) {
      const n = e[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: e[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? n : je(n, `
`)
      };
    }
  }
  fences(t) {
    const e = this.rules.block.fences.exec(t);
    if (e) {
      const n = e[0], i = la(n, e[3] || "");
      return {
        type: "code",
        raw: n,
        lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
        text: i
      };
    }
  }
  heading(t) {
    const e = this.rules.block.heading.exec(t);
    if (e) {
      let n = e[2].trim();
      if (/#$/.test(n)) {
        const i = je(n, "#");
        (this.options.pedantic || !i || / $/.test(i)) && (n = i.trim());
      }
      return {
        type: "heading",
        raw: e[0],
        depth: e[1].length,
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  hr(t) {
    const e = this.rules.block.hr.exec(t);
    if (e)
      return {
        type: "hr",
        raw: e[0]
      };
  }
  blockquote(t) {
    const e = this.rules.block.blockquote.exec(t);
    if (e) {
      let n = e[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      n = je(n.replace(/^ *>[ \t]?/gm, ""), `
`);
      const i = this.lexer.state.top;
      this.lexer.state.top = !0;
      const o = this.lexer.blockTokens(n);
      return this.lexer.state.top = i, {
        type: "blockquote",
        raw: e[0],
        tokens: o,
        text: n
      };
    }
  }
  list(t) {
    let e = this.rules.block.list.exec(t);
    if (e) {
      let n = e[1].trim();
      const i = n.length > 1, o = {
        type: "list",
        raw: "",
        ordered: i,
        start: i ? +n.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = i ? n : "[*+-]");
      const a = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let l = "", s = "", c = !1;
      for (; t; ) {
        let d = !1;
        if (!(e = a.exec(t)) || this.rules.block.hr.test(t))
          break;
        l = e[0], t = t.substring(l.length);
        let u = e[2].split(`
`, 1)[0].replace(/^\t+/, ($) => " ".repeat(3 * $.length)), p = t.split(`
`, 1)[0], m = 0;
        this.options.pedantic ? (m = 2, s = u.trimStart()) : (m = e[2].search(/[^ ]/), m = m > 4 ? 1 : m, s = u.slice(m), m += e[1].length);
        let g = !1;
        if (!u && /^ *$/.test(p) && (l += p + `
`, t = t.substring(p.length + 1), d = !0), !d) {
          const $ = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), h = new RegExp(`^ {0,${Math.min(3, m - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), _ = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:\`\`\`|~~~)`), f = new RegExp(`^ {0,${Math.min(3, m - 1)}}#`);
          for (; t; ) {
            const b = t.split(`
`, 1)[0];
            if (p = b, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), _.test(p) || f.test(p) || $.test(p) || h.test(t))
              break;
            if (p.search(/[^ ]/) >= m || !p.trim())
              s += `
` + p.slice(m);
            else {
              if (g || u.search(/[^ ]/) >= 4 || _.test(u) || f.test(u) || h.test(u))
                break;
              s += `
` + p;
            }
            !g && !p.trim() && (g = !0), l += b + `
`, t = t.substring(b.length + 1), u = p.slice(m);
          }
        }
        o.loose || (c ? o.loose = !0 : /\n *\n *$/.test(l) && (c = !0));
        let v = null, y;
        this.options.gfm && (v = /^\[[ xX]\] /.exec(s), v && (y = v[0] !== "[ ] ", s = s.replace(/^\[[ xX]\] +/, ""))), o.items.push({
          type: "list_item",
          raw: l,
          task: !!v,
          checked: y,
          loose: !1,
          text: s,
          tokens: []
        }), o.raw += l;
      }
      o.items[o.items.length - 1].raw = l.trimEnd(), o.items[o.items.length - 1].text = s.trimEnd(), o.raw = o.raw.trimEnd();
      for (let d = 0; d < o.items.length; d++)
        if (this.lexer.state.top = !1, o.items[d].tokens = this.lexer.blockTokens(o.items[d].text, []), !o.loose) {
          const u = o.items[d].tokens.filter((m) => m.type === "space"), p = u.length > 0 && u.some((m) => /\n.*\n/.test(m.raw));
          o.loose = p;
        }
      if (o.loose)
        for (let d = 0; d < o.items.length; d++)
          o.items[d].loose = !0;
      return o;
    }
  }
  html(t) {
    const e = this.rules.block.html.exec(t);
    if (e)
      return {
        type: "html",
        block: !0,
        raw: e[0],
        pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
        text: e[0]
      };
  }
  def(t) {
    const e = this.rules.block.def.exec(t);
    if (e) {
      const n = e[1].toLowerCase().replace(/\s+/g, " "), i = e[2] ? e[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return {
        type: "def",
        tag: n,
        raw: e[0],
        href: i,
        title: o
      };
    }
  }
  table(t) {
    const e = this.rules.block.table.exec(t);
    if (!e || !/[:|]/.test(e[2]))
      return;
    const n = on(e[1]), i = e[2].replace(/^\||\| *$/g, "").split("|"), o = e[3] && e[3].trim() ? e[3].replace(/\n[ \t]*$/, "").split(`
`) : [], a = {
      type: "table",
      raw: e[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === i.length) {
      for (const l of i)
        /^ *-+: *$/.test(l) ? a.align.push("right") : /^ *:-+: *$/.test(l) ? a.align.push("center") : /^ *:-+ *$/.test(l) ? a.align.push("left") : a.align.push(null);
      for (const l of n)
        a.header.push({
          text: l,
          tokens: this.lexer.inline(l)
        });
      for (const l of o)
        a.rows.push(on(l, a.header.length).map((s) => ({
          text: s,
          tokens: this.lexer.inline(s)
        })));
      return a;
    }
  }
  lheading(t) {
    const e = this.rules.block.lheading.exec(t);
    if (e)
      return {
        type: "heading",
        raw: e[0],
        depth: e[2].charAt(0) === "=" ? 1 : 2,
        text: e[1],
        tokens: this.lexer.inline(e[1])
      };
  }
  paragraph(t) {
    const e = this.rules.block.paragraph.exec(t);
    if (e) {
      const n = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return {
        type: "paragraph",
        raw: e[0],
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  text(t) {
    const e = this.rules.block.text.exec(t);
    if (e)
      return {
        type: "text",
        raw: e[0],
        text: e[0],
        tokens: this.lexer.inline(e[0])
      };
  }
  escape(t) {
    const e = this.rules.inline.escape.exec(t);
    if (e)
      return {
        type: "escape",
        raw: e[0],
        text: K(e[1])
      };
  }
  tag(t) {
    const e = this.rules.inline.tag.exec(t);
    if (e)
      return !this.lexer.state.inLink && /^<a /i.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: e[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: e[0]
      };
  }
  link(t) {
    const e = this.rules.inline.link.exec(t);
    if (e) {
      const n = e[2].trim();
      if (!this.options.pedantic && /^</.test(n)) {
        if (!/>$/.test(n))
          return;
        const a = je(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0)
          return;
      } else {
        const a = oa(e[2], "()");
        if (a > -1) {
          const s = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + a;
          e[2] = e[2].substring(0, a), e[0] = e[0].substring(0, s).trim(), e[3] = "";
        }
      }
      let i = e[2], o = "";
      if (this.options.pedantic) {
        const a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
        a && (i = a[1], o = a[3]);
      } else
        o = e[3] ? e[3].slice(1, -1) : "";
      return i = i.trim(), /^</.test(i) && (this.options.pedantic && !/>$/.test(n) ? i = i.slice(1) : i = i.slice(1, -1)), ln(e, {
        href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
        title: o && o.replace(this.rules.inline.anyPunctuation, "$1")
      }, e[0], this.lexer);
    }
  }
  reflink(t, e) {
    let n;
    if ((n = this.rules.inline.reflink.exec(t)) || (n = this.rules.inline.nolink.exec(t))) {
      const i = (n[2] || n[1]).replace(/\s+/g, " "), o = e[i.toLowerCase()];
      if (!o) {
        const a = n[0].charAt(0);
        return {
          type: "text",
          raw: a,
          text: a
        };
      }
      return ln(n, o, n[0], this.lexer);
    }
  }
  emStrong(t, e, n = "") {
    let i = this.rules.inline.emStrongLDelim.exec(t);
    if (!i || i[3] && n.match(/[\p{L}\p{N}]/u))
      return;
    if (!(i[1] || i[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const a = [...i[0]].length - 1;
      let l, s, c = a, d = 0;
      const u = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, e = e.slice(-1 * t.length + a); (i = u.exec(e)) != null; ) {
        if (l = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !l)
          continue;
        if (s = [...l].length, i[3] || i[4]) {
          c += s;
          continue;
        } else if ((i[5] || i[6]) && a % 3 && !((a + s) % 3)) {
          d += s;
          continue;
        }
        if (c -= s, c > 0)
          continue;
        s = Math.min(s, s + c + d);
        const p = [...i[0]][0].length, m = t.slice(0, a + i.index + p + s);
        if (Math.min(a, s) % 2) {
          const v = m.slice(1, -1);
          return {
            type: "em",
            raw: m,
            text: v,
            tokens: this.lexer.inlineTokens(v)
          };
        }
        const g = m.slice(2, -2);
        return {
          type: "strong",
          raw: m,
          text: g,
          tokens: this.lexer.inlineTokens(g)
        };
      }
    }
  }
  codespan(t) {
    const e = this.rules.inline.code.exec(t);
    if (e) {
      let n = e[2].replace(/\n/g, " ");
      const i = /[^ ]/.test(n), o = /^ /.test(n) && / $/.test(n);
      return i && o && (n = n.substring(1, n.length - 1)), n = K(n, !0), {
        type: "codespan",
        raw: e[0],
        text: n
      };
    }
  }
  br(t) {
    const e = this.rules.inline.br.exec(t);
    if (e)
      return {
        type: "br",
        raw: e[0]
      };
  }
  del(t) {
    const e = this.rules.inline.del.exec(t);
    if (e)
      return {
        type: "del",
        raw: e[0],
        text: e[2],
        tokens: this.lexer.inlineTokens(e[2])
      };
  }
  autolink(t) {
    const e = this.rules.inline.autolink.exec(t);
    if (e) {
      let n, i;
      return e[2] === "@" ? (n = K(e[1]), i = "mailto:" + n) : (n = K(e[1]), i = n), {
        type: "link",
        raw: e[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(t) {
    let e;
    if (e = this.rules.inline.url.exec(t)) {
      let n, i;
      if (e[2] === "@")
        n = K(e[0]), i = "mailto:" + n;
      else {
        let o;
        do
          o = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (o !== e[0]);
        n = K(e[0]), e[1] === "www." ? i = "http://" + e[0] : i = e[0];
      }
      return {
        type: "link",
        raw: e[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  inlineText(t) {
    const e = this.rules.inline.text.exec(t);
    if (e) {
      let n;
      return this.lexer.state.inRawBlock ? n = e[0] : n = K(e[0]), {
        type: "text",
        raw: e[0],
        text: n
      };
    }
  }
}
const sa = /^(?: *(?:\n|$))+/, ua = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, ca = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Pe = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, da = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Xn = /(?:[*+-]|\d{1,9}[.)])/, Wn = R(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Xn).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Bt = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, _a = /^[^\n]+/, It = /(?!\s*\])(?:\\.|[^\[\]\\])+/, pa = R(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", It).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), ha = R(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Xn).getRegex(), ot = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Rt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, fa = R("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Rt).replace("tag", ot).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Kn = R(Bt).replace("hr", Pe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ot).getRegex(), ma = R(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Kn).getRegex(), qt = {
  blockquote: ma,
  code: ua,
  def: pa,
  fences: ca,
  heading: da,
  hr: Pe,
  html: fa,
  lheading: Wn,
  list: ha,
  newline: sa,
  paragraph: Kn,
  table: Oe,
  text: _a
}, sn = R("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Pe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ot).getRegex(), ga = {
  ...qt,
  table: sn,
  paragraph: R(Bt).replace("hr", Pe).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", sn).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ot).getRegex()
}, ba = {
  ...qt,
  html: R(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Rt).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Oe,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: R(Bt).replace("hr", Pe).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Wn).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Qn = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, va = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Jn = /^( {2,}|\\)\n(?!\s*$)/, Da = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Me = "\\p{P}\\p{S}", ya = R(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Me).getRegex(), $a = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, wa = R(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Me).getRegex(), Fa = R("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Me).getRegex(), Ea = R("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Me).getRegex(), ka = R(/\\([punct])/, "gu").replace(/punct/g, Me).getRegex(), Ca = R(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Aa = R(Rt).replace("(?:-->|$)", "-->").getRegex(), Sa = R("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Aa).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), tt = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ta = R(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", tt).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ei = R(/^!?\[(label)\]\[(ref)\]/).replace("label", tt).replace("ref", It).getRegex(), ti = R(/^!?\[(ref)\](?:\[\])?/).replace("ref", It).getRegex(), xa = R("reflink|nolink(?!\\()", "g").replace("reflink", ei).replace("nolink", ti).getRegex(), Lt = {
  _backpedal: Oe,
  // only used for GFM url
  anyPunctuation: ka,
  autolink: Ca,
  blockSkip: $a,
  br: Jn,
  code: va,
  del: Oe,
  emStrongLDelim: wa,
  emStrongRDelimAst: Fa,
  emStrongRDelimUnd: Ea,
  escape: Qn,
  link: Ta,
  nolink: ti,
  punctuation: ya,
  reflink: ei,
  reflinkSearch: xa,
  tag: Sa,
  text: Da,
  url: Oe
}, Ba = {
  ...Lt,
  link: R(/^!?\[(label)\]\((.*?)\)/).replace("label", tt).getRegex(),
  reflink: R(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", tt).getRegex()
}, Dt = {
  ...Lt,
  escape: R(Qn).replace("])", "~|])").getRegex(),
  url: R(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Ia = {
  ...Dt,
  br: R(Jn).replace("{2,}", "*").getRegex(),
  text: R(Dt.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Ze = {
  normal: qt,
  gfm: ga,
  pedantic: ba
}, Re = {
  normal: Lt,
  gfm: Dt,
  breaks: Ia,
  pedantic: Ba
};
class De {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Ae, this.options.tokenizer = this.options.tokenizer || new et(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const e = {
      block: Ze.normal,
      inline: Re.normal
    };
    this.options.pedantic ? (e.block = Ze.pedantic, e.inline = Re.pedantic) : this.options.gfm && (e.block = Ze.gfm, this.options.breaks ? e.inline = Re.breaks : e.inline = Re.gfm), this.tokenizer.rules = e;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Ze,
      inline: Re
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, e) {
    return new De(e).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, e) {
    return new De(e).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(/\r\n|\r/g, `
`), this.blockTokens(t, this.tokens);
    for (let e = 0; e < this.inlineQueue.length; e++) {
      const n = this.inlineQueue[e];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, e = []) {
    this.options.pedantic ? t = t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t = t.replace(/^( *)(\t+)/gm, (l, s, c) => s + "    ".repeat(c.length));
    let n, i, o, a;
    for (; t; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((l) => (n = l.call({ lexer: this }, t, e)) ? (t = t.substring(n.raw.length), e.push(n), !0) : !1))) {
        if (n = this.tokenizer.space(t)) {
          t = t.substring(n.raw.length), n.raw.length === 1 && e.length > 0 ? e[e.length - 1].raw += `
` : e.push(n);
          continue;
        }
        if (n = this.tokenizer.code(t)) {
          t = t.substring(n.raw.length), i = e[e.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : e.push(n);
          continue;
        }
        if (n = this.tokenizer.fences(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.heading(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.hr(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.blockquote(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.list(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.html(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.def(t)) {
          t = t.substring(n.raw.length), i = e[e.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + n.raw, i.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
            href: n.href,
            title: n.title
          });
          continue;
        }
        if (n = this.tokenizer.table(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.lheading(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (o = t, this.options.extensions && this.options.extensions.startBlock) {
          let l = 1 / 0;
          const s = t.slice(1);
          let c;
          this.options.extensions.startBlock.forEach((d) => {
            c = d.call({ lexer: this }, s), typeof c == "number" && c >= 0 && (l = Math.min(l, c));
          }), l < 1 / 0 && l >= 0 && (o = t.substring(0, l + 1));
        }
        if (this.state.top && (n = this.tokenizer.paragraph(o))) {
          i = e[e.length - 1], a && i.type === "paragraph" ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : e.push(n), a = o.length !== t.length, t = t.substring(n.raw.length);
          continue;
        }
        if (n = this.tokenizer.text(t)) {
          t = t.substring(n.raw.length), i = e[e.length - 1], i && i.type === "text" ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : e.push(n);
          continue;
        }
        if (t) {
          const l = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(l);
            break;
          } else
            throw new Error(l);
        }
      }
    return this.state.top = !0, e;
  }
  inline(t, e = []) {
    return this.inlineQueue.push({ src: t, tokens: e }), e;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, e = []) {
    let n, i, o, a = t, l, s, c;
    if (this.tokens.links) {
      const d = Object.keys(this.tokens.links);
      if (d.length > 0)
        for (; (l = this.tokenizer.rules.inline.reflinkSearch.exec(a)) != null; )
          d.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (l = this.tokenizer.rules.inline.blockSkip.exec(a)) != null; )
      a = a.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (l = this.tokenizer.rules.inline.anyPunctuation.exec(a)) != null; )
      a = a.slice(0, l.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; t; )
      if (s || (c = ""), s = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((d) => (n = d.call({ lexer: this }, t, e)) ? (t = t.substring(n.raw.length), e.push(n), !0) : !1))) {
        if (n = this.tokenizer.escape(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.tag(t)) {
          t = t.substring(n.raw.length), i = e[e.length - 1], i && n.type === "text" && i.type === "text" ? (i.raw += n.raw, i.text += n.text) : e.push(n);
          continue;
        }
        if (n = this.tokenizer.link(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.reflink(t, this.tokens.links)) {
          t = t.substring(n.raw.length), i = e[e.length - 1], i && n.type === "text" && i.type === "text" ? (i.raw += n.raw, i.text += n.text) : e.push(n);
          continue;
        }
        if (n = this.tokenizer.emStrong(t, a, c)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.codespan(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.br(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.del(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (n = this.tokenizer.autolink(t)) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(t))) {
          t = t.substring(n.raw.length), e.push(n);
          continue;
        }
        if (o = t, this.options.extensions && this.options.extensions.startInline) {
          let d = 1 / 0;
          const u = t.slice(1);
          let p;
          this.options.extensions.startInline.forEach((m) => {
            p = m.call({ lexer: this }, u), typeof p == "number" && p >= 0 && (d = Math.min(d, p));
          }), d < 1 / 0 && d >= 0 && (o = t.substring(0, d + 1));
        }
        if (n = this.tokenizer.inlineText(o)) {
          t = t.substring(n.raw.length), n.raw.slice(-1) !== "_" && (c = n.raw.slice(-1)), s = !0, i = e[e.length - 1], i && i.type === "text" ? (i.raw += n.raw, i.text += n.text) : e.push(n);
          continue;
        }
        if (t) {
          const d = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(d);
            break;
          } else
            throw new Error(d);
        }
      }
    return e;
  }
}
class nt {
  options;
  constructor(t) {
    this.options = t || Ae;
  }
  code(t, e, n) {
    const i = (e || "").match(/^\S*/)?.[0];
    return t = t.replace(/\n$/, "") + `
`, i ? '<pre><code class="language-' + K(i) + '">' + (n ? t : K(t, !0)) + `</code></pre>
` : "<pre><code>" + (n ? t : K(t, !0)) + `</code></pre>
`;
  }
  blockquote(t) {
    return `<blockquote>
${t}</blockquote>
`;
  }
  html(t, e) {
    return t;
  }
  heading(t, e, n) {
    return `<h${e}>${t}</h${e}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(t, e, n) {
    const i = e ? "ol" : "ul", o = e && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + o + `>
` + t + "</" + i + `>
`;
  }
  listitem(t, e, n) {
    return `<li>${t}</li>
`;
  }
  checkbox(t) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(t) {
    return `<p>${t}</p>
`;
  }
  table(t, e) {
    return e && (e = `<tbody>${e}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + e + `</table>
`;
  }
  tablerow(t) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t, e) {
    const n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  /**
   * span level renderer
   */
  strong(t) {
    return `<strong>${t}</strong>`;
  }
  em(t) {
    return `<em>${t}</em>`;
  }
  codespan(t) {
    return `<code>${t}</code>`;
  }
  br() {
    return "<br>";
  }
  del(t) {
    return `<del>${t}</del>`;
  }
  link(t, e, n) {
    const i = rn(t);
    if (i === null)
      return n;
    t = i;
    let o = '<a href="' + t + '"';
    return e && (o += ' title="' + e + '"'), o += ">" + n + "</a>", o;
  }
  image(t, e, n) {
    const i = rn(t);
    if (i === null)
      return n;
    t = i;
    let o = `<img src="${t}" alt="${n}"`;
    return e && (o += ` title="${e}"`), o += ">", o;
  }
  text(t) {
    return t;
  }
}
class Ot {
  // no need for block level renderers
  strong(t) {
    return t;
  }
  em(t) {
    return t;
  }
  codespan(t) {
    return t;
  }
  del(t) {
    return t;
  }
  html(t) {
    return t;
  }
  text(t) {
    return t;
  }
  link(t, e, n) {
    return "" + n;
  }
  image(t, e, n) {
    return "" + n;
  }
  br() {
    return "";
  }
}
class ye {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || Ae, this.options.renderer = this.options.renderer || new nt(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Ot();
  }
  /**
   * Static Parse Method
   */
  static parse(t, e) {
    return new ye(e).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, e) {
    return new ye(e).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, e = !0) {
    let n = "";
    for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const a = o, l = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          n += l || "";
          continue;
        }
      }
      switch (o.type) {
        case "space":
          continue;
        case "hr": {
          n += this.renderer.hr();
          continue;
        }
        case "heading": {
          const a = o;
          n += this.renderer.heading(this.parseInline(a.tokens), a.depth, aa(this.parseInline(a.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const a = o;
          n += this.renderer.code(a.text, a.lang, !!a.escaped);
          continue;
        }
        case "table": {
          const a = o;
          let l = "", s = "";
          for (let d = 0; d < a.header.length; d++)
            s += this.renderer.tablecell(this.parseInline(a.header[d].tokens), { header: !0, align: a.align[d] });
          l += this.renderer.tablerow(s);
          let c = "";
          for (let d = 0; d < a.rows.length; d++) {
            const u = a.rows[d];
            s = "";
            for (let p = 0; p < u.length; p++)
              s += this.renderer.tablecell(this.parseInline(u[p].tokens), { header: !1, align: a.align[p] });
            c += this.renderer.tablerow(s);
          }
          n += this.renderer.table(l, c);
          continue;
        }
        case "blockquote": {
          const a = o, l = this.parse(a.tokens);
          n += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          const a = o, l = a.ordered, s = a.start, c = a.loose;
          let d = "";
          for (let u = 0; u < a.items.length; u++) {
            const p = a.items[u], m = p.checked, g = p.task;
            let v = "";
            if (p.task) {
              const y = this.renderer.checkbox(!!m);
              c ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = y + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = y + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({
                type: "text",
                text: y + " "
              }) : v += y + " ";
            }
            v += this.parse(p.tokens, c), d += this.renderer.listitem(v, g, !!m);
          }
          n += this.renderer.list(d, l, s);
          continue;
        }
        case "html": {
          const a = o;
          n += this.renderer.html(a.text, a.block);
          continue;
        }
        case "paragraph": {
          const a = o;
          n += this.renderer.paragraph(this.parseInline(a.tokens));
          continue;
        }
        case "text": {
          let a = o, l = a.tokens ? this.parseInline(a.tokens) : a.text;
          for (; i + 1 < t.length && t[i + 1].type === "text"; )
            a = t[++i], l += `
` + (a.tokens ? this.parseInline(a.tokens) : a.text);
          n += e ? this.renderer.paragraph(l) : l;
          continue;
        }
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, e) {
    e = e || this.renderer;
    let n = "";
    for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const a = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          n += a || "";
          continue;
        }
      }
      switch (o.type) {
        case "escape": {
          const a = o;
          n += e.text(a.text);
          break;
        }
        case "html": {
          const a = o;
          n += e.html(a.text);
          break;
        }
        case "link": {
          const a = o;
          n += e.link(a.href, a.title, this.parseInline(a.tokens, e));
          break;
        }
        case "image": {
          const a = o;
          n += e.image(a.href, a.title, a.text);
          break;
        }
        case "strong": {
          const a = o;
          n += e.strong(this.parseInline(a.tokens, e));
          break;
        }
        case "em": {
          const a = o;
          n += e.em(this.parseInline(a.tokens, e));
          break;
        }
        case "codespan": {
          const a = o;
          n += e.codespan(a.text);
          break;
        }
        case "br": {
          n += e.br();
          break;
        }
        case "del": {
          const a = o;
          n += e.del(this.parseInline(a.tokens, e));
          break;
        }
        case "text": {
          const a = o;
          n += e.text(a.text);
          break;
        }
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
}
class Qe {
  options;
  constructor(t) {
    this.options = t || Ae;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
}
class Ra {
  defaults = xt();
  options = this.setOptions;
  parse = this.#e(De.lex, ye.parse);
  parseInline = this.#e(De.lexInline, ye.parseInline);
  Parser = ye;
  Renderer = nt;
  TextRenderer = Ot;
  Lexer = De;
  Tokenizer = et;
  Hooks = Qe;
  constructor(...t) {
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, e) {
    let n = [];
    for (const i of t)
      switch (n = n.concat(e.call(this, i)), i.type) {
        case "table": {
          const o = i;
          for (const a of o.header)
            n = n.concat(this.walkTokens(a.tokens, e));
          for (const a of o.rows)
            for (const l of a)
              n = n.concat(this.walkTokens(l.tokens, e));
          break;
        }
        case "list": {
          const o = i;
          n = n.concat(this.walkTokens(o.items, e));
          break;
        }
        default: {
          const o = i;
          this.defaults.extensions?.childTokens?.[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((a) => {
            const l = o[a].flat(1 / 0);
            n = n.concat(this.walkTokens(l, e));
          }) : o.tokens && (n = n.concat(this.walkTokens(o.tokens, e)));
        }
      }
    return n;
  }
  use(...t) {
    const e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((n) => {
      const i = { ...n };
      if (i.async = this.defaults.async || i.async || !1, n.extensions && (n.extensions.forEach((o) => {
        if (!o.name)
          throw new Error("extension name required");
        if ("renderer" in o) {
          const a = e.renderers[o.name];
          a ? e.renderers[o.name] = function(...l) {
            let s = o.renderer.apply(this, l);
            return s === !1 && (s = a.apply(this, l)), s;
          } : e.renderers[o.name] = o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const a = e[o.level];
          a ? a.unshift(o.tokenizer) : e[o.level] = [o.tokenizer], o.start && (o.level === "block" ? e.startBlock ? e.startBlock.push(o.start) : e.startBlock = [o.start] : o.level === "inline" && (e.startInline ? e.startInline.push(o.start) : e.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (e.childTokens[o.name] = o.childTokens);
      }), i.extensions = e), n.renderer) {
        const o = this.defaults.renderer || new nt(this.defaults);
        for (const a in n.renderer) {
          if (!(a in o))
            throw new Error(`renderer '${a}' does not exist`);
          if (a === "options")
            continue;
          const l = a, s = n.renderer[l], c = o[l];
          o[l] = (...d) => {
            let u = s.apply(o, d);
            return u === !1 && (u = c.apply(o, d)), u || "";
          };
        }
        i.renderer = o;
      }
      if (n.tokenizer) {
        const o = this.defaults.tokenizer || new et(this.defaults);
        for (const a in n.tokenizer) {
          if (!(a in o))
            throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a))
            continue;
          const l = a, s = n.tokenizer[l], c = o[l];
          o[l] = (...d) => {
            let u = s.apply(o, d);
            return u === !1 && (u = c.apply(o, d)), u;
          };
        }
        i.tokenizer = o;
      }
      if (n.hooks) {
        const o = this.defaults.hooks || new Qe();
        for (const a in n.hooks) {
          if (!(a in o))
            throw new Error(`hook '${a}' does not exist`);
          if (a === "options")
            continue;
          const l = a, s = n.hooks[l], c = o[l];
          Qe.passThroughHooks.has(a) ? o[l] = (d) => {
            if (this.defaults.async)
              return Promise.resolve(s.call(o, d)).then((p) => c.call(o, p));
            const u = s.call(o, d);
            return c.call(o, u);
          } : o[l] = (...d) => {
            let u = s.apply(o, d);
            return u === !1 && (u = c.apply(o, d)), u;
          };
        }
        i.hooks = o;
      }
      if (n.walkTokens) {
        const o = this.defaults.walkTokens, a = n.walkTokens;
        i.walkTokens = function(l) {
          let s = [];
          return s.push(a.call(this, l)), o && (s = s.concat(o.call(this, l))), s;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, e) {
    return De.lex(t, e ?? this.defaults);
  }
  parser(t, e) {
    return ye.parse(t, e ?? this.defaults);
  }
  #e(t, e) {
    return (n, i) => {
      const o = { ...i }, a = { ...this.defaults, ...o };
      this.defaults.async === !0 && o.async === !1 && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = !0);
      const l = this.#t(!!a.silent, !!a.async);
      if (typeof n > "u" || n === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (a.hooks && (a.hooks.options = a), a.async)
        return Promise.resolve(a.hooks ? a.hooks.preprocess(n) : n).then((s) => t(s, a)).then((s) => a.hooks ? a.hooks.processAllTokens(s) : s).then((s) => a.walkTokens ? Promise.all(this.walkTokens(s, a.walkTokens)).then(() => s) : s).then((s) => e(s, a)).then((s) => a.hooks ? a.hooks.postprocess(s) : s).catch(l);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let s = t(n, a);
        a.hooks && (s = a.hooks.processAllTokens(s)), a.walkTokens && this.walkTokens(s, a.walkTokens);
        let c = e(s, a);
        return a.hooks && (c = a.hooks.postprocess(c)), c;
      } catch (s) {
        return l(s);
      }
    };
  }
  #t(t, e) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const i = "<p>An error occurred:</p><pre>" + K(n.message + "", !0) + "</pre>";
        return e ? Promise.resolve(i) : i;
      }
      if (e)
        return Promise.reject(n);
      throw n;
    };
  }
}
const Ce = new Ra();
function I(r, t) {
  return Ce.parse(r, t);
}
I.options = I.setOptions = function(r) {
  return Ce.setOptions(r), I.defaults = Ce.defaults, Zn(I.defaults), I;
};
I.getDefaults = xt;
I.defaults = Ae;
I.use = function(...r) {
  return Ce.use(...r), I.defaults = Ce.defaults, Zn(I.defaults), I;
};
I.walkTokens = function(r, t) {
  return Ce.walkTokens(r, t);
};
I.parseInline = Ce.parseInline;
I.Parser = ye;
I.parser = ye.parse;
I.Renderer = nt;
I.TextRenderer = Ot;
I.Lexer = De;
I.lexer = De.lex;
I.Tokenizer = et;
I.Hooks = Qe;
I.parse = I;
I.options;
I.setOptions;
I.use;
I.walkTokens;
I.parseInline;
ye.parse;
De.lex;
const qa = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, La = Object.hasOwnProperty;
class ni {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(t, e) {
    const n = this;
    let i = Oa(t, e === !0);
    const o = i;
    for (; La.call(n.occurrences, i); )
      n.occurrences[o]++, i = o + "-" + n.occurrences[o];
    return n.occurrences[i] = 0, i;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function Oa(r, t) {
  return typeof r != "string" ? "" : (t || (r = r.toLowerCase()), r.replace(qa, "").replace(/ /g, "-"));
}
new ni();
var un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Na = { exports: {} };
(function(r) {
  var t = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var e = function(n) {
    var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, o = 0, a = {}, l = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: n.Prism && n.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function h(_) {
          return _ instanceof s ? new s(_.type, h(_.content), _.alias) : Array.isArray(_) ? _.map(h) : _.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(h) {
          return Object.prototype.toString.call(h).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(h) {
          return h.__id || Object.defineProperty(h, "__id", { value: ++o }), h.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function h(_, f) {
          f = f || {};
          var b, D;
          switch (l.util.type(_)) {
            case "Object":
              if (D = l.util.objId(_), f[D])
                return f[D];
              b = /** @type {Record<string, any>} */
              {}, f[D] = b;
              for (var E in _)
                _.hasOwnProperty(E) && (b[E] = h(_[E], f));
              return (
                /** @type {any} */
                b
              );
            case "Array":
              return D = l.util.objId(_), f[D] ? f[D] : (b = [], f[D] = b, /** @type {Array} */
              /** @type {any} */
              _.forEach(function(S, F) {
                b[F] = h(S, f);
              }), /** @type {any} */
              b);
            default:
              return _;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(h) {
          for (; h; ) {
            var _ = i.exec(h.className);
            if (_)
              return _[1].toLowerCase();
            h = h.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(h, _) {
          h.className = h.className.replace(RegExp(i, "gi"), ""), h.classList.add("language-" + _);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if (document.currentScript && document.currentScript.tagName === "SCRIPT")
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (b) {
            var h = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(b.stack) || [])[1];
            if (h) {
              var _ = document.getElementsByTagName("script");
              for (var f in _)
                if (_[f].src == h)
                  return _[f];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(h, _, f) {
          for (var b = "no-" + _; h; ) {
            var D = h.classList;
            if (D.contains(_))
              return !0;
            if (D.contains(b))
              return !1;
            h = h.parentElement;
          }
          return !!f;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: a,
        plaintext: a,
        text: a,
        txt: a,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(h, _) {
          var f = l.util.clone(l.languages[h]);
          for (var b in _)
            f[b] = _[b];
          return f;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(h, _, f, b) {
          b = b || /** @type {any} */
          l.languages;
          var D = b[h], E = {};
          for (var S in D)
            if (D.hasOwnProperty(S)) {
              if (S == _)
                for (var F in f)
                  f.hasOwnProperty(F) && (E[F] = f[F]);
              f.hasOwnProperty(S) || (E[S] = D[S]);
            }
          var T = b[h];
          return b[h] = E, l.languages.DFS(l.languages, function(O, L) {
            L === T && O != h && (this[O] = E);
          }), E;
        },
        // Traverse a language definition with Depth First Search
        DFS: function h(_, f, b, D) {
          D = D || {};
          var E = l.util.objId;
          for (var S in _)
            if (_.hasOwnProperty(S)) {
              f.call(_, S, _[S], b || S);
              var F = _[S], T = l.util.type(F);
              T === "Object" && !D[E(F)] ? (D[E(F)] = !0, h(F, f, null, D)) : T === "Array" && !D[E(F)] && (D[E(F)] = !0, h(F, f, S, D));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(h, _) {
        l.highlightAllUnder(document, h, _);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(h, _, f) {
        var b = {
          callback: f,
          container: h,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        l.hooks.run("before-highlightall", b), b.elements = Array.prototype.slice.apply(b.container.querySelectorAll(b.selector)), l.hooks.run("before-all-elements-highlight", b);
        for (var D = 0, E; E = b.elements[D++]; )
          l.highlightElement(E, _ === !0, b.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(h, _, f) {
        var b = l.util.getLanguage(h), D = l.languages[b];
        l.util.setLanguage(h, b);
        var E = h.parentElement;
        E && E.nodeName.toLowerCase() === "pre" && l.util.setLanguage(E, b);
        var S = h.textContent, F = {
          element: h,
          language: b,
          grammar: D,
          code: S
        };
        function T(L) {
          F.highlightedCode = L, l.hooks.run("before-insert", F), F.element.innerHTML = F.highlightedCode, l.hooks.run("after-highlight", F), l.hooks.run("complete", F), f && f.call(F.element);
        }
        if (l.hooks.run("before-sanity-check", F), E = F.element.parentElement, E && E.nodeName.toLowerCase() === "pre" && !E.hasAttribute("tabindex") && E.setAttribute("tabindex", "0"), !F.code) {
          l.hooks.run("complete", F), f && f.call(F.element);
          return;
        }
        if (l.hooks.run("before-highlight", F), !F.grammar) {
          T(l.util.encode(F.code));
          return;
        }
        if (_ && n.Worker) {
          var O = new Worker(l.filename);
          O.onmessage = function(L) {
            T(L.data);
          }, O.postMessage(JSON.stringify({
            language: F.language,
            code: F.code,
            immediateClose: !0
          }));
        } else
          T(l.highlight(F.code, F.grammar, F.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(h, _, f) {
        var b = {
          code: h,
          grammar: _,
          language: f
        };
        if (l.hooks.run("before-tokenize", b), !b.grammar)
          throw new Error('The language "' + b.language + '" has no grammar.');
        return b.tokens = l.tokenize(b.code, b.grammar), l.hooks.run("after-tokenize", b), s.stringify(l.util.encode(b.tokens), b.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(h, _) {
        var f = _.rest;
        if (f) {
          for (var b in f)
            _[b] = f[b];
          delete _.rest;
        }
        var D = new u();
        return p(D, D.head, h), d(h, D, _, D.head, 0), g(D);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(h, _) {
          var f = l.hooks.all;
          f[h] = f[h] || [], f[h].push(_);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(h, _) {
          var f = l.hooks.all[h];
          if (!(!f || !f.length))
            for (var b = 0, D; D = f[b++]; )
              D(_);
        }
      },
      Token: s
    };
    n.Prism = l;
    function s(h, _, f, b) {
      this.type = h, this.content = _, this.alias = f, this.length = (b || "").length | 0;
    }
    s.stringify = function h(_, f) {
      if (typeof _ == "string")
        return _;
      if (Array.isArray(_)) {
        var b = "";
        return _.forEach(function(T) {
          b += h(T, f);
        }), b;
      }
      var D = {
        type: _.type,
        content: h(_.content, f),
        tag: "span",
        classes: ["token", _.type],
        attributes: {},
        language: f
      }, E = _.alias;
      E && (Array.isArray(E) ? Array.prototype.push.apply(D.classes, E) : D.classes.push(E)), l.hooks.run("wrap", D);
      var S = "";
      for (var F in D.attributes)
        S += " " + F + '="' + (D.attributes[F] || "").replace(/"/g, "&quot;") + '"';
      return "<" + D.tag + ' class="' + D.classes.join(" ") + '"' + S + ">" + D.content + "</" + D.tag + ">";
    };
    function c(h, _, f, b) {
      h.lastIndex = _;
      var D = h.exec(f);
      if (D && b && D[1]) {
        var E = D[1].length;
        D.index += E, D[0] = D[0].slice(E);
      }
      return D;
    }
    function d(h, _, f, b, D, E) {
      for (var S in f)
        if (!(!f.hasOwnProperty(S) || !f[S])) {
          var F = f[S];
          F = Array.isArray(F) ? F : [F];
          for (var T = 0; T < F.length; ++T) {
            if (E && E.cause == S + "," + T)
              return;
            var O = F[T], L = O.inside, ue = !!O.lookbehind, ee = !!O.greedy, ke = O.alias;
            if (ee && !O.pattern.global) {
              var Y = O.pattern.toString().match(/[imsuy]*$/)[0];
              O.pattern = RegExp(O.pattern.source, Y + "g");
            }
            for (var ce = O.pattern || O, q = b.next, G = D; q !== _.tail && !(E && G >= E.reach); G += q.value.length, q = q.next) {
              var me = q.value;
              if (_.length > h.length)
                return;
              if (!(me instanceof s)) {
                var w = 1, M;
                if (ee) {
                  if (M = c(ce, G, h, ue), !M || M.index >= h.length)
                    break;
                  var Fe = M.index, $e = M.index + M[0].length, X = G;
                  for (X += q.value.length; Fe >= X; )
                    q = q.next, X += q.value.length;
                  if (X -= q.value.length, G = X, q.value instanceof s)
                    continue;
                  for (var ge = q; ge !== _.tail && (X < $e || typeof ge.value == "string"); ge = ge.next)
                    w++, X += ge.value.length;
                  w--, me = h.slice(G, X), M.index -= G;
                } else if (M = c(ce, 0, me, ue), !M)
                  continue;
                var Fe = M.index, Se = M[0], C = me.slice(0, Fe), Ut = me.slice(Fe + Se.length), lt = G + me.length;
                E && lt > E.reach && (E.reach = lt);
                var Ue = q.prev;
                C && (Ue = p(_, Ue, C), G += C.length), m(_, Ue, w);
                var _i = new s(S, L ? l.tokenize(Se, L) : Se, ke, Se);
                if (q = p(_, Ue, _i), Ut && p(_, q, Ut), w > 1) {
                  var st = {
                    cause: S + "," + T,
                    reach: lt
                  };
                  d(h, _, f, q.prev, G, st), E && st.reach > E.reach && (E.reach = st.reach);
                }
              }
            }
          }
        }
    }
    function u() {
      var h = { value: null, prev: null, next: null }, _ = { value: null, prev: h, next: null };
      h.next = _, this.head = h, this.tail = _, this.length = 0;
    }
    function p(h, _, f) {
      var b = _.next, D = { value: f, prev: _, next: b };
      return _.next = D, b.prev = D, h.length++, D;
    }
    function m(h, _, f) {
      for (var b = _.next, D = 0; D < f && b !== h.tail; D++)
        b = b.next;
      _.next = b, b.prev = _, h.length -= D;
    }
    function g(h) {
      for (var _ = [], f = h.head.next; f !== h.tail; )
        _.push(f.value), f = f.next;
      return _;
    }
    if (!n.document)
      return n.addEventListener && (l.disableWorkerMessageHandler || n.addEventListener("message", function(h) {
        var _ = JSON.parse(h.data), f = _.language, b = _.code, D = _.immediateClose;
        n.postMessage(l.highlight(b, l.languages[f], f)), D && n.close();
      }, !1)), l;
    var v = l.util.currentScript();
    v && (l.filename = v.src, v.hasAttribute("data-manual") && (l.manual = !0));
    function y() {
      l.manual || l.highlightAll();
    }
    if (!l.manual) {
      var $ = document.readyState;
      $ === "loading" || $ === "interactive" && v && v.defer ? document.addEventListener("DOMContentLoaded", y) : window.requestAnimationFrame ? window.requestAnimationFrame(y) : window.setTimeout(y, 16);
    }
    return l;
  }(t);
  r.exports && (r.exports = e), typeof un < "u" && (un.Prism = e), e.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, e.languages.markup.tag.inside["attr-value"].inside.entity = e.languages.markup.entity, e.languages.markup.doctype.inside["internal-subset"].inside = e.languages.markup, e.hooks.add("wrap", function(n) {
    n.type === "entity" && (n.attributes.title = n.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(e.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(i, o) {
      var a = {};
      a["language-" + o] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: e.languages[o]
      }, a.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var l = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: a
        }
      };
      l["language-" + o] = {
        pattern: /[\s\S]+/,
        inside: e.languages[o]
      };
      var s = {};
      s[i] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return i;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: l
      }, e.languages.insertBefore("markup", "cdata", s);
    }
  }), Object.defineProperty(e.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(n, i) {
      e.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + n + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [i, "language-" + i],
                inside: e.languages[i]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), e.languages.html = e.languages.markup, e.languages.mathml = e.languages.markup, e.languages.svg = e.languages.markup, e.languages.xml = e.languages.extend("markup", {}), e.languages.ssml = e.languages.xml, e.languages.atom = e.languages.xml, e.languages.rss = e.languages.xml, function(n) {
    var i = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    n.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + i.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + i.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + i.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + i.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: i,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, n.languages.css.atrule.inside.rest = n.languages.css;
    var o = n.languages.markup;
    o && (o.tag.addInlined("style", "css"), o.tag.addAttribute("style", "css"));
  }(e), e.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, e.languages.javascript = e.languages.extend("clike", {
    "class-name": [
      e.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), e.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: e.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: e.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: e.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), e.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: e.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), e.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), e.languages.markup && (e.languages.markup.tag.addInlined("script", "javascript"), e.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), e.languages.js = e.languages.javascript, function() {
    if (typeof e > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var n = "Loading…", i = function(v, y) {
      return "✖ Error " + v + " while fetching file: " + y;
    }, o = "✖ Error: File does not exist or is empty", a = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, l = "data-src-status", s = "loading", c = "loaded", d = "failed", u = "pre[data-src]:not([" + l + '="' + c + '"]):not([' + l + '="' + s + '"])';
    function p(v, y, $) {
      var h = new XMLHttpRequest();
      h.open("GET", v, !0), h.onreadystatechange = function() {
        h.readyState == 4 && (h.status < 400 && h.responseText ? y(h.responseText) : h.status >= 400 ? $(i(h.status, h.statusText)) : $(o));
      }, h.send(null);
    }
    function m(v) {
      var y = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v || "");
      if (y) {
        var $ = Number(y[1]), h = y[2], _ = y[3];
        return h ? _ ? [$, Number(_)] : [$, void 0] : [$, $];
      }
    }
    e.hooks.add("before-highlightall", function(v) {
      v.selector += ", " + u;
    }), e.hooks.add("before-sanity-check", function(v) {
      var y = (
        /** @type {HTMLPreElement} */
        v.element
      );
      if (y.matches(u)) {
        v.code = "", y.setAttribute(l, s);
        var $ = y.appendChild(document.createElement("CODE"));
        $.textContent = n;
        var h = y.getAttribute("data-src"), _ = v.language;
        if (_ === "none") {
          var f = (/\.(\w+)$/.exec(h) || [, "none"])[1];
          _ = a[f] || f;
        }
        e.util.setLanguage($, _), e.util.setLanguage(y, _);
        var b = e.plugins.autoloader;
        b && b.loadLanguages(_), p(
          h,
          function(D) {
            y.setAttribute(l, c);
            var E = m(y.getAttribute("data-range"));
            if (E) {
              var S = D.split(/\r\n?|\n/g), F = E[0], T = E[1] == null ? S.length : E[1];
              F < 0 && (F += S.length), F = Math.max(0, Math.min(F - 1, S.length)), T < 0 && (T += S.length), T = Math.max(0, Math.min(T, S.length)), D = S.slice(F, T).join(`
`), y.hasAttribute("data-start") || y.setAttribute("data-start", String(F + 1));
            }
            $.textContent = D, e.highlightElement($);
          },
          function(D) {
            y.setAttribute(l, d), $.textContent = D;
          }
        );
      }
    }), e.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(y) {
        for (var $ = (y || document).querySelectorAll(u), h = 0, _; _ = $[h++]; )
          e.highlightElement(_);
      }
    };
    var g = !1;
    e.fileHighlight = function() {
      g || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), g = !0), e.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(Na);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(r) {
  var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i, e = {
    "equation-command": {
      pattern: t,
      alias: "regex"
    }
  };
  r.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: e,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: e,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: t,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, r.languages.tex = r.languages.latex, r.languages.context = r.languages.latex;
})(Prism);
(function(r) {
  var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", e = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, n = {
    bash: e,
    environment: {
      pattern: RegExp("\\$" + t),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + t),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  r.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: n
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: e
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: n
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: n.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + t),
      alias: "constant"
    },
    variable: n.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, e.inside = r.languages.bash;
  for (var i = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], o = n.variable[1].inside, a = 0; a < i.length; a++)
    o[i[a]] = r.languages.bash[i[a]];
  r.languages.sh = r.languages.bash, r.languages.shell = r.languages.bash;
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(r) {
  var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, e = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return t.source;
  });
  r.languages.cpp = r.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return t.source;
        })),
        lookbehind: !0
      },
      // This is intended to capture the class name of method implementations like:
      //   void foo::bar() const {}
      // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
      // it starts with an uppercase letter. This approximation should give decent results.
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      // This will capture the class name before destructors like:
      //   Foo::~Foo() {}
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      // This also intends to capture the class name of method implementations but here the class has template
      // parameters, so it can't be a namespace (until C++ adds generic namespaces).
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: t,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), r.languages.insertBefore("cpp", "string", {
    module: {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(
        /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
        /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
        /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return e;
        }) + ")"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  }), r.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: r.languages.cpp
        }
      }
    }
  }), r.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), r.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: r.languages.extend("cpp", {})
    }
  }), r.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, r.languages.cpp["base-clause"]);
})(Prism);
Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  comment: {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
Prism.languages.webmanifest = Prism.languages.json;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
(function(r) {
  var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, e = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, n = {
    pattern: RegExp(/(^|[^\w.])/.source + e + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: !0,
    inside: {
      namespace: {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /\./
    }
  };
  r.languages.java = r.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: !0,
      greedy: !0
    },
    "class-name": [
      n,
      {
        // variables, parameters, and constructor references
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(^|[^\w.])/.source + e + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
        lookbehind: !0,
        inside: n.inside
      },
      {
        // class names based on keyword
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + e + /[A-Z]\w*\b/.source),
        lookbehind: !0,
        inside: n.inside
      }
    ],
    keyword: t,
    function: [
      r.languages.clike.function,
      {
        pattern: /(::\s*)[a-z_]\w*/,
        lookbehind: !0
      }
    ],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    },
    constant: /\b[A-Z][A-Z_\d]+\b/
  }), r.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      // http://openjdk.java.net/jeps/355#Description
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: !0,
      alias: "string"
    },
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
      greedy: !0
    }
  }), r.languages.insertBefore("java", "class-name", {
    annotation: {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: !0,
      alias: "punctuation"
    },
    generics: {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        "class-name": n,
        keyword: t,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [
      {
        pattern: RegExp(/(\bimport\s+)/.source + e + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
        lookbehind: !0,
        inside: {
          namespace: n.inside.namespace,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      },
      {
        pattern: RegExp(/(\bimport\s+static\s+)/.source + e + /(?:\w+|\*)(?=\s*;)/.source),
        lookbehind: !0,
        alias: "static",
        inside: {
          namespace: n.inside.namespace,
          static: /\b\w+$/,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      }
    ],
    namespace: {
      pattern: RegExp(
        /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
          return t.source;
        })
      ),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
})(Prism);
Prism.languages.go = Prism.languages.extend("clike", {
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: !0,
    greedy: !0
  },
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|iota|nil|true)\b/,
  number: [
    // binary and octal integers
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    // hexadecimal integers and floats
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    // decimal integers and floats
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
  ],
  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
Prism.languages.insertBefore("go", "string", {
  char: {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: !0
  }
});
delete Prism.languages.go["class-name"];
(function(r) {
  for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, e = 0; e < 2; e++)
    t = t.replace(/<self>/g, function() {
      return t;
    });
  t = t.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), r.languages.rust = {
    comment: [
      {
        pattern: RegExp(/(^|[^\\])/.source + t),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
      greedy: !0
    },
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
      greedy: !0
    },
    attribute: {
      pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
      greedy: !0,
      alias: "attr-name",
      inside: {
        string: null
        // see below
      }
    },
    // Closure params should not be confused with bitwise OR |
    "closure-params": {
      pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "closure-punctuation": {
          pattern: /^\||\|$/,
          alias: "punctuation"
        },
        rest: null
        // see below
      }
    },
    "lifetime-annotation": {
      pattern: /'\w+/,
      alias: "symbol"
    },
    "fragment-specifier": {
      pattern: /(\$\w+:)[a-z]+/,
      lookbehind: !0,
      alias: "punctuation"
    },
    variable: /\$\w+/,
    "function-definition": {
      pattern: /(\bfn\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    "type-definition": {
      pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
      lookbehind: !0,
      alias: "class-name"
    },
    "module-declaration": [
      {
        pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
        lookbehind: !0,
        alias: "namespace"
      },
      {
        pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
        lookbehind: !0,
        alias: "namespace",
        inside: {
          punctuation: /::/
        }
      }
    ],
    keyword: [
      // https://github.com/rust-lang/reference/blob/master/src/keywords.md
      /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
      // primitives and str
      // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
      /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
    ],
    // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
    // and Rust's naming conventions recommend snake_case anyway.
    // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
    macro: {
      pattern: /\b\w+!/,
      alias: "property"
    },
    constant: /\b[A-Z_][A-Z_\d]+\b/,
    "class-name": /\b[A-Z]\w*\b/,
    namespace: {
      pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
      inside: {
        punctuation: /::/
      }
    },
    // Hex, oct, bin, dec numbers with visual separators and type suffix
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  }, r.languages.rust["closure-params"].inside.rest = r.languages.rust, r.languages.rust.attribute.inside.string = r.languages.rust.string;
})(Prism);
(function(r) {
  var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, e = [
    {
      pattern: /\b(?:false|true)\b/i,
      alias: "boolean"
    },
    {
      pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
      greedy: !0,
      lookbehind: !0
    },
    {
      pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
      greedy: !0,
      lookbehind: !0
    },
    /\b(?:null)\b/i,
    /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/
  ], n = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, i = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, o = /[{}\[\](),:;]/;
  r.languages.php = {
    delimiter: {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: "important"
    },
    comment: t,
    variable: /\$+(?:\w+\b|(?=\{))/,
    package: {
      pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    },
    "class-name-definition": {
      pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
      lookbehind: !0,
      alias: "class-name"
    },
    "function-definition": {
      pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
      lookbehind: !0,
      alias: "function"
    },
    keyword: [
      {
        pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
        alias: "type-casting",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
        alias: "type-declaration",
        greedy: !0
      },
      {
        pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
        alias: "type-declaration",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /\b(?:parent|self|static)(?=\s*::)/i,
        alias: "static-context",
        greedy: !0
      },
      {
        // yield from
        pattern: /(\byield\s+)from\b/i,
        lookbehind: !0
      },
      // `class` is always a keyword unlike other keywords
      /\bclass\b/i,
      {
        // https://www.php.net/manual/en/reserved.keywords.php
        //
        // keywords cannot be preceded by "->"
        // the complex lookbehind means `(?<!(?:->|::)\s*)`
        pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
        lookbehind: !0
      }
    ],
    "argument-name": {
      pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
      lookbehind: !0
    },
    "class-name": [
      {
        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
        greedy: !0
      },
      {
        pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*\$)/i,
        alias: "type-declaration",
        greedy: !0
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ["class-name-fully-qualified", "type-declaration"],
        greedy: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*::)/i,
        alias: "static-context",
        greedy: !0
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
        alias: ["class-name-fully-qualified", "static-context"],
        greedy: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ["class-name-fully-qualified", "type-hint"],
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: ["class-name-fully-qualified", "return-type"],
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      }
    ],
    constant: e,
    function: {
      pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    },
    property: {
      pattern: /(->\s*)\w+/,
      lookbehind: !0
    },
    number: n,
    operator: i,
    punctuation: o
  };
  var a = {
    pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
    lookbehind: !0,
    inside: r.languages.php
  }, l = [
    {
      pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
      alias: "nowdoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<'?|[';]$/
          }
        }
      }
    },
    {
      pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
      alias: "heredoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<"?|[";]$/
          }
        },
        interpolation: a
      }
    },
    {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      alias: "backtick-quoted-string",
      greedy: !0
    },
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      alias: "single-quoted-string",
      greedy: !0
    },
    {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      alias: "double-quoted-string",
      greedy: !0,
      inside: {
        interpolation: a
      }
    }
  ];
  r.languages.insertBefore("php", "variable", {
    string: l,
    attribute: {
      pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
      greedy: !0,
      inside: {
        "attribute-content": {
          pattern: /^(#\[)[\s\S]+(?=\]$)/,
          lookbehind: !0,
          // inside can appear subset of php
          inside: {
            comment: t,
            string: l,
            "attribute-class-name": [
              {
                pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                alias: "class-name",
                greedy: !0,
                lookbehind: !0
              },
              {
                pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                alias: [
                  "class-name",
                  "class-name-fully-qualified"
                ],
                greedy: !0,
                lookbehind: !0,
                inside: {
                  punctuation: /\\/
                }
              }
            ],
            constant: e,
            number: n,
            operator: i,
            punctuation: o
          }
        },
        delimiter: {
          pattern: /^#\[|\]$/,
          alias: "punctuation"
        }
      }
    }
  }), r.hooks.add("before-tokenize", function(s) {
    if (/<\?/.test(s.code)) {
      var c = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
      r.languages["markup-templating"].buildPlaceholders(s, "php", c);
    }
  }), r.hooks.add("after-tokenize", function(s) {
    r.languages["markup-templating"].tokenizePlaceholders(s, "php");
  });
})(Prism);
(function(r) {
  var t = /[*&][^\s[\]{},]+/, e = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, n = "(?:" + e.source + "(?:[ 	]+" + t.source + ")?|" + t.source + "(?:[ 	]+" + e.source + ")?)", i = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function a(l, s) {
    s = (s || "").replace(/m/g, "") + "m";
    var c = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return n;
    }).replace(/<<value>>/g, function() {
      return l;
    });
    return RegExp(c, s);
  }
  r.languages.yaml = {
    scalar: {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return n;
      })),
      lookbehind: !0,
      alias: "string"
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return n;
      }).replace(/<<key>>/g, function() {
        return "(?:" + i + "|" + o + ")";
      })),
      lookbehind: !0,
      greedy: !0,
      alias: "atrule"
    },
    directive: {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: !0,
      alias: "important"
    },
    datetime: {
      pattern: a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: !0,
      alias: "number"
    },
    boolean: {
      pattern: a(/false|true/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    null: {
      pattern: a(/null|~/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    string: {
      pattern: a(o),
      lookbehind: !0,
      greedy: !0
    },
    number: {
      pattern: a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: !0
    },
    tag: e,
    important: t,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
  }, r.languages.yml = r.languages.yaml;
})(Prism);
(function(r) {
  function t(e, n) {
    return "___" + e.toUpperCase() + n + "___";
  }
  Object.defineProperties(r.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function(e, n, i, o) {
        if (e.language === n) {
          var a = e.tokenStack = [];
          e.code = e.code.replace(i, function(l) {
            if (typeof o == "function" && !o(l))
              return l;
            for (var s = a.length, c; e.code.indexOf(c = t(n, s)) !== -1; )
              ++s;
            return a[s] = l, c;
          }), e.grammar = r.languages.markup;
        }
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function(e, n) {
        if (e.language !== n || !e.tokenStack)
          return;
        e.grammar = r.languages[n];
        var i = 0, o = Object.keys(e.tokenStack);
        function a(l) {
          for (var s = 0; s < l.length && !(i >= o.length); s++) {
            var c = l[s];
            if (typeof c == "string" || c.content && typeof c.content == "string") {
              var d = o[i], u = e.tokenStack[d], p = typeof c == "string" ? c : c.content, m = t(n, d), g = p.indexOf(m);
              if (g > -1) {
                ++i;
                var v = p.substring(0, g), y = new r.Token(n, r.tokenize(u, e.grammar), "language-" + n, u), $ = p.substring(g + m.length), h = [];
                v && h.push.apply(h, a([v])), h.push(y), $ && h.push.apply(h, a([$])), typeof c == "string" ? l.splice.apply(l, [s, 1].concat(h)) : c.content = h;
              }
            } else c.content && a(c.content);
          }
          return l;
        }
        a(e.tokens);
      }
    }
  });
})(Prism);
new ni();
const za = (r) => {
  const t = {};
  for (let e = 0, n = r.length; e < n; e++) {
    const i = r[e];
    for (const o in i)
      t[o] ? t[o] = t[o].concat(i[o]) : t[o] = i[o];
  }
  return t;
}, Pa = [
  "abbr",
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "alink",
  "allow",
  "allowfullscreen",
  "alt",
  "anchor",
  "archive",
  "as",
  "async",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "autopictureinpicture",
  "autoplay",
  "axis",
  "background",
  "behavior",
  "bgcolor",
  "border",
  "bordercolor",
  "capture",
  "cellpadding",
  "cellspacing",
  "challenge",
  "char",
  "charoff",
  "charset",
  "checked",
  "cite",
  "class",
  "classid",
  "clear",
  "code",
  "codebase",
  "codetype",
  "color",
  "cols",
  "colspan",
  "compact",
  "content",
  "contenteditable",
  "controls",
  "controlslist",
  "conversiondestination",
  "coords",
  "crossorigin",
  "csp",
  "data",
  "datetime",
  "declare",
  "decoding",
  "default",
  "defer",
  "dir",
  "direction",
  "dirname",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "disallowdocumentaccess",
  "download",
  "draggable",
  "elementtiming",
  "enctype",
  "end",
  "enterkeyhint",
  "event",
  "exportparts",
  "face",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "frame",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "hreftranslate",
  "hspace",
  "http-equiv",
  "id",
  "imagesizes",
  "imagesrcset",
  "importance",
  "impressiondata",
  "impressionexpiry",
  "incremental",
  "inert",
  "inputmode",
  "integrity",
  "invisible",
  "ismap",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "latencyhint",
  "leftmargin",
  "link",
  "list",
  "loading",
  "longdesc",
  "loop",
  "low",
  "lowsrc",
  "manifest",
  "marginheight",
  "marginwidth",
  "max",
  "maxlength",
  "mayscript",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nohref",
  "nomodule",
  "nonce",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "object",
  "open",
  "optimum",
  "part",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "policy",
  "poster",
  "preload",
  "pseudo",
  "readonly",
  "referrerpolicy",
  "rel",
  "reportingorigin",
  "required",
  "resources",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "rules",
  "sandbox",
  "scheme",
  "scope",
  "scopes",
  "scrollamount",
  "scrolldelay",
  "scrolling",
  "select",
  "selected",
  "shadowroot",
  "shadowrootdelegatesfocus",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srclang",
  "srcset",
  "standby",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "text",
  "title",
  "topmargin",
  "translate",
  "truespeed",
  "trusttoken",
  "type",
  "usemap",
  "valign",
  "value",
  "valuetype",
  "version",
  "virtualkeyboardpolicy",
  "vlink",
  "vspace",
  "webkitdirectory",
  "width",
  "wrap"
], Ma = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
], Ua = [
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
];
za([
  Object.fromEntries(Pa.map((r) => [r, ["*"]])),
  Object.fromEntries(Ma.map((r) => [r, ["svg:*"]])),
  Object.fromEntries(Ua.map((r) => [r, ["math:*"]]))
]);
const {
  HtmlTagHydration: Wr,
  SvelteComponent: Kr,
  attr: Qr,
  binding_callbacks: Jr,
  children: eo,
  claim_element: to,
  claim_html_tag: no,
  detach: io,
  element: ao,
  init: ro,
  insert_hydration: oo,
  noop: lo,
  safe_not_equal: so,
  toggle_class: uo
} = window.__gradio__svelte__internal, { afterUpdate: co, tick: _o, onMount: po } = window.__gradio__svelte__internal, {
  SvelteComponent: ho,
  attr: fo,
  children: mo,
  claim_component: go,
  claim_element: bo,
  create_component: vo,
  destroy_component: Do,
  detach: yo,
  element: $o,
  init: wo,
  insert_hydration: Fo,
  mount_component: Eo,
  safe_not_equal: ko,
  transition_in: Co,
  transition_out: Ao
} = window.__gradio__svelte__internal, {
  SvelteComponent: So,
  attr: To,
  check_outros: xo,
  children: Bo,
  claim_component: Io,
  claim_element: Ro,
  claim_space: qo,
  create_component: Lo,
  create_slot: Oo,
  destroy_component: No,
  detach: zo,
  element: Po,
  empty: Mo,
  get_all_dirty_from_scope: Uo,
  get_slot_changes: Ho,
  group_outros: Go,
  init: jo,
  insert_hydration: Zo,
  mount_component: Vo,
  safe_not_equal: Yo,
  space: Xo,
  toggle_class: Wo,
  transition_in: Ko,
  transition_out: Qo,
  update_slot_base: Jo
} = window.__gradio__svelte__internal, {
  SvelteComponent: el,
  append_hydration: tl,
  attr: nl,
  children: il,
  claim_component: al,
  claim_element: rl,
  claim_space: ol,
  claim_text: ll,
  create_component: sl,
  destroy_component: ul,
  detach: cl,
  element: dl,
  init: _l,
  insert_hydration: pl,
  mount_component: hl,
  safe_not_equal: fl,
  set_data: ml,
  space: gl,
  text: bl,
  toggle_class: vl,
  transition_in: Dl,
  transition_out: yl
} = window.__gradio__svelte__internal, {
  SvelteComponent: $l,
  assign: wl,
  children: Fl,
  claim_element: El,
  compute_rest_props: kl,
  create_slot: Cl,
  detach: Al,
  element: Sl,
  exclude_internal_props: Tl,
  get_all_dirty_from_scope: xl,
  get_slot_changes: Bl,
  get_spread_update: Il,
  init: Rl,
  insert_hydration: ql,
  listen: Ll,
  safe_not_equal: Ol,
  set_attributes: Nl,
  set_style: zl,
  toggle_class: Pl,
  transition_in: Ml,
  transition_out: Ul,
  update_slot_base: Hl
} = window.__gradio__svelte__internal, { createEventDispatcher: Gl } = window.__gradio__svelte__internal, {
  SvelteComponent: Ha,
  append_hydration: Je,
  attr: we,
  bubble: Ga,
  check_outros: ja,
  children: yt,
  claim_component: Za,
  claim_element: $t,
  claim_space: cn,
  claim_text: Va,
  construct_svelte_component: dn,
  create_component: _n,
  create_slot: Ya,
  destroy_component: pn,
  detach: Ne,
  element: wt,
  get_all_dirty_from_scope: Xa,
  get_slot_changes: Wa,
  group_outros: Ka,
  init: Qa,
  insert_hydration: ii,
  listen: Ja,
  mount_component: hn,
  safe_not_equal: er,
  set_data: tr,
  set_style: xe,
  space: fn,
  text: nr,
  toggle_class: U,
  transition_in: _t,
  transition_out: pt,
  update_slot_base: ir
} = window.__gradio__svelte__internal;
function mn(r) {
  let t, e;
  return {
    c() {
      t = wt("span"), e = nr(
        /*label*/
        r[1]
      ), this.h();
    },
    l(n) {
      t = $t(n, "SPAN", { class: !0 });
      var i = yt(t);
      e = Va(
        i,
        /*label*/
        r[1]
      ), i.forEach(Ne), this.h();
    },
    h() {
      we(t, "class", "svelte-y0enk4");
    },
    m(n, i) {
      ii(n, t, i), Je(t, e);
    },
    p(n, i) {
      i & /*label*/
      2 && tr(
        e,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Ne(t);
    }
  };
}
function ar(r) {
  let t, e, n, i, o, a, l, s, c = (
    /*show_label*/
    r[2] && mn(r)
  );
  var d = (
    /*Icon*/
    r[0]
  );
  function u(g, v) {
    return {};
  }
  d && (i = dn(d, u()));
  const p = (
    /*#slots*/
    r[15].default
  ), m = Ya(
    p,
    r,
    /*$$scope*/
    r[14],
    null
  );
  return {
    c() {
      t = wt("button"), c && c.c(), e = fn(), n = wt("div"), i && _n(i.$$.fragment), o = fn(), m && m.c(), this.h();
    },
    l(g) {
      t = $t(g, "BUTTON", {
        class: !0,
        "aria-label": !0,
        "aria-haspopup": !0,
        title: !0
      });
      var v = yt(t);
      c && c.l(v), e = cn(v), n = $t(v, "DIV", { class: !0 });
      var y = yt(n);
      i && Za(i.$$.fragment, y), o = cn(y), m && m.l(y), y.forEach(Ne), v.forEach(Ne), this.h();
    },
    h() {
      we(n, "class", "svelte-y0enk4"), U(
        n,
        "x-small",
        /*size*/
        r[4] === "x-small"
      ), U(
        n,
        "small",
        /*size*/
        r[4] === "small"
      ), U(
        n,
        "large",
        /*size*/
        r[4] === "large"
      ), U(
        n,
        "medium",
        /*size*/
        r[4] === "medium"
      ), we(t, "class", "icon-button svelte-y0enk4"), t.disabled = /*disabled*/
      r[7], we(
        t,
        "aria-label",
        /*label*/
        r[1]
      ), we(
        t,
        "aria-haspopup",
        /*hasPopup*/
        r[8]
      ), we(
        t,
        "title",
        /*label*/
        r[1]
      ), U(
        t,
        "pending",
        /*pending*/
        r[3]
      ), U(
        t,
        "padded",
        /*padded*/
        r[5]
      ), U(
        t,
        "highlight",
        /*highlight*/
        r[6]
      ), U(
        t,
        "transparent",
        /*transparent*/
        r[9]
      ), xe(
        t,
        "--border-color",
        /*border*/
        r[11]
      ), xe(t, "color", !/*disabled*/
      r[7] && /*_color*/
      r[12] ? (
        /*_color*/
        r[12]
      ) : "var(--block-label-text-color)"), xe(t, "--bg-color", /*disabled*/
      r[7] ? "auto" : (
        /*background*/
        r[10]
      ));
    },
    m(g, v) {
      ii(g, t, v), c && c.m(t, null), Je(t, e), Je(t, n), i && hn(i, n, null), Je(n, o), m && m.m(n, null), a = !0, l || (s = Ja(
        t,
        "click",
        /*click_handler*/
        r[16]
      ), l = !0);
    },
    p(g, [v]) {
      if (/*show_label*/
      g[2] ? c ? c.p(g, v) : (c = mn(g), c.c(), c.m(t, e)) : c && (c.d(1), c = null), v & /*Icon*/
      1 && d !== (d = /*Icon*/
      g[0])) {
        if (i) {
          Ka();
          const y = i;
          pt(y.$$.fragment, 1, 0, () => {
            pn(y, 1);
          }), ja();
        }
        d ? (i = dn(d, u()), _n(i.$$.fragment), _t(i.$$.fragment, 1), hn(i, n, o)) : i = null;
      }
      m && m.p && (!a || v & /*$$scope*/
      16384) && ir(
        m,
        p,
        g,
        /*$$scope*/
        g[14],
        a ? Wa(
          p,
          /*$$scope*/
          g[14],
          v,
          null
        ) : Xa(
          /*$$scope*/
          g[14]
        ),
        null
      ), (!a || v & /*size*/
      16) && U(
        n,
        "x-small",
        /*size*/
        g[4] === "x-small"
      ), (!a || v & /*size*/
      16) && U(
        n,
        "small",
        /*size*/
        g[4] === "small"
      ), (!a || v & /*size*/
      16) && U(
        n,
        "large",
        /*size*/
        g[4] === "large"
      ), (!a || v & /*size*/
      16) && U(
        n,
        "medium",
        /*size*/
        g[4] === "medium"
      ), (!a || v & /*disabled*/
      128) && (t.disabled = /*disabled*/
      g[7]), (!a || v & /*label*/
      2) && we(
        t,
        "aria-label",
        /*label*/
        g[1]
      ), (!a || v & /*hasPopup*/
      256) && we(
        t,
        "aria-haspopup",
        /*hasPopup*/
        g[8]
      ), (!a || v & /*label*/
      2) && we(
        t,
        "title",
        /*label*/
        g[1]
      ), (!a || v & /*pending*/
      8) && U(
        t,
        "pending",
        /*pending*/
        g[3]
      ), (!a || v & /*padded*/
      32) && U(
        t,
        "padded",
        /*padded*/
        g[5]
      ), (!a || v & /*highlight*/
      64) && U(
        t,
        "highlight",
        /*highlight*/
        g[6]
      ), (!a || v & /*transparent*/
      512) && U(
        t,
        "transparent",
        /*transparent*/
        g[9]
      ), v & /*border*/
      2048 && xe(
        t,
        "--border-color",
        /*border*/
        g[11]
      ), v & /*disabled, _color*/
      4224 && xe(t, "color", !/*disabled*/
      g[7] && /*_color*/
      g[12] ? (
        /*_color*/
        g[12]
      ) : "var(--block-label-text-color)"), v & /*disabled, background*/
      1152 && xe(t, "--bg-color", /*disabled*/
      g[7] ? "auto" : (
        /*background*/
        g[10]
      ));
    },
    i(g) {
      a || (i && _t(i.$$.fragment, g), _t(m, g), a = !0);
    },
    o(g) {
      i && pt(i.$$.fragment, g), pt(m, g), a = !1;
    },
    d(g) {
      g && Ne(t), c && c.d(), i && pn(i), m && m.d(g), l = !1, s();
    }
  };
}
function rr(r, t, e) {
  let n, { $$slots: i = {}, $$scope: o } = t, { Icon: a } = t, { label: l = "" } = t, { show_label: s = !1 } = t, { pending: c = !1 } = t, { size: d = "small" } = t, { padded: u = !0 } = t, { highlight: p = !1 } = t, { disabled: m = !1 } = t, { hasPopup: g = !1 } = t, { color: v = "var(--block-label-text-color)" } = t, { transparent: y = !1 } = t, { background: $ = "var(--block-background-fill)" } = t, { border: h = "transparent" } = t;
  function _(f) {
    Ga.call(this, r, f);
  }
  return r.$$set = (f) => {
    "Icon" in f && e(0, a = f.Icon), "label" in f && e(1, l = f.label), "show_label" in f && e(2, s = f.show_label), "pending" in f && e(3, c = f.pending), "size" in f && e(4, d = f.size), "padded" in f && e(5, u = f.padded), "highlight" in f && e(6, p = f.highlight), "disabled" in f && e(7, m = f.disabled), "hasPopup" in f && e(8, g = f.hasPopup), "color" in f && e(13, v = f.color), "transparent" in f && e(9, y = f.transparent), "background" in f && e(10, $ = f.background), "border" in f && e(11, h = f.border), "$$scope" in f && e(14, o = f.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty & /*highlight, color*/
    8256 && e(12, n = p ? "var(--color-accent)" : v);
  }, [
    a,
    l,
    s,
    c,
    d,
    u,
    p,
    m,
    g,
    y,
    $,
    h,
    n,
    v,
    o,
    i,
    _
  ];
}
class ai extends Ha {
  constructor(t) {
    super(), Qa(this, t, rr, ar, er, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 13,
      transparent: 9,
      background: 10,
      border: 11
    });
  }
}
const {
  SvelteComponent: jl,
  append_hydration: Zl,
  attr: Vl,
  binding_callbacks: Yl,
  children: Xl,
  claim_element: Wl,
  create_slot: Kl,
  detach: Ql,
  element: Jl,
  get_all_dirty_from_scope: es,
  get_slot_changes: ts,
  init: ns,
  insert_hydration: is,
  safe_not_equal: as,
  toggle_class: rs,
  transition_in: os,
  transition_out: ls,
  update_slot_base: ss
} = window.__gradio__svelte__internal, {
  SvelteComponent: us,
  append_hydration: cs,
  attr: ds,
  children: _s,
  claim_svg_element: ps,
  detach: hs,
  init: fs,
  insert_hydration: ms,
  noop: gs,
  safe_not_equal: bs,
  svg_element: vs
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ds,
  append_hydration: ys,
  attr: $s,
  children: ws,
  claim_svg_element: Fs,
  detach: Es,
  init: ks,
  insert_hydration: Cs,
  noop: As,
  safe_not_equal: Ss,
  svg_element: Ts
} = window.__gradio__svelte__internal, {
  SvelteComponent: xs,
  append_hydration: Bs,
  attr: Is,
  children: Rs,
  claim_svg_element: qs,
  detach: Ls,
  init: Os,
  insert_hydration: Ns,
  noop: zs,
  safe_not_equal: Ps,
  svg_element: Ms
} = window.__gradio__svelte__internal, {
  SvelteComponent: Us,
  append_hydration: Hs,
  attr: Gs,
  children: js,
  claim_svg_element: Zs,
  detach: Vs,
  init: Ys,
  insert_hydration: Xs,
  noop: Ws,
  safe_not_equal: Ks,
  svg_element: Qs
} = window.__gradio__svelte__internal, {
  SvelteComponent: Js,
  append_hydration: eu,
  attr: tu,
  children: nu,
  claim_svg_element: iu,
  detach: au,
  init: ru,
  insert_hydration: ou,
  noop: lu,
  safe_not_equal: su,
  svg_element: uu
} = window.__gradio__svelte__internal, {
  SvelteComponent: cu,
  append_hydration: du,
  attr: _u,
  children: pu,
  claim_svg_element: hu,
  detach: fu,
  init: mu,
  insert_hydration: gu,
  noop: bu,
  safe_not_equal: vu,
  svg_element: Du
} = window.__gradio__svelte__internal, {
  SvelteComponent: yu,
  append_hydration: $u,
  attr: wu,
  children: Fu,
  claim_svg_element: Eu,
  detach: ku,
  init: Cu,
  insert_hydration: Au,
  noop: Su,
  safe_not_equal: Tu,
  svg_element: xu
} = window.__gradio__svelte__internal, {
  SvelteComponent: Bu,
  append_hydration: Iu,
  attr: Ru,
  children: qu,
  claim_svg_element: Lu,
  detach: Ou,
  init: Nu,
  insert_hydration: zu,
  noop: Pu,
  safe_not_equal: Mu,
  svg_element: Uu
} = window.__gradio__svelte__internal, {
  SvelteComponent: Hu,
  append_hydration: Gu,
  attr: ju,
  children: Zu,
  claim_svg_element: Vu,
  detach: Yu,
  init: Xu,
  insert_hydration: Wu,
  noop: Ku,
  safe_not_equal: Qu,
  svg_element: Ju
} = window.__gradio__svelte__internal, {
  SvelteComponent: ec,
  append_hydration: tc,
  attr: nc,
  children: ic,
  claim_svg_element: ac,
  detach: rc,
  init: oc,
  insert_hydration: lc,
  noop: sc,
  safe_not_equal: uc,
  svg_element: cc
} = window.__gradio__svelte__internal, {
  SvelteComponent: dc,
  append_hydration: _c,
  attr: pc,
  children: hc,
  claim_svg_element: fc,
  detach: mc,
  init: gc,
  insert_hydration: bc,
  noop: vc,
  safe_not_equal: Dc,
  svg_element: yc
} = window.__gradio__svelte__internal, {
  SvelteComponent: $c,
  append_hydration: wc,
  attr: Fc,
  children: Ec,
  claim_svg_element: kc,
  detach: Cc,
  init: Ac,
  insert_hydration: Sc,
  noop: Tc,
  safe_not_equal: xc,
  svg_element: Bc
} = window.__gradio__svelte__internal, {
  SvelteComponent: or,
  append_hydration: ht,
  attr: he,
  children: Ve,
  claim_svg_element: Ye,
  detach: qe,
  init: lr,
  insert_hydration: sr,
  noop: ft,
  safe_not_equal: ur,
  set_style: be,
  svg_element: Xe
} = window.__gradio__svelte__internal;
function cr(r) {
  let t, e, n, i;
  return {
    c() {
      t = Xe("svg"), e = Xe("g"), n = Xe("path"), i = Xe("path"), this.h();
    },
    l(o) {
      t = Ye(o, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        version: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
        "xml:space": !0,
        stroke: !0,
        style: !0
      });
      var a = Ve(t);
      e = Ye(a, "g", { transform: !0 });
      var l = Ve(e);
      n = Ye(l, "path", { d: !0, style: !0 }), Ve(n).forEach(qe), l.forEach(qe), i = Ye(a, "path", { d: !0, style: !0 }), Ve(i).forEach(qe), a.forEach(qe), this.h();
    },
    h() {
      he(n, "d", "M18,6L6.087,17.913"), be(n, "fill", "none"), be(n, "fill-rule", "nonzero"), be(n, "stroke-width", "2px"), he(e, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), he(i, "d", "M4.364,4.364L19.636,19.636"), be(i, "fill", "none"), be(i, "fill-rule", "nonzero"), be(i, "stroke-width", "2px"), he(t, "width", "100%"), he(t, "height", "100%"), he(t, "viewBox", "0 0 24 24"), he(t, "version", "1.1"), he(t, "xmlns", "http://www.w3.org/2000/svg"), he(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), he(t, "xml:space", "preserve"), he(t, "stroke", "currentColor"), be(t, "fill-rule", "evenodd"), be(t, "clip-rule", "evenodd"), be(t, "stroke-linecap", "round"), be(t, "stroke-linejoin", "round");
    },
    m(o, a) {
      sr(o, t, a), ht(t, e), ht(e, n), ht(t, i);
    },
    p: ft,
    i: ft,
    o: ft,
    d(o) {
      o && qe(t);
    }
  };
}
class ri extends or {
  constructor(t) {
    super(), lr(this, t, null, cr, ur, {});
  }
}
const {
  SvelteComponent: Ic,
  append_hydration: Rc,
  attr: qc,
  children: Lc,
  claim_svg_element: Oc,
  claim_text: Nc,
  detach: zc,
  init: Pc,
  insert_hydration: Mc,
  noop: Uc,
  safe_not_equal: Hc,
  svg_element: Gc,
  text: jc
} = window.__gradio__svelte__internal, {
  SvelteComponent: Zc,
  append_hydration: Vc,
  attr: Yc,
  children: Xc,
  claim_svg_element: Wc,
  detach: Kc,
  init: Qc,
  insert_hydration: Jc,
  noop: ed,
  safe_not_equal: td,
  svg_element: nd
} = window.__gradio__svelte__internal, {
  SvelteComponent: id,
  append_hydration: ad,
  attr: rd,
  children: od,
  claim_svg_element: ld,
  detach: sd,
  init: ud,
  insert_hydration: cd,
  noop: dd,
  safe_not_equal: _d,
  svg_element: pd
} = window.__gradio__svelte__internal, {
  SvelteComponent: hd,
  append_hydration: fd,
  attr: md,
  children: gd,
  claim_svg_element: bd,
  detach: vd,
  init: Dd,
  insert_hydration: yd,
  noop: $d,
  safe_not_equal: wd,
  svg_element: Fd
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ed,
  append_hydration: kd,
  attr: Cd,
  children: Ad,
  claim_svg_element: Sd,
  detach: Td,
  init: xd,
  insert_hydration: Bd,
  noop: Id,
  safe_not_equal: Rd,
  svg_element: qd
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ld,
  append_hydration: Od,
  attr: Nd,
  children: zd,
  claim_svg_element: Pd,
  detach: Md,
  init: Ud,
  insert_hydration: Hd,
  noop: Gd,
  safe_not_equal: jd,
  svg_element: Zd
} = window.__gradio__svelte__internal, {
  SvelteComponent: Vd,
  append_hydration: Yd,
  attr: Xd,
  children: Wd,
  claim_svg_element: Kd,
  detach: Qd,
  init: Jd,
  insert_hydration: e_,
  noop: t_,
  safe_not_equal: n_,
  svg_element: i_
} = window.__gradio__svelte__internal, {
  SvelteComponent: a_,
  append_hydration: r_,
  attr: o_,
  children: l_,
  claim_svg_element: s_,
  detach: u_,
  init: c_,
  insert_hydration: d_,
  noop: __,
  safe_not_equal: p_,
  svg_element: h_
} = window.__gradio__svelte__internal, {
  SvelteComponent: f_,
  append_hydration: m_,
  attr: g_,
  children: b_,
  claim_svg_element: v_,
  detach: D_,
  init: y_,
  insert_hydration: $_,
  noop: w_,
  safe_not_equal: F_,
  svg_element: E_
} = window.__gradio__svelte__internal, {
  SvelteComponent: k_,
  append_hydration: C_,
  attr: A_,
  children: S_,
  claim_svg_element: T_,
  detach: x_,
  init: B_,
  insert_hydration: I_,
  noop: R_,
  safe_not_equal: q_,
  svg_element: L_
} = window.__gradio__svelte__internal, {
  SvelteComponent: O_,
  append_hydration: N_,
  attr: z_,
  children: P_,
  claim_svg_element: M_,
  detach: U_,
  init: H_,
  insert_hydration: G_,
  noop: j_,
  safe_not_equal: Z_,
  svg_element: V_
} = window.__gradio__svelte__internal, {
  SvelteComponent: Y_,
  append_hydration: X_,
  attr: W_,
  children: K_,
  claim_svg_element: Q_,
  detach: J_,
  init: ep,
  insert_hydration: tp,
  noop: np,
  safe_not_equal: ip,
  svg_element: ap
} = window.__gradio__svelte__internal, {
  SvelteComponent: rp,
  append_hydration: op,
  attr: lp,
  children: sp,
  claim_svg_element: up,
  detach: cp,
  init: dp,
  insert_hydration: _p,
  noop: pp,
  safe_not_equal: hp,
  svg_element: fp
} = window.__gradio__svelte__internal, {
  SvelteComponent: mp,
  append_hydration: gp,
  attr: bp,
  children: vp,
  claim_svg_element: Dp,
  detach: yp,
  init: $p,
  insert_hydration: wp,
  noop: Fp,
  safe_not_equal: Ep,
  svg_element: kp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Cp,
  append_hydration: Ap,
  attr: Sp,
  children: Tp,
  claim_svg_element: xp,
  detach: Bp,
  init: Ip,
  insert_hydration: Rp,
  noop: qp,
  safe_not_equal: Lp,
  svg_element: Op
} = window.__gradio__svelte__internal, {
  SvelteComponent: Np,
  append_hydration: zp,
  attr: Pp,
  children: Mp,
  claim_svg_element: Up,
  detach: Hp,
  init: Gp,
  insert_hydration: jp,
  noop: Zp,
  safe_not_equal: Vp,
  svg_element: Yp
} = window.__gradio__svelte__internal, {
  SvelteComponent: Xp,
  append_hydration: Wp,
  attr: Kp,
  children: Qp,
  claim_svg_element: Jp,
  detach: eh,
  init: th,
  insert_hydration: nh,
  noop: ih,
  safe_not_equal: ah,
  svg_element: rh
} = window.__gradio__svelte__internal, {
  SvelteComponent: oh,
  append_hydration: lh,
  attr: sh,
  children: uh,
  claim_svg_element: ch,
  detach: dh,
  init: _h,
  insert_hydration: ph,
  noop: hh,
  safe_not_equal: fh,
  svg_element: mh
} = window.__gradio__svelte__internal, {
  SvelteComponent: gh,
  append_hydration: bh,
  attr: vh,
  children: Dh,
  claim_svg_element: yh,
  detach: $h,
  init: wh,
  insert_hydration: Fh,
  noop: Eh,
  safe_not_equal: kh,
  svg_element: Ch
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ah,
  append_hydration: Sh,
  attr: Th,
  children: xh,
  claim_svg_element: Bh,
  detach: Ih,
  init: Rh,
  insert_hydration: qh,
  noop: Lh,
  safe_not_equal: Oh,
  svg_element: Nh
} = window.__gradio__svelte__internal, {
  SvelteComponent: zh,
  append_hydration: Ph,
  attr: Mh,
  children: Uh,
  claim_svg_element: Hh,
  detach: Gh,
  init: jh,
  insert_hydration: Zh,
  noop: Vh,
  safe_not_equal: Yh,
  svg_element: Xh
} = window.__gradio__svelte__internal, {
  SvelteComponent: Wh,
  append_hydration: Kh,
  attr: Qh,
  children: Jh,
  claim_svg_element: ef,
  detach: tf,
  init: nf,
  insert_hydration: af,
  noop: rf,
  safe_not_equal: of,
  svg_element: lf
} = window.__gradio__svelte__internal, {
  SvelteComponent: sf,
  append_hydration: uf,
  attr: cf,
  children: df,
  claim_svg_element: _f,
  detach: pf,
  init: hf,
  insert_hydration: ff,
  noop: mf,
  safe_not_equal: gf,
  svg_element: bf
} = window.__gradio__svelte__internal, {
  SvelteComponent: vf,
  append_hydration: Df,
  attr: yf,
  children: $f,
  claim_svg_element: wf,
  detach: Ff,
  init: Ef,
  insert_hydration: kf,
  noop: Cf,
  safe_not_equal: Af,
  svg_element: Sf
} = window.__gradio__svelte__internal, {
  SvelteComponent: Tf,
  append_hydration: xf,
  attr: Bf,
  children: If,
  claim_svg_element: Rf,
  detach: qf,
  init: Lf,
  insert_hydration: Of,
  noop: Nf,
  safe_not_equal: zf,
  svg_element: Pf
} = window.__gradio__svelte__internal, {
  SvelteComponent: Mf,
  append_hydration: Uf,
  attr: Hf,
  children: Gf,
  claim_svg_element: jf,
  detach: Zf,
  init: Vf,
  insert_hydration: Yf,
  noop: Xf,
  safe_not_equal: Wf,
  svg_element: Kf
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qf,
  append_hydration: Jf,
  attr: em,
  children: tm,
  claim_svg_element: nm,
  detach: im,
  init: am,
  insert_hydration: rm,
  noop: om,
  safe_not_equal: lm,
  svg_element: sm
} = window.__gradio__svelte__internal, {
  SvelteComponent: um,
  append_hydration: cm,
  attr: dm,
  children: _m,
  claim_svg_element: pm,
  detach: hm,
  init: fm,
  insert_hydration: mm,
  noop: gm,
  safe_not_equal: bm,
  svg_element: vm
} = window.__gradio__svelte__internal, {
  SvelteComponent: Dm,
  append_hydration: ym,
  attr: $m,
  children: wm,
  claim_svg_element: Fm,
  detach: Em,
  init: km,
  insert_hydration: Cm,
  noop: Am,
  safe_not_equal: Sm,
  svg_element: Tm
} = window.__gradio__svelte__internal, {
  SvelteComponent: xm,
  append_hydration: Bm,
  attr: Im,
  children: Rm,
  claim_svg_element: qm,
  detach: Lm,
  init: Om,
  insert_hydration: Nm,
  noop: zm,
  safe_not_equal: Pm,
  svg_element: Mm
} = window.__gradio__svelte__internal, {
  SvelteComponent: Um,
  append_hydration: Hm,
  attr: Gm,
  children: jm,
  claim_svg_element: Zm,
  detach: Vm,
  init: Ym,
  insert_hydration: Xm,
  noop: Wm,
  safe_not_equal: Km,
  svg_element: Qm
} = window.__gradio__svelte__internal, {
  SvelteComponent: Jm,
  append_hydration: eg,
  attr: tg,
  children: ng,
  claim_svg_element: ig,
  detach: ag,
  init: rg,
  insert_hydration: og,
  noop: lg,
  safe_not_equal: sg,
  svg_element: ug
} = window.__gradio__svelte__internal, {
  SvelteComponent: cg,
  append_hydration: dg,
  attr: _g,
  children: pg,
  claim_svg_element: hg,
  detach: fg,
  init: mg,
  insert_hydration: gg,
  noop: bg,
  safe_not_equal: vg,
  svg_element: Dg
} = window.__gradio__svelte__internal, {
  SvelteComponent: yg,
  append_hydration: $g,
  attr: wg,
  children: Fg,
  claim_svg_element: Eg,
  detach: kg,
  init: Cg,
  insert_hydration: Ag,
  noop: Sg,
  safe_not_equal: Tg,
  svg_element: xg
} = window.__gradio__svelte__internal, {
  SvelteComponent: Bg,
  append_hydration: Ig,
  attr: Rg,
  children: qg,
  claim_svg_element: Lg,
  detach: Og,
  init: Ng,
  insert_hydration: zg,
  noop: Pg,
  safe_not_equal: Mg,
  set_style: Ug,
  svg_element: Hg
} = window.__gradio__svelte__internal, {
  SvelteComponent: Gg,
  append_hydration: jg,
  attr: Zg,
  children: Vg,
  claim_svg_element: Yg,
  detach: Xg,
  init: Wg,
  insert_hydration: Kg,
  noop: Qg,
  safe_not_equal: Jg,
  svg_element: e0
} = window.__gradio__svelte__internal, {
  SvelteComponent: t0,
  append_hydration: n0,
  attr: i0,
  children: a0,
  claim_svg_element: r0,
  detach: o0,
  init: l0,
  insert_hydration: s0,
  noop: u0,
  safe_not_equal: c0,
  svg_element: d0
} = window.__gradio__svelte__internal, {
  SvelteComponent: _0,
  append_hydration: p0,
  attr: h0,
  children: f0,
  claim_svg_element: m0,
  detach: g0,
  init: b0,
  insert_hydration: v0,
  noop: D0,
  safe_not_equal: y0,
  svg_element: $0
} = window.__gradio__svelte__internal, {
  SvelteComponent: w0,
  append_hydration: F0,
  attr: E0,
  children: k0,
  claim_svg_element: C0,
  detach: A0,
  init: S0,
  insert_hydration: T0,
  noop: x0,
  safe_not_equal: B0,
  svg_element: I0
} = window.__gradio__svelte__internal, {
  SvelteComponent: R0,
  append_hydration: q0,
  attr: L0,
  children: O0,
  claim_svg_element: N0,
  detach: z0,
  init: P0,
  insert_hydration: M0,
  noop: U0,
  safe_not_equal: H0,
  svg_element: G0
} = window.__gradio__svelte__internal, {
  SvelteComponent: j0,
  append_hydration: Z0,
  attr: V0,
  children: Y0,
  claim_svg_element: X0,
  detach: W0,
  init: K0,
  insert_hydration: Q0,
  noop: J0,
  safe_not_equal: e1,
  svg_element: t1
} = window.__gradio__svelte__internal, {
  SvelteComponent: n1,
  append_hydration: i1,
  attr: a1,
  children: r1,
  claim_svg_element: o1,
  detach: l1,
  init: s1,
  insert_hydration: u1,
  noop: c1,
  safe_not_equal: d1,
  svg_element: _1
} = window.__gradio__svelte__internal, {
  SvelteComponent: p1,
  append_hydration: h1,
  attr: f1,
  children: m1,
  claim_svg_element: g1,
  detach: b1,
  init: v1,
  insert_hydration: D1,
  noop: y1,
  safe_not_equal: $1,
  svg_element: w1
} = window.__gradio__svelte__internal, {
  SvelteComponent: F1,
  append_hydration: E1,
  attr: k1,
  children: C1,
  claim_svg_element: A1,
  claim_text: S1,
  detach: T1,
  init: x1,
  insert_hydration: B1,
  noop: I1,
  safe_not_equal: R1,
  svg_element: q1,
  text: L1
} = window.__gradio__svelte__internal, {
  SvelteComponent: O1,
  append_hydration: N1,
  attr: z1,
  children: P1,
  claim_svg_element: M1,
  detach: U1,
  init: H1,
  insert_hydration: G1,
  noop: j1,
  safe_not_equal: Z1,
  svg_element: V1
} = window.__gradio__svelte__internal, {
  SvelteComponent: Y1,
  append_hydration: X1,
  attr: W1,
  children: K1,
  claim_svg_element: Q1,
  detach: J1,
  init: eb,
  insert_hydration: tb,
  noop: nb,
  safe_not_equal: ib,
  svg_element: ab
} = window.__gradio__svelte__internal, {
  SvelteComponent: rb,
  append_hydration: ob,
  attr: lb,
  children: sb,
  claim_svg_element: ub,
  detach: cb,
  init: db,
  insert_hydration: _b,
  noop: pb,
  safe_not_equal: hb,
  svg_element: fb
} = window.__gradio__svelte__internal, {
  SvelteComponent: mb,
  append_hydration: gb,
  attr: bb,
  children: vb,
  claim_svg_element: Db,
  detach: yb,
  init: $b,
  insert_hydration: wb,
  noop: Fb,
  safe_not_equal: Eb,
  svg_element: kb
} = window.__gradio__svelte__internal, {
  SvelteComponent: Cb,
  append_hydration: Ab,
  attr: Sb,
  children: Tb,
  claim_svg_element: xb,
  detach: Bb,
  init: Ib,
  insert_hydration: Rb,
  noop: qb,
  safe_not_equal: Lb,
  svg_element: Ob
} = window.__gradio__svelte__internal, {
  SvelteComponent: Nb,
  append_hydration: zb,
  attr: Pb,
  children: Mb,
  claim_svg_element: Ub,
  detach: Hb,
  init: Gb,
  insert_hydration: jb,
  noop: Zb,
  safe_not_equal: Vb,
  svg_element: Yb
} = window.__gradio__svelte__internal, {
  SvelteComponent: Xb,
  append_hydration: Wb,
  attr: Kb,
  children: Qb,
  claim_svg_element: Jb,
  detach: ev,
  init: tv,
  insert_hydration: nv,
  noop: iv,
  safe_not_equal: av,
  svg_element: rv
} = window.__gradio__svelte__internal, {
  SvelteComponent: ov,
  append_hydration: lv,
  attr: sv,
  children: uv,
  claim_svg_element: cv,
  claim_text: dv,
  detach: _v,
  init: pv,
  insert_hydration: hv,
  noop: fv,
  safe_not_equal: mv,
  svg_element: gv,
  text: bv
} = window.__gradio__svelte__internal, {
  SvelteComponent: vv,
  append_hydration: Dv,
  attr: yv,
  children: $v,
  claim_svg_element: wv,
  claim_text: Fv,
  detach: Ev,
  init: kv,
  insert_hydration: Cv,
  noop: Av,
  safe_not_equal: Sv,
  svg_element: Tv,
  text: xv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Bv,
  append_hydration: Iv,
  attr: Rv,
  children: qv,
  claim_svg_element: Lv,
  claim_text: Ov,
  detach: Nv,
  init: zv,
  insert_hydration: Pv,
  noop: Mv,
  safe_not_equal: Uv,
  svg_element: Hv,
  text: Gv
} = window.__gradio__svelte__internal, {
  SvelteComponent: jv,
  append_hydration: Zv,
  attr: Vv,
  children: Yv,
  claim_svg_element: Xv,
  detach: Wv,
  init: Kv,
  insert_hydration: Qv,
  noop: Jv,
  safe_not_equal: eD,
  svg_element: tD
} = window.__gradio__svelte__internal, {
  SvelteComponent: nD,
  append_hydration: iD,
  attr: aD,
  children: rD,
  claim_svg_element: oD,
  detach: lD,
  init: sD,
  insert_hydration: uD,
  noop: cD,
  safe_not_equal: dD,
  svg_element: _D
} = window.__gradio__svelte__internal, {
  SvelteComponent: pD,
  append_hydration: hD,
  attr: fD,
  children: mD,
  claim_svg_element: gD,
  detach: bD,
  init: vD,
  insert_hydration: DD,
  noop: yD,
  safe_not_equal: $D,
  svg_element: wD
} = window.__gradio__svelte__internal, {
  SvelteComponent: FD,
  append_hydration: ED,
  attr: kD,
  children: CD,
  claim_svg_element: AD,
  detach: SD,
  init: TD,
  insert_hydration: xD,
  noop: BD,
  safe_not_equal: ID,
  svg_element: RD
} = window.__gradio__svelte__internal, {
  SvelteComponent: qD,
  append_hydration: LD,
  attr: OD,
  children: ND,
  claim_svg_element: zD,
  detach: PD,
  init: MD,
  insert_hydration: UD,
  noop: HD,
  safe_not_equal: GD,
  svg_element: jD
} = window.__gradio__svelte__internal, {
  SvelteComponent: ZD,
  append_hydration: VD,
  attr: YD,
  children: XD,
  claim_svg_element: WD,
  detach: KD,
  init: QD,
  insert_hydration: JD,
  noop: ey,
  safe_not_equal: ty,
  svg_element: ny
} = window.__gradio__svelte__internal, {
  SvelteComponent: iy,
  append_hydration: ay,
  attr: ry,
  children: oy,
  claim_svg_element: ly,
  detach: sy,
  init: uy,
  insert_hydration: cy,
  noop: dy,
  safe_not_equal: _y,
  svg_element: py
} = window.__gradio__svelte__internal, {
  SvelteComponent: hy,
  append_hydration: fy,
  attr: my,
  children: gy,
  claim_svg_element: by,
  detach: vy,
  init: Dy,
  insert_hydration: yy,
  noop: $y,
  safe_not_equal: wy,
  svg_element: Fy
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ey,
  append_hydration: ky,
  attr: Cy,
  children: Ay,
  claim_svg_element: Sy,
  detach: Ty,
  init: xy,
  insert_hydration: By,
  noop: Iy,
  safe_not_equal: Ry,
  svg_element: qy
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ly,
  append_hydration: Oy,
  attr: Ny,
  children: zy,
  claim_svg_element: Py,
  detach: My,
  init: Uy,
  insert_hydration: Hy,
  noop: Gy,
  safe_not_equal: jy,
  svg_element: Zy
} = window.__gradio__svelte__internal, {
  SvelteComponent: Vy,
  append_hydration: Yy,
  attr: Xy,
  children: Wy,
  claim_svg_element: Ky,
  detach: Qy,
  init: Jy,
  insert_hydration: e$,
  noop: t$,
  safe_not_equal: n$,
  svg_element: i$
} = window.__gradio__svelte__internal, dr = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], gn = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
dr.reduce(
  (r, { color: t, primary: e, secondary: n }) => ({
    ...r,
    [t]: {
      primary: gn[t][e],
      secondary: gn[t][n]
    }
  }),
  {}
);
const {
  SvelteComponent: a$,
  claim_component: r$,
  create_component: o$,
  destroy_component: l$,
  init: s$,
  mount_component: u$,
  safe_not_equal: c$,
  transition_in: d$,
  transition_out: _$
} = window.__gradio__svelte__internal, { createEventDispatcher: p$ } = window.__gradio__svelte__internal, {
  SvelteComponent: h$,
  append_hydration: f$,
  attr: m$,
  check_outros: g$,
  children: b$,
  claim_component: v$,
  claim_element: D$,
  claim_space: y$,
  claim_text: $$,
  create_component: w$,
  destroy_component: F$,
  detach: E$,
  element: k$,
  empty: C$,
  group_outros: A$,
  init: S$,
  insert_hydration: T$,
  mount_component: x$,
  safe_not_equal: B$,
  set_data: I$,
  space: R$,
  text: q$,
  toggle_class: L$,
  transition_in: O$,
  transition_out: N$
} = window.__gradio__svelte__internal, {
  SvelteComponent: z$,
  attr: P$,
  children: M$,
  claim_element: U$,
  create_slot: H$,
  detach: G$,
  element: j$,
  get_all_dirty_from_scope: Z$,
  get_slot_changes: V$,
  init: Y$,
  insert_hydration: X$,
  safe_not_equal: W$,
  toggle_class: K$,
  transition_in: Q$,
  transition_out: J$,
  update_slot_base: ew
} = window.__gradio__svelte__internal, {
  SvelteComponent: tw,
  append_hydration: nw,
  attr: iw,
  check_outros: aw,
  children: rw,
  claim_component: ow,
  claim_element: lw,
  claim_space: sw,
  create_component: uw,
  destroy_component: cw,
  detach: dw,
  element: _w,
  empty: pw,
  group_outros: hw,
  init: fw,
  insert_hydration: mw,
  listen: gw,
  mount_component: bw,
  safe_not_equal: vw,
  space: Dw,
  toggle_class: yw,
  transition_in: $w,
  transition_out: ww
} = window.__gradio__svelte__internal, {
  SvelteComponent: Fw,
  attr: Ew,
  children: kw,
  claim_element: Cw,
  create_slot: Aw,
  detach: Sw,
  element: Tw,
  get_all_dirty_from_scope: xw,
  get_slot_changes: Bw,
  init: Iw,
  insert_hydration: Rw,
  null_to_empty: qw,
  safe_not_equal: Lw,
  transition_in: Ow,
  transition_out: Nw,
  update_slot_base: zw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Pw,
  check_outros: Mw,
  claim_component: Uw,
  create_component: Hw,
  destroy_component: Gw,
  detach: jw,
  empty: Zw,
  group_outros: Vw,
  init: Yw,
  insert_hydration: Xw,
  mount_component: Ww,
  noop: Kw,
  safe_not_equal: Qw,
  transition_in: Jw,
  transition_out: eF
} = window.__gradio__svelte__internal, { createEventDispatcher: tF } = window.__gradio__svelte__internal, {
  SvelteComponent: _r,
  append_hydration: fe,
  attr: ae,
  binding_callbacks: bn,
  check_outros: it,
  children: re,
  claim_component: Nt,
  claim_element: oe,
  claim_space: Z,
  claim_text: N,
  create_component: zt,
  create_slot: oi,
  destroy_component: Pt,
  destroy_each: li,
  detach: k,
  element: le,
  empty: se,
  ensure_array_like: at,
  get_all_dirty_from_scope: si,
  get_slot_changes: ui,
  group_outros: rt,
  init: pr,
  insert_hydration: A,
  mount_component: Mt,
  noop: Ft,
  safe_not_equal: hr,
  set_data: J,
  set_style: Ee,
  space: V,
  text: z,
  toggle_class: ie,
  transition_in: j,
  transition_out: Q,
  update_slot_base: ci
} = window.__gradio__svelte__internal, { tick: fr } = window.__gradio__svelte__internal, { onDestroy: mr } = window.__gradio__svelte__internal, { createEventDispatcher: gr } = window.__gradio__svelte__internal, br = (r) => ({}), vn = (r) => ({}), vr = (r) => ({}), Dn = (r) => ({});
function yn(r, t, e) {
  const n = r.slice();
  return n[43] = t[e], n[45] = e, n;
}
function $n(r, t, e) {
  const n = r.slice();
  return n[43] = t[e], n;
}
function wn(r) {
  let t, e, n, i, o, a;
  return o = new ai({
    props: {
      Icon: ri,
      label: (
        /*i18n*/
        r[2]("common.clear")
      ),
      disabled: !1,
      size: "x-small",
      background: "var(--background-fill-primary)",
      color: "var(--error-background-text)",
      border: "var(--border-color-primary)"
    }
  }), o.$on(
    "click",
    /*click_handler*/
    r[33]
  ), {
    c() {
      t = le("div"), e = z(
        /*validation_error*/
        r[1]
      ), n = V(), i = le("button"), zt(o.$$.fragment), this.h();
    },
    l(l) {
      t = oe(l, "DIV", { class: !0 });
      var s = re(t);
      e = N(
        s,
        /*validation_error*/
        r[1]
      ), n = Z(s), i = oe(s, "BUTTON", {});
      var c = re(i);
      Nt(o.$$.fragment, c), c.forEach(k), s.forEach(k), this.h();
    },
    h() {
      ae(t, "class", "validation-error svelte-vusapu");
    },
    m(l, s) {
      A(l, t, s), fe(t, e), fe(t, n), fe(t, i), Mt(o, i, null), a = !0;
    },
    p(l, s) {
      (!a || s[0] & /*validation_error*/
      2) && J(
        e,
        /*validation_error*/
        l[1]
      );
      const c = {};
      s[0] & /*i18n*/
      4 && (c.label = /*i18n*/
      l[2]("common.clear")), o.$set(c);
    },
    i(l) {
      a || (j(o.$$.fragment, l), a = !0);
    },
    o(l) {
      Q(o.$$.fragment, l), a = !1;
    },
    d(l) {
      l && k(t), Pt(o);
    }
  };
}
function Dr(r) {
  let t, e, n, i, o = (
    /*i18n*/
    r[2]("common.error") + ""
  ), a, l, s;
  e = new ai({
    props: {
      Icon: ri,
      label: (
        /*i18n*/
        r[2]("common.clear")
      ),
      disabled: !1
    }
  }), e.$on(
    "click",
    /*click_handler_1*/
    r[35]
  );
  const c = (
    /*#slots*/
    r[32].error
  ), d = oi(
    c,
    r,
    /*$$scope*/
    r[31],
    vn
  );
  return {
    c() {
      t = le("div"), zt(e.$$.fragment), n = V(), i = le("span"), a = z(o), l = V(), d && d.c(), this.h();
    },
    l(u) {
      t = oe(u, "DIV", { class: !0 });
      var p = re(t);
      Nt(e.$$.fragment, p), p.forEach(k), n = Z(u), i = oe(u, "SPAN", { class: !0 });
      var m = re(i);
      a = N(m, o), m.forEach(k), l = Z(u), d && d.l(u), this.h();
    },
    h() {
      ae(t, "class", "clear-status svelte-vusapu"), ae(i, "class", "error svelte-vusapu");
    },
    m(u, p) {
      A(u, t, p), Mt(e, t, null), A(u, n, p), A(u, i, p), fe(i, a), A(u, l, p), d && d.m(u, p), s = !0;
    },
    p(u, p) {
      const m = {};
      p[0] & /*i18n*/
      4 && (m.label = /*i18n*/
      u[2]("common.clear")), e.$set(m), (!s || p[0] & /*i18n*/
      4) && o !== (o = /*i18n*/
      u[2]("common.error") + "") && J(a, o), d && d.p && (!s || p[1] & /*$$scope*/
      1) && ci(
        d,
        c,
        u,
        /*$$scope*/
        u[31],
        s ? ui(
          c,
          /*$$scope*/
          u[31],
          p,
          br
        ) : si(
          /*$$scope*/
          u[31]
        ),
        vn
      );
    },
    i(u) {
      s || (j(e.$$.fragment, u), j(d, u), s = !0);
    },
    o(u) {
      Q(e.$$.fragment, u), Q(d, u), s = !1;
    },
    d(u) {
      u && (k(t), k(n), k(i), k(l)), Pt(e), d && d.d(u);
    }
  };
}
function yr(r) {
  let t, e, n, i, o, a, l, s, c, d = (
    /*variant*/
    r[9] === "default" && /*show_eta_bar*/
    r[20] && /*show_progress*/
    r[7] === "full" && Fn(r)
  );
  function u(_, f) {
    if (
      /*progress*/
      _[8]
    ) return Fr;
    if (
      /*queue_position*/
      _[3] !== null && /*queue_size*/
      _[4] !== void 0 && /*queue_position*/
      _[3] >= 0
    ) return wr;
    if (
      /*queue_position*/
      _[3] === 0
    ) return $r;
  }
  let p = u(r), m = p && p(r), g = (
    /*timer*/
    r[6] && Cn(r)
  );
  const v = [Ar, Cr], y = [];
  function $(_, f) {
    return (
      /*last_progress_level*/
      _[17] != null ? 0 : (
        /*show_progress*/
        _[7] === "full" ? 1 : -1
      )
    );
  }
  ~(o = $(r)) && (a = y[o] = v[o](r));
  let h = !/*timer*/
  r[6] && Rn(r);
  return {
    c() {
      d && d.c(), t = V(), e = le("div"), m && m.c(), n = V(), g && g.c(), i = V(), a && a.c(), l = V(), h && h.c(), s = se(), this.h();
    },
    l(_) {
      d && d.l(_), t = Z(_), e = oe(_, "DIV", { class: !0 });
      var f = re(e);
      m && m.l(f), n = Z(f), g && g.l(f), f.forEach(k), i = Z(_), a && a.l(_), l = Z(_), h && h.l(_), s = se(), this.h();
    },
    h() {
      ae(e, "class", "progress-text svelte-vusapu"), ie(
        e,
        "meta-text-center",
        /*variant*/
        r[9] === "center"
      ), ie(
        e,
        "meta-text",
        /*variant*/
        r[9] === "default"
      );
    },
    m(_, f) {
      d && d.m(_, f), A(_, t, f), A(_, e, f), m && m.m(e, null), fe(e, n), g && g.m(e, null), A(_, i, f), ~o && y[o].m(_, f), A(_, l, f), h && h.m(_, f), A(_, s, f), c = !0;
    },
    p(_, f) {
      /*variant*/
      _[9] === "default" && /*show_eta_bar*/
      _[20] && /*show_progress*/
      _[7] === "full" ? d ? d.p(_, f) : (d = Fn(_), d.c(), d.m(t.parentNode, t)) : d && (d.d(1), d = null), p === (p = u(_)) && m ? m.p(_, f) : (m && m.d(1), m = p && p(_), m && (m.c(), m.m(e, n))), /*timer*/
      _[6] ? g ? g.p(_, f) : (g = Cn(_), g.c(), g.m(e, null)) : g && (g.d(1), g = null), (!c || f[0] & /*variant*/
      512) && ie(
        e,
        "meta-text-center",
        /*variant*/
        _[9] === "center"
      ), (!c || f[0] & /*variant*/
      512) && ie(
        e,
        "meta-text",
        /*variant*/
        _[9] === "default"
      );
      let b = o;
      o = $(_), o === b ? ~o && y[o].p(_, f) : (a && (rt(), Q(y[b], 1, 1, () => {
        y[b] = null;
      }), it()), ~o ? (a = y[o], a ? a.p(_, f) : (a = y[o] = v[o](_), a.c()), j(a, 1), a.m(l.parentNode, l)) : a = null), /*timer*/
      _[6] ? h && (rt(), Q(h, 1, 1, () => {
        h = null;
      }), it()) : h ? (h.p(_, f), f[0] & /*timer*/
      64 && j(h, 1)) : (h = Rn(_), h.c(), j(h, 1), h.m(s.parentNode, s));
    },
    i(_) {
      c || (j(a), j(h), c = !0);
    },
    o(_) {
      Q(a), Q(h), c = !1;
    },
    d(_) {
      _ && (k(t), k(e), k(i), k(l), k(s)), d && d.d(_), m && m.d(), g && g.d(), ~o && y[o].d(_), h && h.d(_);
    }
  };
}
function Fn(r) {
  let t, e = `translateX(${/*eta_level*/
  (r[19] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = le("div"), this.h();
    },
    l(n) {
      t = oe(n, "DIV", { class: !0 }), re(t).forEach(k), this.h();
    },
    h() {
      ae(t, "class", "eta-bar svelte-vusapu"), Ee(t, "transform", e);
    },
    m(n, i) {
      A(n, t, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      524288 && e !== (e = `translateX(${/*eta_level*/
      (n[19] || 0) * 100 - 100}%)`) && Ee(t, "transform", e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function $r(r) {
  let t;
  return {
    c() {
      t = z("processing |");
    },
    l(e) {
      t = N(e, "processing |");
    },
    m(e, n) {
      A(e, t, n);
    },
    p: Ft,
    d(e) {
      e && k(t);
    }
  };
}
function wr(r) {
  let t, e = (
    /*queue_position*/
    r[3] + 1 + ""
  ), n, i, o, a;
  return {
    c() {
      t = z("queue: "), n = z(e), i = z("/"), o = z(
        /*queue_size*/
        r[4]
      ), a = z(" |");
    },
    l(l) {
      t = N(l, "queue: "), n = N(l, e), i = N(l, "/"), o = N(
        l,
        /*queue_size*/
        r[4]
      ), a = N(l, " |");
    },
    m(l, s) {
      A(l, t, s), A(l, n, s), A(l, i, s), A(l, o, s), A(l, a, s);
    },
    p(l, s) {
      s[0] & /*queue_position*/
      8 && e !== (e = /*queue_position*/
      l[3] + 1 + "") && J(n, e), s[0] & /*queue_size*/
      16 && J(
        o,
        /*queue_size*/
        l[4]
      );
    },
    d(l) {
      l && (k(t), k(n), k(i), k(o), k(a));
    }
  };
}
function Fr(r) {
  let t, e = at(
    /*progress*/
    r[8]
  ), n = [];
  for (let i = 0; i < e.length; i += 1)
    n[i] = kn($n(r, e, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      t = se();
    },
    l(i) {
      for (let o = 0; o < n.length; o += 1)
        n[o].l(i);
      t = se();
    },
    m(i, o) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(i, o);
      A(i, t, o);
    },
    p(i, o) {
      if (o[0] & /*progress*/
      256) {
        e = at(
          /*progress*/
          i[8]
        );
        let a;
        for (a = 0; a < e.length; a += 1) {
          const l = $n(i, e, a);
          n[a] ? n[a].p(l, o) : (n[a] = kn(l), n[a].c(), n[a].m(t.parentNode, t));
        }
        for (; a < n.length; a += 1)
          n[a].d(1);
        n.length = e.length;
      }
    },
    d(i) {
      i && k(t), li(n, i);
    }
  };
}
function En(r) {
  let t, e = (
    /*p*/
    r[43].unit + ""
  ), n, i, o = " ", a;
  function l(d, u) {
    return (
      /*p*/
      d[43].length != null ? kr : Er
    );
  }
  let s = l(r), c = s(r);
  return {
    c() {
      c.c(), t = V(), n = z(e), i = z(" | "), a = z(o);
    },
    l(d) {
      c.l(d), t = Z(d), n = N(d, e), i = N(d, " | "), a = N(d, o);
    },
    m(d, u) {
      c.m(d, u), A(d, t, u), A(d, n, u), A(d, i, u), A(d, a, u);
    },
    p(d, u) {
      s === (s = l(d)) && c ? c.p(d, u) : (c.d(1), c = s(d), c && (c.c(), c.m(t.parentNode, t))), u[0] & /*progress*/
      256 && e !== (e = /*p*/
      d[43].unit + "") && J(n, e);
    },
    d(d) {
      d && (k(t), k(n), k(i), k(a)), c.d(d);
    }
  };
}
function Er(r) {
  let t = Be(
    /*p*/
    r[43].index || 0
  ) + "", e;
  return {
    c() {
      e = z(t);
    },
    l(n) {
      e = N(n, t);
    },
    m(n, i) {
      A(n, e, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      256 && t !== (t = Be(
        /*p*/
        n[43].index || 0
      ) + "") && J(e, t);
    },
    d(n) {
      n && k(e);
    }
  };
}
function kr(r) {
  let t = Be(
    /*p*/
    r[43].index || 0
  ) + "", e, n, i = Be(
    /*p*/
    r[43].length
  ) + "", o;
  return {
    c() {
      e = z(t), n = z("/"), o = z(i);
    },
    l(a) {
      e = N(a, t), n = N(a, "/"), o = N(a, i);
    },
    m(a, l) {
      A(a, e, l), A(a, n, l), A(a, o, l);
    },
    p(a, l) {
      l[0] & /*progress*/
      256 && t !== (t = Be(
        /*p*/
        a[43].index || 0
      ) + "") && J(e, t), l[0] & /*progress*/
      256 && i !== (i = Be(
        /*p*/
        a[43].length
      ) + "") && J(o, i);
    },
    d(a) {
      a && (k(e), k(n), k(o));
    }
  };
}
function kn(r) {
  let t, e = (
    /*p*/
    r[43].index != null && En(r)
  );
  return {
    c() {
      e && e.c(), t = se();
    },
    l(n) {
      e && e.l(n), t = se();
    },
    m(n, i) {
      e && e.m(n, i), A(n, t, i);
    },
    p(n, i) {
      /*p*/
      n[43].index != null ? e ? e.p(n, i) : (e = En(n), e.c(), e.m(t.parentNode, t)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && k(t), e && e.d(n);
    }
  };
}
function Cn(r) {
  let t, e = (
    /*eta*/
    r[0] ? `/${/*formatted_eta*/
    r[21]}` : ""
  ), n, i;
  return {
    c() {
      t = z(
        /*formatted_timer*/
        r[22]
      ), n = z(e), i = z("s");
    },
    l(o) {
      t = N(
        o,
        /*formatted_timer*/
        r[22]
      ), n = N(o, e), i = N(o, "s");
    },
    m(o, a) {
      A(o, t, a), A(o, n, a), A(o, i, a);
    },
    p(o, a) {
      a[0] & /*formatted_timer*/
      4194304 && J(
        t,
        /*formatted_timer*/
        o[22]
      ), a[0] & /*eta, formatted_eta*/
      2097153 && e !== (e = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[21]}` : "") && J(n, e);
    },
    d(o) {
      o && (k(t), k(n), k(i));
    }
  };
}
function Cr(r) {
  let t, e;
  return t = new Oi({
    props: { margin: (
      /*variant*/
      r[9] === "default"
    ) }
  }), {
    c() {
      zt(t.$$.fragment);
    },
    l(n) {
      Nt(t.$$.fragment, n);
    },
    m(n, i) {
      Mt(t, n, i), e = !0;
    },
    p(n, i) {
      const o = {};
      i[0] & /*variant*/
      512 && (o.margin = /*variant*/
      n[9] === "default"), t.$set(o);
    },
    i(n) {
      e || (j(t.$$.fragment, n), e = !0);
    },
    o(n) {
      Q(t.$$.fragment, n), e = !1;
    },
    d(n) {
      Pt(t, n);
    }
  };
}
function Ar(r) {
  let t, e, n, i, o, a = `${/*last_progress_level*/
  r[17] * 100}%`, l = (
    /*progress*/
    r[8] != null && An(r)
  );
  return {
    c() {
      t = le("div"), e = le("div"), l && l.c(), n = V(), i = le("div"), o = le("div"), this.h();
    },
    l(s) {
      t = oe(s, "DIV", { class: !0 });
      var c = re(t);
      e = oe(c, "DIV", { class: !0 });
      var d = re(e);
      l && l.l(d), d.forEach(k), n = Z(c), i = oe(c, "DIV", { class: !0 });
      var u = re(i);
      o = oe(u, "DIV", { class: !0 }), re(o).forEach(k), u.forEach(k), c.forEach(k), this.h();
    },
    h() {
      ae(e, "class", "progress-level-inner svelte-vusapu"), ae(o, "class", "progress-bar svelte-vusapu"), Ee(o, "width", a), ae(i, "class", "progress-bar-wrap svelte-vusapu"), ae(t, "class", "progress-level svelte-vusapu");
    },
    m(s, c) {
      A(s, t, c), fe(t, e), l && l.m(e, null), fe(t, n), fe(t, i), fe(i, o), r[34](o);
    },
    p(s, c) {
      /*progress*/
      s[8] != null ? l ? l.p(s, c) : (l = An(s), l.c(), l.m(e, null)) : l && (l.d(1), l = null), c[0] & /*last_progress_level*/
      131072 && a !== (a = `${/*last_progress_level*/
      s[17] * 100}%`) && Ee(o, "width", a);
    },
    i: Ft,
    o: Ft,
    d(s) {
      s && k(t), l && l.d(), r[34](null);
    }
  };
}
function An(r) {
  let t, e = at(
    /*progress*/
    r[8]
  ), n = [];
  for (let i = 0; i < e.length; i += 1)
    n[i] = In(yn(r, e, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      t = se();
    },
    l(i) {
      for (let o = 0; o < n.length; o += 1)
        n[o].l(i);
      t = se();
    },
    m(i, o) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(i, o);
      A(i, t, o);
    },
    p(i, o) {
      if (o[0] & /*progress_level, progress*/
      65792) {
        e = at(
          /*progress*/
          i[8]
        );
        let a;
        for (a = 0; a < e.length; a += 1) {
          const l = yn(i, e, a);
          n[a] ? n[a].p(l, o) : (n[a] = In(l), n[a].c(), n[a].m(t.parentNode, t));
        }
        for (; a < n.length; a += 1)
          n[a].d(1);
        n.length = e.length;
      }
    },
    d(i) {
      i && k(t), li(n, i);
    }
  };
}
function Sn(r) {
  let t, e, n, i, o = (
    /*i*/
    r[45] !== 0 && Sr()
  ), a = (
    /*p*/
    r[43].desc != null && Tn(r)
  ), l = (
    /*p*/
    r[43].desc != null && /*progress_level*/
    r[16] && /*progress_level*/
    r[16][
      /*i*/
      r[45]
    ] != null && xn()
  ), s = (
    /*progress_level*/
    r[16] != null && Bn(r)
  );
  return {
    c() {
      o && o.c(), t = V(), a && a.c(), e = V(), l && l.c(), n = V(), s && s.c(), i = se();
    },
    l(c) {
      o && o.l(c), t = Z(c), a && a.l(c), e = Z(c), l && l.l(c), n = Z(c), s && s.l(c), i = se();
    },
    m(c, d) {
      o && o.m(c, d), A(c, t, d), a && a.m(c, d), A(c, e, d), l && l.m(c, d), A(c, n, d), s && s.m(c, d), A(c, i, d);
    },
    p(c, d) {
      /*p*/
      c[43].desc != null ? a ? a.p(c, d) : (a = Tn(c), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), /*p*/
      c[43].desc != null && /*progress_level*/
      c[16] && /*progress_level*/
      c[16][
        /*i*/
        c[45]
      ] != null ? l || (l = xn(), l.c(), l.m(n.parentNode, n)) : l && (l.d(1), l = null), /*progress_level*/
      c[16] != null ? s ? s.p(c, d) : (s = Bn(c), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    d(c) {
      c && (k(t), k(e), k(n), k(i)), o && o.d(c), a && a.d(c), l && l.d(c), s && s.d(c);
    }
  };
}
function Sr(r) {
  let t;
  return {
    c() {
      t = z(" /");
    },
    l(e) {
      t = N(e, " /");
    },
    m(e, n) {
      A(e, t, n);
    },
    d(e) {
      e && k(t);
    }
  };
}
function Tn(r) {
  let t = (
    /*p*/
    r[43].desc + ""
  ), e;
  return {
    c() {
      e = z(t);
    },
    l(n) {
      e = N(n, t);
    },
    m(n, i) {
      A(n, e, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      256 && t !== (t = /*p*/
      n[43].desc + "") && J(e, t);
    },
    d(n) {
      n && k(e);
    }
  };
}
function xn(r) {
  let t;
  return {
    c() {
      t = z("-");
    },
    l(e) {
      t = N(e, "-");
    },
    m(e, n) {
      A(e, t, n);
    },
    d(e) {
      e && k(t);
    }
  };
}
function Bn(r) {
  let t = (100 * /*progress_level*/
  (r[16][
    /*i*/
    r[45]
  ] || 0)).toFixed(1) + "", e, n;
  return {
    c() {
      e = z(t), n = z("%");
    },
    l(i) {
      e = N(i, t), n = N(i, "%");
    },
    m(i, o) {
      A(i, e, o), A(i, n, o);
    },
    p(i, o) {
      o[0] & /*progress_level*/
      65536 && t !== (t = (100 * /*progress_level*/
      (i[16][
        /*i*/
        i[45]
      ] || 0)).toFixed(1) + "") && J(e, t);
    },
    d(i) {
      i && (k(e), k(n));
    }
  };
}
function In(r) {
  let t, e = (
    /*p*/
    (r[43].desc != null || /*progress_level*/
    r[16] && /*progress_level*/
    r[16][
      /*i*/
      r[45]
    ] != null) && Sn(r)
  );
  return {
    c() {
      e && e.c(), t = se();
    },
    l(n) {
      e && e.l(n), t = se();
    },
    m(n, i) {
      e && e.m(n, i), A(n, t, i);
    },
    p(n, i) {
      /*p*/
      n[43].desc != null || /*progress_level*/
      n[16] && /*progress_level*/
      n[16][
        /*i*/
        n[45]
      ] != null ? e ? e.p(n, i) : (e = Sn(n), e.c(), e.m(t.parentNode, t)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && k(t), e && e.d(n);
    }
  };
}
function Rn(r) {
  let t, e, n, i;
  const o = (
    /*#slots*/
    r[32]["additional-loading-text"]
  ), a = oi(
    o,
    r,
    /*$$scope*/
    r[31],
    Dn
  );
  return {
    c() {
      t = le("p"), e = z(
        /*loading_text*/
        r[10]
      ), n = V(), a && a.c(), this.h();
    },
    l(l) {
      t = oe(l, "P", { class: !0 });
      var s = re(t);
      e = N(
        s,
        /*loading_text*/
        r[10]
      ), s.forEach(k), n = Z(l), a && a.l(l), this.h();
    },
    h() {
      ae(t, "class", "loading svelte-vusapu");
    },
    m(l, s) {
      A(l, t, s), fe(t, e), A(l, n, s), a && a.m(l, s), i = !0;
    },
    p(l, s) {
      (!i || s[0] & /*loading_text*/
      1024) && J(
        e,
        /*loading_text*/
        l[10]
      ), a && a.p && (!i || s[1] & /*$$scope*/
      1) && ci(
        a,
        o,
        l,
        /*$$scope*/
        l[31],
        i ? ui(
          o,
          /*$$scope*/
          l[31],
          s,
          vr
        ) : si(
          /*$$scope*/
          l[31]
        ),
        Dn
      );
    },
    i(l) {
      i || (j(a, l), i = !0);
    },
    o(l) {
      Q(a, l), i = !1;
    },
    d(l) {
      l && (k(t), k(n)), a && a.d(l);
    }
  };
}
function Tr(r) {
  let t, e, n, i, o, a, l = (
    /*validation_error*/
    r[1] && /*show_validation_error*/
    r[14] && wn(r)
  );
  const s = [yr, Dr], c = [];
  function d(u, p) {
    return (
      /*status*/
      u[5] === "pending" ? 0 : (
        /*status*/
        u[5] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = d(r)) && (i = c[n] = s[n](r)), {
    c() {
      t = le("div"), l && l.c(), e = V(), i && i.c(), this.h();
    },
    l(u) {
      t = oe(u, "DIV", { class: !0 });
      var p = re(t);
      l && l.l(p), e = Z(p), i && i.l(p), p.forEach(k), this.h();
    },
    h() {
      ae(t, "class", o = "wrap " + /*variant*/
      r[9] + " " + /*show_progress*/
      r[7] + " svelte-vusapu"), ie(t, "hide", (!/*status*/
      r[5] || /*status*/
      r[5] === "complete" || /*show_progress*/
      r[7] === "hidden" || /*status*/
      r[5] == "streaming") && !/*validation_error*/
      r[1]), ie(
        t,
        "translucent",
        /*variant*/
        r[9] === "center" && /*status*/
        (r[5] === "pending" || /*status*/
        r[5] === "error") || /*translucent*/
        r[12] || /*show_progress*/
        r[7] === "minimal" || /*validation_error*/
        r[1]
      ), ie(
        t,
        "generating",
        /*status*/
        r[5] === "generating" && /*show_progress*/
        r[7] === "full"
      ), ie(
        t,
        "border",
        /*border*/
        r[13]
      ), Ee(
        t,
        "position",
        /*absolute*/
        r[11] ? "absolute" : "static"
      ), Ee(
        t,
        "padding",
        /*absolute*/
        r[11] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, p) {
      A(u, t, p), l && l.m(t, null), fe(t, e), ~n && c[n].m(t, null), r[36](t), a = !0;
    },
    p(u, p) {
      /*validation_error*/
      u[1] && /*show_validation_error*/
      u[14] ? l ? (l.p(u, p), p[0] & /*validation_error, show_validation_error*/
      16386 && j(l, 1)) : (l = wn(u), l.c(), j(l, 1), l.m(t, e)) : l && (rt(), Q(l, 1, 1, () => {
        l = null;
      }), it());
      let m = n;
      n = d(u), n === m ? ~n && c[n].p(u, p) : (i && (rt(), Q(c[m], 1, 1, () => {
        c[m] = null;
      }), it()), ~n ? (i = c[n], i ? i.p(u, p) : (i = c[n] = s[n](u), i.c()), j(i, 1), i.m(t, null)) : i = null), (!a || p[0] & /*variant, show_progress*/
      640 && o !== (o = "wrap " + /*variant*/
      u[9] + " " + /*show_progress*/
      u[7] + " svelte-vusapu")) && ae(t, "class", o), (!a || p[0] & /*variant, show_progress, status, show_progress, validation_error*/
      674) && ie(t, "hide", (!/*status*/
      u[5] || /*status*/
      u[5] === "complete" || /*show_progress*/
      u[7] === "hidden" || /*status*/
      u[5] == "streaming") && !/*validation_error*/
      u[1]), (!a || p[0] & /*variant, show_progress, variant, status, translucent, show_progress, validation_error*/
      4770) && ie(
        t,
        "translucent",
        /*variant*/
        u[9] === "center" && /*status*/
        (u[5] === "pending" || /*status*/
        u[5] === "error") || /*translucent*/
        u[12] || /*show_progress*/
        u[7] === "minimal" || /*validation_error*/
        u[1]
      ), (!a || p[0] & /*variant, show_progress, status, show_progress*/
      672) && ie(
        t,
        "generating",
        /*status*/
        u[5] === "generating" && /*show_progress*/
        u[7] === "full"
      ), (!a || p[0] & /*variant, show_progress, border*/
      8832) && ie(
        t,
        "border",
        /*border*/
        u[13]
      ), p[0] & /*absolute*/
      2048 && Ee(
        t,
        "position",
        /*absolute*/
        u[11] ? "absolute" : "static"
      ), p[0] & /*absolute*/
      2048 && Ee(
        t,
        "padding",
        /*absolute*/
        u[11] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      a || (j(l), j(i), a = !0);
    },
    o(u) {
      Q(l), Q(i), a = !1;
    },
    d(u) {
      u && k(t), l && l.d(), ~n && c[n].d(), r[36](null);
    }
  };
}
let We = [], mt = !1;
const xr = typeof window < "u", di = xr ? window.requestAnimationFrame : (r) => {
};
async function Br(r, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (We.push(r), !mt) mt = !0;
    else return;
    await fr(), di(() => {
      let e = [0, 0];
      for (let n = 0; n < We.length; n++) {
        const o = We[n].getBoundingClientRect();
        (n === 0 || o.top + window.scrollY <= e[0]) && (e[0] = o.top + window.scrollY, e[1] = n);
      }
      window.scrollTo({ top: e[0] - 20, behavior: "smooth" }), mt = !1, We = [];
    });
  }
}
function Ir(r, t, e) {
  let n, { $$slots: i = {}, $$scope: o } = t;
  const a = gr();
  let { i18n: l } = t, { eta: s = null } = t, { queue_position: c } = t, { queue_size: d } = t, { status: u } = t, { scroll_to_output: p = !1 } = t, { timer: m = !0 } = t, { show_progress: g = "full" } = t, { message: v = null } = t, { progress: y = null } = t, { variant: $ = "default" } = t, { loading_text: h = "Loading..." } = t, { absolute: _ = !0 } = t, { translucent: f = !1 } = t, { border: b = !1 } = t, { autoscroll: D } = t, { validation_error: E = null } = t, { show_validation_error: S = !0 } = t, F, T = !1, O = 0, L = 0, ue = null, ee = null, ke = 0, Y = null, ce, q = null, G = !0;
  const me = () => {
    e(0, s = e(29, ue = e(21, $e = null))), e(27, O = performance.now()), e(28, L = 0), T = !0, w();
  };
  function w() {
    di(() => {
      e(28, L = (performance.now() - O) / 1e3), T && w();
    });
  }
  function M() {
    e(28, L = 0), e(0, s = e(29, ue = e(21, $e = null))), T && (T = !1);
  }
  mr(() => {
    T && M();
  });
  let $e = null;
  const X = () => e(1, E = null);
  function ge(C) {
    bn[C ? "unshift" : "push"](() => {
      q = C, e(18, q), e(8, y), e(16, Y), e(17, ce);
    });
  }
  const Fe = () => {
    a("clear_status");
  };
  function Se(C) {
    bn[C ? "unshift" : "push"](() => {
      F = C, e(15, F);
    });
  }
  return r.$$set = (C) => {
    "i18n" in C && e(2, l = C.i18n), "eta" in C && e(0, s = C.eta), "queue_position" in C && e(3, c = C.queue_position), "queue_size" in C && e(4, d = C.queue_size), "status" in C && e(5, u = C.status), "scroll_to_output" in C && e(24, p = C.scroll_to_output), "timer" in C && e(6, m = C.timer), "show_progress" in C && e(7, g = C.show_progress), "message" in C && e(25, v = C.message), "progress" in C && e(8, y = C.progress), "variant" in C && e(9, $ = C.variant), "loading_text" in C && e(10, h = C.loading_text), "absolute" in C && e(11, _ = C.absolute), "translucent" in C && e(12, f = C.translucent), "border" in C && e(13, b = C.border), "autoscroll" in C && e(26, D = C.autoscroll), "validation_error" in C && e(1, E = C.validation_error), "show_validation_error" in C && e(14, S = C.show_validation_error), "$$scope" in C && e(31, o = C.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    1744830465 && (s === null && e(0, s = ue), s != null && ue !== s && (e(30, ee = (performance.now() - O) / 1e3 + s), e(21, $e = ee.toFixed(1)), e(29, ue = s))), r.$$.dirty[0] & /*eta_from_start, timer_diff*/
    1342177280 && e(19, ke = ee === null || ee <= 0 || !L ? null : Math.min(L / ee, 1)), r.$$.dirty[0] & /*progress*/
    256 && y != null && e(20, G = !1), r.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    459008 && (y != null ? e(16, Y = y.map((C) => {
      if (C.index != null && C.length != null)
        return C.index / C.length;
      if (C.progress != null)
        return C.progress;
    })) : e(16, Y = null), Y ? (e(17, ce = Y[Y.length - 1]), q && (ce === 0 ? e(18, q.style.transition = "0", q) : e(18, q.style.transition = "150ms", q))) : e(17, ce = void 0)), r.$$.dirty[0] & /*status*/
    32 && (u === "pending" ? me() : M()), r.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    83918880 && F && p && (u === "pending" || u === "complete") && Br(F, D), r.$$.dirty[0] & /*status, message*/
    33554464, r.$$.dirty[0] & /*timer_diff*/
    268435456 && e(22, n = L.toFixed(1));
  }, [
    s,
    E,
    l,
    c,
    d,
    u,
    m,
    g,
    y,
    $,
    h,
    _,
    f,
    b,
    S,
    F,
    Y,
    ce,
    q,
    ke,
    G,
    $e,
    n,
    a,
    p,
    v,
    D,
    O,
    L,
    ue,
    ee,
    o,
    i,
    X,
    ge,
    Fe,
    Se
  ];
}
class Rr extends _r {
  constructor(t) {
    super(), pr(
      this,
      t,
      Ir,
      Tr,
      hr,
      {
        i18n: 2,
        eta: 0,
        queue_position: 3,
        queue_size: 4,
        status: 5,
        scroll_to_output: 24,
        timer: 6,
        show_progress: 7,
        message: 25,
        progress: 8,
        variant: 9,
        loading_text: 10,
        absolute: 11,
        translucent: 12,
        border: 13,
        autoscroll: 26,
        validation_error: 1,
        show_validation_error: 14
      },
      null,
      [-1, -1]
    );
  }
}
const {
  HtmlTagHydration: nF,
  SvelteComponent: iF,
  add_render_callback: aF,
  append_hydration: rF,
  attr: oF,
  bubble: lF,
  check_outros: sF,
  children: uF,
  claim_component: cF,
  claim_element: dF,
  claim_html_tag: _F,
  claim_space: pF,
  claim_text: hF,
  create_component: fF,
  create_in_transition: mF,
  create_out_transition: gF,
  destroy_component: bF,
  detach: vF,
  element: DF,
  get_svelte_dataset: yF,
  group_outros: $F,
  init: wF,
  insert_hydration: FF,
  listen: EF,
  mount_component: kF,
  run_all: CF,
  safe_not_equal: AF,
  set_data: SF,
  space: TF,
  stop_propagation: xF,
  text: BF,
  toggle_class: IF,
  transition_in: RF,
  transition_out: qF
} = window.__gradio__svelte__internal, { createEventDispatcher: LF, onMount: OF } = window.__gradio__svelte__internal, {
  SvelteComponent: NF,
  append_hydration: zF,
  attr: PF,
  bubble: MF,
  check_outros: UF,
  children: HF,
  claim_component: GF,
  claim_element: jF,
  claim_space: ZF,
  component_subscribe: VF,
  create_animation: YF,
  create_component: XF,
  destroy_component: WF,
  detach: KF,
  element: QF,
  ensure_array_like: JF,
  fix_and_outro_and_destroy_block: eE,
  fix_position: tE,
  group_outros: nE,
  init: iE,
  insert_hydration: aE,
  mount_component: rE,
  noop: oE,
  safe_not_equal: lE,
  set_style: sE,
  space: uE,
  transition_in: cE,
  transition_out: dE,
  update_keyed_each: _E
} = window.__gradio__svelte__internal, {
  SvelteComponent: pE,
  attr: hE,
  children: fE,
  claim_element: mE,
  detach: gE,
  element: bE,
  empty: vE,
  init: DE,
  insert_hydration: yE,
  noop: $E,
  safe_not_equal: wE,
  set_style: FE
} = window.__gradio__svelte__internal, {
  SvelteComponent: qr,
  assign: Lr,
  attr: Or,
  children: Nr,
  claim_component: Et,
  claim_element: zr,
  claim_space: Pr,
  create_component: kt,
  destroy_component: Ct,
  detach: gt,
  element: Mr,
  get_spread_object: Ur,
  get_spread_update: Hr,
  init: Gr,
  insert_hydration: qn,
  mount_component: At,
  safe_not_equal: jr,
  space: Zr,
  toggle_class: Ln,
  transition_in: St,
  transition_out: Tt
} = window.__gradio__svelte__internal;
function Vr(r) {
  let t, e, n, i, o;
  const a = [
    { autoscroll: (
      /*gradio*/
      r[8].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      r[8].i18n
    ) },
    /*loading_status*/
    r[7],
    { variant: "center" }
  ];
  let l = {};
  for (let s = 0; s < a.length; s += 1)
    l = Lr(l, a[s]);
  return t = new Rr({ props: l }), i = new Ei({
    props: {
      min_height: (
        /*loading_status*/
        r[7] && /*loading_status*/
        r[7]?.status !== "complete"
      ),
      value: (
        /*value*/
        r[3]
      ),
      elem_classes: (
        /*elem_classes*/
        r[1]
      ),
      visible: (
        /*visible*/
        r[2]
      ),
      height: (
        /*height*/
        r[4]
      ),
      width: (
        /*width*/
        r[5]
      ),
      sandbox: (
        /*sandbox*/
        r[6]
      )
    }
  }), {
    c() {
      kt(t.$$.fragment), e = Zr(), n = Mr("div"), kt(i.$$.fragment), this.h();
    },
    l(s) {
      Et(t.$$.fragment, s), e = Pr(s), n = zr(s, "DIV", { class: !0 });
      var c = Nr(n);
      Et(i.$$.fragment, c), c.forEach(gt), this.h();
    },
    h() {
      Or(n, "class", "svelte-gqsrr7"), Ln(
        n,
        "pending",
        /*loading_status*/
        r[7]?.status === "pending"
      );
    },
    m(s, c) {
      At(t, s, c), qn(s, e, c), qn(s, n, c), At(i, n, null), o = !0;
    },
    p(s, c) {
      const d = c & /*gradio, loading_status*/
      384 ? Hr(a, [
        c & /*gradio*/
        256 && { autoscroll: (
          /*gradio*/
          s[8].autoscroll
        ) },
        c & /*gradio*/
        256 && { i18n: (
          /*gradio*/
          s[8].i18n
        ) },
        c & /*loading_status*/
        128 && Ur(
          /*loading_status*/
          s[7]
        ),
        a[3]
      ]) : {};
      t.$set(d);
      const u = {};
      c & /*loading_status*/
      128 && (u.min_height = /*loading_status*/
      s[7] && /*loading_status*/
      s[7]?.status !== "complete"), c & /*value*/
      8 && (u.value = /*value*/
      s[3]), c & /*elem_classes*/
      2 && (u.elem_classes = /*elem_classes*/
      s[1]), c & /*visible*/
      4 && (u.visible = /*visible*/
      s[2]), c & /*height*/
      16 && (u.height = /*height*/
      s[4]), c & /*width*/
      32 && (u.width = /*width*/
      s[5]), c & /*sandbox*/
      64 && (u.sandbox = /*sandbox*/
      s[6]), i.$set(u), (!o || c & /*loading_status*/
      128) && Ln(
        n,
        "pending",
        /*loading_status*/
        s[7]?.status === "pending"
      );
    },
    i(s) {
      o || (St(t.$$.fragment, s), St(i.$$.fragment, s), o = !0);
    },
    o(s) {
      Tt(t.$$.fragment, s), Tt(i.$$.fragment, s), o = !1;
    },
    d(s) {
      s && (gt(e), gt(n)), Ct(t, s), Ct(i);
    }
  };
}
function Yr(r) {
  let t, e;
  return t = new Ji({
    props: {
      visible: (
        /*visible*/
        r[2]
      ),
      elem_id: (
        /*elem_id*/
        r[0]
      ),
      elem_classes: (
        /*elem_classes*/
        r[1]
      ),
      container: !1,
      height: (
        /*height*/
        r[4]
      ),
      $$slots: { default: [Vr] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      kt(t.$$.fragment);
    },
    l(n) {
      Et(t.$$.fragment, n);
    },
    m(n, i) {
      At(t, n, i), e = !0;
    },
    p(n, [i]) {
      const o = {};
      i & /*visible*/
      4 && (o.visible = /*visible*/
      n[2]), i & /*elem_id*/
      1 && (o.elem_id = /*elem_id*/
      n[0]), i & /*elem_classes*/
      2 && (o.elem_classes = /*elem_classes*/
      n[1]), i & /*height*/
      16 && (o.height = /*height*/
      n[4]), i & /*$$scope, loading_status, value, elem_classes, visible, height, width, sandbox, gradio*/
      1534 && (o.$$scope = { dirty: i, ctx: n }), t.$set(o);
    },
    i(n) {
      e || (St(t.$$.fragment, n), e = !0);
    },
    o(n) {
      Tt(t.$$.fragment, n), e = !1;
    },
    d(n) {
      Ct(t, n);
    }
  };
}
function Xr(r, t, e) {
  let { label: n } = t, { elem_id: i = "" } = t, { elem_classes: o = [] } = t, { visible: a = !0 } = t, { value: l = "" } = t, { height: s = "100%" } = t, { width: c = "100%" } = t, { sandbox: d = "allow-scripts" } = t, { loading_status: u } = t, { gradio: p } = t;
  return r.$$set = (m) => {
    "label" in m && e(9, n = m.label), "elem_id" in m && e(0, i = m.elem_id), "elem_classes" in m && e(1, o = m.elem_classes), "visible" in m && e(2, a = m.visible), "value" in m && e(3, l = m.value), "height" in m && e(4, s = m.height), "width" in m && e(5, c = m.width), "sandbox" in m && e(6, d = m.sandbox), "loading_status" in m && e(7, u = m.loading_status), "gradio" in m && e(8, p = m.gradio);
  }, r.$$.update = () => {
    r.$$.dirty & /*value, gradio*/
    264 && p.dispatch("change");
  }, [
    i,
    o,
    a,
    l,
    s,
    c,
    d,
    u,
    p,
    n
  ];
}
class EE extends qr {
  constructor(t) {
    super(), Gr(this, t, Xr, Yr, jr, {
      label: 9,
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      value: 3,
      height: 4,
      width: 5,
      sandbox: 6,
      loading_status: 7,
      gradio: 8
    });
  }
}
export {
  EE as default
};

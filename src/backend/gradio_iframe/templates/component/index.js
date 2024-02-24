const {
  SvelteComponent: nt,
  append: it,
  attr: T,
  binding_callbacks: ft,
  detach: st,
  element: we,
  init: ot,
  insert: at,
  listen: rt,
  noop: ve,
  safe_not_equal: _t,
  toggle_class: X
} = window.__gradio__svelte__internal, { createEventDispatcher: ut } = window.__gradio__svelte__internal;
function ct(n) {
  let t, e, l, i, s;
  return {
    c() {
      t = we("div"), e = we("iframe"), T(e, "title", "iframe component"), T(
        e,
        "width",
        /*width*/
        n[5]
      ), T(
        e,
        "srcdoc",
        /*value*/
        n[1]
      ), T(
        e,
        "height",
        /*height*/
        n[4]
      ), T(e, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"), e.allowFullscreen = !0, T(t, "class", l = "prose " + /*elem_classes*/
      n[0].join(" ") + " svelte-2qygph"), X(
        t,
        "min",
        /*min_height*/
        n[3]
      ), X(t, "hide", !/*visible*/
      n[2]), X(
        t,
        "height",
        /*height*/
        n[4]
      );
    },
    m(o, a) {
      at(o, t, a), it(t, e), n[8](e), i || (s = rt(
        e,
        "load",
        /*onLoad*/
        n[7]
      ), i = !0);
    },
    p(o, [a]) {
      a & /*width*/
      32 && T(
        e,
        "width",
        /*width*/
        o[5]
      ), a & /*value*/
      2 && T(
        e,
        "srcdoc",
        /*value*/
        o[1]
      ), a & /*height*/
      16 && T(
        e,
        "height",
        /*height*/
        o[4]
      ), a & /*elem_classes*/
      1 && l !== (l = "prose " + /*elem_classes*/
      o[0].join(" ") + " svelte-2qygph") && T(t, "class", l), a & /*elem_classes, min_height*/
      9 && X(
        t,
        "min",
        /*min_height*/
        o[3]
      ), a & /*elem_classes, visible*/
      5 && X(t, "hide", !/*visible*/
      o[2]), a & /*elem_classes, height*/
      17 && X(
        t,
        "height",
        /*height*/
        o[4]
      );
    },
    i: ve,
    o: ve,
    d(o) {
      o && st(t), n[8](null), i = !1, s();
    }
  };
}
function dt(n, t, e) {
  let { elem_classes: l = [] } = t, { value: i } = t, { visible: s = !0 } = t, { min_height: o = !1 } = t, { height: a = "100%" } = t, { width: r = "100%" } = t;
  const f = ut();
  let _;
  const m = () => {
    try {
      const u = _.contentDocument || _.contentWindow.document;
      a === "100%" ? e(6, _.style.height = `${u.documentElement.scrollHeight}px`, _) : e(6, _.style.height = a, _);
    } catch (u) {
      console.error("Error accessing iframe content:", u);
    }
  };
  function b(u) {
    ft[u ? "unshift" : "push"](() => {
      _ = u, e(6, _);
    });
  }
  return n.$$set = (u) => {
    "elem_classes" in u && e(0, l = u.elem_classes), "value" in u && e(1, i = u.value), "visible" in u && e(2, s = u.visible), "min_height" in u && e(3, o = u.min_height), "height" in u && e(4, a = u.height), "width" in u && e(5, r = u.width);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    2 && f("change");
  }, [
    l,
    i,
    s,
    o,
    a,
    r,
    _,
    m,
    b
  ];
}
class mt extends nt {
  constructor(t) {
    super(), ot(this, t, dt, ct, _t, {
      elem_classes: 0,
      value: 1,
      visible: 2,
      min_height: 3,
      height: 4,
      width: 5
    });
  }
}
function G(n) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], e = 0;
  for (; n > 1e3 && e < t.length - 1; )
    n /= 1e3, e++;
  let l = t[e];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + l;
}
function te() {
}
function bt(n, t) {
  return n != n ? t == t : n !== t || n && typeof n == "object" || typeof n == "function";
}
const Re = typeof window < "u";
let ke = Re ? () => window.performance.now() : () => Date.now(), Ue = Re ? (n) => requestAnimationFrame(n) : te;
const O = /* @__PURE__ */ new Set();
function We(n) {
  O.forEach((t) => {
    t.c(n) || (O.delete(t), t.f());
  }), O.size !== 0 && Ue(We);
}
function gt(n) {
  let t;
  return O.size === 0 && Ue(We), {
    promise: new Promise((e) => {
      O.add(t = { c: n, f: e });
    }),
    abort() {
      O.delete(t);
    }
  };
}
const Y = [];
function ht(n, t = te) {
  let e;
  const l = /* @__PURE__ */ new Set();
  function i(a) {
    if (bt(n, a) && (n = a, e)) {
      const r = !Y.length;
      for (const f of l)
        f[1](), Y.push(f, n);
      if (r) {
        for (let f = 0; f < Y.length; f += 2)
          Y[f][0](Y[f + 1]);
        Y.length = 0;
      }
    }
  }
  function s(a) {
    i(a(n));
  }
  function o(a, r = te) {
    const f = [a, r];
    return l.add(f), l.size === 1 && (e = t(i, s) || te), a(n), () => {
      l.delete(f), l.size === 0 && e && (e(), e = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function ye(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function se(n, t, e, l) {
  if (typeof e == "number" || ye(e)) {
    const i = l - e, s = (e - t) / (n.dt || 1 / 60), o = n.opts.stiffness * i, a = n.opts.damping * s, r = (o - a) * n.inv_mass, f = (s + r) * n.dt;
    return Math.abs(f) < n.opts.precision && Math.abs(i) < n.opts.precision ? l : (n.settled = !1, ye(e) ? new Date(e.getTime() + f) : e + f);
  } else {
    if (Array.isArray(e))
      return e.map(
        (i, s) => se(n, t[s], e[s], l[s])
      );
    if (typeof e == "object") {
      const i = {};
      for (const s in e)
        i[s] = se(n, t[s], e[s], l[s]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof e} values`);
  }
}
function pe(n, t = {}) {
  const e = ht(n), { stiffness: l = 0.15, damping: i = 0.8, precision: s = 0.01 } = t;
  let o, a, r, f = n, _ = n, m = 1, b = 0, u = !1;
  function k(p, L = {}) {
    _ = p;
    const F = r = {};
    return n == null || L.hard || C.stiffness >= 1 && C.damping >= 1 ? (u = !0, o = ke(), f = p, e.set(n = _), Promise.resolve()) : (L.soft && (b = 1 / ((L.soft === !0 ? 0.5 : +L.soft) * 60), m = 0), a || (o = ke(), u = !1, a = gt((c) => {
      if (u)
        return u = !1, a = null, !1;
      m = Math.min(m + b, 1);
      const y = {
        inv_mass: m,
        opts: C,
        settled: !0,
        dt: (c - o) * 60 / 1e3
      }, g = se(y, f, n, _);
      return o = c, f = n, e.set(n = g), y.settled && (a = null), !y.settled;
    })), new Promise((c) => {
      a.promise.then(() => {
        F === r && c();
      });
    }));
  }
  const C = {
    set: k,
    update: (p, L) => k(p(_, n), L),
    subscribe: e.subscribe,
    stiffness: l,
    damping: i,
    precision: s
  };
  return C;
}
const {
  SvelteComponent: wt,
  append: N,
  attr: v,
  component_subscribe: qe,
  detach: vt,
  element: kt,
  init: yt,
  insert: pt,
  noop: Fe,
  safe_not_equal: qt,
  set_style: $,
  svg_element: z,
  toggle_class: Le
} = window.__gradio__svelte__internal, { onMount: Ft } = window.__gradio__svelte__internal;
function Lt(n) {
  let t, e, l, i, s, o, a, r, f, _, m, b;
  return {
    c() {
      t = kt("div"), e = z("svg"), l = z("g"), i = z("path"), s = z("path"), o = z("path"), a = z("path"), r = z("g"), f = z("path"), _ = z("path"), m = z("path"), b = z("path"), v(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), v(i, "fill", "#FF7C00"), v(i, "fill-opacity", "0.4"), v(i, "class", "svelte-43sxxs"), v(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), v(s, "fill", "#FF7C00"), v(s, "class", "svelte-43sxxs"), v(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), v(o, "fill", "#FF7C00"), v(o, "fill-opacity", "0.4"), v(o, "class", "svelte-43sxxs"), v(a, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), v(a, "fill", "#FF7C00"), v(a, "class", "svelte-43sxxs"), $(l, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), v(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), v(f, "fill", "#FF7C00"), v(f, "fill-opacity", "0.4"), v(f, "class", "svelte-43sxxs"), v(_, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), v(_, "fill", "#FF7C00"), v(_, "class", "svelte-43sxxs"), v(m, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), v(m, "fill", "#FF7C00"), v(m, "fill-opacity", "0.4"), v(m, "class", "svelte-43sxxs"), v(b, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), v(b, "fill", "#FF7C00"), v(b, "class", "svelte-43sxxs"), $(r, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), v(e, "viewBox", "-1200 -1200 3000 3000"), v(e, "fill", "none"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "class", "svelte-43sxxs"), v(t, "class", "svelte-43sxxs"), Le(
        t,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(u, k) {
      pt(u, t, k), N(t, e), N(e, l), N(l, i), N(l, s), N(l, o), N(l, a), N(e, r), N(r, f), N(r, _), N(r, m), N(r, b);
    },
    p(u, [k]) {
      k & /*$top*/
      2 && $(l, "transform", "translate(" + /*$top*/
      u[1][0] + "px, " + /*$top*/
      u[1][1] + "px)"), k & /*$bottom*/
      4 && $(r, "transform", "translate(" + /*$bottom*/
      u[2][0] + "px, " + /*$bottom*/
      u[2][1] + "px)"), k & /*margin*/
      1 && Le(
        t,
        "margin",
        /*margin*/
        u[0]
      );
    },
    i: Fe,
    o: Fe,
    d(u) {
      u && vt(t);
    }
  };
}
function Ct(n, t, e) {
  let l, i, { margin: s = !0 } = t;
  const o = pe([0, 0]);
  qe(n, o, (b) => e(1, l = b));
  const a = pe([0, 0]);
  qe(n, a, (b) => e(2, i = b));
  let r;
  async function f() {
    await Promise.all([o.set([125, 140]), a.set([-125, -140])]), await Promise.all([o.set([-125, 140]), a.set([125, -140])]), await Promise.all([o.set([-125, 0]), a.set([125, -0])]), await Promise.all([o.set([125, 0]), a.set([-125, 0])]);
  }
  async function _() {
    await f(), r || _();
  }
  async function m() {
    await Promise.all([o.set([125, 0]), a.set([-125, 0])]), _();
  }
  return Ft(() => (m(), () => r = !0)), n.$$set = (b) => {
    "margin" in b && e(0, s = b.margin);
  }, [s, l, i, o, a];
}
class Mt extends wt {
  constructor(t) {
    super(), yt(this, t, Ct, Lt, qt, { margin: 0 });
  }
}
const {
  SvelteComponent: Vt,
  append: H,
  attr: j,
  binding_callbacks: Ce,
  check_outros: Je,
  create_component: St,
  create_slot: Nt,
  destroy_component: zt,
  destroy_each: Ke,
  detach: h,
  element: Z,
  empty: W,
  ensure_array_like: le,
  get_all_dirty_from_scope: Tt,
  get_slot_changes: jt,
  group_outros: Qe,
  init: Pt,
  insert: w,
  mount_component: Zt,
  noop: oe,
  safe_not_equal: Dt,
  set_data: S,
  set_style: B,
  space: P,
  text: q,
  toggle_class: V,
  transition_in: R,
  transition_out: U,
  update_slot_base: Et
} = window.__gradio__svelte__internal, { tick: Bt } = window.__gradio__svelte__internal, { onDestroy: At } = window.__gradio__svelte__internal, It = (n) => ({}), Me = (n) => ({});
function Ve(n, t, e) {
  const l = n.slice();
  return l[38] = t[e], l[40] = e, l;
}
function Se(n, t, e) {
  const l = n.slice();
  return l[38] = t[e], l;
}
function Ht(n) {
  let t, e = (
    /*i18n*/
    n[1]("common.error") + ""
  ), l, i, s;
  const o = (
    /*#slots*/
    n[29].error
  ), a = Nt(
    o,
    n,
    /*$$scope*/
    n[28],
    Me
  );
  return {
    c() {
      t = Z("span"), l = q(e), i = P(), a && a.c(), j(t, "class", "error svelte-1txqlrd");
    },
    m(r, f) {
      w(r, t, f), H(t, l), w(r, i, f), a && a.m(r, f), s = !0;
    },
    p(r, f) {
      (!s || f[0] & /*i18n*/
      2) && e !== (e = /*i18n*/
      r[1]("common.error") + "") && S(l, e), a && a.p && (!s || f[0] & /*$$scope*/
      268435456) && Et(
        a,
        o,
        r,
        /*$$scope*/
        r[28],
        s ? jt(
          o,
          /*$$scope*/
          r[28],
          f,
          It
        ) : Tt(
          /*$$scope*/
          r[28]
        ),
        Me
      );
    },
    i(r) {
      s || (R(a, r), s = !0);
    },
    o(r) {
      U(a, r), s = !1;
    },
    d(r) {
      r && (h(t), h(i)), a && a.d(r);
    }
  };
}
function Xt(n) {
  let t, e, l, i, s, o, a, r, f, _ = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && Ne(n)
  );
  function m(c, y) {
    if (
      /*progress*/
      c[7]
    )
      return Ot;
    if (
      /*queue_position*/
      c[2] !== null && /*queue_size*/
      c[3] !== void 0 && /*queue_position*/
      c[2] >= 0
    )
      return Gt;
    if (
      /*queue_position*/
      c[2] === 0
    )
      return Yt;
  }
  let b = m(n), u = b && b(n), k = (
    /*timer*/
    n[5] && je(n)
  );
  const C = [Jt, Wt], p = [];
  function L(c, y) {
    return (
      /*last_progress_level*/
      c[15] != null ? 0 : (
        /*show_progress*/
        c[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = L(n)) && (o = p[s] = C[s](n));
  let F = !/*timer*/
  n[5] && Ie(n);
  return {
    c() {
      _ && _.c(), t = P(), e = Z("div"), u && u.c(), l = P(), k && k.c(), i = P(), o && o.c(), a = P(), F && F.c(), r = W(), j(e, "class", "progress-text svelte-1txqlrd"), V(
        e,
        "meta-text-center",
        /*variant*/
        n[8] === "center"
      ), V(
        e,
        "meta-text",
        /*variant*/
        n[8] === "default"
      );
    },
    m(c, y) {
      _ && _.m(c, y), w(c, t, y), w(c, e, y), u && u.m(e, null), H(e, l), k && k.m(e, null), w(c, i, y), ~s && p[s].m(c, y), w(c, a, y), F && F.m(c, y), w(c, r, y), f = !0;
    },
    p(c, y) {
      /*variant*/
      c[8] === "default" && /*show_eta_bar*/
      c[18] && /*show_progress*/
      c[6] === "full" ? _ ? _.p(c, y) : (_ = Ne(c), _.c(), _.m(t.parentNode, t)) : _ && (_.d(1), _ = null), b === (b = m(c)) && u ? u.p(c, y) : (u && u.d(1), u = b && b(c), u && (u.c(), u.m(e, l))), /*timer*/
      c[5] ? k ? k.p(c, y) : (k = je(c), k.c(), k.m(e, null)) : k && (k.d(1), k = null), (!f || y[0] & /*variant*/
      256) && V(
        e,
        "meta-text-center",
        /*variant*/
        c[8] === "center"
      ), (!f || y[0] & /*variant*/
      256) && V(
        e,
        "meta-text",
        /*variant*/
        c[8] === "default"
      );
      let g = s;
      s = L(c), s === g ? ~s && p[s].p(c, y) : (o && (Qe(), U(p[g], 1, 1, () => {
        p[g] = null;
      }), Je()), ~s ? (o = p[s], o ? o.p(c, y) : (o = p[s] = C[s](c), o.c()), R(o, 1), o.m(a.parentNode, a)) : o = null), /*timer*/
      c[5] ? F && (F.d(1), F = null) : F ? F.p(c, y) : (F = Ie(c), F.c(), F.m(r.parentNode, r));
    },
    i(c) {
      f || (R(o), f = !0);
    },
    o(c) {
      U(o), f = !1;
    },
    d(c) {
      c && (h(t), h(e), h(i), h(a), h(r)), _ && _.d(c), u && u.d(), k && k.d(), ~s && p[s].d(c), F && F.d(c);
    }
  };
}
function Ne(n) {
  let t, e = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = Z("div"), j(t, "class", "eta-bar svelte-1txqlrd"), B(t, "transform", e);
    },
    m(l, i) {
      w(l, t, i);
    },
    p(l, i) {
      i[0] & /*eta_level*/
      131072 && e !== (e = `translateX(${/*eta_level*/
      (l[17] || 0) * 100 - 100}%)`) && B(t, "transform", e);
    },
    d(l) {
      l && h(t);
    }
  };
}
function Yt(n) {
  let t;
  return {
    c() {
      t = q("processing |");
    },
    m(e, l) {
      w(e, t, l);
    },
    p: oe,
    d(e) {
      e && h(t);
    }
  };
}
function Gt(n) {
  let t, e = (
    /*queue_position*/
    n[2] + 1 + ""
  ), l, i, s, o;
  return {
    c() {
      t = q("queue: "), l = q(e), i = q("/"), s = q(
        /*queue_size*/
        n[3]
      ), o = q(" |");
    },
    m(a, r) {
      w(a, t, r), w(a, l, r), w(a, i, r), w(a, s, r), w(a, o, r);
    },
    p(a, r) {
      r[0] & /*queue_position*/
      4 && e !== (e = /*queue_position*/
      a[2] + 1 + "") && S(l, e), r[0] & /*queue_size*/
      8 && S(
        s,
        /*queue_size*/
        a[3]
      );
    },
    d(a) {
      a && (h(t), h(l), h(i), h(s), h(o));
    }
  };
}
function Ot(n) {
  let t, e = le(
    /*progress*/
    n[7]
  ), l = [];
  for (let i = 0; i < e.length; i += 1)
    l[i] = Te(Se(n, e, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      t = W();
    },
    m(i, s) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, s);
      w(i, t, s);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      128) {
        e = le(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < e.length; o += 1) {
          const a = Se(i, e, o);
          l[o] ? l[o].p(a, s) : (l[o] = Te(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = e.length;
      }
    },
    d(i) {
      i && h(t), Ke(l, i);
    }
  };
}
function ze(n) {
  let t, e = (
    /*p*/
    n[38].unit + ""
  ), l, i, s = " ", o;
  function a(_, m) {
    return (
      /*p*/
      _[38].length != null ? Ut : Rt
    );
  }
  let r = a(n), f = r(n);
  return {
    c() {
      f.c(), t = P(), l = q(e), i = q(" | "), o = q(s);
    },
    m(_, m) {
      f.m(_, m), w(_, t, m), w(_, l, m), w(_, i, m), w(_, o, m);
    },
    p(_, m) {
      r === (r = a(_)) && f ? f.p(_, m) : (f.d(1), f = r(_), f && (f.c(), f.m(t.parentNode, t))), m[0] & /*progress*/
      128 && e !== (e = /*p*/
      _[38].unit + "") && S(l, e);
    },
    d(_) {
      _ && (h(t), h(l), h(i), h(o)), f.d(_);
    }
  };
}
function Rt(n) {
  let t = G(
    /*p*/
    n[38].index || 0
  ) + "", e;
  return {
    c() {
      e = q(t);
    },
    m(l, i) {
      w(l, e, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && t !== (t = G(
        /*p*/
        l[38].index || 0
      ) + "") && S(e, t);
    },
    d(l) {
      l && h(e);
    }
  };
}
function Ut(n) {
  let t = G(
    /*p*/
    n[38].index || 0
  ) + "", e, l, i = G(
    /*p*/
    n[38].length
  ) + "", s;
  return {
    c() {
      e = q(t), l = q("/"), s = q(i);
    },
    m(o, a) {
      w(o, e, a), w(o, l, a), w(o, s, a);
    },
    p(o, a) {
      a[0] & /*progress*/
      128 && t !== (t = G(
        /*p*/
        o[38].index || 0
      ) + "") && S(e, t), a[0] & /*progress*/
      128 && i !== (i = G(
        /*p*/
        o[38].length
      ) + "") && S(s, i);
    },
    d(o) {
      o && (h(e), h(l), h(s));
    }
  };
}
function Te(n) {
  let t, e = (
    /*p*/
    n[38].index != null && ze(n)
  );
  return {
    c() {
      e && e.c(), t = W();
    },
    m(l, i) {
      e && e.m(l, i), w(l, t, i);
    },
    p(l, i) {
      /*p*/
      l[38].index != null ? e ? e.p(l, i) : (e = ze(l), e.c(), e.m(t.parentNode, t)) : e && (e.d(1), e = null);
    },
    d(l) {
      l && h(t), e && e.d(l);
    }
  };
}
function je(n) {
  let t, e = (
    /*eta*/
    n[0] ? `/${/*formatted_eta*/
    n[19]}` : ""
  ), l, i;
  return {
    c() {
      t = q(
        /*formatted_timer*/
        n[20]
      ), l = q(e), i = q("s");
    },
    m(s, o) {
      w(s, t, o), w(s, l, o), w(s, i, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && S(
        t,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && e !== (e = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && S(l, e);
    },
    d(s) {
      s && (h(t), h(l), h(i));
    }
  };
}
function Wt(n) {
  let t, e;
  return t = new Mt({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      St(t.$$.fragment);
    },
    m(l, i) {
      Zt(t, l, i), e = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*variant*/
      256 && (s.margin = /*variant*/
      l[8] === "default"), t.$set(s);
    },
    i(l) {
      e || (R(t.$$.fragment, l), e = !0);
    },
    o(l) {
      U(t.$$.fragment, l), e = !1;
    },
    d(l) {
      zt(t, l);
    }
  };
}
function Jt(n) {
  let t, e, l, i, s, o = `${/*last_progress_level*/
  n[15] * 100}%`, a = (
    /*progress*/
    n[7] != null && Pe(n)
  );
  return {
    c() {
      t = Z("div"), e = Z("div"), a && a.c(), l = P(), i = Z("div"), s = Z("div"), j(e, "class", "progress-level-inner svelte-1txqlrd"), j(s, "class", "progress-bar svelte-1txqlrd"), B(s, "width", o), j(i, "class", "progress-bar-wrap svelte-1txqlrd"), j(t, "class", "progress-level svelte-1txqlrd");
    },
    m(r, f) {
      w(r, t, f), H(t, e), a && a.m(e, null), H(t, l), H(t, i), H(i, s), n[30](s);
    },
    p(r, f) {
      /*progress*/
      r[7] != null ? a ? a.p(r, f) : (a = Pe(r), a.c(), a.m(e, null)) : a && (a.d(1), a = null), f[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      r[15] * 100}%`) && B(s, "width", o);
    },
    i: oe,
    o: oe,
    d(r) {
      r && h(t), a && a.d(), n[30](null);
    }
  };
}
function Pe(n) {
  let t, e = le(
    /*progress*/
    n[7]
  ), l = [];
  for (let i = 0; i < e.length; i += 1)
    l[i] = Ae(Ve(n, e, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      t = W();
    },
    m(i, s) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, s);
      w(i, t, s);
    },
    p(i, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        e = le(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < e.length; o += 1) {
          const a = Ve(i, e, o);
          l[o] ? l[o].p(a, s) : (l[o] = Ae(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = e.length;
      }
    },
    d(i) {
      i && h(t), Ke(l, i);
    }
  };
}
function Ze(n) {
  let t, e, l, i, s = (
    /*i*/
    n[40] !== 0 && Kt()
  ), o = (
    /*p*/
    n[38].desc != null && De(n)
  ), a = (
    /*p*/
    n[38].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[40]
    ] != null && Ee()
  ), r = (
    /*progress_level*/
    n[14] != null && Be(n)
  );
  return {
    c() {
      s && s.c(), t = P(), o && o.c(), e = P(), a && a.c(), l = P(), r && r.c(), i = W();
    },
    m(f, _) {
      s && s.m(f, _), w(f, t, _), o && o.m(f, _), w(f, e, _), a && a.m(f, _), w(f, l, _), r && r.m(f, _), w(f, i, _);
    },
    p(f, _) {
      /*p*/
      f[38].desc != null ? o ? o.p(f, _) : (o = De(f), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), /*p*/
      f[38].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[40]
      ] != null ? a || (a = Ee(), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null), /*progress_level*/
      f[14] != null ? r ? r.p(f, _) : (r = Be(f), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null);
    },
    d(f) {
      f && (h(t), h(e), h(l), h(i)), s && s.d(f), o && o.d(f), a && a.d(f), r && r.d(f);
    }
  };
}
function Kt(n) {
  let t;
  return {
    c() {
      t = q(" /");
    },
    m(e, l) {
      w(e, t, l);
    },
    d(e) {
      e && h(t);
    }
  };
}
function De(n) {
  let t = (
    /*p*/
    n[38].desc + ""
  ), e;
  return {
    c() {
      e = q(t);
    },
    m(l, i) {
      w(l, e, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && t !== (t = /*p*/
      l[38].desc + "") && S(e, t);
    },
    d(l) {
      l && h(e);
    }
  };
}
function Ee(n) {
  let t;
  return {
    c() {
      t = q("-");
    },
    m(e, l) {
      w(e, t, l);
    },
    d(e) {
      e && h(t);
    }
  };
}
function Be(n) {
  let t = (100 * /*progress_level*/
  (n[14][
    /*i*/
    n[40]
  ] || 0)).toFixed(1) + "", e, l;
  return {
    c() {
      e = q(t), l = q("%");
    },
    m(i, s) {
      w(i, e, s), w(i, l, s);
    },
    p(i, s) {
      s[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && S(e, t);
    },
    d(i) {
      i && (h(e), h(l));
    }
  };
}
function Ae(n) {
  let t, e = (
    /*p*/
    (n[38].desc != null || /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[40]
    ] != null) && Ze(n)
  );
  return {
    c() {
      e && e.c(), t = W();
    },
    m(l, i) {
      e && e.m(l, i), w(l, t, i);
    },
    p(l, i) {
      /*p*/
      l[38].desc != null || /*progress_level*/
      l[14] && /*progress_level*/
      l[14][
        /*i*/
        l[40]
      ] != null ? e ? e.p(l, i) : (e = Ze(l), e.c(), e.m(t.parentNode, t)) : e && (e.d(1), e = null);
    },
    d(l) {
      l && h(t), e && e.d(l);
    }
  };
}
function Ie(n) {
  let t, e;
  return {
    c() {
      t = Z("p"), e = q(
        /*loading_text*/
        n[9]
      ), j(t, "class", "loading svelte-1txqlrd");
    },
    m(l, i) {
      w(l, t, i), H(t, e);
    },
    p(l, i) {
      i[0] & /*loading_text*/
      512 && S(
        e,
        /*loading_text*/
        l[9]
      );
    },
    d(l) {
      l && h(t);
    }
  };
}
function Qt(n) {
  let t, e, l, i, s;
  const o = [Xt, Ht], a = [];
  function r(f, _) {
    return (
      /*status*/
      f[4] === "pending" ? 0 : (
        /*status*/
        f[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(e = r(n)) && (l = a[e] = o[e](n)), {
    c() {
      t = Z("div"), l && l.c(), j(t, "class", i = "wrap " + /*variant*/
      n[8] + " " + /*show_progress*/
      n[6] + " svelte-1txqlrd"), V(t, "hide", !/*status*/
      n[4] || /*status*/
      n[4] === "complete" || /*show_progress*/
      n[6] === "hidden"), V(
        t,
        "translucent",
        /*variant*/
        n[8] === "center" && /*status*/
        (n[4] === "pending" || /*status*/
        n[4] === "error") || /*translucent*/
        n[11] || /*show_progress*/
        n[6] === "minimal"
      ), V(
        t,
        "generating",
        /*status*/
        n[4] === "generating"
      ), V(
        t,
        "border",
        /*border*/
        n[12]
      ), B(
        t,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), B(
        t,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, _) {
      w(f, t, _), ~e && a[e].m(t, null), n[31](t), s = !0;
    },
    p(f, _) {
      let m = e;
      e = r(f), e === m ? ~e && a[e].p(f, _) : (l && (Qe(), U(a[m], 1, 1, () => {
        a[m] = null;
      }), Je()), ~e ? (l = a[e], l ? l.p(f, _) : (l = a[e] = o[e](f), l.c()), R(l, 1), l.m(t, null)) : l = null), (!s || _[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-1txqlrd")) && j(t, "class", i), (!s || _[0] & /*variant, show_progress, status, show_progress*/
      336) && V(t, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!s || _[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && V(
        t,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!s || _[0] & /*variant, show_progress, status*/
      336) && V(
        t,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!s || _[0] & /*variant, show_progress, border*/
      4416) && V(
        t,
        "border",
        /*border*/
        f[12]
      ), _[0] & /*absolute*/
      1024 && B(
        t,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), _[0] & /*absolute*/
      1024 && B(
        t,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      s || (R(l), s = !0);
    },
    o(f) {
      U(l), s = !1;
    },
    d(f) {
      f && h(t), ~e && a[e].d(), n[31](null);
    }
  };
}
let ee = [], fe = !1;
async function xt(n, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (ee.push(n), !fe)
      fe = !0;
    else
      return;
    await Bt(), requestAnimationFrame(() => {
      let e = [0, 0];
      for (let l = 0; l < ee.length; l++) {
        const s = ee[l].getBoundingClientRect();
        (l === 0 || s.top + window.scrollY <= e[0]) && (e[0] = s.top + window.scrollY, e[1] = l);
      }
      window.scrollTo({ top: e[0] - 20, behavior: "smooth" }), fe = !1, ee = [];
    });
  }
}
function $t(n, t, e) {
  let l, { $$slots: i = {}, $$scope: s } = t, { i18n: o } = t, { eta: a = null } = t, { queue: r = !1 } = t, { queue_position: f } = t, { queue_size: _ } = t, { status: m } = t, { scroll_to_output: b = !1 } = t, { timer: u = !0 } = t, { show_progress: k = "full" } = t, { message: C = null } = t, { progress: p = null } = t, { variant: L = "default" } = t, { loading_text: F = "Loading..." } = t, { absolute: c = !0 } = t, { translucent: y = !1 } = t, { border: g = !1 } = t, { autoscroll: ne } = t, J, K = !1, x = 0, A = 0, ie = null, de = 0, I = null, Q, D = null, me = !0;
  const et = () => {
    e(25, x = performance.now()), e(26, A = 0), K = !0, be();
  };
  function be() {
    requestAnimationFrame(() => {
      e(26, A = (performance.now() - x) / 1e3), K && be();
    });
  }
  function ge() {
    e(26, A = 0), K && (K = !1);
  }
  At(() => {
    K && ge();
  });
  let he = null;
  function tt(d) {
    Ce[d ? "unshift" : "push"](() => {
      D = d, e(16, D), e(7, p), e(14, I), e(15, Q);
    });
  }
  function lt(d) {
    Ce[d ? "unshift" : "push"](() => {
      J = d, e(13, J);
    });
  }
  return n.$$set = (d) => {
    "i18n" in d && e(1, o = d.i18n), "eta" in d && e(0, a = d.eta), "queue" in d && e(21, r = d.queue), "queue_position" in d && e(2, f = d.queue_position), "queue_size" in d && e(3, _ = d.queue_size), "status" in d && e(4, m = d.status), "scroll_to_output" in d && e(22, b = d.scroll_to_output), "timer" in d && e(5, u = d.timer), "show_progress" in d && e(6, k = d.show_progress), "message" in d && e(23, C = d.message), "progress" in d && e(7, p = d.progress), "variant" in d && e(8, L = d.variant), "loading_text" in d && e(9, F = d.loading_text), "absolute" in d && e(10, c = d.absolute), "translucent" in d && e(11, y = d.translucent), "border" in d && e(12, g = d.border), "autoscroll" in d && e(24, ne = d.autoscroll), "$$scope" in d && e(28, s = d.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (a === null ? e(0, a = ie) : r && e(0, a = (performance.now() - x) / 1e3 + a), a != null && (e(19, he = a.toFixed(1)), e(27, ie = a))), n.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && e(17, de = a === null || a <= 0 || !A ? null : Math.min(A / a, 1)), n.$$.dirty[0] & /*progress*/
    128 && p != null && e(18, me = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (p != null ? e(14, I = p.map((d) => {
      if (d.index != null && d.length != null)
        return d.index / d.length;
      if (d.progress != null)
        return d.progress;
    })) : e(14, I = null), I ? (e(15, Q = I[I.length - 1]), D && (Q === 0 ? e(16, D.style.transition = "0", D) : e(16, D.style.transition = "150ms", D))) : e(15, Q = void 0)), n.$$.dirty[0] & /*status*/
    16 && (m === "pending" ? et() : ge()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && J && b && (m === "pending" || m === "complete") && xt(J, ne), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && e(20, l = A.toFixed(1));
  }, [
    a,
    o,
    f,
    _,
    m,
    u,
    k,
    p,
    L,
    F,
    c,
    y,
    g,
    J,
    I,
    Q,
    D,
    de,
    me,
    he,
    l,
    r,
    b,
    C,
    ne,
    x,
    A,
    ie,
    s,
    i,
    tt,
    lt
  ];
}
class el extends Vt {
  constructor(t) {
    super(), Pt(
      this,
      t,
      $t,
      Qt,
      Dt,
      {
        i18n: 1,
        eta: 0,
        queue: 21,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: tl,
  assign: ll,
  create_slot: nl,
  detach: il,
  element: fl,
  get_all_dirty_from_scope: sl,
  get_slot_changes: ol,
  get_spread_update: al,
  init: rl,
  insert: _l,
  safe_not_equal: ul,
  set_dynamic_element_data: He,
  set_style: M,
  toggle_class: E,
  transition_in: xe,
  transition_out: $e,
  update_slot_base: cl
} = window.__gradio__svelte__internal;
function dl(n) {
  let t, e, l;
  const i = (
    /*#slots*/
    n[17].default
  ), s = nl(
    i,
    n,
    /*$$scope*/
    n[16],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      n[7]
    ) },
    { id: (
      /*elem_id*/
      n[2]
    ) },
    {
      class: e = "block " + /*elem_classes*/
      n[3].join(" ") + " svelte-1t38q2d"
    }
  ], a = {};
  for (let r = 0; r < o.length; r += 1)
    a = ll(a, o[r]);
  return {
    c() {
      t = fl(
        /*tag*/
        n[14]
      ), s && s.c(), He(
        /*tag*/
        n[14]
      )(t, a), E(
        t,
        "hidden",
        /*visible*/
        n[10] === !1
      ), E(
        t,
        "padded",
        /*padding*/
        n[6]
      ), E(
        t,
        "border_focus",
        /*border_mode*/
        n[5] === "focus"
      ), E(t, "hide-container", !/*explicit_call*/
      n[8] && !/*container*/
      n[9]), M(t, "height", typeof /*height*/
      n[0] == "number" ? (
        /*height*/
        n[0] + "px"
      ) : void 0), M(t, "width", typeof /*width*/
      n[1] == "number" ? `calc(min(${/*width*/
      n[1]}px, 100%))` : void 0), M(
        t,
        "border-style",
        /*variant*/
        n[4]
      ), M(
        t,
        "overflow",
        /*allow_overflow*/
        n[11] ? "visible" : "hidden"
      ), M(
        t,
        "flex-grow",
        /*scale*/
        n[12]
      ), M(t, "min-width", `calc(min(${/*min_width*/
      n[13]}px, 100%))`), M(t, "border-width", "var(--block-border-width)");
    },
    m(r, f) {
      _l(r, t, f), s && s.m(t, null), l = !0;
    },
    p(r, f) {
      s && s.p && (!l || f & /*$$scope*/
      65536) && cl(
        s,
        i,
        r,
        /*$$scope*/
        r[16],
        l ? ol(
          i,
          /*$$scope*/
          r[16],
          f,
          null
        ) : sl(
          /*$$scope*/
          r[16]
        ),
        null
      ), He(
        /*tag*/
        r[14]
      )(t, a = al(o, [
        (!l || f & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          r[7]
        ) },
        (!l || f & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          r[2]
        ) },
        (!l || f & /*elem_classes*/
        8 && e !== (e = "block " + /*elem_classes*/
        r[3].join(" ") + " svelte-1t38q2d")) && { class: e }
      ])), E(
        t,
        "hidden",
        /*visible*/
        r[10] === !1
      ), E(
        t,
        "padded",
        /*padding*/
        r[6]
      ), E(
        t,
        "border_focus",
        /*border_mode*/
        r[5] === "focus"
      ), E(t, "hide-container", !/*explicit_call*/
      r[8] && !/*container*/
      r[9]), f & /*height*/
      1 && M(t, "height", typeof /*height*/
      r[0] == "number" ? (
        /*height*/
        r[0] + "px"
      ) : void 0), f & /*width*/
      2 && M(t, "width", typeof /*width*/
      r[1] == "number" ? `calc(min(${/*width*/
      r[1]}px, 100%))` : void 0), f & /*variant*/
      16 && M(
        t,
        "border-style",
        /*variant*/
        r[4]
      ), f & /*allow_overflow*/
      2048 && M(
        t,
        "overflow",
        /*allow_overflow*/
        r[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && M(
        t,
        "flex-grow",
        /*scale*/
        r[12]
      ), f & /*min_width*/
      8192 && M(t, "min-width", `calc(min(${/*min_width*/
      r[13]}px, 100%))`);
    },
    i(r) {
      l || (xe(s, r), l = !0);
    },
    o(r) {
      $e(s, r), l = !1;
    },
    d(r) {
      r && il(t), s && s.d(r);
    }
  };
}
function ml(n) {
  let t, e = (
    /*tag*/
    n[14] && dl(n)
  );
  return {
    c() {
      e && e.c();
    },
    m(l, i) {
      e && e.m(l, i), t = !0;
    },
    p(l, [i]) {
      /*tag*/
      l[14] && e.p(l, i);
    },
    i(l) {
      t || (xe(e, l), t = !0);
    },
    o(l) {
      $e(e, l), t = !1;
    },
    d(l) {
      e && e.d(l);
    }
  };
}
function bl(n, t, e) {
  let { $$slots: l = {}, $$scope: i } = t, { height: s = void 0 } = t, { width: o = void 0 } = t, { elem_id: a = "" } = t, { elem_classes: r = [] } = t, { variant: f = "solid" } = t, { border_mode: _ = "base" } = t, { padding: m = !0 } = t, { type: b = "normal" } = t, { test_id: u = void 0 } = t, { explicit_call: k = !1 } = t, { container: C = !0 } = t, { visible: p = !0 } = t, { allow_overflow: L = !0 } = t, { scale: F = null } = t, { min_width: c = 0 } = t, y = b === "fieldset" ? "fieldset" : "div";
  return n.$$set = (g) => {
    "height" in g && e(0, s = g.height), "width" in g && e(1, o = g.width), "elem_id" in g && e(2, a = g.elem_id), "elem_classes" in g && e(3, r = g.elem_classes), "variant" in g && e(4, f = g.variant), "border_mode" in g && e(5, _ = g.border_mode), "padding" in g && e(6, m = g.padding), "type" in g && e(15, b = g.type), "test_id" in g && e(7, u = g.test_id), "explicit_call" in g && e(8, k = g.explicit_call), "container" in g && e(9, C = g.container), "visible" in g && e(10, p = g.visible), "allow_overflow" in g && e(11, L = g.allow_overflow), "scale" in g && e(12, F = g.scale), "min_width" in g && e(13, c = g.min_width), "$$scope" in g && e(16, i = g.$$scope);
  }, [
    s,
    o,
    a,
    r,
    f,
    _,
    m,
    u,
    k,
    C,
    p,
    L,
    F,
    c,
    y,
    b,
    i,
    l
  ];
}
class gl extends tl {
  constructor(t) {
    super(), rl(this, t, bl, ml, ul, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 15,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const hl = [
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
], Xe = {
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
hl.reduce(
  (n, { color: t, primary: e, secondary: l }) => ({
    ...n,
    [t]: {
      primary: Xe[t][e],
      secondary: Xe[t][l]
    }
  }),
  {}
);
const {
  SvelteComponent: wl,
  assign: vl,
  attr: kl,
  create_component: ae,
  destroy_component: re,
  detach: Ye,
  element: yl,
  get_spread_object: pl,
  get_spread_update: ql,
  init: Fl,
  insert: Ge,
  mount_component: _e,
  safe_not_equal: Ll,
  space: Cl,
  toggle_class: Oe,
  transition_in: ue,
  transition_out: ce
} = window.__gradio__svelte__internal;
function Ml(n) {
  var r;
  let t, e, l, i, s;
  const o = [
    { autoscroll: (
      /*gradio*/
      n[7].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      n[7].i18n
    ) },
    /*loading_status*/
    n[6],
    { variant: "center" }
  ];
  let a = {};
  for (let f = 0; f < o.length; f += 1)
    a = vl(a, o[f]);
  return t = new el({ props: a }), i = new mt({
    props: {
      min_height: (
        /*loading_status*/
        n[6] && /*loading_status*/
        ((r = n[6]) == null ? void 0 : r.status) !== "complete"
      ),
      value: (
        /*value*/
        n[3]
      ),
      elem_classes: (
        /*elem_classes*/
        n[1]
      ),
      visible: (
        /*visible*/
        n[2]
      ),
      height: (
        /*height*/
        n[4]
      ),
      width: (
        /*width*/
        n[5]
      )
    }
  }), i.$on(
    "change",
    /*change_handler*/
    n[9]
  ), {
    c() {
      var f;
      ae(t.$$.fragment), e = Cl(), l = yl("div"), ae(i.$$.fragment), kl(l, "class", "svelte-gqsrr7"), Oe(
        l,
        "pending",
        /*loading_status*/
        ((f = n[6]) == null ? void 0 : f.status) === "pending"
      );
    },
    m(f, _) {
      _e(t, f, _), Ge(f, e, _), Ge(f, l, _), _e(i, l, null), s = !0;
    },
    p(f, _) {
      var u, k;
      const m = _ & /*gradio, loading_status*/
      192 ? ql(o, [
        _ & /*gradio*/
        128 && { autoscroll: (
          /*gradio*/
          f[7].autoscroll
        ) },
        _ & /*gradio*/
        128 && { i18n: (
          /*gradio*/
          f[7].i18n
        ) },
        _ & /*loading_status*/
        64 && pl(
          /*loading_status*/
          f[6]
        ),
        o[3]
      ]) : {};
      t.$set(m);
      const b = {};
      _ & /*loading_status*/
      64 && (b.min_height = /*loading_status*/
      f[6] && /*loading_status*/
      ((u = f[6]) == null ? void 0 : u.status) !== "complete"), _ & /*value*/
      8 && (b.value = /*value*/
      f[3]), _ & /*elem_classes*/
      2 && (b.elem_classes = /*elem_classes*/
      f[1]), _ & /*visible*/
      4 && (b.visible = /*visible*/
      f[2]), _ & /*height*/
      16 && (b.height = /*height*/
      f[4]), _ & /*width*/
      32 && (b.width = /*width*/
      f[5]), i.$set(b), (!s || _ & /*loading_status*/
      64) && Oe(
        l,
        "pending",
        /*loading_status*/
        ((k = f[6]) == null ? void 0 : k.status) === "pending"
      );
    },
    i(f) {
      s || (ue(t.$$.fragment, f), ue(i.$$.fragment, f), s = !0);
    },
    o(f) {
      ce(t.$$.fragment, f), ce(i.$$.fragment, f), s = !1;
    },
    d(f) {
      f && (Ye(e), Ye(l)), re(t, f), re(i);
    }
  };
}
function Vl(n) {
  let t, e;
  return t = new gl({
    props: {
      visible: (
        /*visible*/
        n[2]
      ),
      elem_id: (
        /*elem_id*/
        n[0]
      ),
      elem_classes: (
        /*elem_classes*/
        n[1]
      ),
      container: !1,
      height: (
        /*height*/
        n[4]
      ),
      $$slots: { default: [Ml] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ae(t.$$.fragment);
    },
    m(l, i) {
      _e(t, l, i), e = !0;
    },
    p(l, [i]) {
      const s = {};
      i & /*visible*/
      4 && (s.visible = /*visible*/
      l[2]), i & /*elem_id*/
      1 && (s.elem_id = /*elem_id*/
      l[0]), i & /*elem_classes*/
      2 && (s.elem_classes = /*elem_classes*/
      l[1]), i & /*height*/
      16 && (s.height = /*height*/
      l[4]), i & /*$$scope, loading_status, value, elem_classes, visible, height, width, gradio*/
      1278 && (s.$$scope = { dirty: i, ctx: l }), t.$set(s);
    },
    i(l) {
      e || (ue(t.$$.fragment, l), e = !0);
    },
    o(l) {
      ce(t.$$.fragment, l), e = !1;
    },
    d(l) {
      re(t, l);
    }
  };
}
function Sl(n, t, e) {
  let { label: l } = t, { elem_id: i = "" } = t, { elem_classes: s = [] } = t, { visible: o = !0 } = t, { value: a = "" } = t, { height: r = "100%" } = t, { width: f = "100%" } = t, { loading_status: _ } = t, { gradio: m } = t;
  const b = () => m.dispatch("change");
  return n.$$set = (u) => {
    "label" in u && e(8, l = u.label), "elem_id" in u && e(0, i = u.elem_id), "elem_classes" in u && e(1, s = u.elem_classes), "visible" in u && e(2, o = u.visible), "value" in u && e(3, a = u.value), "height" in u && e(4, r = u.height), "width" in u && e(5, f = u.width), "loading_status" in u && e(6, _ = u.loading_status), "gradio" in u && e(7, m = u.gradio);
  }, n.$$.update = () => {
    n.$$.dirty & /*label, gradio*/
    384 && m.dispatch("change");
  }, [
    i,
    s,
    o,
    a,
    r,
    f,
    _,
    m,
    l,
    b
  ];
}
class Nl extends wl {
  constructor(t) {
    super(), Fl(this, t, Sl, Vl, Ll, {
      label: 8,
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      value: 3,
      height: 4,
      width: 5,
      loading_status: 6,
      gradio: 7
    });
  }
}
export {
  Nl as default
};

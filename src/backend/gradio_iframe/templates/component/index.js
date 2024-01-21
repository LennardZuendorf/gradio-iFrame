const {
  SvelteComponent: nt,
  append: it,
  attr: P,
  detach: ft,
  element: we,
  init: st,
  insert: ot,
  noop: ve,
  safe_not_equal: at,
  toggle_class: x
} = window.__gradio__svelte__internal, { createEventDispatcher: rt } = window.__gradio__svelte__internal;
function _t(n) {
  let t, e, l;
  return {
    c() {
      t = we("div"), e = we("iframe"), P(e, "title", "iframe component"), P(e, "width", "100%"), P(
        e,
        "height",
        /*height*/
        n[4]
      ), P(
        e,
        "srcdoc",
        /*value*/
        n[1]
      ), P(e, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"), e.allowFullscreen = !0, P(t, "class", l = "prose " + /*elem_classes*/
      n[0].join(" ") + " svelte-2qygph"), x(
        t,
        "min",
        /*min_height*/
        n[3]
      ), x(t, "hide", !/*visible*/
      n[2]);
    },
    m(i, s) {
      ot(i, t, s), it(t, e);
    },
    p(i, [s]) {
      s & /*height*/
      16 && P(
        e,
        "height",
        /*height*/
        i[4]
      ), s & /*value*/
      2 && P(
        e,
        "srcdoc",
        /*value*/
        i[1]
      ), s & /*elem_classes*/
      1 && l !== (l = "prose " + /*elem_classes*/
      i[0].join(" ") + " svelte-2qygph") && P(t, "class", l), s & /*elem_classes, min_height*/
      9 && x(
        t,
        "min",
        /*min_height*/
        i[3]
      ), s & /*elem_classes, visible*/
      5 && x(t, "hide", !/*visible*/
      i[2]);
    },
    i: ve,
    o: ve,
    d(i) {
      i && ft(t);
    }
  };
}
function ut(n, t, e) {
  let { elem_classes: l = [] } = t, { value: i } = t, { visible: s = !0 } = t, { min_height: o = !1 } = t, { height: a = "100%" } = t;
  const r = rt();
  return n.$$set = (f) => {
    "elem_classes" in f && e(0, l = f.elem_classes), "value" in f && e(1, i = f.value), "visible" in f && e(2, s = f.visible), "min_height" in f && e(3, o = f.min_height), "height" in f && e(4, a = f.height);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    2 && r("change");
  }, [l, i, s, o, a];
}
class ct extends nt {
  constructor(t) {
    super(), st(this, t, ut, _t, at, {
      elem_classes: 0,
      value: 1,
      visible: 2,
      min_height: 3,
      height: 4
    });
  }
}
function Y(n) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], e = 0;
  for (; n > 1e3 && e < t.length - 1; )
    n /= 1e3, e++;
  let l = t[e];
  return (Number.isInteger(n) ? n : n.toFixed(1)) + l;
}
function te() {
}
function dt(n, t) {
  return n != n ? t == t : n !== t || n && typeof n == "object" || typeof n == "function";
}
const Re = typeof window < "u";
let ye = Re ? () => window.performance.now() : () => Date.now(), Ue = Re ? (n) => requestAnimationFrame(n) : te;
const G = /* @__PURE__ */ new Set();
function Je(n) {
  G.forEach((t) => {
    t.c(n) || (G.delete(t), t.f());
  }), G.size !== 0 && Ue(Je);
}
function mt(n) {
  let t;
  return G.size === 0 && Ue(Je), {
    promise: new Promise((e) => {
      G.add(t = { c: n, f: e });
    }),
    abort() {
      G.delete(t);
    }
  };
}
const X = [];
function bt(n, t = te) {
  let e;
  const l = /* @__PURE__ */ new Set();
  function i(a) {
    if (dt(n, a) && (n = a, e)) {
      const r = !X.length;
      for (const f of l)
        f[1](), X.push(f, n);
      if (r) {
        for (let f = 0; f < X.length; f += 2)
          X[f][0](X[f + 1]);
        X.length = 0;
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
function ke(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function se(n, t, e, l) {
  if (typeof e == "number" || ke(e)) {
    const i = l - e, s = (e - t) / (n.dt || 1 / 60), o = n.opts.stiffness * i, a = n.opts.damping * s, r = (o - a) * n.inv_mass, f = (s + r) * n.dt;
    return Math.abs(f) < n.opts.precision && Math.abs(i) < n.opts.precision ? l : (n.settled = !1, ke(e) ? new Date(e.getTime() + f) : e + f);
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
  const e = bt(n), { stiffness: l = 0.15, damping: i = 0.8, precision: s = 0.01 } = t;
  let o, a, r, f = n, _ = n, m = 1, c = 0, w = !1;
  function y(p, L = {}) {
    _ = p;
    const F = r = {};
    return n == null || L.hard || C.stiffness >= 1 && C.damping >= 1 ? (w = !0, o = ye(), f = p, e.set(n = _), Promise.resolve()) : (L.soft && (c = 1 / ((L.soft === !0 ? 0.5 : +L.soft) * 60), m = 0), a || (o = ye(), w = !1, a = mt((u) => {
      if (w)
        return w = !1, a = null, !1;
      m = Math.min(m + c, 1);
      const k = {
        inv_mass: m,
        opts: C,
        settled: !0,
        dt: (u - o) * 60 / 1e3
      }, b = se(k, f, n, _);
      return o = u, f = n, e.set(n = b), k.settled && (a = null), !k.settled;
    })), new Promise((u) => {
      a.promise.then(() => {
        F === r && u();
      });
    }));
  }
  const C = {
    set: y,
    update: (p, L) => y(p(_, n), L),
    subscribe: e.subscribe,
    stiffness: l,
    damping: i,
    precision: s
  };
  return C;
}
const {
  SvelteComponent: gt,
  append: N,
  attr: v,
  component_subscribe: qe,
  detach: ht,
  element: wt,
  init: vt,
  insert: yt,
  noop: Fe,
  safe_not_equal: kt,
  set_style: $,
  svg_element: z,
  toggle_class: Le
} = window.__gradio__svelte__internal, { onMount: pt } = window.__gradio__svelte__internal;
function qt(n) {
  let t, e, l, i, s, o, a, r, f, _, m, c;
  return {
    c() {
      t = wt("div"), e = z("svg"), l = z("g"), i = z("path"), s = z("path"), o = z("path"), a = z("path"), r = z("g"), f = z("path"), _ = z("path"), m = z("path"), c = z("path"), v(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), v(i, "fill", "#FF7C00"), v(i, "fill-opacity", "0.4"), v(i, "class", "svelte-43sxxs"), v(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), v(s, "fill", "#FF7C00"), v(s, "class", "svelte-43sxxs"), v(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), v(o, "fill", "#FF7C00"), v(o, "fill-opacity", "0.4"), v(o, "class", "svelte-43sxxs"), v(a, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), v(a, "fill", "#FF7C00"), v(a, "class", "svelte-43sxxs"), $(l, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), v(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), v(f, "fill", "#FF7C00"), v(f, "fill-opacity", "0.4"), v(f, "class", "svelte-43sxxs"), v(_, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), v(_, "fill", "#FF7C00"), v(_, "class", "svelte-43sxxs"), v(m, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), v(m, "fill", "#FF7C00"), v(m, "fill-opacity", "0.4"), v(m, "class", "svelte-43sxxs"), v(c, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), v(c, "fill", "#FF7C00"), v(c, "class", "svelte-43sxxs"), $(r, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), v(e, "viewBox", "-1200 -1200 3000 3000"), v(e, "fill", "none"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "class", "svelte-43sxxs"), v(t, "class", "svelte-43sxxs"), Le(
        t,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(w, y) {
      yt(w, t, y), N(t, e), N(e, l), N(l, i), N(l, s), N(l, o), N(l, a), N(e, r), N(r, f), N(r, _), N(r, m), N(r, c);
    },
    p(w, [y]) {
      y & /*$top*/
      2 && $(l, "transform", "translate(" + /*$top*/
      w[1][0] + "px, " + /*$top*/
      w[1][1] + "px)"), y & /*$bottom*/
      4 && $(r, "transform", "translate(" + /*$bottom*/
      w[2][0] + "px, " + /*$bottom*/
      w[2][1] + "px)"), y & /*margin*/
      1 && Le(
        t,
        "margin",
        /*margin*/
        w[0]
      );
    },
    i: Fe,
    o: Fe,
    d(w) {
      w && ht(t);
    }
  };
}
function Ft(n, t, e) {
  let l, i, { margin: s = !0 } = t;
  const o = pe([0, 0]);
  qe(n, o, (c) => e(1, l = c));
  const a = pe([0, 0]);
  qe(n, a, (c) => e(2, i = c));
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
  return pt(() => (m(), () => r = !0)), n.$$set = (c) => {
    "margin" in c && e(0, s = c.margin);
  }, [s, l, i, o, a];
}
class Lt extends gt {
  constructor(t) {
    super(), vt(this, t, Ft, qt, kt, { margin: 0 });
  }
}
const {
  SvelteComponent: Ct,
  append: H,
  attr: T,
  binding_callbacks: Ce,
  check_outros: Ke,
  create_component: Mt,
  create_slot: Vt,
  destroy_component: St,
  destroy_each: Qe,
  detach: g,
  element: Z,
  empty: U,
  ensure_array_like: le,
  get_all_dirty_from_scope: Nt,
  get_slot_changes: zt,
  group_outros: We,
  init: Tt,
  insert: h,
  mount_component: jt,
  noop: oe,
  safe_not_equal: Pt,
  set_data: S,
  set_style: D,
  space: j,
  text: q,
  toggle_class: V,
  transition_in: O,
  transition_out: R,
  update_slot_base: Zt
} = window.__gradio__svelte__internal, { tick: Bt } = window.__gradio__svelte__internal, { onDestroy: At } = window.__gradio__svelte__internal, Dt = (n) => ({}), Me = (n) => ({});
function Ve(n, t, e) {
  const l = n.slice();
  return l[38] = t[e], l[40] = e, l;
}
function Se(n, t, e) {
  const l = n.slice();
  return l[38] = t[e], l;
}
function Et(n) {
  let t, e = (
    /*i18n*/
    n[1]("common.error") + ""
  ), l, i, s;
  const o = (
    /*#slots*/
    n[29].error
  ), a = Vt(
    o,
    n,
    /*$$scope*/
    n[28],
    Me
  );
  return {
    c() {
      t = Z("span"), l = q(e), i = j(), a && a.c(), T(t, "class", "error svelte-1txqlrd");
    },
    m(r, f) {
      h(r, t, f), H(t, l), h(r, i, f), a && a.m(r, f), s = !0;
    },
    p(r, f) {
      (!s || f[0] & /*i18n*/
      2) && e !== (e = /*i18n*/
      r[1]("common.error") + "") && S(l, e), a && a.p && (!s || f[0] & /*$$scope*/
      268435456) && Zt(
        a,
        o,
        r,
        /*$$scope*/
        r[28],
        s ? zt(
          o,
          /*$$scope*/
          r[28],
          f,
          Dt
        ) : Nt(
          /*$$scope*/
          r[28]
        ),
        Me
      );
    },
    i(r) {
      s || (O(a, r), s = !0);
    },
    o(r) {
      R(a, r), s = !1;
    },
    d(r) {
      r && (g(t), g(i)), a && a.d(r);
    }
  };
}
function It(n) {
  let t, e, l, i, s, o, a, r, f, _ = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && Ne(n)
  );
  function m(u, k) {
    if (
      /*progress*/
      u[7]
    )
      return Yt;
    if (
      /*queue_position*/
      u[2] !== null && /*queue_size*/
      u[3] !== void 0 && /*queue_position*/
      u[2] >= 0
    )
      return Xt;
    if (
      /*queue_position*/
      u[2] === 0
    )
      return Ht;
  }
  let c = m(n), w = c && c(n), y = (
    /*timer*/
    n[5] && je(n)
  );
  const C = [Ut, Rt], p = [];
  function L(u, k) {
    return (
      /*last_progress_level*/
      u[15] != null ? 0 : (
        /*show_progress*/
        u[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = L(n)) && (o = p[s] = C[s](n));
  let F = !/*timer*/
  n[5] && Ie(n);
  return {
    c() {
      _ && _.c(), t = j(), e = Z("div"), w && w.c(), l = j(), y && y.c(), i = j(), o && o.c(), a = j(), F && F.c(), r = U(), T(e, "class", "progress-text svelte-1txqlrd"), V(
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
    m(u, k) {
      _ && _.m(u, k), h(u, t, k), h(u, e, k), w && w.m(e, null), H(e, l), y && y.m(e, null), h(u, i, k), ~s && p[s].m(u, k), h(u, a, k), F && F.m(u, k), h(u, r, k), f = !0;
    },
    p(u, k) {
      /*variant*/
      u[8] === "default" && /*show_eta_bar*/
      u[18] && /*show_progress*/
      u[6] === "full" ? _ ? _.p(u, k) : (_ = Ne(u), _.c(), _.m(t.parentNode, t)) : _ && (_.d(1), _ = null), c === (c = m(u)) && w ? w.p(u, k) : (w && w.d(1), w = c && c(u), w && (w.c(), w.m(e, l))), /*timer*/
      u[5] ? y ? y.p(u, k) : (y = je(u), y.c(), y.m(e, null)) : y && (y.d(1), y = null), (!f || k[0] & /*variant*/
      256) && V(
        e,
        "meta-text-center",
        /*variant*/
        u[8] === "center"
      ), (!f || k[0] & /*variant*/
      256) && V(
        e,
        "meta-text",
        /*variant*/
        u[8] === "default"
      );
      let b = s;
      s = L(u), s === b ? ~s && p[s].p(u, k) : (o && (We(), R(p[b], 1, 1, () => {
        p[b] = null;
      }), Ke()), ~s ? (o = p[s], o ? o.p(u, k) : (o = p[s] = C[s](u), o.c()), O(o, 1), o.m(a.parentNode, a)) : o = null), /*timer*/
      u[5] ? F && (F.d(1), F = null) : F ? F.p(u, k) : (F = Ie(u), F.c(), F.m(r.parentNode, r));
    },
    i(u) {
      f || (O(o), f = !0);
    },
    o(u) {
      R(o), f = !1;
    },
    d(u) {
      u && (g(t), g(e), g(i), g(a), g(r)), _ && _.d(u), w && w.d(), y && y.d(), ~s && p[s].d(u), F && F.d(u);
    }
  };
}
function Ne(n) {
  let t, e = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = Z("div"), T(t, "class", "eta-bar svelte-1txqlrd"), D(t, "transform", e);
    },
    m(l, i) {
      h(l, t, i);
    },
    p(l, i) {
      i[0] & /*eta_level*/
      131072 && e !== (e = `translateX(${/*eta_level*/
      (l[17] || 0) * 100 - 100}%)`) && D(t, "transform", e);
    },
    d(l) {
      l && g(t);
    }
  };
}
function Ht(n) {
  let t;
  return {
    c() {
      t = q("processing |");
    },
    m(e, l) {
      h(e, t, l);
    },
    p: oe,
    d(e) {
      e && g(t);
    }
  };
}
function Xt(n) {
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
      h(a, t, r), h(a, l, r), h(a, i, r), h(a, s, r), h(a, o, r);
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
      a && (g(t), g(l), g(i), g(s), g(o));
    }
  };
}
function Yt(n) {
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
      t = U();
    },
    m(i, s) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, s);
      h(i, t, s);
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
      i && g(t), Qe(l, i);
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
      _[38].length != null ? Ot : Gt
    );
  }
  let r = a(n), f = r(n);
  return {
    c() {
      f.c(), t = j(), l = q(e), i = q(" | "), o = q(s);
    },
    m(_, m) {
      f.m(_, m), h(_, t, m), h(_, l, m), h(_, i, m), h(_, o, m);
    },
    p(_, m) {
      r === (r = a(_)) && f ? f.p(_, m) : (f.d(1), f = r(_), f && (f.c(), f.m(t.parentNode, t))), m[0] & /*progress*/
      128 && e !== (e = /*p*/
      _[38].unit + "") && S(l, e);
    },
    d(_) {
      _ && (g(t), g(l), g(i), g(o)), f.d(_);
    }
  };
}
function Gt(n) {
  let t = Y(
    /*p*/
    n[38].index || 0
  ) + "", e;
  return {
    c() {
      e = q(t);
    },
    m(l, i) {
      h(l, e, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && t !== (t = Y(
        /*p*/
        l[38].index || 0
      ) + "") && S(e, t);
    },
    d(l) {
      l && g(e);
    }
  };
}
function Ot(n) {
  let t = Y(
    /*p*/
    n[38].index || 0
  ) + "", e, l, i = Y(
    /*p*/
    n[38].length
  ) + "", s;
  return {
    c() {
      e = q(t), l = q("/"), s = q(i);
    },
    m(o, a) {
      h(o, e, a), h(o, l, a), h(o, s, a);
    },
    p(o, a) {
      a[0] & /*progress*/
      128 && t !== (t = Y(
        /*p*/
        o[38].index || 0
      ) + "") && S(e, t), a[0] & /*progress*/
      128 && i !== (i = Y(
        /*p*/
        o[38].length
      ) + "") && S(s, i);
    },
    d(o) {
      o && (g(e), g(l), g(s));
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
      e && e.c(), t = U();
    },
    m(l, i) {
      e && e.m(l, i), h(l, t, i);
    },
    p(l, i) {
      /*p*/
      l[38].index != null ? e ? e.p(l, i) : (e = ze(l), e.c(), e.m(t.parentNode, t)) : e && (e.d(1), e = null);
    },
    d(l) {
      l && g(t), e && e.d(l);
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
      h(s, t, o), h(s, l, o), h(s, i, o);
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
      s && (g(t), g(l), g(i));
    }
  };
}
function Rt(n) {
  let t, e;
  return t = new Lt({
    props: { margin: (
      /*variant*/
      n[8] === "default"
    ) }
  }), {
    c() {
      Mt(t.$$.fragment);
    },
    m(l, i) {
      jt(t, l, i), e = !0;
    },
    p(l, i) {
      const s = {};
      i[0] & /*variant*/
      256 && (s.margin = /*variant*/
      l[8] === "default"), t.$set(s);
    },
    i(l) {
      e || (O(t.$$.fragment, l), e = !0);
    },
    o(l) {
      R(t.$$.fragment, l), e = !1;
    },
    d(l) {
      St(t, l);
    }
  };
}
function Ut(n) {
  let t, e, l, i, s, o = `${/*last_progress_level*/
  n[15] * 100}%`, a = (
    /*progress*/
    n[7] != null && Pe(n)
  );
  return {
    c() {
      t = Z("div"), e = Z("div"), a && a.c(), l = j(), i = Z("div"), s = Z("div"), T(e, "class", "progress-level-inner svelte-1txqlrd"), T(s, "class", "progress-bar svelte-1txqlrd"), D(s, "width", o), T(i, "class", "progress-bar-wrap svelte-1txqlrd"), T(t, "class", "progress-level svelte-1txqlrd");
    },
    m(r, f) {
      h(r, t, f), H(t, e), a && a.m(e, null), H(t, l), H(t, i), H(i, s), n[30](s);
    },
    p(r, f) {
      /*progress*/
      r[7] != null ? a ? a.p(r, f) : (a = Pe(r), a.c(), a.m(e, null)) : a && (a.d(1), a = null), f[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      r[15] * 100}%`) && D(s, "width", o);
    },
    i: oe,
    o: oe,
    d(r) {
      r && g(t), a && a.d(), n[30](null);
    }
  };
}
function Pe(n) {
  let t, e = le(
    /*progress*/
    n[7]
  ), l = [];
  for (let i = 0; i < e.length; i += 1)
    l[i] = Ee(Ve(n, e, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      t = U();
    },
    m(i, s) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, s);
      h(i, t, s);
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
          l[o] ? l[o].p(a, s) : (l[o] = Ee(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = e.length;
      }
    },
    d(i) {
      i && g(t), Qe(l, i);
    }
  };
}
function Ze(n) {
  let t, e, l, i, s = (
    /*i*/
    n[40] !== 0 && Jt()
  ), o = (
    /*p*/
    n[38].desc != null && Be(n)
  ), a = (
    /*p*/
    n[38].desc != null && /*progress_level*/
    n[14] && /*progress_level*/
    n[14][
      /*i*/
      n[40]
    ] != null && Ae()
  ), r = (
    /*progress_level*/
    n[14] != null && De(n)
  );
  return {
    c() {
      s && s.c(), t = j(), o && o.c(), e = j(), a && a.c(), l = j(), r && r.c(), i = U();
    },
    m(f, _) {
      s && s.m(f, _), h(f, t, _), o && o.m(f, _), h(f, e, _), a && a.m(f, _), h(f, l, _), r && r.m(f, _), h(f, i, _);
    },
    p(f, _) {
      /*p*/
      f[38].desc != null ? o ? o.p(f, _) : (o = Be(f), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), /*p*/
      f[38].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[40]
      ] != null ? a || (a = Ae(), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null), /*progress_level*/
      f[14] != null ? r ? r.p(f, _) : (r = De(f), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null);
    },
    d(f) {
      f && (g(t), g(e), g(l), g(i)), s && s.d(f), o && o.d(f), a && a.d(f), r && r.d(f);
    }
  };
}
function Jt(n) {
  let t;
  return {
    c() {
      t = q(" /");
    },
    m(e, l) {
      h(e, t, l);
    },
    d(e) {
      e && g(t);
    }
  };
}
function Be(n) {
  let t = (
    /*p*/
    n[38].desc + ""
  ), e;
  return {
    c() {
      e = q(t);
    },
    m(l, i) {
      h(l, e, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && t !== (t = /*p*/
      l[38].desc + "") && S(e, t);
    },
    d(l) {
      l && g(e);
    }
  };
}
function Ae(n) {
  let t;
  return {
    c() {
      t = q("-");
    },
    m(e, l) {
      h(e, t, l);
    },
    d(e) {
      e && g(t);
    }
  };
}
function De(n) {
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
      h(i, e, s), h(i, l, s);
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
      i && (g(e), g(l));
    }
  };
}
function Ee(n) {
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
      e && e.c(), t = U();
    },
    m(l, i) {
      e && e.m(l, i), h(l, t, i);
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
      l && g(t), e && e.d(l);
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
      ), T(t, "class", "loading svelte-1txqlrd");
    },
    m(l, i) {
      h(l, t, i), H(t, e);
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
      l && g(t);
    }
  };
}
function Kt(n) {
  let t, e, l, i, s;
  const o = [It, Et], a = [];
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
      t = Z("div"), l && l.c(), T(t, "class", i = "wrap " + /*variant*/
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
      ), D(
        t,
        "position",
        /*absolute*/
        n[10] ? "absolute" : "static"
      ), D(
        t,
        "padding",
        /*absolute*/
        n[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, _) {
      h(f, t, _), ~e && a[e].m(t, null), n[31](t), s = !0;
    },
    p(f, _) {
      let m = e;
      e = r(f), e === m ? ~e && a[e].p(f, _) : (l && (We(), R(a[m], 1, 1, () => {
        a[m] = null;
      }), Ke()), ~e ? (l = a[e], l ? l.p(f, _) : (l = a[e] = o[e](f), l.c()), O(l, 1), l.m(t, null)) : l = null), (!s || _[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-1txqlrd")) && T(t, "class", i), (!s || _[0] & /*variant, show_progress, status, show_progress*/
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
      1024 && D(
        t,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), _[0] & /*absolute*/
      1024 && D(
        t,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      s || (O(l), s = !0);
    },
    o(f) {
      R(l), s = !1;
    },
    d(f) {
      f && g(t), ~e && a[e].d(), n[31](null);
    }
  };
}
let ee = [], fe = !1;
async function Qt(n, t = !0) {
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
function Wt(n, t, e) {
  let l, { $$slots: i = {}, $$scope: s } = t, { i18n: o } = t, { eta: a = null } = t, { queue: r = !1 } = t, { queue_position: f } = t, { queue_size: _ } = t, { status: m } = t, { scroll_to_output: c = !1 } = t, { timer: w = !0 } = t, { show_progress: y = "full" } = t, { message: C = null } = t, { progress: p = null } = t, { variant: L = "default" } = t, { loading_text: F = "Loading..." } = t, { absolute: u = !0 } = t, { translucent: k = !1 } = t, { border: b = !1 } = t, { autoscroll: ne } = t, J, K = !1, W = 0, E = 0, ie = null, de = 0, I = null, Q, B = null, me = !0;
  const et = () => {
    e(25, W = performance.now()), e(26, E = 0), K = !0, be();
  };
  function be() {
    requestAnimationFrame(() => {
      e(26, E = (performance.now() - W) / 1e3), K && be();
    });
  }
  function ge() {
    e(26, E = 0), K && (K = !1);
  }
  At(() => {
    K && ge();
  });
  let he = null;
  function tt(d) {
    Ce[d ? "unshift" : "push"](() => {
      B = d, e(16, B), e(7, p), e(14, I), e(15, Q);
    });
  }
  function lt(d) {
    Ce[d ? "unshift" : "push"](() => {
      J = d, e(13, J);
    });
  }
  return n.$$set = (d) => {
    "i18n" in d && e(1, o = d.i18n), "eta" in d && e(0, a = d.eta), "queue" in d && e(21, r = d.queue), "queue_position" in d && e(2, f = d.queue_position), "queue_size" in d && e(3, _ = d.queue_size), "status" in d && e(4, m = d.status), "scroll_to_output" in d && e(22, c = d.scroll_to_output), "timer" in d && e(5, w = d.timer), "show_progress" in d && e(6, y = d.show_progress), "message" in d && e(23, C = d.message), "progress" in d && e(7, p = d.progress), "variant" in d && e(8, L = d.variant), "loading_text" in d && e(9, F = d.loading_text), "absolute" in d && e(10, u = d.absolute), "translucent" in d && e(11, k = d.translucent), "border" in d && e(12, b = d.border), "autoscroll" in d && e(24, ne = d.autoscroll), "$$scope" in d && e(28, s = d.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (a === null ? e(0, a = ie) : r && e(0, a = (performance.now() - W) / 1e3 + a), a != null && (e(19, he = a.toFixed(1)), e(27, ie = a))), n.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && e(17, de = a === null || a <= 0 || !E ? null : Math.min(E / a, 1)), n.$$.dirty[0] & /*progress*/
    128 && p != null && e(18, me = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (p != null ? e(14, I = p.map((d) => {
      if (d.index != null && d.length != null)
        return d.index / d.length;
      if (d.progress != null)
        return d.progress;
    })) : e(14, I = null), I ? (e(15, Q = I[I.length - 1]), B && (Q === 0 ? e(16, B.style.transition = "0", B) : e(16, B.style.transition = "150ms", B))) : e(15, Q = void 0)), n.$$.dirty[0] & /*status*/
    16 && (m === "pending" ? et() : ge()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && J && c && (m === "pending" || m === "complete") && Qt(J, ne), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && e(20, l = E.toFixed(1));
  }, [
    a,
    o,
    f,
    _,
    m,
    w,
    y,
    p,
    L,
    F,
    u,
    k,
    b,
    J,
    I,
    Q,
    B,
    de,
    me,
    he,
    l,
    r,
    c,
    C,
    ne,
    W,
    E,
    ie,
    s,
    i,
    tt,
    lt
  ];
}
class xt extends Ct {
  constructor(t) {
    super(), Tt(
      this,
      t,
      Wt,
      Kt,
      Pt,
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
  SvelteComponent: $t,
  assign: el,
  create_slot: tl,
  detach: ll,
  element: nl,
  get_all_dirty_from_scope: il,
  get_slot_changes: fl,
  get_spread_update: sl,
  init: ol,
  insert: al,
  safe_not_equal: rl,
  set_dynamic_element_data: He,
  set_style: M,
  toggle_class: A,
  transition_in: xe,
  transition_out: $e,
  update_slot_base: _l
} = window.__gradio__svelte__internal;
function ul(n) {
  let t, e, l;
  const i = (
    /*#slots*/
    n[17].default
  ), s = tl(
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
    a = el(a, o[r]);
  return {
    c() {
      t = nl(
        /*tag*/
        n[14]
      ), s && s.c(), He(
        /*tag*/
        n[14]
      )(t, a), A(
        t,
        "hidden",
        /*visible*/
        n[10] === !1
      ), A(
        t,
        "padded",
        /*padding*/
        n[6]
      ), A(
        t,
        "border_focus",
        /*border_mode*/
        n[5] === "focus"
      ), A(t, "hide-container", !/*explicit_call*/
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
      al(r, t, f), s && s.m(t, null), l = !0;
    },
    p(r, f) {
      s && s.p && (!l || f & /*$$scope*/
      65536) && _l(
        s,
        i,
        r,
        /*$$scope*/
        r[16],
        l ? fl(
          i,
          /*$$scope*/
          r[16],
          f,
          null
        ) : il(
          /*$$scope*/
          r[16]
        ),
        null
      ), He(
        /*tag*/
        r[14]
      )(t, a = sl(o, [
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
      ])), A(
        t,
        "hidden",
        /*visible*/
        r[10] === !1
      ), A(
        t,
        "padded",
        /*padding*/
        r[6]
      ), A(
        t,
        "border_focus",
        /*border_mode*/
        r[5] === "focus"
      ), A(t, "hide-container", !/*explicit_call*/
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
      r && ll(t), s && s.d(r);
    }
  };
}
function cl(n) {
  let t, e = (
    /*tag*/
    n[14] && ul(n)
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
function dl(n, t, e) {
  let { $$slots: l = {}, $$scope: i } = t, { height: s = void 0 } = t, { width: o = void 0 } = t, { elem_id: a = "" } = t, { elem_classes: r = [] } = t, { variant: f = "solid" } = t, { border_mode: _ = "base" } = t, { padding: m = !0 } = t, { type: c = "normal" } = t, { test_id: w = void 0 } = t, { explicit_call: y = !1 } = t, { container: C = !0 } = t, { visible: p = !0 } = t, { allow_overflow: L = !0 } = t, { scale: F = null } = t, { min_width: u = 0 } = t, k = c === "fieldset" ? "fieldset" : "div";
  return n.$$set = (b) => {
    "height" in b && e(0, s = b.height), "width" in b && e(1, o = b.width), "elem_id" in b && e(2, a = b.elem_id), "elem_classes" in b && e(3, r = b.elem_classes), "variant" in b && e(4, f = b.variant), "border_mode" in b && e(5, _ = b.border_mode), "padding" in b && e(6, m = b.padding), "type" in b && e(15, c = b.type), "test_id" in b && e(7, w = b.test_id), "explicit_call" in b && e(8, y = b.explicit_call), "container" in b && e(9, C = b.container), "visible" in b && e(10, p = b.visible), "allow_overflow" in b && e(11, L = b.allow_overflow), "scale" in b && e(12, F = b.scale), "min_width" in b && e(13, u = b.min_width), "$$scope" in b && e(16, i = b.$$scope);
  }, [
    s,
    o,
    a,
    r,
    f,
    _,
    m,
    w,
    y,
    C,
    p,
    L,
    F,
    u,
    k,
    c,
    i,
    l
  ];
}
class ml extends $t {
  constructor(t) {
    super(), ol(this, t, dl, cl, rl, {
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
const bl = [
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
bl.reduce(
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
  SvelteComponent: gl,
  assign: hl,
  attr: wl,
  create_component: ae,
  destroy_component: re,
  detach: Ye,
  element: vl,
  get_spread_object: yl,
  get_spread_update: kl,
  init: pl,
  insert: Ge,
  mount_component: _e,
  safe_not_equal: ql,
  space: Fl,
  toggle_class: Oe,
  transition_in: ue,
  transition_out: ce
} = window.__gradio__svelte__internal;
function Ll(n) {
  var r;
  let t, e, l, i, s;
  const o = [
    { autoscroll: (
      /*gradio*/
      n[6].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      n[6].i18n
    ) },
    /*loading_status*/
    n[5],
    { variant: "center" }
  ];
  let a = {};
  for (let f = 0; f < o.length; f += 1)
    a = hl(a, o[f]);
  return t = new xt({ props: a }), i = new ct({
    props: {
      min_height: (
        /*loading_status*/
        n[5] && /*loading_status*/
        ((r = n[5]) == null ? void 0 : r.status) !== "complete"
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
      )
    }
  }), i.$on(
    "change",
    /*change_handler*/
    n[8]
  ), {
    c() {
      var f;
      ae(t.$$.fragment), e = Fl(), l = vl("div"), ae(i.$$.fragment), wl(l, "class", "svelte-gqsrr7"), Oe(
        l,
        "pending",
        /*loading_status*/
        ((f = n[5]) == null ? void 0 : f.status) === "pending"
      );
    },
    m(f, _) {
      _e(t, f, _), Ge(f, e, _), Ge(f, l, _), _e(i, l, null), s = !0;
    },
    p(f, _) {
      var w, y;
      const m = _ & /*gradio, loading_status*/
      96 ? kl(o, [
        _ & /*gradio*/
        64 && { autoscroll: (
          /*gradio*/
          f[6].autoscroll
        ) },
        _ & /*gradio*/
        64 && { i18n: (
          /*gradio*/
          f[6].i18n
        ) },
        _ & /*loading_status*/
        32 && yl(
          /*loading_status*/
          f[5]
        ),
        o[3]
      ]) : {};
      t.$set(m);
      const c = {};
      _ & /*loading_status*/
      32 && (c.min_height = /*loading_status*/
      f[5] && /*loading_status*/
      ((w = f[5]) == null ? void 0 : w.status) !== "complete"), _ & /*value*/
      8 && (c.value = /*value*/
      f[3]), _ & /*elem_classes*/
      2 && (c.elem_classes = /*elem_classes*/
      f[1]), _ & /*visible*/
      4 && (c.visible = /*visible*/
      f[2]), _ & /*height*/
      16 && (c.height = /*height*/
      f[4]), i.$set(c), (!s || _ & /*loading_status*/
      32) && Oe(
        l,
        "pending",
        /*loading_status*/
        ((y = f[5]) == null ? void 0 : y.status) === "pending"
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
function Cl(n) {
  let t, e;
  return t = new ml({
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
      $$slots: { default: [Ll] },
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
      l[1]), i & /*$$scope, loading_status, value, elem_classes, visible, height, gradio*/
      638 && (s.$$scope = { dirty: i, ctx: l }), t.$set(s);
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
function Ml(n, t, e) {
  let { label: l } = t, { elem_id: i = "" } = t, { elem_classes: s = [] } = t, { visible: o = !0 } = t, { value: a = "" } = t, { height: r = "100%" } = t, { loading_status: f } = t, { gradio: _ } = t;
  const m = () => _.dispatch("change");
  return n.$$set = (c) => {
    "label" in c && e(7, l = c.label), "elem_id" in c && e(0, i = c.elem_id), "elem_classes" in c && e(1, s = c.elem_classes), "visible" in c && e(2, o = c.visible), "value" in c && e(3, a = c.value), "height" in c && e(4, r = c.height), "loading_status" in c && e(5, f = c.loading_status), "gradio" in c && e(6, _ = c.gradio);
  }, n.$$.update = () => {
    n.$$.dirty & /*label, gradio*/
    192 && _.dispatch("change");
  }, [
    i,
    s,
    o,
    a,
    r,
    f,
    _,
    l,
    m
  ];
}
class Vl extends gl {
  constructor(t) {
    super(), pl(this, t, Ml, Cl, ql, {
      label: 7,
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      value: 3,
      height: 4,
      loading_status: 5,
      gradio: 6
    });
  }
}
export {
  Vl as default
};

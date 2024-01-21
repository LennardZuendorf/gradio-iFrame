const {
  SvelteComponent: nt,
  append: it,
  attr: B,
  detach: st,
  element: we,
  init: ft,
  insert: ot,
  noop: ve,
  safe_not_equal: at,
  toggle_class: x
} = window.__gradio__svelte__internal, { createEventDispatcher: rt } = window.__gradio__svelte__internal;
function _t(n) {
  let t, e, l;
  return {
    c() {
      t = we("div"), e = we("iframe"), B(e, "title", "iframe component"), B(e, "width", "100%"), B(e, "height", "100%"), B(
        e,
        "srcdoc",
        /*value*/
        n[1]
      ), B(e, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"), e.allowFullscreen = !0, B(t, "class", l = "prose " + /*elem_classes*/
      n[0].join(" ") + " svelte-2qygph"), x(
        t,
        "min",
        /*min_height*/
        n[3]
      ), x(t, "hide", !/*visible*/
      n[2]);
    },
    m(i, f) {
      ot(i, t, f), it(t, e);
    },
    p(i, [f]) {
      f & /*value*/
      2 && B(
        e,
        "srcdoc",
        /*value*/
        i[1]
      ), f & /*elem_classes*/
      1 && l !== (l = "prose " + /*elem_classes*/
      i[0].join(" ") + " svelte-2qygph") && B(t, "class", l), f & /*elem_classes, min_height*/
      9 && x(
        t,
        "min",
        /*min_height*/
        i[3]
      ), f & /*elem_classes, visible*/
      5 && x(t, "hide", !/*visible*/
      i[2]);
    },
    i: ve,
    o: ve,
    d(i) {
      i && st(t);
    }
  };
}
function ct(n, t, e) {
  let { elem_classes: l = [] } = t, { value: i } = t, { visible: f = !0 } = t, { min_height: o = !1 } = t;
  const a = rt();
  return n.$$set = (r) => {
    "elem_classes" in r && e(0, l = r.elem_classes), "value" in r && e(1, i = r.value), "visible" in r && e(2, f = r.visible), "min_height" in r && e(3, o = r.min_height);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    2 && a("change");
  }, [l, i, f, o];
}
class ut extends nt {
  constructor(t) {
    super(), ft(this, t, ct, _t, at, {
      elem_classes: 0,
      value: 1,
      visible: 2,
      min_height: 3
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
let pe = Re ? () => window.performance.now() : () => Date.now(), Ue = Re ? (n) => requestAnimationFrame(n) : te;
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
      for (const s of l)
        s[1](), X.push(s, n);
      if (r) {
        for (let s = 0; s < X.length; s += 2)
          X[s][0](X[s + 1]);
        X.length = 0;
      }
    }
  }
  function f(a) {
    i(a(n));
  }
  function o(a, r = te) {
    const s = [a, r];
    return l.add(s), l.size === 1 && (e = t(i, f) || te), a(n), () => {
      l.delete(s), l.size === 0 && e && (e(), e = null);
    };
  }
  return { set: i, update: f, subscribe: o };
}
function ye(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function fe(n, t, e, l) {
  if (typeof e == "number" || ye(e)) {
    const i = l - e, f = (e - t) / (n.dt || 1 / 60), o = n.opts.stiffness * i, a = n.opts.damping * f, r = (o - a) * n.inv_mass, s = (f + r) * n.dt;
    return Math.abs(s) < n.opts.precision && Math.abs(i) < n.opts.precision ? l : (n.settled = !1, ye(e) ? new Date(e.getTime() + s) : e + s);
  } else {
    if (Array.isArray(e))
      return e.map(
        (i, f) => fe(n, t[f], e[f], l[f])
      );
    if (typeof e == "object") {
      const i = {};
      for (const f in e)
        i[f] = fe(n, t[f], e[f], l[f]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof e} values`);
  }
}
function ke(n, t = {}) {
  const e = bt(n), { stiffness: l = 0.15, damping: i = 0.8, precision: f = 0.01 } = t;
  let o, a, r, s = n, _ = n, u = 1, w = 0, h = !1;
  function p(k, L = {}) {
    _ = k;
    const F = r = {};
    return n == null || L.hard || C.stiffness >= 1 && C.damping >= 1 ? (h = !0, o = pe(), s = k, e.set(n = _), Promise.resolve()) : (L.soft && (w = 1 / ((L.soft === !0 ? 0.5 : +L.soft) * 60), u = 0), a || (o = pe(), h = !1, a = mt((c) => {
      if (h)
        return h = !1, a = null, !1;
      u = Math.min(u + w, 1);
      const y = {
        inv_mass: u,
        opts: C,
        settled: !0,
        dt: (c - o) * 60 / 1e3
      }, m = fe(y, s, n, _);
      return o = c, s = n, e.set(n = m), y.settled && (a = null), !y.settled;
    })), new Promise((c) => {
      a.promise.then(() => {
        F === r && c();
      });
    }));
  }
  const C = {
    set: p,
    update: (k, L) => p(k(_, n), L),
    subscribe: e.subscribe,
    stiffness: l,
    damping: i,
    precision: f
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
  insert: pt,
  noop: Fe,
  safe_not_equal: yt,
  set_style: $,
  svg_element: z,
  toggle_class: Le
} = window.__gradio__svelte__internal, { onMount: kt } = window.__gradio__svelte__internal;
function qt(n) {
  let t, e, l, i, f, o, a, r, s, _, u, w;
  return {
    c() {
      t = wt("div"), e = z("svg"), l = z("g"), i = z("path"), f = z("path"), o = z("path"), a = z("path"), r = z("g"), s = z("path"), _ = z("path"), u = z("path"), w = z("path"), v(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), v(i, "fill", "#FF7C00"), v(i, "fill-opacity", "0.4"), v(i, "class", "svelte-43sxxs"), v(f, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), v(f, "fill", "#FF7C00"), v(f, "class", "svelte-43sxxs"), v(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), v(o, "fill", "#FF7C00"), v(o, "fill-opacity", "0.4"), v(o, "class", "svelte-43sxxs"), v(a, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), v(a, "fill", "#FF7C00"), v(a, "class", "svelte-43sxxs"), $(l, "transform", "translate(" + /*$top*/
      n[1][0] + "px, " + /*$top*/
      n[1][1] + "px)"), v(s, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), v(s, "fill", "#FF7C00"), v(s, "fill-opacity", "0.4"), v(s, "class", "svelte-43sxxs"), v(_, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), v(_, "fill", "#FF7C00"), v(_, "class", "svelte-43sxxs"), v(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), v(u, "fill", "#FF7C00"), v(u, "fill-opacity", "0.4"), v(u, "class", "svelte-43sxxs"), v(w, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), v(w, "fill", "#FF7C00"), v(w, "class", "svelte-43sxxs"), $(r, "transform", "translate(" + /*$bottom*/
      n[2][0] + "px, " + /*$bottom*/
      n[2][1] + "px)"), v(e, "viewBox", "-1200 -1200 3000 3000"), v(e, "fill", "none"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "class", "svelte-43sxxs"), v(t, "class", "svelte-43sxxs"), Le(
        t,
        "margin",
        /*margin*/
        n[0]
      );
    },
    m(h, p) {
      pt(h, t, p), N(t, e), N(e, l), N(l, i), N(l, f), N(l, o), N(l, a), N(e, r), N(r, s), N(r, _), N(r, u), N(r, w);
    },
    p(h, [p]) {
      p & /*$top*/
      2 && $(l, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), p & /*$bottom*/
      4 && $(r, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), p & /*margin*/
      1 && Le(
        t,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: Fe,
    o: Fe,
    d(h) {
      h && ht(t);
    }
  };
}
function Ft(n, t, e) {
  let l, i, { margin: f = !0 } = t;
  const o = ke([0, 0]);
  qe(n, o, (w) => e(1, l = w));
  const a = ke([0, 0]);
  qe(n, a, (w) => e(2, i = w));
  let r;
  async function s() {
    await Promise.all([o.set([125, 140]), a.set([-125, -140])]), await Promise.all([o.set([-125, 140]), a.set([125, -140])]), await Promise.all([o.set([-125, 0]), a.set([125, -0])]), await Promise.all([o.set([125, 0]), a.set([-125, 0])]);
  }
  async function _() {
    await s(), r || _();
  }
  async function u() {
    await Promise.all([o.set([125, 0]), a.set([-125, 0])]), _();
  }
  return kt(() => (u(), () => r = !0)), n.$$set = (w) => {
    "margin" in w && e(0, f = w.margin);
  }, [f, l, i, o, a];
}
class Lt extends gt {
  constructor(t) {
    super(), vt(this, t, Ft, qt, yt, { margin: 0 });
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
  detach: b,
  element: P,
  empty: U,
  ensure_array_like: le,
  get_all_dirty_from_scope: Nt,
  get_slot_changes: zt,
  group_outros: We,
  init: Tt,
  insert: g,
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
  ), l, i, f;
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
      t = P("span"), l = q(e), i = j(), a && a.c(), T(t, "class", "error svelte-1txqlrd");
    },
    m(r, s) {
      g(r, t, s), H(t, l), g(r, i, s), a && a.m(r, s), f = !0;
    },
    p(r, s) {
      (!f || s[0] & /*i18n*/
      2) && e !== (e = /*i18n*/
      r[1]("common.error") + "") && S(l, e), a && a.p && (!f || s[0] & /*$$scope*/
      268435456) && Zt(
        a,
        o,
        r,
        /*$$scope*/
        r[28],
        f ? zt(
          o,
          /*$$scope*/
          r[28],
          s,
          Dt
        ) : Nt(
          /*$$scope*/
          r[28]
        ),
        Me
      );
    },
    i(r) {
      f || (O(a, r), f = !0);
    },
    o(r) {
      R(a, r), f = !1;
    },
    d(r) {
      r && (b(t), b(i)), a && a.d(r);
    }
  };
}
function It(n) {
  let t, e, l, i, f, o, a, r, s, _ = (
    /*variant*/
    n[8] === "default" && /*show_eta_bar*/
    n[18] && /*show_progress*/
    n[6] === "full" && Ne(n)
  );
  function u(c, y) {
    if (
      /*progress*/
      c[7]
    )
      return Yt;
    if (
      /*queue_position*/
      c[2] !== null && /*queue_size*/
      c[3] !== void 0 && /*queue_position*/
      c[2] >= 0
    )
      return Xt;
    if (
      /*queue_position*/
      c[2] === 0
    )
      return Ht;
  }
  let w = u(n), h = w && w(n), p = (
    /*timer*/
    n[5] && je(n)
  );
  const C = [Ut, Rt], k = [];
  function L(c, y) {
    return (
      /*last_progress_level*/
      c[15] != null ? 0 : (
        /*show_progress*/
        c[6] === "full" ? 1 : -1
      )
    );
  }
  ~(f = L(n)) && (o = k[f] = C[f](n));
  let F = !/*timer*/
  n[5] && Ie(n);
  return {
    c() {
      _ && _.c(), t = j(), e = P("div"), h && h.c(), l = j(), p && p.c(), i = j(), o && o.c(), a = j(), F && F.c(), r = U(), T(e, "class", "progress-text svelte-1txqlrd"), V(
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
      _ && _.m(c, y), g(c, t, y), g(c, e, y), h && h.m(e, null), H(e, l), p && p.m(e, null), g(c, i, y), ~f && k[f].m(c, y), g(c, a, y), F && F.m(c, y), g(c, r, y), s = !0;
    },
    p(c, y) {
      /*variant*/
      c[8] === "default" && /*show_eta_bar*/
      c[18] && /*show_progress*/
      c[6] === "full" ? _ ? _.p(c, y) : (_ = Ne(c), _.c(), _.m(t.parentNode, t)) : _ && (_.d(1), _ = null), w === (w = u(c)) && h ? h.p(c, y) : (h && h.d(1), h = w && w(c), h && (h.c(), h.m(e, l))), /*timer*/
      c[5] ? p ? p.p(c, y) : (p = je(c), p.c(), p.m(e, null)) : p && (p.d(1), p = null), (!s || y[0] & /*variant*/
      256) && V(
        e,
        "meta-text-center",
        /*variant*/
        c[8] === "center"
      ), (!s || y[0] & /*variant*/
      256) && V(
        e,
        "meta-text",
        /*variant*/
        c[8] === "default"
      );
      let m = f;
      f = L(c), f === m ? ~f && k[f].p(c, y) : (o && (We(), R(k[m], 1, 1, () => {
        k[m] = null;
      }), Ke()), ~f ? (o = k[f], o ? o.p(c, y) : (o = k[f] = C[f](c), o.c()), O(o, 1), o.m(a.parentNode, a)) : o = null), /*timer*/
      c[5] ? F && (F.d(1), F = null) : F ? F.p(c, y) : (F = Ie(c), F.c(), F.m(r.parentNode, r));
    },
    i(c) {
      s || (O(o), s = !0);
    },
    o(c) {
      R(o), s = !1;
    },
    d(c) {
      c && (b(t), b(e), b(i), b(a), b(r)), _ && _.d(c), h && h.d(), p && p.d(), ~f && k[f].d(c), F && F.d(c);
    }
  };
}
function Ne(n) {
  let t, e = `translateX(${/*eta_level*/
  (n[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = P("div"), T(t, "class", "eta-bar svelte-1txqlrd"), D(t, "transform", e);
    },
    m(l, i) {
      g(l, t, i);
    },
    p(l, i) {
      i[0] & /*eta_level*/
      131072 && e !== (e = `translateX(${/*eta_level*/
      (l[17] || 0) * 100 - 100}%)`) && D(t, "transform", e);
    },
    d(l) {
      l && b(t);
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
      g(e, t, l);
    },
    p: oe,
    d(e) {
      e && b(t);
    }
  };
}
function Xt(n) {
  let t, e = (
    /*queue_position*/
    n[2] + 1 + ""
  ), l, i, f, o;
  return {
    c() {
      t = q("queue: "), l = q(e), i = q("/"), f = q(
        /*queue_size*/
        n[3]
      ), o = q(" |");
    },
    m(a, r) {
      g(a, t, r), g(a, l, r), g(a, i, r), g(a, f, r), g(a, o, r);
    },
    p(a, r) {
      r[0] & /*queue_position*/
      4 && e !== (e = /*queue_position*/
      a[2] + 1 + "") && S(l, e), r[0] & /*queue_size*/
      8 && S(
        f,
        /*queue_size*/
        a[3]
      );
    },
    d(a) {
      a && (b(t), b(l), b(i), b(f), b(o));
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
    m(i, f) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, f);
      g(i, t, f);
    },
    p(i, f) {
      if (f[0] & /*progress*/
      128) {
        e = le(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < e.length; o += 1) {
          const a = Se(i, e, o);
          l[o] ? l[o].p(a, f) : (l[o] = Te(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = e.length;
      }
    },
    d(i) {
      i && b(t), Qe(l, i);
    }
  };
}
function ze(n) {
  let t, e = (
    /*p*/
    n[38].unit + ""
  ), l, i, f = " ", o;
  function a(_, u) {
    return (
      /*p*/
      _[38].length != null ? Ot : Gt
    );
  }
  let r = a(n), s = r(n);
  return {
    c() {
      s.c(), t = j(), l = q(e), i = q(" | "), o = q(f);
    },
    m(_, u) {
      s.m(_, u), g(_, t, u), g(_, l, u), g(_, i, u), g(_, o, u);
    },
    p(_, u) {
      r === (r = a(_)) && s ? s.p(_, u) : (s.d(1), s = r(_), s && (s.c(), s.m(t.parentNode, t))), u[0] & /*progress*/
      128 && e !== (e = /*p*/
      _[38].unit + "") && S(l, e);
    },
    d(_) {
      _ && (b(t), b(l), b(i), b(o)), s.d(_);
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
      g(l, e, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && t !== (t = Y(
        /*p*/
        l[38].index || 0
      ) + "") && S(e, t);
    },
    d(l) {
      l && b(e);
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
  ) + "", f;
  return {
    c() {
      e = q(t), l = q("/"), f = q(i);
    },
    m(o, a) {
      g(o, e, a), g(o, l, a), g(o, f, a);
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
      ) + "") && S(f, i);
    },
    d(o) {
      o && (b(e), b(l), b(f));
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
      e && e.m(l, i), g(l, t, i);
    },
    p(l, i) {
      /*p*/
      l[38].index != null ? e ? e.p(l, i) : (e = ze(l), e.c(), e.m(t.parentNode, t)) : e && (e.d(1), e = null);
    },
    d(l) {
      l && b(t), e && e.d(l);
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
    m(f, o) {
      g(f, t, o), g(f, l, o), g(f, i, o);
    },
    p(f, o) {
      o[0] & /*formatted_timer*/
      1048576 && S(
        t,
        /*formatted_timer*/
        f[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && e !== (e = /*eta*/
      f[0] ? `/${/*formatted_eta*/
      f[19]}` : "") && S(l, e);
    },
    d(f) {
      f && (b(t), b(l), b(i));
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
      const f = {};
      i[0] & /*variant*/
      256 && (f.margin = /*variant*/
      l[8] === "default"), t.$set(f);
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
  let t, e, l, i, f, o = `${/*last_progress_level*/
  n[15] * 100}%`, a = (
    /*progress*/
    n[7] != null && Pe(n)
  );
  return {
    c() {
      t = P("div"), e = P("div"), a && a.c(), l = j(), i = P("div"), f = P("div"), T(e, "class", "progress-level-inner svelte-1txqlrd"), T(f, "class", "progress-bar svelte-1txqlrd"), D(f, "width", o), T(i, "class", "progress-bar-wrap svelte-1txqlrd"), T(t, "class", "progress-level svelte-1txqlrd");
    },
    m(r, s) {
      g(r, t, s), H(t, e), a && a.m(e, null), H(t, l), H(t, i), H(i, f), n[30](f);
    },
    p(r, s) {
      /*progress*/
      r[7] != null ? a ? a.p(r, s) : (a = Pe(r), a.c(), a.m(e, null)) : a && (a.d(1), a = null), s[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      r[15] * 100}%`) && D(f, "width", o);
    },
    i: oe,
    o: oe,
    d(r) {
      r && b(t), a && a.d(), n[30](null);
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
    m(i, f) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, f);
      g(i, t, f);
    },
    p(i, f) {
      if (f[0] & /*progress_level, progress*/
      16512) {
        e = le(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < e.length; o += 1) {
          const a = Ve(i, e, o);
          l[o] ? l[o].p(a, f) : (l[o] = Ee(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = e.length;
      }
    },
    d(i) {
      i && b(t), Qe(l, i);
    }
  };
}
function Ze(n) {
  let t, e, l, i, f = (
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
      f && f.c(), t = j(), o && o.c(), e = j(), a && a.c(), l = j(), r && r.c(), i = U();
    },
    m(s, _) {
      f && f.m(s, _), g(s, t, _), o && o.m(s, _), g(s, e, _), a && a.m(s, _), g(s, l, _), r && r.m(s, _), g(s, i, _);
    },
    p(s, _) {
      /*p*/
      s[38].desc != null ? o ? o.p(s, _) : (o = Be(s), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), /*p*/
      s[38].desc != null && /*progress_level*/
      s[14] && /*progress_level*/
      s[14][
        /*i*/
        s[40]
      ] != null ? a || (a = Ae(), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null), /*progress_level*/
      s[14] != null ? r ? r.p(s, _) : (r = De(s), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null);
    },
    d(s) {
      s && (b(t), b(e), b(l), b(i)), f && f.d(s), o && o.d(s), a && a.d(s), r && r.d(s);
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
      g(e, t, l);
    },
    d(e) {
      e && b(t);
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
      g(l, e, i);
    },
    p(l, i) {
      i[0] & /*progress*/
      128 && t !== (t = /*p*/
      l[38].desc + "") && S(e, t);
    },
    d(l) {
      l && b(e);
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
      g(e, t, l);
    },
    d(e) {
      e && b(t);
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
    m(i, f) {
      g(i, e, f), g(i, l, f);
    },
    p(i, f) {
      f[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && S(e, t);
    },
    d(i) {
      i && (b(e), b(l));
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
      e && e.m(l, i), g(l, t, i);
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
      l && b(t), e && e.d(l);
    }
  };
}
function Ie(n) {
  let t, e;
  return {
    c() {
      t = P("p"), e = q(
        /*loading_text*/
        n[9]
      ), T(t, "class", "loading svelte-1txqlrd");
    },
    m(l, i) {
      g(l, t, i), H(t, e);
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
      l && b(t);
    }
  };
}
function Kt(n) {
  let t, e, l, i, f;
  const o = [It, Et], a = [];
  function r(s, _) {
    return (
      /*status*/
      s[4] === "pending" ? 0 : (
        /*status*/
        s[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(e = r(n)) && (l = a[e] = o[e](n)), {
    c() {
      t = P("div"), l && l.c(), T(t, "class", i = "wrap " + /*variant*/
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
    m(s, _) {
      g(s, t, _), ~e && a[e].m(t, null), n[31](t), f = !0;
    },
    p(s, _) {
      let u = e;
      e = r(s), e === u ? ~e && a[e].p(s, _) : (l && (We(), R(a[u], 1, 1, () => {
        a[u] = null;
      }), Ke()), ~e ? (l = a[e], l ? l.p(s, _) : (l = a[e] = o[e](s), l.c()), O(l, 1), l.m(t, null)) : l = null), (!f || _[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      s[8] + " " + /*show_progress*/
      s[6] + " svelte-1txqlrd")) && T(t, "class", i), (!f || _[0] & /*variant, show_progress, status, show_progress*/
      336) && V(t, "hide", !/*status*/
      s[4] || /*status*/
      s[4] === "complete" || /*show_progress*/
      s[6] === "hidden"), (!f || _[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && V(
        t,
        "translucent",
        /*variant*/
        s[8] === "center" && /*status*/
        (s[4] === "pending" || /*status*/
        s[4] === "error") || /*translucent*/
        s[11] || /*show_progress*/
        s[6] === "minimal"
      ), (!f || _[0] & /*variant, show_progress, status*/
      336) && V(
        t,
        "generating",
        /*status*/
        s[4] === "generating"
      ), (!f || _[0] & /*variant, show_progress, border*/
      4416) && V(
        t,
        "border",
        /*border*/
        s[12]
      ), _[0] & /*absolute*/
      1024 && D(
        t,
        "position",
        /*absolute*/
        s[10] ? "absolute" : "static"
      ), _[0] & /*absolute*/
      1024 && D(
        t,
        "padding",
        /*absolute*/
        s[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(s) {
      f || (O(l), f = !0);
    },
    o(s) {
      R(l), f = !1;
    },
    d(s) {
      s && b(t), ~e && a[e].d(), n[31](null);
    }
  };
}
let ee = [], se = !1;
async function Qt(n, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (ee.push(n), !se)
      se = !0;
    else
      return;
    await Bt(), requestAnimationFrame(() => {
      let e = [0, 0];
      for (let l = 0; l < ee.length; l++) {
        const f = ee[l].getBoundingClientRect();
        (l === 0 || f.top + window.scrollY <= e[0]) && (e[0] = f.top + window.scrollY, e[1] = l);
      }
      window.scrollTo({ top: e[0] - 20, behavior: "smooth" }), se = !1, ee = [];
    });
  }
}
function Wt(n, t, e) {
  let l, { $$slots: i = {}, $$scope: f } = t, { i18n: o } = t, { eta: a = null } = t, { queue: r = !1 } = t, { queue_position: s } = t, { queue_size: _ } = t, { status: u } = t, { scroll_to_output: w = !1 } = t, { timer: h = !0 } = t, { show_progress: p = "full" } = t, { message: C = null } = t, { progress: k = null } = t, { variant: L = "default" } = t, { loading_text: F = "Loading..." } = t, { absolute: c = !0 } = t, { translucent: y = !1 } = t, { border: m = !1 } = t, { autoscroll: ne } = t, J, K = !1, W = 0, E = 0, ie = null, de = 0, I = null, Q, Z = null, me = !0;
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
      Z = d, e(16, Z), e(7, k), e(14, I), e(15, Q);
    });
  }
  function lt(d) {
    Ce[d ? "unshift" : "push"](() => {
      J = d, e(13, J);
    });
  }
  return n.$$set = (d) => {
    "i18n" in d && e(1, o = d.i18n), "eta" in d && e(0, a = d.eta), "queue" in d && e(21, r = d.queue), "queue_position" in d && e(2, s = d.queue_position), "queue_size" in d && e(3, _ = d.queue_size), "status" in d && e(4, u = d.status), "scroll_to_output" in d && e(22, w = d.scroll_to_output), "timer" in d && e(5, h = d.timer), "show_progress" in d && e(6, p = d.show_progress), "message" in d && e(23, C = d.message), "progress" in d && e(7, k = d.progress), "variant" in d && e(8, L = d.variant), "loading_text" in d && e(9, F = d.loading_text), "absolute" in d && e(10, c = d.absolute), "translucent" in d && e(11, y = d.translucent), "border" in d && e(12, m = d.border), "autoscroll" in d && e(24, ne = d.autoscroll), "$$scope" in d && e(28, f = d.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (a === null ? e(0, a = ie) : r && e(0, a = (performance.now() - W) / 1e3 + a), a != null && (e(19, he = a.toFixed(1)), e(27, ie = a))), n.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && e(17, de = a === null || a <= 0 || !E ? null : Math.min(E / a, 1)), n.$$.dirty[0] & /*progress*/
    128 && k != null && e(18, me = !1), n.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (k != null ? e(14, I = k.map((d) => {
      if (d.index != null && d.length != null)
        return d.index / d.length;
      if (d.progress != null)
        return d.progress;
    })) : e(14, I = null), I ? (e(15, Q = I[I.length - 1]), Z && (Q === 0 ? e(16, Z.style.transition = "0", Z) : e(16, Z.style.transition = "150ms", Z))) : e(15, Q = void 0)), n.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? et() : ge()), n.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && J && w && (u === "pending" || u === "complete") && Qt(J, ne), n.$$.dirty[0] & /*status, message*/
    8388624, n.$$.dirty[0] & /*timer_diff*/
    67108864 && e(20, l = E.toFixed(1));
  }, [
    a,
    o,
    s,
    _,
    u,
    h,
    p,
    k,
    L,
    F,
    c,
    y,
    m,
    J,
    I,
    Q,
    Z,
    de,
    me,
    he,
    l,
    r,
    w,
    C,
    ne,
    W,
    E,
    ie,
    f,
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
  get_slot_changes: sl,
  get_spread_update: fl,
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
function cl(n) {
  let t, e, l;
  const i = (
    /*#slots*/
    n[17].default
  ), f = tl(
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
      ), f && f.c(), He(
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
    m(r, s) {
      al(r, t, s), f && f.m(t, null), l = !0;
    },
    p(r, s) {
      f && f.p && (!l || s & /*$$scope*/
      65536) && _l(
        f,
        i,
        r,
        /*$$scope*/
        r[16],
        l ? sl(
          i,
          /*$$scope*/
          r[16],
          s,
          null
        ) : il(
          /*$$scope*/
          r[16]
        ),
        null
      ), He(
        /*tag*/
        r[14]
      )(t, a = fl(o, [
        (!l || s & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          r[7]
        ) },
        (!l || s & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          r[2]
        ) },
        (!l || s & /*elem_classes*/
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
      r[9]), s & /*height*/
      1 && M(t, "height", typeof /*height*/
      r[0] == "number" ? (
        /*height*/
        r[0] + "px"
      ) : void 0), s & /*width*/
      2 && M(t, "width", typeof /*width*/
      r[1] == "number" ? `calc(min(${/*width*/
      r[1]}px, 100%))` : void 0), s & /*variant*/
      16 && M(
        t,
        "border-style",
        /*variant*/
        r[4]
      ), s & /*allow_overflow*/
      2048 && M(
        t,
        "overflow",
        /*allow_overflow*/
        r[11] ? "visible" : "hidden"
      ), s & /*scale*/
      4096 && M(
        t,
        "flex-grow",
        /*scale*/
        r[12]
      ), s & /*min_width*/
      8192 && M(t, "min-width", `calc(min(${/*min_width*/
      r[13]}px, 100%))`);
    },
    i(r) {
      l || (xe(f, r), l = !0);
    },
    o(r) {
      $e(f, r), l = !1;
    },
    d(r) {
      r && ll(t), f && f.d(r);
    }
  };
}
function ul(n) {
  let t, e = (
    /*tag*/
    n[14] && cl(n)
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
  let { $$slots: l = {}, $$scope: i } = t, { height: f = void 0 } = t, { width: o = void 0 } = t, { elem_id: a = "" } = t, { elem_classes: r = [] } = t, { variant: s = "solid" } = t, { border_mode: _ = "base" } = t, { padding: u = !0 } = t, { type: w = "normal" } = t, { test_id: h = void 0 } = t, { explicit_call: p = !1 } = t, { container: C = !0 } = t, { visible: k = !0 } = t, { allow_overflow: L = !0 } = t, { scale: F = null } = t, { min_width: c = 0 } = t, y = w === "fieldset" ? "fieldset" : "div";
  return n.$$set = (m) => {
    "height" in m && e(0, f = m.height), "width" in m && e(1, o = m.width), "elem_id" in m && e(2, a = m.elem_id), "elem_classes" in m && e(3, r = m.elem_classes), "variant" in m && e(4, s = m.variant), "border_mode" in m && e(5, _ = m.border_mode), "padding" in m && e(6, u = m.padding), "type" in m && e(15, w = m.type), "test_id" in m && e(7, h = m.test_id), "explicit_call" in m && e(8, p = m.explicit_call), "container" in m && e(9, C = m.container), "visible" in m && e(10, k = m.visible), "allow_overflow" in m && e(11, L = m.allow_overflow), "scale" in m && e(12, F = m.scale), "min_width" in m && e(13, c = m.min_width), "$$scope" in m && e(16, i = m.$$scope);
  }, [
    f,
    o,
    a,
    r,
    s,
    _,
    u,
    h,
    p,
    C,
    k,
    L,
    F,
    c,
    y,
    w,
    i,
    l
  ];
}
class ml extends $t {
  constructor(t) {
    super(), ol(this, t, dl, ul, rl, {
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
  get_spread_object: pl,
  get_spread_update: yl,
  init: kl,
  insert: Ge,
  mount_component: _e,
  safe_not_equal: ql,
  space: Fl,
  toggle_class: Oe,
  transition_in: ce,
  transition_out: ue
} = window.__gradio__svelte__internal;
function Ll(n) {
  var r;
  let t, e, l, i, f;
  const o = [
    { autoscroll: (
      /*gradio*/
      n[5].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      n[5].i18n
    ) },
    /*loading_status*/
    n[4],
    { variant: "center" }
  ];
  let a = {};
  for (let s = 0; s < o.length; s += 1)
    a = hl(a, o[s]);
  return t = new xt({ props: a }), i = new ut({
    props: {
      min_height: (
        /*loading_status*/
        n[4] && /*loading_status*/
        ((r = n[4]) == null ? void 0 : r.status) !== "complete"
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
      )
    }
  }), i.$on(
    "change",
    /*change_handler*/
    n[7]
  ), {
    c() {
      var s;
      ae(t.$$.fragment), e = Fl(), l = vl("div"), ae(i.$$.fragment), wl(l, "class", "svelte-gqsrr7"), Oe(
        l,
        "pending",
        /*loading_status*/
        ((s = n[4]) == null ? void 0 : s.status) === "pending"
      );
    },
    m(s, _) {
      _e(t, s, _), Ge(s, e, _), Ge(s, l, _), _e(i, l, null), f = !0;
    },
    p(s, _) {
      var h, p;
      const u = _ & /*gradio, loading_status*/
      48 ? yl(o, [
        _ & /*gradio*/
        32 && { autoscroll: (
          /*gradio*/
          s[5].autoscroll
        ) },
        _ & /*gradio*/
        32 && { i18n: (
          /*gradio*/
          s[5].i18n
        ) },
        _ & /*loading_status*/
        16 && pl(
          /*loading_status*/
          s[4]
        ),
        o[3]
      ]) : {};
      t.$set(u);
      const w = {};
      _ & /*loading_status*/
      16 && (w.min_height = /*loading_status*/
      s[4] && /*loading_status*/
      ((h = s[4]) == null ? void 0 : h.status) !== "complete"), _ & /*value*/
      8 && (w.value = /*value*/
      s[3]), _ & /*elem_classes*/
      2 && (w.elem_classes = /*elem_classes*/
      s[1]), _ & /*visible*/
      4 && (w.visible = /*visible*/
      s[2]), i.$set(w), (!f || _ & /*loading_status*/
      16) && Oe(
        l,
        "pending",
        /*loading_status*/
        ((p = s[4]) == null ? void 0 : p.status) === "pending"
      );
    },
    i(s) {
      f || (ce(t.$$.fragment, s), ce(i.$$.fragment, s), f = !0);
    },
    o(s) {
      ue(t.$$.fragment, s), ue(i.$$.fragment, s), f = !1;
    },
    d(s) {
      s && (Ye(e), Ye(l)), re(t, s), re(i);
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
      const f = {};
      i & /*visible*/
      4 && (f.visible = /*visible*/
      l[2]), i & /*elem_id*/
      1 && (f.elem_id = /*elem_id*/
      l[0]), i & /*elem_classes*/
      2 && (f.elem_classes = /*elem_classes*/
      l[1]), i & /*$$scope, loading_status, value, elem_classes, visible, gradio*/
      318 && (f.$$scope = { dirty: i, ctx: l }), t.$set(f);
    },
    i(l) {
      e || (ce(t.$$.fragment, l), e = !0);
    },
    o(l) {
      ue(t.$$.fragment, l), e = !1;
    },
    d(l) {
      re(t, l);
    }
  };
}
function Ml(n, t, e) {
  let { label: l } = t, { elem_id: i = "" } = t, { elem_classes: f = [] } = t, { visible: o = !0 } = t, { value: a = "" } = t, { loading_status: r } = t, { gradio: s } = t;
  const _ = () => s.dispatch("change");
  return n.$$set = (u) => {
    "label" in u && e(6, l = u.label), "elem_id" in u && e(0, i = u.elem_id), "elem_classes" in u && e(1, f = u.elem_classes), "visible" in u && e(2, o = u.visible), "value" in u && e(3, a = u.value), "loading_status" in u && e(4, r = u.loading_status), "gradio" in u && e(5, s = u.gradio);
  }, n.$$.update = () => {
    n.$$.dirty & /*label, gradio*/
    96 && s.dispatch("change");
  }, [
    i,
    f,
    o,
    a,
    r,
    s,
    l,
    _
  ];
}
class Vl extends gl {
  constructor(t) {
    super(), kl(this, t, Ml, Cl, ql, {
      label: 6,
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      value: 3,
      loading_status: 4,
      gradio: 5
    });
  }
}
export {
  Vl as default
};

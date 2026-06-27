const {
  SvelteComponent: S,
  assign: T,
  attr: j,
  children: B,
  claim_component: c,
  claim_element: C,
  claim_space: D,
  create_component: d,
  destroy_component: b,
  detach: r,
  element: E,
  get_spread_object: H,
  get_spread_update: L,
  init: M,
  insert_hydration: q,
  mount_component: v,
  safe_not_equal: V,
  space: z,
  toggle_class: I,
  transition_in: w,
  transition_out: k
} = window.__gradio__svelte__internal;
function A(n) {
  let t, i, l, a, u;
  const m = [
    { autoscroll: (
      /*gradio*/
      n[8].autoscroll
    ) },
    { i18n: (
      /*gradio*/
      n[8].i18n
    ) },
    /*loading_status*/
    n[7],
    { variant: "center" }
  ];
  let g = {};
  for (let e = 0; e < m.length; e += 1)
    g = T(g, m[e]);
  return t = new StatusTracker({ props: g }), a = new HTML({
    props: {
      min_height: (
        /*loading_status*/
        n[7] && /*loading_status*/
        n[7]?.status !== "complete"
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
      ),
      sandbox: (
        /*sandbox*/
        n[6]
      )
    }
  }), {
    c() {
      d(t.$$.fragment), i = z(), l = E("div"), d(a.$$.fragment), this.h();
    },
    l(e) {
      c(t.$$.fragment, e), i = D(e), l = C(e, "DIV", { class: !0 });
      var s = B(l);
      c(a.$$.fragment, s), s.forEach(r), this.h();
    },
    h() {
      j(l, "class", "svelte-gqsrr7"), I(
        l,
        "pending",
        /*loading_status*/
        n[7]?.status === "pending"
      );
    },
    m(e, s) {
      v(t, e, s), q(e, i, s), q(e, l, s), v(a, l, null), u = !0;
    },
    p(e, s) {
      const h = s & /*gradio, loading_status*/
      384 ? L(m, [
        s & /*gradio*/
        256 && { autoscroll: (
          /*gradio*/
          e[8].autoscroll
        ) },
        s & /*gradio*/
        256 && { i18n: (
          /*gradio*/
          e[8].i18n
        ) },
        s & /*loading_status*/
        128 && H(
          /*loading_status*/
          e[7]
        ),
        m[3]
      ]) : {};
      t.$set(h);
      const f = {};
      s & /*loading_status*/
      128 && (f.min_height = /*loading_status*/
      e[7] && /*loading_status*/
      e[7]?.status !== "complete"), s & /*value*/
      8 && (f.value = /*value*/
      e[3]), s & /*elem_classes*/
      2 && (f.elem_classes = /*elem_classes*/
      e[1]), s & /*visible*/
      4 && (f.visible = /*visible*/
      e[2]), s & /*height*/
      16 && (f.height = /*height*/
      e[4]), s & /*width*/
      32 && (f.width = /*width*/
      e[5]), s & /*sandbox*/
      64 && (f.sandbox = /*sandbox*/
      e[6]), a.$set(f), (!u || s & /*loading_status*/
      128) && I(
        l,
        "pending",
        /*loading_status*/
        e[7]?.status === "pending"
      );
    },
    i(e) {
      u || (w(t.$$.fragment, e), w(a.$$.fragment, e), u = !0);
    },
    o(e) {
      k(t.$$.fragment, e), k(a.$$.fragment, e), u = !1;
    },
    d(e) {
      e && (r(i), r(l)), b(t, e), b(a);
    }
  };
}
function F(n) {
  let t, i;
  return t = new Block({
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
      $$slots: { default: [A] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      d(t.$$.fragment);
    },
    l(l) {
      c(t.$$.fragment, l);
    },
    m(l, a) {
      v(t, l, a), i = !0;
    },
    p(l, [a]) {
      const u = {};
      a & /*visible*/
      4 && (u.visible = /*visible*/
      l[2]), a & /*elem_id*/
      1 && (u.elem_id = /*elem_id*/
      l[0]), a & /*elem_classes*/
      2 && (u.elem_classes = /*elem_classes*/
      l[1]), a & /*height*/
      16 && (u.height = /*height*/
      l[4]), a & /*$$scope, loading_status, value, elem_classes, visible, height, width, sandbox, gradio*/
      1534 && (u.$$scope = { dirty: a, ctx: l }), t.$set(u);
    },
    i(l) {
      i || (w(t.$$.fragment, l), i = !0);
    },
    o(l) {
      k(t.$$.fragment, l), i = !1;
    },
    d(l) {
      b(t, l);
    }
  };
}
function G(n, t, i) {
  let { label: l } = t, { elem_id: a = "" } = t, { elem_classes: u = [] } = t, { visible: m = !0 } = t, { value: g = "" } = t, { height: e = "100%" } = t, { width: s = "100%" } = t, { sandbox: h = null } = t, { loading_status: f } = t, { gradio: o } = t;
  return n.$$set = (_) => {
    "label" in _ && i(9, l = _.label), "elem_id" in _ && i(0, a = _.elem_id), "elem_classes" in _ && i(1, u = _.elem_classes), "visible" in _ && i(2, m = _.visible), "value" in _ && i(3, g = _.value), "height" in _ && i(4, e = _.height), "width" in _ && i(5, s = _.width), "sandbox" in _ && i(6, h = _.sandbox), "loading_status" in _ && i(7, f = _.loading_status), "gradio" in _ && i(8, o = _.gradio);
  }, n.$$.update = () => {
    n.$$.dirty & /*value, gradio*/
    264 && o.dispatch("change");
  }, [
    a,
    u,
    m,
    g,
    e,
    s,
    h,
    f,
    o,
    l
  ];
}
class J extends S {
  constructor(t) {
    super(), M(this, t, G, F, V, {
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
  J as default
};

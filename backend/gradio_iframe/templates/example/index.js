const {
  SvelteComponent: _,
  append_hydration: m,
  attr: i,
  children: d,
  claim_element: f,
  detach: c,
  element: u,
  init: g,
  insert_hydration: v,
  noop: h,
  safe_not_equal: w,
  toggle_class: r
} = window.__gradio__svelte__internal;
function y(n) {
  let e, t;
  return {
    c() {
      e = u("div"), t = u("iframe"), this.h();
    },
    l(l) {
      e = f(l, "DIV", { class: !0 });
      var a = d(e);
      t = f(a, "IFRAME", {
        title: !0,
        width: !0,
        height: !0,
        srcdoc: !0,
        sandbox: !0,
        allow: !0
      }), d(t).forEach(c), a.forEach(c), this.h();
    },
    h() {
      i(t, "title", "iframe component"), i(t, "width", "100%"), i(t, "height", "1000px"), i(
        t,
        "srcdoc",
        /*value*/
        n[0]
      ), i(t, "sandbox", "allow-scripts"), i(t, "allow", ""), i(e, "class", "prose svelte-180qqaf"), r(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), r(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), r(
        e,
        "selected",
        /*selected*/
        n[2]
      );
    },
    m(l, a) {
      v(l, e, a), m(e, t);
    },
    p(l, [a]) {
      a & /*value*/
      1 && i(
        t,
        "srcdoc",
        /*value*/
        l[0]
      ), a & /*type*/
      2 && r(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), a & /*type*/
      2 && r(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), a & /*selected*/
      4 && r(
        e,
        "selected",
        /*selected*/
        l[2]
      );
    },
    i: h,
    o: h,
    d(l) {
      l && c(e);
    }
  };
}
function b(n, e, t) {
  let { value: l } = e, { type: a } = e, { selected: o = !1 } = e;
  return n.$$set = (s) => {
    "value" in s && t(0, l = s.value), "type" in s && t(1, a = s.type), "selected" in s && t(2, o = s.selected);
  }, [l, a, o];
}
class E extends _ {
  constructor(e) {
    super(), g(this, e, b, y, w, { value: 0, type: 1, selected: 2 });
  }
}
export {
  E as default
};

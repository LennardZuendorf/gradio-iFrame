const {
  SvelteComponent: r,
  append: d,
  attr: s,
  detach: u,
  element: o,
  init: g,
  insert: m,
  noop: _,
  safe_not_equal: v,
  toggle_class: c
} = window.__gradio__svelte__internal;
function y(n) {
  let e, l;
  return {
    c() {
      e = o("div"), l = o("iframe"), s(l, "title", "iframe component"), s(l, "width", "100%"), s(l, "height", "1000px"), s(
        l,
        "srcdoc",
        /*value*/
        n[0]
      ), s(l, "allow", ""), s(e, "class", "prose svelte-180qqaf"), c(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), c(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), c(
        e,
        "selected",
        /*selected*/
        n[2]
      );
    },
    m(t, a) {
      m(t, e, a), d(e, l);
    },
    p(t, [a]) {
      a & /*value*/
      1 && s(
        l,
        "srcdoc",
        /*value*/
        t[0]
      ), a & /*type*/
      2 && c(
        e,
        "table",
        /*type*/
        t[1] === "table"
      ), a & /*type*/
      2 && c(
        e,
        "gallery",
        /*type*/
        t[1] === "gallery"
      ), a & /*selected*/
      4 && c(
        e,
        "selected",
        /*selected*/
        t[2]
      );
    },
    i: _,
    o: _,
    d(t) {
      t && u(e);
    }
  };
}
function h(n, e, l) {
  let { value: t } = e, { type: a } = e, { selected: f = !1 } = e;
  return n.$$set = (i) => {
    "value" in i && l(0, t = i.value), "type" in i && l(1, a = i.type), "selected" in i && l(2, f = i.selected);
  }, [t, a, f];
}
class b extends r {
  constructor(e) {
    super(), g(this, e, h, y, v, { value: 0, type: 1, selected: 2 });
  }
}
export {
  b as default
};

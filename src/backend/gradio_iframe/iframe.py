"""iFrame component for embedding HTML content."""

from __future__ import annotations

from typing import Any, Callable, Sequence, TYPE_CHECKING

from gradio_client.documentation import document

from gradio.components.base import Component
from gradio.events import Events

if TYPE_CHECKING:
    from gradio.components import Timer


@document()
class iFrame(Component):
    """
    Used to display arbitrary HTML output inside an iframe.
    Preprocessing: this component does *not* accept input.
    Postprocessing: expects a valid HTML {str}.

    Demos: text_analysis
    Guides: key-features
    """

    EVENTS = [Events.change]

    def __init__(
        self,
        value: str | Callable = "",
        *,
        label: str | None = None,
        every: "Timer | float | None" = None,
        inputs: Component | Sequence[Component] | set[Component] | None = None,
        show_label: bool | None = None,
        visible: bool = True,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
        key: int | str | tuple[int | str, ...] | None = None,
        preserved_by_key: list[str] | str | None = "value",
        height: str | None = None,
        width: str | None = None,
        sandbox: str | None = None,
    ):
        """
        Parameters:
            value: Default value. If callable, the function will be called whenever the app loads to set the initial value of the component.
            label: The label for this component. Is used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.
            every: Continually calls `value` to recalculate it if `value` is a function (has no effect otherwise). Can provide a Timer whose tick resets `value`, or a float giving the interval in seconds.
            inputs: Components that are used as inputs to calculate `value` if `value` is a function (has no effect otherwise). `value` is recalculated any time the inputs change.
            show_label: If True, the label is displayed above the component.
            visible: If False, component will be hidden.
            elem_id: An optional string that is assigned as the id of this component in the iFrame DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the iFrame DOM. Can be used for targeting CSS styles.
            render: If False, component will not be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
            key: in a gr.render, Components with the same key across re-renders are treated as the same component, not a new component. Properties set in 'preserved_by_key' are not reset across a re-render.
            preserved_by_key: A list of parameters from this component's constructor. Inside a gr.render() function, if a component is re-rendered with the same key, these (and only these) parameters will be preserved in the UI instead of re-rendered based on the values provided during constructor.
            height: The height of the iFrame in valid CSS (e.g. "100px" or "50%"). If None, the height will be automatically set based on content.
            width: The width of the iFrame in valid CSS (e.g. "100%" or "500px"). Defaults to 100%.
            sandbox: HTML sandbox attribute string to restrict iframe capabilities (e.g. "allow-scripts allow-forms"). None (default) applies no sandboxing. Note: omitting "allow-scripts" disables JavaScript and auto-height measurement inside the iframe.
        """
        super().__init__(
            label=label,
            every=every,
            inputs=inputs,
            show_label=show_label,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            render=render,
            key=key,
            preserved_by_key=preserved_by_key,
            value=value,
        )

        self.height = height
        self.width = width
        self.sandbox = sandbox

    def example_inputs(self) -> Any:
        return """<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=QfHLpHZsI98oZT1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"""

    def preprocess(self, payload: str | None) -> str | None:
        return payload

    def postprocess(self, value: str | None) -> str | None:
        return value

    def api_info(self) -> dict[str, Any]:
        return {"type": "string"}

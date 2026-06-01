
import gradio as gr
from app import demo as app
import os

_docs = {'iFrame': {'description': 'Used to display abitrary html output.\n', 'members': {'__init__': {'value': {'type': 'typing.Union[str, typing.Callable][str, Callable]', 'default': '""', 'description': 'Default value. If callable, the function will be called whenever the app loads to set the initial value of the component.'}, 'label': {'type': 'str | None', 'default': 'None', 'description': 'The label for this component. Is used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.'}, 'every': {'type': 'float | None', 'default': 'None', 'description': "If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. Queue must be enabled. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute."}, 'show_label': {'type': 'bool | None', 'default': 'None', 'description': 'This parameter has no effect.'}, 'visible': {'type': 'bool', 'default': 'True', 'description': 'If False, component will be hidden.'}, 'elem_id': {'type': 'str | None', 'default': 'None', 'description': 'An optional string that is assigned as the id of this component in the iFrame DOM. Can be used for targeting CSS styles.'}, 'elem_classes': {'type': 'list[str] | str | None', 'default': 'None', 'description': 'An optional list of strings that are assigned as the classes of this component in the iFrame DOM. Can be used for targeting CSS styles.'}, 'render': {'type': 'bool', 'default': 'True', 'description': 'If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.'}, 'height': {'type': 'str | None', 'default': 'None', 'description': 'The height of the iFrame in valid css (i.e "10px). If None, the height will be automatically set to 100%'}, 'width': {'type': 'str | None', 'default': 'None', 'description': None}}, 'postprocess': {'value': {'type': 'str | None', 'description': "The output data received by the component from the user's function in the backend."}}, 'preprocess': {'return': {'type': 'str | None', 'description': "The preprocessed input data sent to the user's function in the backend."}, 'value': None}}, 'events': {'change': {'type': None, 'default': None, 'description': 'Triggered when the value of the iFrame changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input.'}}}, '__meta__': {'additional_interfaces': {}, 'user_fn_refs': {'iFrame': []}}}

abs_path = os.path.join(os.path.dirname(__file__), "css.css")

with gr.Blocks(
    css=abs_path,
    theme=gr.themes.Default(
        font_mono=[
            gr.themes.GoogleFont("Inconsolata"),
            "monospace",
        ],
    ),
) as demo:
    gr.Markdown(
"""
# `gradio_iframe`

<div style="display: flex; gap: 7px;">
<a href="https://pypi.org/project/gradio_iframe/" target="_blank"><img alt="PyPI - Version" src="https://img.shields.io/pypi/v/gradio_iframe"></a>  
</div>

Experimental empowered iFrame component based on existing HTML gradio component.
""", elem_classes=["md-custom"], header_links=True)
    app.render()
    gr.Markdown(
"""
## Installation

```bash
pip install gradio_iframe
```

## Usage

```python

import gradio as gr
from gradio_iframe import iFrame


example = iFrame().example_inputs()

with gr.Blocks() as demo:
    with gr.Tab("Blank iFrame"):
        with gr.Row():
            gr.Markdown(\"\"\"
                ### Blank iFrame
                \"\"\")
        with gr.Row():
            iFrame(label="Blank"),  # blank component
    with gr.Tab("Populated iFrame"):
        with gr.Row():
            gr.Markdown("## iFrame with another iFrame inside")
        with gr.Row():
            iFrame(value=example, label="Populated"),  # populated component

if __name__ == "__main__":
    demo.launch()

```
""", elem_classes=["md-custom"], header_links=True)


    gr.Markdown("""
## `iFrame`

### Initialization
""", elem_classes=["md-custom"], header_links=True)

    gr.ParamViewer(value=_docs["iFrame"]["members"]["__init__"], linkify=[])


    gr.Markdown("### Events")
    gr.ParamViewer(value=_docs["iFrame"]["events"], linkify=['Event'])




    gr.Markdown("""

### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function.
- When used as an output, the component only impacts the return signature of the user function.

The code snippet below is accurate in cases where the component is used as both an input and an output.

- **As input:** Is passed, the preprocessed input data sent to the user's function in the backend.
- **As output:** Should return, the output data received by the component from the user's function in the backend.

 ```python
def predict(
    value: str | None
) -> str | None:
    return value
```
""", elem_classes=["md-custom", "iFrame-user-fn"], header_links=True)




    demo.load(None, js=r"""function() {
    const refs = {};
    const user_fn_refs = {
          iFrame: [], };
    requestAnimationFrame(() => {

        Object.entries(user_fn_refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}-user-fn`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })

        Object.entries(refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })
    })
}

""")

demo.launch()

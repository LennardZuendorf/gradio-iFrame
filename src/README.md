# gradio_iframe
A custom gradio component to embed an iframe in a gradio interface. This component is based on the [HTML]() component.
It's currently still a work in progress.

## Usage

The usage is similar to the HTML component. You can pass valid html and it will be rendered in the interface as an iframe, meaning you can embed any website or webapp that supports iframes.
Also, JavaScript should run normal.

You can still pass normal html that's not interactive.

### Example

```python
import gradio as gr
from gradio_iframe import iFrame

gr.Interface(
    iFrame(
        label="iFrame Example",
        value=("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
        show_label=True)
)
```

## Known Issues

**There are many reason why it's not a good idea to embed websites in an iframe.**
See [this](https://blog.bitsrc.io/4-security-concerns-with-iframes-every-web-developer-should-know-24c73e6a33e4), or just google "iframe security concerns" for more information. Also, iFrames will use additional computing power and memory, which can slow down the interface.

Also this component is still a work in progress and not fully tested. Use at your own risk.

### Other Issues

- Height does not grow according to the inner component.
- ...

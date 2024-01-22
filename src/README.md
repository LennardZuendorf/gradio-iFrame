# gradio_iframe
A custom gradio component to embed an iframe in a gradio interface. This component is based on the [HTML]() component.
It's currently still a work in progress.

## Usage

The usage is similar to the HTML component. You can pass valid html and it will be rendered in the interface as an iframe, meaning you can embed any website or webapp that supports iframes.
Also, JavaScript should run normal. You can even pass an iframe inside an iframe (see below!), i.e. a youtube or spotify embed.

The size will adjust to the size of the iframe (onload), **this is gonna be a bit delayed**. The width is default at 100%. 
You can also set the height and width manually.

### Example

```python
import gradio as gr
from gradio_iframe import iFrame

gr.Interface(
    iFrame(
        label="iFrame Example",
        value=("""
        <iframe width="560" 
            height="315" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=QfHLpHZsI98oZT1G" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>"""),
        show_label=True)
)
```

## Roadmap

- [ ] Add manual hand over of other iFrame options.
- [ ] Explore switch between src and srcdoc through variable.

## Known Issues

**There are many reason why it's not a good idea to embed websites in an iframe.**
See [this](https://blog.bitsrc.io/4-security-concerns-with-iframes-every-web-developer-should-know-24c73e6a33e4), or just google "iframe security concerns" for more information. Also, iFrames will use additional computing power and memory, which can slow down the interface.

Also, this component is still a work in progress and not fully tested. Use at your own risk.

### Other Issues

- Height sometimes does not grow according to the inner component.
- The component is not completely responsive yet and struggles with variable heigth.
- ...

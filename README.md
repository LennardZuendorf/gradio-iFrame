---
title: gradio iFrame (Demo)
tags: [gradio-custom-component,gradio-template-HTML,HTML,iFrame]
emoji: 🪟
colorFrom: yellow
colorTo: gray
sdk: docker
pinned: false
license: mit
---

# gradio_iframe

A custom Gradio component that renders HTML in an iframe. It can embed content such as a YouTube or Spotify iframe, and supports explicit CSS dimensions or automatic height measurement for same-origin content.

## Development and testing

Gradio's custom-component workflow requires Python 3.10+, Node.js 20+, npm 9+, and Gradio 5+. Use a virtual environment so the package and the `gradio` CLI always use the same Python installation.

```bash
# From the repository root
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -e ".[dev]"
npm ci --prefix frontend
```

Run the automated checks:

```bash
npm test --prefix frontend
python -m gradio cc build . --no-bump-version --no-generate-docs \
  --python-path "$(python -c 'import sys; print(sys.executable)')"
python -m pip install --force-reinstall --no-deps dist/*.whl
python -m twine check dist/*
python -m pip check
python -m pytest tests/ -v
```

The build regenerates the tracked templates under `backend/gradio_iframe/templates/`; edit the Svelte files in `frontend/` instead. The `dist/` directory is disposable build output.

For frontend development with hot reload, keep the environment activated and run:

```bash
python -m gradio cc dev . --python-path "$(python -c 'import sys; print(sys.executable)')"
```

Open the frontend URL shown by the CLI. To run the packaged demo rather than hot reload, use `python app.py` or `python demo/app.py` after installation. These commands follow Gradio's [custom component workflow](https://www.gradio.app/guides/custom-components-in-five-minutes).

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

The component has automated frontend, packaging, and demo smoke tests, but applications that render untrusted HTML still require a deliberate security review.

### Other Issues

- Height sometimes does not grow according to the inner component.
- The component is not completely responsive yet and struggles with variable heigth.
- ...

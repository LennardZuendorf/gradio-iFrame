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

A Gradio custom component that renders HTML in an iframe. It supports nested embeds such as YouTube or Spotify players, explicit CSS dimensions, and automatic height updates for content that can run the injected measurement script.

## Development and testing

Gradio's custom-component workflow requires Python 3.10+, Node.js 20+, npm 9+, and Gradio 5.x. Use a virtual environment so the package and the `gradio` CLI always use the same Python installation.

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

Pass HTML to `value`. It is rendered as the iframe's `srcdoc`, so nested embeds work when their provider permits framing. Width defaults to `100%`; set `height` and `width` to any valid CSS values when automatic sizing is not appropriate.

### Example

```python
import gradio as gr
from gradio_iframe import iFrame

with gr.Blocks() as demo:
    iFrame(
        label="iFrame example",
        value="""
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
        """,
        height="315px",
    )

demo.launch()
```

### Sandbox behavior

`iFrame` defaults to `sandbox="allow-scripts"`. This lets scripts in the iframe run while keeping `srcdoc` content isolated from the Gradio app's origin. Add only the capabilities your embedded content needs, for example `sandbox="allow-scripts allow-forms"`.

Passing `sandbox=None` removes the sandbox entirely and is appropriate only for HTML you fully trust. Untrusted HTML remains an injection risk; do not remove the default sandbox for untrusted content.

## Notes

- Auto-height uses `postMessage` and requires scripts to be enabled in the sandbox. Cross-origin embedded pages may not expose a measurable document height.
- Embedding can be blocked by the provider's framing policy.
- The component has automated frontend, packaging, and demo smoke tests. Review any application that accepts untrusted HTML before deploying it.

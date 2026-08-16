# gradio-iFrame — Agent Guide

Custom Gradio component that renders HTML content inside an iframe. Published to PyPI as `gradio_iframe`.

## Stack

| Layer | Tech | Location |
|---|---|---|
| Python backend | Gradio Component (Python 3.10+) | `backend/gradio_iframe/` |
| Frontend | Svelte + TypeScript | `frontend/` |
| Demo app | Gradio Blocks | `app.py`, `demo/app.py` |
| Build | Hatchling (Python), npm (JS) | `pyproject.toml`, `frontend/package.json` |

## Key Files

- `backend/gradio_iframe/iframe.py` — Component class (`iFrame`), extends `gradio.components.base.Component`
- `frontend/shared/HTML.svelte` — Core iframe rendering + auto-height logic
- `frontend/Index.svelte` — Gradio Block wrapper
- `frontend/Example.svelte` — Example display in Gradio Interfaces
- `app.py` — Minimal demo (blank + populated iframe)

## Development Workflow

### Feature Development
- Always develop on a feature branch: `git checkout -b feat/<short-name>`
- Target branch for PRs: `main`
- Keep backend changes (`.py`) and frontend changes (`.svelte`) in separate commits when possible

### Running the Demo
```bash
# From the repository root, use a virtual environment so `gradio` and the
# editable component are installed in the same Python environment.
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -e ".[dev]"
npm ci --prefix frontend

# Launch a packaged demo
python app.py
# or
python demo/app.py
```

### Frontend Dev
```bash
# The virtual environment above must still be active.
python -m gradio cc dev . --python-path "$(python -c 'import sys; print(sys.executable)')"
```

### Building
```bash
# Keep package and CLI in the same active virtual environment.
python -m gradio cc build . --no-bump-version --no-generate-docs \
  --python-path "$(python -c 'import sys; print(sys.executable)')"
```

### Testing

Gradio custom components require Python 3.10+, Node.js 20+, npm 9+, and Gradio 5.x. Run the full pre-PR verification from the repository root after the setup above:

```bash
npm test --prefix frontend
python -m gradio cc build . --no-bump-version --no-generate-docs \
  --python-path "$(python -c 'import sys; print(sys.executable)')"
python -m pip install --force-reinstall --no-deps dist/*.whl
python -m twine check dist/*
python -m pip check
python -m pytest tests/ -v
```

`gradio cc build` regenerates `backend/gradio_iframe/templates/`. Do not edit those generated files; make frontend changes in `frontend/` and rebuild. These commands mirror Gradio's [custom-component workflow](https://www.gradio.app/guides/custom-components-in-five-minutes).

## Agent Workflow Guidelines

### Use Subagents For
- **Explore agent**: codebase exploration, finding patterns across Svelte + Python files
- **Plan agent**: before any change touching both frontend and backend (API changes require both sides)
- **General-purpose agent**: running multi-step tasks like linting, testing, building

### Parallel Work
When making changes that span both frontend and backend:
1. Use Explore agent to understand current state of both layers first
2. Plan the interface contract (what Python passes → what Svelte receives)
3. Implement backend and frontend in parallel subagents if independent
4. Validate with the demo app

### Never Do
- Edit compiled/generated files in `backend/gradio_iframe/templates/` directly — these are built from `frontend/`
- Modify `iframe.pyi` manually — it's auto-generated
- Push directly to `main`

## Code Conventions

**Python**: No type annotations on unchanged code, no docstrings beyond existing patterns. Match existing style in `iframe.py`.

**Svelte**: Props use `export let`, keep reactivity statements (`$:`) minimal. Height/width are CSS strings, default `"100%"`.

**Versioning**: Python package version in `pyproject.toml`, JS version in `frontend/package.json` — bump both together on releases.

## Known Issues / Open Work
- Auto-height relies on the injected script and `postMessage`; embedded cross-origin pages may not expose a measurable document height
- `show_label` parameter has no effect (noted in docstring)
- Iframes default to `sandbox="allow-scripts"`; `sandbox=None` is an explicit opt-out only for fully trusted HTML

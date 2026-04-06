# gradio-iFrame — Agent Guide

Custom Gradio component that renders HTML content inside an iframe. Published to PyPI as `gradio_iframe`.

## Stack

| Layer | Tech | Location |
|---|---|---|
| Python backend | Gradio Component (Python 3.10+) | `src/backend/gradio_iframe/` |
| Frontend | Svelte + TypeScript | `src/frontend/` |
| Demo app | Gradio Blocks | `app.py`, `src/demo/app.py` |
| Build | Hatchling (Python), npm (JS) | `src/pyproject.toml`, `src/frontend/package.json` |

## Key Files

- `src/backend/gradio_iframe/iframe.py` — Component class (`iFrame`), extends `gradio.components.base.Component`
- `src/frontend/shared/HTML.svelte` — Core iframe rendering + auto-height logic
- `src/frontend/Index.svelte` — Gradio Block wrapper
- `src/frontend/Example.svelte` — Example display in Gradio Interfaces
- `app.py` — Minimal demo (blank + populated iframe)

## Development Workflow

### Feature Development
- Always develop on a feature branch: `git checkout -b feat/<short-name>`
- Target branch for PRs: `main`
- Keep backend changes (`.py`) and frontend changes (`.svelte`) in separate commits when possible

### Running the Demo
```bash
# Install package locally (from repo root)
pip install -e src/

# Launch demo
python app.py
# or
python src/demo/app.py
```

### Frontend Dev
```bash
cd src/frontend
npm install
# Gradio custom component live reload via:
cd src && gradio cc dev
```

### Building
```bash
cd src && gradio cc build
```

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
- Edit compiled/generated files in `src/backend/gradio_iframe/templates/` directly — these are built from `src/frontend/`
- Modify `iframe.pyi` manually — it's auto-generated
- Push directly to `main`

## Code Conventions

**Python**: No type annotations on unchanged code, no docstrings beyond existing patterns. Match existing style in `iframe.py`.

**Svelte**: Props use `export let`, keep reactivity statements (`$:`) minimal. Height/width are CSS strings, default `"100%"`.

**Versioning**: Python package version in `src/pyproject.toml`, JS version in `src/frontend/package.json` — bump both together on releases.

## Known Issues / Open Work
- Auto-height only works for same-origin iframes (cross-origin throws and falls back silently)
- `show_label` parameter has no effect (noted in docstring)
- No sandbox attribute on iframe (security: arbitrary HTML executes JS)
- `width` param missing from docstring in `iframe.py`

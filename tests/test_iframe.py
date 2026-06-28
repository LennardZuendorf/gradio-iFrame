import gradio as gr
from gradio_iframe import iFrame


def test_import_and_example():
    example = iFrame().example_inputs()
    assert isinstance(example, str)
    assert "iframe" in example.lower()


def test_component_instantiates():
    component = iFrame(label="Blank", height="400px", width="50%")
    assert component.get_config()["height"] == "400px"
    assert component.get_config()["width"] == "50%"


def test_preprocess_postprocess_roundtrip():
    html = "<iframe src='https://example.com'></iframe>"
    component = iFrame()
    assert component.postprocess(html) == html
    assert component.preprocess(html) == html


def test_demo_serves_with_templates():
    # Exercises the compiled frontend templates end to end.
    example = iFrame().example_inputs()
    with gr.Blocks() as demo:
        iFrame(label="Blank")
        iFrame(value=example, label="Populated")

    _, local_url, _ = demo.launch(prevent_thread_lock=True, show_error=True)
    try:
        import urllib.request

        html = urllib.request.urlopen(local_url).read().decode()
        assert "gradio-app" in html
    finally:
        demo.close()

import gradio as gr
from gradio_iframe import iFrame


example = iFrame().example_inputs()

with gr.Blocks() as demo:
    with gr.Row():
        iFrame(label="Blank"),  # blank component
        iFrame(value=example, label="Populated"),  # populated component

if __name__ == "__main__":
    demo.launch()

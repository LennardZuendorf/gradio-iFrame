
import gradio as gr
from gradio_iframe import iFrame


example = iFrame().example_inputs()

with gr.Blocks() as demo:
    with gr.Tab("Blank iFrame"):
        with gr.Row():
            gr.Markdown("""
                ### Blank iFrame
                """)
        with gr.Row():
            iFrame(label="Blank"),  # blank component
    with gr.Tab("Populated iFrame"):
        with gr.Row():
            gr.Markdown("## iFrame with another iFrame inside")
        with gr.Row():
            iFrame(value=example, label="Populated"),  # populated component

demo.launch()

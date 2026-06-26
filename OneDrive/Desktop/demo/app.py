import streamlit as st

# Set up the title of your web app
st.title("🧠 Emotion Detection & Learning Support Engine")
st.write("Welcome! Enter your study challenge below to get empathetic, AI-driven guidance.")

# Create a text input area for the student
user_input = st.text_area("What study challenge are you facing today?", 
                          placeholder="e.g., I am completely lost on recursion and feeling overwhelmed...")

# Create a button to trigger the analysis
if st.button("Analyze & Get Help"):
    if user_input.strip() == "":
        st.warning("Please enter a challenge first!")
    else:
        st.success("Processing your input...")
        # This is where your team will connect the BiLSTM/BERT models and Gemini AI API
        st.info("Predicted Emotion: [Coming Soon]")
        st.write("AI Guidance: [Coming Soon]")
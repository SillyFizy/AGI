import { HfInference } from '@huggingface/inference';

const ACC_TOKEN = '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';
const hf = new HfInference(ACC_TOKEN);

const speech = async (text) => {
    try {
        const output = await hf.textToSpeech({
            model: 'espnet/kan-bayashi_ljspeech_vits',
            inputs: text
        });

        const audioBuffer = await output.arrayBuffer();
        const audioBlob = new Blob([audioBuffer], { type: 'audio/flac' });

        const audioUrl = URL.createObjectURL(audioBlob);

        const audio = new Audio();
        audio.src = audioUrl;
        audio.play();
    } catch (error) {
        console.error('Error:', error);
    }
};

// Call the speech function with the text 'Hello'
export default speech;

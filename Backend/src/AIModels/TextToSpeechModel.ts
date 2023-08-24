const ACC_TOKEN = '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';
import { HfInference } from '@huggingface/inference';
const hf = new HfInference(ACC_TOKEN);

const speech = async (text : string) => {
    const output = await hf.textToSpeech({
        model: 'espnet/kan-bayashi_ljspeech_vits',
        inputs: text
    });
};

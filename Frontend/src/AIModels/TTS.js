const ACC_TOKEN = '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';
import * as fs from 'fs';
import { HfInference } from '@huggingface/inference';
const hf = new HfInference(ACC_TOKEN);

const speech = async (text) => {
    const output = await hf.textToSpeech({
        model: 'espnet/kan-bayashi_ljspeech_vits',
        inputs: text
    });

    const audioFilePath = './AudioFiles/output.flac';
    const buffer = Buffer.from(new Uint8Array(await output.arrayBuffer()));
    await fs.promises.writeFile(audioFilePath, buffer);
};

// Call the speech function with the text 'Hello'

// Alternatively, you can export the function if needed:
export default speech;

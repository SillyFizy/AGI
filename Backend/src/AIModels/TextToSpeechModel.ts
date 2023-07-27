import {HfInference} from "@huggingface/inference";
import fs from "fs";

const ACCESS_TOKEN = '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';
const hf = new HfInference(ACCESS_TOKEN);


const TTS = async () => await hf.textToSpeech({
    model: 'espnet/kan-bayashi_ljspeech_vits',
    inputs: 'Greetings, Commander. This is Verity, your cockpit voice assistant, also known as COVAS, installed to provide systems information and analytical support throughout your journey. I\'m issued as standard by the Pilots Federation in accordance with statute B7249 of the Interstellar Transit Charter. It should be noted that for insurance purposes, it is illegal to travel in most systems without the use of COVAS technology.'
})

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inference_1 = require("@huggingface/inference");
const ACCESS_TOKEN = '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';
const hf = new inference_1.HfInference(ACCESS_TOKEN);
const TTS = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield hf.textToSpeech({
        model: 'espnet/kan-bayashi_ljspeech_vits',
        inputs: 'Greetings, Commander. This is Verity, your cockpit voice assistant, also known as COVAS, installed to provide systems information and analytical support throughout your journey. I\'m issued as standard by the Pilots Federation in accordance with statute B7249 of the Interstellar Transit Charter. It should be noted that for insurance purposes, it is illegal to travel in most systems without the use of COVAS technology.'
    });
});

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
const ACC_TOKEN = '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';
const inference_1 = require("@huggingface/inference");
const hf = new inference_1.HfInference(ACC_TOKEN);
const speech = (text) => __awaiter(void 0, void 0, void 0, function* () {
    const output = yield hf.textToSpeech({
        model: 'espnet/kan-bayashi_ljspeech_vits',
        inputs: text
    });
});

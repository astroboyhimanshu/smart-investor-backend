// src/gemini/gemini.service.ts
import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class GeminiService {
  private model;

  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

    this.model = genAI.getGenerativeModel({
      model: 'models/gemini-2.0-flash-lite',
    });
  }

  async ask(prompt: string): Promise<string> {
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}

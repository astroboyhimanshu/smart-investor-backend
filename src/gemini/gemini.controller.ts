import { Body, Controller, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('ask')
  async askGemini(@Body('prompt') prompt: string) {
    const response = await this.geminiService.ask(prompt);
    return { result: response };
  }
}

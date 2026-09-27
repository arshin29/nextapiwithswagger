import { Controller, Get } from '@nestjs/common';
import { FunService } from './fun.service';

@Controller('fun')
export class FunController {
  constructor(private readonly funService: FunService) {}

  @Get('joke')
  getJoke() {
    return this.funService.getJoke();
  }

  @Get('quote')
  getQuote() {
    return this.funService.getQuote();
  }

  @Get('fact')
  getFact() {
    return this.funService.getFact();
  }

  @Get('compliment')
  getCompliment() {
    return this.funService.getCompliment();
  }

  @Get('fortune')
  getFortune() {
    return this.funService.getFortune();
  }
}
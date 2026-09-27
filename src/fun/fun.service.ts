import { Injectable } from '@nestjs/common';

@Injectable()
export class FunService {
  private jokes = [
    'Why did the developer go broke? Because he used up all his cache.',
    'Why do programmers prefer dark mode? Because light attracts bugs.',
    'There are only 10 kinds of people: those who understand binary and those who don’t.',
  ];

  private quotes = [
    'Believe you can and you are halfway there.',
    'Small progress is still progress.',
    'Your future self will thank you for starting today.',
  ];

  private facts = [
    'Honey never spoils.',
    'Octopuses have three hearts.',
    'Bananas are technically berries.',
  ];

  private compliments = [
    'You have great energy.',
    'You are doing better than you think.',
    'You have excellent taste.',
    'You make things more interesting.',
  ];

  private fortunes = [
    'Something exciting is coming your way.',
    'A new opportunity will find you soon.',
    'Today is a good day to try something new.',
  ];

  private randomItem(items: string[]): string {
    return items[Math.floor(Math.random() * items.length)];
  }

  getJoke() {
    return {
      type: 'joke',
      message: this.randomItem(this.jokes),
    };
  }

  getQuote() {
    return {
      type: 'quote',
      message: this.randomItem(this.quotes),
    };
  }

  getFact() {
    return {
      type: 'fact',
      message: this.randomItem(this.facts),
    };
  }

  getCompliment() {
    return {
      type: 'compliment',
      message: this.randomItem(this.compliments),
    };
  }

  getFortune() {
    return {
      type: 'fortune',
      message: this.randomItem(this.fortunes),
    };
  }
}

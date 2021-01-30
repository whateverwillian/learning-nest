import { Injectable } from '@nestjs/common';

export interface Cat {
  name: string;
  age: string;
}

@Injectable()
export class CatsService {
  private cats = [
    { name: 'Joseph', age: 'A year' },
    { name: 'Maya', age: '3 years' },
    { name: 'Edgar', age: '1 and half year' },
  ];

  getAll(): Cat[] {
    return this.cats;
  }

  getByName(name: string): Cat | undefined {
    return this.cats.find((cat) => cat.name === name);
  }

  create(cat: Cat): Cat {
    this.cats.push(cat);
    return cat;
  }
}

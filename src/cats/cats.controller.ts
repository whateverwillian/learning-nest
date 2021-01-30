import { Controller, Get, Post, Req, Res, Body, Param } from '@nestjs/common';
import { CatsService, Cat } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(@Req() req, @Res() res): Cat[] {
    const cats = this.catsService.getAll();
    return res.json({ status: 'pretty cool', cats });
  }

  @Get('/:name')
  getCat(@Param('name') name): any {
    const cat = this.catsService.getByName(name);
    if (cat) return { status: 'success', cat };
    else if (name === 'Willian')
      return { status: 'success', message: 'Thats the most awesome cat' };
    return {
      status: 'fail',
      message: `There is no ${name} cat here.`,
    };
  }

  @Post()
  createCat(@Body() cat): Cat {
    const newCat = this.catsService.create(cat);
    return newCat;
  }
}

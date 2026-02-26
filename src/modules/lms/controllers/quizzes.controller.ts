import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateQuizDto, GetQuizzesDto } from '@contracts/lms/quizzes.dto';
import { LmsService } from '../lms.service';

@Controller('lms/quizzes')
export class QuizzesController {
  constructor(private readonly service: LmsService) {}

  @Get()
  findAll(@Query() query: GetQuizzesDto) {
    return this.service.send('quizzes', 'find-all', { query });
  }

  @Post()
  create(@Body() body: CreateQuizDto) {
    return this.service.send('quizzes', 'create', { body });
  }
}

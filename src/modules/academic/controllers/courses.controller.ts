import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateCourseDto, GetCoursesDto } from '@contracts/academic/courses.dto';
import { AcademicService } from '../academic.service';

@Controller('academic/courses')
export class CoursesController {
  constructor(private readonly service: AcademicService) {}

  @Get()
  findAll(@Query() query: GetCoursesDto) {
    return this.service.send('courses', 'find-all', { query });
  }

  @Post()
  create(@Body() body: CreateCourseDto) {
    return this.service.send('courses', 'create', { body });
  }
}

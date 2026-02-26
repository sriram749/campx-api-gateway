import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateAssignmentDto, GetAssignmentsDto } from '@contracts/lms/assignments.dto';
import { LmsService } from '../lms.service';

@Controller('lms/assignments')
export class AssignmentsController {
  constructor(private readonly service: LmsService) {}

  @Get()
  findAll(@Query() query: GetAssignmentsDto) {
    return this.service.send('assignments', 'find-all', { query });
  }

  @Post()
  create(@Body() body: CreateAssignmentDto) {
    return this.service.send('assignments', 'create', { body });
  }
}

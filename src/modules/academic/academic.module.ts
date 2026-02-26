import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ACADEMIC_SERVICE } from '../../constants';
import { CoursesController } from './controllers/courses.controller';
import { AcademicService } from './academic.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ACADEMIC_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.ACADEMIC_HOST || 'localhost',
          port: parseInt(process.env.ACADEMIC_PORT || '3003'),
        },
      },
    ]),
  ],
  controllers: [CoursesController],
  providers: [AcademicService],
})
export class AcademicModule {}

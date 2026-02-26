import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LMS_SERVICE } from '../../constants';
import { AssignmentsController } from './controllers/assignments.controller';
import { QuizzesController } from './controllers/quizzes.controller';
import { LmsService } from './lms.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: LMS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.LMS_HOST || 'localhost',
          port: parseInt(process.env.LMS_PORT || '3001'),
        },
      },
    ]),
  ],
  controllers: [AssignmentsController, QuizzesController],
  providers: [LmsService],
})
export class LmsModule {}

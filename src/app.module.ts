import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AcademicModule } from './modules/academic/academic.module';
import { LmsModule } from './modules/lms/lms.module';
import { PaymentxModule } from './modules/paymentx/paymentx.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LmsModule,
    PaymentxModule,
    AcademicModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PAYMENTX_SERVICE } from '../../constants';
import { FeeTypesController } from './controllers/fee-types.controller';
import { PaymentxService } from './paymentx.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PAYMENTX_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.PAYMENTX_HOST || 'localhost',
          port: parseInt(process.env.PAYMENTX_PORT || '3002'),
        },
      },
    ]),
  ],
  controllers: [FeeTypesController],
  providers: [PaymentxService],
})
export class PaymentxModule {}

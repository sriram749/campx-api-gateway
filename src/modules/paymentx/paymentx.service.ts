import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { PAYMENTX_SERVICE } from '../../constants';

@Injectable()
export class PaymentxService {
  constructor(
    @Inject(PAYMENTX_SERVICE) private readonly client: ClientProxy,
  ) {}

  send(cmd: string, action: string, data: Record<string, any> = {}) {
    return lastValueFrom(
      this.client.send({ service: 'paymentx', cmd, action }, data),
    );
  }
}

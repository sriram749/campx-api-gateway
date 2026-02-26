import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { LMS_SERVICE } from '../../constants';

@Injectable()
export class LmsService {
  constructor(
    @Inject(LMS_SERVICE) private readonly client: ClientProxy,
  ) {}

  /**
   * Send a message to the LMS microservice.
   * Pattern mirrors what the LMS controller registers with @MessagePattern.
   */
  send(cmd: string, action: string, data: Record<string, any> = {}) {
    return lastValueFrom(
      this.client.send({ service: 'lms', cmd, action }, data),
    );
  }
}

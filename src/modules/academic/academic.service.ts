import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { ACADEMIC_SERVICE } from '../../constants';

@Injectable()
export class AcademicService {
  constructor(
    @Inject(ACADEMIC_SERVICE) private readonly client: ClientProxy,
  ) {}

  send(cmd: string, action: string, data: Record<string, any> = {}) {
    return lastValueFrom(
      this.client.send({ service: 'academic', cmd, action }, data),
    );
  }
}

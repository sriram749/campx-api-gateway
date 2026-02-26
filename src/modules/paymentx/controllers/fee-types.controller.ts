import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateFeeTypeDto, GetFeeTypesDto } from '@contracts/payments/fee-types.dto';
import { PaymentxService } from '../paymentx.service';

@Controller('paymentx/fee-types')
export class FeeTypesController {
  constructor(private readonly service: PaymentxService) {}

  @Get()
  findAll(@Query() query: GetFeeTypesDto) {
    return this.service.send('fee-types', 'find-all', { query });
  }

  @Post()
  create(@Body() body: CreateFeeTypeDto) {
    return this.service.send('fee-types', 'create', { body });
  }
}

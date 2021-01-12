import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {IotController} from './iot.controller';
import {IotService} from './iot.service';
import { IotSchema } from './schemas/iot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Iot',
        schema: IotSchema,
      },
    ]),
  ],
  controllers: [IotController],
  providers: [IotService]
})
export class IotModule {}

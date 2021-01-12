import { Module } from '@nestjs/common';
import { IotModule } from './iot/iot.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/iot_manager'),
    IotModule
  ],
})
export class AppModule {}

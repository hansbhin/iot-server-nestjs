import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { IotDTO } from './iot.dto';
import { IotService } from './iot.service';

@Controller('iot')
export class IotController {
    constructor(private iotService: IotService) {}

    @Get()
    async getIots() {
        return this.iotService.getIots();
    }

    @Post()
    async postIot(@Body() iot: IotDTO) {
        return this.iotService.postIot(iot);
    }

    @Get(':id')
    async getIotById(@Param('id') id: number) {
        const result = await this.iotService.getIotById(id);
        return result;
    }

    @Delete(':id')
    async deleteIotById(@Param('id') id: number) {
        const result = await this.iotService.deleteIotById(id);
        return result;
    }

    // @Put(':id')
    // aysnc putIotById(@Param('id') id: number, @Body() query: any) {
    //     const propertyName = query.property_name;
    //     const propertyValue = query.property_value;
    //     const result = await this.iotService.putIotById(id, propertyName, propertyValue);
    //     return result;
    // }
    
}

import { HttpException, Injectable } from '@nestjs/common';
import { IOTS } from './iots.mock';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IIot } from './interfaces/iot.interface';
import { IotDTO} from './iot.dto';


@Injectable()
export class IotService {

    constructor(@InjectModel('Iot') private readonly iotModel: Model<IIot>) {}
   
    public async getIots(): Promise<IotDTO[]> {
        const iots = await this.iotModel.find().exec();
        if (!iots || !iots[0]) {
            throw new HttpException('Not Found', 404);
        }
        return iots;
    }

    public async postIot(newIot : IotDTO) {
        const iot = await new this.iotModel(newIot).save();
        return iot;
    }

    public async getIotById(id: number): Promise<IotDTO> {
        const iot = await this.iotModel.findOne({ id }).exec();
        if (!iot) {
            throw new HttpException('Not Found', 404);
        }
        return iot;
    }

    public async deleteIotById(id: number): Promise<IotDTO> {
        const iot = await this.iotModel.deleteOne({ id }).exec();
        if (iot.delteCount === 0) {
            throw new HttpException('Not Found', 404);
        }
        return iot;
    }

    public async putIotById(
        id: number, 
        propertyName: string, 
        propertyValue: string
    ): Promise<IotDTO> {
        const iot = await this.iotModel.findOneAndUpdate({ id }, {
            [propertyName]: propertyValue,
        }).exec();
        if (!iot) {
            throw new HttpException('Not Found', 404);
        }
        return iot;
    }
}

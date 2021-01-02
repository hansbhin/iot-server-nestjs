import { HttpException, Injectable } from '@nestjs/common';
import { IOTS } from './iots.mock';


@Injectable()
export class IotService {
    private iots = IOTS;

    public getIots() {
        return this.iots;
    }

    public postIot(iot) {
        this.iots.push(iot);
    }

    public getIotById(id: number) : Promise<any> {
        const IotId = Number(id);
        return new Promise ((resolve) => {
            const iot = this.iots.find(iot => iot.id === IotId);
            if (!iot) {
                throw new HttpException('Not Found', 404);
            }
            return resolve(iot);
        })

    }

    public deleteIotById(id: number) {
        const IotId = Number(id);
        return new Promise((resolve) => { 
            const index = this.iots.findIndex(iot => iot.id === IotId);
            if (index === -1) {
                throw new HttpException('Not Found', 404);
            }
            this.iots.splice(index, 1);
            return resolve(this.iots);
        })
 

    }

    // public putIotById(id: number, propertyName: string, propertyValue: string) {
    //     const IotId = Number(id);
    //     const index = this.iots.findIndex(iot => iot.id === IotId);
    //     return new Promise ((resolve) => {
    //         if (index === -1) {
    //             throw new HttpException('Not Found', 404);
    //         }
    //         this.iots[index][propertyName] = propertyValue;
    //         return resolve(this.iots);
    //     })
    // }
}

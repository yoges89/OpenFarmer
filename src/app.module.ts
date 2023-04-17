import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CowsModule } from './cows/cows.module';
import { FarmsModule } from './farms/farms.module';
import { FarmsController } from './farms/farms.controller';
import { FarmsService } from './farms/farms.service';

@Module({
  imports: [CowsModule, FarmsModule],
  controllers: [FarmsController],
  providers: [AppService, FarmsService],
})
export class AppModule { }

import { Module } from "@nestjs/common";
import { EnumerationModuleBase } from "./base/enumeration.module.base";
import { EnumerationService } from "./enumeration.service";
import { EnumerationController } from "./enumeration.controller";
import { EnumerationResolver } from "./enumeration.resolver";

@Module({
  imports: [EnumerationModuleBase],
  controllers: [EnumerationController],
  providers: [EnumerationService, EnumerationResolver],
  exports: [EnumerationService],
})
export class EnumerationModule {}

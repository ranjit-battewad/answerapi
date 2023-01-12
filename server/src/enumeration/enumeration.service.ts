import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EnumerationServiceBase } from "./base/enumeration.service.base";

@Injectable()
export class EnumerationService extends EnumerationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

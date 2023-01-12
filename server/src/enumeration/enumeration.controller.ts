import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EnumerationService } from "./enumeration.service";
import { EnumerationControllerBase } from "./base/enumeration.controller.base";

@swagger.ApiTags("enumerations")
@common.Controller("enumerations")
export class EnumerationController extends EnumerationControllerBase {
  constructor(
    protected readonly service: EnumerationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EnumerationResolverBase } from "./base/enumeration.resolver.base";
import { Enumeration } from "./base/Enumeration";
import { EnumerationService } from "./enumeration.service";

@graphql.Resolver(() => Enumeration)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EnumerationResolver extends EnumerationResolverBase {
  constructor(
    protected readonly service: EnumerationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

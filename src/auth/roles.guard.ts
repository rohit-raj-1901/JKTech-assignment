import {
    CanActivate,
    ExecutionContext,
    Injectable,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { Role } from './roles.enum';
  import { ROLES_KEY } from './roles.decorator';
  
  @Injectable()
  export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean {
      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()]
      );
  
      if (!requiredRoles) {
        return true;
      }
  
      const req = context.switchToHttp().getRequest();
      console.log(' RolesGuard req.user:', req.user);
  
      const { user } = req;
  
      if (!user) {
        console.warn(' User is undefined in RolesGuard');
        return false;
      }
  
      return requiredRoles.includes(user.role);
    }
  }
  
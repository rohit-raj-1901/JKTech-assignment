import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';


@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  
  @Get('dashboard')
  @Roles(Role.Admin)
  getAdminDashboard() {
    return { message: 'Welcome, Admin!' };
  }

  @Get('edit')
  @Roles(Role.Admin, Role.Editor)
  getEditAccess() {
    return { message: 'Welcome, Editor/Admin!' };
  }
}

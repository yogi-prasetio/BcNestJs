import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private authService: UserService) {}

  @Post('/signup')
  public async signup(@Body() fields: any) {
    return this.authService.signup(fields);
  }
  @UseGuards(AuthGuard('local'))
  @Post('/signin')
  public async signin(@Request() req) {
    return this.authService.login(req.user);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  public async getProfile(@Request() req) {
    return this.authService.getAll(req.user);
    // return req.user;
  }

    @Get()
    public async getAll() {
      return await this.authService.findAll();
    }
    @Get(':id')
    public async getOne(@Param('id') id: number) {
      return await this.authService.findOne(id);
    }
    @Delete(':id')
    public async Delete(@Param('id') id: number) {
      return await this.authService.Delete(id);
    }
}

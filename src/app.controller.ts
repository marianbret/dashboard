import { Controller, Get, Render, Res, Req, HttpException, HttpStatus, UseGuards, Post, Put, Param } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @Render('login')
  root() {}

  @Get('/dashboard')
  @Render('dashboard')
  async dashboard(@Req() req, @Res() res) {
    const name: string = req.query.name;
    const familyName: string = req.query.familyName;
    const user = await this.authService.verificateUser(name, familyName);
    if (!user || user.isConnected == false) {
      throw new HttpException("not connected", HttpStatus.FORBIDDEN);
    }
    return { name , familyName }
  }

  @Post('/logout/:name&:familyName')
  async logout(@Param('name') name:string, @Param('familyName') familyName: string, @Req() req, @Res() res) {
    const user = this.authService.findOnebyNameFamilyName(name, familyName);
    if (!user) {
      throw new HttpException('this user does not exist', HttpStatus.NOT_ACCEPTABLE);
    }
    this.authService.logOut(user as any);
    res.redirect('http://localhost:8080');
  }

  @Get('/dashboard/about.json')
  async showJson(@Res() res){
    await res.sendFile('about.json', { root: '.' });
  }
}
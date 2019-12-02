import { Controller, Get, UseGuards, Req, Res, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { User } from './auth.entity';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Get('google')
    @UseGuards(AuthGuard('google'))
    googleLogin()
    {
        // initiates the Google OAuth2 login flow
    }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    async googleLoginCallback(@Req() req, @Res() res)
    {
        const profile: string = req.user.profile;
        if (profile) {
            const name = req.user.profile.name.givenName;
            const familyName = req.user.profile.name.familyName;
            const isConnected = true;
            await this.update_id(req.user.profile.id, name, req.user.profile.emails[0].value, familyName, isConnected);
            res.redirect('http://localhost:8080/dashboard?name='+ name + '&familyName=' + familyName);
        }
        else 
            res.redirect('http://localhost:8080/login/failure');
    }

    @Post()
    async update_id(g_id: string, name: string, email: string, familyName: string, isConnected: boolean): Promise<User> {
            try {
                const isExisting = await this.authService.findOneByGoogleId(g_id)
                if (!isExisting) {
                    const user = await this.authService.create(g_id, name, email, familyName, isConnected);
                    return user;
                }
                else if (isExisting) {
                    const payloadUser = {
                        isConnected: true,
                    };
                    const user = await this.authService.findOneByGoogleId(g_id);
                    await this.authService.authRepository.update(user, payloadUser);
                    return user;
                }
            } catch(err) {
                throw Error("something went wrong");
            }
    }

}

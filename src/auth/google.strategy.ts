import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { AuthService, Provider } from "./auth.service";
import { User } from './auth.entity';


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google')
{
    
    constructor(private readonly authService: AuthService)
    {
        super({
            clientID    : '649582595830-kpj8b7hp5m0s9b5evgn3sondt94s6hg7.apps.googleusercontent.com',
            clientSecret: '6CCjUPv4RBVE41-uv60Vhg6j',
            callbackURL : 'http://localhost:8080/auth/google/callback',
            passReqToCallback: true,
            scope: ['profile', 'email']
        })
    }


    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function)
    {
        try
        {
            const user = 
            {
                profile,
            }

            done(null, user);
        }
        catch(err)
        {
            done(err, false);
        }
    }

}
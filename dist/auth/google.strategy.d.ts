import { AuthService } from "./auth.service";
declare const GoogleStrategy_base: new (...args: any[]) => any;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(request: any, accessToken: string, refreshToken: string, profile: any, done: Function): Promise<void>;
}
export {};

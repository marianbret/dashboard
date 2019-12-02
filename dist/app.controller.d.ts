import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly authService;
    constructor(authService: AuthService);
    root(): void;
    dashboard(req: any, res: any): Promise<{
        name: string;
        familyName: string;
    }>;
    logout(name: string, familyName: string, req: any, res: any): Promise<void>;
    showJson(res: any): Promise<void>;
}

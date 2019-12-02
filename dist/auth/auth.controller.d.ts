import { AuthService } from './auth.service';
import { User } from './auth.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    googleLogin(): void;
    googleLoginCallback(req: any, res: any): Promise<void>;
    update_id(g_id: string, name: string, email: string, familyName: string, isConnected: boolean): Promise<User>;
}

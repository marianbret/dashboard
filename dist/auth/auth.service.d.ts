import { Repository } from 'typeorm';
import { User } from './auth.entity';
export declare enum Provider {
    GOOGLE = "google"
}
export declare class AuthService {
    readonly authRepository: Repository<User>;
    constructor(authRepository: Repository<User>);
    create(g_id: string, name: string, email: string, FamilyName: string, isConnected: boolean): Promise<User>;
    findOneByGoogleId(google_id: string): Promise<User>;
    findOneByName(name: string): Promise<User>;
    findOneByMail(email: string): Promise<User>;
    verificateUser(name: string, familyName: string): Promise<User>;
    findOnebyNameFamilyName(name: string, familyName: string): Promise<User>;
    logOut(user: User): Promise<void>;
}

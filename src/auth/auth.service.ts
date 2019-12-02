import { Injectable, Req, Res } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './auth.entity';
import { InjectRepository } from '@nestjs/typeorm';

export enum Provider
{
    GOOGLE = 'google'
}

@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(User)
        readonly authRepository: Repository<User>) {
    };

    async create(g_id: string, name: string, email: string, FamilyName: string, isConnected: boolean): Promise<User> {
        const newUser: User = {
            google_id: String(g_id),
            name: String(name),
            email: String(email),
            familyName: String(FamilyName),
            isConnected: isConnected
        };
        return await this.authRepository.save(newUser);
    }

    async findOneByGoogleId(google_id: string): Promise<User> {
        return await this.authRepository.findOne(null, { where: { google_id } });
    }

    async findOneByName(name: string): Promise<User> {
        return await this.authRepository.findOne(null, { where: {name} });
    }

    async findOneByMail(email: string): Promise<User> {
        return await this.authRepository.findOne(null, { where: {email} });
    }

    async verificateUser(name: string, familyName: string): Promise<User> {
        return await this.authRepository
        .createQueryBuilder('user')
        .where('user.name = :name',{ name })
        .andWhere('user.familyName = :familyName', { familyName })
        .select(['user.isConnected'])
        .getOne();
    }

    async findOnebyNameFamilyName(name: string, familyName: string) {
        return await this.authRepository.findOne(null, { where: {name, familyName} });
    }

    async logOut(user: User) {
        const payloadUser = {
            isConnected: false
        };
        await this.authRepository.update(user, payloadUser);
    }

}
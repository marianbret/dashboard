"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const auth_entity_1 = require("./auth.entity");
const typeorm_2 = require("@nestjs/typeorm");
var Provider;
(function (Provider) {
    Provider["GOOGLE"] = "google";
})(Provider = exports.Provider || (exports.Provider = {}));
let AuthService = class AuthService {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    ;
    async create(g_id, name, email, FamilyName, isConnected) {
        const newUser = {
            google_id: String(g_id),
            name: String(name),
            email: String(email),
            familyName: String(FamilyName),
            isConnected: isConnected
        };
        return await this.authRepository.save(newUser);
    }
    async findOneByGoogleId(google_id) {
        return await this.authRepository.findOne(null, { where: { google_id } });
    }
    async findOneByName(name) {
        return await this.authRepository.findOne(null, { where: { name } });
    }
    async findOneByMail(email) {
        return await this.authRepository.findOne(null, { where: { email } });
    }
    async verificateUser(name, familyName) {
        return await this.authRepository
            .createQueryBuilder('user')
            .where('user.name = :name', { name })
            .andWhere('user.familyName = :familyName', { familyName })
            .select(['user.isConnected'])
            .getOne();
    }
    async findOnebyNameFamilyName(name, familyName) {
        return await this.authRepository.findOne(null, { where: { name, familyName } });
    }
    async logOut(user) {
        const payloadUser = {
            isConnected: false
        };
        await this.authRepository.update(user, payloadUser);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(auth_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
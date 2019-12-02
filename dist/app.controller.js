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
const auth_service_1 = require("./auth/auth.service");
let AppController = class AppController {
    constructor(authService) {
        this.authService = authService;
    }
    root() { }
    async dashboard(req, res) {
        const name = req.query.name;
        const familyName = req.query.familyName;
        const user = await this.authService.verificateUser(name, familyName);
        if (!user || user.isConnected == false) {
            throw new common_1.HttpException("not connected", common_1.HttpStatus.FORBIDDEN);
        }
        return { name, familyName };
    }
    async logout(name, familyName, req, res) {
        const user = this.authService.findOnebyNameFamilyName(name, familyName);
        if (!user) {
            throw new common_1.HttpException('this user does not exist', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        this.authService.logOut(user);
        res.redirect('http://localhost:8080');
    }
    async showJson(res) {
        await res.sendFile('about.json', { root: '.' });
    }
};
__decorate([
    common_1.Get(),
    common_1.Render('login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
__decorate([
    common_1.Get('/dashboard'),
    common_1.Render('dashboard'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "dashboard", null);
__decorate([
    common_1.Post('/logout/:name&:familyName'),
    __param(0, common_1.Param('name')), __param(1, common_1.Param('familyName')), __param(2, common_1.Req()), __param(3, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "logout", null);
__decorate([
    common_1.Get('/dashboard/about.json'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "showJson", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map
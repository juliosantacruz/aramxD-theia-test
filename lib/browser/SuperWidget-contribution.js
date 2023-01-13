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
exports.SuperWidgetMenuContribution = exports.SuperWidgetCommandContribution = exports.SuperWidgetCommand = void 0;
const inversify_1 = require("@theia/core/shared/inversify");
const common_1 = require("@theia/core/lib/common");
const browser_1 = require("@theia/core/lib/browser");
exports.SuperWidgetCommand = {
    id: 'SuperWidget.command',
    label: 'Say Hello'
};
let SuperWidgetCommandContribution = class SuperWidgetCommandContribution {
    constructor(messageService) {
        this.messageService = messageService;
    }
    registerCommands(registry) {
        registry.registerCommand(exports.SuperWidgetCommand, {
            execute: () => this.messageService.info('Hello World! que esto sea una prueba')
        });
    }
};
SuperWidgetCommandContribution = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(common_1.MessageService)),
    __metadata("design:paramtypes", [common_1.MessageService])
], SuperWidgetCommandContribution);
exports.SuperWidgetCommandContribution = SuperWidgetCommandContribution;
let SuperWidgetMenuContribution = class SuperWidgetMenuContribution {
    registerMenus(menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.SuperWidgetCommand.id,
            label: exports.SuperWidgetCommand.label
        });
    }
};
SuperWidgetMenuContribution = __decorate([
    (0, inversify_1.injectable)()
], SuperWidgetMenuContribution);
exports.SuperWidgetMenuContribution = SuperWidgetMenuContribution;
//# sourceMappingURL=SuperWidget-contribution.js.map
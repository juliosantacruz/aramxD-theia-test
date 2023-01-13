import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
export declare const SuperWidgetCommand: Command;
export declare class SuperWidgetCommandContribution implements CommandContribution {
    private readonly messageService;
    constructor(messageService: MessageService);
    registerCommands(registry: CommandRegistry): void;
}
export declare class SuperWidgetMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=SuperWidget-contribution.d.ts.map
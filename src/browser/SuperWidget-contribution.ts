import { injectable, inject } from '@theia/core/shared/inversify';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { CommonMenus } from '@theia/core/lib/browser';

export const SuperWidgetCommand: Command = {
    id: 'SuperWidget.command',
    label: 'Say Hello'
};

@injectable()
export class SuperWidgetCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(SuperWidgetCommand, {
            execute: () => this.messageService.info('Hello World! que esto sea una prueba')
        });
    }
}

@injectable()
export class SuperWidgetMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: SuperWidgetCommand.id,
            label: SuperWidgetCommand.label
        });
    }
}

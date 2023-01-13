"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
const SuperWidget_contribution_1 = require("./SuperWidget-contribution");
const common_1 = require("@theia/core/lib/common");
const inversify_1 = require("@theia/core/shared/inversify");
exports.default = new inversify_1.ContainerModule(bind => {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(SuperWidget_contribution_1.SuperWidgetCommandContribution);
    bind(common_1.MenuContribution).to(SuperWidget_contribution_1.SuperWidgetMenuContribution);
});
//# sourceMappingURL=SuperWidget-frontend-module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const handlebars = require("handlebars");
const path = require("path");
const get = require('lodash.get');
class HandlebarsAdapter {
    constructor() {
        this.precompiledTemplates = {};
    }
    compile(mail, callback, mailerOptions) {
        const templateExt = path.extname(mail.data.template) || '.hbs';
        const templateName = path.basename(mail.data.template, path.extname(mail.data.template));
        const templateDir = path.dirname(mail.data.template) !== '.' ? path.dirname(mail.data.template) : get(mailerOptions, 'template.dir', '');
        const templatePath = path.join(templateDir, templateName + templateExt);
        if (!this.precompiledTemplates[templateName]) {
            try {
                const template = fs.readFileSync(templatePath, 'UTF-8');
                this.precompiledTemplates[templateName] = handlebars.compile(template, get(mailerOptions, 'template.options', {}));
            }
            catch (err) {
                return callback(err);
            }
        }
        mail.data.html = this.precompiledTemplates[templateName](mail.data.context);
        return callback();
    }
}
exports.HandlebarsAdapter = HandlebarsAdapter;
//# sourceMappingURL=handlebars.adapter.js.map
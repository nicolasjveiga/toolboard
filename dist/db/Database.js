"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.items = [];
    }
    getAll() {
        return this.items;
    }
    add(itemOrItems) {
        if (Array.isArray(itemOrItems)) {
            this.items.push(...itemOrItems);
        }
        else {
            this.items.push(itemOrItems);
        }
    }
    removeAt(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
        else {
            console.log("Indíce inválido para remoção.");
        }
    }
}
exports.default = Database;

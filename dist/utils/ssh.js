"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execSSHBulk = exports.execSSH = void 0;
const node_ssh_1 = require("node-ssh");
require("dotenv/config");
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const callSSH = (command, node) => __awaiter(void 0, void 0, void 0, function* () {
    const ssh = new node_ssh_1.NodeSSH();
    yield ssh.connect({
        host: node,
        username,
        password
    });
    const response = yield ssh.execCommand(command);
    console.log(response.stdout);
    ssh.dispose();
});
function connect(host, ssh) {
    return __awaiter(this, void 0, void 0, function* () {
        yield ssh.connect({
            host,
            username,
            password
        });
    });
}
const callSSHBulk = (commands, node) => __awaiter(void 0, void 0, void 0, function* () {
    const ssh = new node_ssh_1.NodeSSH();
    var current = null;
    commands.forEach((command, i) => __awaiter(void 0, void 0, void 0, function* () {
        if (!current) {
            connect(node[i], ssh);
        }
        if (current !== node[i]) {
            ssh.dispose();
            connect(node[i], ssh);
        }
        const response = yield ssh.execCommand(command);
        console.log(response.stdout);
    }));
    if (ssh.isConnected())
        ssh.dispose();
});
const execSSH = (command, node) => __awaiter(void 0, void 0, void 0, function* () {
    yield callSSH(command, node);
});
exports.execSSH = execSSH;
const execSSHBulk = (commands, node) => __awaiter(void 0, void 0, void 0, function* () {
    yield callSSHBulk(commands, node);
});
exports.execSSHBulk = execSSHBulk;

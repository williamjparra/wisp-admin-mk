"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callSSH = void 0;
const node_ssh_1 = require("node-ssh");
const callSSH = () => {
    const ssh = new node_ssh_1.NodeSSH();
    ssh.connect({
        host: '10.30.30.1',
        username: 'william',
        password: 'William27658945'
    }).then((_a) => {
        var rest = __rest(_a, []);
        console.log("initial data", rest);
        ssh.execCommand('log info message=test-1').then((_a) => {
            var rest2 = __rest(_a, []);
            return console.log(rest2);
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
};
exports.callSSH = callSSH;

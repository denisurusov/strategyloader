"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loader = require("./loader/loader");
var middleware = require("./loader/middleware");
middleware.connect();
loader.returnStrategies();

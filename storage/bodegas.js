"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodegas = void 0;
var class_transformer_1 = require("class-transformer");
var bodegas = exports.bodegas = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _nombre_decorators;
    var _nombre_initializers = [];
    var _id_responsable_decorators;
    var _id_responsable_initializers = [];
    var _estado_decorators;
    var _estado_initializers = [];
    var _created_by_decorators;
    var _created_by_initializers = [];
    var _update_by_decorators;
    var _update_by_initializers = [];
    return _a = /** @class */ (function () {
            function bodegas(id, nombre, id_responsable, estado, created_by, update_by, created_at, update_at, delete_at) {
                this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
                this.nombre = __runInitializers(this, _nombre_initializers, void 0);
                this.id_responsable = __runInitializers(this, _id_responsable_initializers, void 0);
                this.estado = __runInitializers(this, _estado_initializers, void 0);
                this.created_by = __runInitializers(this, _created_by_initializers, void 0);
                this.update_by = __runInitializers(this, _update_by_initializers, void 0);
                this.id = id;
                this.nombre = nombre;
                this.id_responsable = id_responsable;
                this.estado = estado;
                this.created_by = created_by;
                this.update_by = update_by;
            }
            return bodegas;
        }()),
        (function () {
            _id_decorators = [(0, class_transformer_1.Expose)({ name: 'id' }), (0, class_transformer_1.Transform)(function (_a) {
                    var value = _a.value;
                    if (Math.floor(value) && typeof value === 'number')
                        return Math.floor(value);
                    else
                        throw { status: 400, message: "el dato no cumple los parametros" };
                }, { toClassOnly: true })];
            _nombre_decorators = [(0, class_transformer_1.Expose)({ name: 'nombre' }), (0, class_transformer_1.Transform)(function (_a) {
                    var value = _a.value;
                    if (/^[a-z A-Z].$/.test(value))
                        return value;
                    else
                        throw { status: 400, message: "el dato no cumple los parametros" };
                }, { toClassOnly: true })];
            _id_responsable_decorators = [(0, class_transformer_1.Expose)({ name: 'id_responsable' }), (0, class_transformer_1.Transform)(function (_a) {
                    var value = _a.value;
                    if (Math.floor(value) && typeof value === 'number')
                        return Math.floor(value);
                    else
                        throw { status: 400, message: "el dato no cumple los parametros" };
                }, { toClassOnly: true })];
            _estado_decorators = [(0, class_transformer_1.Expose)({ name: 'estado' }), (0, class_transformer_1.Transform)(function (_a) {
                    var value = _a.value;
                    if (Math.floor(value) && typeof value === 'number')
                        return Math.floor(value);
                    else
                        throw { status: 400, message: "el dato no cumple los parametros" };
                }, { toClassOnly: true })];
            _created_by_decorators = [(0, class_transformer_1.Expose)({ name: 'created_by' }), (0, class_transformer_1.Transform)(function (_a) {
                    var value = _a.value;
                    if (Math.floor(value) && typeof value === 'number')
                        return Math.floor(value);
                    else
                        throw { status: 400, message: "el dato no cumple los parametros" };
                }, { toClassOnly: true })];
            _update_by_decorators = [(0, class_transformer_1.Expose)({ name: 'update_by' }), (0, class_transformer_1.Transform)(function (_a) {
                    var value = _a.value;
                    if (Math.floor(value) && typeof value === 'number')
                        return Math.floor(value);
                    else
                        throw { status: 400, message: "el dato no cumple los parametros" };
                }, { toClassOnly: true })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: function (obj) { return "nombre" in obj; }, get: function (obj) { return obj.nombre; }, set: function (obj, value) { obj.nombre = value; } } }, _nombre_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _id_responsable_decorators, { kind: "field", name: "id_responsable", static: false, private: false, access: { has: function (obj) { return "id_responsable" in obj; }, get: function (obj) { return obj.id_responsable; }, set: function (obj, value) { obj.id_responsable = value; } } }, _id_responsable_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _estado_decorators, { kind: "field", name: "estado", static: false, private: false, access: { has: function (obj) { return "estado" in obj; }, get: function (obj) { return obj.estado; }, set: function (obj, value) { obj.estado = value; } } }, _estado_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _created_by_decorators, { kind: "field", name: "created_by", static: false, private: false, access: { has: function (obj) { return "created_by" in obj; }, get: function (obj) { return obj.created_by; }, set: function (obj, value) { obj.created_by = value; } } }, _created_by_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _update_by_decorators, { kind: "field", name: "update_by", static: false, private: false, access: { has: function (obj) { return "update_by" in obj; }, get: function (obj) { return obj.update_by; }, set: function (obj, value) { obj.update_by = value; } } }, _update_by_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();

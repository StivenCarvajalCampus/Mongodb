var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";
export class Automovil {
    constructor(data) {
        Object.assign(this, data);
        this.ID_Automovil = 0;
        this.Marca = "";
        this.Modelo = "";
        this.Anio = 0;
        this.Tipo = "";
        this.Capacidad = 0;
        this.Precio_Diario = 0;
    }
}
__decorate([
    Expose({ name: 'automovil' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro automovil` }; } }),
    __metadata("design:type", Number)
], Automovil.prototype, "ID_Automovil", void 0);
__decorate([
    Expose({ name: 'marca' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro marca es obligatorio` }; } }),
    __metadata("design:type", String)
], Automovil.prototype, "Marca", void 0);
__decorate([
    Expose({ name: 'modelo' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro modelo es obligatorio` }; } }),
    __metadata("design:type", String)
], Automovil.prototype, "Modelo", void 0);
__decorate([
    Expose({ name: 'año' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro año es obligatorio` }; } }),
    __metadata("design:type", Number)
], Automovil.prototype, "Anio", void 0);
__decorate([
    Expose({ name: 'tipo' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro tipo es obligatorio` }; } }),
    __metadata("design:type", String)
], Automovil.prototype, "Tipo", void 0);
__decorate([
    Expose({ name: 'capacidad' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro capacidad es obligatorio` }; } }),
    __metadata("design:type", Number)
], Automovil.prototype, "Capacidad", void 0);
__decorate([
    Expose({ name: 'precio' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro precio es obligatorio` }; } }),
    __metadata("design:type", Number)
], Automovil.prototype, "Precio_Diario", void 0);
//Falta culminar el Dto con todos los campos 

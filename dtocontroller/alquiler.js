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
import { IsDefined, IsString, Matches } from "class-validator";
export class Alquiler {
    constructor(data) {
        Object.assign(this, data);
        this.ID_Alquiler = 0;
        this.ID_Cliente_id = 0;
        this.ID_Automovil_id = 0;
        this.Fecha_Inicio = "1999-05-11";
        this.Fecha_Fin = "1999-02-12";
        this.Costo_Total = 0;
        this.Estado = "";
    }
}
__decorate([
    Expose({ name: 'alquiler' }),
    IsDefined({ message: () => { throw { status: 422, message: `el parametro alquiler es obligatorio` }; } }),
    __metadata("design:type", Number)
], Alquiler.prototype, "ID_Alquiler", void 0);
__decorate([
    Expose({ name: 'cliente' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro cliente es obligatorio` }; } }),
    __metadata("design:type", Number)
], Alquiler.prototype, "ID_Cliente_id", void 0);
__decorate([
    Expose({ name: 'automovil' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro automovil es obligatorio` }; } }),
    __metadata("design:type", Number)
], Alquiler.prototype, "ID_Automovil_id", void 0);
__decorate([
    Expose({ name: 'initDate' }),
    IsString({ message: 'El parametro initDate debe estar en formato String' }),
    Matches(/^\d{4}-\d{2}-\d{2$}/, { message: 'Error' }),
    __metadata("design:type", String)
], Alquiler.prototype, "Fecha_Inicio", void 0);
__decorate([
    Expose({ name: 'endDate' }),
    IsString({ message: 'El parametro endDate debe estar formato string' }),
    Matches(/^\d{4}-\d{2}-\d{2$}/, { message: 'Error' }),
    __metadata("design:type", String)
], Alquiler.prototype, "Fecha_Fin", void 0);
__decorate([
    Expose({ name: 'totalcosto' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro totalcosto es obligatorio` }; } }),
    __metadata("design:type", Number)
], Alquiler.prototype, "Costo_Total", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro estado es obligatorio` }; } }),
    __metadata("design:type", String)
], Alquiler.prototype, "Estado", void 0);

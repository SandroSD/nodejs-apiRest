class Persona {

    constructor(id, nombre, apellido, mail, clave, fecha_nacimiento, direccion, role, activo = true) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.clave = clave;
        this.fecha_nacimiento = fecha_nacimiento;
        this.direccion = direccion;
        this.role = role;
        this.activo = activo;
    }

}

module.exports = Persona;
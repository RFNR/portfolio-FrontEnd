
interface DatosPersonales{
    edad: String,
    telefono: String,
    email: String,
    ubicacion: String,
    cargo: String
}
interface Educacion{
    rama: String,
    centroEducativo: String,
    periodo: String,
    descripcion: String
}
interface Experiencia{
    rama: String,
    empresa: String,
    periodo: String,
    descripcion: String
}
interface Skills{

}
export interface Usuario{
    nombre: String,
    titulo: String,
    descripcion: String,
    datosPersonales: DatosPersonales,
    intereses: String[],
    educacion: Educacion,
    experiencia: Experiencia,
    skills: String[],
    

}
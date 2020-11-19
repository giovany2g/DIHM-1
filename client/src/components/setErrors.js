export const setErrors = (
  elaboracion,
  inicio,
  fin,
  estudiante,
  institucion,
  horas,
  estado
) => {
  let errors = {};
  errors.elaboracion = elaboracion ? "" : "fecha de elaboracion requerido";
  errors.inicio = inicio ? "" : "fecha de inicio requerido";
  errors.fin = fin ? "" : "fecha de finalisacion requerido";
  errors.estudiante = estudiante ? "" : "estudiante requerido";
  errors.institucion = institucion ? "" : "institucion requerido";
  errors.horas = horas ? "" : "estado requerido";
  errors.estado = estado ? "" : "horas requerido";

  return errors;
};

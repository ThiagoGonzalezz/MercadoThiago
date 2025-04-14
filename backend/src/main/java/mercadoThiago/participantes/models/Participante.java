package mercadoThiago.participantes.models;

import jdk.internal.javac.ParticipatesInPreview;
import mercadoThiago.marketplace.models.Publicacion;

import java.time.LocalDate;
import java.util.List;

public class Participante {
    private String nombre;
    private Usuario usuario;
    private LocalDate fechaNacimiento;
    private LocalDate fechaRegistro;
    private String dni;
    private String mail;
    private String telefono;
    private Domicilio domicilioPrincipal;
    private List<Domicilio> domicilios;
    private Double calificacionPromedio;
    private Integer cantidadReseniasRecibidas;
    private List<Publicacion> favoritos;
    private Boolean verificado;
}

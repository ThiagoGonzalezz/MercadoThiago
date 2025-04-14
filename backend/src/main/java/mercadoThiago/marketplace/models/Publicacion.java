package mercadoThiago.marketplace.models;

import mercadoThiago.participantes.models.Localidad;
import mercadoThiago.participantes.models.Participante;
import mercadoThiago.participantes.models.Pregunta;
import mercadoThiago.participantes.models.Resenia;

import java.time.LocalDateTime;
import java.util.List;

public class Publicacion {
    private String titulo;
    private String descripcion;
    private List<String> fotos;
    private String fotoPrincipal;
    private Participante vendedor;
    private LocalDateTime fechaYHoraPublicacion;
    private Categoria categoria;
    private List<CaracteristicaEspecifica> caracteristicas;
    private Double precioEnPesos;
    private Double calificacionPromedio;
    private Integer cantidadReseniasRecibidas;
    private Integer cantidadVentas;
    private List<Resenia> resenias;
    private List<Pregunta> preguntas;
    private Boolean envioGratis;
    private Boolean llegaManiana;
    private Integer descuento;
    private List<PrecioEnCuotas> cuotas;


}

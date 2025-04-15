package com.mercadoThiago.marketplace.models;

import com.mercadoThiago.participantes.models.Localidad;
import com.mercadoThiago.participantes.models.Participante;
import com.mercadoThiago.participantes.models.Pregunta;
import com.mercadoThiago.participantes.models.Resenia;

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

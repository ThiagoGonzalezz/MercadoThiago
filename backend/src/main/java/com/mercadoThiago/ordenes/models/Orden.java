package com.mercadoThiago.ordenes.models;

import com.mercadoThiago.marketplace.models.Cupon;
import com.mercadoThiago.marketplace.models.PrecioEnCuotas;
import com.mercadoThiago.marketplace.models.Publicacion;
import com.mercadoThiago.participantes.models.Participante;

import java.time.LocalDateTime;
import java.util.List;

public class Orden {
    private Publicacion publicacion;
    private LocalDateTime fechaYHora;
    private Double precioEnPesos;
    private List<CambioDeEstado> historialEstados;
    private Participante comprador;
    private Cupon cuponUsado;
    private PrecioEnCuotas cuotas;
}

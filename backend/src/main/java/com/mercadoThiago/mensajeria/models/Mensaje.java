package com.mercadoThiago.mensajeria.models;

import com.mercadoThiago.participantes.models.Participante;

import java.time.LocalDateTime;

public class Mensaje {
    private LocalDateTime fechaHoraEnviado;
    private String contenido;
    private EstadoMensaje estado;
    private Participante emisor;
    private LocalDateTime fechaHoraEntregado;
    private LocalDateTime fechaHoraLeido;
}

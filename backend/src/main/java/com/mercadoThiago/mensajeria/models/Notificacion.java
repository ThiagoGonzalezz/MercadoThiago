package com.mercadoThiago.mensajeria.models;

import com.sun.jdi.connect.Connector;
import com.mercadoThiago.participantes.models.Participante;

import java.time.LocalDateTime;

public class Notificacion {
    private LocalDateTime fechaYHora;
    private Participante participante;
    private Boolean fueLeida;
    private String cuerpo;
    private String pathRecurso;
}

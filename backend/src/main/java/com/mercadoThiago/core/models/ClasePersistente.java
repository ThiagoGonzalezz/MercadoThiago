package com.mercadoThiago.core.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@MappedSuperclass
@Getter @Setter
public class ClasePersistente {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;

    @Column(name = "activo")
    private Boolean activo = Boolean.TRUE;

    public boolean isActivo() {
        return activo;
    }
}


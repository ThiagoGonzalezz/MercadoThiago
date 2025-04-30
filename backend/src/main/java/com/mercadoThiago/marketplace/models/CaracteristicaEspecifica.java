package com.mercadoThiago.marketplace.models;

import com.mercadoThiago.core.models.ClasePersistente;

import javax.persistence.*;

@Entity
@Table(name = "caracteristica_especifica")
public class CaracteristicaEspecifica extends ClasePersistente {
    @ManyToOne
    @JoinColumn(name = "atributo_categoria_id", nullable = false)
    private AtributoCategoria atributoCategoria;
    @ManyToOne
    @JoinColumn(name = "atributo_concreto_id", nullable = false)
    private ValorPosible atributoConcreto;
}

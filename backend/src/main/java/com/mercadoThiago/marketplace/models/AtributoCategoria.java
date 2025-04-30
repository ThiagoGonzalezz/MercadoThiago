package com.mercadoThiago.marketplace.models;

import com.mercadoThiago.core.models.ClasePersistente;
import org.springframework.beans.propertyeditors.ClassEditor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "atributo_categoria")
public class AtributoCategoria extends ClasePersistente {
    @Column(name = "nombre", length = 100)
    private String nombre;
    @OneToMany
    @JoinColumn(name = "atributo_categoria_id", referencedColumnName = "id")
    private List<ValorPosible> valoresPosibles;
    @Column(name = "unidad", length = 50)
    private String unidad;
    @Column(name = "es_rangueable")
    private Boolean esRangueable;
    @Column(name = "radio_min")
    private Integer radioMin;
    @Column(name = "radio_max")
    private Integer radioMax;
}

package com.mercadoThiago.marketplace.models;

import com.mercadoThiago.core.models.ClasePersistente;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="categoria")
public class Categoria extends ClasePersistente {
    @Column(name = "nombre", length = 100)
    private String nombre;
    @ManyToOne
    @JoinColumn(name = "categoria_padre_id", referencedColumnName = "id")
    private Categoria categoriaPadre;
    @OneToMany
    @JoinColumn(name = "categoria_id", referencedColumnName = "id")
    private List<AtributoCategoria> atributos;
    @Column(name = "foto_indice")
    private String fotoIndice;
    @Column(name = "foto_recomendacion")
    private String fotoRecomendacion;
    @Column(name = "foto_portada")
    private String fotoPortada;
    @OneToMany
    @JoinColumn(name = "categoria_mas_vendidos_id", referencedColumnName = "id")
    private List<Publicacion> publicacionesMasVendidas;
}

package com.mercadoThiago.marketplace.models;

import java.util.List;

public class Categoria {
    private String nombre;
    private Categoria categoriaPadre;
    private List<AtributoCategoria> atributos;
    private String fotoIndice;
    private String fotoRecomendacion;
    private String fotoPortada;
    private List<Publicacion> publicacionesMasVendidas;
}

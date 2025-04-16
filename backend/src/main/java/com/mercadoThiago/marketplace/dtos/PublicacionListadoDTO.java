package com.mercadoThiago.marketplace.dtos;


public record PublicacionListadoDTO(
        long id,
        String titulo,
        String imagenUrl,
        double precio,
        String cuotas,
        boolean envioGratis,
        boolean llegaManiana
) {}

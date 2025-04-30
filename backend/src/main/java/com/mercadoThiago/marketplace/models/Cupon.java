package com.mercadoThiago.marketplace.models;

import com.mercadoThiago.core.models.ClasePersistente;
import com.mercadoThiago.participantes.models.Localidad;
import com.mercadoThiago.participantes.models.Participante;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "cupon")
public class Cupon extends ClasePersistente {
    @ManyToMany
    @JoinTable(
            name = "cupon_categoria",
            joinColumns = @JoinColumn(name = "cupon_id",
                    referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "categoria_id", referencedColumnName = "id")
    )
    private List<Categoria> categoriasAsociadas;
    @ManyToOne
    @JoinColumn(name = "tienda_asociada_id", referencedColumnName = "id")
    private Participante tiendaAsociada;
    @Column(name = "compra_minima")
    private Integer CompraMinima;
    @Column(name = "tope")
    private Integer tope;
    @Column(name = "porcentaje_descuento")
    private Integer porcentajeDescuento;
    @Column(name="fecha-vencimiento")
    private LocalDate fechaVencimiento;
    @Column(name = "usos")
    private Integer usos;
}

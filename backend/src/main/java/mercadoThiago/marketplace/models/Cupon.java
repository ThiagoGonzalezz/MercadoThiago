package mercadoThiago.marketplace.models;

import mercadoThiago.participantes.models.Localidad;
import mercadoThiago.participantes.models.Participante;

import java.time.LocalDate;
import java.util.List;

public class Cupon {
    private List<Categoria> categoriasAsociadas;
    private Participante tiendaAsociada;
    private Integer CompraMinima;
    private Integer tope;
    private Integer porcentajeDescuento;
    private LocalDate fechaVencimiento;
    private Integer usos;
}

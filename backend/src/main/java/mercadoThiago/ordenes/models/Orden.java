package mercadoThiago.ordenes.models;

import mercadoThiago.marketplace.models.Cupon;
import mercadoThiago.marketplace.models.PrecioEnCuotas;
import mercadoThiago.marketplace.models.Publicacion;
import mercadoThiago.participantes.models.Participante;

import java.time.LocalDateTime;
import java.util.List;

public class Orden {
    private Publicacion publicacion;
    private LocalDateTime fechaYHora;
    private Double precioEnPesos;
    private List<CambioDeEstado> historialEstados;
    private Participante comprador;
    private Cupon cuponUsado;
    private PrecioEnCuotas cuotas;
}

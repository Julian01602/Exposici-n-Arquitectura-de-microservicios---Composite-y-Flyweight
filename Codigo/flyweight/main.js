
import java.util.HashMap;
import java.util.Map;

// Clase Flyweight: representa un tipo de árbol.
// Guarda información que pueden compartir varios árboles.
class TipoArbol {

    // Atributo compartido: tipo o textura del árbol.
    private String textura;

    // Constructor que recibe la textura.
    public TipoArbol(String textura) {
        this.textura = textura;
    }

    // Recibe las coordenadas de cada árbol.
    // La posición cambia y no se guarda en el objeto compartido.
    public void dibujar(int x, int y) {
        System.out.println(
            "Arbol " + textura + " en (" + x + ", " + y + ")"
        );
    }
}

// Fábrica encargada de crear y reutilizar objetos.
class FabricaArboles {

    // HashMap almacena los objetos según su tipo.
    // La clave es el nombre de la textura.
    private Map<String, TipoArbol> tipos = new HashMap<>();

    // Método que devuelve un objeto de tipo TipoArbol.
    public TipoArbol obtener(String textura) {

        // Comprueba si el tipo de árbol todavía no existe.
        if (!tipos.containsKey(textura)) {

            // Si no existe, crea el objeto y lo guarda.
            tipos.put(textura, new TipoArbol(textura));
        }

        // Devuelve el objeto existente o recién creado.
        return tipos.get(textura);
    }
}

// Clase principal del programa.
public class Main {

    // Punto de inicio de la ejecución.
    public static void main(String[] args) {

        // Creamos la fábrica de árboles.
        FabricaArboles fabrica = new FabricaArboles();

        // Solicitamos dos árboles del mismo tipo.
        // La fábrica devuelve el mismo objeto compartido.
        TipoArbol arbol1 = fabrica.obtener("Roble");
        TipoArbol arbol2 = fabrica.obtener("Roble");

        // Dibujamos los árboles en posiciones distintas.
        arbol1.dibujar(10, 20);
        arbol2.dibujar(50, 80);

        // Comprobamos si las variables apuntan al mismo objeto.
        // Devuelve true si ambas referencias son al mismo objeto.
        System.out.println(arbol1 == arbol2);
    }
}

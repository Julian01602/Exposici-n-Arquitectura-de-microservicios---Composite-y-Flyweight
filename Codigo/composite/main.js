
import java.util.ArrayList;
import java.util.List;

// Interfaz que define el comportamiento común
// que tendrán los archivos y las carpetas.
interface Componente {
    void mostrar();
}

// Clase Archivo: representa un elemento individual.
// Es una hoja porque no puede contener otros elementos.
class Archivo implements Componente {

    // Atributo privado que almacena el nombre.
    private String nombre;

    // Constructor que recibe el nombre del archivo.
    public Archivo(String nombre) {
        this.nombre = nombre;
    }

    // Implementación del método de la interfaz.
    // Muestra el nombre del archivo en pantalla.
    @Override
    public void mostrar() {
        System.out.println("Archivo: " + nombre);
    }
}

// Clase Carpeta: representa un grupo de componentes.
// Puede contener archivos y otras carpetas.
class Carpeta implements Componente {

    // Nombre de la carpeta.
    private String nombre;

    // Lista que almacena componentes de cualquier tipo
    // que implemente la interfaz Componente.
    private List<Componente> elementos = new ArrayList <> ();

    // Constructor que recibe el nombre de la carpeta.
    public Carpeta(String nombre) {
        this.nombre = nombre;
    }

    // Método para agregar archivos o carpetas.
    public void agregar(Componente elemento) {
        elementos.add(elemento);
    }

    // Muestra la carpeta y todos sus elementos.
    @Override
    public void mostrar() {

        // Imprime el nombre de la carpeta.
        System.out.println("Carpeta: " + nombre);

        // Recorre la lista de elementos.
        // Cada elemento ejecuta su propio método mostrar().
        for (Componente elemento : elementos) {
            elemento.mostrar();
        }
    }
}

// Clase principal del programa.
public class Main {

    // Método principal: punto de inicio de la ejecución.
    public static void main(String[] args) {

        // Creamos dos objetos de tipo Archivo.
        Archivo archivo1 = new Archivo("tarea.pdf");
        Archivo archivo2 = new Archivo("foto.png");

        // Creamos un objeto de tipo Carpeta.
        Carpeta documentos = new Carpeta("Documentos");

        // Agregamos los dos archivos a la carpeta.
        documentos.agregar(archivo1);
        documentos.agregar(archivo2);

        // Ejecutamos el método para mostrar el contenido.
        documentos.mostrar();
    }
}

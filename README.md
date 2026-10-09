# Exposición: Arquitectura de Microservicios - Patrones Composite y Flyweight

Repositorio oficial para la exposición técnica sobre la integración de **Arquitectura de Microservicios** junto con los patrones de diseño estructurales **Composite** y **Flyweight**. 

* **Fecha de Exposición:** 16 de Octubre de 2026

---
## 👤 Integrantes
- Julian Gonzalez 
- Martin Cruz
- Michael Zabala



---

## 📋 Tabla de Contenidos
1. [Definición, qué es y para qué sirve](#1-definición-qué-es-y-para-qué-sirve)
2. [Características, cómo funciona y cómo se organiza](#2-características-cómo-funciona-y-cómo-se-organiza)
3. [Representación de componentes y conexiones](#3-representación-de-componentes-y-conexiones)
4. [Ventajas y desventajas](#4-ventajas-y-desventajas)
5. [Tecnologías relacionadas](#5-tecnologías-relacionadas)
6. [Demostración](#6-demostración)
7. [Conclusión](#7-conclusión)

---

## 1. Definición, qué es y para qué sirve
* **Arquitectura de Microservicios:** Estilo arquitectónico que estructura una aplicación como un conjunto de servicios independientes, débilmente acoplados y desplegables de forma autónoma, comunicándose mediante protocolos ligeros (APIs REST o gRPC). Sirve para escalar aplicaciones complejas de manera flexible y modular.
* **Patrón Composite (Estructural):** Permite componer objetos en estructuras de árbol para representar jerarquías parte-todo. Su propósito en microservicios es tratar a los objetos individuales y a las composiciones de servicios o componentes de manera uniforme.
* **Patrón Flyweight / Peso Ligero (Estructural):** Minimiza el uso de memoria compartiendo tanta data como sea posible entre objetos similares; se utiliza para soportar eficientemente grandes volúmenes de datos u objetos en sistemas distribuidos de alta concurrencia.

---

## 2. Características, cómo funciona y cómo se organiza
* **Microservicios:** Se organizan en torno a dominios de negocio (Domain-Driven Design), con bases de datos descentralizadas por servicio y despliegue automatizado mediante contenedores.
* **Composite:** Funciona mediante una interfaz común implementada tanto por objetos hojas como por contenedores. Se organiza jerárquicamente para que una petición a un servicio compuesto delegue la ejecución a sus subcomponentes de forma transparente.
* **Flyweight:** Separa el estado en dos partes: el **estado intrínseco** (compartido e independiente del contexto, almacenado en el objeto Flyweight) y el **estado extrínseco** (dependiente del contexto, pasado por el cliente). Se gestiona a través de una fábrica que controla el caché de instancias.

---

## 3. Representación de componentes y conexiones
Los servicios se estructuran modularmente separando las peticiones del cliente hacia la capa de enrutamiento, la cual distribuye el flujo hacia los componentes jerárquicos o hacia la factoría de instancias compartidas según corresponda en la arquitectura distribuida.

---

## 4. Ventajas y desventajas
* **Ventajas:**
  * Alta modularidad, escalabilidad y mantenibilidad en sistemas distribuidos complejos.
  * Optimización drástica del consumo de recursos en memoria mediante la compartición de estados (Flyweight).
  * Simplificación en el manejo de estructuras anidadas o jerárquicas de servicios (Composite).
* **Desventajas:**
  * Mayor complejidad inicial de diseño y arquitectura.
  * Sobrecarga en la gestión y sincronización del estado extrínseco en red.
  * Curva de aprendizaje elevada para mantener la cohesión de las jerarquías distribuidas.

---

## 5. Tecnologías relacionadas
* **Backend:** Java (Spring Boot) o Node.js para la implementación de los microservicios.
* **Frontend:** React para la interfaz de usuario que consume y refleja estructuras jerárquicas complejas mediante componentes reutilizables.
* **Base de Datos:** MySQL para el almacenamiento relacional descentralizado por servicio.
* **Infraestructura y Nube:** Docker y Kubernetes para la contenedorización y orquestación de los servicios distribuidos.

---

## 6. Demostración
En la carpeta `/src` de este repositorio encontrarás las implementaciones prácticas:
* **`composite/`**: Ejemplo en código que simula la ejecución en cascada de servicios anidados.
* **`flyweight/`**: Demostración de optimización de memoria compartiendo instancias comunes en alta concurrencia.

---

## 7. Conclusión: ¿En qué situación conviene utilizar cada uno?
* **Arquitectura de Microservicios:** Conviene aplicarla en sistemas empresariales grandes, escalables y desarrollados por equipos multidisciplinarios independientes.
* **Patrón Composite:** Ideal cuando el sistema necesita manipular estructuras de datos jerárquicas (organigramas, menús, catálogos anidados o ensamblajes de servicios) donde el cliente interactúa de forma idéntica con elementos simples y compuestos.
* **Patrón Flyweight:** Se debe utilizar cuando la aplicación crea una cantidad masiva de objetos similares que amenazan con agotar la memoria RAM, permitiendo centralizar y compartir los datos comunes de solo lectura.
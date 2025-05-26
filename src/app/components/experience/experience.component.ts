import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

enum ImagesCatalog {
  Hope = 'hope',
  Ce = 'ce',
  Vigilancia = 'vigilancia',
  Dgi = 'dgi',
  Multipagos = 'multipagos',
}
@Component({
  selector: 'component-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  ImagesCatalog = ImagesCatalog; // <- esto lo hace accesible en el HTML

  protected currentIndex = signal(0);

  isModalOpen = signal(false);

  images = signal<dataImage[]>([]); // images es un signal

  private imagesCE: dataImage[] = [
    {
      description:
        'El Sistema Nacional de Consulta Externa (Vital) es una plataforma integral desarrollada para optimizar la gestión de pacientes en el sistema de salud pública de Nicaragua.',
      UrlPath: 'assets/images/ce/CE1.webp',
    },
    {
      description:
        'Este sistema ha sido un componente fundamental para la modernización del sector salud, permitiendo una trazabilidad más precisa de la información clínica y administrativa de los pacientes.',
      UrlPath: 'assets/images/ce/CE2.webp',
    },
    {
      description:
        'Durante el desarrollo de este sistema, se utilizó Angular desde su versión 12 en adelante, lo que permitió aprovechar mejoras en rendimiento y modularidad. Para el diseño de la interfaz se integró Tailwind CSS, lo que facilitó la creación de componentes reutilizables y un diseño moderno y accesible. La aplicación fue estructurada para adaptarse a varios entornos de trabajo, incluyendo local, desarrollo, QA, preproducción y producción, garantizando así una entrega continua y controlada de las funcionalidades.',
      UrlPath: 'assets/images/ce/CE3.webp',
    },
    {
      description:
        'El equipo de trabajo adoptó la metodología ágil Scrum, con reuniones diarias al inicio del día (daily meetings) para coordinar actividades, identificar bloqueos y sincronizar al equipo.',
      UrlPath: 'assets/images/ce/CE4.webp',
    },
    {
      description:
        'Además, se realizaban reuniones semanales con los clientes para mostrar avances del sistema y validar su aprobación, lo que aseguraba una alineación constante con las expectativas del usuario final y permitía realizar ajustes tempranos en el ciclo de desarrollo.',
      UrlPath: 'assets/images/ce/CE5.webp',
    },
    {
      description:
        'La gestión de tareas y seguimiento del progreso del equipo se realizó a través de Jira, lo que permitió mantener un control preciso sobre las asignaciones, prioridades y tiempos de entrega. ',
      UrlPath: 'assets/images/ce/CE6.webp',
    },
    {
      description:
        'El sistema consumía servicios REST desarrollados en Spring Boot, lo que requería una constante coordinación con los equipos de backend y base de datos, garantizando la correcta integración de todos los módulos.',
      UrlPath: 'assets/images/ce/CE7.webp',
    },
    {
      description:
        'Además del desarrollo de nuevas funcionalidades, el equipo era responsable de dar soporte a errores en producción, asegurando la continuidad del servicio. Esto implicaba realizar pruebas en los distintos entornos antes mencionados, así como validar y corregir posibles incidencias reportadas por los usuarios.',
      UrlPath: 'assets/images/ce/CE8.webp',
    },
    {
      description:
        'También se trabajó ampliamente en la generación y diseño de reportes, los cuales eran fundamentales para la toma de decisiones dentro del sistema de salud.',
      UrlPath: 'assets/images/ce/CE0.webp',
    },
  ];

  private imagesVigilancia: dataImage[] = [
    {
      description:
        'El Sistema Nacional de Vigilancia Epidemiológica (Vital) es una plataforma especializada en el monitoreo, registro y control de enfermedades transmisibles de alto impacto en la salud pública de Nicaragua, tales como malaria, rabia, lepra, leptospirosis y chagas, entre otras. ',
      UrlPath: 'assets/images/vigilancia/vigilancia1.webp',
    },
    {
      description:
        'Este sistema fue diseñado para permitir un seguimiento preciso de cada caso mediante formularios específicos por tipo de enfermedad, lo que facilitó una recopilación estructurada de datos y la generación de estadísticas clave para la toma de decisiones sanitarias a nivel nacional.',
      UrlPath: 'assets/images/vigilancia/vigilancia2.webp',
    },
    {
      description:
        'El desarrollo de esta solución se realizó utilizando Angular desde su versión 12 en adelante, lo que ofreció una arquitectura escalable y mantenible.',
      UrlPath: 'assets/images/vigilancia/vigilancia3.webp',
    },
    {
      description:
        'Para el diseño del frontend se incorporó Tailwind CSS, lo que permitió construir interfaces limpias, accesibles y fácilmente adaptables a las distintas necesidades del usuario final.',
      UrlPath: 'assets/images/vigilancia/vigilancia4.webp',
    },
    {
      description:
        'El sistema operaba en múltiples entornos de trabajo, incluyendo entornos local, desarrollo, QA, preproducción y producción, lo que permitía probar y validar cada funcionalidad antes de su liberación definitiva.',
      UrlPath: 'assets/images/vigilancia/vigilancia5.webp',
    },
    {
      description:
        'Desde el punto de vista organizativo, se trabajó bajo la metodología ágil Scrum, realizando reuniones diarias al inicio de la jornada para alinear al equipo, asignar tareas y resolver bloqueos.',
      UrlPath: 'assets/images/vigilancia/vigilancia6.webp',
    },
    {
      description:
        'También se mantenía una comunicación semanal con los clientes, quienes revisaban los avances del sistema y aprobaban nuevas funcionalidades, asegurando una evolución constante del producto conforme a las necesidades reales del Ministerio de Salud.',
      UrlPath: 'assets/images/vigilancia/vigilancia7.webp',
    },
    {
      description:
        'La planificación y seguimiento de las tareas del equipo se realizaba a través de Jira, permitiendo una trazabilidad clara y eficiente del trabajo. ',
      UrlPath: 'assets/images/vigilancia/vigilancia8.webp',
    },
    {
      description:
        ' El sistema se integraba con servicios REST desarrollados en Spring Boot, y para ello se coordinaba estrechamente con los equipos responsables de backend y base de datos, garantizando así una integración robusta y sinérgica entre los diferentes módulos del sistema.',
      UrlPath: 'assets/images/vigilancia/vigilancia9.webp',
    },
    {
      description:
        'Además del desarrollo de nuevas funcionalidades, parte esencial del trabajo consistía en identificar y solucionar incidencias en producción, lo que exigía una validación cuidadosa en los distintos entornos de prueba. ',
      UrlPath: 'assets/images/vigilancia/vigilancia10.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/vigilancia/vigilancia11.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/vigilancia/vigilancia12.webp',
    },

    {
      description: null,
      UrlPath: 'assets/images/vigilancia/vigilancia13.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/vigilancia/vigilancia14.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/vigilancia/vigilancia15.webp',
    },
  ];

  private imagesHope: dataImage[] = [
    {
      description: 'Hope/Tablero de comunicación del niño',
      UrlPath: 'assets/images/hope/hope0.webp',
    },
    {
      description:
        'La app cuenta con dos módulos principales: uno administrativo, destinado a tutores y terapeutas, desde donde pueden gestionar perfiles, actividades y avances; y otro interactivo, especialmente adaptado para los pacientes, donde pueden construir oraciones de manera intuitiva, arrastrando pictogramas hacia un área de frases. Esta funcionalidad permite a los niños expresarse de forma visual y auditiva, promoviendo su desarrollo comunicativo y cognitivo.',
      UrlPath: 'assets/images/hope/hope36.webp',
    },
    {
      description:
        'Desde el punto de vista técnico, el proyecto fue desarrollado en Flutter utilizando la arquitectura limpia, lo cual permitió mantener una estructura escalable y mantenible.',
      UrlPath: 'assets/images/hope/hope2.webp',
    },
    {
      description:
        'El proyecto se desarrolló bajo la metodología ágil Scrum, con reuniones diarias para coordinar avances y resolver bloqueos.',
      UrlPath: 'assets/images/hope/hope1.webp',
    },
    {
      description:
        ' Las tareas se organizaban mediante tickets en Jira, y el control de versiones se manejaba con Git, aplicando buenas prácticas como el uso de Pull Requests (PR) para revisión de código. También se participó activamente en la verificación del código del entorno web administrativo que acompaña a la app.',
      UrlPath: 'assets/images/hope/hope43.webp',
    },
    {
      description:
        'Se implementó GoRouter para la gestión de rutas y navegación con validación de roles y permisos, lo que aseguró una experiencia segura y personalizada según el tipo de usuario (paciente, tutor o terapeuta).',
      UrlPath: 'assets/images/hope/hope38.webp',
    },
    {
      description:
        'Para la gestión del estado se utilizó Provider, y se integraron librerías como intl para habilitar la traducción a múltiples idiomas en versiones futuras, ampliando así la escalabilidad internacional de la aplicación.',
      UrlPath: 'assets/images/hope/hope3.webp',
    },
    {
      description:
        'El sistema permite el registro del avance de los niños, mediante la creación y seguimiento de actividades con pictogramas que se adaptan a la fase de desarrollo en la que se encuentra cada paciente. Esto facilita que tutores y terapeutas puedan evaluar de forma más precisa el progreso individual, y les permite tomar decisiones informadas.',
      UrlPath: 'assets/images/hope/hope4.webp',
    },

    {
      description:
        'Además, se incluyó un sistema de logros y recompensas para motivar a los niños en su proceso de aprendizaje, reforzando su participación activa.',
      UrlPath: 'assets/images/hope/hope28.webp',
    },
    {
      description:
        'Para una mejor experiencia del usuario, se integraron funcionalidades como la apertura de cámara o galería del dispositivo para permitir la personalización de perfiles (foto, nombre, dirección, teléfono, etc.). También se utilizó una librería propia publicada en Pub.dev para la gestión de listas desplegables reutilizables en todo el sistema.',
      UrlPath: 'assets/images/hope/hope39.webp',
    },
    {
      description:
        'En el módulo del paciente, se trabajó con componentes de arrastrar y soltar en la zona de frases, y se integró una librería de reproducción de audio que permite al niño escuchar la oración construida, reforzando así la asociación entre imagen, palabra y sonido.',
      UrlPath: 'assets/images/hope/hope30.webp',
    },
    {
      description:
        ' La app también muestra alertas visuales al usuario en función del resultado de las peticiones, tanto en casos exitosos como ante errores, mejorando la comunicación con el usuario y la usabilidad del sistema.',
      UrlPath: 'assets/images/hope/hope34.webp',
    },
    {
      description:
        'Finalmente, el archivo APK fue subido a Google Play utilizando las credenciales oficiales de la fundación a la que fue entregada la aplicación, permitiendo así pruebas reales en dispositivos Android. ',
      UrlPath: 'assets/images/hope/hope35.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/hope/hope20.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/hope/hope15.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/hope/hope8.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/hope/hope9.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/hope/hope7.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/hope/hope13.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/hope/hope12.webp',
    },

    {
      description: null,
      UrlPath: 'assets/images/hope/hope16.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/hope/hope17.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/hope/hope19.webp',
    },

    {
      description: null,
      UrlPath: 'assets/images/hope/hope41.webp',
    },
    {
      description: null,
      UrlPath: 'assets/images/hope/hope42.webp',
    },
  ];

  private imagesDgi: dataImage[] = [
    {
      description:
        ' El Sistema Administrativo de la Dirección General de Ingresos (DGI) fue desarrollado con el objetivo de mejorar la gestión interna del personal y optimizar los procesos administrativos de la institución.\n\nEste sistema permite registrar entradas y salidas de los empleados, gestionar vacaciones, calcular y procesar planillas, registrar aportes al seguro social y generar reportes detallados con información personal y estadísticas del personal, todo desde una interfaz centralizada y eficiente.\n\nDurante el desarrollo del proyecto, se mantuvo una comunicación constante con los usuarios finales mediante reuniones periódicas. Estas sesiones fueron clave para entender sus necesidades reales, recopilar retroalimentación y resolver problemáticas específicas. Además, permitieron ajustar aspectos de experiencia e interfaz de usuario (UX/UI) para asegurar que la plataforma no solo fuera funcional, sino también intuitiva y agradable de usar. Fui el responsable directo de diseñar y proponer la interfaz del sistema, adaptándola a los requerimientos funcionales y estéticos definidos por los usuarios.\n\nA nivel técnico, el sistema fue desarrollado con C# y ASP.NET, utilizando una arquitectura en capas (n capas) que separa la lógica de negocio, la presentación y el acceso a datos. Para la interacción con la base de datos, se utilizó Entity Framework, lo cual permitió una integración eficiente y segura con los datos institucionales. En este proyecto, tuve a mi cargo el módulo administrativo, donde trabajé en la creación de consultas SQL, triggers, nuevas tablas, campos personalizados, así como en la optimización del código existente para mejorar el rendimiento general del sistema. Parte de mis responsabilidades incluía también la resolución de errores en producción, lo que implicaba análisis de problemas en tiempo real y ajustes rápidos y seguros en ambientes críticos.\n\nPara el diseño del frontend se utilizó Bootstrap, lo que permitió construir interfaces responsivas y estandarizadas. Además, el seguimiento de tareas y asignaciones se realizaba mediante tickets en Jira, manteniendo una trazabilidad clara de cada requerimiento y facilitando el trabajo colaborativo dentro del equipo de desarrollo.',
      UrlPath: 'assets/images/nodata.webp',
    },
  ];

  private imagesMultipagos: dataImage[] = [
    {
      UrlPath: 'assets/images/nodata.webp',
      description:
        'El Sistema Administrativo de Multipagos fue diseñado para mejorar el control de pagos y la logística de entrega de paquetes, integrando funcionalidades de monitoreo en tiempo real de motorizados mediante mapas GPS. Esta herramienta permite visualizar las rutas, salidas y entradas de los mensajeros, así como gestionar el inventario pendiente por entregar, ofreciendo una visión completa y actualizada de las operaciones diarias.\n\nUna de las características clave del sistema es la generación de gráficos estadísticos interactivos mediante el uso de DevExtreme, lo que facilita la interpretación de datos y apoya la toma de decisiones estratégicas tanto a nivel logístico como administrativo.El sistema también incluye un módulo de gestión y seguimiento de entregas que mejora la trazabilidad y eficiencia en la distribución.\n\nComo parte del equipo de desarrollo, participé activamente en reuniones periódicas con el cliente, el equipo técnico y mis mentores, lo cual fue esencial para alinear objetivos, validar requerimientos y garantizar que el producto final respondiera a las necesidades reales del negocio.Dentro del equipo, fui responsable de realizar correcciones tanto en el diseño de interfaz como en la lógica de los componentes del sistema administrativo interno, asegurando una experiencia de usuario fluida y un comportamiento funcional coherente.\n\nAdemás, contribuí en el desarrollo de una aplicación móvil complementaria, destinada al seguimiento de los motorizados encargados de las entregas, lo cual permitió una supervisión más precisa de las rutas y horarios.El desarrollo frontend del sistema se apoyó en tecnologías como Bootstrap para interfaces responsivas y DevExtreme para componentes avanzados y gráficos interactivos.',
    },
  ];


  protected openModal(typeImage: ImagesCatalog) {
    switch (typeImage) {
      case ImagesCatalog.Hope:
        this.images.set(this.imagesHope);
        break;
      case ImagesCatalog.Ce:
        this.images.set(this.imagesCE);
        break;

      case ImagesCatalog.Vigilancia:
        this.images.set(this.imagesVigilancia);
        break;

      case ImagesCatalog.Dgi:
        this.images.set(this.imagesDgi);
        break;

      case ImagesCatalog.Multipagos:
        this.images.set(this.imagesMultipagos);
        break;

      default:
        this.images.set([
          {
            description: null,
            UrlPath: 'assets/images/nodata.webp',
          },
        ]);
        break;
    }

    this.currentIndex.set(0);
    this.isModalOpen.set(true);
  }

  protected closeModal() {
    this.isModalOpen.set(false);
  }

  protected nextImage() {

    this.currentIndex.update((i) => (i + 1) % this.images().length);
  }

  protected prev() {
    this.currentIndex.update((i) => (i - 1 + this.images().length) % this.images().length);
  }
}

interface dataImage {
  description: String | null;
  UrlPath: String;
}

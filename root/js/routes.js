// Acá se cargan las diferentes rutas usando templates HTML, y se ajustan en una div que es el "body" de la página
const PATHS = {
  home: {
    path: "/",
    //Template para el home del sitio
    template: `  <div class="hero">
    <img
    src="./public/src/hero_banner.jpg"
    alt="Hero Image">
    <div class="hero-text">
    <h1>Bienvenido a +QContar</h1>
    <p>Somos la solución número 1 a sus necesidades contables</p>
    <button class="btn-white" id="Hablemos" onclick="ROUTER.load('hablemos')">Hablemos</button>
    </div>
    </div>
    <div class="info-divider">
    <h1>La historia de +QContar</h1>
    </div>
    <div class="about-us">
    <img src="./public/src/about-qc.jpg" alt="Imagen de fondo descripción de la empresa">
    <div class="about-qc">
    <p>
    La Lic. Rojas es una Contadora Privada Incorporada con la experiencia en la elaboración de información financiera, automatización y rediseño de procesos contables y financieros que inicia su emprendimiento de +QContar a inicios del año 2021 con la finalidad de brindar sus servicios profesionales a personas emprendedoras, con el propósito de asesorar a los clientes y encargarse de aspectos contables para hacer crecer sus negocios. <br>
    <br>
    Asimismo, +QContar nace con la necesidad de sanar la relación con las finanzas, de educar y crear consciencia de la importancia de convertir las finanzas en nuestra mejor aliada para nuestro bienestar y salud financiera.
    </p>
    </div>
    </div>
    <div class="info-divider">
    <h1> Servicios </h1>
    </div>
    <section class="services">
    <div class="row">
    </div>
    <div class="row">
    <div class="column">
    <div class="card">
    <div class="icon-wrapper">
    <i class="fas fa-calculator"></i>
    </div>
    <h3>Servicios Contables</h3>
    <p>
    Queremos conocerte y conocer tu negocio en una sesión 1:1. <br> Hablemos para entender tus necesidades y problemas de información contable y financiera.<br>
    </p>
    <h3> Este servicio es para vos si:</h3>
    <ul class="services-list">
    <li>Llevas mucho tiempo con ganas de poner en orden los números de tu negocio.</li> <br>
    <li>Eres emprendedor o quires emprender, pero no sabes cómo recopilar la información financiera de tu negocio</li> <br>
    <li>Quiere medir los resultados de tu negocio con mayor precisión y exactitud</li> <br>
    </ul>
    </div>
    </div>
    <div class="column">
    <div class="card">
    <div class="icon-wrapper">
    <i class="fas fa-file"></i>
    </div>
    <h3>Presupuestos y análisis financieros</h3>
    <p>
    Te ayudamos a lograr tus metas a través de la planeación financiera. <br> Agendemos una sesión 1:1 y tracemos juntos los planes de acción para alcanzar los resultados deseados <br>
    </p>
    <h3> Este servicio es para vos si:</h3>
    <ul class="services-list">
    <li>Tienes expectativas monetarias para alcanzar en tu negocio, pero no sabes como establecer estrategias financieras.</li> <br>
    <li>Requieres organizar y revisar periódicamente las finanzas de tu negocio y medir los resultados que vas obteniendo.</li> <br>
    <li>Necesitas acompañamiento y apoyo para la interpretación de los resultados de tu negocio.</li> <br>
    </ul>
    </div>
    </div>
    <div class="column">
    <div class="card">
    <div class="icon-wrapper">
    <i class="fas fa-gear"></i>
    </div>
    <h3>Automatización y rediseño de procesos contables</h3>
    <p>
    Sabemos la importancia de tu tiempo como emprendedor, por eso queremos brindarte herramientas para obtener información financiera de forma ágil y oportuna. <br> Hablemos sobre tus necesidades de diseño y automatización de tu contabilidad. <br>
    </p>
    <h3> Este servicio es para vos si:</h3>
    <ul class="services-list">
    <li>Requieres la información de tu negocio de forma eficiente y oportuna para la toma de decisiones.</li> <br>
    <li>Necesitas facilitad y sistematización en los procesos contables y administrativos.</li> <br>
    <li>Quieres gestionar, organizar, contabilizar y realizar seguimientos de tus informes financieros de forma eficaz.</li> <br>
    </ul>
    </div>
    </div>
    <div class="column">
    <div class="card">
    <div class="icon-wrapper">
    <i class="fas fa-scale-unbalanced-flip"></i>
    </div>
    <h3>Asesoría tributaria</h3>
    <p>
    Queremos que conozcas cuáles son tus obligaciones tributarias como emprendedor y sus implicaciones, y además queremos asesorarte especializadamente al realizar las gestiones fiscales requeridas por tu negocio. <br> Agendemos una sesión 1:1 conversemos sobre impuestos estatales y planifiquemos juntos la presentación de declaraciones tributarias de tu negocio.
    </p>
    <h3> Este servicio es para vos si:</h3>
    <ul class="services-list">
    <li>Has adquirido algún tipo de obligación tributaria producto de tu negocio o actividad económica.</li> <br>
    <li>Eres emprendedor o quieres emprender, pero no sabes que implicaciones tributarias aplican para tu negocio.</li> <br>
    <li>Necesitas planeación oportuna y metódica para la presentación de declaraciones tributarias.</li> <br>
    </ul>
    </div>
    </div>
    <div class="column">
    <div class="card">
    <div class="icon-wrapper">
    <i class="fas fa-money-bill"></i>
    </div>
    <h3>Salud Financiera</h3>
    <p>
    Los talleres y charlas que impartimos no solo te ayudarán a mejorar tu relación con las finanzas, sino que te guiarán a conseguir tus sueños trazados en objetivos realistas.
    </p>
    <h3> Este servicio es para vos si:</h3>
    <ul class="services-list">
    <li>Estás buscando libertad y conocimiento financiero para manejar mejor tus finanzas personales y empresariales.</li> <br>
    </ul>
    </div>
    </div>
    <div class="column">
    <div class="card">
    <div class="icon-wrapper">
    <i class="fas fa-cloud"></i>
    </div>
    <h3>Infraestructura en la nube</h3>
    <p>
    Te ayudamos a lograr tus metas a través de la planeación financiera. <br> Agendemos una sesión 1:1 y tracemos juntos los planes de acción para alcanzar los resultados deseados <br>
    </p>
    <h3> Este servicio es para vos si:</h3>
    <ul class="services-list">
    <li>Tienes expectativas monetarias para alcanzar en tu negocio, pero no sabes como establecer estrategias financieras.</li> <br>
    <li>Requieres organizar y revisar periódicamente las finanzas de tu negocio y medir los resultados que vas obteniendo.</li> <br>
    <li>Necesitas acompañamiento y apoyo para la interpretación de los resultados de tu negocio.</li> <br>
    </ul>
    </div>
    </div>
    </div>
    </section>
    <div class="info-divider">
    <h1>Testimonios</h1>
    </div>
    <div class="testimonials-section">
    <figure class="testimonial">
    <figcaption>
    <blockquote>
    <p>Trabajar con +QContar ha sido una experiencia muy agradable</p>
    </blockquote>
    <h3>Jonathan Sánchez</h3>
    <h4>Empresa 1</h4>
    </figcaption> 
    </figure>
    <figure class="testimonial">
    <figcaption>
    <blockquote>
    <p>+QContar me ha ayudado a optimizar las finanzas de mi PYME</p>
    </blockquote>
    <h3>Jeff Bezos</h3>
    <h4>Amazon</h4>
    </figcaption>
    </figure>
    <figure class="testimonial">
    <figcaption>
    <blockquote>
    <p>Las colaboraciones con +Qcontar han sido muy satisfactorias de momento</p>
    </blockquote>
    <h3>Alejandro Sanz</h3>
    <h4>Empresa 3</h4>
    </figcaption>
    </figure>
    </div>`,
  },
  about: {
    path: "/about",
    template: `<h1>Sobre Mí<h1>
    <p color:"red">Hola Dennis<p>`,
  },
  blog: {
    path: "/blog",
    template: `<a id="blog1" onclick="ROUTER.load('blog1')">Entrada del blog</a>`,
  },
  hablemos: {
    path: "/hablemos",
    template: `    <div class="info-divider">
    <h1>¿Qué espera para comunicarse con nosotros?</h1>
    </div>
    <div class="contact-form">
    <form action="#">
    
    <label for="name">Nombre</label>
    <input type="text" id="fname" name="firstname" placeholder="Su Nombre">

    <label for="email">Correo electrónico</label>
    <input type="email" id="company-mail" name="companymail" placeholder="Su correo de la empresa">
    
    <label for="enterprise">Empresa</label>
    <input type="text" id="company" name="companyname" placeholder="Nombre de su empresa">
    
    <label for="interestedin">¿En que servicio está interesado?</label>
    <select id="interested-in" name="interestedin">
    <option value="contableservices">Servicios contables</option>
    <option value="finbudgets">Presupuestos y analisis financieros</option>
    <option value="automatization">Automatización y rediseño de procesos contables</option>
    <option value="tribassesory">Asesoría tributaria</option>
    <option value="finheatlh">Salud Financiera</option>
    <option value="cloudinfraestructure">Infraestructura en la nube</option>
    </select>
    
    <label for="subject">Descripción</label>
    <textarea id="subject" name="subject" placeholder="Denos una breve descripción sobre la situación actual de su empresa" style="height:200px"></textarea>
    
    <input type="submit" value="Enviar" action="//Dennis ponga lo que su corazón le diga">
    
    </form>
    </div>`,
  },
  login: {
    path: "/login",
    template: `<h1>Inicio de sesión como administrador<h1>`,
  },
  blog1: {
    path: "/blog-1",
    template: `<h1>Esta es la primera entrada del blog</h1>`
  }
};

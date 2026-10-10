import "./Footer.css";

export const Footer = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Integrante 1",
      role: "Desarrollo Frontend",
      description: "Especialista en React y maquetación accesible.",
    },
    {
      id: 2,
      name: "Integrante 2",
      role: "Diseño UI/UX",
      description: "Responsable de la identidad visual de Grave.",
    },
    {
      id: 3,
      name: "Integrante 3",
      role: "Luthier & Producto",
      description: "Curador y asesor técnico de la tienda.",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-company">
          <h3 className="footer-title">Grave | Tienda para bajistas</h3>
          <p className="footer-text">
            Selección curada de los mejores bajos eléctricos, equipamiento y accesorios. 
            Pasión por las frecuencias bajas.
          </p>
          <div className="social-icons">
            <a href="mailto:contacto@grave.com" aria-label="Correo de contacto">
              <img src="/img/icon-mail.png" alt="Email" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src="/img/icon-ig.png" alt="Instagram" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <img src="/img/icon-youtube.png" alt="YouTube" />
            </a>
          </div>
        </section>

        <section className="footer-team">
          <h4 className="team-title">Nuestro Equipo</h4>
          <div className="team-cards-grid">
            {teamMembers.map((member) => (
              <article key={member.id} className="team-card">
                <h5 className="member-name">{member.name}</h5>
                <p className="member-role">{member.role}</p>
                <p className="member-desc">{member.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Grave Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

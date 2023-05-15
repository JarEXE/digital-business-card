import me2 from "../images/me2.png";

function Info() {
  return (
    <div>
      <img src={me2} className="card-img-top" alt="my face" />
      <div className="card-body" id="main--card-body">
        <h4 className="card-title">Jarome Eyken</h4>
        <p id="card--occupation" className="card-text">
          Full-Stack Developer
        </p>
        <a
          id="website-link"
          href="https://github.com/JarEXE"
          rel="noreferrer"
          target="_blank"
          className="info--website"
        >
          github.com
        </a>
        <div className="card--buttons">
          <a
            id="emailbtn"
            href="mailto: eykenj@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="btn btn-light"
          >
            <i className="fa-solid fa-envelope"></i>
            Email
          </a>
          <a
            id="linkedinbtn"
            href="https://www.linkedin.com/in/jarome-eyken-1a8a2318b/"
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            <i className="fa-brands fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;

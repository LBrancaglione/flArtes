import * as C from "./styles";
import littleLogo from '../../images/littleLogo.png'

export const Footer = () => {
  return (
    <C.Container>
      <C.SocialLinks>
        <img className="Logo" src={littleLogo} alt="Sunnyside Logo" />
        <div className="linklist">
          <a href="https://wa.me/5514991575793">
            <p>Solicitar orçamento</p>
          </a>
        </div>
        <div className="iconslinks">
          <a href="https://www.facebook.com/profile.php?id=100068197755551">
            <svg
              className="fblogo"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                fill="#152B5C"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com/felartesdigitais/">
            <svg
              className="instalogo"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 6.615v1.45c0 .34-.275.616-.616.616h-1.449c-.341 0-.615-.276-.615-.616v-1.45c0-.34.274-.615.615-.615h1.449c.341 0 .616.275.616.615zm-1.131 4.699c.033.225.054.453.054.686 0 2.72-2.204 4.923-4.922 4.923s-4.923-2.204-4.923-4.923c0-.233.021-.461.054-.686.031-.221.075-.437.134-.647h-1.266v6.719c0 .339.275.614.616.614h10.769c.34 0 .615-.275.615-.615v-6.719h-1.265c.058.211.102.427.134.648zm-4.869 3.763c1.699 0 3.078-1.378 3.078-3.077s-1.379-3.077-3.078-3.077-3.077 1.377-3.077 3.077 1.378 3.077 3.077 3.077zm12-15.077v24h-24v-24h24zm-4 5.846c0-1.019-.826-1.846-1.846-1.846h-12.308c-1.019 0-1.846.827-1.846 1.846v12.307c0 1.02.827 1.847 1.846 1.847h12.309c1.019 0 1.845-.827 1.845-1.847v-12.307z"
                fill="#152B5C"
              />
            </svg>
          </a>
        </div>
      </C.SocialLinks>
    </C.Container>
  );
};

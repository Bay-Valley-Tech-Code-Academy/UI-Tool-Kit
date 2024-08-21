import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="absolute w-screen">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <div className="footer-logo">
            <a href="/"><Image
                
                src="/images/bvt-logo.png "
                alt="Logo"
                width={70}
                height={70}
              />
            </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <Link legacyBehavior href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/careers">
                  <a>Careers</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li>
                <Link legacyBehavior href="/productlists/1">
                  <a>Bay Valley Tech T-Shirt</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/productlists/2">
                  <a>Bay Valley Tech Light Bulb</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/productlists/3">
                  <a>Bay Valley Tech Sweater</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/productlists/4">
                  <a>BVT Directors Autograph</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link legacyBehavior href="/resources/help-center">
                  <a>Help Center</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/resources/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/resources/terms-of-service">
                  <a>Terms of Service</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

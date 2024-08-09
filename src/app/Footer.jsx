import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <Image src="/images/bvt_logo.png" alt="Logo" width={50} height={50} />
                </div>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><Link legacyBehavior href="/about"><a>About Us</a></Link></li>
                            <li><Link legacyBehavior href="/careers"><a>Careers</a></Link ></li>
                            <li><Link legacyBehavior href="/blog"><a>Blog</a></Link ></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Products</h4>
                        <ul>
                            <li><Link legacyBehavior href="/products/product1"><a>Product 1</a></Link></li>
                            <li><Link legacyBehavior href="/products/product2"><a>Product 2</a></Link ></li>
                            <li><Link legacyBehavior href="/products/product3"><a>Product 3</a></Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link legacyBehavior href="/resources/help-center"><a>Help Center</a></Link ></li>
                            <li><Link legacyBehavior href="/resources/privacy-policy"><a>Privacy Policy</a></Link></li>
                            <li><Link legacyBehavior href="/resources/terms-of-service"><a>Terms of Service</a></Link ></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
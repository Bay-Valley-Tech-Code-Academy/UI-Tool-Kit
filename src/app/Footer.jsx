import Link from 'next/link'

export default function Navbar() {
    return (
        <footer>
            <p>© Bay Valley Tech</p>
            <div className="footer-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/contact">Contact</a>
            </div>
        </footer>
    )
}
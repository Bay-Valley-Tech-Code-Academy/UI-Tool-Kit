import Link from "next/link"

export default function Header() {
    return (
        <div className="nav-bar">
            <div className="nav-items">
                <h3 id="nav-item">
                    <Link href="/dashboard/pageone">
                        <span id="nav-text">Page One</span>
                    </Link>
                </h3>
                <h3 id="nav-item">
                    <Link href="/dashboard/pagetwo">
                        <span id="nav-text">Page Two</span>
                    </Link>
                </h3>
                <h3 id="nav-item">
                    <Link href="/dashboard/pagethree">
                        <span id="nav-text">Page Three</span>
                    </Link>
                </h3>
                <h3 id="nav-item">
                    <Link href="/">
                    <span id="nav-text">Log out</span>
                    </Link>
                </h3>
            </div>
        </div>
    )
}
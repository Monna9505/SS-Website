import Link from 'next/link';

export default function Header({headerLinks}:any) {
    return (
        <header>
            <nav>
                <ul>
                    { headerLinks.map((link:any) => (
                        <li key={link.label}>
                            <a href={link.url}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
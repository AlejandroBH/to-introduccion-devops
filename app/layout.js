export const metadata = {
    title: 'DevOps Project - CI/CD',
    description: 'Proyecto de introducción a DevOps con CI/CD, Docker y GitHub Actions',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}

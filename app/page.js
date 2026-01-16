export default function Home() {
    return (
        <main style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                🚀 DevOps Project
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
                CI/CD con GitHub Actions y Docker
            </p>
            <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <div style={{
                    padding: '1rem 2rem',
                    background: '#f0f0f0',
                    borderRadius: '8px'
                }}>
                    ✅ Next.js
                </div>
                <div style={{
                    padding: '1rem 2rem',
                    background: '#f0f0f0',
                    borderRadius: '8px'
                }}>
                    ✅ Docker
                </div>
                <div style={{
                    padding: '1rem 2rem',
                    background: '#f0f0f0',
                    borderRadius: '8px'
                }}>
                    ✅ GitHub Actions
                </div>
                <div style={{
                    padding: '1rem 2rem',
                    background: '#f0f0f0',
                    borderRadius: '8px'
                }}>
                    ✅ Jest
                </div>
            </div>
        </main>
    );
}

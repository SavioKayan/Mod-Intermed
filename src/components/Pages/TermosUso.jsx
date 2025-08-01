export default function TermosUso() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '50px 20px',
        backgroundColor: '#f9fafb',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', sans-serif",
    };

    const boxStyle = {
        backgroundColor: '#ffffff',
        padding: '40px',
        maxWidth: '700px',
        width: '100%',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        color: '#333',
        lineHeight: '1.6',
    };

    const titleStyle = {
        textAlign: 'center',
        marginBottom: '24px',
        fontSize: '28px',
        color: '#1f2937',
    };

    const headingStyle = {
        marginTop: '24px',
        fontSize: '20px',
        color: '#111827',
    };

    const paragraphStyle = {
        marginTop: '8px',
        fontSize: '16px',
        textAlign: 'justify',
    };

    return (
        <main style={containerStyle}>
            <div style={boxStyle}>
                <h2 style={titleStyle}>Termos de Uso</h2>

                <p style={paragraphStyle}>
                    Ao acessar ou usar os serviços da <strong>HackStory</strong>, você concorda com os seguintes termos e condições.
                </p>

                <h3 style={headingStyle}>Uso do Site</h3>
                <p style={paragraphStyle}>
                    O conteúdo deste site é para uso pessoal. É proibido copiar, modificar ou distribuir qualquer material sem autorização.
                </p>

                <h3 style={headingStyle}>Responsabilidades</h3>
                <p style={paragraphStyle}>
                    Fazemos o possível para manter as informações atualizadas, mas não garantimos ausência total de erros.
                    A HackStory não se responsabiliza por danos causados por uso indevido das informações.
                </p>

                <h3 style={headingStyle}>Alterações</h3>
                <p style={paragraphStyle}>
                    Podemos atualizar estes termos periodicamente. Recomendamos que você revise esta página com frequência.
                </p>

                <h3 style={headingStyle}>Contato</h3>
                <p style={paragraphStyle}>
                    Para dúvidas sobre os Termos de Uso, entre em contato conosco pelo canal oficial.
                </p>
            </div>
        </main>
    );
}

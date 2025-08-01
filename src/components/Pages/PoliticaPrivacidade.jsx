export default function PoliticaPrivacidade() {
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
                <h2 style={titleStyle}>Política de Privacidade</h2>

                <p style={paragraphStyle}>
                    Na <strong>HackStory</strong>, respeitamos sua privacidade e estamos comprometidos com a transparência na coleta e uso das suas informações.
                </p>

                <h3 style={headingStyle}>Coleta de Dados</h3>
                <p style={paragraphStyle}>
                    Coletamos informações como nome, e-mail e dados de navegação apenas para melhorar sua experiência de compra e atendimento.
                </p>

                <h3 style={headingStyle}>Uso das Informações</h3>
                <p style={paragraphStyle}>
                    Os dados são utilizados para envio de ofertas, suporte e melhorias no site. Não vendemos nem compartilhamos informações com terceiros sem seu consentimento.
                </p>

                <h3 style={headingStyle}>Segurança</h3>
                <p style={paragraphStyle}>
                    Seus dados são armazenados com segurança em sistemas protegidos. Utilizamos criptografia e boas práticas para manter sua privacidade.
                </p>

                <h3 style={headingStyle}>Direitos do Usuário</h3>
                <p style={paragraphStyle}>
                    Você pode solicitar alteração ou exclusão dos seus dados a qualquer momento através do nosso canal de atendimento.
                </p>
            </div>
        </main>
    );
}

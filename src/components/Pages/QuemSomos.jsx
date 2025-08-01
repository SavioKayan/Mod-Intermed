export default function QuemSomos() {
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
        color: '#0c3999ff',
    };

    const paragraphStyle = {
        marginTop: '8px',
        fontSize: '16px',
        textAlign: 'justify',
    };

    const listStyle = {
        marginTop: '12px',
        paddingLeft: '20px',
        fontSize: '16px',
    };

    const listItemStyle = {
        marginBottom: '8px',
    };

    return (
        <main style={containerStyle}>
            <div style={boxStyle}>
                <h2 style={titleStyle}>Quem Somos</h2>

                <p style={paragraphStyle}>
                    A <strong>HackStory de Informática</strong> nasceu com o propósito de tornar a tecnologia acessível e confiável para todos.
                    Localizada em Iguatu-CE, oferecemos produtos de informática de alta qualidade, com atendimento humano e suporte técnico de excelência.
                </p>

                <h3 style={headingStyle}>Nossos Valores</h3>
                <ul style={listStyle}>
                    <li style={listItemStyle}>✔ Compromisso com a qualidade</li>
                    <li style={listItemStyle}>🛡️ Segurança e transparência</li>
                    <li style={listItemStyle}>🤝 Atendimento humanizado</li>
                    <li style={listItemStyle}>💡 Inovação e tecnologia</li>
                </ul>

                <h3 style={headingStyle}>Nosso Propósito</h3>
                <p style={paragraphStyle}>
                    Queremos ser referência em soluções tecnológicas no Ceará, promovendo inclusão digital e auxiliando nossos clientes
                    a evoluírem com eficiência, criatividade e suporte técnico de verdade.
                </p>
            </div>
        </main>
    );
}

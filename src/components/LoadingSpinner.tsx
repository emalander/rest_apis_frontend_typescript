
export default function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Para centrarlo verticalmente en toda la pantalla
      backgroundColor: '#f0f0f0', // Un fondo suave
      color: '#333'
    }}>
      {/* Aquí puedes usar un GIF de spinner, un SVG de spinner o CSS puro */}
      <div style={{
        border: '4px solid rgba(0, 0, 0, 0.1)',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        borderLeftColor: '#09f', // Color del spinner
        animation: 'spin 1s ease infinite'
      }} />
      <p style={{ marginLeft: '10px', fontSize: '1.2em' }}>Cargando...</p>

      {/* Estilos para la animación del spinner */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
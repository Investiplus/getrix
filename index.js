export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <img src="/logo.png" alt="Logo Investigest" style={{ maxWidth: '100%', height: 'auto' }} />
        <h1 className="text-2xl font-bold mt-4 mb-4" style={{ fontFamily: 'Tahoma', textTransform: 'uppercase' }}>
          Benvenuta, Artemisia!
        </h1>
        <p className="text-sm mb-2 uppercase">Ogni contatto è un'opportunità. Ogni vendita, un passo verso il successo.</p>
        <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Gestisci la tua rete ora
        </button>
        <p className="text-xs text-gray-500 mt-6 uppercase">Creato con passione da Terabyte Srl</p>
      </div>
    </main>
  );
}

import Link from 'next/link';

export default function AmPage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 className="text-4xl font-bold">И снова здравствуйте 👋</h1>
      <p>Вы уже тут: <strong>localhost:3000/i/am</strong></p>
      <p>И можете перейти на:</p>
      <div style={{ marginTop: '20px', fontSize: '3rem' }}>👇👇</div>

      <div className="flex items-center justify-center gap-8">
        {/* Кнопка-ссылка: Яркая, с закруглением и эффектом при наведении */}
        <Link 
          href="/i/am/designer" 
          className="bg-yellow-500 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          Designer 🎨
        </Link>

        {/* Ссылка: Строгая, подчеркнутая при наведении */}
        <Link 
          href="/i/am/engineer" 
          className="text-white opacity-80 hover:opacity-100 hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-300 font-mono"
        >
          {`{ engineer }`} 🛠️
        </Link>
      </div>

    </main>
  );
}
import Link from 'next/link';

export default function EngineerPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="bg-gray-800 p-8 rounded-xl border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
        <h1 className="text-3xl font-mono text-green-400 mb-4">
          {`> Ты пока не инженер, иди учись`}
        </h1>
      </div>

      <Link href="/i/am" className="text-sm text-gray-500 hover:text-white transition-colors">
        ← Вернуться
      </Link>
    </div>
  );
}

export default function ILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // bg-blue — синий фон, text-white — белый текст, min-h-screen — на всю высоту
    <div className="bg-gray-800 text-white min-h-screen p-10 font-sans flex flex-col items-center justify-center">
      {children}
    </div>
  );
}


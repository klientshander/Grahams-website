interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] bg-[#1A0A00] text-[#FFF8F0] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#F5D9B8]/20 animate-fade-in">
      <span className="w-2 h-2 rounded-full bg-[#E8590C] animate-pulse" />
      <span className="text-sm font-bold">{message}</span>
    </div>
  );
}


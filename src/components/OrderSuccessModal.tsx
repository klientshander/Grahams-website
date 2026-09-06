interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderSuccessModal({
  isOpen,
  onClose,
}: OrderSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs"
        onClick={onClose}
      />
      <div className="relative bg-[#FFF8F0] rounded-3xl max-w-md w-full p-8 text-center shadow-2xl z-10 space-y-4 animate-scale-up">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-2xl font-black text-[#1A0A00]">
          Order Confirmed!
        </h3>
        <p
          className="text-[#7C3813] text-sm leading-relaxed"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Thank you for ordering with Graham's Fine Foods. We are preparing your order in our Edinburgh kitchen. A confirmation email with tracking details has been sent.
        </p>
        <button
          onClick={onClose}
          className="bg-[#E8590C] hover:bg-[#C44A08] text-[#FFF8F0] px-8 py-3 rounded-full font-black text-xs uppercase tracking-wider transition-colors w-full cursor-pointer"
        >
          Back to Store
        </button>
      </div>
    </div>
  );
}


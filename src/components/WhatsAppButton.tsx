import React from 'react';

const WhatsAppButton: React.FC = () => {
  const message: string = "Hello! I'm interested in your products.";
  const phoneNumber: string = "+919220852922"; // Replace with your actual WhatsApp number
  const whatsappUrl: string = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="fixed bottom-5 right-5 z-[1000] flex flex-col items-center transition-transform duration-300 hover:scale-110 md:bottom-6 md:right-4"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="block w-[60px] h-[60px] md:w-[60px] md:h-[60px]"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp Chat"
          className="w-full h-full"
        />
      </a>
      <div
        className="bg-[#25D366] text-[#072A04] px-3 py-1.5 rounded-2xl text-sm font-extrabold 
        text-center mt-2 shadow-md opacity-90 hover:opacity-100 transition-opacity duration-300 md:text-sm md:px-4 md:py-1.7"
      >
        Chat with us
      </div>
    </div>
  );
};

export default WhatsAppButton;
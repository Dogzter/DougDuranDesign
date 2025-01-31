import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

export default function ContactIcons ({whatsapp, messenger}: { whatsapp: string; messenger: string}) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '120px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        opacity: '30%',
        zIndex: 10,
      }}
    >
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsapp}`} // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        title="Me chame no Whatsapp!"
        style={{
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        <FaWhatsapp fontSize={42} color="#0f3" />
      </a>

      {/* Facebook Messenger Button */}
      <a
        href={`https://m.me/${messenger}`} // Replace with your Facebook Messenger username
        target="_blank"
        title="Me chame no Messenger!"
        rel="noopener noreferrer"
        style={{
          padding: '15px 0',
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        <FaFacebookMessenger fontSize={42} color="#5af" />
      </a>
    </div>
  );
};

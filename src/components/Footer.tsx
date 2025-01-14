import { FaWhatsapp, FaFacebook  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-[rgba(0,100,200,0.1)]">
      <div className="max-w-[1600px] m-auto p-6">
        <p className="text-center text-cyan-600 p-5">
          Entre em contato
        </p>
        <div className="socials flex flex-wrap justify-around text-zinc-600">
          <a 
          href={`https://wa.me/5544999323339`} // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          title="Me chame no Whatsapp!"
          className="whatsapp flex flex-col items-center">
            <FaWhatsapp size={45} />
            <span>
              whatsapp
            </span>
          </a>
          <a
            href={`https://m.me/doug.duran1`} // Replace with your Facebook Messenger username
            target="_blank"
            title="Me chame no Messenger!"
            rel="noopener noreferrer"
            className="facebook flex flex-col items-center">
            <FaFacebook size={45} />
            <span>
              facebook
            </span>
          </a>
          <a
            href={`https://x.com/doug_duran`} // Replace with your Facebook Messenger username
            target="_blank"
            title="X / Twitter"
            rel="noopener noreferrer"
            className="twitter flex flex-col items-center">
            <FaXTwitter size={45} />
            <span>
              X
            </span>
          </a>
        </div>
      </div>
      <p className="text-center text-zinc-600 py-8 bg-[rgba(0,0,0,0.2)]">
        Doug Duran Design ® 2020-2024
      </p>
    </footer>
  )
}

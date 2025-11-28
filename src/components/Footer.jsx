import menu from "../data/footer.json";
import { Facebook, Instagram, Twitter, Youtube } from "../icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center">
      <section id="social-icons" className="flex w-[-webkit-fill-available] justify-start items-center gap-8 ms-68 mb-4">
        <a href="https://www.facebook.com/netflixitalia/" target="_blank" rel="noopener noreferrer">
          <Facebook size={22} />
        </a>
        <a href="https://www.instagram.com/NetflixIT" target="_blank" rel="noopener noreferrer">
          <Instagram size={22} />
        </a>
        <a href="https://x.com/NetflixIT" target="_blank" rel="noopener noreferrer">
          <Twitter size={22} />
        </a>
        <a href="https://www.youtube.com/channel/UCi_T2R1AzOCun4-PI4Or2ng" target="_blank" rel="noopener noreferrer">
          <Youtube size={22} />
        </a>
      </section>
      <section id="footer-list" className="container flex flex-col items-center mb-8">
        <ul className="grid grid-cols-4 gap-y-4 gap-x-24 w-max">
          {menu.map((element) => {
            console.log(element);
            return (
              <li key={element.id} className="w-max">
                <p className="text-[#aaa5a5] text-xs font-bold m-0 cursor-pointer hover:underline ">{element.name}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <h5 className="text-xs text-[#aaa5a5] w-[-webkit-fill-available] text-left ms-66">&copy; 1997 - {new Date().getFullYear()} Netflix, inc.</h5>
    </footer>
  );
}

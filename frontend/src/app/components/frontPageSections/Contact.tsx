import Link from "next/link";

export default function Contact() {

    return (
        <div>
        <h1 id="contact" className="font-semibold">
          CONTACT
        </h1>
        <p>For inquiries, please contact me at <Link href="mailto:mdj.hermansen@gmail.com" className="font-bold text-accent">mdj.hermansen@gmail.com</Link></p>
        <p>Also check out my <Link href="https://github.com/madshermansen" className="font-bold text-accent">Github</Link></p>
        </div>
        );
}
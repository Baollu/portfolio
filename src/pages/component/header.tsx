import Style from "../../styles/header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <section>
            <div>
                <Image src="/logo boris.png" alt="logo portfolio" width={500} height={300} />
            </div>
            <div>
                <p> hello </p>
            </div>
        </section>
    );
}
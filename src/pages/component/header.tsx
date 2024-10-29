import Style from "../../styles/header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <section className={Style.header}>
            <div style={{marginLeft: "20px"}}>
                <Image src="/logo boris.png" alt="logo portfolio" width={40} height={40} />
            </div>
                <div > Accueil </div>
                <div> Présentation</div>
                <div> Mes projets</div>
                <div> Obejectif Futur</div>
                <div> Mes compétences</div>
                <div>Contacter moi</div>
                <br></br>
        </section>
    );
}
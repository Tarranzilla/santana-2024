import Link from "next/link";
import Image from "next/image";

function toUrlValidString(str: string) {
    return encodeURIComponent(str);
}

const message = "Olá gostaria de agendar uma consulta relacionada à Ação de Revisão do PASEP.";

const BannerPASEP = () => {
    return (
        <div className="PASEP_Container Special_Service">
            <div className="Special_Service_Header">
                <h1 className="Special_Service_Title">Ação de Revisão do PASEP</h1>
                <h2 className="Special_Service_Subtitle">Quem tem Direito ?</h2>
            </div>

            <div className="Special_Service_List">
                <h4 className="Special_Service_List_Item">Policiais Civis, Federais e Militares</h4>
                <h4 className="Special_Service_List_Item">Membros das Forças Armadas</h4>
                <h4 className="Special_Service_List_Item">Bombeiros</h4>
                <h4 className="Special_Service_List_Item">Funcionários Públicos</h4>
                <h4 className="Special_Service_List_Item">Pensionistas e Herdeiros</h4>
            </div>
            <Link
                href={`https://wa.me/+554198077135?text=${toUrlValidString(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="PASEP_Btn Banner_Action_Btn"
            >
                Agende uma Consulta <span className="material-icons">event_available</span>
            </Link>
            <div className="Special_Service_BG_Image_Container">
                <Image className="Special_Service_BG_Image" src={"/expertise_imgs/PASEP3.png"} width={600} height={300} alt="PASEP" />
            </div>
        </div>
    );
};

export default BannerPASEP;

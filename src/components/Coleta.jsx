import { Image } from "antd";
import { LuImage } from "react-icons/lu";

const Coleta = ({ nome, preco, foto, precoConcorrente, status, updatedAt, shadow = true }) => {

    function percent(p, pc) {
        if (pc == 0) { return <div className="text-stone-500 font-bold text-lg pl-2">0%</div> }
        let result = ((pc - p) / p) * 100;
        if (result > 0) {
            return <div className="text-green-600 font-bold text-lg pl-2">+{result.toFixed(1)}%</div>
        } else {
            return <div className="text-red-600 font-bold text-lg pl-2">{result.toFixed(1)}%</div>
        }
    }

    return (
        <div className={`bg-white rounded-xl ${shadow && 'shadow-lg p-3'} flex items-center`}>
            {
                foto ? (
                    <Image src={foto} className="w-12.5! h-12.5! object-cover" />
                ) : (
                    <div className="w-12.5 h-12.5 rounded bg-stone-200 font-bold flex justify-center items-center text-stone-400">
                        <LuImage size={24} />
                    </div>
                )
            }
            <div className="leading-4 pl-3 flex-1">
                <h5 className="text-lg line-clamp-1">{nome}</h5>
                <h6 className="text-xs">Preço base: R$ {Number(preco).toFixed(2)}</h6>
                {
                    !precoConcorrente && status ? (
                        <h6 className="text-xs">{status}</h6>
                    ) : (
                        <h6 className="text-xs">Preço coletado : R$ {Number(precoConcorrente).toFixed(2)}</h6>
                    )
                }
                <h6 className="text-xs">Data da coleta: {updatedAt?.split("T")[0].split("-").reverse().join("/")}</h6>
            </div>
            {percent(Number(preco), Number(precoConcorrente))}
        </div >
    );
}

export default Coleta;
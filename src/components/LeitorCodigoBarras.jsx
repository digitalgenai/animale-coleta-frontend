import { Scanner } from "@yudiel/react-qr-scanner";
import { Button } from "antd";
import { LuX } from "react-icons/lu";

const LeitorCodigoBarras = ({ onScan, onClose }) => {
    return (
        <div className="flex flex-col gap-4 h-full">
            {/* Scanner */}
            <div className="flex-1 rounded-xl overflow-hidden bg-black">
                <Scanner
                    constraints={{ facingMode: "environment" }} // câmera traseira
                    onScan={(result) => {
                        if (!result) return;

                        // quando vier array
                        if (Array.isArray(result)) {
                            const codigo = result[0]?.rawValue || result[0]?.value;
                            if (codigo) onScan(codigo);
                            return;
                        }

                        // quando vier objeto
                        const codigo = result.rawValue || result.value;
                        if (codigo) {
                            onScan(codigo);
                        }
                    }}
                    onError={(error) => {
                        console.error("Erro ao ler código:", error);
                    }}
                />
            </div>

            {/* Botão fechar */}
            <Button
                type="primary"
                size="large"
                icon={<LuX />}
                onClick={onClose}
            >
                Fechar
            </Button>
        </div>
    );
};

export default LeitorCodigoBarras;

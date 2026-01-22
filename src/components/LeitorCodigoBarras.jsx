import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const LeitorCodigoBarras = ({ onScan, onClose }) => {
    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            "barcode-reader",
            {
                fps: 10,
                qrbox: { width: 250, height: 150 },
                rememberLastUsedCamera: true
            },
            false
        );

        scanner.render(
            (codigo) => {
                onScan(codigo);
                scanner.clear();
            },
            () => { }
        );

        return () => {
            scanner.clear().catch(() => { });
        };
    }, []);

    return <div id="barcode-reader" className="w-full" />;
};

export default LeitorCodigoBarras;

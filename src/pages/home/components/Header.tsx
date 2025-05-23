import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

const Header: React.FC = () => {
    const [showStats, setShowStats] = useState(false);
    const [showHowToPlay, setShowHowToPlay] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <>
            <header className="w-10/12 text-gray-200 mx-auto flex justify-between items-center px-6 py-4 bg-[#131219] border-gray-800 shadow-2xl shadow-[#442E60] z-50 rounded-lg">

                <h1 className="text-3xl font-anta font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C6007E] via-[#C20051] to-[#880257] select-none">
                    LUMINLE
                </h1>

                <nav className="flex items-center gap-6 text-sm ">
                    <button
                        onClick={() => setShowStats(true)}
                        className="hover:text-green-400 transition flex gap-2"
                    >
                        <IoStatsChart size={22} /> Statistics
                    </button>
                    <button
                        onClick={() => setShowHowToPlay(true)}
                        className="hover:text-blue-400 transition flex gap-2"
                    >
                        <BsFillInfoCircleFill size={22} /> How to play?
                    </button>
                    <button
                        onClick={() => setShowSettings(true)}
                        className="hover:text-orange-400 transition flex gap-2"
                    >
                        <IoSettings size={22} /> Settings
                    </button>
                    <a
                        href="https://github.com/Luis3Fernando/Luminle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition flex gap-2"
                        title="Ver código en GitHub"
                    >
                        <FaGithub size={22} /> Code
                    </a>
                </nav>
            </header>

            {/* Modal: Estadísticas */}
            {showStats && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white p-6 rounded-xl w-full max-w-md shadow-2xl">
                        <h2 className="text-xl font-semibold mb-4">📊 Estadísticas</h2>
                        <p>⚡ Palabras acertadas: ...</p>
                        <p>🕒 Tiempo total: ...</p>
                        <p>🏆 Récord: ...</p>
                        <button
                            onClick={() => setShowStats(false)}
                            className="mt-4 bg-green-400 hover:bg-green-600 transition px-4 py-2 rounded text-white"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal: Cómo jugar */}
            {showHowToPlay && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white p-6 rounded-xl w-full max-w-md shadow-2xl">
                        <h2 className="text-xl font-semibold mb-4">❓ Cómo jugar</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>Escribe una palabra de 5 letras.</li>
                            <li>Tienes 6 intentos.</li>
                            <li><span className="text-green-400">Verde</span>: letra correcta en lugar correcto.</li>
                            <li><span className="text-yellow-300">Amarillo</span>: letra correcta, lugar incorrecto.</li>
                            <li><span className="text-red-500">Rojo</span>: letra incorrecta.</li>
                        </ul>
                        <button
                            onClick={() => setShowHowToPlay(false)}
                            className="mt-4 bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded text-white"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            {showSettings && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white p-6 rounded-xl w-full max-w-md shadow-2xl">
                        <h2 className="text-xl font-semibold mb-4">Ajustes</h2>
                        <p>⚡ Palabras acertadas: ...</p>
                        <p>🕒 Tiempo total: ...</p>
                        <p>🏆 Récord: ...</p>
                        <button
                            onClick={() => setShowSettings(false)}
                            className="mt-4 bg-orange-400 hover:bg-orange-600 transition px-4 py-2 rounded text-white"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

        </>
    );
};

export default Header;

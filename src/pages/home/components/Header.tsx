import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { SiRedcandlegames } from "react-icons/si";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaFlag } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TbCircleLetterLFilled } from "react-icons/tb";
import { FaGamepad } from "react-icons/fa6";
import { GiPlainCircle } from "react-icons/gi";
import * as motion from "motion/react-client";

const ball = {
    backgroundColor: "transparent",
    width: 'auto'
}

const Header: React.FC = () => {
    const [showStats, setShowStats] = useState(false);
    const [showHowToPlay, setShowHowToPlay] = useState(false);

    return (
        <>
            <header className="w-10/12 text-gray-200 mx-auto flex justify-between items-center px-6 py-4 bg-[#131219] border-gray-800 shadow-2xl shadow-primary z-50 rounded-lg">

                <h1 className="text-3xl font-anta font-extrabold text-primary select-none">
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

            {showStats && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        style={ball}>

                        <div className="bg-gray-900 relative text-white p-6 rounded-xl w-96 max-w-md shadow-2xl shadow-green-300">
                            <SiRedcandlegames className='mx-auto' size={80} />
                            <h2 className="text-2xl text-center mt-5 font-semibold mb-6">Statistics</h2>
                            <p className='flex text-xl items-center gap-2'><TbCircleLetterLFilled /> Right words: ...</p>
                            <p className='flex text-xl items-center gap-2'> <MdOutlineAccessTimeFilled /> Total time: ...</p>
                            <p className='flex text-xl items-center gap-2'><FaFlag /> Record: ...</p>
                            <button
                                onClick={() => setShowStats(false)}
                                className="text-gray-700 absolute right-2 top-2 cursor-pointer hover:text-gray-600 transition"
                            >
                                <IoIosCloseCircleOutline size={40} />
                            </button>
                        </div>
                    </motion.div>

                </div>
            )}

            {showHowToPlay && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        style={ball}>

                        <div className="bg-gray-900 relative text-white p-6 rounded-xl w-96 max-w-max shadow-2xl shadow-blue-300">
                            <FaGamepad className='mx-auto' size={80} />
                            <h2 className="text-2xl text-center mt-5 font-semibold mb-6">How to play?</h2>
                            <p className='flex text-lg items-center gap-2 mb-3'><GiPlainCircle />you have 6 tries to find the word</p>
                            <p className='flex text-lg items-center gap-2 mb-3'><GiPlainCircle />Increases the time by getting it right</p>
                            <p className='flex text-lg items-center gap-2'><GiPlainCircle />Use the keyboard to type</p>
                            <button
                                onClick={() => setShowHowToPlay(false)}
                                className="text-gray-700 absolute right-2 top-2 cursor-pointer hover:text-gray-600 transition"
                            >
                                <IoIosCloseCircleOutline size={40} />
                            </button>
                        </div>
                    </motion.div>

                </div>
            )}
        </>
    );
};

export default Header;

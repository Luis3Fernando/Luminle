import { useEffect, useState } from 'react';
import HeaderGame from "./components/HeaderGame";
import LogicGame from "./components/LogicGame";
import LoadingScreen from './components/LoadingScreen';

function GamePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }
  return (
    <div className="flex flex-col w-full h-screen">
      <section className="h-30 w-full">
        <HeaderGame>
        </HeaderGame>
      </section>
      <section className="h-full w-full">
        <LogicGame></LogicGame>
      </section>
    </div>
  )
}

export default GamePage

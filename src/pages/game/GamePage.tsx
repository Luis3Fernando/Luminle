import HeaderGame from "./components/HeaderGame"
import LogicGame from "./components/LogicGame"

function GamePage() {
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

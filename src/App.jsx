import './App.css'
import Card from './components/card.jsx'

function App() {

  return (
    <>
      <div className='border-2 p-1.5 grid gap-2 grid-cols-2 justify-items-center' >
        <Card image="https://i.pinimg.com/1200x/68/18/8d/68188d6e515e2196a2f2e506cc4e1a33.jpg" title="Magari Isaki" text="The Quick Brown Fox Jumps Over The Lazy Dog"/>

        <Card image="https://i.pinimg.com/736x/9e/fa/79/9efa79625639b129f08012a2a585a9c2.jpg" title="Hiro Segawa" text="The Quick Brown Fox Jumps Over The Lazy Dog"/>
      </div>

    </>
  )
}

export default App

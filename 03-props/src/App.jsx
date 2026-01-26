import Card from "./Card"


const App = () => {
  return (
    
      <div className="parent">
        <Card username='aman' age={25} photo="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" />
        <Card username='omi' age={20} photo="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80" />
        <Card username='pk' age={21} photo="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" />

      </div>
        )
}

export default App

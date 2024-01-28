import Hero from "../components/Hero"
import HeroComponent from "../components/HeroComponent";

export default function Home() {
  const data = [
    { id: 1, name: 'Michael' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Alice' },
    { id: 5, name: 'Sophia' },
    { id: 6, name: 'Jane' },
    { id: 7, name: 'Charlie' },
    { id: 8, name: 'David' },
    { id: 9, name: 'Michael' },
    { id: 10, name: 'Alice' }
  ];
  return (
   <div>
    <Hero/>
    <div className="grid grid-cols-3 grid-flow-row">
    {data.map((d)=>{
      return(
        <HeroComponent key={d.id}/>
      )
    })}
    </div>
    
    

   </div>
  )
}

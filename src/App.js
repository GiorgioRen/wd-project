import Card from './mycard';
import Navbar from './mybar';


function App() {
  return (
    <>
      <Navbar />
      <Card 
        image="http://images6.fanpop.com/image/photos/35200000/Dog-dogs-35247719-3706-2480.jpg"
        title="sas"
        text="TUO PADRE"/>
      <Card 
        image="http://3.bp.blogspot.com/_LDF9z4ZzZHo/TQALfYxDv8I/AAAAAAAAAKE/bSd9BAPyyfU/s1600/1600DOG_13018.jpg"
        text="Maïonęysē"
        title="Maïonęysē"/>
      <Card image="http://images6.fanpop.com/image/photos/32500000/Dog-dogs-32509010-3888-2592.jpg"/>
      <Card image="http://images6.fanpop.com/image/photos/35200000/Dog-dogs-35247719-3706-2480.jpg"/>
    </>
  );
}

export default App;

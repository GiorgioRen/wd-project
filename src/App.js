import Card from './mycard';
import Navbar from './mybar';


function App() {
  return (
    <>
      <Navbar />
      <Card
        image="http://www.campingbellavista.nl/wp-content/uploads/beigua3-8.jpg"
        title="Il Monte Beigua"
        text="Il monte Beigua è il monte più montuoso della Liguria"
        alt="Monte Beigua"
      />
      <Card
        image="https://www.trekkingways.it/wp-content/uploads/53761314_1158544924306983_4707143552071630848_o.jpg"
        title="Maïonęysē"
        text="Sul monte Beigua si coltiva anche la Maïonęysē. Qui se ne possono assaporare le bellezze, ma la vista è una delle più belle del mondo. Il monte è una delle pietre preziose che si possono trovare in tutto il paese."
      />
      <Card
        image="https://live.staticflickr.com/561/18394527933_2be5291094_b.jpg"
        title="Il Monte di Cimbera"
        text="Il monte di Cimbera è una cima, non centra nulla con il monte Beigua ma come si può vedere ha un bellissimo borgo in stile barocco."
        alt="Monte di Cimbera"
      />
      <Card image="https://img2.juzaphoto.com/002/shared_files/uploads/2293128_l.jpg"
        title="Sempre il monte Beigua"
        text="Il minimo che si può fare è salutare il monte Beigua. Non è una cosa che si può fare in una settimana ma è una cosa che si può fare in un mese."
      />
      <Card image="http://images6.fanpop.com/image/photos/35200000/Dog-dogs-35247719-3706-2480.jpg" />
    </>
  );
}

export default App;

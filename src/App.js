import './App.css';
import Artist from './Artist';

const artists = [
    { _id: 234567890, name: 'Scar', image: 'Scar-Mkadinali-RbeVVolm.jpg', age: 27, bestLine: 'matwa twa msupa wako akipewa kiboko...'},
    { _id: 987654689, name: 'Sewer sydr',  image: 'Scar-Mkadinali-RbeVVolm.jpg', age: 28, bestLine: 'Tunaguza bila ruhusa...'},
    { _id: 123456789, name: 'Mad Munga',  image: 'Scar-Mkadinali-RbeVVolm.jpg', age: 30, bestLine: 'Mad Munga mjinga niko zone...'},
    { _id: 456789654, name: 'Dyan Code',  image: 'Scar-Mkadinali-RbeVVolm.jpg', age: 29, bestLine: '...Napenda a guy like Kanyari...he getting that paper..'},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wakadinali</h1>
      </header>

      <main>
        {
            artists.map(({_id, name, age, image, bestLine}) => {
                return <Artist key={_id} image={image} name={name} age={age} bestLine={bestLine} />
            })
        }
      </main>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import DataTable from './components/DataTable';
import GivenData from './components/data';

const App = () => {
  const data = GivenData;
  // console.log(GivenData[1]);
  // console.log(data[0]);

  return (
    <div>
      <h1>Data Table</h1>
      <DataTable data={data} />
    </div>
  );
};

export default App;
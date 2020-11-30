import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Route} from 'react-router-dom'
import {Container, makeStyles} from '@material-ui/core'
import CollapsibleTable from './components/CollapsibleTable.js'
import InventoryPage from './components/InventoryTable.js'
import MatUIEXColTable from './components/MatUIEXCollapsibleTable.js'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex,'
  }
}))

function App() {

  const classes = useStyles;

  return (
    <div className="App">
      {/* <header className="App-header">
      <a
          className="Collapsible Table"
          href="localhost:3001//component/collapsible-table"
          target="CollapsibleTable"
          rel="noopener noreferrer"
        >
         Collapsible Table
        </a>
        <a
          className="Inventory Table"
          href="component/inventory-table"
          target="InventoryTable"
          rel="noopener noreferrer"
        >
         Inventory Table
        </a>
      </header> */}
      <div data-testid='demoDiv' className={classes.root}>
        <Container>
          {/* <Route path='/component/collapsible-table'>
            <MatUIEXColTable/>
          </Route> */}
          <Route path='/component/inventory-table'>
            <InventoryPage/>
          </Route>
        </Container>
       </div>
    </div>
  );
}

export default App;

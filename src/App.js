import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import TITLE_QUERY from './Welcomepage/index';


function App() {
  return (
    <Query query={TITLE_QUERY}>
      {({ loading, error, data }) => {

          if (loading) return <div>Fetching title.....</div>
          if (error)   return <div>Error fetching title</div>

          const items = data.welcomes;
          return (
            <div className="row">
              {items.map(item => 
                <div key={item.id}>
                  {item.hero}
                </div>
                )}
            </div>
          )
        }}
    </Query>
  );
}

export default App;

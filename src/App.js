import React, {Fragment, useState, useEffect} from 'react';
import NavBar from 'components/layout/NavBar';
import Table from 'components/layout/Table';
import datainfo from 'battery-data';



const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const res = datainfo();
    setData(res);
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Table dataInfo={data} />
    </Fragment>
  );
}

export default App;

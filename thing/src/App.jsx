const textures = [
  {id: 1, title: 'Wood'},
  {id: 2, title: 'Metal'},
  {id: 3, title: 'Paper'},
  {id: 4, title: 'Stone'}
]

function App() {



  return (
    <DataContext.Provider value={{
      
    }}>
      <div className="container">
        <div className="bin">
          <div className="box-1">
            {/* <Create />
            <Bin /> */}
          </div>
          <div className="box-2">
            <List />
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
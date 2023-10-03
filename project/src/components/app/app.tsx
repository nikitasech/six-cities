import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  propertyCount: number;
}

function App({ propertyCount }: AppProps): JSX.Element {
  return <MainScreen propertyCount={propertyCount} />;
}

export default App;

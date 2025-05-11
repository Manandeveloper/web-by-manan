import AppRoutes from "./routes/AppRoutes";
import PageBar from './components/PageBar/PageBar'
import MouseEffect from "./components/MouseEffect/MouseEffect";
import Loader from "./components/Loader/Loader";


function App(){
  return(
    <div>
      <Loader/>
      <PageBar/> 
      <MouseEffect/>
      <AppRoutes/>
    </div>
  );
}
export default App;
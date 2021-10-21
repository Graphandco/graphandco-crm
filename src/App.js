import "./App.css";
import MainSidebar from "./components/Sidebar/MainSidebar";
import { GlobalProvider } from "./components/GlobalContext";

function App() {
   return (
      <GlobalProvider>
         <MainSidebar />
      </GlobalProvider>
   );
}

export default App;

import { StatusBar } from "expo-status-bar";
import Login from "./screens/Login";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <>
      <PaperProvider>
        <Login/>
      </PaperProvider>
    </>
  );
}

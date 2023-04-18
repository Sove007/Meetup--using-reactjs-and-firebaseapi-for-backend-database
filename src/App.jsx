import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Allmeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Allmeetups />} />
        <Route exact path="/new-meetup" element={<NewMeetup />} />
        <Route exact path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

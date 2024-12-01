import { Box, Container } from "@chakra-ui/react";
import {
  Navigate,
  NavigationType,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import UserPage from "./Pages/UserPage";
import PostPage from "./Pages/PostPage";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtoms";
import UpdateProfilePage from "./Pages/UpdateProfilePage";
import CreatePost from "./components/CreatePost";
import ChatPage from "./Pages/ChatPage";
import SettingsPage from "./Pages/SettingsPage";

const App = () => {
  const user = useRecoilValue(userAtom);
  const { pathname } = useLocation();
  return (
    <Box position={"relative"} w={"full"}>
      <Container
        maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}
      >
        <Header />
        <Routes>
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!user ? <AuthPage /> : <Navigate to="/" />}
          />
          <Route
            path="/update"
            element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/:username"
            element={
              user ? (
                <>
                  <UserPage />
                  <CreatePost />
                </>
              ) : (
                // <UserPage />
                <Navigate to="/auth" />
              )
            }
          />
          <Route path="/:username/post/:pid" element={<PostPage />} />
          <Route
            path="/chat"
            element={user ? <ChatPage /> : <Navigate to={"/auth"} />}
          />
          <Route
            path="/setting"
            element={user ? <SettingsPage /> : <Navigate to={"/auth"} />}
          />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;

import { Routes, Route } from "react-router";
import { Landing, Error, Register, ProtectedRoute } from "./pages";
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Stats />} />
        <Route path="all-jobs" element={<AllJobs />} />
        <Route path="add-job" element={<AddJob />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="landing" element={<Landing />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;

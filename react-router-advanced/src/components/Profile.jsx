import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h3>Please select an option.</h3>} />
        <Route path="/profileDetails" element={<ProfileDetails />} />
        <Route path="/profileSettings" element={<ProfileSettings />} />
      </Routes>
      <h1>Hi My name is: David</h1>
      <h3>22 Years Old</h3>
    </>
  );
}

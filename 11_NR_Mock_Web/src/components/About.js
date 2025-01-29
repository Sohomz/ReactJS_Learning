import User from "./User";
import UserClass from "./UserClass";

export default About = () => {
  return (
    <div>
      <h1>This is About page</h1>
      <User name={"Sohom Das (function)"} />
      <UserClass name={"Sohom Das (class)"} />
    </div>
  );
};

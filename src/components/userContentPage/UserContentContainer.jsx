import UserContent from "./UserContent";

const User = () => {
  const user = {
    name: 'Jan',
    surname: 'Kowalski',
    age: 18,
  }
  return (
    <UserContent
      user={user}
    />
  );
}

export default User;
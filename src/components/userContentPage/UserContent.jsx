
function User({user}) {
  return (
    <section>
      <div>
        {user.name}
      </div>
      <div>
        {user.surname}
      </div>
      <div>
        {user.age}
      </div>
    </section>
  );
}

export default User;
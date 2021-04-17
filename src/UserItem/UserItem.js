function UserItem(props) {
  let { name, picture } = props;

  return (
    <div>
      <div>{name.title} {name.first} {name.last}</div>
    </div>
  );
}

export default UserItem;

function UserItem(props) {
  let { name, picture } = props;

  return (
    <div>
      <div>{name}</div>
    </div>
  );
}

export default UserItem;

import './UserItem.css';

function UserItem(props) {
  let { paginationListItemObj } = props;
  let { name, picture } = paginationListItemObj;

  return (
      <div
        className="user-item-root"
      >
        <img src={picture.medium} alt={name.first} />
        <div>
          {name.title} {name.first} {name.last}
        </div>
      </div>
  );
}

export default UserItem;

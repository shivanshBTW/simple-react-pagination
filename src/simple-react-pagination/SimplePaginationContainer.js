function SimplePaginationContainer(props) {
  let {
    pageNumber,
    itemList,
    setPageNumber,
    maxPages,
    component: Component
  } = props;
  return (
    <div>
      {itemList.map((itemObj, index) => {
        return (
          <div>
            <Component name={itemObj.name} picture={itemObj.picture} />
          </div>
        );
      })}
    </div>
  );
}

export default SimplePaginationContainer;

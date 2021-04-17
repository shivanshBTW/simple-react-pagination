import clsx from 'clsx';

function SimplePaginationContainer(props) {
  let {
    buttonCount = 10,
    pageNumber,
    itemList = [],
    setPageNumber,
    maxPages,
    component: Component,
    prevButtonClass = 'simple-pagination-prev-button',
    nextButtonClass = 'simple-pagination-next-button',
    selectedButtonClass = 'simple-pagination-selected-button',
  } = props;
  console.log(itemList);

  let handlePrev = () => {
    setPageNumber(pageNumber > 0 ? pageNumber - 1 : 0);
  };

  let handleNext = () => {
    setPageNumber(pageNumber < maxPages ? pageNumber + 1 : maxPages);
  };

  let handleSetPage = (page) => () => {
    setPageNumber(page);
  };
  
  return (
    <div>
      <div className="simple-pagination-list">
        {itemList.map((itemObj, index) => {
          return (
            <div key={index}>
              <Component name={itemObj.name} picture={itemObj.picture} />
            </div>
          );
        })}
      </div>

      <div className={'simple-pagination-button-list-container'}>
        <button onClick={handlePrev} className={clsx(prevButtonClass)}>
          Prev
        </button>
        {Array.from(new Array(buttonCount)).map((a, index) => {
          let centerButtonIndex = Math.floor(buttonCount/2);
          let centerButtonValue = pageNumber;
          let difference = centerButtonIndex - index;
          let buttonValue = centerButtonValue - difference;
          // debugger;
          if(buttonValue>=0){
            return (
              <button
                key={index}
                onClick={handleSetPage(buttonValue)}
                className={clsx(nextButtonClass, {
                  [selectedButtonClass]: buttonValue === pageNumber,
                })}
              >
                {buttonValue + 1}
              </button>
            );
          }
        })}
        <button onClick={handleNext} className={clsx(nextButtonClass)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default SimplePaginationContainer;

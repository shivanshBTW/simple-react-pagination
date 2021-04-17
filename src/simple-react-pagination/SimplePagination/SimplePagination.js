import clsx from 'clsx';
import PropTypes from 'prop-types';
import uuid from 'uuid/dist/v4';
import './pagination-component.css';

function SimplePagination(props) {
  let {
    buttonCount = 10,
    pageNumber = 0,
    itemList = [],
    setPageNumber = () => null,
    maxPages = 100,
    component: Component,
    pageRootClass = 'simple-pagination-list-root',
    paginationListClass = 'simple-pagination-list',
    paginationItemContainerClass = 'simple-pagination-item-container',
    prevButtonClass = 'simple-pagination-prev-button',
    prevButtonChild = 'Prev',
    pageSelectButtonClass = 'simple-pagination-page-select-button',
    nextButtonClass = 'simple-pagination-next-button',
    nextButtonChild = 'Next',
    selectedButtonClass = 'simple-pagination-selected-button',
  } = props;

  let handlePrev = () => {
    setPageNumber(pageNumber > 0 ? pageNumber - 1 : 0);
  };

  let handleNext = () => {
    setPageNumber(pageNumber < maxPages - 1 ? pageNumber + 1 : maxPages - 1);
  };

  let handleSetPage = (page) => () => {
    setPageNumber(page);
  };

  return (
    <div className={clsx(pageRootClass)}>
      <div className={clsx(paginationListClass)}>
        {itemList.map((itemObj, index) => {
          return (
            <div key={uuid()} className={clsx(paginationItemContainerClass)}>
              <Component paginationListItemObj={itemObj} />
            </div>
          );
        })}
      </div>

      <div className={'simple-pagination-button-list-container'}>
        <button onClick={handlePrev} className={clsx(prevButtonClass)}>
          {prevButtonChild}
        </button>
        {Array.from(new Array(buttonCount)).map((a, index) => {
          let centerButtonValue = pageNumber;
          let centerButtonIndex = Math.floor(buttonCount / 2);
          let difference = centerButtonIndex - index;
          let buttonValue = centerButtonValue - difference;

          if (buttonValue >= 0 && buttonValue < 100) {
            return (
              <button
                key={uuid()}
                onClick={handleSetPage(buttonValue)}
                className={clsx(pageSelectButtonClass, {
                  [selectedButtonClass]: buttonValue === pageNumber,
                })}
              >
                {buttonValue + 1}
              </button>
            );
          }
        })}
        <button onClick={handleNext} className={clsx(nextButtonClass)}>
          {nextButtonChild}
        </button>
      </div>
    </div>
  );
}

SimplePagination.propTypes = {
  buttonCount: PropTypes.number,
  pageNumber: PropTypes.number.isRequired,
  itemList: PropTypes.array.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  maxPages: PropTypes.number,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  pageRootClass: PropTypes.string,
  paginationListClass: PropTypes.string,
  paginationItemContainerClass: PropTypes.string,
  prevButtonClass: PropTypes.string,
  prevButtonChild: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  pageSelectButtonClass: PropTypes.string,
  nextButtonClass: PropTypes.string,
  nextButtonChild: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  selectedButtonClass: PropTypes.string,
};

export default SimplePagination;

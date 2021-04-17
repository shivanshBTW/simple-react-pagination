
# SimplePagination Docs
This is the documentation for the Simple Pagination Component which is present in 'src/simple-react-pagination/SimplePagination'. It has no default styling applied to it to increase versatility between use cases. Users can either use the default classes to style it or provider their own class names to style each element of the pagination component.

to run a demo of the app, run the following commands in a terminal
```
git clone https://github.com/shivanshBTW/simple-react-pagination
cd simple-react-pagination
yarn install
yarn start
```
  

  

## PROPS

### buttonCount

The number of buttons that will appear

default 10,

  

### pageNumber

The page number of the current page (can be maintained in a state)

default  0,

  

### setPageNumber

callback function to set the page number,

  

### itemList

The list of items that is received based on the page number

default  [ ],

  

### maxPages

default  100,

  

### component

A react component( say listItemComponent ) that will be used to display an item in the list, the list will be populated from the itemList prop and it’s object will be passed as paginationListItemObj to the “listItemComponent”

  

## CLASSNAMES OF VARIOUS ELEMENTS 
### ( TO BE PASSED AS PROPS ) ( INDIVIDUALLY OPTIONAL )

### pageRootClass

default ’simple-pagination-list-root',

  

### paginationListClass

default  'simple-pagination-list',

  

### paginationItemContainerClass

default 'simple-pagination-item-container',

  

### prevButtonClass

default  'simple-pagination-prev-button',

  

### prevButtonChild

default  'Prev',

  

### pageSelectButtonClass
default  'simple-pagination-page-select-button',

  

### nextButtonClass
default  'simple-pagination-next-button',

  

### nextButtonChild
default 'Next',

  

### selectedButtonClass
default 'simple-pagination-selected-button',

  

P.S. : users can either introduce their own class or use the default classes to style their component
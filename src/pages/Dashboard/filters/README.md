# ScannersFilters component

The purpose of the filter is to allow the user a focused view of the scanners in which he is interested.
The graphs can be filtered by fallowing options: ProductName, MicroserviceName, BranchName, fromDate, ToDate and Category.
(Category means the type of scanner, for example: TEST REPORT, SECURITY etc.)
The selected filter are saved in a state of redux in order to insure a true state in all component and impact all relevant components in application.
Drop Lists with values of relevant selection options are present in select buttons
The productName's drop List is the first one to be loaded when loading the dashboard component ,and the fallowing ones are each loaded separately when righter selection is selected.
For ex: after productName is selected only then will the microserviceName dropList load,
and after selecting a microserviceName the branchName dropList will load.
Any selection of the a filter value affects the scanners that will be displayed in the graphs.

## The Functions in a component

      Function that return a dropList from server

### getAllBranchesNamesFromServer,

### getAllProductsNamesFromServer,

input: productName

### getAllServicesNamesFromServer,

input: productName, serviceName

      Function that dispatch a selected filter to redux

### setSelectedBranchName,

input: branchName

### setSelectedCategory,

input: category

### setSelectedFromDate,

input: fromDate

### setSelectedProductName,

input: productName

### setSelectedServiceName,

input: serviceName

### setSelectedToDate,

input: toDate

      Functions that normalize the date to the format of YYYY-MM-DD

### formatDate

input: Date
output: string

      A functions that updates the selected date in a redux

### handleStartDateChange

input: Date | null

### handleEndDateChange

input: Date | null

// import different resource with its methods
import transactions from './endpoints/transactions.js'
import customers from './endpoints/customers.js'
import transactionSplits from './endpoints/transaction_splits.js'

// define all existing resources here
const resources = {
  transactions,
  customers,
  transactionSplits
}

export default resources
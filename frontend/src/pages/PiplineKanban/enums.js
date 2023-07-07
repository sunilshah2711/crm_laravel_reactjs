export let ColumnType

;(function(ColumnType) {
  ColumnType["TO_DO"] = "Todo"
  ColumnType["IN_PROGRESS"] = "In Progress"
  ColumnType["BLOCKED"] = "Blocked"
  ColumnType["COMPLETED"] = "Completed"
})(ColumnType || (ColumnType = {}))

export let ItemType

;(function(ItemType) {
  ItemType["TASK"] = "Task"
})(ItemType || (ItemType = {}))
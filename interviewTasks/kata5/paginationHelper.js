//https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript
function PaginationHelper(collection, itemsPerPage) {
  (this.collection = collection),
    (this.len = this.collection.length),
    (this.ipp = itemsPerPage);
}
PaginationHelper.prototype.itemCount = function () {
  return this.len;
};
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.len / this.ipp);
};
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  var pc = this.pageCount();
  return pc <= pageIndex || pageIndex < 0
    ? -1
    : pc - 1 == pageIndex
    ? this.len % this.ipp
    : this.ipp;
};
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  return this.len <= itemIndex || itemIndex < 0
    ? -1
    : Math.floor(itemIndex / this.ipp);
};

import React , { Component, PropTypes  } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const propTypes = {
  dataVal: PropTypes.number,
  tableHeight: PropTypes.number,
  noDataMsg: PropTypes.string,
  tableHeight: PropTypes.number,
  scrollTop: PropTypes.string,
  dataSort: PropTypes.bool,
  defaultSortName : PropTypes.string,
  defaultSortOrder : PropTypes.string,
  filterType : PropTypes.string,
  filterDelay: PropTypes.number,
  selectRowType : PropTypes.string,
  unselectable : PropTypes.array,
  sizePerPageList : PropTypes.array,
  selected : PropTypes.array,
  showOnlySelected : PropTypes.bool,
  pagination : PropTypes.bool,
  sizePerPage: PropTypes.number,
  pageStartIndex: PropTypes.number,
  paginationSize: PropTypes.number,
  page: PropTypes.number,
  prePage: PropTypes.string,
  nextPage: PropTypes.string,
  firstPage: PropTypes.string,
  lastPage: PropTypes.string,
  paginationPosition: PropTypes.string,
  search : PropTypes.bool,
  multiColumnSearch : PropTypes.bool,
  exportCSV : PropTypes.bool,
  insertRow : PropTypes.bool
};

const defaultProps = {
  dataVal: 0,
  tableHeight: null,
  noDataMsg: 'Table contains no data',
  tableHeight: null,
  scrollTop: null,
  dataSort: null,
  defaultSortName: null,
  defaultSortOrder: null,
  filterType: null,
  filterDelay : 1000,
  selectRowType : null,
  unselectable: null,
  selected: null,
  showOnlySelected: false,
  pagination : false,
  sizePerPage: null,
  pageStartIndex: null,
  paginationSize: null,
  prePage:null,
  nextPage:null,
  firstPage:null,
  lastPage:null,
  paginationPosition: null,
  page: null,
  sizePerPageList: null,
  search: false,
  multiColumnSearch: false,
  exportCSV: false,
  insertRow: false
};

function addProducts(quantity) {
  const products = [];
  const startId = products.length;
  const endDate = new Date();
  const startDate = new Date(2015, 0, 1);
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i,
      inStockDate: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
    });
  }
  return products;
}

function productNames(quantity){
  const productNames = [];
  const startId = productNames.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    productNames.push(
      'Item name ' + id
    );
  }
  return productNames;
}

function dateFormatter(cell, row) {
  return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
}


function afterSearch(searchText, result) {
  console.log('Your search text is ' + searchText);
  console.log('Result is:');
  for (let i = 0; i < result.length; i++) {
    console.log('Fruit: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
  }
}

class BootstrapTableView extends Component {
  csvFormatter(cell, row) {
    return `${row.id}: ${cell} USD`;
  }

  onAfterInsertRow(row) {
    let newRowStr = '';

    for (const prop in row) {
      newRowStr += prop + ': ' + row[prop] + ' \n';
    }
    alert('The new row is:\n ' + newRowStr);
  }

  render() {
    const {
      dataVal,
      noDataMsg,
      tableHeight,
      scrollTop,
      dataSort,
      defaultSortName,
      defaultSortOrder,
      filterType,
      filterDelay,
      selectRowType,
      unselectable,
      selected,
      showOnlySelected,
      pagination,
      sizePerPage,
      pageStartIndex,
      paginationSize,
      prePage,
      nextPage,
      firstPage,
      lastPage,
      paginationPosition,
      page,
      sizePerPageList,
      search,
      multiColumnSearch,
      exportCSV,
      insertRow
    } = this.props;

    this.options = {
      noDataText: noDataMsg,
      defaultSortName: defaultSortName,
      defaultSortOrder: defaultSortOrder,
      sizePerPage: sizePerPage,
      pageStartIndex: pageStartIndex,
      paginationSize: paginationSize,
      prePage: prePage,
      nextPage: nextPage,
      firstPage: firstPage,
      lastPage: lastPage,
      paginationPosition: paginationPosition,
      page: page,
      sizePerPageList: sizePerPageList,
      afterInsertRow: this.onAfterInsertRow
    };

    this.filter = {
      type : filterType,
      delay: filterDelay,
      options: productNames(dataVal)
    };

    this.selectRowOptions = {
      mode: selectRowType,
      unselectable : unselectable,
      selected: selected,
      showOnlySelected: showOnlySelected
    }

    return (
      <BootstrapTable
        data={ addProducts(dataVal) }
        options = { this.options }
        height = {tableHeight}
        scrollTop ={ scrollTop }
        selectRow = {this.selectRowOptions}
        pagination = {pagination}
        search = { search }
        multiColumnSearch = { multiColumnSearch }
        exportCSV = { exportCSV }
        insertRow={ insertRow }
        striped hover condensed>
        <TableHeaderColumn
          dataField='id'
          isKey={ true }
          dataSort={dataSort}>
          Product ID
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='name'
          dataSort={dataSort}
          filter = {this.filter.type == 'DateFilter' ? null : this.filter}>
          Product Name
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='price'
          csvFormat={ this.csvFormatter }>
          Product Price
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='inStockDate'
          dataFormat={ dateFormatter }
          filter={ this.filter.type == 'DateFilter' ? this.filter : null } >
          In Stock From</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }

  export default BootstrapTableView;

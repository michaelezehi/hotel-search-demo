import React, { Component } from 'react';
import './HomePage.css';
import SearchResult from '../search/SearchResult';
import hotels from '../../data/hotels';
import Filter from '../filter';
import Sort from '../sort/index';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      filters: [],
      sortQuery: 'desc'
    };
  }

  internals = {
    facilities: ['car park', 'gym', 'pool'],
    filterResults: () => {
      if (!this.state.filters.length) {
        return hotels;
      }
      return hotels.filter(hotel => {
        return hotel.Facilities.some(
          facility => this.state.filters.indexOf(facility) > -1
        );
      });
    },
    sortResults: results => {
      const sortQuery = this.state.sortQuery;
      const searchKey = 'StarRating';
      return results.sort((a, b) => {
        if (sortQuery === 'asc') {
          return a[searchKey] - b[searchKey];
        }
        return b[searchKey] - a[searchKey];
      });
    },
    onFilterChange: val => {
      const newFilters = this.state.filters;
      const index = newFilters.indexOf(val);
      if (index > -1) {
        newFilters.splice(index, 1);
      } else {
        newFilters.push(val);
      }
      this.setState(Object.assign({}, this.state.filters, newFilters));
    },
    onSortChange: val => {
      this.setState(
        Object.assign({}, this.state.sortQuery, { sortQuery: val })
      );
    }
  };

  render() {
    const hotels = this.internals.sortResults(this.internals.filterResults());

    return (
      <div className="container-fluid App-body">
        <div className="row">
          <div className="col-2">
            <Filter
              filters={this.state.filters}
              facilities={this.internals.facilities}
              onChange={this.internals.onFilterChange.bind(this)}
            />
            <Sort
              className="half"
              onSortChange={this.internals.onSortChange.bind(this)}
            />
          </div>
          <div className="col-10">
            <SearchResult hotels={hotels} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';

class Sort extends Component {
  onSortChange(e) {
    this.props.onSortChange(e.target.value);
  }

  render() {
    return (
      <FormGroup controlId="formSorter">
        <label>Sort by Stars: </label>
        <FormControl
          componentClass="select"
          onChange={this.onSortChange.bind(this)}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </FormControl>
      </FormGroup>
    );
  }
}

Sort.propTypes = {
  onSortChange: PropTypes.func.isRequired
};

export default Sort;

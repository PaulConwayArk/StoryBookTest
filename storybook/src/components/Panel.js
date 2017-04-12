import React , { Component, PropTypes  } from 'react';
import { Panel, Button, ListGroup, ListGroupItem } from 'react-bootstrap';


const propTypes = {
  header: PropTypes.string,
  PanelBodyText: PropTypes.string,
  defaultExpanded: PropTypes.bool,
  listGroup: PropTypes.bool
};

const defaultProps = {
  header: 'Basic Panel',
  PanelBodyText: 'This is the panel body text',
  defaultExpanded: false,
  listGroup: false
};

const ListGroupItems = [
  <ListGroup on fill>
    <ListGroupItem>Item 1</ListGroupItem>
    <ListGroupItem>Item 2</ListGroupItem>
    <ListGroupItem>Item 3</ListGroupItem>
    <ListGroupItem>Item 4</ListGroupItem>
    <ListGroupItem>&hellip;</ListGroupItem>
  </ListGroup>
];

class PanelView extends Component {
  constructor(props) {
    super(props);
    this.state = {showPanel: true};
    this.openPanel = this.openPanel.bind(this);
    this.closePanel = this.closePanel.bind(this);
  }

  closePanel() {
    this.setState({ showPanel: false });
  }

  openPanel() {
    this.setState({ showPanel: true });
  }

  render() {
    const {
      header,
      defaultExpanded,
      PanelBodyText,
      listGroup
    } = this.props;

    return (
      <Panel
        header = {header}
        defaultExpanded = {defaultExpanded}
        collapsible = {this.state.showPanel}>
        {listGroup ? ListGroupItems : PanelBodyText}
      </Panel>
    )
  }
}

PanelView.propTypes = propTypes;
PanelView.defaultProps = defaultProps;

export default PanelView;

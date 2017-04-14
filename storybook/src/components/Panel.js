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
    <ListGroupItem key='Item2'>Item 2</ListGroupItem>
    <ListGroupItem key='Item1'>Item 1</ListGroupItem>
    <ListGroupItem key='Item3'>Item 3</ListGroupItem>
    <ListGroupItem key='Item4'>Item 4</ListGroupItem>
    <ListGroupItem key='Item5'>&hellip;</ListGroupItem>
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

import React , { Component, PropTypes  } from 'react';

const propTypes = {
  formName: PropTypes.string,
  defaultCheck: PropTypes.string,
  onChangeEvent: PropTypes.func,
  checkedEvent: PropTypes.bool,
  checkedEventRadio: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  formInline: PropTypes.bool,
  formRef: PropTypes.func,
  className: PropTypes.string,
  labelClass : PropTypes.string,
  textBoxType : PropTypes.string,
  placeholder : PropTypes.string
};

const defaultProps = {
  formName: null,
  onChangeEvent: null,
  defaultCheck: null,
  checkedEvent: false,
  checkedEventRadio: null,
  value: null,
  formRef: null,
  className: null,
  labelClass: null,
  placeholder: '',
  textBoxType: '',
  disabled: false,
  formInline: true
};

export class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};
    this.toggleIsChecked = this.toggleIsChecked.bind(this);
  }

  toggleIsChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const {
      formName,
      onChangeEvent,
      checkedEvent,
      value,
      className,
      labelClass,
      disabled,
      formInline
    } = this.props;

    return (
      <label className={`checkbox ${formInline? 'checkbox-inline' : ''} ${labelClass}`}>
        <input
          type= 'checkbox'
          name= {formName}
          onChange={this.toggleIsChecked}
          value={value}
          className={className}
          disabled={disabled}
          checked={this.state.isChecked}/>
          {value}
        </label>
      )
    }
  }
  Checkbox.propTypes = propTypes;
  Checkbox.defaultProps = defaultProps;

  export class Radio extends Component {
    constructor(props) {
      super(props);
      this.state = { selectedOption: this.props.defaultCheck };
      this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(changeEvent) {
      console.log(this.state.selectedOption);
      this.setState({
        selectedOption: changeEvent.target.value
      });
    }

    render() {
      const {
        formName,
        onChangeEvent,
        checkedEvent,
        value,
        className,
        labelClass,
        disabled,
        formInline
      } = this.props;

      return (
        <label className={`${formInline? 'radio-inline' : ''} ${labelClass}`}>
          <input
            type= 'radio'
            name= {formName}
            onChange={this.handleOptionChange}
            value={value}
            className={className}
            disabled={disabled}
            checked={this.state.selectedOption == value}/>
            {value}
          </label>
        )
      }
    }
    Radio.propTypes = propTypes;
    Radio.defaultProps = defaultProps;

    export class TextBox extends Component {
      render() {
        const {
          formName,
          onChangeEvent,
          checkedEvent,
          value,
          className,
          labelClass,
          disabled,
          formInline,
          placeholder,
          textBoxType
        } = this.props;

        return (
          <label className={`row-padded ${labelClass}`}>
            <input
              type= {textBoxType}
              placeholder={placeholder}
              name= {formName}
              onChange={onChangeEvent}
              value={value}
              className={className} />
            </label>
          )
        }
      }
      Radio.propTypes = propTypes;
      Radio.defaultProps = defaultProps;

      export class Forms extends Component {
        render() {
          const {
            formRef,
            onChangeEvent,
            className
          } = this.props;

          return (
            <form>
              <input type="file" ref={formRef} className={className} onChange={onChangeEvent} />
            </form>
          )
        }
      }
      Forms.propTypes = propTypes;
      Forms.defaultProps = defaultProps;;

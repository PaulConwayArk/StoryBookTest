import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from './validate';
import { Button, Jumbotron } from 'react-bootstrap';

const renderField = ({ input, label, type }) => (
  <div className='SecondaryComponentSettings'>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
    </div>
  </div>
);

const input = ({ input, label, type }) => (
  <input {...input} type={type} placeholder={label} />
);

const SecondaryComponentSettings = ({ fields }) => (
  <div className='col-lg-12'>
    <Button bsStyle="info" className='pull-right' onClick={() => fields.push({})}>Settings</Button>
    <div className='col-lg-12'>
      {fields.map((hobby, index) => (
      <div key={index}>
        <Button
          bsStyle="danger"
          className='fa fa-trash-o pull-right'
          onClick={() => fields.remove(index)}
        />

        <Field
          name={hobby}
          type="text"
          component={renderField}
          label={`Hobby #${index + 1}`}
        />
      </div>
    ))}
  </div>
</div>
);

const mainComponentSettings = ({ fields }) => (
  <div className='col-lg-12'>
    <Button className='pull-right' onClick={() => fields.push({})}>Main Component Settings</Button>
    <div className='col-lg-12'>
      {fields.map((member, index) => (
        <div key={index} className='col-lg-12 mainComponentSettings'>
          <div className='col-lg-12'>
            <Button
              bsStyle="danger"
              className='fa fa-trash-o pull-right'
              onClick={() => fields.remove(index)}
            />
          </div>
          <div className='col-lg-6'>
            <h4>Modal Size</h4>
            <Field name={`${member}.modalSize`} component="select" >
              <option value="null">default</option>
              <option value="sm">Small</option>
              <option value="lg">Large</option>
            </Field>
          </div>
          <div className='col-lg-6'>
            <h4>Modal Title</h4>
            <Field name={`${member}.modalTitle`} component={input} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const addSecondaryComponent = ({ fields, meta: { touched, error, submitFailed } }) => (
  <div className='col-lg-12'>
    <div className='col-lg-12'>
      <Button bsStyle="warning" onClick={() => fields.push({})}>Add Secondary Component</Button>
    </div>

    {fields.map((member, index) => (
      <div key={index}>
        <div className='col-lg-12 secondaryComponent'>
          <div className='col-lg-offset-2 col-lg-4'>
            <h4>Secondary Component #{index + 1}</h4>
            <Field name={`${member}.SecondaryComponent_${index + 1}`} component="select" >
              <option value="datepicker">Datepicker</option>
              <option value="highchart">Highchart</option>
              <option value="table">Table</option>
            </Field>
          </div>
          <div className='col-lg-4'>
            <Button
              bsStyle="danger"
              className='fa fa-trash-o pull-right'
              onClick={() => fields.remove(index)}
            />
          </div>
          <div className='col-lg-offset-4 col-lg-4'>
            <FieldArray name={`${member}.SecondaryComponentSettings`} component={SecondaryComponentSettings} />
          </div>
        </div>

      </div>
    ))}
  </div>
);

const addComponent = ({ fields, meta: { touched, error, submitFailed } }) => (
  <div className='col-lg-12'>
    <div className='col-lg-12'>
      <Button bsStyle="warning" onClick={() => fields.push({})}>Add Member</Button>
    </div>

    {fields.map((member, index) => (
      <div key={index} className='col-lg-10 col-lg-offset-1 componentBackground'>
        <div className='col-lg-12'>
          <div className='col-lg-4'>
            <h4>Member #{index + 1}</h4>
          </div>
          <div className='col-lg-4'>
            <Field name={`${member}.component_${index + 1}`} component="select" >
              <option value="Modal">Modal</option>
            </Field>
          </div>
          <div className='col-lg-4'>
            <Button
              bsStyle="danger"
              className='fa fa-trash-o pull-right'
              onClick={() => fields.remove(index)}
            />
          </div>
        </div>
        <div className='col-lg-12'>
          <FieldArray name={`${member}.mainComponentSettings`} component={mainComponentSettings} />
        </div>
        <div className='col-lg-12'>
          <FieldArray name={`${member}.secondaryComponent`} component={addSecondaryComponent} />
        </div>
      </div>
    ))}
  </div>
);

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="customComponent" component={addComponent} />
      <div>
        <Button bsStyle="primary" type="submit" disabled={submitting}>Submit</Button>
        <Button bsStyle="danger" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
      </div>
    </form>
  );
};

export default reduxForm({form: 'fieldArrays'})(FieldArraysForm);

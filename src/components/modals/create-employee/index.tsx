import React from 'react';
import ModalHeader from '../../../components/common/modal-header';
import CreateEmployeesForm from './create-employee-form';

import classes from './index.module.scss';

const CreateEmployees = (props: any) => {

  return (
    <div>
      <ModalHeader title="Add Employee" />
      <CreateEmployeesForm />
    </div>
  );

}

export default CreateEmployees;
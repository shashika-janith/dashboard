import React, { useEffect, useState } from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Pop from '../../../../components/common/pop/index';
import Breadcrumb from '../../../../components/common/breadcrumb';
import CreateEmployee from '../../../../components/modals/create-employee/index';
import styles from './index.module.scss';
import employeesData from '../../../../sample-data/employees.json';

const renderStatusChip = (params: GridCellParams) => {
  return params.row.isActive
    ? <Chip icon={<CheckCircleIcon />} label="active" clickable={false} variant="outlined" color="primary" />
    : <Chip icon={<CancelIcon />} label="inactive" clickable={false} variant="outlined" color="secondary" />
}

const columns: GridColDef[] = [
  { field: 'id', headerName: '#' },
  { field: 'employeeId', headerName: 'Employee #', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'gender', headerName: 'Gender', width: 150 },
  { field: 'salary', headerName: 'Salary', type: 'number', width: 100 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'isActive', headerName: 'Status', width: 150, renderCell: renderStatusChip },
];

const useStyles = makeStyles({
  divider: {
    background: 'gray',
    marginBottom: '2rem'
  },
});

const Employees = ({ match }: any) => {
  const classes = useStyles();

  const [isModalOpen, setModalOpen] = useState(false);
  const [pageSize, setPageSize] = useState<number>(25);
  const [employees, setEmployees] = useState<any>([]);

  useEffect(() => {
    setEmployees(employeesData);
  }, []);

  return (
    <div className={styles.container}>
      <Box display="flex" alignItems="center">
        <Breadcrumb title="Employees" path={match.path} />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setModalOpen(true)}
        >
          New Employee
        </Button>
      </Box>

      <Divider className={classes.divider} />

      <div className={styles.dataWrapper}>
        <DataGrid pagination pageSize={pageSize} onPageSizeChange={(p) => setPageSize(p.pageSize)} rows={employees} columns={columns} />
      </div>

      <Pop size="md" open={isModalOpen} handleClose={() => setModalOpen(false)}>
        <CreateEmployee />
      </Pop>
    </div>
  );

}

export default Employees;
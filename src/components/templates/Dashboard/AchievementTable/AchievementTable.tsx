import React, { useCallback, useEffect } from 'react';
import {
  Grid as DxGrid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import {
  DataTypeProvider,
  IntegratedSorting,
  SortingState,
} from '@devexpress/dx-react-grid';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { Grid, Paper } from '@material-ui/core';
import { useSelector } from '../../../../store';
import { formatDate, getColorOfPercent } from './AchievementTable.helpers';
import ColorsLabels from './ColorsLabels';
import { useStyles } from './AchievementTable.styles';
import TaskService from '../../../../utils/services/TaskService';
import { HabitType } from '../../../../types/habits.types';

export interface TaskListRow {
  done: boolean;
  donePercent: number | null;
  completeDate: Date | null;
  name: string;
  type: HabitType;
  dateTo: Date;
}

const AchievementTable = () => {
  useEffect(() => {
    TaskService.getTasks();
  }, []);

  const classes = useStyles();
  const { tasks } = useSelector((state) => state.tasks);

  const columns = [
    { name: 'type', title: 'Тип' },
    { name: 'name', title: 'Название' },
    { name: 'completeDate', title: 'Дата' },
  ];

  const rows: TaskListRow[] | [] =
    tasks?.map((task) => ({
      type: task.habit.type,
      name: task.habit.name,
      dateTo: task.habit.dateTo,
      done: task.done,
      donePercent: task.donePercent,
      completeDate: task.completeDate,
    })) || [];

  const DefinitionsColorRowDone = useCallback(
    (props) => {
      const {
        row: { donePercent },
      } = props;
      return (
        <Table.Row
          {...props}
          className={classes.tableRow}
          style={{ background: getColorOfPercent(donePercent) }}
        />
      );
    },
    [classes.tableRow]
  );

  if (!tasks) return null;
  return (
    <>
      <Paper className={classes.root}>
        <DxGrid rows={rows} columns={columns}>
          <SortingState
            defaultSorting={[{ columnName: 'completeDate', direction: 'asc' }]}
          />
          <IntegratedSorting />
          <Table
            rowComponent={DefinitionsColorRowDone}
            columnExtensions={[
              { columnName: 'type', width: '20%', align: 'center' },
              { columnName: 'name', width: '50%', align: 'left' },
              { columnName: 'completeDate', width: '30%', align: 'center' },
            ]}
          />
          <TableHeaderRow />
          <DataTypeProvider
            for={['type']}
            formatterComponent={({ value }) =>
              value === 1 ? <ShowChartIcon /> : <TrendingFlatIcon />
            }
          />
          <DataTypeProvider
            for={['completeDate']}
            formatterComponent={({ value }) => <p>{formatDate(value)}</p>}
          />
        </DxGrid>
      </Paper>
      <Grid container justify="center">
        <ColorsLabels />
      </Grid>
    </>
  );
};

export default AchievementTable;

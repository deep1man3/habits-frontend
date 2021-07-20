import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Measure, MeasureState } from '../../types/measure.types';

const initialState: MeasureState = {
  measures: null,
};

const slice = createSlice({
  name: 'measures',
  initialState,
  reducers: {
    setMeasures: (state, { payload }: PayloadAction<Measure[] | null>) => {
      state.measures = payload;
    },
  },
});

export const measureActions = slice.actions;

export default slice.reducer;

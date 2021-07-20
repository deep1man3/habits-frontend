import $api from '../../api';
import store from '../../../store';
import { Measure } from '../../../types/measure.types';
import { measureActions } from '../../../store/measures/slice';

export default class MeasureService {
  static async getMeasures(): Promise<void> {
    if (localStorage.getItem('habits:token')) {
      const response = await $api.get<Measure[]>('/measures');
      store.dispatch(measureActions.setMeasures(response.data));
    }
  }
}

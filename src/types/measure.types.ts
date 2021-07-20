export interface Measure {
  id: number;
  fullName: string;
  shortName: string;
}

export interface MeasureState {
  measures: Measure[]  | null;
}
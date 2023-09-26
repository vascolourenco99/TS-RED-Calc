export interface State {
  firstNumber: string;
  secondNumber: string;
  operation: string;
  result: number | null;
}

export interface Action {
    type: string;
    payload: string | number | null;
}
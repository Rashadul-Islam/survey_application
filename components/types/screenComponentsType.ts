import {ApplicationData} from '../../states/state.interface';

export type FormType = {
  state: ApplicationData;
  preview: boolean;
  dispatch: (action: {
    type: string;
    payload: {name: string; value: string | Date | string[]};
  }) => void;
};

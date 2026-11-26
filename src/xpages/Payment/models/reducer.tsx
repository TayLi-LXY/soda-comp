import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const PaymentModel = createSlice({
  name: 'Payment',
  initialState: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
    refreshQRCodeDisplayState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.components.QRCodeDisplay = { ...payload };
      return refreshState;
    },
  },
});

export default PaymentModel;

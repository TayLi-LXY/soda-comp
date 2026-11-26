
export interface QRCodeDisplayState {
}

export interface PageState {
}


export interface PaymentModelState {
  page: PageState;
  components: {
    QRCodeDisplay: QRCodeDisplayState,
  };
}

const defaultQRCodeDisplayState: QRCodeDisplayState = {
}

const defaultPageState: PageState = {
};


export const defaultState: PaymentModelState = {
  page: defaultPageState,
  components: {
    QRCodeDisplay: defaultQRCodeDisplayState,
  },
};

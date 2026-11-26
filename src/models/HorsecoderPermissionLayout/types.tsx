
export interface LayoutState {
  organizeAccountPermissionList: string[],
}


export interface HorsecoderPermissionLayoutModelState {
  layout: LayoutState;
  components: {
  };
}

const defaultLayoutState: LayoutState = {
  organizeAccountPermissionList: [],
};


export const defaultState: HorsecoderPermissionLayoutModelState = {
  layout: defaultLayoutState,
  components: {
  },
};

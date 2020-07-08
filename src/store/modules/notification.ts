import { Module } from 'vuex';

interface NotificationState {
  message: string | null;
  isError: boolean;
}

interface NotificationData {
  message: string;
  isError?: boolean;
}

const store: Module<NotificationState, {}> = {
  state: () => ({
    message: '',
    isError: false,
  }),
  getters: {
    getMessage: state => state.message,
    getError: state => state.isError,
  },
  actions: {
    sendNotification: ({ state, dispatch }, notificationData: NotificationData) => {
      const { message, isError } = notificationData;

      state.message = message;
      state.isError = Boolean(isError);

      setTimeout(() => {
        dispatch('hideNotification');
      }, 3000);
    },
    hideNotification: ({ state }) => {
      state.message = null;
    },
  },
};

export default store;

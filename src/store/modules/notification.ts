import { Module } from 'vuex';
import { v4 } from 'uuid';

interface NotificationState {
  message: string | null;
  isError: boolean;
  id: string;
  timeout: number;
}

interface NotificationData {
  message: string;
  isError?: boolean;
}

const store: Module<NotificationState, {}> = {
  state: () => ({
    message: '',
    isError: false,
    id: '',
    timeout: 0,
  }),
  getters: {
    getMessage: state => state.message,
    getError: state => state.isError,
    getId: state => state.id,
  },
  actions: {
    sendNotification: ({ state, dispatch }, notificationData: NotificationData) => {
      clearTimeout(state.timeout);

      const { message, isError } = notificationData;

      state.message = message;
      state.isError = Boolean(isError);
      state.id = v4();

      state.timeout = setTimeout(() => {
        dispatch('hideNotification');
      }, 3000);
    },
    hideNotification: ({ state }) => {
      state.message = null;
    },
  },
};

export default store;

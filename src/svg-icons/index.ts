/* eslint-disable max-len */
import { Icon } from '@/types/svg-icons'

export default [
  // MAIN
  {
    id: 'home-icon',
    type: 'stroke',
    variations: ['home', 'stroke', 'house'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M11.659 4.134a.5.5 0 0 1 .682 0l7.5 7A.5.5 0 0 1 19.5 12H18v7.5a.5.5 0 0 1-.5.5H14a.5.5 0 0 1-.5-.5V15h-3v4.5a.5.5 0 0 1-.5.5H6.5a.5.5 0 0 1-.5-.5V12H4.5a.5.5 0 0 1-.341-.866l7.5-7ZM5.769 11H6.5a.5.5 0 0 1 .5.5V19h2.5v-4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V19H17v-7.5a.5.5 0 0 1 .5-.5h.732L12 5.184 5.769 11Z"
        fill="currentColor"
      />
    `,
  },

  {
    id: 'chevron-down-icon',
    type: 'stroke',
    variations: ['chevron down', 'arrow down'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M12.354 15.855a.499.499 0 0 1-.708 0l-7-7a.5.5 0 0 1 .708-.708L12 14.794l6.646-6.647a.5.5 0 0 1 .708.708l-7 7Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'chevron-left-icon',
    type: 'stroke',
    variations: ['chevron left', 'arrow left'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M8.146 12.355a.498.498 0 0 1 0-.708l7-7a.5.5 0 0 1 .708.708l-6.647 6.646 6.647 6.646a.5.5 0 1 1-.708.708l-7-7Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'chevron-up-icon',
    type: 'stroke',
    variations: ['chevron up', 'arrow up'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M11.646 8.147a.5.5 0 0 1 .708 0l7 7a.5.5 0 1 1-.708.708L12 9.208l-6.646 6.647a.5.5 0 0 1-.708-.708l7-7Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'chevron-right-icon',
    type: 'stroke',
    variations: ['chevron right', 'arrow right'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M15.853 11.647a.498.498 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l6.647-6.646-6.647-6.646a.5.5 0 0 1 .708-.708l7 7Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'double-chevron-down-icon',
    type: 'stroke',
    variations: ['double chevron down', 'arrow down'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M12.354 18.855a.499.499 0 0 1-.708 0l-7-7a.501.501 0 0 1 .708-.708L12 17.794l6.646-6.647a.5.5 0 0 1 .708.708l-7 7Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        d="M12.355 12.855a.497.497 0 0 1-.708 0l-7-7a.5.5 0 0 1 .708-.708L12 11.794l6.646-6.647a.5.5 0 1 1 .708.708l-7 7h.001Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'double-chevron-left-icon',
    type: 'stroke',
    variations: ['double chevron left', 'arrow left'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M5.147 12.355a.498.498 0 0 1 0-.708l7-7a.501.501 0 0 1 .708.708L6.208 12l6.647 6.646a.5.5 0 1 1-.708.708l-7-7Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        d="M11.147 12.356a.497.497 0 0 1 0-.708l7-7a.5.5 0 0 1 .708.708L12.208 12l6.647 6.646a.5.5 0 1 1-.708.708l-7-7Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'double-chevron-up-icon',
    type: 'stroke',
    variations: ['double chevron up', 'arrow up'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M11.647 5.148a.499.499 0 0 1 .708 0l7 7a.5.5 0 0 1-.708.708l-6.646-6.647-6.646 6.647a.5.5 0 0 1-.708-.708l7-7Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        d="M11.646 11.148a.496.496 0 0 1 .708 0l7 7a.5.5 0 0 1-.708.708l-6.645-6.647-6.646 6.647a.5.5 0 1 1-.708-.708l7-7h-.001Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'double-chevron-right-icon',
    type: 'stroke',
    variations: ['double chevron right', 'arrow right'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M18.854 11.648a.5.5 0 0 1 0 .708l-7 7a.501.501 0 0 1-.708-.708l6.647-6.646-6.647-6.646a.501.501 0 0 1 .708-.708l7 7Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        d="M12.854 11.647a.498.498 0 0 1 0 .708l-7 7a.5.5 0 1 1-.708-.708l6.647-6.645-6.647-6.646a.5.5 0 0 1 .708-.708l7 7v-.001Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'arrow-up-icon',
    type: 'stroke',
    variations: ['arrow up', 'chevron up'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M11.646 4.146a.5.5 0 0 1 .708 0l6.5 6.5a.5.5 0 0 1-.708.708L12.5 5.707V19.5a.5.5 0 0 1-1 0V5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6.5-6.5Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'arrow-left-icon',
    type: 'stroke',
    variations: ['arrow left', 'chevron left'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M4.146 12.354a.501.501 0 0 1 0-.708l6.5-6.5a.5.5 0 1 1 .708.708L5.707 11.5H19.5a.5.5 0 1 1 0 1H5.707l5.647 5.646a.5.5 0 1 1-.707.708l-6.5-6.5Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'arrow-down-icon',
    type: 'stroke',
    variations: ['arrow down', 'chevron down'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M12.354 19.853a.499.499 0 0 1-.708 0l-6.5-6.5a.5.5 0 1 1 .708-.708l5.646 5.647V4.5a.5.5 0 0 1 1 0v13.793l5.646-5.647a.5.5 0 0 1 .708.708l-6.5 6.5Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'arrow-right-icon',
    type: 'stroke',
    variations: ['arrow right', 'chevron right'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M19.854 11.646a.499.499 0 0 1 0 .708l-6.5 6.5a.5.5 0 0 1-.708-.708l5.647-5.646H4.5a.5.5 0 0 1 0-1h13.793l-5.647-5.646a.5.5 0 0 1 .708-.708l6.5 6.5Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'expand-icon',
    type: 'stroke',
    variations: ['expand', 'maximize'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M10 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V5h-8.5a.5.5 0 0 1-.5-.5ZM4.5 10a.5.5 0 0 1 .5.5V19h8.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5Z"
        fill="currentColor"
      />
    `,
  },

  // MISC
  {
    id: 'copy-icon',
    type: 'stroke',
    variations: ['copy'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M9 5.5A1.5 1.5 0 0 1 10.5 4h7A1.5 1.5 0 0 1 19 5.5V15a1.5 1.5 0 0 1-1.5 1.5h-1.75v2a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 18.5v-10A1.5 1.5 0 0 1 6.5 7H9V5.5ZM10 7h4.25a1.5 1.5 0 0 1 1.5 1.5v7h1.75a.5.5 0 0 0 .5-.5V5.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V7ZM6.5 8a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h7.75a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.5Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'assets-icon',
    type: 'stroke',
    variations: ['assets', 'icons', 'components'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M5.5 5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4ZM4 5.5A1.5 1.5 0 0 1 5.5 4h4A1.5 1.5 0 0 1 11 5.5v4A1.5 1.5 0 0 1 9.5 11h-4A1.5 1.5 0 0 1 4 9.5v-4ZM15 5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H15Zm-1.5.5A1.5 1.5 0 0 1 15 4h3.5A1.5 1.5 0 0 1 20 5.5v4a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5v-4Zm-8 8.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4Zm-1.5.5A1.5 1.5 0 0 1 5.5 13h4a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 9.5 20h-4A1.5 1.5 0 0 1 4 18.5v-4Zm10.5-.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4Zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'license-icon',
    type: 'stroke',
    variations: ['license', 'paper', 'list'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M5 5.5A1.5 1.5 0 0 1 6.5 4h11A1.5 1.5 0 0 1 19 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-13ZM6.5 5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-11Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        d="M8 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM8 11a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6A.5.5 0 0 1 8 11Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 8 13Zm0 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Z"
        fill="currentColor"
      />
      
    `,
  },
  {
    id: 'search-icon',
    type: 'stroke',
    variations: ['search', 'magnifying glass', 'zoom', 'in'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0 1a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        d="M14.646 14.646a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1-.708.708l-4.5-4.5a.5.5 0 0 1 0-.708Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'filter-icon',
    type: 'stroke',
    variations: ['filter', 'sort'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 4 8ZM6.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5ZM9 16a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 16Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'tick-icon',
    type: 'stroke',
    variations: ['tick', 'done', 'check'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M19.854 6.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 .708-.708L9.5 16.293l9.646-9.647a.5.5 0 0 1 .708 0Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'pencil-icon',
    type: 'stroke',
    variations: ['pencil'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M15.44 4.854a1.5 1.5 0 0 1 2.12 0l1.586 1.585a1.5 1.5 0 0 1 0 2.122l-11 11a1.5 1.5 0 0 1-1.06.439H4.5a.5.5 0 0 1-.5-.5v-2.586c0-.398.158-.78.44-1.06l11-11Zm1.414.707a.5.5 0 0 0-.708 0L14.707 7 17 9.293l1.44-1.44a.5.5 0 0 0 0-.707l-1.586-1.585ZM16.293 10 14 7.707l-8.854 8.854a.5.5 0 0 0-.146.353V19h2.086a.5.5 0 0 0 .353-.146L16.293 10Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'bell-icon',
    type: 'stroke',
    variations: ['bell', 'ring'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M9.316 16.785a.5.5 0 0 1 .649.28v.002l.005.01.022.051c.133.288.302.558.503.804.366.445.863.818 1.505.818.642 0 1.14-.373 1.505-.818.212-.26.389-.547.525-.854l.005-.01.465.182.465.184a.501.501 0 0 0-.826-.535.499.499 0 0 0-.104.168l-4.719-.282Zm.184.465-.465.184a.5.5 0 0 1 .281-.649l.184.465Zm5 0 .465.184-.002.004-.002.007-.01.022a4.81 4.81 0 0 1-.673 1.101c-.457.555-1.21 1.182-2.278 1.182s-1.821-.627-2.278-1.182a4.807 4.807 0 0 1-.673-1.1l-.01-.023-.002-.007-.001-.003h-.001l.465-.185h5ZM11 6.75h-1v-.035c.01-.39.085-.774.219-1.14.111-.297.29-.627.582-.886.33-.291.758-.448 1.199-.439.498 0 .897.17 1.2.44.291.26.47.59.58.884.135.366.21.752.22 1.141v.034l-.5.001H13v-.01l-.002-.05a2.714 2.714 0 0 0-.154-.764 1.218 1.218 0 0 0-.309-.49A.76.76 0 0 0 12 5.25a.76.76 0 0 0-.535.186 1.22 1.22 0 0 0-.31.49A2.58 2.58 0 0 0 11 6.74v.012-.002Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        d="M8.94 6.916C9.622 6.16 10.648 5.75 12 5.75s2.379.41 3.06 1.166c.671.746.94 1.758.94 2.834 0 1.34.675 2.61 1.4 3.575.415.55.882 1.058 1.394 1.518l.021.02.005.003a.502.502 0 0 1 .034.738l-.002.002-.003.002-.008.008c-.137.125-.28.242-.43.351a7.79 7.79 0 0 1-1.26.735c-1.127.53-2.824 1.048-5.151 1.048s-4.024-.518-5.15-1.048a7.792 7.792 0 0 1-1.261-.735 5.029 5.029 0 0 1-.43-.35l-.011-.012s-.002 0 .352-.355l-.354.354a.5.5 0 0 1 .034-.738l.005-.004.021-.019c.02-.017.05-.042.087-.077.478-.44.916-.922 1.307-1.44C7.324 12.358 8 11.09 8 9.75c0-1.076.269-2.088.94-2.834Zm-2.674 8.306c.234.162.569.368 1.01.576.998.47 2.55.952 4.724.952 2.173 0 3.726-.482 4.725-.952.44-.208.775-.414 1.009-.576a11.65 11.65 0 0 1-1.134-1.297c-.776-1.034-1.6-2.516-1.6-4.175 0-.924-.231-1.662-.684-2.166-.446-.493-1.169-.834-2.316-.834-1.147 0-1.871.34-2.316.834C9.231 8.088 9 8.826 9 9.75c0 1.66-.824 3.141-1.6 4.175-.346.46-.725.893-1.134 1.297Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'profile-icon',
    type: 'stroke',
    variations: ['profile', 'account', 'settings'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M5.114 19h13.772a9.915 9.915 0 00-1.126-2.74C16.761 14.613 15.03 13 12 13s-4.761 1.614-5.76 3.26A9.911 9.911 0 005.114 19zm14.386.5l.495-.071v-.003l-.001-.005-.003-.019a4.392 4.392 0 00-.057-.305c-.043-.203-.11-.49-.213-.833a10.91 10.91 0 00-1.106-2.523C17.489 13.886 15.47 12 12 12s-5.489 1.886-6.615 3.74a10.91 10.91 0 00-1.376 3.662l-.003.019v.007c0 .001-.001.001.494.072l-.495-.07A.5.5 0 004.5 20h15a.5.5 0 00.495-.57l-.495.07zM12 12a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 100-6 3 3 0 000 6z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'plus-icon',
    type: 'stroke',
    variations: ['plus', 'add'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M12 4a.5.5 0 0 1 .5.5v7h7a.5.5 0 0 1 0 1h-7v7a.5.5 0 0 1-1 0v-7h-7a.5.5 0 0 1 0-1h7v-7A.5.5 0 0 1 12 4Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'minus-icon',
    type: 'stroke',
    variations: ['minus', 'subtract'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M4 12a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 4 12Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'info-icon',
    type: 'stroke',
    variations: ['information'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M12 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM11 11a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-2Zm-1.5.5A1.5 1.5 0 0 1 11 10h2a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 13 20h-2a1.5 1.5 0 0 1-1.5-1.5v-7Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'moon-icon',
    type: 'stroke',
    variations: ['moon', 'dark'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M6.184 20.42C7.89409 19.7736 9.36669 18.6216 10.4057 17.1174C11.4447 15.6132 12.0008 13.8282 12 12C12 10.1385 11.423 8.32281 10.3485 6.80276C9.27403 5.28271 7.75482 4.13304 6 3.512C6.96335 3.17099 7.97808 2.99781 9 3C10.2466 3.001 11.4793 3.26095 12.6201 3.76336C13.761 4.26578 14.785 4.9997 15.6273 5.91863C16.4696 6.83755 17.1118 7.92143 17.5133 9.10157C17.9147 10.2817 18.0666 11.5324 17.9594 12.7743C17.8521 14.0162 17.4881 15.2224 16.8902 16.3162C16.2924 17.4101 15.4739 18.3678 14.4865 19.1287C13.4991 19.8896 12.3645 20.4371 11.1544 20.7365C9.94434 21.0359 8.68527 21.0807 7.457 20.868C6.96151 20.7825 6.47412 20.6554 6 20.488L6.184 20.421V20.42ZM9.001 20C11.1227 20 13.1576 19.1571 14.6579 17.6569C16.1581 16.1566 17.001 14.1217 17.001 12C17.001 9.87827 16.1581 7.84344 14.6579 6.34315C13.1576 4.84285 11.1227 4 9.001 4C10.2436 4.93076 11.2521 6.13848 11.9463 7.52722C12.6405 8.91595 13.0013 10.4474 13 12C13.0013 13.5526 12.6405 15.0841 11.9463 16.4728C11.2521 17.8615 10.2436 19.0692 9.001 20V20Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'sun-icon',
    type: 'stroke',
    variations: ['sun', 'light'],
    htmlValue: `
    <path
      fill-rule="evenodd"
      d="M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm1 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0ZM2 12a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 12ZM18.5 12a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H19a.5.5 0 0 1-.5-.5ZM4.929 19.071a.5.5 0 0 1 0-.707l1.768-1.768a.5.5 0 1 1 .707.707l-1.768 1.768a.5.5 0 0 1-.707 0ZM16.596 7.404a.5.5 0 0 1 0-.707l1.768-1.768a.5.5 0 1 1 .707.707l-1.768 1.768a.5.5 0 0 1-.707 0ZM12 22a.5.5 0 0 1-.5-.5V19a.5.5 0 0 1 1 0v2.5a.5.5 0 0 1-.5.5ZM12 5.5a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 1 0V5a.5.5 0 0 1-.5.5ZM19.071 19.071a.5.5 0 0 1-.707 0l-1.768-1.768a.5.5 0 1 1 .707-.707l1.768 1.768a.5.5 0 0 1 0 .707ZM7.404 7.404a.5.5 0 0 1-.707 0L4.929 5.636a.5.5 0 0 1 .707-.707l1.768 1.768a.5.5 0 0 1 0 .707Z"
      fill="currentColor"
    />
    `,
  },
  {
    id: 'download-icon',
    type: 'stroke',
    variations: ['download'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M4 19.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5ZM12 4a.5.5 0 0 1 .5.5v10.293l4.146-4.147a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 .708-.708l4.146 4.147V4.5A.5.5 0 0 1 12 4Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'bookmark-icon',
    type: 'stroke',
    variations: ['bookmark'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M5.5 5.5A1.5 1.5 0 0 1 7 4h10a1.5 1.5 0 0 1 1.5 1.5v14a.5.5 0 0 1-.838.369L12 14.679l-5.662 5.19A.5.5 0 0 1 5.5 19.5v-14ZM7 5a.5.5 0 0 0-.5.5v12.863l5.162-4.732a.5.5 0 0 1 .676 0l5.162 4.732V5.5A.5.5 0 0 0 17 5H7Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'chat-square-icon',
    type: 'stroke',
    variations: ['chat', 'square', 'messages'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M5.5 5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8a.5.5 0 0 1 .468.676l-.915 2.44 4.153-3.02A.5.5 0 0 1 12 15h6.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13ZM4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-6.337l-5.369 3.904a.5.5 0 0 1-.762-.58L7.279 16H5.5A1.5 1.5 0 0 1 4 14.5v-9Z"
        fill="currentColor"
      />
      <path
        d="M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'messages-icon',
    type: 'stroke',
    variations: ['messages', 'chat', 'inbox'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9ZM5.5 7a.5.5 0 0 0-.5.5v.717l7 4.2 7-4.2V7.5a.5.5 0 0 0-.5-.5h-13ZM19 9.383l-6.743 4.046a.5.5 0 0 1-.514 0L5 9.383V16.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V9.383Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'send-icon',
    type: 'stroke',
    variations: ['send', 'messages', 'chat'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.106 5.193a.5.5 0 0 1 .593-.152l15 6.5a.5.5 0 0 1 0 .918l-15 6.5a.5.5 0 0 1-.595-.764L8.869 12 4.104 5.805a.5.5 0 0 1 .002-.612Zm1.969 1.534 3.821 4.968a.5.5 0 0 1 0 .61l-3.821 4.968L18.243 12 6.075 6.727Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'camera-icon',
    type: 'stroke',
    variations: ['camera', 'video'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.5 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H15a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 15 8H5.5ZM4 8.5A1.5 1.5 0 0 1 5.5 7H15a1.5 1.5 0 0 1 1.5 1.5v1.337l2.863-.818A.5.5 0 0 1 20 9.5v5a.5.5 0 0 1-.637.48l-2.863-.817V15.5A1.5 1.5 0 0 1 15 17H5.5A1.5 1.5 0 0 1 4 15.5v-7Zm12.5 4.623 2.5.714v-3.674l-2.5.714v2.246Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'trash-can-icon',
    type: 'stroke',
    variations: ['trash can', 'cancel', 'delete'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M7.5 6.5A1.5 1.5 0 0 1 9 5h6a1.5 1.5 0 0 1 1.5 1.5V8h3a.5.5 0 0 1 0 1H18v9.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18.5V9H4.5a.5.5 0 0 1 0-1h3V6.5Zm1 1.5h7V6.5A.5.5 0 0 0 15 6H9a.5.5 0 0 0-.5.5V8ZM7 9v9.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V9H7Zm3.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5Zm3 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5Z"
        fill="currentColor"
      />
    `,
  },

  // MENU
  {
    id: 'menu-icon',
    type: 'fill',
    variations: ['menu', 'dots', 'settings', 'options'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M13.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'hamburger-icon',
    type: 'stroke',
    variations: ['hamburger', 'full', 'menu', 'navigation', 'bars'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 4 8Zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 4 12Zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 4 16Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'hamburger-cut-icon',
    type: 'stroke',
    variations: ['hamburger', 'menu', 'cut', 'navigation', 'bars'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 4 8Zm0 4a.5.5 0 0 1 .5-.5h9.146a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 12Zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 4 16Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'hamburger-triangular-icon',
    type: 'stroke',
    variations: ['hamburger', 'menu', 'triangular', 'cut', 'navigation', 'bars'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 4 8Zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 4 12Zm0 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 16Z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'close-icon',
    type: 'stroke',
    variations: ['close', 'exit', 'leave'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        d="M5.137 5.137a.467.467 0 0 1 .66 0L12 11.34l6.202-6.203a.467.467 0 0 1 .661.66L12.66 12l6.203 6.202a.467.467 0 0 1-.66.661L12 12.66l-6.202 6.203a.467.467 0 0 1-.66-.66L11.34 12 5.137 5.798a.467.467 0 0 1 0-.66Z"
        fill="currentColor"
      />
    `,
  },

  // SOCIAL
  {
    id: 'github-icon',
    type: 'logo',
    variations: ['github', 'gh'],
    htmlValue: `
      <path
        d="M12 3c-4.972 0-9 3.903-9 8.716 0 3.851 2.579 7.117 6.154 8.269.45.082.615-.188.615-.42 0-.206-.008-.754-.012-1.481-2.503.526-3.031-1.17-3.031-1.17-.41-1.005-1.001-1.275-1.001-1.275-.816-.54.063-.529.063-.529.903.061 1.378.899 1.378.899.803 1.332 2.107.947 2.622.724.08-.563.312-.947.57-1.165-2-.218-4.1-.967-4.1-4.307 0-.95.349-1.729.926-2.339-.101-.22-.405-1.106.079-2.306 0 0 .754-.234 2.475.893a8.908 8.908 0 0 1 2.25-.294c.765.004 1.53.1 2.25.294 1.71-1.127 2.464-.893 2.464-.893.483 1.2.18 2.086.09 2.306.573.61.922 1.388.922 2.339 0 3.349-2.104 4.085-4.106 4.3.315.261.607.796.607 1.612 0 1.167-.01 2.104-.01 2.387 0 .228.157.501.618.414 3.6-1.145 6.177-4.412 6.177-8.258C21 6.903 16.97 3 12 3z"
        fill="currentColor"
      />
    `,
  },
] as Icon[]

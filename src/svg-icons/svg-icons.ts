import { Icon } from '@/types/svg-icons';

export default [
  // MAIN
  {
    id: 'home-icon',
    type: 'stroke',
    variations: ['home', 'stroke', 'house'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.354 12.06a.5.5 0 010-.706l8-8a.5.5 0 01.707 0l8 8a.5.5 0 01-.707.707l-7.647-7.647-7.646 7.647a.5.5 0 01-.707 0z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.207 11.707a.5.5 0 01.5-.5h2.5a.5.5 0 01.5.5v7h2.5v-4.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4.5h2.5v-7a.5.5 0 01.5-.5h2.5a.5.5 0 010 1h-2v7a.5.5 0 01-.5.5h-3.5a.5.5 0 01-.5-.5v-4.5h-3v4.5a.5.5 0 01-.5.5h-3.5a.5.5 0 01-.5-.5v-7h-2a.5.5 0 01-.5-.5z"
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
        clip-rule="evenodd"
        d="M18.718 9.425a.5.5 0 10-.708-.707L12 14.728l-6.01-6.01a.5.5 0 10-.708.707l6.364 6.364a.5.5 0 00.708 0l6.364-6.364z"
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
        clip-rule="evenodd"
        d="M15.283 18.01a.5.5 0 01-.708.707l-6.364-6.363a.5.5 0 01.708-.708l6.364 6.364z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.575 5.282a.5.5 0 11.708.708l-6.364 6.364a.5.5 0 01-.708-.708l6.364-6.364z"
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
        clip-rule="evenodd"
        d="M5.99 15.283a.5.5 0 01-.708-.708l6.364-6.364a.5.5 0 01.708.708L5.99 15.283z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.718 14.575a.5.5 0 11-.708.708l-6.364-6.364a.5.5 0 01.708-.708l6.364 6.364z"
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
        clip-rule="evenodd"
        d="M8.718 5.99a.5.5 0 01.707-.708l6.364 6.364a.5.5 0 01-.707.708L8.718 5.99z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.425 18.718a.5.5 0 11-.707-.708l6.364-6.364a.5.5 0 01.707.708l-6.364 6.364z"
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
        clip-rule="evenodd"
        d="M13.379 19.192a.5.5 0 110 1h-9a.5.5 0 010-1h9z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.879 10.692a.5.5 0 111 0v9a.5.5 0 01-1 0v-9zM10.621 4.95a.5.5 0 010-1h9a.5.5 0 110 1h-9z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.121 13.45a.5.5 0 11-1 0v-9a.5.5 0 011 0v9z"
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
        clip-rule="evenodd"
        d="M14 8H8a1 1 0 00-1 1v9a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 00-1-1zM8 7a2 2 0 00-2 2v9a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2H8z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 6h6a1 1 0 011 1v9a1 1 0 01-1 1h-.5v1h.5a2 2 0 002-2V7a2 2 0 00-2-2h-6a2 2 0 00-2 2v.5h1V7a1 1 0 011-1z"
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
        clip-rule="evenodd"
        d="M4.5 4a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6zm.5 6V5h5v5H5zm-.5 3a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6zm.5 6v-5h5v5H5zm9-14.5a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-6zm1 .5v5h5V5h-5zm-.5 8a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6zm.5 6v-5h5v5h-5z"
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
        clip-rule="evenodd"
        d="M7 4h10a1 1 0 011 1v13a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1zM5 5a2 2 0 012-2h10a2 2 0 012 2v13a2 2 0 01-2 2H7a2 2 0 01-2-2V5zm3.5.5a.5.5 0 000 1h7a.5.5 0 000-1h-7zm0 3a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 3a.5.5 0 000 1h7a.5.5 0 000-1h-7zm0 3a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
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
        clip-rule="evenodd"
        d="M11 17a6 6 0 100-12 6 6 0 000 12zm0-1a5 5 0 100-10 5 5 0 000 10z"
        fill="currentColor"
      />
      <path
        d="M14.822 15.529l.707-.707 3.527 3.527a.5.5 0 01-.707.707l-3.527-3.527z"
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
        d="M6 8.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zM8 11.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM10 14.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'tick-icon',
    type: 'stroke',
    variations: ['tick', 'done'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.01 6.303a.5.5 0 010 .707l-9.9 9.9a.5.5 0 01-.706 0l-5.657-5.657a.5.5 0 11.707-.707l5.303 5.303 9.546-9.546a.5.5 0 01.707 0z"
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
        clip-rule="evenodd"
        d="M16.654 4.14a.5.5 0 01.7.006l3.5 3.5a.5.5 0 01-.008.715l-12.5 12A.5.5 0 018 20.5H4.5A.5.5 0 014 20v-3.5a.5.5 0 01.154-.36l12.5-12zM5 16.712V19.5h2.799L19.786 7.993 16.993 5.2 5 16.713z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.646 11.854l-3.5-3.5.708-.708 3.5 3.5-.708.708z"
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
        clip-rule="evenodd"
        d="M9.316 16.535a.5.5 0 01.649.28v.002l.005.01.022.051a3.793 3.793 0 00.503.804c.366.445.863.818 1.505.818.642 0 1.14-.373 1.505-.818a3.793 3.793 0 00.525-.854l.005-.011.465.183.465.184a.5.5 0 10-.93-.367M9.5 17l-.465.184a.5.5 0 01.281-.65M14.5 17l.465.184v.001l-.002.003-.002.007-.01.022a3.432 3.432 0 01-.16.332 4.803 4.803 0 01-.513.769c-.457.555-1.21 1.182-2.278 1.182s-1.821-.627-2.278-1.182a4.803 4.803 0 01-.673-1.1l-.01-.023-.002-.007-.001-.003-.001-.001L9.5 17M11 6.5h-1v-.035a2.97 2.97 0 01.027-.34c.027-.211.08-.502.192-.8.111-.297.29-.627.582-.886A1.757 1.757 0 0112 4c.498 0 .897.17 1.2.439.291.26.47.59.58.885A3.583 3.583 0 0114 6.465v.034l-.5.001H13v.001-.011l-.002-.05a2.717 2.717 0 00-.154-.764 1.22 1.22 0 00-.309-.49A.76.76 0 0012 5a.76.76 0 00-.535.186 1.22 1.22 0 00-.31.49A2.579 2.579 0 0011 6.49v.012V6.5z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.94 6.666C9.622 5.909 10.648 5.5 12 5.5s2.379.41 3.06 1.166c.671.746.94 1.758.94 2.834 0 1.34.675 2.609 1.4 3.575a10.72 10.72 0 001.307 1.441c.038.035.067.06.087.077l.021.019.005.004a.502.502 0 01.034.738L18.5 15l.354.354h-.001l-.001.002-.003.002-.008.008a2.516 2.516 0 01-.11.099c-.073.063-.18.15-.32.252a7.787 7.787 0 01-1.26.735c-1.127.53-2.824 1.048-5.151 1.048s-4.024-.518-5.15-1.048a7.785 7.785 0 01-1.261-.735 5.006 5.006 0 01-.43-.351l-.008-.008-.003-.003s-.002-.001.352-.355l-.354.354a.5.5 0 01.034-.738l.005-.004.021-.019c.02-.017.05-.042.087-.077A10.72 10.72 0 006.6 13.075C7.324 12.109 8 10.841 8 9.5c0-1.076.269-2.088.94-2.834zm-2.674 8.306c.234.162.569.368 1.01.576.998.47 2.55.952 4.724.952 2.173 0 3.726-.482 4.725-.952.44-.208.775-.414 1.009-.576a11.743 11.743 0 01-1.134-1.297C15.824 12.641 15 11.159 15 9.5c0-.924-.231-1.662-.684-2.166C13.87 6.841 13.147 6.5 12 6.5c-1.147 0-1.871.34-2.316.834C9.231 7.838 9 8.576 9 9.5c0 1.66-.824 3.141-1.6 4.175a11.743 11.743 0 01-1.134 1.297z"
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
        clip-rule="evenodd"
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
        clip-rule="evenodd"
        d="M5 12a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 015 12z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 5a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13A.5.5 0 0112 5z"
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
        clip-rule="evenodd"
        d="M5 11.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'info-icon',
    type: 'stroke',
    variations: ['info', 'information'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.5 10.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-9zm1 .5v8h3v-8h-3zM9.5 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM12 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
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
        clip-rule="evenodd"
        d="M13.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="currentColor"
      />
    `,
  },
  {
    id: 'hamburger-icon',
    type: 'stroke',
    variations: ['hamburger', 'menu', 'nav'],
    htmlValue: `
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 8.5c0-.276.298-.5.667-.5h14.666c.369 0 .667.224.667.5s-.299.5-.667.5H4.667C4.298 9 4 8.776 4 8.5zM4 11.5c0-.276.298-.5.667-.5h14.666c.369 0 .667.224.667.5s-.299.5-.667.5H4.667C4.298 12 4 11.776 4 11.5zM4 14.5c0-.276.298-.5.667-.5h14.666c.369 0 .667.224.667.5s-.299.5-.667.5H4.667C4.298 15 4 14.776 4 14.5z"
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
        clip-rule="evenodd"
        d="M4.646 4.646a.5.5 0 01.708 0L12 11.293l6.646-6.647a.5.5 0 01.708.708L12.707 12l6.647 6.646a.5.5 0 01-.708.708L12 12.707l-6.646 6.647a.5.5 0 01-.708-.708L11.293 12 4.646 5.354a.5.5 0 010-.708z"
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
] as Icon[];

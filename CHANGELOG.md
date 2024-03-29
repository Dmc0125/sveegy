# Changelog

All notable changes to Sveegy will be documented in this file.

## [1.0.0] - 2022-4-21

- Changed the design of the page

## [0.20.1] - 2022-03-13

- Removed `api/icons` route
- Removed unnecessary path attributes formatting for jsx

## [0.20.0] - 2022-03-12

- Fetching icons from firebase

## [0.19.0] - 2022-03-06

- Added svg sprites as an option to use sveegy-icons

## [0.18.1] - 2022-02-28

- Added 3 new icons with both types: cloud, cloud-download, cloud-upload

## [0.18.0] - 2022-02-27

- Added Vue docs, fixed Svelte docs
- Fixed icons html for jsx

## [0.17.4] - 2022-02-20

- Updated Svelte package docs

### Added

- Stroke icons: clipboard, image-3d, popup, profile-separated
- Filled icons: clipboard, folder-alt, image-3d, image-alt, popup, profile-separated 

## [0.17.3] - 2022-02-19

- Fixed the bug where the `/docs` page and its children were not loading and redirecting to error page

## [0.17.2] - 2022-02-19

- Without package docs changed to `/docs`

## [0.17.1] - 2022-02-18

- Code refactoring
- Added no-package docs
- Docs navigation

## [0.17.0] - 2022-02-16

- Removed outlined icons
- Some ui changes
- Fixed svg copy btn on icon popup

## [0.16.0] - 2022-02-15

- Added `docs` page for sveegy-icons package
- Code highlighting
- Icon popup ui changes

## [0.15.3] - 2022-02-06

- Code refactoring
- RedHatMono font not loading fixed

## [0.15.2] - 2022-02-05

- New icons
- Using fonts locally

## [0.15.1] - 2022-02-03

- Added `close-circle` icon
- Code refactoring

## [0.15.0] - 2022-02-01

- Added filled icons
- Fixed the bug with directly copying html/jsx from `/icons`

## [0.14.5] - 2022-01-26

- Updated some old icons
- Added new icons

## [0.14.4] - 2022-01-22

- Fixed copy icon html/jsx bug
- Added new icons

## [0.14.3] - 2022-01-17

- Fixed `/api/icons` route

## [0.14.2] - 2022-01-17

- Bugfixes
- New icons

## [0.14.1] - 2022-01-14

- fix build errors - `/api/icons` currently not working

## [0.14.0] - 2022-01-14

- Added stroke icons
- bugfixes

- code refactoring

## [0.13.1] - 2022-01-09

- `api/icons`
  - query params
    - s -> string?
    - id -> string?

### Fixes

- Mobile navigation fits the screen now

## [0.13.0] - 2022-01-09

- Using Svelte-kit

## [0.12.0] - 2021-29-12

- switch between
  - classes and width and height
  - jsx

### UI

- new popup layout

## [0.11.0] - 2021-26-12

### Added

- 52 new icon
- Google-site-verification meta

### Removed

- Github icon

## [0.10.8] - 2021-22-12

- Code refactoring

### Removed

- Pinia

## [0.10.7] - 2021-14-12

- Added more icons:
  - `double-chevron-down`, `double-chevron-left`, `double-chevron-up`, `double-chevron-right`
  - `bookmark`, `chat-square`, `messages`, `send`, `camera`, `trash-can`
- Removed copyright from footer

### UI

- Icons grid is now more compact

## [0.10.6] - 2021-13-12

### UI

- Displayed icons are now smaller
- Changed font secondary color

## [0.10.5] - 2021-12-12

- Added more icons
- Every icon is now on 20x20 grid with 24x24 view box

## [0.10.4] - 2021-07-12

- Fixed illustration svgs not loading
- Fixed settings position

## [0.10.3] - 2021-07-12

### Changed

#### Refactoring

- Moved icon from `src/svg-icons/scg-icons.ts` to `src/svg-icons/index.ts`
- Moved css variables from `_vars.scss` to main store
- Renamed `views/Icon.vue` to `views/IconPopup.vue`

#### UI

- Notification is centered on mobile
- Fade in transition on icon popup
- Icon settings 'popup' changed to inputs

## [0.10.2] - 2021-04-12

- Fixed build errors

## [0.10.1] - 2021-04-12

- Fixed build errors

## [0.10.0] - 2021-04-12

- Migrate to vue and vue3

## [0.9.2] - 2021-03-12

- Bugfixes

## [0.9.1] - 2020-07-25

### Added

- More icons
- User can change color of icons

### Changed

- New dark mode accent color
- Icon page is more mobile friendly - slides in from bottom and sticks to it

## [0.9.0] - 2020-07-15

### Added

- Dark mode

## [0.8.4] - 2020-07-10

### Added

- Support for searching with query parameter
  - `https://sveegy.vercel.app/icons?search=home`
- Support for setting size with query parameter on
  - /icons
  - /:specific-icon
  - `?size=3rem`

## [0.8.3] - 2020-07-10

### Changed

- Fixed date of publishing version 0.8.2 in changelog

## [0.8.2] - 2020-07-10

### Added

- Every notification hides after 3 seconds, even if it is sent while the previous one already exists
- Transitions between routes
- Notifies when icon html is copied

### Changed

- Size of downloadable svg icons is now 24px(2rem before)

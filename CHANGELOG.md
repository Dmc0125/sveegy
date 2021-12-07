# Changelog

All notable changes to Sveegy will be documented in this file.

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

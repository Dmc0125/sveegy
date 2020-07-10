# Changelog

All notable changes to Sveegy will be documented in this file.

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
- Transitions betweem routes
- Notifies when icon html is copied

### Changed

- Size of downloadable svg icons is now 24px(2 rem before)

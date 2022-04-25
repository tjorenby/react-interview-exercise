# **School Finder Prototype by Tyler Jorenby**

## About This Project

This app was designed to allow users to search for public and private schools within the United States by District Name or Keyword. The returned results are sorted by State. Users can then search for schools within each District result by selecting the desired district. Notifications are provided in the event no District or School results are found.

## Demo

<img src="./school-finder-demo.gif" alt="demo" style="width: 100%">

## Install

To run this application:

- run `npm install` from the project root directory
- run `npm run dev` to launch the React app

## Considerations

When building this app, my primary focus was to provide context around the search results. By limiting search functionality to District-only, a natural "path" was developed for users to comfortably and quickly navigate to their desired District / School. Strong emphasis was put on scalability, readability, and reusabiity when creating the component structure.

## TODO / Improvements

- Allow users to search by School -or- District keywords. This would eliminate the requirement of having to know the associated District name.
- Return more robust 'School' data to provide additional value to users.
- Fix TypeScript errors _(First experience with TypeScript!)_
- Add responsive design elements for use on mobile devices
- Refactor 'Home' component to reduce code length.
- Evaluate use of Chakra UI components and improve on readibility as needed _(First experience with Chakra UI!)_
- Add "eye candy" animations to transitions to be more in-line with the CharacterStrong website.

## Additional Dependencies

- [React Hook Form] (https://react-hook-form.com/)
- [React Select] (https://react-select.com/home)
- [File Loader] (https://www.npmjs.com/package/file-loader)

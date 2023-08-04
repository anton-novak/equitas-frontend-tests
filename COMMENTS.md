### Notes on the task by Anton Novak

This is a brief description of some things I introduced into the app:
* First thing I thought of was that cards were probably not optimal for displaying information on SpaceX missions. Cards took a lot of space and contained duplicate information. I refactored the whole app to use `<Table>` component that seemed a better choice for displaying the info.
    * During the refactor I had to refactor pagination controls as well to utilize interfaces native to MUI `<TablePagination>` component.
    * Banded rows are styled for better presentation based on their indices in the `map` of `<Launch>` components.
    * A logical step could have been to introduce some sort, search or filter functionality but that would have required tinkering with the API calls. This was one of the restrictions, so I dropped that idea.
* Clicking on rows now produces additional info on the mission, including mission logo, a pic of the rocket (these are mostly the same, but that's what the API sends back), a brief description and links to YouTube launch video and WikiPedia, if any. I achieved this by using `<Modal>` MUI component.
* The app now has a top bar with a logo, title and a how-to-use button that produces a `<Popover>` with brief instructions.
* The development build of the app produces some errors in the console that are probably related to peculiarities of MUI, but these do not break the build, and I could have fixed them with more time and by going deeper into the MUI docs.
# GeePay Challenge

### Getting Started

To get stated, follow the following steps:

- Install Vite app using `npm create vite@latest`
- In the course of the installation you'd be allowed to give name to you application.
- When installation is completed navigate to the folder (name of your app), there in, you'll find you Vite app.
- From there, you can start building.

### Basic libraries used

- react icons: For some icons needed.
- recharts: This was used to develop the bar chart.

### Improvements made to the design

Click [figma design](https://www.figma.com/file/IvIZCBKMfmY3Qty0Gqx6S8/Analytics-Dashboard?node-id=1%3A3&mode=dev) to see the design developed. The folllowing improvements were made:

1. Overall responsive development: Made the design fully accessible on all possible screen sizes.
2. At screen size less than or equal to 660px, there is a overlay telling user that the dashboard can be better viewed on larged screen tablet or desktop; but still allows users to "view anyway" while on mobile.
3. Dark mode feature: The dark mode feature was integrated for those that prefer te dark version or those that their eyes are sensitive to too bright screens
4. Header improvements:

- At small screen, made the profile a dropdown for better user experience.
- At small screen, removed the calender text "November, 15 2023" and turned it to `tooltip`
- At small screen, the seach input keeps reducing then was removed and turned to dropdown

5. At 660px or less, the graph and "last order" section overflowed on the x-axis. This is so that at small screens users can still still see all information.
6. Navigation guides: There are two major navigation guides which are:

- The overlay which tells the user before-hand that the dashboard can be better viewed on large screen tablet or desktop, but doesn't stop user from viewing on mobile if they want to
- The scroll-right guild: The scoll right is a guide to the users to make the user know the graph and 'last order' sections are scrollable on the x-axis if when their screen is 660px or less.

To read more on Vite and its installation, visit [here](https://vitejs.dev/)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- @vitejs/plugin-react uses Babel for Fast Refresh
- @vitejs/plugin-react-swc uses SWC for Fast Refresh

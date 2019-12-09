We built our application using the MERN stack: MongoDB, Express, React.js, and Node.js. The client-side of our application is covered by React.js, which is a JavaScript library. The server-side of our application is covered by MongoDB, Express, and GraphQL. 

We knew we wanted to create a full-stack application. Thus, we considered various stack structures, but settled on the MERN stack because of overall flexibility, scalability, and efficiency. In terms of the back-end, we knew we wanted to access data and maintain a database, and we chose MongoDB/GraphQL over something like SQL because it is more lightweight, responsive, and flexible. It followed to use Express, because it allows us to build our database in an efficient manner, with ease of backend coding. In terms of the front-end, we knew we wanted a website which was dynamic, so we couldn’t just hardcode the display in HTML. We also heard React.js was a library which allowed easy integration with frontend and backend, so it seemed like a great option. Thus, the MERN stack was the best option.

Our website is for AACF, the Asian American Christian Fellowship on campus. The main functions of our site are: searching and locating nearby churches, and maintaining a database of AACF members and filtering them by church. We have pages displaying the churches in the Cambridge-area, individual pages for Aletheia/Citylife/Symphony (which are the churches that AACF members attend), a photo gallery, a form to be added as a member, an about page, and our home page. These pages can all be accessed on the nav bar.

Going through our codebase, let’s first look at the backend. Our server.js file holds our main information, importing Express and using GraphQL, connecting to our mongoDB database under Josh’s account. This is maintaining our members, so refer to the src/pages/members folder. You will see various css and js files about AddMember, Member, and Members. These are all files which hold both back-end code to actually access/change the database, and the front-end React code which displays the “Members” and the “Add Member” page. 

Now let’s look at the src/components folder. The About folder displays our “About Us” page. The Church folder has many files; noteworthy are the Church and Churchlist files, as well as Aletheia/Symphony/Citylife. Church covers the display of each Church in the table, and Churchlist displays the entire table of Churches, and very importantly, holds the filter function. This allows filtering based on what you type in, leaving results containing the word you type. Next is the Map folder. This contains Map.js, which is how the map is rendered on the “Churches” page. It references a json file with the church info and the latitude/longitude coordinates of the churches. This allows the map to display the church locations as markers. This is done through React, with the help of the node package react-google-map. Finally is the Photos folder. This contains photos.js which displays our photo gallery using the node package react-images, and photos2.js which details the pictures displayed.

Next, the src/data folder holds churches.json which is how the map displays icons. Next, src/helpers holds ScrollToTop which just helps our website scrolling.

Now, the src/pages folder. The Home folder allows for our Home page, which displays the button connecting to the “Add Members” page. We have already covered the Members folder.

Next, we have the App.cs/js and Index.cs/js files. App creates the different pages for the website, and index returns our full site. 

Lastly, the mapStyles.js file is an add-on which displays our map with the icy blue color. We took this design from snazzy maps at https://snazzymaps.com/style/7/icy-blue.












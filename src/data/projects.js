import LandingImage from '../assets/landing_page.jpg';
import SalesImage from '../assets/sales_crud.jpg';
import DashImage from '../assets/dash_covid.jpg';
import RestImage from '../assets/rest_app.jpg';
import EcommImage from '../assets/ecomm_shoes.jpg';

export const ProjectsData = [
  {
      "title": "Landing Page",
      "techs": "HTML CSS",
      "image": LandingImage,
      "description": "A landing page responsive of one payments services provider, with products and faqs section.",
      "link_project": "https://irvingc48.github.io/",
      "link_repository": "https://github.com/IrvingC48/IrvingC48.github.io"
  },
  {
      "title": "Sales CRUD",
      "techs": "HTML CSS JS",
      "image": SalesImage,
      "description": "A page that manages sales, products and purchase subtotal. Taking advantage of the processes CRUD (Creat, Read, Update, Delete) and the LocalStorage to manage the data.",
      "link_project": "https://irvingc48.github.io/ventas_crud/",
      "link_repository": "https://github.com/IrvingC48/ventas_crud"
  },
  {
      "title": "Dashboard COVID",
      "techs": "HTML CSS JS CHARTJS",
      "image": DashImage,
      "description": "Informative dashboard of confirmed, dead and recovered cases of Covid_19, by country. The graphs show the accumulated and historical data from various countries, about behavior of the pandemic in the country.",
      "link_project": "https://irvingc48.github.io/dashboard/",
      "link_repository": "https://github.com/IrvingC48/dashboard"
  },
  {
      "title": "Restaurant Reservations",
      "techs": "HTML CSS REACTJS NODEJS EXPRESSJS FIREBASE",
      "image": RestImage,
      "description": "A reservation app for a restaurant, developed with Javascript and React components. The information is stored in Google’s Firebase. React Hooks like useEffect, useState, useContext and useReducer are used.",
      "link_project": "https://relaxed-morse-139b34.netlify.app/",
      "link_repository": "https://github.com/IrvingC48/Restaurant_App"
  },
  {
      "title": "E-Comm Shoes",
      "techs": "HTML SASS REACTJS NODEJS EXPRESSJS MONGODB",
      "image": EcommImage,
      "description": "An E-commerce App to buy shoes, developed with Javascript and React components on the Front-End. The information is stored in MongoDB. On the Back-End, ExpressJS, Axios, Mongoose and dotenv are used. Also libreries of password hashing and authorization token generator such as Bcrypt and JWT, respectively.",
      "link_project": "https://peaceful-minsky-12c968.netlify.app/",
      "link_repository": "https://github.com/IrvingC48/E_Comm_FE"
  }
];
import { Counter } from "./components/Counter";
import CreateTeacher from "./components/CreateTeacher";
import DeleteTeacher from "./components/DeleteTeacher";
import EditTeacher from "./components/EditTeacher";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import MobileList from "./components/MobileList";
import TeacherList from "./components/MobileList";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/navbar',
    element: <Navbar />
  },
  {
    path: '/createteacher',
    element: <CreateTeacher />
  },
  {
    path: '/teacherlist',
    element: <MobileList />
  },
  {
    path: '/editteacher/:id',
    element: <EditTeacher />
  },
  {
    path: '/deleteteacher/:id',
    element: <DeleteTeacher />
  },
  {
    path:'/login',
    element:<Login/>
  }
];

export default AppRoutes;

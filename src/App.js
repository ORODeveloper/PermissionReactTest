import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate,Link, useNavigate} from 'react-router-dom';
import {ROLES,ACTIONS,MODULES,PERMISSIONS} from './RolesandActions';
import Login from './pages/Login';



// Protected route component
const ProtectedRoute = ( {element,isAuthenticated} ) => {
  return isAuthenticated ? element : <Navigate to="/" />;
};
// Sidebar component to display modules based on user's role and permissions
const Sidebar2 = ( {role} ) => {
  const [ modules,setModules ] = useState( [] );
  const [ actions,setActions ] = useState( [] );
  const [ moduleactions,setSelectedModuleActions ] = useState( [] );

  const handleModuleClick = ( module,index ) => {
    console.log( "actionsactions",actions[ 0 ]?.[ module ] );
    setSelectedModuleActions( actions[ 0 ]?.[ module ] );
  };

  // Function to filter modules based on user's permissions
  const filterModules = () => {
    const userPermissions = PERMISSIONS[ role?.role ];
    console.log( "userPermissions",typeof ( userPermissions ) );
    setActions( [ userPermissions ] )
    console.log( "actionnnn",actions );
    const allowedModules = Object.keys( userPermissions ).filter( module => userPermissions[ module ].length > 0 );
    console.log( "allowedModulesallowedModules",allowedModules );
    setModules( allowedModules );
  };


  useEffect( () => {
    filterModules();
  },[ role ,moduleactions] );

  return (
    <div>
      <h2>Modules</h2>
      <ul>
      </ul>

      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            {modules?.map( ( module,index ) => (
              <li key={module}>
                <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => handleModuleClick( module,index )} to={`/${ module }`}>{module}</div>
              </li>
            ) )}
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <div class="p-4">
          <div class="grid grid-cols-1 gap-4 mb-4">
            {console.log("moduleactionsmoduleactions",moduleactions)}
            {moduleactions.map( (text, index ) => {
              return (
                <div className="border-2 p-4  border-dashed rounded-lg dark:border-gray-700" key={index}>
                  <h3>{text}</h3>
                </div>
              )
            } )}

          </div>
        </div>
      </div>

    </div>
  );
};

// Sidebar component to display modules based on user's role and permissions
const Sidebar = ( {role} ) => {
  const [ modules,setModules ] = useState( [] );
  const [ actions,setActions ] = useState( [] );
  const navigate = useNavigate();


  // Function to filter modules based on user's permissions
  const filterModules = () => {
    const userPermissions = PERMISSIONS[ role ];
    console.log( "userddd===",userPermissions );
    setActions( userPermissions )
    const allowedModules = Object.keys( userPermissions ).filter( module => userPermissions[ module ].length > 0 );
    setModules( allowedModules );
  };

  // Call filterModules function when component mounts
  useEffect( () => {
    filterModules();
  },[ role ] );

  return (
    <div>
      <h2>Modules</h2>
      <ul>
        {modules?.map( module => (
          <li key={module}>
            <Link to={`/${ module }`}>{module}</Link>
          </li>
        ) )}
      </ul>

      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            {modules?.map( module => (
              <li key={module}>
                <div onClick={()=>navigate(`/${ module }`)} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">{module}</div>
              </li>
            ) )}
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              
              {/* <p class="text-2xl text-gray-400 dark:text-gray-500">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p> */}

              {PERMISSIONS[ role ]?.module?.map( ( name ) => (
                <li key={name}>
                  {name}
                </li>
              ) )}
            </div>

          </div>
        </div>

      </div>


    </div>
  );
};

// Module component to display actions based on user's permissions
const Module = ( {module,role} ) => {
  const userPermissions = PERMISSIONS[ role ][ module ];

  return (
    <div className="module">
      <h2>{module}</h2>
      <ul>
        {userPermissions.includes( ACTIONS.VIEW ) && <li>View</li>}
        {userPermissions.includes( ACTIONS.CREATE ) && <li>Create</li>}
        {userPermissions.includes( ACTIONS.UPDATE ) && <li>Update</li>}
        {userPermissions.includes( ACTIONS.DELETE ) && <li>Delete</li>}
      </ul>
    </div>
  );
};


const App = () => {
  const [ isAuthenticated,setIsAuthenticated ] = useState( false );
  const [ role,setRole ] = useState( '' );
  const [ modules,setModules ] = useState( [] );

  const authenticate = ( role,modules ) => {
    console.log( "HEllo",role,modules );
    setIsAuthenticated( true );
    setRole( role );
    setModules( Object.keys( PERMISSIONS[ role ] ) );
    console.log( "modulesmodules==",PERMISSIONS[ role ] );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login authenticate={authenticate} isAuthenticated={isAuthenticated} />} />

        <Route
          path="/dashboard"
          element={
            isAuthenticated ?
              <Dashboard role={role} modules={modules} />
              :
              <Navigate to="/" />

          }
        />

        {isAuthenticated && modules.map( module => (
          PERMISSIONS[ role ][ module ].length > 0 && (
            <Route
              key={module}
              path={`/${ module }`}
              element={renderModulePage( module,role )}
            />
          )
        ) )}
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

const Dashboard = ( {role,modules} ) => {
  console.log( "rolerole",modules );
  return (

    <div>
      <Sidebar role={role} />
    </div>
  );
};

const PropertiesPage = ( role ) => {
  console.log( "rolerole7676",role );
  return (
    <div> <Sidebar2 role={role} /> </div>
  )
};

const TenantsPage = ( role ) => {
  console.log( "rolerole7676",role );


  
  return (
    <div> <Sidebar2 role={role} /> </div>
  )
};
const LeasesPage = ( role ) => {
  console.log( "rolerole7676",role );
  return (
    <div> <Sidebar2 role={role} /> </div>
  )
};
const MaintenanceRequestsPage = ( role ) => {
  console.log( "rolerole7676",role );
  return (
    <div> <Sidebar2 role={role} /> </div>
  )
};
const FinancialsPage = ( role ) => {
  console.log( "rolerole7676",role );
  return (
    <div> <Sidebar2 role={role} />fsdv </div>
  )
};

const renderModulePage = ( moduleName,role ) => {
  switch ( moduleName )
  {
    case MODULES.PROPERTIES:
      return <PropertiesPage role={role} />;
    case MODULES.TENANTS:
      return <TenantsPage role={role} />;
    case MODULES.LEASES:
      return <LeasesPage role={role} />;
    case MODULES.MAINTENANCE_REQUESTS:
      return <MaintenanceRequestsPage role={role} />;
    case MODULES.FINANCIALS:
      return <FinancialsPage role={role} />;
    default:
      return null;
  }
};
export default App;

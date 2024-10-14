/*
  <Home /> 
    -> se muestra si no estoy loggeado
  <NavBar />
    -> tiene un boton que inicia sesion
  <Dashboard />
    -> se muestra si estoy loggeado
    -> muestra un h2, "Dashboard"
    -> <Info />
      -> muestra un h3, "Info"
      -> <Welcome />
        -> muestra un texto, "Bienvenido {name}"
  

  el objeto usuario tiene la siguiente estructura:
    -> { name: string; loggedIn: boolean }
  
  Resolver aplicando context.
*/

export default Home() {}

function NavBar() {}

function Dashboard() {}

function Info() {}

function Welcome() {}

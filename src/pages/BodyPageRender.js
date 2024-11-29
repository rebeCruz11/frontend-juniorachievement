

import FormularioParaActualizarUsuario from "../elements/updateProfile";
import authService from "../services/loginApi";


const RenderBodypage = async() => {
    FormularioParaActualizarUsuario()
  


    let bodyContent = document.getElementById("bodyContent")
    bodyContent.innerHTML = ''; 


    let informacionUsuario = sessionStorage.getItem("userData");

    if (!informacionUsuario) {
        console.error("No user data found in sessionStorage");
        return;
    }
    
    let result = JSON.parse(informacionUsuario);
    

    bodyContent.innerHTML = `
    <nav class="fixed top-0 z-50 w-full bg-purple-100 border-b border-purple-300 dark:bg-purple-900 dark:border-purple-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center p-2 text-sm text-purple-500 rounded-lg sm:hidden hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:text-purple-300 dark:hover:bg-purple-700 dark:focus:ring-purple-500"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="#" class="flex ms-2 md:me-24">
               <img
                   src="https://i.ibb.co/8sQDsvC/Aurora-Luxe.png"
                   class="h-8 me-3 dark:hidden"
                   alt="Aurora Luxe Logo"
               />
               <img
                   src="https://i.ibb.co/vYhrpzS/Aurora-Luxe-1.png"
                   class="h-8 me-3 hidden dark:block"
                   alt="Aurora Luxe Logo Dark"
               />
               <span
                   class="self-center text-xs font-semibold sm:text-sm whitespace-nowrap text-purple-800 dark:text-purple-100"
               >
                   Aurora Luxe
               </span>
           </a>
           
          </div>
          <div class="flex items-center">
            <div class="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  data-modal-target="small-modal10"
                  data-modal-toggle="small-modal10"
                  class="flex text-sm bg-purple-700 rounded-full focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-500"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="${import.meta.env.VITE_API_IMG}/${result.image}"
                    alt="user photo"
                  />
                </button>
                <div
                  id="small-modal10"
                  tabindex="-1"
                  class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div class="relative w-full max-w-md max-h-full">
                    <div class="relative bg-purple-50 rounded-lg shadow dark:bg-purple-800">
                      <div
                        class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-purple-600"
                      >
                        <h3 class="text-xl font-medium text-purple-800 dark:text-purple-100">
                          Profile Information
                        </h3>
                        <button
                          type="button"
                          class="text-purple-400 bg-transparent hover:bg-purple-200 hover:text-purple-800 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-700 dark:hover:text-purple-100"
                          data-modal-hide="small-modal10"
                        >
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span class="sr-only">Close</span>
                        </button>
                      </div>
                      <div class="p-4 md:p-5 space-y-4">
                        <img
                          class="profileModal"
                          src="${import.meta.env.VITE_API_IMG}/${result.image}"
                          alt="user photo"
                        />
                        <p class="text-purple-800 dark:text-purple-100">
                          ${result.nombre} ${result.apellido}
                        </p>
                        <p class="text-purple-800 dark:text-purple-100">
                          ${result.email}
                        </p>
                      </div>
                      <div
                        class="flex items-center p-4 md:p-5 border-t border-purple-200 rounded-b dark:border-purple-600"
                      >
                        <button
                          data-modal-target="crud-modal"
                          data-modal-toggle="crud-modal"
                          class="block text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                          type="button"
                        >
                          Update Information
                        </button>
                        <button
                          data-modal-hide="small-modal10"
                          type="button"
                          class="py-2.5 px-5 ms-3 text-sm font-medium text-purple-800 focus:outline-none bg-purple-50 rounded-lg border border-purple-300 hover:bg-purple-100 hover:text-purple-900 focus:z-10 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-700 dark:bg-purple-800 dark:text-purple-100 dark:border-purple-600 dark:hover:text-purple-100 dark:hover:bg-purple-700"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="z-50 hidden my-4 text-base list-none bg-purple-50 divide-y divide-purple-100 rounded shadow dark:bg-purple-700 dark:divide-purple-600"
                id="dropdown-user"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    
    
    

    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-purple-100 border-r border-purple-300 sm:translate-x-0 dark:bg-purple-900 dark:border-purple-700" aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-purple-100 dark:bg-purple-900">
        <ul class="space-y-2 font-medium">
            <li>
                <a href="#" class="flex items-center p-2 text-purple-800 rounded-lg dark:text-purple-100 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="w-5 h-5 text-purple-600 transition duration-75 dark:text-purple-400 group-hover:text-purple-900 dark:group-hover:text-purple-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
                <span class="ms-3">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-purple-800 rounded-lg dark:text-purple-100 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14m-8-7h2m0 0h2m-2 0v2m0-2v-2m12 1h-6m6 4h-6M4 19h16c.5523 0 1-.4477 1-1V6c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1Z"/>
                </svg>
                <!-- Modal toggle -->
                <div data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-purple-800 dark:text-purple-100 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Crear Producto
                </div>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-purple-800 rounded-lg dark:text-purple-100 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div id="theme-toggle" type="button" class="text-purple-800 dark:text-purple-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-700 rounded-lg text-2sm p-2.5">
                    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>tema de color
                </div>
                </a>
            </li>
            <li>
                <a id="users" class="flex items-center p-2 text-purple-800 rounded-lg dark:text-purple-100 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-purple-600 transition duration-75 dark:text-purple-400 group-hover:text-purple-900 dark:group-hover:text-purple-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                </svg>
                <div class="block space-y-4 md:flex md:space-y-0 md:space-x-4 rtl:space-x-reverse">
                    <div data-modal-target="extralarge-modal" data-modal-toggle="extralarge-modal" class="block w-full md:w-auto text-purple-800 dark:text-purple-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center type="button">
                        ver usuarios
                    </div>
                </div>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-purple-900 rounded-lg dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800 group">
                <svg class="flex-shrink-0 w-5 h-5 text-purple-500 transition duration-75 dark:text-purple-300 group-hover:text-purple-900 dark:group-hover:text-purple-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                </svg>
                <span id="logout" class="flex-1 ms-3 whitespace-nowrap">logout</span>
                </a>
            </li>
        </ul>
    </div>
    </aside>
   
   

   <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
   
     
            
             <div id="app" ></div>
            
         
         </div>
      </div>
   </div>

    <!-- Extra Large Modal -->
<div id="extralarge-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
   <div class="relative w-full max-w-7xl max-h-full">
       <!-- Modal content -->
       <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
           <!-- Modal header -->
           <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
               <h3 class="text-xl font-medium text-purple-900 dark:text-purple-100">
                   usuarios del sistema
               </h3>
               <button type="button" class="text-purple-400 bg-transparent hover:bg-purple-200 hover:text-purple-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white" data-modal-hide="extralarge-modal">
                   <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                   </svg>
                   <span class="sr-only">Close modal</span>
               </button>
           </div>
           <!-- Modal body -->
           <div id="formAllUsers">
               
           </div>
           <!-- Modal footer -->
           <div class="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
             <button data-modal-target="small-modal" data-modal-toggle="small-modal" class="block w-full md:w-auto text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button">
               Crear nuevo Usuario
             </button>
         
             <!-- Small Modal -->
             <div id="small-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                 <div class="relative p-4 w-full max-w-2xl max-h-full">
                     <!-- Modal content -->
                     <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                         <!-- Modal header -->
                         <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                             <h3 class="text-xl font-medium text-purple-900 dark:text-purple-100">
                                 agregar usuario
                             </h3>
                             <button type="button" class="text-purple-400 bg-transparent hover:bg-purple-200 hover:text-purple-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white" data-modal-hide="small-modal">
                                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                 </svg>
                                 <span class="sr-only">Close modal</span>
                             </button>
                         </div>
                         <!-- Modal body -->
                         <div class="p-2 md:p-2 space-y-2">
                             <div id="addNewUser"></div>
                         </div>
                         <!-- Modal footer -->
                         
                     </div>
                 </div>
             </div>
             <button data-modal-hide="extralarge-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-purple-900 focus:outline-none bg-white rounded-lg border border-purple-200 hover:bg-purple-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-700 dark:bg-purple-800 dark:text-purple-400 dark:border-purple-600 dark:hover:text-white dark:hover:bg-purple-700">Cerrar</button>
           </div>
       </div>
   </div>
 </div>
 
<!-- Main modal -->
<div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
   <div class="relative p-4 w-full max-w-2xl max-h-full">
       <!-- Modal content -->
       <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
           <!-- Modal header -->
           <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
               <h3 class="text-xl font-semibold text-purple-900 dark:text-purple-100">
                   Creando Producto 
               </h3>
               <button type="button" class="text-purple-400 bg-transparent hover:bg-purple-200 hover:text-purple-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white" data-modal-hide="default-modal">
                   <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                   </svg>
                   <span class="sr-only">Close modal</span>
               </button>
           </div>
           <!-- Modal body -->
           <div class="p-4 md:p-5 space-y-4">
             <div id="form-add"></div>
           </div>
           <!--data-modal-hide="default-modal"-->
           <!-- Modal footer -->
           <div class="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
               <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-purple-700 rounded-lg border border-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                   Crear Producto
               </button>
               <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-purple-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                   Cerrar
               </button>
           </div>
       </div>
   </div>
</div>
    `
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }
    
    var themeToggleBtn = document.getElementById('theme-toggle');
    
    themeToggleBtn.addEventListener('click', function() {
    
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');
    

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
    

        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
        
    });

    const logout = document.getElementById("logout");
    if (logout) {
        logout.addEventListener("click", async () => {
            try {
                localStorage.clear();
                sessionStorage.clear();
                await authService.logout();
                

                window.history.pushState({}, '', '/login');
                window.dispatchEvent(new Event('popstate'));
                window.location.reload();
            } catch (error) {
                console.error("Logout error:", error);
            }
        });
    }
    
    

    

    

}

export default RenderBodypage
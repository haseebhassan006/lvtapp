import {createStore} from "vuex";
import axios from 'axios'


const tmpServeys = [

    {
      id: 100,
      title: 'title',
      slug: 'title',
      status:'draft',
      image:'https://picsum.photos/200/300',
      descriuption:'This is test Servey',
      created_at:'',
      updated_at:'',
      expire_at:'',
      question:[
          {
            id: 1,
            type: "select",
            description:null,
            question:'Who are u?',
            data:{
               option :[
               {
                  uuid:'jfkhefsjgsjgkgldsf',
                  text:'me'
               }
               ]
            }
          },
          {
            id: 3,
            type: "checkbox",
            description:null,
            question:'Who are u?',
            data:{
               option :[
               {
                  uuid:'jfkhefsjgsjgkgldsf',
                  text:'me'
               }
               ]
            }
          },
           {
            id: 4,
            type: "radio",
            description:null,
            question:'Who are u?',
            data:{
               option :[
               {
                  uuid:'jfkhefsjgsjgkgldsf',
                  text:'me'
               }
               ]
            }
          },
         {
            id: 5,
            type: "radio",
            description:null,
            question:'Who are u?',
            data:{
               option :[
               {
                  uuid:'jfkhefsjgsjgkgldsf',
                  text:'me'
               }
               ]
            }
          }
      ]
    },

];

const axiosClient = axios.create({
   baseURL : 'http://localhost:8000/api' 
})
axiosClient.interceptors.request.use(config => {

   config.headers.Authorization = `Bearer ${store.state.user.token}`;
   return config;
})
const store = createStore({
   state:{
   	user:{
   		data:{},
         token:sessionStorage.getItem('TOKEN')
   	},
      serveys:

         [...tmpServeys]
      
   },
   getter:{},
   actions:{
      register({commit},user) { 

         return axiosClient.post('register',user)
                           .then(({data}) =>{
                              commit('setUser',data)
                              return data;
                           })
      
   } ,
       login({commit},user) { 

        return axiosClient.post('login',user)
                           .then(({data}) =>{
                              commit('setUser',data)
                              return data;
                           })
        
      
   } ,
     register({commit}) { 

         return axiosClient.post('register',user)
                           .then((response) =>{
                              commit('logout')
                              return response;
                           })
      
   } 
},
   mutations:{
         logout: (state) =>{
         state.user.data = {};
         state.user.token = null;
      },
      setUser:(state,userData) => {
         state.user.token = userData.token;
         state.user.data = userData.user;
         sessionStorage.setItem('TOKEN',userData.token);

      }
   },
   modules:{
   
   }

})

export default store;
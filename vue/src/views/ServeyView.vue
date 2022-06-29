<template>
 
   <PageComponent title="View Or Create A Servey">
       <template v-slot:header>
            <div class="flex items-center justify-between">
                  <h1 class="text-3xl font-bold text-gray-900">
                       {{model.id ? model.title : 'Create Survey'}}
                  </h1>
            </div>
       </template>
      <form @submit.prevent="saveServey">
           <div class="shadow sm:rounded-md sm:overflow-hidden">

               <div>
                <label class="block text-sm font-medium text-gray-700">Image</label>
                   <div class="mt-1 flex items-center">
                     <img src="" class="w-46 h-48 object-cover">
                     <span class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-700"></span>
                        <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><input type="file">Change</button>
                   </div>
               </div>
               <div>
                  <label class="block text-gray-700">Title</label>
                  <input type="text" class="mt-1 focus:ring-indigo-600 focus:border-indigo-500">
               </div>
           </div>
      </form>
   </PageComponent>
</template>
<script setup>
import {ref} from 'vue'
import store from '../store'
import {useRouter} from 'vue-router'
import PageComponent from '../components/PageComponent.vue'

const route = useRouter()

let model = ref({
   title:'',
   status :false,
   description:null,
   image: null,
   expire_date:null,
   questions:[]
})






</script>

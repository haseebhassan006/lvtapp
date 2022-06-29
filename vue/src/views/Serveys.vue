<template>
 
   <PageComponent title="Serveys">
        <template v-slot:header>
        <div class="flex justify-between items-center">
            <h1 class="text-3xl font-bold">Serveys</h1>
            <router-link :to="{name:'ServeyCreate'}" class="py-2 px-3 text-white bg-green-600 hover:bg-emrald-600">
                 Create Servey
            </router-link>
        </div>
       
        </template>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <div v-for="servey in surveys" :key="servey.id" class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
            <img :src="servey.image" class="w-full h-48 object-cover">
            <h4 class="mt-4 text-lg font-bold">{{servey.title}}</h4>
            <div v-html="servey.description" class="overflow-hidden flex-1"></div>
             <div class="flex justify-between items-center mt-3">
             <router-link :to="{name:'ViewServey' , params:{id: servey.id}}" class="bg-indigo-600 px-3 py-2 text-white rounded-md hover:bg-indigo-700">Edit</router-link>

             <button class="bg-green-600 px-3 py-2 text-white rounded-md hover:bg-red-600">Delete</button>

            </div>
        </div>
            </div>

   </PageComponent>
</template>
<script setup>
import store from '../store'
import {computed} from 'vue'
import PageComponent from '../components/PageComponent.vue'

const surveys = computed(() => store.state.serveys)


function deleteSurvey(survey){
   if(confirm('Are You Sure To Delete This Survey')){

         

   }
    
}


</script>
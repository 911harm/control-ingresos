<template>
  <div class="Registro mx-auto container ">
    <h1>Registro</h1>
       <!--Temporal para ver registro sin Vuex-->
        <div>
            <table class="table table-striped text-white bg-dark">
                                <th scope="column">N°Registro</th>
                                    <th scope="column">Día</th>
                                    <th scope="column">Ingresos</th>
                                    <th scope="column">Ahorro</th> 
                                <tbody v-for="(i,index) in registro" :key=index>
                                    
                                    <tr>
                                    <th scope="row">{{index+1}}</th>
                                    <td>{{i.day}}</td>
                                    <td>{{i.ingresoT}}</td>
                                    <td>{{i.ahorro}}</td>
                                    </tr>
                                </tbody>
                            </table>
        </div>
  </div>
  <!-- para el proximo cambio haremos lo mismo pero con la implementacion en Vuex -->
</template>
<script>
export default {
  name:'Registro',
  data:function(){
   return{registro:[],
   } 

  },
 mounted(){
        if (localStorage.getItem('registro')) {
            try {
        this.registro = JSON.parse(localStorage.getItem('registro'));
        // console.log(this.registro);


      } catch(e) {
        localStorage.removeItem('ingreso-dia');
      }
        }
    }
}
</script>
<style scoped>
/* .Registro{
  max-width: 800px;
  margin: 0 auto;

} */
</style>
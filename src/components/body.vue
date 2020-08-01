<template>
    <div class="container bg-dark c-body">
        <h2 class="text-white font-italic">Control de Ingresos</h2>
        <div class="row px-5">
            <div class="bg-success col-12 col-md-5 my-3 text-white rounded-lg">
            <form>
                <div class="form-group">
                    <label >Ingresos Activos ""Fijos""</label>
                    <input type="number" class="form-control" placeholder="500,000 $">
                </div>
                <div class="form-group">
                    <label >Ingresos Extras-Pasivos</label>
                    <input type="number" class="form-control" placeholder="200.000 $" v-model="other.positivo">
                </div>
                <div class="form-group">
                    <label>Día de control</label>
                    <select class="form-control" id="day" v-model="day">
                        <option v-for="(dia,$index) in Days" :key="$index" :value=dia >{{dia}}</option>
                    </select>
                </div>
                <div class="form-group pb-3">
                    <label>Comentario</label>
                    <textarea class="form-control" id="commentary" rows="2"></textarea>
                </div>
            </form>
        </div>
        <div class="separador col-12 col-md-2"></div>
    <!-- Que se paga y donde esta -->
        <div class="bg-danger col-12 col-md-5 my-3 text-white rounded-lg">
            <form>
                <div class="form-group">
                    <label >Deberes este día</label>
                       <div class="">
                           <div v-if="day===15">
                                 <div v-for="(deber,$index) in deberes15" :key="$index">
                                    <label>{{$index}}</label><br>
                                 </div>
                            </div>

                            <div v-if="day===30">
                                 <div v-for="(deber,$index) in deberes31" :key="$index">
                                    <label>{{$index}}</label><br>
                                 </div>
                            </div>
                <hr>
                            <label><input type="checkbox" id="other" value=true v-model="other.state">Agregar</label><br>
                            <div v-if="other.state">
                                <label>Gasto Adicional</label><br>
                                <input type="text" name="gasto-adicional-title" id="gasto-adicional-title" placeholder="Motivo" v-model="other.title">
                                <input type="number" name="gasto-adicional" id="gastoadicional" placeholder="$" v-model=other.price>

                            </div>
                       </div>
                </div>
                <hr>
                        <div>
                            <h5>Resumen del Día</h5>
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                    <th scope="row">Para Deberes</th>
                                    <td>{{sumaDeberes}}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Para Ahorrar</th>
                                    <td>{{sumaAhorro}}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Para Inverciones</th>
                                    <td>{{sumaInversion}}</td>
                                    </tr>
                                </tbody>
                            </table>
                           
                        </div>
            </form>
        </div>
        <a href="#" class="btn btn-success btn-block text-white">Registrar</a>
        </div>

    
    </div>
</template>
<script>
export default {
    name:"body",
    data:function (){
        return{
            Days:[5,10,15,20,25,30],
            day:"",
            deberes:{
                base:400000,
                total:""
            },
            other:{
                state:"",
                title:"",
                price:"",
                positivo:""
            },
            deberes15:{
                     Comida:130,
                     Arriendo:250,
                     Internet:70
                     },
            deberes31:{
                     Comida:130,
                     Banco:20,     
            }

        }
    },
    computed:{
    sumaInversion:function(){
        if(this.other.positivo){
        return (parseInt(this.other.positivo)*0.2)}
        return "20% (acumula)"
    },
    sumaAhorro: function(){
        if(this.other.positivo){
        return (parseInt(this.other.positivo)*0.2)}

        return "20%"
    
        
    },
    sumaDeberes: function(){
        if(this.other.positivo){
        return (parseInt(this.other.positivo)*0.6)}
        return "Maximo 60%"
        }
    }
}
</script>

<style scoped>
.c-body{
    width: 100%;
    height: 100%;
}
</style>
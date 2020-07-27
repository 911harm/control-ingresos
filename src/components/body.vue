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
                        <option :value=15>15</option>
                        <option :value=31>31</option>
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

                            <div v-if="day===31">
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
                                    <tr v-if="day===31">
                                    <th scope="row">Para Inverciones</th>
                                    <td>{{sumaInversion}}</td>
                                    </tr>
                                </tbody>
                            </table>
                           
                        </div>
            </form>
        </div>
        </div>

    
    </div>
</template>
<script>
export default {
    name:"body",
    data:function (){
        return{
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
            day:"",
            deberes15:{
                     Ahorro:100000,
                     Comida:130000,
                     Arriendo:200000,
                     Internet:70000
                     },
            deberes31:{
                     Ahorro:100000,
                     Comida:130000,
                     Inversion:200000,
                     Banco:20000,
                     SeviciosExtra:50000,      
            }

        }
    },
    computed:{
    sumaInversion:function(){
        return this.deberes31.Inversion
    },
    sumaAhorro: function(){
        if(this.other.positivo){
        return (parseInt(this.other.positivo)*0.2)+this.deberes15.Ahorro}
        return this.deberes15.Ahorro
    
        
    },
    sumaDeberes: function(){
        if(this.other.price){
        return this.deberes.base+parseInt(this.other.price);
        }
        return this.deberes.base}
    }
}
</script>

<style scoped>
.c-body{
    width: 100%;
    height: 100%;
}
</style>
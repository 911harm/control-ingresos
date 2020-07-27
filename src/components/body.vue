<template>
    <div class="container bg-dark c-body">
        <h2 class="text-white font-italic">Control de Ingresos</h2>
        <div class="row px-5">
            <div class="bg-success col-12 col-md-5 my-3 text-white rounded-lg">
            <form>
                <div class="form-group">
                    <label >Ingresos Activos</label>
                    <input type="number" class="form-control" id="in-pay" placeholder="500,000 $">
                </div>
                <div class="form-group">
                    <label >Ingresos Extras-Pasivos</label>
                    <input type="number" class="form-control" id="out-pay" placeholder="200.000 $">
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
                                    <label>{{$index}}${{deber}}</label><br>
                                 </div>
                            </div>

                            <div v-if="day===31">
                                 <div v-for="(deber,$index) in deberes31" :key="$index">
                                    <label>{{$index}}${{deber}}</label><br>
                                 </div>
                            </div>
                <hr>
                            <label><input type="checkbox" id="other" value=true v-model="other.state">Agregar</label><br>
                            <div v-if="other.state">
                                <label>Gasto Adicional</label><br>
                                <input type="text" name="gasto-adicional-title" id="gasto-adicional-title" placeholder="Motivo" v-model="other.title">
                                <input type="number" name="gasto-adicional" id="gastoadicional" placeholder="$" v-model="other.price">
                            </div>
                       </div>
                </div>
                <hr>
                        <div>
                            <h5>Resumen del Día</h5>
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                    <th scope="row">Deberes</th>
                                    <td>{{deberes.total=deberes.base+other.price}}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Ahorrado</th>
                                    <td>{{ahorro}}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Invercion</th>
                                    <td>{{invercion}}</td>
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
            invercion:"200000",
            ahorro:"100000",
            deberes:{
                base:500000,
                total:0
            },
            other:{
                state:"",
                title:"",
                price:0
            },
            day:"",
            deberes15:{
                     Arriendo:200,
                     Internet:70,
                     Ahorro:100,
                     Comida:130
                     },
            deberes31:{
                     Inversion:200,
                     Banco:20,
                     SeviciosExtra:50,
                     Ahorro:100,
                     Comida:130
                     
            }

        }
    },
    computed:
    {
        sumadeberes:function(){
           
           return this.deberes.base+this.other.price}
    }
    
}
</script>

<style scoped>
.c-body{
    width: 100%;
    height: 100%;
}
</style>
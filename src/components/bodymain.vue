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
        <a href="#" @click=registrar class="btn btn-success mb-3 btn-block text-white">Registrar</a>
        </div>
        <!--Temporal para ver registro-->
        <!-- <div>
            <table class="table table-striped text-white">
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
        </div> -->

    
    </div>
</template>
<script>
export default {
    name:"bodymain",
    data:function (){
        
        return{
            registro:[],
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
    // mounted(){
    //     if (localStorage.getItem('registro')) {
    //         try {
    //     this.registro = JSON.parse(localStorage.getItem('registro'));
    //     console.log(this.registro);


    //   } catch(e) {
    //     localStorage.removeItem('ingreso-dia');
    //   }
    //     }
    // },
    methods:{
        registrar:function(){
            if(this.other.positivo && this.day){
            const dayregister={
                day:this.day,
                ingresoT:this.other.positivo,
                deberes:this.other.price,
                ahorro:this.sumaAhorro
            }
            this.registro.push(dayregister);
            const parsed= JSON.stringify(this.registro)

            localStorage.setItem('registro',parsed)
            console.log("registrado el dia")}
            else{
                alert("Ingresos y Dia de registro!")
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
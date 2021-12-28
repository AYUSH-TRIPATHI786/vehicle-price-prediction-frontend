<template>
  <div>
    <v-sheet 
      color='red lighten-5'
      height=100
      class='d-flex justify-center align-center red--text'
    ><h1>Vehicle Price Prediction model</h1></v-sheet>
    <v-card>
      <v-form
      ref='form'
      >
        <v-text-field
          v-model='form.Year'
          label="Year"
          required
        ></v-text-field>
        <v-text-field
          v-model='form.Present_Price'
          label="Present Price"
          required
        ></v-text-field>
        <v-text-field
          v-model='form.Kms_Driven'
          label="Kms Driven"
          required
        ></v-text-field>
        <v-select
          v-model='form.Owner'
          label="Owner"
          :items="['1','2','3']"
          required
        ></v-select>
        <v-select
          v-model='form.Fuel_Type'
          :items="['Petrol','Diesel','CNG']"
          label="Fuel Type"
          required
        ></v-select>
        <v-select
          v-model='form.Seller_Type'
          :items="['Individual','Dealer']"
          label="Seller Type"
          required
        ></v-select>
        <v-select
          v-model='form.Transmission'
          :items="['Automatic','Manual']"
          label="Transmission"
          required
        ></v-select>

        <div class='d-flex justify-center'>
          <v-btn
            :disabled='false'
            color="success"
            @click='submitted'
          >
            Submit
          </v-btn>
        </div>

      </v-form>
      <v-card-title v-if="result"> Your Predicted Price is {{prediction}} Lakhs</v-card-title>
    </v-card>  
  </div>
</template>

<script> 
import axios from 'axios';
export default {
  data: function(){
    return {
      result:false,
      form:{
        Year: '',
        Present_Price:'',
        Kms_Driven:'',
        Owner:'',
        Fuel_Type:'',
        Seller_Type:'',
        Transmission:'',
      },
      prediction: 0,
      greeting: 'Hello, Vue!', 
      flaskGreeting: '',
    }
  },
  methods:{
    async submitted(){
      const response =  await axios.post("http://mydomain.com:5000/greeting", this.form).catch(error => {
                          console.error("There was an error!", error);
                        });
      this.flaskGreeting = response.data.greeting;
      this.prediction = response.data.prediction
      this.result=true;
    }
  }
}
</script>

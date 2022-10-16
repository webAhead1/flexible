<template>
    <div class="h-[2000px]"></div>
    <div class="slider-container">
   
   
        <div class="carousel w-full" >
            <div id="item1" class="carousel-item w-full">
               <img src="https://bootstrapmade.com/content/templatefiles/Yummy/Yummy-bootstrap-website-template.png" style="height:480px" class="w-full" />
            </div>
            <div id="item2" class="carousel-item w-full">
                <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/mahabis-creative-shoe-store.jpg" style="height:480px" class="w-full" />
            </div>
            <div id="item3" class="carousel-item w-full">
                <img src="https://agentestudio.com/uploads/ckeditor/pictures/1687/blog-design-19.png" style="height:480px" class="w-full" />
            </div>
        </div>
        <div class="flex justify-center w-full py-2 gap-2 bg-slate-50 bg-transparent">
            <!-- <div>  <button href="#item1" class="bg-white w-5 h-5 rounded-full border-2 border-[#243c5a]
        bg-white-500 focus:bg-slate-900 text-white" ></button> </div> -->
         <a class="active:bg-black focus:rounded-[30px] " href="#item1"><img src="https://img.icons8.com/material-rounded/24/000000/circled.png"/></a> 

            <!-- <a href="#item1"><img class="bg-indigo-400 text-white px-5 py-2.5 focus:bg-green-500" src="https://img.icons8.com/material-rounded/24/000000/circled.png"/></a> -->
            <a class=" rounded-[30px]  active:bg-black focus:rounded-[30px] " href="#item2"><img src="https://img.icons8.com/material-rounded/24/000000/circled.png"/></a>
            <a class="active:bg-black focus:rounded-[30px] " href="#item3"><img src="https://img.icons8.com/material-rounded/24/000000/circled.png"/></a>
        </div>
    </div>
    
</template>


<script>
export default {
    
    name: 'imagesliderdemo',
    props: {
        msg: String
    },
    data(){
        return {
            counter:1,
            timer:null,
            clicked:true
        }
    },
    mounted() {
      this.timer = setInterval(()=>{
          this.counter++
          if(this.counter > 3) this.counter = 1
        //  this.$router.push(`/#item${this.counter}`)
        //   this.$route.hash='/#item' + this.counter
        //   this.$route.href='/#item' + this.counter
    }, 5000);
    },
}
 
    
    // methods: {
    //     // activate: function () {
    //     //     original.classList.add("active");
    //     // }
    // },


</script>

<script setup>
    function changeBtnIcon()  {
        const menu = document.querySelector(".box-menuIcon")
        menu.classList.toggle("animar")
        console.log(menu)
    }

</script>
<template>
    <span @click="changeBtnIcon()">
    <div class="box-menuIcon" >
        <div class="menu-bars"></div>
        <div class="menu-bars"></div>
        <div class="menu-bars"></div>
    </div>
    </span>
    
</template>
<style scoped>
    .box-menuIcon {
        height: 30px;
        width: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: start;
    }

    .menu-bars {
        background-color: white;
        width: 100%;
        height: 10%;
    }

    .box-menuIcon div:nth-child(2) {
        width: 80%;
    }

    .box-menuIcon div:nth-child(3) {
        width: 60%;
    }
    
    .box-menuIcon.animar {
        justify-content: center;
    }

    .box-menuIcon div:nth-child(1) {
        transition: 0.3s ease-in-out;
    }

    .box-menuIcon div:nth-child(3) {
        transition: 0.3s ease-in;
     } 
    
    .box-menuIcon div:nth-child(2) {
       transition: 0.3s ease-in-out;
    } 

    .box-menuIcon.animar div:nth-child(1) {
        transform: rotate(135deg);
        width: 70%;
        transition: 0.3s ease-in-out;
    }
    .box-menuIcon.animar div:nth-child(3) {
        display: none;
        transition: 0.3s ease-in;
    }
    .box-menuIcon.animar div:nth-child(2) {
        transform: rotate(-135deg);
        width: 70%;
        transition: 0.3s ease-in-out;
    }
</style>
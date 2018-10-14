<template>
    <div id="carsoul">
        <Carousel autoplay v-model="value" loop>
            <CarouselItem v-for="item in picArray" :key="item.id">
                <router-link :to="item.link">
                    <div :style="'background:url('+ item.url +')'" class="carsoul-item"></div>
                </router-link>
            </CarouselItem>
        </Carousel>
    </div>
    

</template>
<style lang="less">
    #carsoul {
        width: 950px;
        .carsoul-item {
            width: 950px;
            height: 500px;
            background-repeat: no-repeat;
            // background-position: center;
            background-size: contain;
        }
    }
    
</style>
<script>
    export default {
        data () {
            return {
                value: 0,
                picArray: [
                    {
                        label: '',
                        url: require('../../assets/images/carsoul/home-1.jpg'),
                        link: '',
                        id: 1,
                    },
                    {
                        label: '',
                        url: require('../../assets/images/carsoul/home-2.jpg'),
                        link: '',
                        id: 2
                    },
                    {
                        label: '',
                        url: require('../../assets/images/carsoul/home-3.jpg'),
                        link: '',
                        id: 3
                    },
                    {
                        label: '',
                        url: require('../../assets/images/carsoul/home-4.jpg'),
                        link: '',
                        id: 4
                    },
                    {
                        label: '',
                        url: require('../../assets/images/carsoul/home-5.jpg'),
                        link: '',
                        id: 5
                    }
                ]
            }
        },
    }
</script>
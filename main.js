new Vue({

    el: "#main_area",
    data: {
        home_resourse_url: "https://nikomax.ru/",
        resourse_url: "https://nikomax.ru/get_products/section/cooper_cable.json",
        getdata: {},
        isGrid: true
    },
    mounted() {
        fetch(this.resourse_url, {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(res => this.getdata = res);

    },
    methods:{
        imageurl(url){
            return this.home_resourse_url+url;
        }
    }
    
});
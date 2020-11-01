new Vue({

    el: "#test",
    data: {
        resourse_url: "https://nikomax.ru/get_products/section/cooper_cable.json",
        getdata: {}
    },
    mounted() {
        var test
        fetch(this.resourse_url, {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(res => this.getdata = res);

    }
});
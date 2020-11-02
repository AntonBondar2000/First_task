new Vue({

    el: "#main_section",
    data: {
        home_resourse_url: "https://nikomax.ru/", // домашняя страница
        resourse_url: "https://nikomax.ru/get_products/section/cooper_cable.json", // урл для получения json
        getdata: [], // json
        isGrid: true, // для условия(сетка или список)
        card_per_page: 9, // Элементов на страници
        current_page_number: 1 // Текущая страница
    },
    mounted() {
        fetch(this.resourse_url, { // Получение json
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(res => this.getdata = res);

    },
    computed:{
        pages(){ // Вычисление, сколько всего страниц
            return Math.ceil(this.getdata.length / this.card_per_page)
        },
        paginatedData(){ // Слайс json на нужное количестов элементов на страницу
            let from = (this.current_page_number -1) * this.card_per_page;
            let to = from + this.card_per_page;
            return this.getdata.slice(from,to)
        }
    },
    methods:{
        imageurl(url){ // урл для изображения
            return this.home_resourse_url+url;
        },
        TransferFirstPage(){ // Переход на 1 страницу
            this.current_page_number = 1;
        },
        TransferLastPage(){ // Переход на последнюю страницу
            this.current_page_number = this.pages;
        },
        TransferPrevPage(){ // Переход на страницу назад
            this.current_page_number --;
        },
        TransferNextPage(){ // Переход на страницу вперед
            this.current_page_number ++;
        },
        TransferCurrentPage(page){ // Переход на нужную страницу
            this.current_page_number = page;
        }
    }
    
});
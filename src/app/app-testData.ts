export class testData {
    public static messagesData = [{title:'Тема сообщения выяснения срок подачи жалобы в суд на МТС',
                        messages:[{
                            isMine:true,
                            text:'Примерный срок подачи жалобы в суд колеблится в приделах от трех до пяти месяцев'
                        },{
                            isMine:false,
                            text:'Скажите приблизительно сколько это будет стоить???' 
                        },{
                            isMine:true,
                            text:'В зависимости от сложности вопроса может стоить от 10к до 150к с сопровождением в суде'
                        }]},
                        {title:'Тема сообщения выяснения срок подачи жалобы в суд на МТС',
                        messages:[{
                            isMine:true,
                            text:'Примерный срок подачи жалобы в суд колеблится в приделах от трех до пяти месяцев'
                        },{
                            isMine:false,
                            text:'Скажите приблизительно сколько это будет стоить???' 
                        },{
                            isMine:true,
                            text:'В зависимости от сложности вопроса может стоить от 10к до 150к с сопровождением в суде'
                        }]},
                        {title:'Тема сообщения выяснения срок подачи жалобы в суд на МТС',
                        messages:[{
                            isMine:true,
                            text:'Примерный срок подачи жалобы в суд колеблится в приделах от трех до пяти месяцев'
                        },{
                            isMine:false,
                            text:'Скажите приблизительно сколько это будет стоить???' 
                        },{
                            isMine:true,
                            text:'В зависимости от сложности вопроса может стоить от 10к до 150к с сопровождением в суде'
                        }]},
                        {title:'Тема сообщения выяснения срок подачи жалобы в суд на МТС',
                        messages:[{
                            isMine:true,
                            text:'Примерный срок подачи жалобы в суд колеблится в приделах от трех до пяти месяцев'
                        },{
                            isMine:false,
                            text:'Скажите приблизительно сколько это будет стоить???' 
                        },{
                            isMine:true,
                            text:'В зависимости от сложности вопроса может стоить от 10к до 150к с сопровождением в суде'
                        }]},
                        {title:'Тема сообщения выяснения срок подачи жалобы в суд на МТС',
                        messages:[{
                            isMine:true,
                            text:'Примерный срок подачи жалобы в суд колеблится в приделах от трех до пяти месяцев'
                        },{
                            isMine:false,
                            text:'Скажите приблизительно сколько это будет стоить???' 
                        },{
                            isMine:true,
                            text:'В зависимости от сложности вопроса может стоить от 10к до 150к с сопровождением в суде'
                        }]}
                    ];

    public static lawyerDocuments = [{
        title:'fist document',
        subtype:'prava',
        price:'250',
        icon:'../../assets/img/hone.svg'
      },{
        title:'second document',
        subtype:'dengi',
        price:'250',
        icon:'../../assets/img/hone.svg'
      },{
        title:'third document',
        subtype:'zemlya',
        price:'250',
        icon:'../../assets/img/hone.svg'
      }];

    public static lawyerFaqs = [
        {  
            answer:'first answer',
            question:'first question',
            authorId:'',
            authorImg:'../assets/img/pic.jpg'
        },
        {  
          answer:'second answer',
          question:'second question',
          authorId:'',
          authorImg:'../assets/img/pic.jpg'
        },
        {  
          answer:'third answer',
          question:'third question',
          authorId:'',
          authorImg:'../assets/img/pic.jpg'
        }
      ];  
    public static categories =  [{category:'Жилищное право',
    visible:true,
    icon:'../assets/img/pic.jpg',
    subcategory:[
                    {category:'Претензии',visible:true},
                    {category:'Исковые заявления',visible:true},
                    {category:'Документы в суд',visible:true}]
    },

    {category:'Земельное право',
    icon:'../assets/img/pic.jpg',
    subcategory:[
        {category:'Земля',visible:true},
        {category:'Добыча',visible:true},
        {category:'Нефть',visible:true},
        {category:'Газ',visible:true}]
    },
    {category:'Семейное право',
    icon:'../assets/img/pic.jpg',
    subcategory:[
        {category:'Семья',visible:true},
        {category:'Дети',visible:true},
        {category:'Супруги',visible:true},
        {category:'Алименты',visible:false},
        {category:'Любовницы',visible:true}]
    }
];  
    public static cities = [
        {
            index: 0,
            region: 'Москва',
            cityList: ['Центральный','Северный','Северо-Восточный','Восточный','Юго-Восточный','Южный','Юго-Западный','Западный','Северо-Западный','Зеленоградский','Троицкий','Новомосковский']
        },
        {
            index: 1,
            region: 'Московская область',
            cityList: [	'Балашиха', 'Подольск', 'Химки', 'Королёв', 'Мытищи', 'Люберцы', 'Красногорск', 'Электросталь', 'Коломна', 'Одинцово', 'Домодедово', 'Серпухов', 'Щёлково', 'Орехово-Зуево', 'Раменское', 'Долгопрудный', 'Жуковский', 'Пушкино', 'Сергиев Посад', 'Реутов', 'Ногинск']
        },
        {
            index: 2,
            region: 'Санкт-Петербург',
            cityList: ['Адмиралтейский район','Василеостровский район','Выборгский район','Калининский район','Кировский район','Колпинский район','Красногвардейский район','Красносельский район','Кронштадтский район','Курортный район','Московский район','Невский район','Петроградский район','Петродворцовый район','Приморский район','Пушкинский район','Фрунзенский район','Центральный район']
        },
        
        
        {
            index: 3,
            region: 'Ленинградская область',
            cityList: []
        },
        
        {
            index: 4,
            region: 'Алтайский край',
            cityList: ['Барнаул', 'Бийск', 'Рубцовск']
        },	
        {
            index: 5,
            region: 'Забайкальский край',
            cityList: ['Чита']
        },	
        
        {
            index: 6,
            region: 'Камчатский край',
            cityList: ['Петропавловск-Камчатский']
        },	
        {
            index: 7,
            region: 'Краснодарский край',
            cityList: ['Краснодар', 'Сочи', 'Новороссийск', 'Армавир']
        },	
        {
            index: 8,
            region: 'Красноярский край',
            cityList: ['Красноярск', 'Норильск', 'Ачинск']
        },	
        {
            index: 9,
            region: 'Пермский край',
            cityList: ['Пермь', 'Березники']
        },	
        {
            index: 10,
            region: 'Приморский край',
            cityList: ['Владивосток', 'Уссурийск', 'Находка', 'Артём']
        },	
        {
            index: 11,
            region: 'Ставропольский край',
            cityList: ['Ставрополь', 'Пятигорск', 'Кисловодск', 'Невинномысск', 'Ессентуки']
        },	
        {
            index: 12,
            region: 'Хабаровский край',
            cityList: ['Хабаровск', 'Комсомольск-на-Амуре']
        },	
        {
            index: 13,
            region: 'Крым',
            cityList: ['Симферополь', 'Керчь', 'Евпатория']
        }
    ];
}
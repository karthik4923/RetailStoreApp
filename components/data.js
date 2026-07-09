import Foryou1 from '../assets/Foryou1.jpg';
import Foryou2 from '../assets/Foryou2.jpg';
import Foryou3 from '../assets/Foryou3.jpg';
import Foryou4 from '../assets/Foryou4.jpg';
import Foryou5 from '../assets/Foryou5.jpg';
import Foryou6 from '../assets/Foryou6.jpg';
import Fashion1 from '../assets/Fashion1.jpg';
import Fashion2 from '../assets/Fashion2.jpg';
import Fashion3 from '../assets/Fashion3.jpg';
import Fashion4 from '../assets/Fashion4.jpg';
import Fashion5 from '../assets/Fashion5.jpg';
import Fashion6 from '../assets/Fashion6.jpg';
import Jacket from '../assets/Fashion/Jacket.jpg';
import Shirt from '../assets/Fashion/shirt.jpg';
import SportShoe from '../assets/Fashion/sportsshoe.jpg';
import Backpack from '../assets/Fashion/backpack.jpg';
import Casual from '../assets/Fashion/casual.jpg';
import Kids from '../assets/Fashion/kids.jpg';
import Watch from '../assets/Fashion/watch.jpg';
import Jeans from '../assets/Fashion/Jeans.jpg';
import Mobile1 from '../assets/Mobile1.jpg';
import Mobile2 from '../assets/Mobile2.jpg';
import Mobile3 from '../assets/Mobile3.jpg';
import Mobile4 from '../assets/Mobile4.jpg';
import Mobile5 from '../assets/Mobile5.jpg';
import Mobile6 from '../assets/Mobile6.jpg';
import Elec1 from '../assets/Electronics1.jpg';
import Elec2 from '../assets/Electronics2.jpg';
import Elec3 from '../assets/Electronics3.jpg';
import Elec4 from '../assets/Electronics4.jpg';
import Elec5 from '../assets/Electronics5.jpg';
import Elec6 from '../assets/Electronics6.jpg';
import Appli1 from '../assets/Appli1.jpg';
import Appli2 from '../assets/Appli2.jpg';
import Appli3 from '../assets/Appli3.jpg';
import Appli4 from '../assets/Appli4.jpg';
import Appli5 from '../assets/Appli5.jpg';
import Appli6 from '../assets/Appli6.jpg';
import Beauty1 from '../assets/Beauty1.jpg';
import Beauty2 from '../assets/Beauty2.jpg';
import Beauty3 from '../assets/Beauty3.jpg';
import Beauty4 from '../assets/Beauty4.jpg';
import Beauty5 from '../assets/Beauty5.jpg';
import Beauty6 from '../assets/Beauty6.jpg';
import Home1 from '../assets/Home1.jpg';
import Home2 from '../assets/Home2.jpg';
import Home3 from '../assets/Home3.jpg';
import Home4 from '../assets/Home4.jpg';
import Home5 from '../assets/Home5.jpg';
import Home6 from '../assets/Home6.jpg';
import Food1 from '../assets/Food1.jpg';
import Food2 from '../assets/Food2.jpg';
import Food3 from '../assets/Food3.jpg';
import Food4 from '../assets/Food4.jpg';
import Food5 from '../assets/Food5.jpg';
import Food6 from '../assets/Food6.jpg';
import Sport1 from '../assets/sport1.jpg';
import Sport2 from '../assets/sport2.jpg';
import Sport3 from '../assets/sport3.jpg';
import Sport4 from '../assets/sport4.jpg';
import Sport5 from '../assets/sport5.jpg';
import Sport6 from '../assets/sport6.jpg';
import Toy1 from '../assets/Toy1.jpg';
import Toy2 from '../assets/Toy2.jpg';
import Toy3 from '../assets/Toy3.jpg';
import Toy4 from '../assets/Toy4.jpg';
import Toy5 from '../assets/Toy5.jpg';
import Toy6 from '../assets/Toy6.jpg';
import Book1 from '../assets/Book1.jpg';
import Book2 from '../assets/Book2.jpg';
import Book3 from '../assets/Book3.jpg';
import Book4 from '../assets/Book4.jpg';
import Fun1 from '../assets/Fun1.jpg';
import Fun2 from '../assets/Fun2.jpg';
import Fun3 from '../assets/Fun3.jpg';
import Fun4 from '../assets/Fun4.jpg';
import Fun5 from '../assets/Fun5.jpg';
import Fun6 from '../assets/Fun6.jpg';
const scrolldata=[
    {
        icon:'bag-outline',
        type:'For You',
        img:require('../assets/Foryou.png'),
    },
    {
        icon:'shirt-outline',
        type:'Fashion',
        img:require('../assets/Fashions.png'),
    },
    {
        icon:'phone-portrait-outline',
        type:'Mobiles',
        img:require('../assets/Mobiles.png'),
    },
    {
        icon:'laptop-outline',
        type:'Electronics',
        img:require('../assets/Electronics.png'),
    },
    {
        icon:'tv-outline',
        type:'Appliances',
        img:require('../assets/Applis.png')
    },
    {
        icon:'sparkles-outline',
        type:'Beauty',
        img:require('../assets/Beautys.png')
    },
    {
        icon:'alarm-outline',
        type:'Home',
        img:require('../assets/Homes.png')
    },
    {
        icon:'fast-food-outline',
        type:'Grocery',
        img:require('../assets/Grocery.png')
    },
    {
        icon:'balloon-outline',
        type:'Toys',
        img:require('../assets/Toys.png')
    },
    {
        icon:'football-outline',
        type:'Sports, Gym',
        img:require('../assets/Gyms.png')
    },
    {
        icon:'library-outline',
        type:'books',
        img:require('../assets/Books.png')
    },
    {
        icon:'bed-outline',
        type:'Furniture',
        img:require('../assets/Funs.png')
    },

];
const maindata={
    0:{
        images:[Foryou1,Foryou2,Foryou3,Foryou4,Foryou5,Foryou6],
        types:[],
        deals:[],
        Mostsale:[],
    },
    1:{
        images:[Fashion1,Fashion2,Fashion3,Fashion4,Fashion5,Fashion6],
        types: [
            { img: Jacket, name: 'Jackets' },
            { img: Shirt, name: 'Shirts' ,search:'Shirts for men'},
            { img: SportShoe, name: 'Sport Shoes' ,search:'Sport shoes for men'},
            { img: Backpack, name: 'Backpacks' },
            { img: Casual, name: 'Casuals' },
            { img: Kids, name: 'Kids fashion' },
            { img: Watch, name: 'Watches' },
            { img: Jeans, name: 'Jeans' },
            { img:require('../assets/Fashion/Formals.jpg'),name:'Formals',search:'Formal Shirts for Men'},
            { img:require('../assets/Fashion/Kurta.jpg'), name:'Kurta sets'},
            { img:require('../assets/Fashion/Jewellery.jpg'),name:'Jewellery'},
            { img:require('../assets/Fashion/Topwear.jpg'), name:'Topwear',search:'Shirts for Women'},
            { img:require('../assets/Fashion/sarees.jpg') ,name:'Sarees'},
            { img:require('../assets/Fashion/Kurtis.jpg'),name:'Kurtis'},
            { img:require('../assets/Fashion/Heels.jpg') ,name:'Heels'},
            { img:require('../assets/Fashion/Handbags.jpg'), name:'HandBags'},
            { img:require('../assets/Fashion/Trollybag.jpg'), name:'Trollybags'},
            { img:require('../assets/Fashion/winterwear.jpg'),name:'Winterwear'},
        ],
        deals:[
            {name:'Killer',offer:80,img:require('../assets/Fashion/killer.jpg')},
            {name:'Sweatshirt',offer:5,img:require('../assets/Fashion/sweatshirt.jpg')},
            {name:'USPA',offer:40,img:require('../assets/Fashion/USPA.jpg')},
            {name:'PUMA,ADIDAS',offer:65,img:require('../assets/Fashion/puma.jpg')},
            {name:'DAVIDGUNER',offer:60,img:require('../assets/Fashion/david.jpg')},
            {name:`Kid's winter wear`,under:399,img:require('../assets/Fashion/kid.jpg')},
            {name:'Skechers',offer:40,img:require('../assets/Fashion/sketchers.jpg')},
        ],
        Mostsale:[
            {img:require('../assets/Fashion/fashion1.jpg')},
            {img:require('../assets/Fashion/fashion2.jpg')},
            {img:require('../assets/Fashion/fashion3.jpg')},
            {img:require('../assets/Fashion/fashion4.jpg')},
        ]
        
    },
    2:{
        images:[Mobile1,Mobile2,Mobile3,Mobile4,Mobile5,Mobile6],
        types:[],
        deals:[],
        Mostsale:[],
    },
    3:{
        images:[Elec1,Elec2,Elec3,Elec4,Elec5,Elec6],
        types:[],
        deals:[],
        Mostsale:[],
    },
    4:{
        images:[Appli1,Appli2,Appli3,Appli4,Appli5,Appli6],
        types:[],
        deals:[],
        Mostsale:[],
    },
    5:{
        images:[Beauty1,Beauty2,Beauty3,Beauty4,Beauty5,Beauty6],
        types:[],
        deals:[],
        Mostsale:[],
    },
    6:{
        images:[Home1,Home2,Home3,Home4,Home5,Home6],
        types:[],
        deals:[],
        Mostsale:[],
    },
    7:{
        images:[Food1,Food2,Food3,Food4,Food5,Food6],
        types:[],
        deals:[],
        Mostsale:[],
    },
    8:{
        images:[Toy1,Toy2,Toy3,Toy4,Toy5,Toy6],
        types:[],
        deals:[],
        Mostsale:[],
    },
    9:{
        images:[Sport1,Sport2,Sport3,Sport4,Sport5,Sport6],
        types:[],
        deals:[],
        Mostsale:[],
    },
    10:{
        images:[Book1,Book2,Book3,Book4],
        types:[],
        deals:[],
        Mostsale:[],
    },
    11:{
        images:[Fun1,Fun2,Fun3,Fun4,Fun5,Fun6],
        types:[],
        deals:[],
        Mostsale:[],
    }
}
const searchable=[
    {name:'Shirts for Men',img:require('../assets/Fashion/shirt.jpg')},
    {name:'Shirts for Women',img:require('../assets/Fashion/womenshirt.jpg')},
    {name:'Shirts for Kids',img:require('../assets/Fashion/casualkidshirt.jpg')},
    {name:'Formal shirts for Men',img:require('../assets/Fashion/Formals.jpg')},
    {name:'Formal shirts for Women',img:require('../assets/Fashion/womenformalshirts.jpg')},
    {name:'Casual shirts for Men',img:require('../assets/Fashion/casualshirtmen.jpg')},
    {name:'Casual shirts for Women',img:require('../assets/Fashion/casualshirtwomen.jpg')},
    {name:'Kids Casual shirts',img:require('../assets/Fashion/kidsshirt.jpg')},
    {name:'Sport Shoes for Men',img:require('../assets/Fashion/Mensportshoes.jpg')},
    {name:'Sport Shoes for Women',img:require('../assets/Fashion/Womensportshoe.jpg')},
];
const mostpopular=[
    {name:'MAMU',desc:'Kids Muffler',img:require('../assets/Fashion/MAMU.jpg')},
    {name:'Apple', desc:'Iphone',img:require('../assets/Fashion/Apple.jpg')},
    {name:'MIVI',desc:'Ear buds',img:require('../assets/Fashion/MIVI.jpg')},
    {name:'Apple',desc:'Tablet',img:require('../assets/Fashion/AppleTablet.jpg')},
    {name:'Sony',desc:'DSLR',img:require('../assets/Fashion/Sony.jpg')},
    {name:'Lenova',desc:'Laptop',img:require('../assets/Fashion/Lenova.jpg')},
    {name:'FUJIFILM',desc:'Instant Camera',img:require('../assets/Fashion/FUJIFILM.jpg')},
    {name:'SONY',desc:'PS5',img:require('../assets/Fashion/SONYps5.jpg')},
    {name:'Skyberg',desc:'Backpacks',img:require('../assets/Fashion/bag.jpg')},
    {name:'Sony',desc:'Hometheater',img:require('../assets/Fashion/sonyhometheater.jpg')},
    {name:'Samsung',desc:'Television',img:require('../assets/Fashion/samsungtv.jpg')},
]
const categorydata={
    0:{
        image:require('../assets/Data/Foryou.jpg'),
        data:[
            {
                type:'Popular Store',
                items:[
                    {name:'Harvest the deals',img:require('../assets/deals.jpg')},
                    {name:'Flipkart Minutes',img:require('../assets/miutes.png')},
                ]
            },
            {   type:'Have you tried?',
                items:[
                    {name:'Flipkart UPI',img:require('../assets/upi.jpg')},
                    {name:'SuperCoin',img:require('../assets/supercoin.png')},
                    {name:'Plus Zone',img:require('../assets/plus.png')},
                    {name:'Personal Loan',img:require('../assets/loan.png')},
                    {name:'Flipkart Pay',img:require('../assets/flippay.jpg')},
                ]
            },
            {
                type:'More on Flipkart',
                items:[
                    {name:'Flipkart Green',img:require('../assets/green.png')},
                    {name:'Flipkart Samarth',img:require('../assets/samarth.jpg')},
                    {name:'Next Gen Brands',img:require('../assets/nextgen.jpg')},
                    {name:'Flipkart Orginal',img:require('../assets/original.jpg')},
                ]
            }
        ]
    },
    1:{
        image:require('../assets/Data/Fashion.jpg'),
        data:[
            {
                type:'In the Spotlight',
                items:[
                    {name:'Sale is Live',img:require('../assets/Data/sale.jpg')},
                    {name:'Trendy street',img:require('../assets/Data/trendy.jpg')},
                    {name:'Spoyl Gen-z trends',img:require('../assets/Data/genz.jpg')},
                    {name:'Wedding store',img:require('../assets/Data/wedding.jpg')},
                ]
            },
            {
                type:`Men's Clothing`,
                items:[
                    {name:'Winterwear',img:require('../assets/Data/winter.jpg')},
                    {name:'Bottomwear',img:require('../assets/Data/Bottomwear.jpg')},
                    {name:'Topwear',img:require('../assets/Data/Topwear.jpg'),search:'Casuals for Men'},
                    {name:'Ethnic Wear',img:require('../assets/Data/ethnic.jpg')},
                    {name:'Formal Wear',img:require('../assets/Data/Formal.jpg'),search:'Formals for Men'},
                    {name:'Blazers & suits',img:require('../assets/Data/Blazers.jpg')},

                ]
            },
            {
                type:`Women's Clothing`,
                items:[
                    {name:'Sarees',img:require('../assets/Data/saree.jpg')},
                    {name:'Kurtis',img:require('../assets/Data/Kurtis.jpg')},
                    {name:'Sweatshirts',img:require('../assets/Data/Sweatshirts.jpg')},
                    {name:'Jeans, trousersers',img:require('../assets/Data/Jeans.jpg')},
                    {name:'Jackets',img:require('../assets/Data/Jackets.jpg')},
                    {name:'Blazer,Coat',img:require('../assets/Data/Blazers.jpg')}
                ]
            },
            {
                type:`Men's Footwear & Accessories`,
                items:[
                    {name:'Sports Shoes',img:require('../assets/Data/sportshoem.jpg'),search:'Sport shoes for Men'},
                    {name:'Casual Shoes',img:require('../assets/Data/casual.jpg')},
                    {name:'Shoes',img:require('../assets/Data/shoes.jpg')},
                    {name:'Sneakers',img:require('../assets/Data/sneakers.jpg')},
                ]
            },
            {
                type:`Women's Footwear & Accessories`,
                items:[
                    {name:'Sports Shoes',img:require('../assets/Data/sportshoew.jpg'),search:'Sport shoes for Women'},
                    {name:'Heals & Flats',img:require('../assets/Data/Heels.jpg')},
                    {name:'Slippers',img:require('../assets/Data/slippers.jpg')},
                    {name:'Boots',img:require('../assets/Data/boots.jpg')},
                    {name:'Earings',img:require('../assets/Data/Earings.jpg')},
                    {name:'Handbags',img:require('../assets/Data/Handbags.jpg')},
                ]
            }
        ]
    },
    2:{
        image:require('../assets/Data/Mobiles.jpg'),
    },
    3:{
        image:require('../assets/Data/Electronics.jpg'),
    },
    4:{
        image:require('../assets/Data/Appliances.jpg'),
    },
    5:{
        image:require('../assets/Data/beauty.jpg'),
    },
    6:{
        image:require('../assets/Data/Home.jpg'),
    },
    7:{
        image: require('../assets/Data/Grocery.jpg'),
        data:[
            {
                type:'Staples',
                items:[
                {name:'Rice & Rice Products',img:require('../assets/Data/rice.jpg')},
                {name:'Atta & Flours',img:require('../assets/Data/Atta.jpg')},
                {name:'Dals & Pulses',img:require('../assets/Data/Dal.jpg')},
                {name:'Dry Fruits, Nuts & Seeds',img:require('../assets/Data/Dryfruits.jpg')},
                {name:'Sugar, Jaggery & Salt',img:require('../assets/Data/sugar.jpg')},
                {name:'Masalas & Spices',img:require('../assets/Data/Masala.jpg')},
                {name:'Ghee & Oils',img:require('../assets/Data/oil.jpg')},
            ],},
            {type:'Snacks & Beverages',items:[
                {name:'Biscuits',img:require('../assets/Data/Biscuit.jpg')},
                {name:'Coffee',img:require('../assets/Data/Coffee.jpg')},
                {name:'Health Drink Milk',img:require('../assets/Data/HealthDrink.jpg')},
                {name:'Tea',img:require('../assets/Data/tea.jpg')},
                {name:'Soft Drinks',img:require('../assets/Data/Drinks.jpg')},
                {name:'Chips & Snacks',img:require('../assets/Data/Chips.jpg')},

            ],},
            {type:'Personal & Baby Care',items:[
                {name:'Oral Care',img:require('../assets/Data/Oral.jpg')},
                {name:'Baby Bath & Skin care',img:require('../assets/Data/baby.jpg')},
                {name:'Hair Care',img:require('../assets/Data/hair.jpg')},
                {name:'Creams, Lotions, Skin Care',img:require('../assets/Data/Lotion.jpg')},
            ],},
            {type:'Packaged Food',items:[
                {name:'Cooking Sauces & Vinegar',img:require('../assets/Data/sauce.jpg')},
                {name:'Noodles & Pasta',img:require('../assets/Data/Noodles.jpg')},
                {name:'Chocolates & Sweets',img:require('../assets/Data/chocolate.jpg')},
                {name:'Ketchups & Spreads',img:require('../assets/Data/spreads.jpg')},
                {name:'Breakfast Cereals',img:require('../assets/Data/Cereals.jpg')},
            ],},
        ],
    },
    8:{
        image:require('../assets/Data/Toys.jpg'),
    },
    9:{
        image:require('../assets/Data/sports.jpg'),
    },
    10:{
        image:require('../assets/Data/boooks.jpg'),
    },
    11:{
        image:require('../assets/Data/Furnitures.jpg'),
    },
};

export {scrolldata,maindata,searchable,mostpopular,categorydata};
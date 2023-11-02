
var data = [
     {
          id : 1,
          brand:"Iphone",
          img:"https://m-cdn.phonearena.com/images/article/98169-wide-two_1200/Apple-iPhone-history-the-evolution-of-the-smartphone-that-started-it-all.jpg",
          title:"Iphone 15 pro max",
          detail:"Titaneam ZA 256G",
          price:"1299$",
     },
     {
          id : 1,
          brand:"Samsung",
          img:"https://amateurphotographer.com/wp-content/uploads/sites/7/2023/02/samsung_galaxy_s23ultra_Amy_Davies_006.jpg",
          title:"Samsung S23 ultra",
          detail:"Midnight green",
          price:"899$",
     },
     {
          id : 1,
          brand:"Iphone",
          img:"https://media.wired.com/photos/632119a7f1e5c40d2b1bc647/master/w_2560%2Cc_limit/iPhone-14-Pro-Review-Gear.jpg",
          title:"Iphone 14 pro max",
          detail:"Purple ZA 256G ",
          price:"1050$",
     },
     {
          id : 1,
          brand:"Iphone",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrk3r3kOb5VyhjFq1PoDiS6CFxbgqIUJX29w&usqp=CAU",
          title:"Iphone 13 pro max",
          detail:"blue",
          price:"799$",
     },
     {
          id : 1,
          brand:"Iphone",
          img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202207-midnight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316263296",
          title:"Iphone SE ",
          detail:"Titaneam",
          price:"399$",
     },
     {
          id : 1,
          brand:"Huawi",
          img:"https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/mate-x3/img/kv/kv@2x.webp",
          title:"Huawi Mate X3",
          detail:"Night Green",
          price:"999$",
     },
     {
          id : 1,
          brand:"Tecno Pova",
          img:"https://images.news18.com/ibnlive/uploads/2023/08/tecno-pova-5-16917606843x2.jpg",
          title:"Tecno Pova 5",
          detail:"Hurricane Blue",
          price:"200$",
     },
     {
          id : 1,
          brand:"OPPO",
          img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/oppo_reno_10-sixteen_nine.jpg?VersionId=RIbARRfr8rBE5InPJVCVlJX_z2Nv7d72&size=690:388",
          title:"Oppo Reno 10 pro",
          detail:"Silvery Grey | Ice Blue",
          price:"599$",
     },
    
];
var res = '';
data.forEach(el => {
     res += `
          <div class="col-3">
               <div class="card my-4 " style="width: 18rem; object-fit:cover;">
                    <p class="card-text bg-secondary text-center">${el.brand}</p>
                    <img src="${el.img}" class="card-img-top overflow-hidden p-1" alt="..." width="300px" height="220px" style="object-fit: cover;">
                    <div class="card-body">
                    <h5 class="card-title">${el.title}</h5>
                    <p class="card-text">${el.detail}</p>
                    <p class="card-text">${el.price}</p>
                    </div>
               </div>
          </div>
     `;
});
document.querySelector('.row').innerHTML = res;

var login = document.getElementById('show-box');
var box =document.querySelector('.box');
var box_none = document.querySelector('.none-box');
var cross = document.querySelector('.icon');
login.addEventListener('click',function(){
     box.classList.add('show-box');
     box.classList.add('d-block');
     box.classList.remove('d-none');
     
});
box_none.addEventListener('click',function(){
     box.classList.remove('show-box');
     
});
cross.addEventListener('click',function(){
     box.classList.add("d-none");
});

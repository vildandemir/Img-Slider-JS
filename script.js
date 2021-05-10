// car objects
let models = [
    {
        name: 'Audi A8',
        image: 'img/audi.png',
        link :'http://www.arabalar.com.tr/audi/a3'
    },
    {
        name: 'Reno 2',
        image: 'img/reno.png',
        link :'http://www.arabalar.com.tr/renault/clio'
    },
    {
        name: 'Qashqai 1',
        image: 'img/qashqai.png',
        link :'http://www.arabalar.com.tr/nissan/qashqai'
    },
    {
        name: 'Hundai 8',
        image: 'img/hundai.png',
        link :'http://www.arabalar.com.tr/hyundai/elantra'
    }
];

//index start
let index = 0;
let slideCount = models.length;


let interval;
let settings = {
    duration: '2000',
    random: false
};

init(settings);


//add icon function left
document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

//add icon function right
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});


//manuel control
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


//random slide function
function init(settings){
    
    let prev;
    interval = setInterval(function(){
        if(settings.random){
            //random index
            do{
                index = Math.floor(Math.random() * slideCount);
            }while(prev == index)
            prev == index;
        }else{
            //artan index
            if(slideCount == index+1){
                index=-1;   
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)
}



//create elements and create index
function showSlide(i){

    index=i;

    if(i<0){
        index = slideCount -1;
    }
    if(i>=slideCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-link').setAttribute('href',models[index].link);

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
}


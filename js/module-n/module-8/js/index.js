"user strict";
/*  
      Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  {
    preview: "img/preview1-1.jpeg",
    fullview: "img/fullview1-1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview2-2.jpeg",
    fullview: "img/fullview2-2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview3-3.jpeg",
    fullview: "img/fullview3-3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview4-4.jpeg",
    fullview: "img/fullview4-4.jpeg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview5-5.jpeg",
    fullview: "img/fullview5-5.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview6-6.jpeg",
    fullview: "img/fullview6-6.jpeg",
    alt: "alt text 6"
  }
];
// select root
let imageGallery = document.querySelector(".image-gallery");
// craete element HTML
let divFullview = document.createElement("div");
let imgfullview = document.createElement("img");
let ulPreview = document.createElement("ul");

for (let arr of galleryItems) {
  let liPreview = document.createElement("li");
  let imgPreview = document.createElement("img");

  //  моя функция ==============================================

  imgPreview.addEventListener("click", function(e) {
    imgfullview.src = this.dataset.fullview;

    // imgfullview.src = this.dataset.fullview;
    // console.log(imgfullview.src);
    // e.preventDefault(); // что бы не перезагружалась страница
    // let atribute = this.getAttribute('data-fullview');
    // console.log(atribute);
    // if(this.hasAttribute('data-fullview')){
    //   this.setAttribute('src', atribute);
    //   imgfullview.src = atribute;
    //   return;
    // }
  });

  //==========================================================

  // classes
  divFullview.classList.add("fullview");
  ulPreview.classList.add("preview");
  // attribute
  imgfullview.setAttribute("src", "img/fullview1-1.jpeg");
  imgfullview.setAttribute("alt", "alt text 1");
  imgfullview.setAttribute("width", "860px");
  imgfullview.setAttribute("height", "auto");
  imgPreview.setAttribute("src", arr.preview);
  imgPreview.setAttribute("width", "200px");
  imgPreview.setAttribute("height", "auto");
  imgPreview.setAttribute("alt", arr.alt);
  imgPreview.setAttribute("data-fullview", arr.fullview);
  //text content

  // paste el to html
  imageGallery.append(divFullview);
  divFullview.append(imgfullview);
  imageGallery.append(ulPreview);
  ulPreview.append(liPreview);
  liPreview.append(imgPreview);
}

/*
    ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
    
    Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
    чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
    аналогичный заданию выше.
    
    При создании экземпляра конструктор получает:
      - items - список элементов для preview
      - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
      - defaultActiveItem - номер активного элемента preview по умолчанию
      
    Тогда создание экземпляра будет выглядеть следующим образом.
  */

// new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector(".image-gallery"),
//   defaultActiveItem: 1
// });

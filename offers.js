// قائمة العروض العقارية (هذا هو المكان الوحيد الذي ستعدله في المستقبل)
const listingsData = [
  {
    image: 'images/vila1.png', // تأكد أن هذا المسار صحيح
    title: 'فيلا فاخرة في حي الجنادريه-بوابه الشرق',
    price: '50,000 ريال سعودي', // تم تصحيح السعر كمثال
    description: 'تتكون من مجلسين،مقلط،وصاله،وغرفه كبار سن،و4غرف نوم وصالات في الدور العلوي،مكيفات ومطبخ راكب'
  },
  {
    image: 'images/vila2.png', // تأكد أن هذا المسار صحيح
    title: 'فيلا مفروشه للايجار في حي الجنادريه بوابه الشرق ',
    price: '50,000 ريال سعودي',
     description: 'نموذج الاوركيد ،حوش امامي وخلفي ومدخل سياره،مطبخ ،5حمامات ،5غرف نوم،غرفه ماستر،غرفه عامله،الفيلا مؤثثه'
  },
     {
    image: 'images/sh1.jpg', // تأكد أن هذا المسار صحيح
    title: 'شقه للايجار في حي الجنادره - بوابه الشرق ',
    price: '2,000 ريال سعودي',
    description: 'تكون من مدخلين،مجلس مع دوره مياه،غرفتين نوم ،صاله واسعه'
  }
];


// --- مصنع بناء العروض المطور (صورة مكبرة وزر واتساب) ---

// تم تصحيح اسم الكلاس هنا ليطابق الموجود في offers.html
const listingsContainer = document.querySelector('.listings-container');

if (listingsContainer) {
    listingsContainer.innerHTML = '';

    listingsData.forEach(listing => {
        // الرقم الخاص بك مع رمز الدولة بدون +
        const whatsappNumber = '966539125233'; // <== لا تنسَ وضع رقمك الصحيح هنا
        
        // رسالة جاهزة عند فتح الواتساب
        const whatsappMessage = `مرحباً، أنا مهتم بالعرض التالي: ${listing.title}`;

        const listingCardHTML = `
            <div class="service-box" data-aos="fade-up">
                
                <a href="${listing.image}" data-lightbox="${listing.title}" data-title="${listing.title}">
                    <img src="${listing.image}" alt="${listing.title}" style="width:100%; height: 200px; object-fit: cover; border-radius: 5px; margin-bottom: 15px;">
                </a>
                
                <h3>${listing.title}</h3>
                <p style="font-size: 18px; font-weight: bold; color: var(--secondary-color);">${listing.price}</p>
                <p>${listing.description}</p>

                <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}" class="listing-cta-button" target="_blank">
                    اطلب الآن
                </a>

            </div>
        `;
        listingsContainer.innerHTML += listingCardHTML;
    });
}
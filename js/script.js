document.addEventListener("DOMContentLoaded", function () {
    // Определение функции для запуска анимации
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Появление всех элементов, когда 'who_am_i_title' на экране
                document.querySelectorAll('.who_am_i_title, .student_intro_title, .student_image, .tape1, .tape2, .tape9_1, .tape10_1, .career_aspiration_title')
                    .forEach(element => {
                        element.classList.add('animate'); // Анимация появления
                        element.classList.remove('disappear'); // Убираем класс исчезновения
                    });
            } else if (entry.target.classList.contains('student_image')) {
                // Исчезновение всех элементов, когда 'student_intro_title' уходит с экрана
                document.querySelectorAll('.who_am_i_title, .student_intro_title, .student_image, .tape1, .tape2, .tape9_1, .tape10_1, .career_aspiration_title')
                    .forEach(element => {
                        element.classList.add('disappear'); // Анимация исчезновения
                        element.classList.remove('animate'); // Убираем класс появления
                    });
            }
        });
    });

    // Начинаем отслеживать заголовки
    const whoAmITitle = document.querySelector('.who_am_i_title');
    const flexRow = document.querySelector('.student_image');

    // Наблюдение за заголовками
    observer1.observe(whoAmITitle);
    observer1.observe(flexRow);


    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Появление всех элементов, когда 'who_am_i_title' на экране
                document.querySelectorAll('.profile_group, .contact_images_row, .theme-toggle ')
                    .forEach(element => {
                        element.classList.add('animate'); // Анимация появления
                        element.classList.remove('disappear'); // Убираем класс исчезновения
                    });
            } else if (entry.target.classList.contains('barcode_image')) {
                // Исчезновение всех элементов, когда 'student_intro_title' уходит с экрана
                document.querySelectorAll('.profile_group, .contact_images_row, .theme-toggle ')
                    .forEach(element => {
                        element.classList.add('disappear'); // Анимация исчезновения
                        element.classList.remove('animate'); // Убираем класс появления
                    });
            }
        });
    });

    // Начинаем отслеживать заголовки
    const barcodeImage = document.querySelector('.barcode_image');

    // Наблюдение за заголовками
    observer2.observe(barcodeImage);


    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Появление всех элементов, когда 'who_am_i_title' на экране
                document.querySelectorAll('.skills_h1, .skills_container, .learning_status_h1, .tape3, .tape4, .tape5, .skills_image_main')
                    .forEach(element => {
                        element.classList.add('animate'); // Анимация появления
                        element.classList.remove('disappear'); // Убираем класс исчезновения
                    });
            } else if (entry.target.classList.contains('skills_container')) {
                // Исчезновение всех элементов, когда 'student_intro_title' уходит с экрана
                document.querySelectorAll('.skills_h1, .skills_container, .learning_status_h1, .tape3, .tape4, .tape5, .skills_image_main')
                    .forEach(element => {
                        element.classList.add('disappear'); // Анимация исчезновения
                        element.classList.remove('animate'); // Убираем класс появления
                    });
            }
        });
    });

    // Начинаем отслеживать заголовки
    const skillsContainer = document.querySelector('.skills_container');

    // Наблюдение за заголовками
    observer3.observe(skillsContainer);


    const observer4 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Появление всех элементов, когда 'who_am_i_title' на экране
                document.querySelectorAll('.dreams_title, .hobbies_title, .flex_row_container')
                    .forEach(element => {
                        element.classList.add('animate'); // Анимация появления
                        element.classList.remove('disappear'); // Убираем класс исчезновения
                    });
            } else if (entry.target.classList.contains('flex_row_container')) {
                // Исчезновение всех элементов, когда 'student_intro_title' уходит с экрана
                document.querySelectorAll('.dreams_title, .hobbies_title, .flex_row_container')
                    .forEach(element => {
                        element.classList.add('disappear'); // Анимация исчезновения
                        element.classList.remove('animate'); // Убираем класс появления
                    });
            }
        });
    });

    // Начинаем отслеживать заголовки
    const flexRowContainer = document.querySelector('.flex_row_container');

    // Наблюдение за заголовками
    observer4.observe(flexRowContainer);



    const observer5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Появление всех элементов, когда 'who_am_i_title' на экране
                document.querySelectorAll('.contact_title, .thank_you_message')
                    .forEach(element => {
                        element.classList.add('animate'); // Анимация появления
                        element.classList.remove('disappear'); // Убираем класс исчезновения
                    });
            } else if (entry.target.classList.contains('thank_you_message')) {
                // Исчезновение всех элементов, когда 'student_intro_title' уходит с экрана
                document.querySelectorAll('.contact_title, .thank_you_message')
                    .forEach(element => {
                        element.classList.add('disappear'); // Анимация исчезновения
                        element.classList.remove('animate'); // Убираем класс появления
                    });
            }
        });
    });
    
// Начинаем отслеживать заголовки
    const thankYouMessage = document.querySelector('.thank_you_message');
    // Наблюдение за заголовками
    observer5.observe(thankYouMessage);

    // const observer6 = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //                 document.querySelectorAll('.github_image, .instagram_image, .project_image_1, .project_image_2')
    //                 .forEach(element => {
    //                     element.classList.add('animate1'); // Анимация появления
    //                     element.classList.remove('disappear1'); // Убираем класс исчезновения
    //                 });
    //         } else if (entry.target.classList.contains('flexible_row_div')) {
    //             // Исчезновение всех элементов, когда 'student_intro_title' уходит с экрана
    //                 document.querySelectorAll('.github_image, .instagram_image, .project_image_1, .project_image_2')
    //                 .forEach(element => {
    //                     element.classList.add('disappear1'); // Анимация появления
    //                     element.classList.remove('animate1'); // Убираем класс исчезновения
    //                 });
    //         }
    //     });
    // });

    // // Начинаем отслеживать заголовки
    // const flexRowDiv = document.querySelector('.flexible_row_div');

    // // Наблюдение за заголовками
    // observer6.observe(flexRowDiv);

    
    const contactSection = document.querySelector('.thank_you_message');

    const observer7 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      const images = document.querySelectorAll('.flexible_row_div img');
      
      images.forEach(image => {
        // Ограничиваем случайное позиционирование внутри секции
        const containerWidth = contactSection.offsetWidth;
        const randomX = Math.random() * containerWidth; // Случайная позиция по горизонтали
        const randomDelay = Math.random() * 0.8; // Случайная задержка (0-0.5 секунд)
        const randomDuration = 2 + Math.random() * 4; // Случайная продолжительность падения (2-5 секунд)
        
        // Применяем случайные значения к каждому изображению
        //image.style.left = `${randomX}px`;
        image.style.animationDelay = `${randomDelay}s`;
        image.style.animationDuration = `${randomDuration}s`;
        
        // Добавляем класс для запуска анимации
        image.classList.add('falling');
      });
    }
  });
});

// Начинаем отслеживать секцию
    observer7.observe(contactSection);
});


//Переключение темы
// Находим элемент для смены темы
const themeToggle = document.getElementById('themeToggle');

// Массив изображений для разных тем
const lightThemeImages = {
    python: './assets/python.png',
    align: './assets/align.png',
    alarm: './assets/alarm.png',
    tea: './assets/tea.png',
    question: './assets/question.png',
    stairs: './assets/stairs.png',

    profile: './assets/main.png',
    barcode: './assets/barcode_3.png',
    contact1: './assets/git.png',
    contact2: './assets/vk.png',
    contact3: './assets/tg.png',
    contact4: './assets/ig.png',
    theme_toggle: './assets/moon.png',
    contact6: './assets/tgc.png',
    contact5: './assets/pinterest.png',
    contact7: './assets/tiktok.png',
};

const darkThemeImages = {
    python: './assets/python_1.png',
    align: './assets/align_1.png',
    alarm: './assets/alarm_1.png',
    tea: './assets/tea_1.png',
    question: './assets/question_1.png',
    stairs: './assets/stairs_1.png',

    profile: './assets/main_5.png',
    barcode: './assets/barcode_3_1.png',
    contact1: './assets/git_1.png',
    contact2: './assets/vk_1.png',
    contact3: './assets/tg_1.png',
    contact4: './assets/ig_1.png',
    theme_toggle: './assets/moon_1.png',
    contact6: './assets/tgc_1.png',
    contact5: './assets/pinterest_1.png',
    contact7: './assets/tiktok_1.png',
};

//Переключение темы
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    const isDarkTheme = document.body.classList.contains('dark-theme');

    // Меняем изображения в зависимости от темы
    // Убираем прозрачность для плавного исчезновения
    setTimeout(() => {
        document.querySelector('.theme-toggle').src = isDarkTheme ? darkThemeImages.theme_toggle : lightThemeImages.theme_toggle;
        document.querySelector('.theme-toggle').style.opacity = '1'; // Возвращаем прозрачность для плавного появления
    }, 500);
    // Меняем источник изображения через 500мс после того, как исчезнут
    document.querySelector('.profile_image').style.opacity = '0'; 
    // Меняем источник изображения через 500мс после того, как исчезнут
    setTimeout(() => {
        document.querySelector('.profile_image').src = isDarkTheme ? darkThemeImages.profile : lightThemeImages.profile;
        document.querySelector('.profile_image').style.opacity = '1'; // Возвращаем прозрачность для плавного появления
    }, 500);

    document.querySelector('.barcode_image').style.opacity = '0'; 
    // Меняем источник изображения через 500мс после того, как исчезнут
    setTimeout(() => {
        document.querySelector('.barcode_image').src = isDarkTheme ? darkThemeImages.barcode : lightThemeImages.barcode;
        document.querySelector('.barcode_image').style.opacity = '1'; // Возвращаем прозрачность для плавного появления
    }, 500);

    document.querySelector('.contact_image_1').style.opacity = '0'; 
    // Меняем источник изображения через 500мс после того, как исчезнут
    setTimeout(() => {
        document.querySelector('.contact_image_1').src = isDarkTheme ? darkThemeImages.contact1 : lightThemeImages.contact1;
        document.querySelector('.contact_image_1').style.opacity = '1'; // Возвращаем прозрачность для плавного появления
    }, 500);
    document.querySelector('.contact_image_2').style.opacity = '0'; 
    // Меняем источник изображения через 500мс после того, как исчезнут
    setTimeout(() => {
        document.querySelector('.contact_image_2').src = isDarkTheme ? darkThemeImages.contact2 : lightThemeImages.contact2;
        document.querySelector('.contact_image_2').style.opacity = '1'; // Возвращаем прозрачность для плавного появления
    }, 500);
    document.querySelector('.contact_image_3').style.opacity = '0'; 
    // Меняем источник изображения через 500мс после того, как исчезнут
    setTimeout(() => {
        document.querySelector('.contact_image_3').src = isDarkTheme ? darkThemeImages.contact3 : lightThemeImages.contact3;
        document.querySelector('.contact_image_3').style.opacity = '1'; // Возвращаем прозрачность для плавного появления
    }, 500);
    document.querySelector('.contact_image_4').style.opacity = '0'; 
    // Меняем источник изображения через 500мс после того, как исчезнут
    setTimeout(() => {
        document.querySelector('.contact_image_4').src = isDarkTheme ? darkThemeImages.contact4 : lightThemeImages.contact4;
        document.querySelector('.contact_image_4').style.opacity = '1'; // Возвращаем прозрачность для плавного появления
    }, 500);
    document.querySelector('.theme-toggle').style.opacity = '0'; 
    // Меняем источник изображения через 500мс после того, как исчезнут

    document.querySelector('.github_image').src = isDarkTheme ? darkThemeImages.contact1 : lightThemeImages.contact1;
    document.querySelector('.instagram_image').src = isDarkTheme ? darkThemeImages.contact2 : lightThemeImages.contact2;
    document.querySelector('.project_image_1').src = isDarkTheme ? darkThemeImages.contact3 : lightThemeImages.contact3;
    document.querySelector('.project_image_2').src = isDarkTheme ? darkThemeImages.contact4 : lightThemeImages.contact4;
    document.querySelector('.pinterest_image').src = isDarkTheme ? darkThemeImages.contact5 : lightThemeImages.contact5;
    document.querySelector('.tgc_image').src = isDarkTheme ? darkThemeImages.contact6 : lightThemeImages.contact6;
    document.querySelector('.tiktok_image').src = isDarkTheme ? darkThemeImages.contact7 : lightThemeImages.contact7;

    // Меняем изображения в зависимости от темы
    document.querySelectorAll('.skills_image').forEach((img, index) => {
        img.style.opacity = '0';
        // Меняем источник изображения через 500мс после того, как исчезнут
        setTimeout(() => {
                img.src = isDarkTheme ? darkThemeImages[Object.keys(lightThemeImages)[index]] : lightThemeImages[Object.keys(lightThemeImages)[index]];
            img.style.opacity = '1'; // Возвращаем прозрачность для плавного появления
        }, 500);
    });
});

// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme');

//     const isDarkTheme = document.body.classList.contains('dark-theme');

//     // Изменение изображений с плавной сменой
//     document.querySelectorAll('img').forEach((img) => {
//         // Убираем прозрачность для плавного исчезновения
//         img.style.opacity = '0';
        
//         // Меняем источник изображения через 500мс после того, как исчезнут
//         setTimeout(() => {
//             if (img.classList.contains('skills_image')) {
//                 const index = Array.from(document.querySelectorAll('.skills_image')).indexOf(img);
//                 img.src = isDarkTheme ? darkThemeImages[Object.keys(lightThemeImages)[index]] : lightThemeImages[Object.keys(lightThemeImages)[index]];
//             } else if (img.classList.contains('profile_image')) {
//                 img.src = isDarkTheme ? darkThemeImages.profile : lightThemeImages.profile;
//             } // Добавляем другие условия для ваших изображений
//             img.style.opacity = '1'; // Возвращаем прозрачность для плавного появления
//         }, 500); // Устанавливаем таймаут на полсекунды для плавного перехода
//     });
// });

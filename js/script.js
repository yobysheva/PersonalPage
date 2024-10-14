document.addEventListener("DOMContentLoaded", function () {
    // Определение функции для запуска анимации
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Появление всех элементов, когда 'who_am_i_title' на экране
                document.querySelectorAll('.who_am_i_title, .student_intro_title, .student_image, .tape1, .tape2, tape9_1, tape10_1, .career_aspiration_title')
                    .forEach(element => {
                        element.classList.add('animate'); // Анимация появления
                        element.classList.remove('disappear'); // Убираем класс исчезновения
                    });
            } else if (entry.target.classList.contains('student_image')) {
                // Исчезновение всех элементов, когда 'student_intro_title' уходит с экрана
                document.querySelectorAll('.who_am_i_title, .student_intro_title, .student_image, .tape1, .tape2, tape9_1, tape10_1, .career_aspiration_title')
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
                document.querySelectorAll('.profile_group, .contact_images_row')
                    .forEach(element => {
                        element.classList.add('animate'); // Анимация появления
                        element.classList.remove('disappear'); // Убираем класс исчезновения
                    });
            } else if (entry.target.classList.contains('barcode_image')) {
                // Исчезновение всех элементов, когда 'student_intro_title' уходит с экрана
                document.querySelectorAll('.profile_group, .contact_images_row')
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
                document.querySelectorAll('.skills_h1, .skills_container, .learning_status_h1, .tape3, .tape4, .tape5, .skills_image_main, .marquee')
                    .forEach(element => {
                        element.classList.add('animate'); // Анимация появления
                        element.classList.remove('disappear'); // Убираем класс исчезновения
                    });
            } else if (entry.target.classList.contains('skills_container')) {
                // Исчезновение всех элементов, когда 'student_intro_title' уходит с экрана
                document.querySelectorAll('.skills_h1, .skills_container, .learning_status_h1, .tape3, .tape4, .tape5, .skills_image_main, .marquee')
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
      observer7.unobserve(entry.target);
    }
  });
});

// Начинаем отслеживать секцию
    observer7.observe(contactSection);
});

document.addEventListener("DOMContentLoaded", function () {
    // Определение функции для запуска анимации
    const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Появление всех элементов, когда 'who_am_i_title' на экране
                document.querySelectorAll('.who_am_i_title, .student_intro_title, .student_image, .career_aspiration_title')
                    .forEach(element => {
                        element.classList.add('animate'); // Анимация появления
                        element.classList.remove('disappear'); // Убираем класс исчезновения
                    });
            } else if (entry.target.classList.contains('flex_row')) {
                // Исчезновение всех элементов, когда 'student_intro_title' уходит с экрана
                document.querySelectorAll('.who_am_i_title, .student_intro_title, .student_image, .career_aspiration_title')
                    .forEach(element => {
                        element.classList.add('disappear'); // Анимация исчезновения
                        element.classList.remove('animate'); // Убираем класс появления
                    });
            }
        });
    });

    // Начинаем отслеживать заголовки
    const whoAmITitle = document.querySelector('.who_am_i_title');
    const flexRow = document.querySelector('.flex_row');

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
                document.querySelectorAll('.skills_h1, .skills_container, .learning_status_h1, .skills_image_main, .marquee')
                    .forEach(element => {
                        element.classList.add('animate'); // Анимация появления
                        element.classList.remove('disappear'); // Убираем класс исчезновения
                    });
            } else if (entry.target.classList.contains('skills_container')) {
                // Исчезновение всех элементов, когда 'student_intro_title' уходит с экрана
                document.querySelectorAll('.skills_h1, .skills_container, .learning_status_h1, .skills_image_main, .marquee')
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

});

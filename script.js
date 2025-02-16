document.addEventListener('DOMContentLoaded', function() {
    // Обробка кнопок навігації
    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', function() {
        openContactModal();
    });

    // Обробка кнопок CTA в hero секції
    const startLearningBtn = document.querySelector('.primary-btn');
    const viewCoursesBtn = document.querySelector('.secondary-btn');

    startLearningBtn.addEventListener('click', function() {
        // Відкриваємо модальне вікно з базовою реєстрацією
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Реєстрація на навчання</h2>
                <form id="registrationForm">
                    <input type="text" placeholder="Ваше ім'я" required>
                    <input type="email" placeholder="Email" required>
                    <select required>
                        <option value="">Оберіть курс</option>
                        <option value="programming">Основи програмування</option>
                        <option value="webdesign">Веб-дизайн</option>
                        <option value="javascript">JavaScript Advanced</option>
                        <option value="marketing">Цифровий маркетинг</option>
                        <option value="python">Python для Data Science</option>
                        <option value="english">Англійська для IT</option>
                    </select>
                    <button type="submit" class="primary-btn">Зареєструватися</button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', function() {
            modal.remove();
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.remove();
            }
        });
    });

    viewCoursesBtn.addEventListener('click', function() {
        // Видаляємо перенаправлення на /courses
        // window.location.href = '/courses';
    });

    // Функції для модальних вікон
    function openContactModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Зв'яжіться з нами</h2>
                <form id="contactForm">
                    <input type="text" placeholder="Ваше ім'я" required>
                    <input type="email" placeholder="Email" required>
                    <textarea placeholder="Ваше повідомлення" required></textarea>
                    <button type="submit" class="primary-btn">Надіслати</button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', function() {
            modal.remove();
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.remove();
            }
        });
    }

    function openRegistrationModal(courseInfo) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${courseInfo.title}</h2>
                <div class="course-details">
                    <img src="${courseInfo.image}" alt="${courseInfo.title}" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
                    <p class="course-description">${courseInfo.description}</p>
                    <div class="course-info">
                        <p><strong>Тривалість:</strong> ${courseInfo.duration}</p>
                        <p><strong>Рівень:</strong> ${courseInfo.level}</p>
                        <p><strong>Вартість:</strong> ${courseInfo.price} ₴</p>
                    </div>
                    <h3>Програма курсу:</h3>
                    <ul class="course-program">
                        ${courseInfo.program.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <form id="registrationForm">
                    <input type="text" placeholder="Ваше ім'я" required>
                    <input type="email" placeholder="Email" required>
                    <button type="submit" class="primary-btn">Зареєструватися на курс</button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', function() {
            modal.remove();
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.remove();
            }
        });
    }

    // Додаємо обробники для кнопок "Детальніше"
    const courseButtons = document.querySelectorAll('.course-card .details-btn');
    const coursesInfo = {
        'Основи програмування': {
            title: 'Основи програмування',
            image: 'images/course1.jpg',
            description: 'Базовий курс для початківців, які хочуть розпочати свій шлях у програмуванні. Ви вивчите основні концепції та отримаєте практичні навички програмування.',
            duration: '3 місяці',
            level: 'Початковий',
            price: '1499',
            program: [
                'Вступ до програмування',
                'Змінні та типи даних',
                'Умовні конструкції',
                'Цикли та масиви',
                'Функції та методи',
                'Основи об\'єктно-орієнтованого програмування',
                'Робота з базами даних',
                'Фінальний проект'
            ]
        },
        'Веб-дизайн': {
            title: 'Веб-дизайн',
            image: 'images/course2.jpg',
            description: 'Комплексний курс з веб-дизайну, де ви навчитеся створювати сучасні та привабливі інтерфейси. Практичні заняття в Figma та реальні проекти.',
            duration: '4 місяці',
            level: 'Середній',
            price: '1799',
            program: [
                'Основи UI/UX дизайну',
                'Робота з Figma',
                'Типографіка та колір',
                'Композиція та сітки',
                'Адаптивний дизайн',
                'Прототипування',
                'Анімація інтерфейсів',
                'Портфоліо проект'
            ]
        },
        'JavaScript Advanced': {
            title: 'JavaScript Advanced',
            image: 'images/course3.jpg',
            description: 'Поглиблений курс JavaScript для розробників, які хочуть покращити свої навички та вивчити сучасні фреймворки.',
            duration: '4 місяці',
            level: 'Просунутий',
            price: '2199',
            program: [
                'ES6+ можливості',
                'Асинхронне програмування',
                'React.js фреймворк',
                'State management',
                'Node.js та Express',
                'REST API',
                'Тестування коду',
                'Фінальний проект'
            ]
        },
        'Цифровий маркетинг': {
            title: 'Цифровий маркетинг',
            image: 'images/course4.jpg',
            description: 'Комплексний курс з цифрового маркетингу, який навчить вас ефективно просувати продукти та послуги в інтернеті.',
            duration: '3 місяці',
            level: 'Середній',
            price: '1999',
            program: [
                'SEO оптимізація',
                'SMM стратегії',
                'Контекстна реклама',
                'Email маркетинг',
                'Контент маркетинг',
                'Аналітика та метрики',
                'Стратегічне планування',
                'Практичний проект'
            ]
        },
        'Python для Data Science': {
            title: 'Python для Data Science',
            image: 'images/course5.jpg',
            description: 'Курс з аналізу даних та машинного навчання на Python. Навчіться працювати з великими даними та створювати ML моделі.',
            duration: '5 місяців',
            level: 'Просунутий',
            price: '2499',
            program: [
                'Основи Python для DS',
                'Pandas та NumPy',
                'Візуалізація даних',
                'Статистичний аналіз',
                'Машинне навчання',
                'Deep Learning',
                'Нейронні мережі',
                'Data Science проект'
            ]
        },
        'Англійська для IT': {
            title: 'Англійська для IT',
            image: 'images/course6.png',
            description: 'Спеціалізований курс англійської мови для IT-спеціалістів. Фокус на технічній лексиці та комунікації в професійному середовищі.',
            duration: '4 місяці',
            level: 'Середній',
            price: '1599',
            program: [
                'Технічна термінологія',
                'Ділова комунікація',
                'Написання документації',
                'Проведення презентацій',
                'Співбесіди англійською',
                'Читання технічних текстів',
                'Розмовна практика',
                'Фінальний проект'
            ]
        }
    };

    courseButtons.forEach(button => {
        console.log('Found button:', button);
        button.addEventListener('click', function() {
            console.log('Button clicked');
            const courseTitle = this.parentElement.querySelector('h3').textContent;
            console.log('Course title:', courseTitle);
            const courseInfo = coursesInfo[courseTitle];
            console.log('Course info:', courseInfo);
            if (courseInfo) {
                openRegistrationModal(courseInfo);
            }
        });
    });
}); 
### Как запустить?

1. Установить node.js: https://nodejs.org/en/download/
2. Скачать проект из github и открыть в IDE (например, sublime или VSCode):
3. Запустить команду в гитбаше (в папке cypress): npm install
4. Установить cypress (в гитбаше): npm install cypress --save-dev
5. Запускать автотесты командой npm run test или npx cypress open или npx cypress run - пуск тестов в headless режиме (вывод в консоль)
6. Все новые тесты нужно писать в папке /e2e

Отчеты в Allure:
После прогона тестов в папке allure-results создадутся файлы отчетов о пройденных тестах. Для открытия страницы index.html в браузере с графическим отчетом написать команду allure serve

// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jsdom', // Указывает, что тесты запускаются в браузероподобной среде
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'], // Расширения для поиска файлов
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Файл для настройки Jest
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1', // Настройка алиасов
    '\\.(css|scss)$': 'identity-obj-proxy', // Мок для стилей
  },
};

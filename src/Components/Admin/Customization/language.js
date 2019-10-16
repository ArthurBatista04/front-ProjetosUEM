import englishMessages from 'ra-language-english';
import portugueseMessages from 'ra-language-portuguese';
const messages = {
  pt: portugueseMessages,
  en: englishMessages
};
export default locale => messages[locale];

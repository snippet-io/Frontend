import "prismjs/components/prism-clike";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-rust";
import "prismjs/themes/prism.css";

class Language {
  constructor(fullName, abbreviatedName) {
    this.fullName = fullName;
    this.abbreviatedName = abbreviatedName;
  }
  getAbbreviatedName() {
    return this.abbreviatedName;
  }
  getFullName() {
    return this.fullName;
  }
}

const languageList = {
  javascript: new Language("javascript", "JS"),
};
export default languageList;

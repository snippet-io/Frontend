import "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-rust";
import "prismjs/themes/prism.css";

class Language {
  constructor(fullName, extension) {
    this.fullName = fullName;
    this.extension = extension;
  }
  getFileExtension() {
    return this.extension;
  }
  getFullName() {
    return this.fullName;
  }
}

const languageList = {
  Javascript: new Language("javascript", "js"),
  Typescript: new Language("typescript", "ts"),
  Python: new Language("python", "py"),
  Rust: new Language("rust", "rs"),
  Java: new Language("java", "java"),
  Ruby: new Language("ruby", "rb"),
  C: new Language("c", "c"),
  "C++": new Language("c++", "cpp"),
  "C#": new Language("c#", "py"),
};
export default languageList;

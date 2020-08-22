import marked from 'marked';
import katex from 'katex';

class ConData {
  constructor(arg1, arg2) {
    this.__id = null;
    this.__content = null
    this.__html = null;
    this.__title = null;
    if (arg2) {
      this.__initFromCon(arg1, arg2);
    }else{
      this.__parseFromJSON(arg1);
    }
  }
  
  __initFromCon(id, con) {
    this.__id = id;
    this.__content = con;
    const r1 = /^(-{3,})\n((\w+): ([\S\s]*?)\n)+\1\n\n/.exec(con);
    if (r1 != null && r1.length > 1) {
      const lines = r1[0].split("\n");
      const r2 = /^(\w+): (['"]?)([\S\s]*)\2$/;
      const map = new Map();
      let item;
      for (let i = 1; i < (lines.length - 3); i++) {
        item = r2.exec(lines[i]);
        if (item && item.length > 3) {
          map.set(item[1], item[3]);
        }
      }
      if (map.has("title")) {
        this.__title = map.get("title");
      }
      this.__html = this.__process(con.substr(r1[0].length));
    }else{
      this.__html = this.__process(con);
      const r = /<h1[\s\S]*>([\s\S]*)<\/h1>/.exec(this.__html);
      if (r != null && r.length > 1) {
        this.__title = r[1];
      }
    }
  }
  
  __parseFromJSON(data) {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }
    if (!('id' in data && 'con' in data && 'html' in data)) {
      console.log(data);
      throw new Error('invalid ConData json');
    }
    this.__id = data.id;
    this.__content = data.con;
    this.__html = data.html;
    if (data.title) this.__title = data.title;
  }

  __process(source) {
    const tokenizer = new marked.Tokenizer();
    const originalCodespan = tokenizer.codespan;
    tokenizer.codespan = function(src) {
      const match = src.match(/(\$+)([^$\n]+?)\1/);
      if (match) {
        return {
          type: 'html',
          raw: match[0],
          text: katex.renderToString(match[2].trim(), {
            displayMode: match[1] === '$$',
            throwOnError: false
          })
        };
      }
      return originalCodespan.apply(this, arguments);
    };
    return marked(source, { tokenizer });
  }

  getState() {
    const stateVals = {
      id: this.__id,
      con: this.__content,
      html: this.__html,
      title: this.__title
    }
    return stateVals;
  }
  toString() {
    return JSON.stringify(this.getState());
  }

  getHtml() {
    return this.__html;
  }
  getId() {
    return this.__id;
  }
  getSource() {
    return this.__content;
  }
  getTitle() {
    return this.__title;
  }

  static parse(str) {
    return new ConData(str);
  }
}

export default ConData;
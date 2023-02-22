# usage
```javascript
// import {f_generate_readme} from "./f_generate_readme.module.js";
var s_path_file_to_convert = './my_test.js'
await f_generate_readme(s_path_file_to_convert);
```

# generate markdown .md inside your javascript .js code!
```javascript
var s_text = "for example write js like this"
// it will automatically get wrapped inside ```javascript ``` markdown code tags
console.log("That's neat!")
```

but of course you can still add normal markdown, by just prefixing your comment in the code with `//md:`
# sections
ith the tags `//my_path_file_md.md:start` and `//my_path_file_md.md:end` <br>
you can open and close a section in a markdown file <br>
you can start as many files as you want , just dont forget to close them with `//my_path_file_md.md:end` <br>
# usage
## example js file 
my_file.js
```javascript 
// this comment will not be part of any markdown file

//./mds/test.md:start
//md: # test heading
//md: when prefixing with `md:` the prefix will be replaced with ''
//md: <br> so we can write markdown 
// if no 'md:' prefix is present , the content will automatically get wrapped between 
// markdonw javascript codeblock tags
f_demo_function(); 
//./mds/test.md:end

//./mds/test2.md:start

// this javascript part will be ignored in test.md but will be present in test2.md
// because it is not between a :start and :end tag
var s_test = 2;
//./mds/test.md:start
// this will be present in test.md and test2.md
var s_test_between_start_and_end_tag = null 
//./mds/test.md:end
//./mds/test2.md:end
```
## exmaple of generating the markdown file(s)
```javascript
import {f_generate_markdown} from "https://deno.land/x/f_generate_markdown@[version]/mod.ts";
var s_path_file_to_convert = './my_file.js'
await f_generate_markdown(s_path_file_to_convert);

```
## test.md will look like 
<!-- {"s_msg":"this file was automatically generated","s_by":"f_generate_readme.module.js","s_ts_created":"Wed Feb 22 2023 17:20:19 GMT+0100 (Central European Standard Time)","n_ts_created":1677082819393} -->
# test heading
when prefixing with `md:` the prefix will be replaced with ''
<br> so we can write markdown
```javascript
        // if no 'md:' prefix is present , the content will automatically get wrapped between 
        // markdonw javascript codeblock tags
        f_demo_function(); 
        // this will be present in test.md and test2.md
        var s_test_between_start_and_end_tag = null 
```

## test2.md will look like 
<!-- {"s_msg":"this file was automatically generated","s_by":"f_generate_readme.module.js","s_ts_created":"Wed Feb 22 2023 17:20:19 GMT+0100 (Central European Standard Time)","n_ts_created":1677082819394} -->
```javascript

        // this javascript part will be ignored in test.md but will be present in test2.md
        // because it is not between a :start and :end tag
        var s_test = 2;
        // this will be present in test.md and test2.md
        var s_test_between_start_and_end_tag = null 
```

# generate markdown .md inside your javascript .js code!
```javascript
var s_text = "for example write js like this"
// it will automatically get wrapped inside ```javascript ``` markdown code tags
console.log("That's neat!")
```
<!-- {"s_msg":"this file was automatically generated","s_by":"f_generate_readme.module.js","s_ts_created":"Wed Feb 22 2023 17:07:58 GMT+0100 (Central European Standard Time)","n_ts_created":1677082078657} -->
# test heading
```javascript
        // everything between 'start' and 'end' will be written into the file ./mds/test.md
        // if we want to remove the comment prefix 
        // we have to remove the space after the // 
        //# this is a heading
        f_demo_function();

        // this javascript part will be ignored
        var s_test = 2;
        // because it is not between a :start and :end tag

        var s_test_between_start_and_end_tag = null

```
that is all
```javascript
        await f_generate_readme(import.meta.url.split("//").pop());
```
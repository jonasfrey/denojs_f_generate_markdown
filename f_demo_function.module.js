import {f_generate_markdown} from "./f_generate_markdown.module.js";

let f_demo_function = function(){
    console.log("f_demo_function called, this functions does nothing than just print this text lol")
}
if(
    Deno.args[0] == "test"
    &&
    import.meta.main
    ){
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

        await f_generate_markdown(import.meta.url.split("//").pop());
}
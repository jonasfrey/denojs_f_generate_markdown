import {f_generate_readme} from "./f_generate_readme.module.js";

let f_demo_function = function(){
    console.log("f_demo_function called, this functions does nothing than just print this text lol")
}
if(
    Deno.args[0] == "test"
    &&
    import.meta.main
    ){

        //./mds/test.md:start
        //./mds/test2.md:start
        //md: # test heading 
        // everything between 'start' and 'end' will be written into the file ./mds/test.md
        // if we want to remove the comment prefix 
        // we have to remove the space after the // 
        //# this is a heading
        f_demo_function();
        //./mds/test.md:end

        // this javascript part will be ignored
        var s_test = 2;
        // because it is not between a :start and :end tag

        //./mds/test.md:start
        var s_test_between_start_and_end_tag = null
        //./mds/test.md:end

        //md:that is all
        await f_generate_readme(import.meta.url.split("//").pop());
        //./mds/test2.md:end

}
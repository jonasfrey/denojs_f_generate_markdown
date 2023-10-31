import {
    f_generate_markdown
} from "./mod.js"

let s_path = Deno.args[0];
if(!s_path){
    console.log('please provide an argument containing a path to a file')
    console.log('example: deno run -A from_console_argument.js my/file/to/convert.js')
    Deno.exit()
}
let o_stat = await Deno.stat(s_path);
if(o_stat.isFile){
    await f_generate_markdown(s_path);
}
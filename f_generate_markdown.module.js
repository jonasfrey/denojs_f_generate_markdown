import * as o_path from "https://deno.land/std/path/mod.ts";
import { ensureFile } from "https://deno.land/std@0.177.0/fs/mod.ts";

let f_s_file_autogenerated_comment = function(
    s_path_file__generated_by,
){
    var o_date = new Date();
    var o_file_autogenerated = {
        s_msg: `this file was automatically generated`, 
        s_by: s_path_file__generated_by, 
        s_ts_created: o_date.toString(),
        n_ts_created: o_date.getTime()
    }
    return JSON.stringify(o_file_autogenerated);
}

class O_md_file{
    constructor(
        s_path_file
    ){
        this.s_path_file = s_path_file
        this.a_s_line = []
        this.b_js_md_open = false
    }
}

let f_generate_markdown = async function(
    s_path_file__to_convert
){

    var a_o_md_file = [];
    var a_o_md_file_active = [];

    var s_content = await Deno.readTextFile(s_path_file__to_convert);
    var a_s_line = s_content.split("\n")

    for(let n_idx_a_s_line in a_s_line){
        var s_line = a_s_line[n_idx_a_s_line];
        var b_last_line = n_idx_a_s_line == a_s_line.length-1;
        

        var b_md_tag = s_line.includes(".md:");
        var b_md_tag_start = s_line.includes(".md:start")
        var b_md_tag_end = s_line.includes(".md:end")
        if(
            b_md_tag
        ){
            // console.log(s_line)
            var s_line_no_tag = s_line.replace(".md:start", '.md');
            s_line_no_tag = s_line_no_tag.replace(".md:end", '.md');

            var o_path_md = o_path.parse(s_line_no_tag.trim().substring(2));

            // console.log(o_path_md)
            var s_path_file = o_path.format(o_path_md);
            // console.log(s_path_file)

            var o_md_file = a_o_md_file.filter(o=>o.s_path_file == s_path_file)[0]

            if(!o_md_file){
                o_md_file = new O_md_file(
                    s_path_file
                )
                a_o_md_file.push(
                    o_md_file
                )
            }

            if(b_md_tag_end){
                
                var n_idx = a_o_md_file_active.indexOf(o_md_file);
                
                if(n_idx != -1){
                    a_o_md_file_active.splice(n_idx,1)
                }

            }

            if(b_md_tag_start){
                a_o_md_file_active.push(o_md_file)
            }


        }
        // console.log(a_o_md_file_active)
        if(!b_md_tag){

            for(var o_md_file_active of a_o_md_file_active){

                var a_s_line_to_push = []
                var b_md_line = s_line.trim().indexOf("//md:") == 0;

                if(!b_md_line && !o_md_file_active.b_js_md_open){
                    a_s_line_to_push.push('```javascript');
                    o_md_file_active.b_js_md_open = true;
                }
                if(b_md_line && o_md_file_active.b_js_md_open){
                    
                    a_s_line_to_push.push('```');
                    o_md_file_active.b_js_md_open = false
                }

                // var n_idx = s_line.indexOf("//md:");
                var s_line_without_comment_prefix = s_line.replace("//md:", "").trim();
                
                if(b_md_line){
                    a_s_line_to_push.push(s_line_without_comment_prefix)
                }else{
                    a_s_line_to_push.push(s_line)
                }

                o_md_file_active.a_s_line.push(...a_s_line_to_push);

            }
        }


    }

    for(var o_md_file of a_o_md_file){
        if(o_md_file.b_js_md_open){
            o_md_file.a_s_line.push('```');
            o_md_file.b_js_md_open = false;
        }
    }
    

    for(var o_md_file of a_o_md_file){

        // var s_comment_template_markdown_substitute__s_comment = `[comment]: <> (s_comment)`
        var s_comment_template_markdown_substitute__s_comment = `<!-- s_comment -->`
        var s_comment_line = s_comment_template_markdown_substitute__s_comment.replace(
            's_comment',
            f_s_file_autogenerated_comment(import.meta.url.split("/").pop())
        );
        var s_path_file__readme = o_md_file.s_path_file
        var a_s_line = [s_comment_line].concat(o_md_file.a_s_line)
        var s_content_readme = a_s_line.join("\n")
        await ensureFile(s_path_file__readme)
        await Deno.writeTextFile(
            s_path_file__readme, 
            s_content_readme
        );
        // console.log(`${s_path_file__readme}: has been written`)
    }
}

export {
    f_generate_markdown
}
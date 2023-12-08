        // this comment will not be part of any markdown file
        
//./mds/new.md:start
//md: ## new heading
//md: this is a collection of useful functions
//./mds/new.md:end

let f_o_test = function(){
    return {a_v_arg: arguments}
}

let a_o_test = 
    [



f_o_test("f_s_n_beautified", async () => {

    //./mds/new.md:start
    let a = [];
    //./mds/new.md:end

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

        // // // the following is some temporarily commented-out code
        // // // //./mds/test.md:start
        // // // let n = f_n_do_this();
        // // // let n2 = n+n;
        // // // //./mds/test.md:end


        // // // the following is some temporarily commented-out code
        // // // //./mds/new.md:start
        // // // let n = f_n_do_this();
        // // // let n2 = n+n;
        // // // //./mds/new.md:end


        // not part of .md 

        // // // //./mds/new.md:start
        let o = {}
        // // // //./mds/new.md:end

        // asdf 
        //./mds/new.md:start
        let o2 = {}
        //./mds/new.md:end

        // asdf 
        //./mds/new.md:start
        let o3 = {}
        //./mds/new.md:end

    //./mds/new.md:start
    //md: ## test heading
    // asdf 
    let o4 = {}
    //./mds/new.md:end


//./mds/new.md:start
//md: ## test heading
// asdf 
let o5 = {}
//./mds/new.md:end


//./mds/new.md:start
//md: ## new heading
//md: this is a collection of useful functions
//./mds/new.md:end

